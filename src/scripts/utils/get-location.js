import wilayah from '../../../wilayah.json'

const nearestPlace = (lat , lng) => {

    let items = []
    let jml = wilayah.length

    for(let n = 0; n < jml; n++){
        wilayah[n].jarak = distance(lat , lng , wilayah[n].lat, wilayah[n].lon,'K')
    }
    wilayah.sort(urutkanJarak)
    for(let n = 0; n < jml; n++){
        items.push([
                    {
                     'provinsi':wilayah[n].propinsi,
                     'kota':wilayah[n].kota,
                     'jarak':wilayah[n].jarak.toFixed(2)+' km',
                    }])
        if(n === 0) break
    }
    return items
}

const distance = (lat1, lon1, lat2, lon2) => {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    return Math.round((dist * 1.609344) * 1000) / 1000;
}

const urutkanJarak = (a, b) =>{
    if (a['jarak'] === b['jarak']) {
        return 0;
    }
    else {
        return (a['jarak'] < b['jarak']) ? -1 : 1;
    }
}
export default nearestPlace;