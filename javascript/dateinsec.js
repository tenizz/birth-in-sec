

// const currentdate = new Date().toLocaleDateString('en-US');
const currentdate = new Date();


document.getElementById("myButton").onclick = function(){
	var myName = document.getElementById("UDate").value;
	// var tmp = new Date(myName);
	// console.log(tmp);
	myName = new Date(myName).getTime() / 1000;
	// var passedtime = currentdate - myName;
	// window.alert(myName + " " + currentdate);
	var tmp = currentdate.getTime() / 1000;
	passedtime = tmp - myName;
	window.alert(Math.round(passedtime) - 21600 + " seconds have passed since you were born");
	// console.log("Hello, Your Birth Date is in",myName);
}
	