function getdata(){
    const nik = document.getElementById("nik").value;
    const nama = document.getElementById("nama").value;
    const jeniskelamin = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    const golongan = document.querySelector('input[name="flexRadioDefault2"]:checked').value;
    const tunjangan = document.getElementById("tunjangan").value;
    const potongan = document.getElementById("potongan").value;
    
    let gapok;

    if(golongan == "1"){
      gapok = 5000000;
    }
    else if (golongan == "2"){
      gapok = 7000000;
    }
    else if (golongan == "3"){
      gapok = 9000000;
    }
    else if (golongan == "4"){
      gapok = 11000000;
    }

    const datakaryawan = makelist(nik, nama, jeniskelamin, golongan, tunjangan, potongan, calculation(gapok, tunjangan, potongan));
    
    const hasil = document.getElementById("hasil");
    hasil.append(datakaryawan);
}

function calculation(gaji, tunjangan, potongan){
  const totalgaji = parseInt(gaji) + parseInt(tunjangan) - parseInt(potongan);
  return totalgaji;  
}

function makelist(nik, nama, jeniskelamin, golongan, tunjangan, potongan, gaji){
    const textnik = document.createElement("td");
    const textnama = document.createElement("td");
    const textjeniskelamin = document.createElement("td");
    const textgolongan = document.createElement("td");
    const texttunjangan = document.createElement("td");
    const textpotongan = document.createElement("td");
    const textgaji = document.createElement("td");
    textnik.innerText = nik;
    textnama.innerText = nama;
    textjeniskelamin.innerText = jeniskelamin;
    textgolongan.innerText = golongan;
    texttunjangan.innerText = tunjangan;
    textpotongan.innerText = potongan;
    textgaji.innerText = gaji;

    const bungkus = document.createElement("tr");

    bungkus.append(textnik, textnama, textjeniskelamin, textgolongan, texttunjangan, textpotongan, textgaji);
    
    return bungkus;
}

const inputform = document.getElementById("inputform");

inputform.addEventListener("submit", function(event){
    event.preventDefault();
    getdata();
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal2){
    modal2.style.display = "none";
  }
}

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}
