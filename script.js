let copirightYear =
       `
        <p class="text-lg">All Right Reserved &copy; BUP, ${new Date().getFullYear()}</p>
       ` 
       document.getElementById('copiright-year').innerHTML = copirightYear


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {document.getElementById("myDropdown").classList.toggle("show");}
function myFunction1() {document.getElementById("myDropdown1").classList.toggle("show");}
function myFunction2() {document.getElementById("myDropdown2").classList.toggle("show");}
function myFunction3() {document.getElementById("myDropdown3").classList.toggle("show");}
function myFunction4() {document.getElementById("myDropdown4").classList.toggle("show");}


// Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
// if (!e.target.matches('.dropbtn')) {
// var myDropdown = document.getElementById("myDropdown");
//        if (myDropdown.classList.contains('show')) {
//        myDropdown.classList.remove('show');
//        }
// }
// }
