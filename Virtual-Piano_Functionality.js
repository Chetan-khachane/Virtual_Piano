document.addEventListener("keypress",function(event){
    if(event.code=="KeyA")
    {
        console.log("The 'A' key is pressed.");
        let audio = new Audio("white_keys/A.mp3");
        audio.play();
        document.getElementById("whead").style.backgroundColor="gray";
        document,addEventListener("keyup",function () {
            document.getElementById("whead").style.backgroundColor="white";
        });
    }
    else if(event.code=="KeyS")
    {
        console.log("The 'S' key is pressed.");
        let audio = new Audio("white_keys/S.mp3");
        audio.play();
        document.getElementById("w1").style.backgroundColor="gray";
        document,addEventListener("keyup",function () {
            document.getElementById("w1").style.backgroundColor="white";
        });
    }

    else if(event.code=="KeyD")
    {
        console.log("The 'D' key is pressed.");
        let audio = new Audio("white_keys/D.mp3");
        audio.play();
        document.getElementById("w2").style.backgroundColor="gray";
        document,addEventListener("keyup",function () {
            document.getElementById("w2").style.backgroundColor="white";
        });
    }

    else if(event.code=="KeyF")
    {
        console.log("The 'F' key is pressed.");
        let audio = new Audio("white_keys/F.mp3");
        audio.play();
        document.getElementById("w3").style.backgroundColor="gray";
        document,addEventListener("keyup",function () {
            document.getElementById("w3").style.backgroundColor="white";
        });
    }

    else if(event.code=="KeyG")
    {
        console.log("The 'G' key is pressed.");
        let audio = new Audio("white_keys/G.mp3");
        audio.play();
        document.getElementById("w4").style.backgroundColor="gray";
        document,addEventListener("keyup",function () {
            document.getElementById("w4").style.backgroundColor="white";
        });
    }

    else if(event.code=="KeyH")
    {
        console.log("The 'H' key is pressed.");
        let audio = new Audio("white_keys/H.mp3");
        audio.play();
        document.getElementById("w5").style.backgroundColor="gray";
        document,addEventListener("keyup",function () {
            document.getElementById("w5").style.backgroundColor="white";
        });
    }

    else if(event.code=="KeyJ")
    {
        console.log("The 'J' key is pressed.");
        let audio = new Audio("white_keys/J.mp3");
        audio.play();
        document.getElementById("w6").style.backgroundColor="gray";
        document,addEventListener("keyup",function () {
            document.getElementById("w6").style.backgroundColor="white";
        });
    }
    else if(event.code=="KeyW")
    {
        console.log("The 'W' key is pressed.");
        let audio = new Audio("black_keys/W.mp3");
        audio.play();
        document.getElementById("b1").style.backgroundColor="cyan";
        document,addEventListener("keyup",function () {
            document.getElementById("b1").style.backgroundColor="black";
        });
    }

    else if(event.code=="KeyE")
    {
        console.log("The 'E' key is pressed.");
        let audio = new Audio("black_keys/E.mp3");
        audio.play();
        document.getElementById("b2").style.backgroundColor="cyan";
        document,addEventListener("keyup",function () {
            document.getElementById("b2").style.backgroundColor="black";
        });
    }

    else if(event.code=="KeyT")
    {
        console.log("The 'T' key is pressed.");
        let audio = new Audio("black_keys/T.mp3");
        audio.play();
        document.getElementById("b3").style.backgroundColor="cyan";
        document,addEventListener("keyup",function () {
            document.getElementById("b3").style.backgroundColor="black";
        });
    }

    else if(event.code=="KeyY")
    {
        console.log("The 'Y' key is pressed.");
        let audio = new Audio("black_keys/Y.mp3");
        audio.play();
        document.getElementById("b4").style.backgroundColor="cyan";
        document,addEventListener("keyup",function () {
            document.getElementById("b4").style.backgroundColor="black";
        });
    }

    else if(event.code=="KeyU")
    {
        console.log("The 'U' key is pressed.");
        let audio = new Audio("black_keys/U.mp3");
        audio.play();
        document.getElementById("b5").style.backgroundColor="cyan";
        document,addEventListener("keyup",function () {
            document.getElementById("b5").style.backgroundColor="black";
        });
    }
    else
    {
        console.warn("invalid key pressed.");
    }
});