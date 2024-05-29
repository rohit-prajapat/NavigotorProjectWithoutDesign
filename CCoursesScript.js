

CLecture = document.querySelector(".CLecuturesButton");
CLecture.addEventListener("click",()=>{

    scrollToPosition('Clecture');
});


CLecture = document.querySelector(".CPracticeButoon");
CLecture.addEventListener("click",()=>{

    scrollToPosition('CPractice');
});


CLecture = document.querySelector(".CcompilerButoon");
CLecture.addEventListener("click",()=>{

    scrollToPosition('CCompiler');
});


CLecture = document.querySelector(".CHelpButton");
CLecture.addEventListener("click",()=>{

    scrollToPosition('Help');
});


CLecture = document.querySelector(".CnotesButton");
CLecture.addEventListener("click",()=>{

    scrollToPosition('CNotes');
});



CLecture = document.querySelector("#CHeading");
CLecture.addEventListener("click",()=>{

    scrollToPosition('logo');
});


function scrollToPosition(position) {
    // Get the target element's position

    console.log(position);
    const targetElement = document.getElementById(position);
    console.log(targetElement)
    const targetPosition = targetElement.offsetTop;// dont know this (use online to know about this)
    // alert("chal raha ha");
    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }


HomePagePointer = document.querySelector("#logo");
HomePagePointer.addEventListener("click",function(){
    window.location.href = "HomePageIndex1.html";
})



// let lectures = document.querySelector(".Lec1");
// console.log(lectures)

// lectures.addEventListener("click",function(){
    

// })