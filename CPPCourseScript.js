

CLecture = document.querySelector(".CPPLecuturesButton");
CLecture.addEventListener("click",()=>{

    scrollToPosition('CPPlecture');
});


CLecture = document.querySelector(".CPPPracticeButoon");
CLecture.addEventListener("click",()=>{

    scrollToPosition('CPPPractice');
});


CLecture = document.querySelector(".CPPcompilerButoon");
CLecture.addEventListener("click",()=>{

    scrollToPosition('CPPCompiler');
});


CLecture = document.querySelector(".CPPHelpButton");
CLecture.addEventListener("click",()=>{

    scrollToPosition('Help');
});


CLecture = document.querySelector(".CPPnotesButton");
CLecture.addEventListener("click",()=>{

    scrollToPosition('CPPNotes');
});



CLecture = document.querySelector("#CPPHeading");
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


