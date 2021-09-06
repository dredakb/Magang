// let h1=document.querySelector('#heading')
// // h1.innerHTML="Hello World"
// h1.addEventListener("click",function(){
//     h1.innerHTML="innerFunction"
// })
const iframe=document.querySelector('#iframe')
iframe.addEventListener("click",function(){
    let src=document.querySelector('#iframe').getAttribute('src').value
    console.log(src)
})