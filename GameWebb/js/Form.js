function hej() {
    alert("Tack För Inskickad Formulär");
    document.getElementById("Submit").style.display = "block";
}

function Genre(that) {
    if (that.value === "FPS") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
    if (that.value === "RPG") {
        document.getElementById("ifNo").style.display = "block";
    }else {
        document.getElementById("ifNo").style.display = "none";
    }
    if (that.value === "RTS") {
        document.getElementById("ifY").style.display = "block";
    }else {
        document.getElementById("ifY").style.display = "none";
    }
}

