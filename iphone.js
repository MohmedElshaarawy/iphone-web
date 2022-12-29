let GoldImg = document.getElementById('goldImg');
let blueImg = document.getElementById('blueImg');
let grayImg = document.getElementById('grayImg');
let pinkImg = document.getElementById('pinkImg');
let redImg = document.getElementById('redImg');
let imgContent = document.querySelector('.imgContent img');
let btn = document.getElementById('btn');
let title = document.querySelector('.textContent h2');
let pra = document.getElementById('pra');
let li = document.querySelectorAll('li')


GoldImg.onclick = ()=>{
    document.body.style.background = '#000'
    imgContent.src ='images/0.png'
    title.innerHTML = 'iphone 13 Pro max'
    title.style.color = 'wheat'
    btn.style.background = 'wheat'
    btn.style.color = 'black'



}

blueImg.onclick = ()=>{
    document.body.style.background = 'rgb(53, 124, 211)'
    imgContent.src ='images/1.png'
    title.innerHTML = 'iphone 14 Pro max'
    btn.style.background = 'aqua'
    btn.style.color = 'black'
}

grayImg.onclick = ()=>{
    document.body.style.background = '#555'
    imgContent.src ='images/2.png'
    title.innerHTML = 'iphone 14'
    btn.style.background = 'gray'
    btn.style.color = 'wheat'
}

pinkImg.onclick = ()=>{
    document.body.style.background = 'rgb(206, 189, 156)'
    imgContent.src ='images/3.png'
    title.innerHTML = 'iphone 12 Pro max'
    title.style.color = 'black'
    btn.style.background = 'white'
    btn.style.color = 'black'
    
}
redImg.onclick = ()=>{
    document.body.style.background = 'rgb(179, 30, 30)'
    imgContent.src ='images/4.png'
    title.innerHTML = 'iphone 11 Pro max'
    title.style.color = 'wheat'
    btn.style.background = 'red'
    btn.style.color = 'wheat'
    btn.style.h
    
}