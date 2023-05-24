console.log("addtocart.js");

/* reorganize order of elements */
let moveButtons = function () {
    let btn = document.getElementsByTagName("BUTTON");
    let btnBlock = document.getElementsByClassName("btn-block");
    /*give IDs to addtocart and viewcart buttons*/
    for (var index = 0; index < btn.length; index++) {
        btn[index].setAttribute("id", "btn" + index + "");
    };
    for (var index = 0; index < btnBlock.length; index++) {
        btnBlock[index].setAttribute("id", "btn-block-" + index + "");
    };
    /*Move addtocart and viewcart buttons next to book now button*/
    let btnBlock1 = document.getElementById("btn-block-1");
    let btnBlock3 = document.getElementById("btn3");
    let btnBlock2 = document.getElementById("btn2");
    btnBlock1.parentNode.insertBefore(btnBlock3, btnBlock1);
    btnBlock1.parentNode.insertBefore(btnBlock2, btnBlock1);
    /*add text and icons addtocart and viewcart*/
    btnBlock2.innerHTML = "<span>add to cart</span><span class='material-symbols-outlined'>add_shopping_cart</span>";
    btnBlock3.innerHTML = "<span>view cart</span><span class='material-symbols-outlined'>shopping_cart</span>";
};
moveButtons();

/*redesign number spinners*/
/*create new spinner functionality*/
// input values are not strings or numbers, they are input
function numIncrement(numberInput, increase) {
    var myInputObject = document.getElementById(numberInput);
    if (increase) {
        if (myInputObject.Value == " ") {
            myInputObject.value = 1;
        } else {
            myInputObject.value++;
        }

        localStorage.setItem("" + myInputObject.getAttribute("name") + "", myInputObject.value);
    } else {
        myInputObject.value--;
        localStorage.setItem("" + myInputObject.getAttribute("name") + "", myInputObject.value);
    };
    if (myInputObject.value > 999) {
        myInputObject.value = 999;
    };
    if (myInputObject.value < 1) {
        myInputObject.value = " ";
    };
};
/*alter appearance of markup of spinners*/
let redesignSpinners = function () {

    let numberInput = document.getElementsByClassName("price");

    Array.prototype.forEach.call(numberInput, function (item, index) {
        item.setAttribute("id", item.getAttribute("name"));
        item.setAttribute("placeholder", "0");
        let numberSpinner = document.createElement("DIV");
        let spinnerSection = document.createElement("SECTION");
        numberSpinner.setAttribute("class", "numberSpinner");
        numberSpinner.setAttribute("id", "package-number-input" + index + "");
        item.parentNode.insertBefore(numberSpinner, item.nextSibling);
        numberSpinner.appendChild(spinnerSection);
        spinnerSection.appendChild(item);
        let spinnerPlus = document.createElement("BUTTON");
        let spinnerMinus = document.createElement("BUTTON");
        spinnerPlus.setAttribute("type", "button");
        spinnerMinus.setAttribute("type", "button");
        spinnerPlus.setAttribute("class", "numberPlus");
        spinnerMinus.setAttribute("class", "numberMinus");
        spinnerPlus.innerHTML = " + ";
        spinnerMinus.innerHTML = " - ";
        spinnerSection.parentNode.insertBefore(spinnerPlus, spinnerSection.nextElementSibling);
        spinnerSection.parentNode.insertBefore(spinnerMinus, spinnerSection);
    });
};
redesignSpinners();
let numberSpinnerPlus = document.getElementsByClassName("numberPlus");
let numberSpinnerMinus = document.getElementsByClassName("numberMinus");
for (var i = 0; i < numberSpinnerPlus.length; i++) {
    numberSpinnerPlus[i].addEventListener("click", function () {
        numIncrement("" + this.previousElementSibling.firstChild.id + "", true)
    });
};
for (var i = 0; i < numberSpinnerMinus.length; i++) {
    numberSpinnerMinus[i].addEventListener("click", function () {
        numIncrement("" + this.nextElementSibling.firstChild.id + "", false)
    });
};
/* create image previews
 */

let imgArray = [];
let imagePreviews = document.querySelectorAll(".img-container img");
for (let i = 0; i < imagePreviews.length; i++) {
    imgArray.push(imagePreviews[i].getAttribute("src"));
};

let createImagePreiviews = function () {
    let _rows = document.querySelectorAll(".card-body table tr");
    Array.prototype.forEach.call(_rows, function (item, index) {
        let tableCell = document.createElement("td");
        tableCell.setAttribute("class", "lei-preview");

        let cellImg = document.createElement("A");
        cellImg.setAttribute("href", imgArray[index - 1]);
        cellImg.style.background = "url(" + imgArray[index - 1] + ")";
        cellImg.setAttribute("target", "_blank");
        if (cellImg.getAttribute("href") !== "undefined") {
            tableCell.appendChild(cellImg);
        }

        item.appendChild(tableCell);
    });
};
createImagePreiviews();



/* creates pop up window to hold addToCart */
let createAddToCartWindow = function () {
    document.getElementsByClassName("col-md-12")[0].setAttribute("id", "addToCartWindow");
    let closeBtn = document.createElement("BUTTON");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("id", "close-button");
    closeBtn.innerHTML = "<span class='material-symbols-outlined'>close</span> close";
    document.getElementsByClassName("cart-post")[0].appendChild(closeBtn);
};
createAddToCartWindow();
let reserveNow = document.getElementById("btn1");
let closeBtn = document.getElementById("close-button");
let cartWindow = document.getElementById("addToCartWindow");

function toggleAddToCartWindow() {
    cartWindow.className = 'col-md-12 col-lg-5 order-0 order-md-1 visible';
};

closeBtn.addEventListener("click", function () {
    cartWindow.className = 'col-md-12 col-lg-5 order-0 order-md-1';
}, false);

document.getElementById("btn1").addEventListener("click", function () {
    toggleAddToCartWindow();
}, false);

/*======= misc organizing ========*/
let textInput = document.querySelectorAll("input[type='text']");
Array.prototype.forEach.call(textInput, function (item, index) {
    let _placeholder = item.previousElementSibling.innerHTML;
    item.setAttribute("placeholder", _placeholder);
});
let emailInput = document.querySelectorAll("input[type='email']");
Array.prototype.forEach.call(emailInput, function (item, index) {
    let _placeholder = item.previousElementSibling.innerHTML;
    item.setAttribute("placeholder", _placeholder);
});

let finalText = document.getElementsByClassName("price-form")[0].nextElementSibling;
let cartPost = document.getElementsByClassName("cart-post")[0];
cartPost.appendChild(finalText);

document.getElementById("btn0").setAttribute("id", "menu-btn");