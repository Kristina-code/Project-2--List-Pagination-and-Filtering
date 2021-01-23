/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
 //By: Kristina Flamer  
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



// Add your global variables that store the DOM elements you will 
//Created a global variable to store the student list elements to the page. 

const studentLists = document.querySelectorAll(".student-item");


//Creating a variable containing the total number of pages
const studentPages = 10;


// Declare a function  to display a page of students in a list of 10 per page. 

function showPage(list, page) {

//Creates two variables to store the start and the end index of the students.
const startIndex = page * studentPages - studentPages;  //

const endIndex = page * studentPages;                  //

// Creates a for loop to loop through each item and hide all of the names to show amount of ones necessary to display. 

   for (let i = 0; i < list.length; i++) { 

      // If condition: student list is greater than/equal to number of pages then show the items of the page. 
     if (i >= startIndex && i < endIndex) {       
       
             //Sets the list to display the style to block when the page loads.

            list[i].style.display = "block";
        } else {

            // Or none of the styles of the names show when it is later called.

            list[i].style.display = "none";           
     }
   }
 }
/*** 
   appedPageLinks function creates and appends/adds the pagination links and asses a single parameter to represent the list of students.

***/
function appendPageLinks(list) {       

   //
   const Div = document.querySelector("div.page"); //
   const newDiv = document.createElement("div");

   //A container named newDiv with the className of pagination.
   newDiv.className = "pagination";
   
   // Creates a ul element to contain one l for every 10 students
   const ul = document.createElement("ul");
   
   //A for loop created  with .length to create the number of names per page.

   for (let i = 0; i <= list.length / studentPages; i++) { 
     const li = document.createElement("li");
     const a = document.createElement("a");
     a.href = "#";

   // Adds text to the page number links.

     a.textContent = i + 1;         

     //If condition is true,  
     if (i == 0) {

      //This .className property of the hyperlink "a" defines the value of the class "active", which is added to the link.
       a.className = "active"; "a" 
     }
     // Collects the newly page numbers, inserting them into the DOM.
     li.appendChild(a);
     ul.appendChild(li); 
   }
     newDiv.appendChild(ul);
     Div.appendChild(newDiv);
 }
 
 //Div element with the class '.page' is stored in the Variable 'Div'. 
 const Div = document.querySelector(".page");

 // Calls the event inside of the function.

   Div.addEventListener("click", e => {

   const pageList = document.getElementsByTagName("a");
   
   //The event (e) target property changes and shows the page number when addEventListener is clicked.

   if (e.target.tagName === "A") {
     for (let i = 0; i < pageList.length; i++) {
       pageList[i].className = "";
     }
     
     e.target.className = "active";
    //
     showPage(studentLists, e.target.textContent);
   }
 });
 
 // Invokes the showPage function displaying the corresponding pages.
 showPage(studentLists, 1);
 
 // Call the appendPageLinks is called passing the global variable studentLists.
 appendPageLinks(studentLists);




