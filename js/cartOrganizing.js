console.log("cart.js");
document.getElementsByClassName("price-form")[0].setAttribute("id","cart-form");

var $_anchor = document.getElementsByTagName("A");
for (var i = 0; i < $_anchor.length; i++) {
  $_anchor[i].setAttribute("class","anchor-" + i + "");
}

var $_checkoutSection = document.getElementsByClassName("checkout-section")[0];
$_checkoutSection.setAttribute("id",$_checkoutSection.className);
var $_checkoutSection = document.getElementById("checkout-section");

/* ======================================= */
/* ============= organizing ============= */
/* ===================================== */

let $_checkoutSectionHeader = document.createElement("header");
$_checkoutSectionHeader.innerText = "Personal Details";
$_checkoutSectionHeader.setAttribute("id","checkout-section-header");

$_checkoutSection.parentNode.insertBefore($_checkoutSectionHeader,$_checkoutSection);

let $_checkoutOrderHeader = document.createElement("header");
$_checkoutOrderHeader.innerHTML = "Order Details";
$_checkoutOrderHeader.setAttribute("id","order-details-header");
document.getElementById("accordion").parentNode.insertBefore($_checkoutOrderHeader,document.getElementById("accordion"));

var $_totals = document.getElementsByClassName("cart-edit-bottom")[0];
$_totals.setAttribute("id",$_totals.className);
$_totals = document.getElementById("cart-edit-bottom");

let $_totalsHeader = document.createElement("header");
$_totalsHeader.setAttribute("id","totals-header");
$_totalsHeader.innerHTML = "Order total";
$_totals.parentNode.insertBefore($_totalsHeader,$_totals);

/*========================================================*/
/*==================|  number spinner |==================*/
/*======================================================*/

let spinnerInput = document.querySelectorAll("input[type='number']");

Array.prototype.forEach.call(spinnerInput, function(item, index) {

  item.setAttribute('ID',item.getAttribute('name'));
  
  let numberSpinnerParent = item.parentNode;

  let spinnerDiv = document.createElement("DIV");
  spinnerDiv.setAttribute("class","numberSpinner");

  let spinnerSection = document.createElement("SECTION");

  let spinnerPlus = document.createElement("BUTTON");
  let spinnerMinus = document.createElement("BUTTON");
  spinnerPlus.setAttribute("type","button");
  spinnerMinus.setAttribute("type","button");
  spinnerPlus.setAttribute("class","numberPlus");
  spinnerMinus.setAttribute("class","numberMinus");
  spinnerPlus.innerHTML = '<span class="material-symbols-outlined">chevron_right</span>';
  spinnerMinus.innerHTML = '<span class="material-symbols-outlined">chevron_left</span>';

  numberSpinnerParent.appendChild(spinnerDiv);

  spinnerDiv.appendChild(spinnerMinus)
  spinnerDiv.appendChild(spinnerSection);
  spinnerSection.appendChild(item);
  spinnerDiv.appendChild(spinnerPlus);

});

/*========================================================*/
/*=================|   numberIncremet  |=================*/
/*======================================================*/

function numIncrement( numberInput, increase ) { 

	var myInputObject = document.getElementById( numberInput ); 
	myInputObject.focus();

	if ( increase ) { 
		myInputObject.value++;
		localStorage.setItem( "" + myInputObject.getAttribute( "name" ) + "", myInputObject.value );

	} else { 
		myInputObject.value--;
		localStorage.setItem( "" + myInputObject.getAttribute( "name" ) + "", myInputObject.value );
		 
	}; 

	if ( myInputObject.value > 999 ) {
		myInputObject.value = 999;
	};

	if ( myInputObject.value <= 0 ) {
		myInputObject.value = 0;
	};

}; 

/*========================================================*/
/*=================|   number  Events  |=================*/
/*======================================================*/

let numberSpinnerPlus = document.getElementsByClassName("numberPlus");
let numberSpinnerMinus = document.getElementsByClassName("numberMinus");

for (var i = 0; i <  numberSpinnerPlus.length; i++) {
    numberSpinnerPlus[i].addEventListener( "click" ,function(){
        numIncrement("" + this.previousElementSibling.firstChild.id + "",true)
    });
};

for (var i = 0; i < numberSpinnerMinus.length; i++) {
    numberSpinnerMinus[i].addEventListener( "click" ,function(){
        numIncrement("" + this.nextElementSibling.firstChild.id + "",false)
    });
};
/*========================================================*/
/*=================|   cart - bottom   |=================*/
/*======================================================*/

var $_cartBottom = document.getElementsByClassName("row")[1];
$_cartBottom.setAttribute("id","cart-bottom");

/*========================================================*/
/*================|   create CartHero   |================*/
/*======================================================*/

let cartHero = document.createElement("div");
cartHero.setAttribute("id","cart-hero");
cartHero.innerHTML = "<h2><span class='material-symbols-outlined'>shopping_cart</span>Your Shopping Cart</h2>"
let heroContainer = document.getElementById("cart-form");
heroContainer.parentElement.insertBefore(cartHero,heroContainer);

/*=======================================================*/
/*=============|   make checkout easier   |=============*/
/*=====================================================*/

let organizeCheckout = function(){
  let scrollPoint;
  scrollPoint = document.getElementsByClassName("title");
  for (let i = 0; i < scrollPoint.length; i++) {
    scrollPoint[i].setAttribute("id","title-" + i + "");
  };
  
  let goToCheckout = document.createElement("BUTTON");

  goToCheckout.setAttribute("type","button");
  goToCheckout.setAttribute("id","goToCheckout");
  goToCheckout.innerHTML = "<p>checkout</p><span class='material-symbols-outlined'>expand_circle_down</span>"

  document.getElementById("cart-bottom").appendChild(goToCheckout);

};
organizeCheckout();

const scrollButton = document.getElementById("goToCheckout");
const scrollLocation = document.getElementById("title-1");

scrollButton.addEventListener("click",function(){
   scrollLocation.scrollIntoView({ behavior: "auto" });
},false);

