/*
  Created By   : ariadiprana
  Date Created : 20180810
*/


/*
  ========================== MAIN SUIT ==========================

1. Buatlah fungsi pilihan aksi pengguna

	Pilihan aksi akan menanyakan "Jempol / Telunjuk / Kelingking?". 
	Lalu jika pengguna menulis "Telunjuk" maka dicetak "telunjuk" pada console. 
	Kita dapat memanggil fungsi aksi tersebut seperti berikut, yang akan disimpan dalam sebuah variabel.

	var pengguna = pilihanPengguna() // pengguna mengisi pilihan
	// misalnya "telunjuk"

2. Buatlah fungsi acak yang akan digunakan otomatis oleh lawan

	Fungsi acak akan mencetak antara "jempol" / "telunjuk" / "kelingking". Fungsi tersebut akan dipanggil seperti berikut, yang akan disimpan dalam sebuah variabel juga. Akan menghasilkan string "jempol" jika nilanya antara 0-0.33, string "telunjuk" jika nilainya antara 0.34-0.66, string "kelingking" jika nilainya antara 0.67-1. Gunakan percabangan if/else.

	var lawan = pilihanLawan() // lawan mengacak angka antara 0 hingga 1
	// lalu menghasilkan string misalnya "kelingking"

3. Buatlah fungsi bertarung yang akan membandingkan pilihan pengguna dan lawan. Pemenang ditentukan sesuai aturan suit lokal, gunakan percabangan if/else ataupun switch/case. Lalu nama pemenang akan ditampilkan di akhir.

	bertarung(pengguna, lawan)
	// menghasilkan string "Pemenangnya adalah: Pengguna" atau "Pemenangnya adalah: Komputer"
  =============================================================
*/

function batuKanan(){
	var lawan = pilihanLawan();
	var pengguna = "batu";
	bertarung(lawan,pengguna);
	//document.getElementById("pengguna").innerHTML = "batu";
}
function guntingKanan(){
	var lawan = pilihanLawan();
	var pengguna = "gunting";
	bertarung(lawan,pengguna);
}
function kertasKanan(){
	var lawan = pilihanLawan();
	var pengguna = "kertas";
	bertarung(lawan,pengguna);
}

function bertarung(a,b){
	if(a==="batu" && b==="gunting"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Menang");
	}
	if(a==="batu" && b==="batu"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Seri");
	}
	if(a==="batu" && b==="kertas"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Kalah");
	}

	if(a==="kertas" && b==="gunting"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Kalah");
	}
	if(a==="kertas" && b==="batu"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Menang");
	}
	if(a==="kertas" && b==="kertas"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Seri");
	}

	if(a==="gunting" && b==="gunting"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Seri");
	}
	if(a==="gunting" && b==="batu"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Kalah");
	}
	if(a==="gunting" && b==="kertas"){
		alert("Kamu : " +a+ " , Musuh : " +b+ " , Kamu Menang");
	}
}

function pilihanLawan(){
	var suit = ["batu","gunting","kertas"];
	
	//Get a random integer between `min` and `max`.
	//return Math.floor(Math.random() * (max - min + 1) + min);
	var arraypilihan = Math.floor(Math.random() * (2 - 0 + 1) + 0);
	return suit[arraypilihan];
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