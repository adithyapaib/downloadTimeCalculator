var darkmodeactive = "False";
  function darkmode() {
    if(darkmodeactive == "False"){
        darkmodeactive = "True";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "rgb(5,5,10)";
        document.getElementById('submit').setAttribute('id', 'submit-dark');
        document.body.classList.toggle("dark");
    
      }
    else{
        lightmode();
    }
  }
  function lightmode(){
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