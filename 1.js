// do not change this code

//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
//var a = input[0]; // 'Thamgo' akan masuk ke var a
//var b = parseInt(input[1]); // 12 akan masuk ke var b
//var c = input[2]; // 'Departemen Keamanan' akan masuk ke var c

/*
write your pseudocode here
STORE city AS STRING WITH a
STORE age AS NUMBER WITH b
STORE departement AS STRING WITH c

IF a AS STRING WITH NOT Thamgo
DISPLAY "Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo."
END IF
ELSE
    STORE X SET CALCULATE 18 MINUS age
    STORE Y SET CALCULATE 31 MINUS age
    IF age AS NUMBER LESS THAN EQUAL 17
    DISPLAY "Anda masih " CONCA X CONCA" tahun dibawah usia minimal agar dapat diterima kerja."
    ELSE IF departement AS STRING WITH "Departemen Keamanan" AND age MORE THAN 30
    DISPLAY "Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon."
    ELSE IF departement AS STRING WITH "Departemen Intelijen" AND MORE THAN 30
    DISPLAY "Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon."
    ELSE IF departement AS STRING WITH "Departemen Keamanan" AND age LESS THAN EQUAL 30
    DISPLAY "Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan " CONCA Y CONCA " tahun lagi anda masuk divisi senior."
    ELSE IF departement AS STRING WITH "Departemen Intelijen" AND age LESS THAN EQUAL 30
    DISPLAY "Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan " CONCA Y CONCA " tahun lagi anda masuk divisi senior."
END IF
*/

var city = "Thamgo" //a;
var age = 25 //b;
var departement = "Departemen Intelijen"//c;
// jangan ubah isi semua variabel yang di atas

//write your code below here
if (city !== "Thamgo") {
    console.log("Maaf anda tidak bisa mendaftar karena bukan warga kota Thamgo.");
}
else {
    let X = 18 - age ;
    let Y =31 - age ;
    if (age <= 17) {
        console.log("Anda masih " + X + " tahun dibawah usia minimal agar dapat diterima kerja.");
    }
    else if (departement === "Departemen Keamanan" && age > 30 ) { 
        console.log("Anda diterima di divisi senior dan berada dibawah pimpinan James Lordon.");
    }
    else if (departement === "Departemen Intelijen" && age > 30 ) { 
        console.log("Anda diterima di divisi senior dan berada dibawah pimpinan Barbara Lordon.");
    }
    else if (departement === "Departemen Keamanan" && age <= 30 ) { 
        console.log("Anda diterima di divisi junior dan berada dibawah pimpinan Jason Toad, dan " + Y + " tahun lagi anda masuk divisi senior.");
    }
    else if (departement === "Departemen Intelijen" && age <= 30 ) { 
        console.log("Anda diterima di divisi junior dan berada dibawah pimpinan Tim Brake, dan " + Y + " tahun lagi anda masuk divisi senior.");
    }
}