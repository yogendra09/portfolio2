



var crsr = document.querySelector("#cursor");

window.addEventListener("mousemove",function(dets){
       crsr.style.top = `${dets.pageY}`+"px";
       crsr.style.left = `${dets.pageX}`+"px";
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
    
});