let ganador = false;
let ganid;
// function ganar(ganid) {
//     // window.alert(ganid);
//     if (!ganador){
//         ganador = true;
//         // ganid = cabid
//         window.alert(ganid);
//     }
// }
function carrera() {
    let caballo;
    let temp;
    let cabid;
    let result;
    // let posx;
    // let rect;
    const animfun = ["linear", "ease", "ease-in", "ease-out", "ease-in-out"];
    // caballo = document.getElementById("cab3");
    // window.alert(caballo);
    // caballo.classList.add("corredor");
    for (let i = 1; i < 6; i++) {
        cabid = "cab" + i
        caballo = document.getElementById(cabid);
        caballo.classList.add("corredor");
        temp = Math.floor(Math.random() * 6);
        caballo.classList.add(animfun[temp]);
        temp = Math.floor(Math.random() * (60 - 30) + 30)/10 + "s";
        caballo.style.setProperty('--animtime', temp);
        // if (!ganador){
        //    ganid = cabid
        // }
        // caballo.addEventListener('animationend', ganar);
        // anima = document.querySelector(".corredor");
        // anima.onanimationend(ganar);
        caballo.addEventListener("animationend", (winner) => {
            if (!ganador){
                ganid = winner.target.id;
                ganador = true;
                resultado(ganid);
                
            }
        });
    }
}
function resultado(vitid) {
    result = document.getElementById("resultado");
    result.innerHTML = "tu Madre";
    result.style.setProperty('--gancol', "blue");
    // window.alert(vitid);
    switch (vitid) {
        case "cab1":
            result.innerHTML = "Red";
            result.style.setProperty('--gancol', "red");
            break;
        case "cab2":
            result.innerHTML = "Yellow";
            result.style.setProperty('--gancol', "yellow");
            break;
        case "cab3":
            result.innerHTML = "Pink";
            result.style.setProperty('--gancol', "pink");
            break;
        case "cab4":
            result.innerHTML = "Purple";
            result.style.setProperty('--gancol', "purple");
            break;
        case "cab5":
            result.innerHTML = "Blue";
            result.style.setProperty('--gancol', "blue");
            break;
    }
}
    // rect = caballo.getBoundingClientRect();
    // posx = rect.left;
    // // window.alert(posy);
    // while (posx <= 28) {
    //     rect = caballo.getBoundingClientRect();
    //     posx = rect.left;
    //     // window.alert("hola mundo");
    // }