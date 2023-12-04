//resource link: https://www.w3schools.com/jquery/default.asp
window.addEventListener('click',() => {document.getElementById("sound").play();
});

window.addEventListener('click',() => {document.getElementById("sound1").play();
});



$("#error").hide();

$("#error2").hide();

$("#error3").hide();

$(".c").hide();

$(".pictures").hide();

$("#presss").hide();

$("#ctrls").hide();

$("#fill").hide();



console.log("page loaded");
// $(document).keydown(function(event){
//     if(event.which == 27){
//     console.log("Key code: " + event.which );    
//     $("#escape").toggle();
//     }
// });




// mouse animation

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");



const colors = [
"#000000",
"#000000",
"#000000",
"#000000",
"#000000",
"#000000"
]


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();


// KEY FUNCTIONS 
$(document).keydown(function(event){
  if (event.which === 81) {
    window.location.replace("affirmation.html");
    console.log("Escape is pressed");
}
  if(event.which == 65){
//   console.log("Key code: " + event.which );    
//   $("#popup").toggle();
  window.location.replace("index.html");
  console.log("A is pressed");
  }})



// error 1

  
  $("#error").click(function(){

    $("#error").hide();
    $("#ctrlz").show();
    $("#shape2").show();

});

// now to make the click function return the img back to the first one

$("#ctrlz").click(function(){

    $("#ctrlz").hide();
    $("#shape2").hide();
    $("#error").show();

});


// error 2

$("#error2").click(function(){

$("#error2").hide();
$("#ctrlz-2").show();
$("#shape").show();

});

// now to make the click function return the img back to the first one

$("#ctrlz-2").click(function(){

$("#ctrlz-2").hide();
$("#shape").hide();
$("#error2").show();

});


// error 3
$("#error3").click(function(){

  $("#error3").hide();
  $("#shape3").show();
  $("#ctrlz-3").show();
  
  });
  
  // now to make the click function return the img back to the first one
  
  $("#ctrlz-3").click(function(){
  
  $("#ctrlz-3").hide();
  $("#shape3").hide();
  $("#error3").show();
  
  });


  $("#not-good").click(function(){
    $(".text").addClass("animate-text");
    
    setTimeout(function(){
        $(".text").removeClass("animate-text");
    },10000);
    
});



$("#quit").click(function(){
  $(".text1").addClass("animate-text");
  
  setTimeout(function(){
      $(".text1").removeClass("animate-text");
  },10000);
  
});


$("#their-work").click(function(){
  $(".text2").addClass("animate-text");
  
  setTimeout(function(){
      $(".text2").removeClass("animate-text");
  },10000);
  
});



function mouseOver(element)
{
element.style.color='white';
}

function mouseOut(element)
{
  element.style.color='black';
}



$(".c").click(function(){

  $(".c").hide();
 

});

// now to make the click function return the img back to the first one

$("#statue").click(function(){
  $(".c").show();

});



// $(".pictures").click(function(){

//   $(".pictures").hide();
 

// });

// // now to make the click function return the img back to the first one

// $("#statue").click(function(){
//   $(".pictures").show();


// });



$(document).keydown(function(event){
  if(event.which == 80){
  console.log("Key code: " + event.which );    
  $(".pictures").show();
  $("#pressp").hide();
  $("#fill").hide();
  $("#presss").show();

  }
  if(event.which == 83){
    console.log("Key code: " + event.which );    
    // $(".pictures").hide();
    $("#presss").hide();
    $("#ctrls").show();
    $("#fill").show();

    // $("#pressp").show();
  }
});



