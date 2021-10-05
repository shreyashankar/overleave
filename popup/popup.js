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
    
    document.getElementById("checkbox").addEventListener('click', onclick_checkbox, false)
    document.getElementById("button_1").addEventListener('click', onclick_left, false)
    document.getElementById("button_2").addEventListener('click',onclick_right,false)

    function onclick_checkbox () {
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

    function onclick_left () {
      chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'new_project')
      })
    }

    function onclick_right () {
      chrome.tabs.query({currentWindow: true, active: true}, 
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'projects')
      })
    }
  }, false)