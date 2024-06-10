let text1 = document.getElementById("input")
let btn = document.getElementById("btn")
let ul = document.getElementById("uli")
 

btn.addEventListener("click",()=>{
    let li = document.createElement("li")
    li.innerText= text1.value
    let edit = document.createElement("button")
    edit.innerText="edit"
    edit.onclick=()=>{
        let new1 = prompt("Enter new item")
        li.textContent=new1
        li.append(del)
        li.append(edit)
    }

    let del = document.createElement("button")
    del.innerText="del"
    del.onclick =()=>{
        li.remove()
    }
    
    li.append( del)
    li.append( edit)


    ul.append(li)
    text1.value= ""
    console.log(del);
})
