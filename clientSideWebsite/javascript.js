// -----------------------------------------------------------------------------

//NESTBURGER START

let nestburgers = document.getElementsByClassName("nestburger");
for (let nestburger of nestburgers) {
    nestburger.addEventListener("click", (evt) => { toggleNest(evt.target) });
}

function toggleNest(burger) {
    let siblings = burger.parentElement.children;
    for (let sibling of siblings) {
        if (sibling === burger) {
            //alert("found self!");
        } else {
            if (sibling.style.display === "none") {
                sibling.style.display = "inherit";
            } else {
                sibling.style.display = "none";
            }
        }
    }
}

function openNest(burger) {
    let siblings = burger.parentElement.children;
    for (let sibling of siblings) {
        if (sibling === burger) {
            //alert("found self!");
        } else {
            sibling.style.display = "inherit";
        }
    }
}

function closeNest(burger) {
    let siblings = burger.parentElement.children;
    for (let sibling of siblings) {
        if (sibling === burger) {
            //alert("found self!");
        } else {
            sibling.style.display = "none";
        }
    }

}

function toggleAll() {
    for (let nestburger of nestburgers) {
        toggleNest(nestburger)
    };
    // anchortag.addEventListener('click', (evt) => { collapseOrExpand(evt); });
}

function openSelectedInitialNests() {
    for (let nestburger of nestburgers) {
        if (nestburger.classList.contains("initial-open")) {
            toggleNest(nestburger);
        }
    }
}

function closeAll() {
    for (let nestburger of nestburgers) {
        closeNest(nestburger);
    };
}

function openAll() {
    for (let nestburger of nestburgers) {
        openNest(nestburger);
    };
}


mainHamburgerMenu = document.getElementById('main-hamburger-menu')
    // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_matchmedia
let widthWatcher = window.matchMedia("(max-width: 425px)");
widthWatcher.addEventListener('change', watchSize);

function watchSize() {
    // console.log(widthWatcher);
    // console.log(widthWatcher.matches);
    if (widthWatcher.matches === true) {
        closeNest(mainHamburgerMenu);
        mainHamburgerMenu.style.display = 'inherit';
    } else {
        openNest(mainHamburgerMenu);
        mainHamburgerMenu.style.display = 'none';
    }

}

closeAll();
openSelectedInitialNests();
watchSize();

// --------------------Star Review Input Code -------------------------------
let starReviewInputContainers = document.getElementsByClassName("star-review-input-container");

for (let container of starReviewInputContainers) { //go through all stars and add event listener
    let stars = container.children;
    for (let star of stars) {
        star.addEventListener("click", (evt) => { changeStarBarColor(evt); })
    }
}

function changeStarBarColor(evt) {
    let starReviewInputContainer = evt.target.parentElement; //parent container
    //all containers in document
    let allStarReviewInputContainers = document.getElementsByClassName("star-review-input-container");
    //find out which parent container contains the clicked star zero indexed
    let parentIndex = 0;
    for (let i = 0; i < allStarReviewInputContainers.length; i++) {
        if (allStarReviewInputContainers[i] === starReviewInputContainer) {
            parentIndex = i;
        }
    }
    //find which star was clicked, zero indexed
    let stars = starReviewInputContainer.children;
    starIndex = 0;
    for (let i = 0; i < stars.length - 1; i++) { //-1 bc last "star" is hidden input
        if (stars[i] === evt.target) {
            // alert(i);
            starIndex = i;
        }
    }
    // if starIndex is zero (ie first star already checked, then uncheck)
    if (starIndex === 0) {
        if (stars[stars.length - 1].value === "1") { //star is already checked
            //therefore uncheck
            starIndex = -1;
        }
    }
    // go through stars and change them to empty of full after star is clicked
    for (let i = 0; i < stars.length - 1; i++) { //-1 bc last "star" is hidden input
        if (i <= starIndex) {
            stars[i].innerHTML = "&#9733"; //fill in star
        } else {
            stars[i].innerHTML = "&#9734"; //empty star
        }
        //set the rating line to show the value chosen
        document.getElementsByClassName("review-rating")[parentIndex].innerHTML = "Your Rating: " + (starIndex + 1).toString() + " Stars";
        //last "star" is a hidden input set to the value
        stars[stars.length - 1].value = (starIndex + 1).toString();
    }
}


/////SHOW MAIN CONTENT //////
function showMain(clicked_id) {
    //alert(clicked_id);
    mains = document.getElementsByTagName('main');
    for (let main of mains) {
        main.style.display = 'none';
    }
    let mainID = "main-" + clicked_id;
    document.getElementById(mainID).style.display = 'inherit';
}
//////////////////////////////

profilePassword1 = document.getElementById("profile-password1");
profilePassword2 = document.getElementById("profile-password2");
changePasswordCheckBox = document.getElementById('change-password');
changePasswordCheckBox.addEventListener('change', toggleProfilePasswords);

function toggleProfilePasswords() {
    if (changePasswordCheckBox.checked) {
        profilePassword1.style.display = "inherit";
        profilePassword2.style.display = "inherit";
        profilePassword1.required = true;
        profilePassword2.required = true;
    } else {
        profilePassword1.style.display = "none";
        profilePassword2.style.display = "none";
        profilePassword1.required = false;
        profilePassword2.required = false;
    }
}

showMain('home');