// let abs = ['banana', 'apple']
// console.log(abs);

// let obj = {
//     Id:29,
//     name:OBJECT
// }

// console.log(obj);

let wrapper = document.querySelector('.wrapper')

console.log(wrapper);

const  phones = [
    {
        "id": 1,
        "name": "iphone",
        "oldPrice": "99.999.999sum",
        "newPrice": "99.999.999",
        "img":"./iphone.jfif"
        
    },

    {
        "id": 2,
        "name": "Simsung",
        "oldPrice": "9.999.999sum",
        "newPrice": "9.999.999",
        "img":"https://images.samsung.com/is/image/samsung/assets/uz_uz/2401/home/HOME_E3_Global_264x264_mo.png?$264_264_PNG$"
        
    },

    {
        "id": 3,
        "name": "Redma",
        "oldPrice": "999.999sum",
        "newPrice": "99.999",
        "img":"https://www.creditasia.uz/upload/iblock/c2f/0sjx33b5zkdeumnyfy7k1u4ze0p9uvd7/smartfon-xiaomi-redmi-12-8-256gb-polar-silver.webp"
        
    }
]


phones.map((tel) => {
    wrapper.innerHTML += `
    <div class="card">
    <img src="${tel.img}" alt="" class="iphone">
    <h1>${tel.name}</h1>
    <s>${tel.oldPrice}</s>
    <p>${tel.newPrice}</p>
    </div>
    `
})




