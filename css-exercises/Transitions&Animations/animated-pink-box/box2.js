//pause animation
document.querySelector(".box").addEventListener('click',function(){
    this.classList.toggle('is-paused');
    console.log("paused")
})
document.querySelector('html').addEventListener('click',function(){
    const div=document.createElement('div');
    div.classList.add('box');
    this.appendChild(div)
})