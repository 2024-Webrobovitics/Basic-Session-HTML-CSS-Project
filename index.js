const idElement=document.getElementById("three");
const classElements=document.getElementsByClassName("two");
const heading=document.getElementsByTagName("h1");

const classArray=Array.from(classElements);

idElement.style.backgroundColor="yellow";

classArray.forEach((c)=>{
    c.style.backgroundColor="red";
})

classArray[0].classList.add("invisible");
classArray[0].classList.remove("invisible");

idElement.innerHTML="<p>Hello World</p><a href='#'>Link</a>";

idElement.querySelector("a").setAttribute("href","https://www.google.com/")

const arr=Array.from(heading);
arr[0].textContent="Hello Nipun";

idElement.addEventListener("click",function(){
    classArray[2].style.backgroundColor="violet";
    classArray[1].classList.toggle("invisible");
})

const newClassArray=document.querySelectorAll(".one");
newClassArray.forEach((c)=>{
    c.addEventListener("click",function(){
        c.textContent="Hello World";
    })
})

document.addEventListener("keypress",function(event){
    if(event.key=='k'){
        document.querySelector(".one").style.backgroundColor="green";
    }
})