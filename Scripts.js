function myFunction() {
    var x, text;
    var y, text;
    var z, text;
  
    // Get the value of input field with id="numb"
  
    x = document.getElementById("weight").value;
    y = document.getElementById("age").value;
    z = document.getElementById("height").value;
  
    // If x is Not a Number or less than one or greater than 10, output "input is not valid"
    // If x is a number between 1 and 10, output "Input OK"
    let cmtom = z / 100
    let BMI = x / cmtom ** 2;
    // Bulatkan BMI ke 1 angka desimal
    BMI = BMI.toFixed(1);
    if (BMI <= 18.5) {
      text1 = "Kekurangan berat badan";
      text2 = BMI;
      text3 = "Anda memiliki kekurangan berat badan";
      text4 = "Hasil BMI dibawah 18.5 <br> anda berada dalam keadaan kekurangan berat badan <br> cara terbaik menambah berat badan adalah dengan mengatur kalori makanan yang <br> dikonsumsi dan mengatur olaharaga <br> Jika BMI anda dalam kategori ini maka anda dianjurkan untuk menambah <br> berat badan hingga normal"
      text5 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. <br> Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan <br> berat badan Anda.";
      text6 = "Beberapa penyakit yang berasal dari kekurangan berat badan";
      text7 = "Osteoporosis <br> Gangguan Makan <br> Penyakit Kulit <br> Penyakit jantung";
    }

    else if (BMI >= 18.5 && BMI < 24.9) {
      text1 = "Normal ideal";
      text2 = BMI;
      text3 = "Anda memiliki berat badan yang ideal";
      text4 = "Hasil BMI antara 18.5 dan 24.9 <br> Anda berada dalam kategori berat badan ideal. <br> Pertahankan pola makan dan gaya hidup sehat.";
      text5 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. <br> Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan <br> berat badan Anda.";
    }

    else if (BMI >= 25.0 && BMI < 29.9) {
      text1 = "Kelebihan berat badan";
      text2 = BMI;
      text3 = "Anda memiliki kelebihan berat badan";
      text4 = "Hasil BMI antara 25.0 dan 29.9 <br> Anda berada dalam kategori kelebihan berat badan. <br> Disarankan untuk mengatur pola makan dan olahraga.";
      text5 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. <br> Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan <br> berat badan Anda.";
      text6 = "Beberapa penyakit yang berasal dari kelebihan berat badan";
      text7 = "Diabetes <br> Hipertensi <br> Osteoarthritis <br> Penyakit jantung";
    }
    else if (BMI >= 30.0) {
      text1 = "Kegemukan (Obesitas)";
      text2 = BMI;
      text3 = "Anda berada dalam kategori obesitas";
      text4 = "Hasil BMI di atas 30.0 <br> Anda berada dalam kategori obesitas. <br> Sangat disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik.";
      text5 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. <br> Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan <br> berat badan Anda.";
      text6 = "Beberapa penyakit yang berasal dari Obesitas";
      text7 = "Diabetes <br> Hipertensi <br> Osteoarthritis <br> Penyakit jantung";
    }
    else{
      text = "Input tidak valid";
    }
    document.getElementById("demo1").innerHTML = text1;
    document.getElementById("demo2").innerHTML = text2;
    document.getElementById("demo3").innerHTML = text3;
    document.getElementById("demo4").innerHTML = text4;
    document.getElementById("demo5").innerHTML = text5;
    document.getElementById("demo6").innerHTML = text6;
    document.getElementById("demo7").innerHTML = text7;
  }