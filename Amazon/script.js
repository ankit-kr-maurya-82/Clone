function myfunction(){
    let element = document.querySelectorAll(".panel");
    element.classList.toggle("dark-mode")
}


const loader = document.querySelector('.loader_container')
    
window.onload = () => {
setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000); // Wait for opacity transition
}, 1500);
};