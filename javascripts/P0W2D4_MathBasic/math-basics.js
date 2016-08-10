/*
  Created By   : ariadiprana
  Date Created : 20180810
*/


/*
  ========================== Task 1 ==========================
  Task         : parameter pertama: bilangan yang dipangkatkan
                 parameter kedua: bilangan pangkat
                 return: hasil perpangkatan
  Sample       : pangkatAngka(2, 3) // 2 pangkat 3
                 menghasilkan "8"
  =============================================================
*/

function pangkatAngkaValidation(){
	//init value
	var valResult = [];
	var angka1 = document.getElementById("T1_angka1").value;
	var angka2 = document.getElementById("T1_angka2").value;
	
	//validation
	if(!angka1){
		valResult.push("Angka 1 tidak boleh kosong");
	}
	else{
		if(isNaN(angka1)){
			valResult.push("Angka 1 harus diisi dengan angka");
		}
	}
	
	if(!angka2){
		valResult.push("Angka 2 tidak boleh kosong");
	}
	else{
		if(isNaN(angka2)){
			valResult.push("Angka 2 harus diisi dengan angka");
		}
	}	

	return valResult;
	
}

function pangkatAngkaCalculation() {
	var valResult = new Array();
	valResult = pangkatAngkaValidation();

	if(valResult.length>0){
		document.getElementById("pangkatAngkaResult").value = "";
		alert(valResult.join("\n"));
	}
	else{
		var angka1 = document.getElementById("T1_angka1").value;
		var angka2 = document.getElementById("T1_angka2").value;
		document.getElementById("pangkatAngkaResult").value = Math.pow(angka1,angka2)
	}	
	
}



/*
  ========================== Task 2 ==========================
  Task         : parameter pertama: bilangan yang diakarkan
  				 return: hasil akar
  Sample       : akarKuadrat(9) // akar kuadrat 9
				 // menghasilkan "3"
  =============================================================
*/

function akarAngkaValidation(){
	//init value
	var valResult = [];
	var angka1 = document.getElementById("T2_angka1").value;
	
	//validation
	if(!angka1){
		valResult.push("Angka 1 tidak boleh kosong");
	}
	else{
		if(isNaN(angka1)){
			valResult.push("Angka 1 harus diisi dengan angka");
		}
	}

	return valResult;
}

function akarAngkaCalculation() {
	var valResult = new Array();
	valResult = akarAngkaValidation();

	if(valResult.length>0){
		document.getElementById("akarAngkaResult").value = "";
		alert(valResult.join("\n"));
	}
	else{
		var angka1 = document.getElementById("T2_angka1").value;
		document.getElementById("akarAngkaResult").value = Math.sqrt(angka1);
	}
}

/*
  ========================== Task 3 ==========================
  Task         : parameter pertama: panjang A dalam cm
  				 parameter kedua: panjang B dalam cm
  				 return: panjang C dalam cm
  Sample       : hipotenusa(3, 4) // akar dari (3^2 + 4^2)
				 // menghasilkan "5 cm"
  =============================================================
*/

function hipotenusaValidation(){
	//init value
	var valResult = [];
	var angka1 = document.getElementById("T3_angka1").value;
	var angka2 = document.getElementById("T3_angka2").value;
	
	//validation
	if(!angka1){
		valResult.push("Angka 1 tidak boleh kosong");
	}
	else{
		if(isNaN(angka1)){
			valResult.push("Angka 1 harus diisi dengan angka");
		}
	}

	if(!angka2){
		valResult.push("Angka 2 tidak boleh kosong");
	}
	else{
		if(isNaN(angka2)){
			valResult.push("Angka 2 harus diisi dengan angka");
		}
	}

	return valResult;
}

function hipotenusaCalculation() {
	var valResult = new Array();
	valResult = hipotenusaValidation();

	if(valResult.length>0){
		document.getElementById("hipotenusaResult").value = "";
		alert(valResult.join("\n"));
	}
	else{
		var angka1 = document.getElementById("T3_angka1").value;
		var angka2 = document.getElementById("T3_angka2").value;
		
		document.getElementById("hipotenusaResult").value = Math.sqrt(Math.pow(angka1,2)+Math.pow(4,2))+" cm";
	}
}



/*
  ========================== Task 4 ==========================
  Task         : parameter pertama: panjang jari-jari dalam cm
  				 return: hasil luas lingkaran
  Sample       : luasLingkaran(7) // pi * r^2
				 // menghasilkan "154 cm"
  =============================================================
*/

function lingkaranValidation(){
	//init value
	var valResult = [];
	var angka1 = document.getElementById("T4_angka1").value;
	
	//validation
	if(!angka1){
		valResult.push("Angka 1 tidak boleh kosong");
	}
	else{
		if(isNaN(angka1)){
			valResult.push("Angka 1 harus diisi dengan angka");
		}
	}

	return valResult;
}

function lingkaranCalculation() {
	var valResult = new Array();
	valResult = lingkaranValidation();

	if(valResult.length>0){
		document.getElementById("lingkaranResult").value = "";
		alert(valResult.join("\n"));
	}
	else{
		var angka1 = document.getElementById("T4_angka1").value;
		var dua = "2";
		document.getElementById("lingkaranResult").value = (Math.PI*Math.pow(angka1,2)).toFixed(0) + " cm2";
	}
}