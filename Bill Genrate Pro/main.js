// let dataGet = document.querySelectorAll(".getData").value;
let samosa_prz = 10,
    kahori_prz = 12,
    vadapaav_prz = 15,
    maggi_prz = 40;

let samosa_qty, kachori_qty, vadapaav_qty, maggi_qty;

let samosa_show, kachori_show, vadapaav_show, maggi_show;

document.getElementById("name").addEventListener("keyup", function () {
  document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function () {
  document.getElementById("email2").innerHTML = this.value;
});

document.getElementById("mobile").addEventListener("keyup", function () {
  document.getElementById("mobile2").innerHTML = this.value;
});


document.getElementById('smosa').addEventListener('keyup', function () {

if (this.value == ""|| this.value == 0 ) {
    samosa_show = "";  
    prizShow();
}

else{
    samosa_qty = this.value;
    samosa_show = "<tr><td>Smosa</td><td>Rs "+samosa_qty +"</td><td>${samosa_qty}</td><td>samosa_prz X ${samosa_qty} = ${samosa_prz * samosa_qty}</td></tr>"
    prizShow();
}

});


document.getElementById('kachori').addEventListener('keyup', function () {
    if (this.value == ""|| this.value == 0 ) {
        kachori_show = "";  
        prizShow();
    }
    
    else{
        kachori_qty = this.value;
        kachori_show = `<tr><td>Kachori</td><td>Rs ${kahori_prz}</td><td>${kachori_qty}</td><td>${kahori_prz} X ${kachori_qty} = ${kahori_prz * kachori_qty}</td></tr>`
        prizShow();
    }
});

document.getElementById('vadapav').addEventListener('keyup', function () {
    if (this.value == ""|| this.value == 0 ) {
        vadapaav_show = "";  
        prizShow();
    }
    

else{
    vadapaav_qty = this.value;
    vadapaav_show = `<tr><td>Vadapaav</td><td>Rs ${vadapaav_prz}</td><td>${vadapaav_qty}</td><td>${vadapaav_prz} X ${vadapaav_qty} = ${vadapaav_prz * vadapaav_qty}</td></tr>`
    prizShow();
}
        
});

 document.getElementById('maggi').addEventListener('keyup', function () {
    if (this.value == ""|| this.value == 0 ) {
        maggi_show = "";  
        prizShow();
    }
    
    else{
        maggi_qty = this.value;
        maggi_show = `<tr><td>Maggi</td><td>Rs ${maggi_prz}</td><td>${maggi_qty}</td><td>${maggi_prz} X ${maggi_qty} = ${maggi_prz * maggi_qty}</td></tr>`
        prizShow();
    }
    
});

function prizShow(){

document.getElementById('billestimate').innerHTML = samosa_show;



}

