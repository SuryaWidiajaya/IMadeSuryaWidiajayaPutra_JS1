
let BelanjaTotal = 0;
let BelanjaBakso = 0;
let BelanjaIkan = 0;
let BelanjaSoto = 0;
let uangPembeli = 200;



//Fungsi
function beliIkan() {
    let jenisIkan;
    let hargaSalmon = 50;
    let hargaTuna = 40;
    let hargaCod = 30;

    let beratIkan;
    const pernyataan = prompt("Apakah anda ingin membeli ikan?(Y/T)")

    //if
    if (pernyataan === "Y" || pernyataan === "y") {

        jenisIkan = prompt("Masukkan jenis ikan yang ingin Anda beli (salmon / tuna / cod):");
        beratIkan = prompt("Masukkan berat ikan yang ingin Anda beli (kilogram):");


        //nested if
        if (jenisIkan === "salmon") {
            BelanjaIkan = hargaSalmon * beratIkan;
        } else if (jenisIkan === "tuna") {
            BelanjaIkan = hargaTuna * beratIkan;
        } else if (jenisIkan === "cod") {
            BelanjaIkan = hargaCod * beratIkan;
        } else {
            console.log("Maaf, jenis ikan yang Anda masukkan tidak valid.");
        }
        
        uangPembeli -= BelanjaIkan

        //if else
        if (BelanjaIkan > uangPembeli) {
            console.log("Maaf, uang Anda tidak cukup untuk membeli ikan ini.");
        } else {
            console.log("Anda berhasil membeli " + beratIkan + " kilogram " + jenisIkan + ".");
            console.log("Total harga: $" + BelanjaIkan);
            console.log("Kembalian Anda: $" + (uangPembeli));
        }
    }


    // if
    if (pernyataan === "T" || pernyataan === "t") {
        alert("Terimakasih, sampai berjumpa lain waktu")
    }

}


//Fungsi
function beliBakso() {
    let hargaBakso = 10;
    let jumlahPorsi = prompt("Masukkan jumlah porsi bakso yang ingin Anda beli:");

    //for
    for (let i = 0; i < jumlahPorsi; i++) {
        BelanjaBakso += hargaBakso;
    }

    uangPembeli -= BelanjaBakso

    if (BelanjaSoto > uangPembeli) {
        console.log("Maaf, uang Anda tidak cukup untuk membeli ikan ini.");
    } else {
        console.log("Anda berhasil membeli bakso sebanyak " + jumlahPorsi + " Mangkuk.");
        console.log("Total harga: $" + BelanjaBakso);
        console.log("Kembalian Anda: $" + (uangPembeli));
    }

}


//Fungsi
function beliSoto() {
    let hargaSoto = 15;
    let jumlahPorsi = prompt("Masukkan jumlah porsi soto yang ingin Anda beli:");
    let i = 0;

    //while
    while (i < jumlahPorsi) {
        BelanjaSoto += hargaSoto;
        i++;
    }

    uangPembeli -= BelanjaSoto
    
    if (BelanjaSoto > uangPembeli) {
        console.log("Maaf, uang Anda tidak cukup untuk membeli ikan ini.");
    } else {
        console.log("Anda berhasil membeli soto sebanyak " + jumlahPorsi + " Mangkuk.");
        console.log("Total harga: $" + BelanjaSoto);
        console.log("Kembalian Anda: $" + (uangPembeli));
    }


}


//do while
do {
    pernyataan = prompt("Apakah anda ingin membeli Ikan (I), Bakso (B), atau Soto (S). Jika tidak (T)");
    

    //switch case
    switch (pernyataan) {
        case "I":
        case "i":
            beliIkan();
            break;
        case "B":
        case "b":
            beliBakso();
            break;
        case "S":
        case "s":
            beliSoto();
            break;
        case "T":
        case "t":
            console.log("Terima kasih, sampai jumpa lain waktu.");
            break;
        default:
            console.log("Pilihan tidak valid.");
    }
} while (pernyataan !== "T" && pernyataan !== "t");

hargaTotal = BelanjaBakso + BelanjaIkan + BelanjaSoto;

console.log("Total harga keseluruhan: $" + hargaTotal);


