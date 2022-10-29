let userName = document.querySelector("#myName")
let promptName = prompt("Lütfen İsminizi Giriniz");


userName.innerHTML = promptName;




function showTime(){
    let date = new Date();
    let hour = date.getHours(); 
    let min = date.getMinutes(); 
    let sec = date.getSeconds(); 
    let session = "AM";
    
    
    if(hour == 0){
        hour = 24;
    }
    
    if(hour > 24){
        hour = hour - 24;
        session = "AM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const d = new Date();
    let day = weekday[d.getDay()];

    let time = hour + ":" + min + ":" + sec + " " + day;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

