const btn=document.querySelector('button')
const select = document.querySelectorAll('select')
const input=document.querySelectorAll('input')
const dis = document.querySelector('.dis')
let gpa=0,total =0;
const h=document.querySelector('h3')
const h1=document.querySelector('h4')

const info = document.querySelector('info')
dis.style.display='none'
btn.addEventListener("click",()=>{
    dis.style.display='block'
    for(let i=0;i<5;i++){
        total+=parseInt(input[i].value)
        gpa+=parseInt(input[i].value) * parseInt(select[i].value);
    }
    let result=gpa/total
    console.log(total,gpa,gpa/total)  
    h.textContent=`Credits Earned: ${total}`;
    h1.textContent=`GPA : ${result.toFixed(2)}`
   
      
})
