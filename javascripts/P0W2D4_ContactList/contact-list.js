/*
  Created By   : ariadiprana
  Date Created : 20180811
*/
var contactList         = new Array();

var contact             = Object.create(null);
		contact.name    = "";
		contact.email   = "";
		contact.telp    = "";


function tambahContact(name,email,telp){
	var contactBaru       = Object.create(contact);
		contactBaru.name  = name;
		contactBaru.email = email;
		contactBaru.telp  = telp;

	contactList.push(contactBaru);

}


function addContact(){
	var name  = prompt("Nama anda adalah ");
	var email = prompt("Email anda adalah ");
	var telp  = prompt("Telp anda adalah ");
	tambahContact(name,email,telp);
	document.getElementById("hasil").innerHTML = "Total contact tersimpan ada : " + contactList.length;
	printContactList();
}1

function deleteContact(){
	var name = prompt("Masukkan nama yang ingin di hapus");
	var dataPerLine  = ""; 
	var tableHead    = "<tr> <th>Name</th> <th>Email</th> <th>Telephone</th> </tr>"
	var found = false;

	for(var i=0 ; i<contactList.length ; i++)
	{
		if(contactList[i].name.toUpperCase() === name.toUpperCase()){
			found = true;
			break;
		}
		
	}
	if (found){
		contactList.splice( i, 1 );
		document.getElementById("hasil").innerHTML = "Total contact tersimpan ada : " + contactList.length;
		document.getElementById("pesan").innerHTML = "";
	}
	else{
		document.getElementById("pesan").innerHTML = "Nama "+name+" tidak ditemukan dalam daftar kontak ini";	
	}
	printContactList();
	
}

function printContactList(){
	var dataPerLine  = ""; 
	var tableHead    = "<tr> <th>Name</th> <th>Email</th> <th>Telphone</th> </tr>"
	if(contactList.length>0){
		for(var i=0 ; i<contactList.length ; i++)
		{

			dataPerLine += "<tr><td>" + contactList[i].name + "</td>" + "<td>" + contactList[i].email + "</td>" + "<td>" + contactList[i].telp + "</td></tr>";
		}

		document.getElementById("showContactList").innerHTML = "<table>" + tableHead + dataPerLine + "</table>";		
	}
	else{
		document.getElementById("showContactList").innerHTML = "";	
		document.getElementById("pesan").innerHTML = "";
	}
}

function cariContact(){
	var name = prompt("Masukkan nama yang ingin di cari");
	var dataPerLine  = ""; 
	var tableHead    = "<tr> <th>Name</th> <th>Email</th> <th>Telphone</th> </tr>"
	var found = false;

	for(var i=0 ; i<contactList.length ; i++)
	{
		if(contactList[i].name.toUpperCase() === name.toUpperCase()){
			found = true;
			break;
		}
		
	}
	if (found){
		dataPerLine += "<tr><td>" + contactList[i].name + "</td>" + "<td>" + contactList[i].email + "</td>" + "<td>" + contactList[i].telp + "</td></tr>";
		document.getElementById("showContactList").innerHTML = "<table>" + tableHead + dataPerLine + "</table>";
		document.getElementById("pesan").innerHTML = "";
	}
	else{
		document.getElementById("pesan").innerHTML = "Nama "+name+" tidak ditemukan dalam daftar kontak ini";	
		printContactList();
	}
}
