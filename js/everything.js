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




