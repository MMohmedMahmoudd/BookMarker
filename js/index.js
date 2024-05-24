// var websiteName = document.getElementById("bookmarkName");
// var URLOfSite = document.getElementById("bookmarkURL");
// var submitBtn = document.getElementById("submitBtn");
// var tableContent = document.getElementById("tableContent");
// var deleteBtns;
// var visitBtns;
// var updateBtns;
// var closeBtn = document.getElementById("closeBtn");
// var boxModal = document.querySelector(".box-info");
// var bookmarks = [];

// if (localStorage.getItem("bookmarksList")) {
//   bookmarks = JSON.parse(localStorage.getItem("bookmarksList"));
//   for (var x = 0; x < bookmarks.length; x++) {
//     displayBookmark(x);
//   }
// }



// function displayBookmark(indexOfWebsite) {
//   var userURL = bookmarks[indexOfWebsite].URLOfSite;
//   var httpsRegex = /^https?:\/\//g;
//   if (httpsRegex.test(userURL)) {
//     validURL = userURL;
//     fixedURL = validURL
//       .split("")
//       .splice(validURL.match(httpsRegex)[0].length)
//       .join("");
//   } else {
//     var fixedURL = userURL;
//     validURL = `https://${userURL}`;
//   }
//   var newBookmark = `
//               <tr>
//                 <td>${indexOfWebsite + 1}</td>
//                 <td>${bookmarks[indexOfWebsite].websiteName}</td>              
//                 <td>
//                   <button class="btn btn-visit" data-index="${indexOfWebsite}">
//                     <i class="fa-solid fa-eye pe-2"></i>Visit
//                   </button>
//                 </td>
//                 <td>
//                   <button class="btn btn-delete pe-2" data-index="${indexOfWebsite}">
//                     <i class="fa-solid fa-trash-can"></i>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                 <button class="btn btn-update text-white btn-warning ps-2" data-index="${indexOfWebsite}">
//                 Update
//               </button>
//             </td>
//             </tr>
//             `;
//   tableContent.innerHTML += newBookmark;

  

//   deleteBtns = document.querySelectorAll(".btn-delete");
//   if (deleteBtns) {
//     for (var j = 0; j < deleteBtns.length; j++) {
//       deleteBtns[j].addEventListener("click", function (e) {
//         deleteBookmark(e);
//       });
//     }
//   }

  
//   visitBtns = document.querySelectorAll(".btn-visit");
//   if (visitBtns) {
//     for (var l = 0; l < visitBtns.length; l++) {
//       visitBtns[l].addEventListener("click", function (e) {
//         visitWebsite(e);
//       });
//     }
//   }
// }




// function clearInput() {
//   websiteName.value = "";
//   URLOfSite.value = "";
// }



// function capitalize(str) {
//   let strArr = str.split("");
//   strArr[0] = strArr[0].toUpperCase();
//   return strArr.join("");
// }



// submitBtn.addEventListener("click", function () {
//   if (
//     websiteName.classList.contains("is-valid") &&
//     URLOfSite.classList.contains("is-valid")
//   ) {
//     var bookmark = {
//       websiteName: capitalize(websiteName.value),
//       URLOfSite: URLOfSite.value,
//     };
//     bookmarks.push(bookmark);
//     localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
//     displayBookmark(bookmarks.length - 1);
//     clearInput();
//     websiteName.classList.remove("is-valid");
//     URLOfSite.classList.remove("is-valid");
//   } else {
//     boxModal.classList.remove("d-none");
//   }
// });



// function deleteBookmark(e) {
//   tableContent.innerHTML = "";
//   var deletedIndex = e.target.dataset.index;
//   bookmarks.splice(deletedIndex, 1);
//   for (var k = 0; k < bookmarks.length; k++) {
//     displayBookmark(k);
//   }
//   localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
// }



// function visitWebsite(e) {
//   var websiteIndex = e.target.dataset.index;
//   var httpsRegex = /^https?:\/\//;
//   if (httpsRegex.test(bookmarks[websiteIndex].URLOfSite)) {
//     open(bookmarks[websiteIndex].URLOfSite);
//   } else {
//     open(`https://${bookmarks[websiteIndex].URLOfSite}`);
//   }
// }




// var nameRegex = /^\w{3,}(\s+\w+)*$/;
// var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

// websiteName.addEventListener("input", function () {
//   validate(websiteName, nameRegex);
// });

// URLOfSite.addEventListener("input", function () {
//   validate(URLOfSite, urlRegex);
// });

// function validate(element, regex) {
//   var testRegex = regex;
//   if (testRegex.test(element.value)) {
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//   } else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//   }
// }



// function closeModal() {
//   boxModal.classList.add("d-none");
// }


// closeBtn.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key == "Escape") {
//     closeModal();
//   }
// });

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("box-info")) {
//     closeModal();
//   }
// });
//  _______________new 

// var websiteName = document.getElementById("bookmarkName");
// var URLOfSite = document.getElementById("bookmarkURL");
// var submitBtn = document.getElementById("submitBtn");
// var tableContent = document.getElementById("tableContent");
// var deleteBtns;
// var visitBtns;
// var updateBtns;
// var closeBtn = document.getElementById("closeBtn");
// var boxModal = document.querySelector(".box-info");
// var bookmarks = [];
// var isUpdating = false;
// var updateIndex = null;

// if (localStorage.getItem("bookmarksList")) {
//   bookmarks = JSON.parse(localStorage.getItem("bookmarksList"));
//   for (var x = 0; x < bookmarks.length; x++) {
//     displayBookmark(x);
//   }
// }

// function displayBookmark(indexOfWebsite) {
//   var userURL = bookmarks[indexOfWebsite].URLOfSite;
//   var httpsRegex = /^https?:\/\//g;
//   if (httpsRegex.test(userURL)) {
//     validURL = userURL;
//     fixedURL = validURL
//       .split("")
//       .splice(validURL.match(httpsRegex)[0].length)
//       .join("");
//   } else {
//     var fixedURL = userURL;
//     validURL = `https://${userURL}`;
//   }
//   var newBookmark = `
//               <tr>
//                 <td>${indexOfWebsite + 1}</td>
//                 <td>${bookmarks[indexOfWebsite].websiteName}</td>              
//                 <td>
//                   <button class="btn btn-visit" data-index="${indexOfWebsite}">
//                     <i class="fa-solid fa-eye pe-2"></i>Visit
//                   </button>
//                 </td>
//                 <td>
//                   <button class="btn btn-delete pe-2" data-index="${indexOfWebsite}">
//                     <i class="fa-solid fa-trash-can"></i>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                 <button class="btn btn-update text-white btn-warning ps-2" data-index="${indexOfWebsite}">
//                 Update
//               </button>
//             </td>
//             </tr>
//             `;
//   tableContent.innerHTML += newBookmark;

//   deleteBtns = document.querySelectorAll(".btn-delete");
//   if (deleteBtns) {
//     for (var j = 0; j < deleteBtns.length; j++) {
//       deleteBtns[j].addEventListener("click", function (e) {
//         deleteBookmark(e);
//       });
//     }
//   }

//   visitBtns = document.querySelectorAll(".btn-visit");
//   if (visitBtns) {
//     for (var l = 0; l < visitBtns.length; l++) {
//       visitBtns[l].addEventListener("click", function (e) {
//         visitWebsite(e);
//       });
//     }
//   }
  
//   updateBtns = document.querySelectorAll(".btn-update");
//   if (updateBtns) {
//     for (var m = 0; m < updateBtns.length; m++) {
//       updateBtns[m].addEventListener("click", function (e) {
//         updateBookmark(e);
//       });
//     }
//   }
// }

// function clearInput() {
//   websiteName.value = "";
//   URLOfSite.value = "";
// }

// function capitalize(str) {
//   let strArr = str.split("");
//   strArr[0] = strArr[0].toUpperCase();
//   return strArr.join("");
// }

// submitBtn.addEventListener("click", function () {
//   if (
//     websiteName.classList.contains("is-valid") &&
//     URLOfSite.classList.contains("is-valid")
//   ) {
//     if (isUpdating) {
//       bookmarks[updateIndex] = {
//         websiteName: capitalize(websiteName.value),
//         URLOfSite: URLOfSite.value,
//       };
//       isUpdating = false;
//       updateIndex = null;
//     } else {
//       var bookmark = {
//         websiteName: capitalize(websiteName.value),
//         URLOfSite: URLOfSite.value,
//       };
//       bookmarks.push(bookmark);
//     }
    
//     localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
//     tableContent.innerHTML = "";
//     for (var x = 0; x < bookmarks.length; x++) {
//       displayBookmark(x);
//     }
//     clearInput();
//     websiteName.classList.remove("is-valid");
//     URLOfSite.classList.remove("is-valid");
//   } else {
//     boxModal.classList.remove("d-none");
//   }
// });

// function deleteBookmark(e) {
//   tableContent.innerHTML = "";
//   var deletedIndex = e.target.dataset.index;
//   bookmarks.splice(deletedIndex, 1);
//   for (var k = 0; k < bookmarks.length; k++) {
//     displayBookmark(k);
//   }
//   localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
// }

// function visitWebsite(e) {
//   var websiteIndex = e.target.dataset.index;
//   var httpsRegex = /^https?:\/\//;
//   if (httpsRegex.test(bookmarks[websiteIndex].URLOfSite)) {
//     open(bookmarks[websiteIndex].URLOfSite);
//   } else {
//     open(`https://${bookmarks[websiteIndex].URLOfSite}`);
//   }
// }

// function updateBookmark(e) {
//   var updateIndex = e.target.dataset.index;
//   websiteName.value = bookmarks[updateIndex].websiteName;
//   URLOfSite.value = bookmarks[updateIndex].URLOfSite;
//   isUpdating = true;
//   updateIndex = updateIndex;

// }

// var nameRegex = /^\w{3,}(\s+\w+)*$/;
// var urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

// websiteName.addEventListener("input", function () {
//   validate(websiteName, nameRegex);
// });

// URLOfSite.addEventListener("input", function () {
//   validate(URLOfSite, urlRegex);
// });

// function validate(element, regex) {
//   var testRegex = regex;
//   if (testRegex.test(element.value)) {
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//   } else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//   }
// }

// function closeModal() {
//   boxModal.classList.add("d-none");
// }

// closeBtn.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key == "Escape") {
//     closeModal();
//   }
// });

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("box-info")) {
//     closeModal();
//   }
// });
// _______________________________________________________________________________________
// var websiteName = document.getElementById("bookmarkName");
// var URLOfSite = document.getElementById("bookmarkURL");
// var submitBtn = document.getElementById("submitBtn");
// var tableContent = document.getElementById("tableContent");
// var deleteBtns;
// var visitBtns;
// var updateBtns;
// var closeBtn = document.getElementById("closeBtn");
// var boxModal = document.querySelector(".box-info");
// var bookmarks = [];
// var isUpdating = false;
// var updateIndex = null;

// if (localStorage.getItem("bookmarksList")) {
//   bookmarks = JSON.parse(localStorage.getItem("bookmarksList"));
//   for (var x = 0; x < bookmarks.length; x++) {
//     displayBookmark(x);
//   }
// }

// function displayBookmark(indexOfWebsite) {
//   var userURL = bookmarks[indexOfWebsite].URLOfSite;
//   var httpsRegex = /^https?:\/\//g;
//   if (httpsRegex.test(userURL)) {
//     validURL = userURL;
//     fixedURL = validURL
//       .split("")
//       .splice(validURL.match(httpsRegex)[0].length)
//       .join("");
//   } else {
//     var fixedURL = userURL;
//     validURL = `https://${userURL}`;
//   }
//   var newBookmark = `
//               <tr>
//                 <td>${indexOfWebsite + 1}</td>
//                 <td>${bookmarks[indexOfWebsite].websiteName}</td>              
//                 <td>
//                   <button class="btn btn-visit" data-index="${indexOfWebsite}">
//                     <i class="fa-solid fa-eye pe-2"></i>Visit
//                   </button>
//                 </td>
//                 <td>
//                   <button class="btn btn-delete pe-2" data-index="${indexOfWebsite}">
//                     <i class="fa-solid fa-trash-can"></i>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                 <button class="btn btn-update text-white btn-warning ps-2" data-index="${indexOfWebsite}">
//                 Update
//               </button>
//             </td>
//             </tr>
//             `;
//   tableContent.innerHTML += newBookmark;

//   deleteBtns = document.querySelectorAll(".btn-delete");
//   if (deleteBtns) {
//     for (var j = 0; j < deleteBtns.length; j++) {
//       deleteBtns[j].addEventListener("click", function (e) {
//         deleteBookmark(e);
//       });
//     }
//   }

//   visitBtns = document.querySelectorAll(".btn-visit");
//   if (visitBtns) {
//     for (var l = 0; l < visitBtns.length; l++) {
//       visitBtns[l].addEventListener("click", function (e) {
//         visitWebsite(e);
//       });
//     }
//   }
  
//   updateBtns = document.querySelectorAll(".btn-update");
//   if (updateBtns) {
//     for (var m = 0; m < updateBtns.length; m++) {
//       updateBtns[m].addEventListener("click", function (e) {
//         updateBookmark(e);
//       });
//     }
//   }
// }

// function clearInput() {
//   websiteName.value = "";
//   URLOfSite.value = "";
// }

// function capitalize(str) {
//   let strArr = str.split("");
//   strArr[0] = strArr[0].toUpperCase();
//   return strArr.join("");
// }

// submitBtn.addEventListener("click", function () {
//   if (
//     websiteName.classList.contains("is-valid") &&
//     URLOfSite.classList.contains("is-valid")
//   ) {
//     if (isUpdating) {
//       bookmarks[updateIndex] = {
//         websiteName: capitalize(websiteName.value),
//         URLOfSite: URLOfSite.value,
//       };
//       isUpdating = false;
//       updateIndex = null;
//     } else {
//       var bookmark = {
//         websiteName: capitalize(websiteName.value),
//         URLOfSite: URLOfSite.value,
//       };
//       bookmarks.push(bookmark);
//     }
    
//     localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
//     tableContent.innerHTML = "";
//     for (var x = 0; x < bookmarks.length; x++) {
//       displayBookmark(x);
//     }
//     clearInput();
//     websiteName.classList.remove("is-valid");
//     URLOfSite.classList.remove("is-valid");
//   } else {
//     boxModal.classList.remove("d-none");
//   }
// });

// function deleteBookmark(e) {
//   tableContent.innerHTML = "";
//   var deletedIndex = e.target.dataset.index;
//   bookmarks.splice(deletedIndex, 1);
//   for (var k = 0; k < bookmarks.length; k++) {
//     displayBookmark(k);
//   }
//   localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
// }

// function visitWebsite(e) {
//   var websiteIndex = e.target.dataset.index;
//   var httpsRegex = /^https?:\/\//;
//   if (httpsRegex.test(bookmarks[websiteIndex].URLOfSite)) {
//     open(bookmarks[websiteIndex].URLOfSite);
//   } else {
//     open(`https://${bookmarks[websiteIndex].URLOfSite}`);
//   }
// }

// function updateBookmark(e) {
//   updateIndex = e.target.dataset.index;
//   websiteName.value = bookmarks[updateIndex].websiteName;
//   URLOfSite.value = bookmarks[updateIndex].URLOfSite;
//   isUpdating = true;
// }

// var nameRegex = /^\w{3,}(\s+\w+)*$/;
// var urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

// websiteName.addEventListener("input", function () {
//   validate(websiteName, nameRegex);
// });

// URLOfSite.addEventListener("input", function () {
//   validate(URLOfSite, urlRegex);
// });

// function validate(element, regex) {
//   var testRegex = regex;
//   if (testRegex.test(element.value)) {
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//   } else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//   }
// }

// function closeModal() {
//   boxModal.classList.add("d-none");
// }

// closeBtn.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key == "Escape") {
//     closeModal();
//   }
// });

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("box-info")) {
//     closeModal();
//   }
// });
// ________________________________________________________________________
var websiteName = document.getElementById("bookmarkName");
var URLOfSite = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");
var deleteBtns;
var visitBtns;
var updateBtns;
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.querySelector(".box-info");
var bookmarks = [];
var isUpdating = false;
var updateIndex = null;

if (localStorage.getItem("bookmarksList")) {
  bookmarks = JSON.parse(localStorage.getItem("bookmarksList"));
  for (var x = 0; x < bookmarks.length; x++) {
    displayBookmark(x);
  }
}

function displayBookmark(indexOfWebsite) {
  var userURL = bookmarks[indexOfWebsite].URLOfSite;
  var httpsRegex = /^https?:\/\//g;
  var validURL, fixedURL;
  if (httpsRegex.test(userURL)) {
    validURL = userURL;
    fixedURL = validURL
      .split("")
      .splice(validURL.match(httpsRegex)[0].length)
      .join("");
  } else {
    fixedURL = userURL;
    validURL = `https://${userURL}`;
  }
  var newBookmark = `
              <tr>
                <td>${indexOfWebsite + 1}</td>
                <td>${bookmarks[indexOfWebsite].websiteName}</td>              
                <td>
                  <button class="btn btn-visit" data-index="${indexOfWebsite}">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button>
                </td>
                <td>
                  <button class="btn btn-delete pe-2" data-index="${indexOfWebsite}">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
                <td>
                <button class="btn btn-update text-white btn-warning ps-2" data-index="${indexOfWebsite}">
                Update
              </button>
            </td>
            </tr>
            `;
  tableContent.innerHTML += newBookmark;

  deleteBtns = document.querySelectorAll(".btn-delete");
  if (deleteBtns) {
    for (var j = 0; j < deleteBtns.length; j++) {
      deleteBtns[j].addEventListener("click", function (e) {
        deleteBookmark(e);
      });
    }
  }

  visitBtns = document.querySelectorAll(".btn-visit");
  if (visitBtns) {
    for (var l = 0; l < visitBtns.length; l++) {
      visitBtns[l].addEventListener("click", function (e) {
        visitWebsite(e);
      });
    }
  }

  updateBtns = document.querySelectorAll(".btn-update");
  if (updateBtns) {
    for (var m = 0; m < updateBtns.length; m++) {
      updateBtns[m].addEventListener("click", function (e) {
        updateBookmark(e);
      });
    }
  }
}

function clearInput() {
  websiteName.value = "";
  URLOfSite.value = "";
}

function capitalize(str) {
  let strArr = str.split("");
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join("");
}

submitBtn.addEventListener("click", function () {
  if (
    websiteName.classList.contains("is-valid") &&
    URLOfSite.classList.contains("is-valid")
  ) {
    if (isUpdating) {
      bookmarks[updateIndex] = {
        websiteName: capitalize(websiteName.value),
        URLOfSite: URLOfSite.value,
      };
      isUpdating = false;
      updateIndex = null;
    } else {
      var bookmark = {
        websiteName: capitalize(websiteName.value),
        URLOfSite: URLOfSite.value,
      };
      bookmarks.push(bookmark);
    }
    
    localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
    tableContent.innerHTML = "";
    for (var x = 0; x < bookmarks.length; x++) {
      displayBookmark(x);
    }
    clearInput();
    websiteName.classList.remove("is-valid");
    URLOfSite.classList.remove("is-valid");
  } else {
    boxModal.classList.remove("d-none");
  }
});

function deleteBookmark(e) {
  tableContent.innerHTML = "";
  var deletedIndex = e.target.dataset.index;
  bookmarks.splice(deletedIndex, 1);
  for (var k = 0; k < bookmarks.length; k++) {
    displayBookmark(k);
  }
  localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
}

function visitWebsite(e) {
  var websiteIndex = e.target.dataset.index;
  var httpsRegex = /^https?:\/\//;
  if (httpsRegex.test(bookmarks[websiteIndex].URLOfSite)) {
    open(bookmarks[websiteIndex].URLOfSite);
  } else {
    open(`https://${bookmarks[websiteIndex].URLOfSite}`);
  }
}

function updateBookmark(e) {
  updateIndex = e.target.dataset.index;
  websiteName.value = bookmarks[updateIndex].websiteName;
  URLOfSite.value = bookmarks[updateIndex].URLOfSite;
  isUpdating = true;
}

var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

websiteName.addEventListener("input", function () {
  validate(websiteName, nameRegex);
});

URLOfSite.addEventListener("input", function () {
  validate(URLOfSite, urlRegex);
});

function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

function closeModal() {
  boxModal.classList.add("d-none");
}

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("box-info")) {
    closeModal();
  }
});
