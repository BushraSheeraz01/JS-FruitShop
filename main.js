let q1=0;let q2=0;let q3=0;
let Income=0;
let tAmount=0;

// 1. increment & decrement in apple buttons
// 2. agr value 0 ho to decrement button kam na kry

function decrementApple(){
	if(document.getElementById("btnInp1").value==0)
	{	
	}else{
		q1=--document.querySelector("#btnInp1").value;
	}
	totalAmount();
}
function incrementApple() {
	Income=document.getElementById("rs").value;
	tAmount=(q1*10)+(q2*15)+(q3*7);
	if(Income <= tAmount + 10)
	{
		alert("Not Enough Money");
	}else
	{
		q1=++document.querySelector("#btnInp1").value;
	}
	totalAmount();
}

// 1. calculate apple, orange and banana price.
// 2. apple,mango or banana ki price ko tAmount mai store krwaein
// 3. total amount ki value tAmount se replace krwani hai


function totalAmount()
{
	// tAmount=(quantity*price);
	// document.getElementById("amount").innerHTML=tAmount;
	tAmount=(q1*10)+(q2*15)+(q3*7);
	document.getElementById("amount").innerHTML=tAmount;
	
	//alert(tAmount);
}


// orange
function decrementOrange(){
		if(document.getElementById("btnInp2").value==0)
	{	
	}else{
		q2=--document.querySelector("#btnInp2").value;
	}
	totalAmount();
}
function incrementOrange() {
	Income=document.getElementById("rs").value;
	tAmount=(q1*10)+(q2*15)+(q3*7);
	if(Income <= tAmount + 15)
	{
		alert("Not Enough Money");
	}else
	{
		q2=++document.querySelector("#btnInp2").value;
	}
	totalAmount();
}

// Banana
function decrementBanana(){
	if(document.getElementById("btnInp3").value==0)
	{	
	}else{
		q3=--document.querySelector("#btnInp3").value;
	}
	totalAmount();
}
function incrementBanana() {
	Income=document.getElementById("rs").value;
	tAmount=(q1*10)+(q2*15)+(q3*7);
	if(Income <= tAmount + 7)
	{
		alert("Not Enough Money");
	}else
	{
		q3=++document.querySelector("#btnInp3").value;
	}totalAmount();
}