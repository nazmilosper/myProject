// const today = new Date();
// const hourNow = today.getHours();
// let name = 'Nazmi';
// let greeting;  /* have to be let key word as the greeting below changes based on time */

// if (hourNow > 18) {
//     greeting = 'Good evening'  + name + '!';
// } else if (hourNow > 12) {
//     greeting = 'Good afternoon ' + name + '!';
// } else if (hourNow > 0) {
//     greeting = 'Good morning ' + name + '!';
// } else {
//     greeting = 'Welcome ' + name + '!';
// }
// const el = document.getElementById('greeting');
// el.textContent = greeting;
/*document.write('<h3>' + greeting + '</h3>');*/

//************************************************ Welcome Message Above **************************************************//

//************************************************ To Top Button start ****************************************************// 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//********************************************** To Top Button end *******************************************************//

//************************************************ To Top Button start ****************************************************//

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/*Scroll to top when arrow up clicked END*/

//************************************************ To Top Button start ****************************************************//