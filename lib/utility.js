export function createToast(toastObj) {
    const toastDiv = document.createElement("div");
    toastDiv.className = "toast";
    toastDiv.innerText = toastObj.message;
    document.body.appendChild(toastDiv);
  
    requestAnimationFrame(() => toastDiv.classList.add("show"));
    setTimeout(() => {
      toastDiv.classList.remove("show");
      toastDiv.classList.add("hide");
      setTimeout(() => {
        document.body.removeChild(toastDiv);
      }, 500);
    }, 3000);
  }
  
  export function createAlert(alertObj) {

    let bg = "";
    if (alertObj.alertType == "Caution") {
      bg = "#ebff12";
    } else if (alertObj.alertType == "Warning") {
      bg = "#ffb812";
    } else {
      bg = "#ff5112";
    }

    // const alertDiv = document.createElement("div");
    // alertDiv.className = "alertHolder";
  
    // //   this will create the callout div
    // const alertCallout = document.createElement("div");
    // alertCallout.className = "alert-callout-out";
    // // alertDiv.appendChild(alertCallout);
  
    // //   this creates the title or h1
    // const title = document.createElement("h1");
    // // alertCallout.appendChild(title);
    // title.innerText = "Alert Title";
  
    // //   this appends the alertDiv to the body
    // // document.body.appendChild(alertDiv);

    $("body").append(`<div class="alertHolder">
      <div class="back-drop close-btn"></div>
    <div class="alert-callout-out">
      <h1>${alertObj.title}! ${alertObj.userName}</h1>
      <p>
      ${alertObj.message}
      </p>
      <span class="x-close-alert close-btn">X</span>
      <div class="button-bar">
        <div class="btn-confirm close-btn">${alertObj.confirmText}</div>
        <div class="btn-cancel close-btn">${alertObj.cancelText}</div>
      </div>
    </div>
  </div>`)

  $(".back-drop").css("background-color", `${bg}`);
  
  alertListeners();
}

function alertListeners () {
    $(".close-btn").on("click", () => {
      $(".alertHolder").remove();
    })
  }
