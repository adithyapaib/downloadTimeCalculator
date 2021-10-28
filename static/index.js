lightmode();
var darkmodeactive = "False";

  function darkmode() {
    if(darkmodeactive == "False"){
        document.getElementById('toggle').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>`
     darkmodeactive = "True";
     
     
     document.body.style.backgroundColor = "#02112b";
     document.body.style.color = "rgb(5,5,10)";
        document.getElementById('submit').setAttribute('id', 'submit-dark');
    
    }
    else{
        lightmode();
    }
}
function lightmode(){
    document.getElementById('toggle').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
       <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
     </svg>`
      
    darkmodeactive = "False";
    document.body.style.backgroundColor = "rgb(147,206,247)";
    document.body.style.color = "black";
    document.getElementById('submit-dark').setAttribute('id', 'submit');
  
}



document.getElementById("submit").addEventListener("click", best);
    function best(event) {
        event.preventDefault();
        let speed = document.getElementById("speed").value;
        let size = document.getElementById("size").value;
        let speed1 = parseFloat(document.getElementById("speed").value);
        let size1 = parseFloat(document.getElementById("size").value);
        if (speed == "" || size == "") {
            alert("Please fill all the fields");
        }
        else if (speed1 < 0 || size1 < 0) {
            var d = document.getElementById('alert');
            d.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> Input can not be negative! Please fill all the fields properly <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        else {
            let downloadSpeed = speed;
            let oneGB = parseFloat(1024 / downloadSpeed);
            let oneGBhours = Math.floor(oneGB / 60 / 60);
            let oneGBminutes = Math.floor(oneGB / 60) - (oneGBhours * 60);
            let oneGBseconds = Math.round(oneGB % 60, 3);
            let oneGBTime;
            let minutes;
            minutes = 'mins';
            if (parseInt(oneGBminutes) == 1)
                minutes = `min`
            oneGBTime = `${oneGBhours}hrs, ${oneGBminutes}${minutes}, ${oneGBseconds}s `
            if (oneGBhours == 0)
                oneGBTime = `${oneGBminutes}${minutes}, ${oneGBseconds}s `
            let file = (parseInt(size) * 1024) / downloadSpeed;
            let fileHours = Math.floor(file / 60 / 60);
            let fileMinutes = Math.floor(file / 60) - (fileHours * 60);
            let fileSeconds = Math.round(file % 60, 3);
            let fileTime;
            minutes = 'mins';
            if (parseInt(fileMinutes) == 1)
                minutes = `min`
            fileTime = `${fileHours}hrs, ${fileMinutes}${minutes}, ${fileSeconds}s `;
            document.getElementById('output').style.display = 'block'
            document.getElementById("download").innerHTML = `Download speed: ${downloadSpeed}MBps`;
            document.getElementById("sent").innerHTML = `Approximate time required to download`;
            document.getElementById("onespeed").innerHTML = `1 GB file: ${oneGBTime}`;
            document.getElementById("filespeed").innerHTML = `${size}GB file: ${fileTime}`;
            document.getElementById("reload").innerHTML = `<br><br><button id="Calculate" onclick="document.location='index.html'">CALCULATE NEW</button>`;
            document.getElementById("output").style.background = '#07C962'
            console.log(oneGBTime);
            console.log(fileTime)
        }
    }


    document.getElementById("submit").addEventListener("click", best);

    function best() {
        let speed = document.getElementById("speed").value;
        let size = document.getElementById("size").value;
        let speed1 = parseFloat(document.getElementById("speed").value);
        let size1 = parseFloat(document.getElementById("size").value);
        // Added different units of speed
        let type = document.getElementById("unit").value || "mbps";
        // console.log(type);
        if (speed == "" || size == "") {
            alert("Please fill all the fields");
        } else if (speed1 < 0 || size1 < 0) {
            var d = document.getElementById('alert');
            d.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> Input can not be negative! Please fill all the fields properly <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            document.getElementById('output').style.display = 'none'
        }
        else {
            let downloadSpeed = 0;
            if (type == "mbps") {
                downloadSpeed = speed * 125;
            } else if (type == "mbs") {
                downloadSpeed = speed * 1000;
            } else if (type == "kbs") {
                downloadSpeed = speed;
            }
            let oneGBtoKB = 1000000;
            let oneGBTimeinSec = oneGBtoKB / downloadSpeed;
            var d = Math.floor(oneGBTimeinSec / (3600 * 24));
            var h = Math.floor(oneGBTimeinSec % (3600 * 24) / 3600);
            var m = Math.floor(oneGBTimeinSec % 3600 / 60);
            var s = Math.floor(oneGBTimeinSec % 60);

            oneGBTime = `${parseInt(d)}days,
     ${h}hrs, 
     ${m}min, 
     ${s}s `;

            let fileTimeinSec = (size * oneGBtoKB) / downloadSpeed;
            var d = Math.floor(fileTimeinSec / (3600 * 24));
            var h = Math.floor(fileTimeinSec % (3600 * 24) / 3600);
            var m = Math.floor(fileTimeinSec % 3600 / 60);
            var s = Math.floor(fileTimeinSec % 60);

            fileTime = `${parseInt(d)}days,
     ${h}hrs, 
     ${m}min, 
     ${s}s `;

            document.getElementById("output").style.display = "block";

            document.getElementById(
                "download"
            ).innerHTML = `Download speed: ${downloadSpeed}KBps`;

            document.getElementById(
                "sent"
            ).innerHTML = `Approximate time required to download`;

            document.getElementById("onespeed").innerHTML = `1 GB file: ${oneGBTime}`;

            document.getElementById(
                "filespeed"
            ).innerHTML = `${size}GB file: ${fileTime}`;

            document.getElementById(
                "reload"
            ).innerHTML = `<br><br><a href="index.html"><button id="calculate">CALCULATE NEW</button></a>`;

            document.getElementById("output").style.background = "#42a4eb";
            document.getElementById("output").style.background = "#07C962";
            console.log(oneGBTime);
            console.log(fileTime);
        }
    }
