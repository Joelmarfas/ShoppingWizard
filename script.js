// Jose code starts here

function ShowAndHideDiv(form, classElement) {
    var element = document.getElementById(form);
    if (element.className == "display") {
        if (classElement == "hide") {
            element.className = "hide";
        } else {
            element.className = "display";
        }
    } else {
        if (classElement == "show") {
            element.className = "display";
        } else {
            element.className = "hide";
        }
    }
}

var startingMinutes = 1;
var time = startingMinutes * 60;

var countDownElement = document.getElementById("countdown");
setInterval(updateCountdown, 1000);

function updateCountdown() {
    var minutes = Math.floor(time / 60); //Take all seconds and divide by 60 to get the minutes
    var seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownElement.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

redirectURL = "productpage.html";

function TimeOut() {
    location.href = redirectURL;
    (",redirectTime");
    alert(
        "Your session took too long to complete. You will now be redirected to the product page."
    );
}

var i = 0;

function move25() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 15);

        function frame() {
            if (width >= 25) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function move50() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 15);

        function frame() {
            if (width >= 50) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function move75() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 15);

        function frame() {
            if (width >= 75) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function move100() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 15);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function countryCode() {
    var allCodes = document.getElementById("input").value;
    if (allCodes === "The North") {
        var arr = ["+55", "+47"];
    } else if (allCodes === "The Vale") {
        var arr = ["+81"];
    } else if (allCodes === "The Iron Islands") {
        var arr = ["+75"];
    } else if (allCodes === "The Riverlands") {
        var arr = ["+358"];
    } else if (allCodes === "The Westerlands") {
        var arr = ["+221"];
    } else if (allCodes === "The Stormlands") {
        var arr = ["+001"];
    } else if (allCodes === "The Reach") {
        var arr = ["+058"];
    } else if (allCodes === "The Crownlands") {
        var arr = ["+96"];
    } else if (allCodes === "Dorne") {
        var arr = ["+415"];
    }
    var string = "";

    for (i = 0; i < arr.length; i++) {
        string = string + "<option value=" + arr[i] + ">" + arr[i] + "</option>";
    }
    document.getElementById("output").innerHTML = string;
}

// Jose code ends here