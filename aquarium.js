window.onload=function() {
	lengthObj = document.getElementById('txtLength');
	height = document.getElementById('txtGirth');
    width = document.getElementById('tdWeight');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calcWeight;
}

function resetInputs() {
    lengthObj.value = '';
    height.value = '';
    width.innerHTML
}
function calcWeight() {
     var length = new Number(lengthObj.value);
     var height = new Number(girthObj.value);
     width.innerHTML = '';
     if(isNaN(length) || isNaN(girth)) {
     alert('Invalid length or width');
     return;
}
height.innerHTML = length*Math.pow(width,2)/800;
