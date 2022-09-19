export async function getAddress(street, city, county, state, country, postalcode){
    return new Promise((resolve, reject) => {
        
        let url = `https://nominatim.openstreetmap.org/search.php?street=${street}&city=${city}&county=${county}&state=${state}&country=${country}&postalcode=${postalcode}&format=geojson`
        //console.log(url);
        fetch(url).then(res => resolve(res.json()));
    });
}

export async function reverseAddress(lat, lon){
    let url = `https://nominatim.openstreetmap.org/reverse?${lat}&lon=${lon}&format=jsonv2`;
    return new Promise((resolve, reject) => {
        fetch(url).then(res => resolve(res.json()))
    });
}