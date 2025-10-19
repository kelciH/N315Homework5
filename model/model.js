import {mobileSize} from "../app/app.js"

export function DeskMenu() {
    console.log("Desk Menu Called")
    $.get("pages/deskMenu.html", function (data) {
        $("nav").empty(0)
        $("nav").append(data)

    })
}

export function MobileMenu() {
    console.log("Mobile Menu Called")
    $.get("pages/mobileMenu.html", function (data) {
        $("nav").empty(0)
        $("nav").append(data)

        $("#menuImg").on("click", function () {
            $.get("pages/popup-nav.html", function (data) {
                $("#app").append(data)
                console.log(mobileSize);
                
            })
        })

    })
}


export function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let contentName = pageID + "Content";
  
    if (pageID == "") {
        $.get("pages/home.html", (data) => {
            $("#app").html(data);
        });
    } else {
        $.get("pages/" + pageID + ".html", (data) => {
            $("#app").html(data); 
        });
    }
  
  }