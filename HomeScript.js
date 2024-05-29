
// -------------
// page 1 MEnu

let iscourseMenuOpen = 0;
menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click",ShowMenu);

function ShowMenu()
{
        ShowMenu1 = document.querySelector("#ShowMenu");
        ShowMenu1.classList.remove("displayNone");
        if(iscourseMenuOpen)
        {
            removeCourseMenu();
            iscourseMenuOpen =0;
        }
}

function removeMenu(){
    let ShowMenu = document.querySelector("#ShowMenu");
        ShowMenu.classList.add("displayNone");
}

MenuCancleButton = document.querySelector(".cancleButoon");
MenuCancleButton.addEventListener("click",removeMenu);
// -------------


CoursesMenu = document.querySelector(".Courses");
CoursesMenu.addEventListener("click",ShowCourseMenu);

function ShowCourseMenu()
{

     let ShowMenu = document.querySelector("#CoursesMenu");
     ShowMenu.classList.remove("displayNone");
     removeMenu();
}


cancleCourseMenu = document.querySelector(".cancleCourse");
cancleCourseMenu.addEventListener("click",removeCourseMenu);


function removeCourseMenu()
{
    ShowMenuInner = document.querySelector("#CoursesMenu");
    ShowMenuInner.classList.add("displayNone");
    
    ShowMenu();
}


CPageIndex2 = document.querySelector(".CPageIndex2");
CPageIndex2.addEventListener("click",function(){
    window.location.href = "CCoursesIndex2.html";
})

CPageIndex3 = document.querySelector(".CPageIndex3");
CPageIndex3.addEventListener("click",function(){
    window.location.href = "CPPCoursesIndex3.html";
})




