'use strict';

console.log('JavaScript is running.');


    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function dropDownFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunction() {
      var x = document.getElementById("myLinks");
      var y = document.getElementById("saucyBoySidenav");
      if (x.style.display === "block") {
        x.style.display = "none";

      } else {
        y.style.width="12rem";
        /*document.getElementById("overlay").style.display = "block";*/
      }
    }

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("saucyBoySidenav").style.width = "0";
      /*document.getElementById("overlay").style.display = "none";*/
    }

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function dropDownFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunction() {
      var x = document.getElementById("myLinks");
      var y = document.getElementById("saucyBoySidenav");
      if (x.style.display === "block") {
        x.style.display = "none";

      } else {
        y.style.width="12rem";
        /*document.getElementById("overlay").style.display = "block";*/
      }
    }

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("saucyBoySidenav").style.width = "0";
      /*document.getElementById("overlay").style.display = "none";*/
    }
/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function dropDownFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunction() {
      var x = document.getElementById("myLinks");
      var y = document.getElementById("saucyBoySidenav");
      if (x.style.display === "block") {
        x.style.display = "none";

      } else {
        y.style.width="12rem";
        /*document.getElementById("overlay").style.display = "block";*/
      }
    }

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("saucyBoySidenav").style.width = "0";
      /*document.getElementById("overlay").style.display = "none";*/
    }

    /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("saucyBoySidenav");
    if (x.style.display === "block") {
      x.style.display = "none";

    } else {
      y.style.width="12rem";
      /*document.getElementById("overlay").style.display = "block";*/
    }
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("saucyBoySidenav").style.width = "0";
    /*document.getElementById("overlay").style.display = "none";*/
  }
 /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function dropDownFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunction() {
      var x = document.getElementById("myLinks");
      var y = document.getElementById("saucyBoySidenav");
      if (x.style.display === "block") {
        x.style.display = "none";

      } else {
        y.style.width="12rem";
        /*document.getElementById("overlay").style.display = "block";*/
      }
    }

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("saucyBoySidenav").style.width = "0";
      /*document.getElementById("overlay").style.display = "none";*/
    }

     function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
      document.getElementById("myNumber").value = max;
    }
  }
  function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
      document.getElementById("myNumber").value = min;
    }
  }

  function up2(max) {
    document.getElementById("myNumber2").value = parseInt(document.getElementById("myNumber2").value) + 1;
    if (document.getElementById("myNumber2").value >= parseInt(max)) {
      document.getElementById("myNumber2").value = max;
    }
  }
  function down2(min) {
    document.getElementById("myNumber2").value = parseInt(document.getElementById("myNumber2").value) - 1;
    if (document.getElementById("myNumber2").value <= parseInt(min)) {
      document.getElementById("myNumber2").value = min;
    }
  }
  

    // Get the modal
  var modal = document.getElementById("FreeShippingModal");

  // Get the button that opens the modal
  var link = document.getElementById("modalLink");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  link.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }




