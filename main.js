var partija;

function okretanje(){

    partija= Math.floor(Math.random()*6) + 1;

    if(partija==1){
        document.getElementById("slika").src="img/1.png";
    }else if(partija==2) {
        document.getElementById("slika").src="img/2.png";
    }else if (partija==3){
        document.getElementById("slika").src="img/3.png";
    }else if(partija==4) {
        document.getElementById("slika").src="img/4.png";
    }else if(partija==5){
        document.getElementById("slika").src="img/5.png";
    }else if(partija==6){
        document.getElementById("slika").src="img/6.png";
    }
}
function okretanje1(){

    partija= Math.floor(Math.random()*6) + 1;

    if(partija==1){
        document.getElementById("slika1").src="img/1.png";
    }else if(partija==2) {
        document.getElementById("slika1").src="img/2.png";
    }else if (partija==3){
        document.getElementById("slika1").src="img/3.png";
    }else if(partija==4) {
        document.getElementById("slika1").src="img/4.png";
    }else if(partija==5){
        document.getElementById("slika1").src="img/5.png";
    }else if(partija==6){
        document.getElementById("slika1").src="img/6.png";
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function kocka() {
    for(let i=1; i<7; i++){
        await sleep(100);
        okretanje();
        okretanje1();
    }
}