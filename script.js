let inputText = document.querySelectorAll("input");
let submitBtn = document.querySelector("#submit-btn");
console.log(submitBtn)
let userBtn = document.querySelector("#user-btn")
let tableData = document.querySelector("table");


let getFormData  = ()=>{
    // get all the values
    let name  = document.querySelector("#name").value;
    let phone  = document.querySelector("#phone").value;
    let email  = document.querySelector("#email").value;
    let pass  = document.querySelector("#pass").value;


    // return a object containing that values
    let dataObject = {
        name: name,
        phone: phone,
        email: email,
        password: pass
    }
    return dataObject;

}


let getLocalStorageData = ()=>{
    let data = localStorage.getItem("contacts") || "[]";
    data = JSON.parse(data);
    return data;
}
let updateLocalStorage = (data)=>{
    localStorage.setItem("contacts",JSON.stringify(data));
}

let showData= ()=>{
    let holder = document.querySelector("#holder");
    let data = getLocalStorageData();
    data.forEach(element => {
        let html = `<tr class="border border-1 border-black">
        <td class="border border-1 border-black table-data">${element.name}</td>
        <td class="border border-1 border-black table-data">${element.email}</td>
        <td class="border border-1 border-black table-data">${element.phone}</td>
        <td class="border border-1 border-black table-data">${element.password}</td>
      </tr>`;
      holder.innerHTML += html;
    });

}
let contactHandler = ()=>{
    let formData = getFormData();
    let storageData = getLocalStorageData()
    storageData.push(formData);
    updateLocalStorage(storageData)
    dataObject.innerHTML = "";

}

submitBtn.addEventListener("click", contactHandler);









