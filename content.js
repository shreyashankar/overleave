// var oldURL = sessionStorage.getItem("oldURL");
// var newURL = sessionStorage.getItem("newURL");
//     if (oldURL === null && newURL === null) { 
//         oldURL="";
//         newURL="";
//         var w = window.open('', "_overleave");
//     }
//     else {
//         oldURL = oldURL;
//         newURL = newURL;
//         var w = window.open(newURL, "_overleave");
//     }

// window.onload = function() {
//     var oldURL = sessionStorage.getItem("oldURL");
//     var newURL = sessionStorage.getItem("newURL");
//     if (oldURL === null && newURL === null) { 
//         oldURL="";
//         newURL="";
//     }
//     else {
//         oldURL = oldURL;
//         newURL = newURL;
//     }
// }

// window.onbeforeunload = function() {
//     sessionStorage.setItem("oldURL", oldURL);
//     sessionStorage.setItem("newURL",newURL);
// }

// function updateWindow(elem) {
//     newURL = elem.href.slice(0, -19);
//     if (newURL !== oldURL) {
//         oldURL = newURL;
//         w.location.replace(newURL);
//     }
// }

// function waitForBuild() {
//     return new Promise(function (resolve, reject) {
//         var counter = 0;

//         var checkExist = setInterval(function () {
//             counter += 1;
//             if (counter > 100) {
//                 clearInterval(checkExist);
//             }

//             const matches = document.body.getElementsByTagName("a");
            
//             for (const match of matches) {
//                 let url = JSON.stringify(match.href);
//                 if (url.includes("build") && url.includes("pdf") && url.includes("download")) {
//                     clearInterval(checkExist);
//                     updateWindow(match);
//                     resolve(match);
//                     break;
//                 }
//             }

//         }, 250);
//     });
// }

// waitForBuild().then((elem) => {

//     var observer = new MutationObserver(function (mutations) {
//         mutations.forEach(function (mutation) {
//             if (mutation.type == "attributes") {
//                 updateWindow(elem);
//             }
//         });
//     });

//     observer.observe(elem, {
//         attributes: true
//     });

// }).catch(err => {
//     //TODO(shreyashankar): do something better here
//     console.log(err);
// });

chrome.runtime.onMessage.addListener(function(request) {
    console.log(request)
})