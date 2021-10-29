 document.getElementById("submit").addEventListener("click", best);
 function best(event) {
       event.preventDefault();
       let speed = document.getElementById("speed").value;
       let size = document.getElementById("size").value;
       let speed1 = parseFloat(document.getElementById("speed").value);
       let size1 = parseFloat(document.getElementById("size").value);
       if (speed == "" || size == "") {
            //alert("Please fill all the fields");
            var d = document.getElementById('alert');
            d.innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"> Input can not be empty! Please fill all the fields  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            document.body.scrollTop = document.documentElement.scrollTop = 0;
       }
       else if (speed1<0||size1<0)
       {
           var d = document.getElementById('alert');
           d.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> Input can not be negative! Please fill all the fields properly <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
           document.body.scrollTop = document.documentElement.scrollTop = 0;
           document.getElementById('output').style.display = 'none'
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

document.getElementById("submit").addEventListener("click", best);

function best() {
  let speed = document.getElementById("speed").value;
  let size = document.getElementById("size").value;
  if (speed === "" || size === "") {
    //alert("Please fill all the fields");
    var d = document.getElementById('alert');
    d.innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"> Input can not be empty! Please fill all the fields  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  } else {
    let downloadSpeed = speed;
    let oneGB = parseFloat(1024 / downloadSpeed);
    let oneGBhours = Math.floor(oneGB / 60 / 60);
    let oneGBminutes = Math.floor(oneGB / 60) - oneGBhours * 60;
    let oneGBseconds = Math.round(oneGB % 60, 3);
    var Day = 0;
    var Week = 0;

    if (parseInt(oneGBhours) > 24) Day = parseInt(oneGBhours) / 24;
    if (parseInt(Day) > 7) Week = parseInt(Day) / 7;

    let oneGBTime;
    let minutes;
    minutes = "mins";

    if (parseInt(oneGBminutes) == 1) minutes = `min`;
    oneGBTime = `${oneGBhours}hrs, ${oneGBminutes}${minutes}, ${oneGBseconds}s `;

    if (oneGBhours == 0)
      oneGBTime = `${oneGBminutes}${minutes}, ${oneGBseconds}s `;

    if (Day > 0)
      oneGBTime = `${parseInt(
        Day
      )}days, ${oneGBhours}hrs, ${oneGBminutes}${minutes}, ${oneGBseconds}s `;

    if (parseInt(Day) > 0)
      oneGBTime = `${parseInt(
        Day
      )}days, ${oneGBhours}hrs, ${oneGBminutes}${minutes}, ${oneGBseconds}s `;

    if (parseInt(Week) > 0)
      oneGBTime = `${parseInt(Week)}weeks, ${parseInt(
        Day
      )}days, ${oneGBhours}hrs, ${oneGBminutes}${minutes}, ${oneGBseconds}s `;

    let file = (parseInt(size) * 1024) / downloadSpeed;
    let fileDay =
      Math.floor(file / 60 / 60) > 24 ? Math.floor(file / 60 / 60) / 24 : 0;
    let fileWeek = parseInt(fileDay) > 7 ? fileDay / 7 : 0;
    let fileHours = Math.floor(file / 60 / 60);
    let fileMinutes = Math.floor(file / 60) - fileHours * 60;
    let fileSeconds = Math.round(file % 60, 3);
    let fileTime;
    minutes = "mins";

    if (parseInt(fileMinutes) == 1) minutes = `min`;

    fileTime = `${parseInt(fileWeek)}weeks,
    ${parseInt(fileDay)}days,
    ${fileHours}hrs, 
    ${fileMinutes}${minutes}, 
    ${fileSeconds}s `;

    document.getElementById("output").style.display = "block";

    document.getElementById(
      "download"
    ).innerHTML = `Download speed: ${downloadSpeed}MBps`;

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

