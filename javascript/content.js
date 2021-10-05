var popup_toggle = localStorage.getItem("toggle_status");
if (popup_toggle === null) {
    popup_toggle = 'false'
}

var oldURL = sessionStorage.getItem("oldURL");
var newURL = sessionStorage.getItem("newURL");
if (popup_toggle == 'true') {
    if (oldURL === null && newURL === null) { 
        oldURL = "";
        newURL = "";
        var w = window.open('', "_overleave");
    }
    else {
        oldURL = oldURL;
        newURL = newURL;
        var w = window.open(newURL, "_overleave");
    }
}

window.onload = function() {
    var oldURL = sessionStorage.getItem("oldURL");
    var newURL = sessionStorage.getItem("newURL");
    var popup_toggle = localStorage.getItem("toggle_status");
    localStorage.setItem("toggle_status",popup_toggle);

    if (oldURL === null && newURL === null) { 
        oldURL = "";
        newURL = "";
    }
    else {
        oldURL = oldURL;
        newURL = newURL;
    }
}

window.onbeforeunload = function() {
    var popup_toggle = localStorage.getItem("toggle_status");
    localStorage.setItem("toggle_status",popup_toggle);
    sessionStorage.setItem("oldURL", oldURL);
    sessionStorage.setItem("newURL",newURL);
}

function updateWindow(elem) {
    newURL = elem.href.slice(0, -19);
    if (newURL !== oldURL) {
        oldURL = newURL;
        if (popup_toggle == 'true') {
            w.location.replace(newURL);
        }
    }
}

function waitForBuild() {
    return new Promise(function (resolve, reject) {
        var counter = 0;

        var checkExist = setInterval(function () {
            counter += 1;
            if (counter > 250) {
                clearInterval(checkExist);
            }

            const matches = document.body.getElementsByTagName("a");
            
            for (const match of matches) {
                let url = JSON.stringify(match.href);
                if (url.includes("build") && url.includes("pdf") && url.includes("download")) {
                    clearInterval(checkExist);
                    updateWindow(match); 
                    resolve(match);
                    console.log("updating condition by pattern match")
                    break;
                }
            }

        }, 500);
    });
}

waitForBuild().then((elem) => {

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type == "attributes") {
                updateWindow(elem);
            }
        });
    });

    observer.observe(elem, {
        attributes: true
    });

}).catch(err => {
    //TODO(shreyashankar): do something better here
    console.log(err);
});