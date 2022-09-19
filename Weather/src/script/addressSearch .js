export async function getAddress(street, city, county, state, country, postalcode){
    return new Promise((resolve, reject) => {
        
        let url = `https://nominatim.openstreetmap.org/search.php?street=${street}&city=${city}&county=${county}&state=${state}&country=${country}&postalcode=${postalcode}&format=geojson`
        console.log(url);
        fetch(url).then(res => resolve(res.json()));
    });



}