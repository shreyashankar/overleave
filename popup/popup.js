toggle_status=localStorage.getItem("toggle_status");
console.log("initial toggle status")
console.log(toggle_status)

const toggle_element = document.getElementById("input");
if ((toggle_status===null)||(toggle_status=='false')) {
    toggle_status='false'
    toggle_element.checked=""
}
else {
  toggle_element.checked=toggle_status
}

document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById("checkbox").addEventListener('click', onclick, false)

    function onclick () {
      
      chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'testing toggle click')
            toggle_status=localStorage.getItem("toggle_status");
            if (toggle_status=='false') {
              localStorage.setItem("toggle_status",'true');
            }
            else {
              localStorage.setItem("toggle_status",'false');
            }
      })
    }
  }, false)