import { route, DeskMenu, MobileMenu } from "../model/model.js";
import { createToast } from "../lib/utility.js";


function initLoginForm() {
  $("#login-btn").on("click", (e) => {
    e.preventDefault();
    console.log("button click");
    const un = $("#username-login").val().trim();
    let unl = un.length;
    if (un == "") {
      alert("Username Cannot Be Empty");
    } else if (unl < 8) {
      alert("Username Must Be At Least 8 Characters Long");
    } else if (unl > 10) {
      alert("Username Must Be Less That 10 Characters Long")
    } else if (un.includes (" ")) {
      alert("Username Cannot Have Spaces")
    } else {
      createToast({ message: `Welcome, ${un}` });
      }
    });
  }

  function initSignUpForm() {
    $("#sign-up-btn").on("click", (e) => {
      e.preventDefault();
      console.log("button click");
      const un = $("#username-sign-up").val().trim();
      let unl = un.length;
      if (un == "") {
        alert("Username Cannot Be Empty");
      } else if (unl < 8) {
        alert("Username Must Be At Least 8 Characters Long");
      } else if (unl > 10) {
        alert("Username Must Be Less That 10 Characters Long")
      } else if (un.includes (" ")) {
        alert("Username Cannot Have Spaces")
      } else {
        createToast({ message: `Welcome, ${un}` });
        }
      });
    }

  $(document).ready(function () {
    $(document).on("click", "#login-btn", function() {
      initLoginForm();
    })
  });

  $(document).ready(function () {
    $(document).on("click", "#sign-up-btn", function() {
      initSignUpForm();
    })
  });
  
function initBooks() {
    $.getJSON("data/data.json", (data) => {
        console.log(data.Home);

        $.each(data.Booksets, (index, books) => {
            const bookHTML =`
            <div class="book">
          <div class="book-img">
            <img src="${books.cover_image}" alt="book 1" />
          </div>
        
          <div class="book-info">
          <p>${books.description}</p>
            <h1>$${books.price}</h1>
            
            <button id="${books.id}">Add To Cart</button>
          </div>
        </div>`
        $(".booksets").append(bookHTML);
        });

        $.each(data.BlackHM, (index, books) => {
            const bookHTML =`
            <div class="book">
          <div class="book-img">
            <img src="${books.cover_image}" alt="book 1" />
          </div>
        
          <div class="book-info">
          <p>${books.description}</p>
            <h1>$${books.price}</h1>
            
            <button id="${books.id}">Add To Cart</button>
          </div>
        </div>`
        $(".blackhm").append(bookHTML);
        });

        $.each(data.Horror, (index, books) => {
            const bookHTML =`
            <div class="book">
          <div class="book-img">
            <img src="${books.cover_image}" alt="book 1" />
          </div>
        
          <div class="book-info">
          <p>${books.description}</p>
            <h1>$${books.price}</h1>
            
            <button id="${books.id}">Add To Cart</button>
          </div>
        </div>`
        $(".horror").append(bookHTML);
        });

        $.each(data.Childrens, (index, books) => {
            const bookHTML =`
            <div class="book">
          <div class="book-img">
            <img src="${books.cover_image}" alt="book 1" />
          </div>
        
          <div class="book-info">
          <div class="book-text">
          <p>${books.description}</p>
            <h1>$${books.price}</h1>
            </div>
            <button class="kids-btn" id="${books.id}">Add To Cart</button>
          </div>
        </div>`
        $(".childrens").append(bookHTML);
        });

        $.each(data.About, (index, book) => {
            const aboutHTML =`
            <div class="bookA">
          <div class="book-img">
            <img src="${book.cover_image}" alt="book 1" />
          </div>
        
          <div class="book-info">
          <h1>${book.title}</h1>
          <p>${book.subtitle}</p>
            <p>${book.description}</p>
          </div>
        </div>`
        $(".about").append(aboutHTML);
        });

        $.each(data.Home, (index, book) => {
            const aboutHTML =`
            <div class="bookH">
          <div class="book-img">
            <img src="${book.cover_image}" alt="book 1" />
          </div>
        
          <div class="book-info">
          <p>${book.description}</p>
            <h1>$${book.price}</h1>
            
            <button id="${book.id}">Add To Cart</button>
          </div>
        </div>`
        $(".homeB").append(aboutHTML);
        });
    });
}

export let mobileSize
function initListeners() {

    // Window Size Listaner
    $(window).resize(function () {
        let windowWidth = $(window).width()

        if (windowWidth > 1100) {
            if (mobileSize) {
                mobileSize = false
                DeskMenu()
            }
        }
        else if (windowWidth <= 1100) {
            if (!mobileSize) {
                mobileSize = true
                MobileMenu()
            }
        }
        console.log(windowWidth)
    })
}

function initRouting() {
    $(window).on("hashchange", route);
    route();

    initBooks();
}
 
$(document).ready(function () {
  
  let windowInitSize = $(window).width()
    console.log("inital Width is " + windowInitSize)

    if (windowInitSize <= 960) {
        mobileSize = true
        MobileMenu()
    } else {
        mobileSize = false
        DeskMenu()
    }

    
    initListeners();
    initRouting();
    //initForm();
    
    
    

});



// sessionStorage.setItem("", )