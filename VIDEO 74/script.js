let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", ()=>{
    // alert("I was Clicked. Yayy !!!!!")
    document.querySelector(".box").innerHTML = "<b>Yayy you were Clicked</b> Enjoy your Click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right Click Please")
})

document.addEventListener("keydown", (i)=>{
   console.log(i, i.key, i.keyCode)
})