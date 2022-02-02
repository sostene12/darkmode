const darkSwitch = document.querySelector('.dark-switch');
const lightSwitch = document.querySelector('.light-switch');
const body = document.querySelector('body');

// darkSwitch.addEventListener('click',function(e){
//     body.classList.add('dark-mode');
// })

//condition for darkmode if true
if(localStorage.getItem("darkmode")){
    body.classList.add("dark-mode");
    darkSwitch.classList.remove('active');
    lightSwitch.classList.add('active')
}


darkSwitch.addEventListener('click',()=>{
    body.classList.add('dark-mode');
    darkSwitch.classList.remove('active');
    lightSwitch.classList.add('active');
    // making it stay in darkmode even if we reflesh
    localStorage.setItem("darkmode","true")
});
lightSwitch.addEventListener('click',()=>{
    body.classList.remove('dark-mode');
    darkSwitch.classList.add('active');
    lightSwitch.classList.remove('active');
    //removing it from dark mode even if we reflesh
    localStorage.removeItem("darkmode");
});