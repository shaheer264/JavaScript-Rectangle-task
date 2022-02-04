
function myfunction() {
    let x = document.getElementById('length').value;
    let y = document.getElementById('Width').value;
    let area = x * y;
    let peri = (x*2) + (y*2);
    document.getElementById('area1').innerHTML="Area is " + area + " sq. mtr.";
    document.getElementById('perimeter1').innerHTML="Perimeter is " + peri + " mtr";
}