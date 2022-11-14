let items;
const inputDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
const btnDOM = document.querySelector("#liveToastBtn");
const delAllBtnDOM = document.querySelector("#deleteAll");
eventListener();
loadItem();




function eventListener() {
    btnDOM.addEventListener("click", addTodo);
    listDOM.addEventListener("click", deleteItem)
    delAllBtnDOM.addEventListener("click", deleteAllItem)
}
function loadItem() {
    items = getItemsFromLS()

    items.forEach((item) => {
        createItems(item)
    });

}


function getItemsFromLS() {
    if (localStorage.getItem("items") === null) {
        items = [];
    }
    else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));
}

function deleteItemFromLS(text) {
    items = getItemsFromLS();

    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    });
    localStorage.setItem("items", JSON.stringify(items));
}

function addTodo() {
    let toDo = inputDOM.value
    if (toDo === "") {
        $(".error").toast("show");
    }
    else {
        $(".success").toast("show");
        createItems(toDo);
        setItemToLS(toDo);

    }


}
function deleteItem(e) {
    if (e.target.className === "close")
        e.target.parentElement.parentElement.remove();

    console.log(e.target.parentElement)
    deleteItemFromLS(e.target.parentElement.parentElement.textContent)
}

listDOM.addEventListener("click", function (item) {

    if (item.target.tagName = "li") {
        item.target.classList.toggle("checked")
    }
    toggleDeleteBTN()


});

function toggleDeleteBTN() {
    let checkList = document.querySelectorAll(" .checked")
    if (checkList.length > 0) {
        document.querySelector("#deleteAll").classList.remove("d-none")

    }
    else {
        document.querySelector("#deleteAll").classList.add("d-none")
    }

}
function deleteAllItem() {
    let element = document.querySelectorAll(".checked")
    
    element.forEach(function (item) {
        item.remove();

    })
    

    delAllBtnDOM.classList.add("d-none")
}

function createItems(text) {

    const liDOM = document.createElement("li");
    listDOM.appendChild(liDOM);
    liDOM.appendChild(document.createTextNode(text));
    inputDOM.value = ""
    // close butonu
    let closeSpan = document.createElement("span");
    let closeBtn = document.createElement("img");
    closeBtn.setAttribute("src", "/icon.svg")
    closeBtn.className = "close";
    liDOM.appendChild(closeSpan);
    closeSpan.appendChild(closeBtn)
}