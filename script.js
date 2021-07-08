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

// The data/time we want to countdown to
var countDownDate = new Date("Jul 25, 2021 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {
    // set interval calls the date and puts it in miliseconds
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the minutes and seconds left
    var minutes = Math.floor((timeleft % (250 * 60 * 60)) / (1000 * 60));
    //var seconds = Math.floor((timeleft % (60 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("mins").innerHTML = minutes + " " + "minutes ";
    document.getElementById("secs").innerHTML = minutes + " " + "seconds ";

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("mins").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
        document.getElementById("end").innerHTML =
            "Time is up! You will now be redirected to the product page";
    }
}, 1000);

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

/*allCodes.onchange = function myCountryCode() {
                var myCountryCode = [];
                switch (myCountryCode) {
                    case "Stark";
                    countryCode = "+34";
                    break;*/