chrome.runtime.onMessage.addListener(function(request) {
    if (request=='true') {
        localStorage.setItem("toggle_status", 'true');
    }
    if (request=='false') {
        localStorage.setItem("toggle_status", 'false');
    }
    if (request=='projects') {
        window.open("https://www.overleaf.com/project", "_self");
    }
    if (request=='new_project') {
        window.open("https://www.overleaf.com/docs?snip_uri=https://production-overleaf-static.s3.amazonaws.com/examples/helloworld.tex", "_blank")
    }
})