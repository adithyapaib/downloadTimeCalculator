 document.getElementById("submit").addEventListener("click", best);
 function best(event) {
       event.preventDefault();
       let speed = document.getElementById("speed").value;
       let size = document.getElementById("size").value;
       if (speed == "" || size == "") {
             alert("Please fill all the fields");
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
           document.getElementById("Calculate").style.background = '#000000'
           document.getElementById("Calculate").style.color = '#FFFFFF'
           document.getElementById("Calculate").style.padding = '24px'
           document.getElementById("Calculate").style.borderRadius = '12px'
           console.log(oneGBTime);
           console.log(fileTime)
     }
  }