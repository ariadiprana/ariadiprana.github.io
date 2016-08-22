var jawaban = 0;
var nyawa = 5

        function mulai(){
          nyawa = 5;
          jawaban = Math.floor(Math.random() * (10 - 1)) + 1;
          document.getElementById("nyawa").innerHTML = nyawa;

        };

        function tebak(){
          var input = document.getElementById("inputan").value;
          if(input>jawaban){
            nyawa--;
            document.getElementById("nyawa").innerHTML = nyawa;
            document.getElementById("hasil").innerHTML = "Angka kamu lebih besar daripada jawaban ";
          }
          else if(input<jawaban){
            nyawa--;
            document.getElementById("nyawa").innerHTML = nyawa;
            document.getElementById("hasil").innerHTML = "Angka kamu lebih kecil ";
          }
          else if(input==jawaban){
            document.getElementById("hasil").innerHTML = "Selamat Anda Berhasil"; 
          }

          if(nyawa==0){
          	document.getElementById("hasil").innerHTML = "Anda Kalah"; 
          	mulai();
          }
        };