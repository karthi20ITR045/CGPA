const input=document.querySelectorAll('input')
const btn = document.querySelector('button')
const form= document.querySelector('.form')
const dis = document.querySelector('.dis')
const h=document.querySelector('h3')
const h1=document.querySelector('h4')
const h2=document.querySelector('h5')
const ul =document.querySelector('ul')
dis.style.display='none';
const list=()=>{
    
}
btn.addEventListener('click',()=>{
    form.style.display='none'
    dis.style.display='block'
    h.textContent=input[0].value;
    h1.textContent=input[1].value;
    for(let i=2;i<5;i++){
        const list = document.createElement('li')
            list.textContent=`SEMESTER ${i-1} : ${input[i].value}`
            ul.append(list)
    }
    let price;
    price=(parseFloat(input[2].value)+parseFloat(input[3].value)+parseFloat(input[4].value))/3;
    h2.append(price.toFixed(2))
})


