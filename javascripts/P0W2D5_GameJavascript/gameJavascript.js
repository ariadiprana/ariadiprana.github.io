/*
  Created By   : ariadiprana
  Date Created : 20180810
*/

var angka        = new Array(),
	hasilAkhir   = "0",
	angkaBaru    = "0",
	operator     = ".";

var klikOperator = false;

var startDate    = new Date(),
	endDate      = new Date();

var sec          = 0, 
	miliSec      = 0;


function randomAngka(){
	var angka = new Array();
	for(var i=0 ; i<4 ; i++){
		  var randomnumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
		  var found=false;
		  for(var i=0;i<angka.length;i++){
			if(angka[i]==randomnumber){found=true;break}
		  }
		  if(!found)angka[angka.length]=randomnumber;
	}
	return angka;
}

function mulaiPermainan(){
	startDate = new Date()
	angka = randomAngka();
	hasilAkhir = "0";
	angkaBaru = "0"
	operator = "+";

	document.getElementById("randomAngka1").innerHTML = angka[0];
	document.getElementById("randomAngka2").innerHTML = angka[1];
	document.getElementById("randomAngka3").innerHTML = angka[2];
	document.getElementById("randomAngka4").innerHTML = angka[3];

	document.getElementById("bt_angka1").value = angka[0];
	document.getElementById("bt_angka2").value = angka[1];
	document.getElementById("bt_angka3").value = angka[2];
	document.getElementById("bt_angka4").value = angka[3];	

	document.getElementById("total").innerHTML = "";
	document.getElementById("pesan").innerHTML= "";
}

function klikAngka(angkaBaru){
	if(klikOperator){
		hasilAkhir = evaluasiHasil(hasilAkhir,operator,angkaBaru)
	}
	else{
		hasilAkhir = evaluasiHasil("0","+",angkaBaru)
	}
	document.getElementById("total").innerHTML = hasilAkhir;
	klikOperator = false;
}


function evaluasiHasil(hasilAkhir,operator,angkaBaru){
	var akhir = nerdamer(hasilAkhir+operator+angkaBaru).evaluate();
	if(akhir==24)
	{
		endDate = new Date();
		var diff = endDate-startDate;
		     sec = (diff/1000)%60;
		document.getElementById("pesan").innerHTML= "Selamat !! anda mencapai 24 dalam waktu : <b>"+sec +" </b>Second";
	}
	return akhir;
}



function bt_angka1(){
	klikAngka(angka[0]);
}
function bt_angka2(){
	klikAngka(angka[1]);
}
function bt_angka3(){
	klikAngka(angka[2]);
}
function bt_angka4(){
	klikAngka(angka[3]);
}


function bt_tambah(){
	operator="+";
	klikOperator=true;
}
function bt_kurang(){
	operator="-";
	klikOperator=true;
}
function bt_kali(){
	operator="*";
	klikOperator=true;
}
function bt_bagi(){
	operator="/";
	klikOperator=true;
}
