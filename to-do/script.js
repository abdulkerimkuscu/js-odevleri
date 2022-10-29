let doList = ["3 Litre Su İç","En Az 3 Saat Kodlama Yap","Yemek Yap"];
let ulListDOM = document.querySelector("#list");

// Listeye item ekleme
doList.forEach(function(item){
    createItem(item);
   
});

// Listeyi check etme ve hepsini sil butonunu çağırma fonkisiyonu 
ulListDOM.addEventListener("click", function(item){

    if(item.target.tagName= "li"){
        item.target.classList.toggle("checked")
    }
    toggleDeleteBTN()

});

// Liste Check olunca hepsini sil butonunun gözükmesi
function toggleDeleteBTN(){
    let checkList = document.querySelectorAll(" .checked")
    if(checkList.length > 0){
        document.querySelector("#deleteAll").classList.remove("d-none")
        
    }
    else{
        document.querySelector("#deleteAll").classList.add("d-none")
    }
}

// Check listin hepsinin silinme fonsiyonu
document.querySelector("#deleteAll").onclick = function(){
   let element = document.querySelectorAll(".checked")
   
   element.forEach(function(item){
    item.remove();
   })
}

// Listeye eleman ekleme ayrıca boş ekleme ve eklendikten sonra uyaarıların gösterilmesi 
document.querySelector("#liveToastBtn").onclick = function(){
    let doList = document.querySelector("#task").value;
    if(doList == ""){
        $(".error").toast("show")
    }
    else{
        $(".success").toast("show")
        createItem(doList)
        document.querySelector("#task").value = "";
    }
    
}

// Listeye eleman ekleme liste içindeki silme butonu eklenmesi ve silme butonun fonsiyonu
function createItem(item){
    // listeye eleman ekleme başlangıcı
    let liDOM = document.createElement("li");
    let text = document.createTextNode(item)
    liDOM.className = "list-group-item"
    liDOM.appendChild(text);
    ulListDOM.appendChild(liDOM);
    // listeye eleman ekleme sonu

    // çarpı butonu ekleme 
    let closeBtn= document.createElement("span");
    let closeText= document.createTextNode("\u00D7");
    closeBtn.className= "close";
    closeBtn.appendChild(closeText);
    liDOM.appendChild(closeBtn);
    // çarpı butonu fonksiyonu
    closeBtn.onclick = function(){
    this.parentElement.remove();
    }

}