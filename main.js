var canvas = document.getElementById('viewport');
context = canvas.getContext('2d');
base_image = new Image();
  base_image.src = 'base.jpg';
  let db = firebase.firestore().collection('Eid');
function make_base(){

    let nameI = document.getElementById('tt').value
    db.add({
        name: nameI});

    document.getElementById('eid-Saeed').style.display = 'block';;
  
//   base_image.width= "100%";
console.log(textInput)
var textInput = document.getElementById('tt').value;


document.getElementById("demo").innerHTML = textInput;


var base_imageH= base_image.height; 
canvas.clientWidth = base_image.width ; 
canvas.clientHeight = base_imageH; 

  // var imgSize = calculateAspectRatioFit(base_image.width, base_image.height, canvas.clientWidth, canvas.clientHeight);


function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {  
  // var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
//   console.log(maxHeight)
  var rtnWidth = srcWidth ;
  var rtnHeight = srcHeight ;
  return {
      width: rtnWidth,
      height: rtnHeight  
  };
//   maxWidth = 634;
}
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(base_image, 0, 0 , canvas.width , canvas.height);
    context.font = 'bold 18px Tajawal';
    context.textAlign = 'end';
    context.fillStyle = "#dc3545"; 
    context.fillText(textInput, 40, 348);
}
// make_base();


// File



function handleFile(e) {
  //Get the files from Upload control
     var files = e.target.files;
     var i, f;
  //Loop through files
     for (i = 0, f = files[i]; i != files.length; ++i) {
         var reader = new FileReader();
         var name = f.name;
         reader.onload = function (e) {
             var data = e.target.result;

             var result;
             var workbook = XLSX.read(data, { type: 'binary' });
             
             var sheet_name_list = workbook.SheetNames;
             sheet_name_list.forEach(function (y) { /* iterate through sheets */
                 //Convert the cell value to Json
                 var roa = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                 if (roa.length > 0) {
                     result = roa;
                 }
             });
            //Get the result
             console.log(result);
         };
         reader.readAsArrayBuffer(f);
     }
 }

//Change event to dropdownlist
$(document).ready(function(){
 $('#files').change(handleFile);
});
