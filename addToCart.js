console.log("addtocart.js");
/* reorganize order of elements */
let moveButtons = function () {
    let btnBlock = document.getElementsByClassName("btn-block");
    for (var index = 0; index < btnBlock.length; index++) {
        btnBlock[index].setAttribute("id", "btn-block-" + index + "");
    };
    /*Move addtocart and viewcart buttons next to book now button*/
    let submitBtn = document.getElementById("btn-block-1");
    let addToCartButton = document.getElementsByClassName("submit-img")[0];
    let viewCart = document.getElementById("viewcart");

    addToCartButton.innerHTML = "<span>add to cart</span><span class='material-symbols-outlined'>add_shopping_cart</span>";
    viewCart.innerHTML = "<span>view cart</span><span class='material-symbols-outlined'>shopping_cart</span>";

    submitBtn.parentNode.insertBefore(addToCartButton,submitBtn);
    submitBtn.parentNode.insertBefore(viewCart,submitBtn);
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
}
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


;
/* create image previews
 */




 let createImagePreiviews = function () {

    let imgArray = [];
    let imagePreviews = document.querySelectorAll(".img-container img");
    let _rows = document.querySelectorAll(".card-body table tr");

    for (let i = 0; i < imagePreviews.length; i++) {
        let imgSrc = imagePreviews[i].src.substring(imagePreviews[i].src.lastIndexOf('/')+1).replace(".jpg","");
        imgArray.push(imgSrc.toLowerCase());
    };
    
    
    Array.prototype.forEach.call(_rows, function (item, index) {

        let rowTitle = item.firstElementChild.nextElementSibling.innerHTML;
        item.setAttribute("id","" + rowTitle.toLowerCase().replace(' ','-') + "");
        item.setAttribute("class","product-row");

        let tableCell = document.createElement("td");
        tableCell.setAttribute("class", "lei-preview");
        item.appendChild(tableCell);

        if(item.id == imgArray[index - 1]){

            let cellImg = document.createElement("A");
            cellImg.setAttribute("href","images/" + imgArray[index - 1] + "");
            cellImg.style.background = "url('images/" + imgArray[index - 1] + ".jpg')";
            cellImg.setAttribute("target", "_blank");
            if (cellImg.getAttribute("href") !== "undefined") {
                tableCell.appendChild(cellImg);
            }

        }else{

            console.log(item.id, " ",imgArray[index - 1]);
            
        };

     });

};
createImagePreiviews();


let reserveNow = document.getElementsByClassName("lei-button")[0];
let closeBtn = document.getElementById("close-button");
let cartWindow = document.getElementById("addToCartWindow");

function toggleAddToCartWindow() {
    cartWindow.className = 'col-md-12 col-lg-5 order-0 order-md-1 visible';
};

closeBtn.addEventListener("click", function () {
    cartWindow.className = 'col-md-12 col-lg-5 order-0 order-md-1';
}, false);

reserveNow.addEventListener("click", function () {
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

