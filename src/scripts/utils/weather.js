const cuaca = (kode) =>{
    let kodeCuaca = [0,1,2,3,4,5,10,45,60,61,63,80,95,97]
    let checkCuaca = kodeCuaca.find(code => code === parseInt(kode))
    if(checkCuaca === 0){
        return "Cerah"
    }
    if(checkCuaca === 1){
        return "Cerah Berawan"
    }
    if(checkCuaca === 2){
        return "Cerah Berawan"
    }
    if(checkCuaca === 3){
        return "Berawan "
    }
    if(checkCuaca === 4){
        return "Berawan Tebal"
    }
    if(checkCuaca === 5){
        return "Udara Kabur"
    }
    if(checkCuaca === 10){
        return "Asap "
    }
    if(checkCuaca === 45){
        return "Kabut "
    }
    if(checkCuaca === 60){
        return "Hujan Ringan"
    }
    if(checkCuaca === 61){
        return "Hujan Sedang"
    }
    if(checkCuaca === 63){
        return "Hujan Lebat "
    }
    if(checkCuaca === 80){
        return "Hujan Lokal"
    }
    if(checkCuaca === 95 ){
        return "Hujan Petir"
    }
    if(checkCuaca === 97){
        return "Hujan Petir"
    }
    return "Code Not Found"
}
export default cuaca