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

function mainSuit(){
	var pengguna = pilihanPengguna();
	var lawan    = pilihanLawan();
	bertarung(pengguna,lawan);
}

function pilihanPengguna(){
	var pilihan =  prompt("Masukkan pilihan kamu (Batu / Gunting / Kertas )");
	return pilihan.toUpperCase();
}


function bertarung(a,b){
	if(a==="BATU" && b==="GUNTING"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Menang";
	}
	if(a==="BATU" && b==="BATU"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Seri";
	}
	if(a==="BATU" && b==="KERTAS"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Kalah";
	}

	if(a==="KERTAS" && b==="GUNTING"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Kalah";
	}
	if(a==="KERTAS" && b==="BATU"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Menang";
	}
	if(a==="KERTAS" && b==="KERTAS"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Seri";
	}

	if(a==="GUNTING" && b==="GUNTING"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Seri";
	}
	if(a==="GUNTING" && b==="BATU"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Kalah";
	}
	if(a==="GUNTING" && b==="KERTAS"){
		document.getElementById("hasil").innerHTML = "Kamu : " +a+ " , Musuh : " +b+ " , Kamu Menang";
	}
}

function pilihanLawan(){
	//Get a random  between `min` and `max`.
	//return (Math.random() * (max - min + 1) + min);
	var mathRandom = (Math.random() * (1 - 0 + 1) + 0);
	var pilihanLawan;
	if (mathRandom <= 0.33) {
    	pilihanLawan = "BATU";
	} else if(mathRandom <= 0.66) {
	    pilihanLawan = "GUNTING";
	} else {
	    pilihanLawan = "KERTAS";
	}	

	return pilihanLawan;
}