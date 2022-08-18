 let localarr = [] ; 
addList =()=>{
    const value = document.getElementById("input").value;
    if(value == ""){
        alert("please enter value in the box");
    }else{
    document.getElementById("input").value = '';
    let target = document.getElementById("list");
    let list = document.createElement("li");
    var text = document.createTextNode(value);
    list.appendChild(text);
    target.appendChild(list);
    let edit = document.createElement("span");
    edit.innerHTML = "<i class='fa-solid fa-pen'></i>";
    edit.classList.add("edit");
    let div = document.createElement("div");
    let del = document.createElement("span");
    del.innerHTML = "<i class='fa-solid fa-trash'></i>";
    del.classList.add("del");
    div.appendChild(edit);
    div.appendChild(del);
    div.classList.add("settingdiv");
    list.appendChild(div);
    delList();
    editList();

    localarr.push(value);
    localStorage.setItem("stored",JSON.stringify(localarr));
}
}
delList = () => {
    let li = document.getElementsByClassName("del");
    for(let i=0;i<li.length;i++){
    li[i].onclick = function(){
    var parentEle = this.parentElement.parentElement;
    let arrayw = localStorage.getItem("stored");
    let localData= JSON.parse(arrayw);
    localData.splice(i,1);
    console.log(i,localData);
    localStorage.setItem("stored",JSON.stringify(localData));
    localarr = localData;
    parentEle.remove();
        }
    }
}

editList = () => {
    let liEdit = document.getElementsByClassName("edit");
    for(let i=0;i<liEdit.length;i++){
    liEdit[i].onclick = function(){
    var parentEle = this.parentElement.parentElement;
        parentEle.innerHTML = `<div id='special'> <input id='edited' type='text' value=${parentEle.innerText}><button id='start'>Save</button></div>`;
        let startButton = document.getElementById("start");
        startButton.addEventListener("click",() => editFunction(parentEle,i)); 
    }
    }
}
editFunction =(list,i)=>{
    let target = document.getElementById("edited").value;
    let text = document.createTextNode(target);
    let edit = document.createElement("span");
    let div = document.createElement("div");
    let del = document.createElement("span");
    edit.innerHTML = "<i class='fa-solid fa-pen'></i>";
    edit.classList.add("edit");
    del.innerHTML = "<i class='fa-solid fa-trash'></i>";
    del.classList.add("del");
    list.innerHTML='';
    list.appendChild(text);
    div.appendChild(edit);
    div.appendChild(del);
    div.classList.add("settingdiv");
    list.appendChild(div);
        delList();
        editList();

        let arrayw = localStorage.getItem("stored");
        let localData= JSON.parse(arrayw);
        localData.splice(i,1,target);
        console.log(i,localData);
        localStorage.setItem("stored",JSON.stringify(localData));
        localarr = localData;
}





    oNLOAD = () =>{
        let arrayw = localStorage.getItem("stored");
        let localData= JSON.parse(arrayw);
        if(localData ===null){
        }else{
        localarr = localData;
        }
        for (const index in localData) {
            let target = document.getElementById("list");
            let list = document.createElement("li");
            var text = document.createTextNode(localData[index]);
            list.appendChild(text);
            target.appendChild(list);
            let edit = document.createElement("span");
            edit.innerHTML = "<i class='fa-solid fa-pen'></i>";
            edit.classList.add("edit");
            let div = document.createElement("div");
            let del = document.createElement("span");
            del.innerHTML = "<i class='fa-solid fa-trash'></i>";
            del.classList.add("del");
            div.appendChild(edit);
            div.appendChild(del);
            div.classList.add("settingdiv");
            list.appendChild(div);
            delList();
            editList();
        }
    }

    oNFOCUS = (element) => {
        element.style.background = "rgb(216, 216, 216)";
    }
    oNBLUR = (element) => {
        element.style.background = "white";
    }
let button = document.getElementById("btn");
button.addEventListener("click",addList);


