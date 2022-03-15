let elonBlock = document.querySelector('.elonBlock')
let elon = [{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/f2ozf01zpvm02-UZ/image;s=644x461" ,
    elon_name:"Ремонт телевизоров" ,
    address:"Toshkent, Yashnobod tumani Kecha 14:31" ,
    narxi:"10 у.е.",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/9328yndnmffu1-UZ/image;s=644x461" ,
    elon_name:"Аккумуляторы Mutlu 120 Ah" ,
    address:"Toshkent, Yakkasaroy tumani 3 mart" ,
    narxi:"170 у.е.",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/336zwxotdbwv3-UZ/image;s=644x461" ,
    elon_name:"Lean MAss Gainer 3kg дона ва оптомга" ,
    address:"Toshkent, Chilonzor tumani Kecha 11:47" ,
    narxi:"149 000 so’m",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/yhcsvm2lr279-UZ/image;s=644x461" ,
    elon_name:"Продается 5-и этажное здание в центре Ташкента на Малой" ,
    address:"Toshkent, Mirzo-Ulug‘bek tumani Kecha 20:07" ,
    narxi:"30 000 000 000 so’m",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/cca854pzrkq93-UZ/image;s=644x461" ,
    elon_name:"Зеркало выпуклое 60см. дорожние зерколо. обзорние зеркола" ,
    address:"Toshkent, Olmazor tumani Kecha 13:32" ,
    narxi:"950 000 so’m",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/txakthld62vk2-UZ/image;s=644x461" ,
    elon_name:"Сухой туман" ,
    address:"Toshkent, Mirzo-Ulug‘bek tumani Kecha 09:15" ,
    narxi:"4 500 у.е.",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/o653r7qodyvy-UZ/image;s=644x461" ,
    elon_name:"Хужалик молларий" ,
    address:"Samarqand Kecha 15:10" ,
    narxi:"",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/jo6xdbun30xh1-UZ/image;s=644x461" ,
    elon_name:"Нексия-2 1,6 Donc lux" ,
    address:"Toshkent, Yunusobod tumani Kecha 19:35" ,
    narxi:"5 800 у.е.",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/7lu9tpov84n22-UZ/image;s=644x461" ,
    elon_name:"Строящийся объект в стадий котлована на Юнусабдском р-н в" ,
    address:"Toshkent, Yunusobod tumani Kecha 10:02" ,
    narxi:"8 000 000 so’m",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/bt4qcoqjhpyn2-UZ/image;s=644x461" ,
    elon_name:"Продается земельный участок" ,
    address:"Samarqand 4 mart" ,
    narxi:"32 000 у.е.",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/fxrrw3bewtvy-UZ/image;s=644x461" ,
    elon_name:"Уголок янги ишлаб чикарувчидан" ,
    address:"Bog'ot Bugun 07:32" ,
    narxi:"4 000 000 so’m",
    like:"/img/love.png",
   },{
    elon_img:"https://apollo-olx.cdnvideo.ru/v1/files/whdltacz74hu2-UZ/image;s=644x461" ,
    elon_name:"Кислородный концентратор welkin" ,
    address:"Toshkent, Mirobod tumani 4 mart" ,
    narxi:"600 у.е.",
    like:"/img/love.png",
   },
]
elon.forEach((item) => {
    let elonlar = document.createElement('div')
    elonlar.classList.add('Elonlar')
    let h1_block1 = document.createElement('div')
    h1_block1.classList.add('h1_block1')
    let h1One = document.createElement('h1')
    let elon_container = document.createElement('div')
    elon_container.classList.add('elon_container')
    let  elon_container1 = document.createElement('div')
    elon_container1.classList.add('elon_container1')
    let elon_Img = document.createElement('div')
    elon_Img.classList.add('elon_Img')
    let elon_picture = document.createElement('img')
    let elon_name = document.createElement('div')
    elon_name.classList.add('elon_name')
    let elon_namep = document.createElement('p')
    let address = document.createElement('div')
    address.classList.add('address')
    let addressp = document.createElement('p')
    let cost = document.createElement('div')
    cost.classList.add('cost')
    let costp = document.createElement('p')
    let costimg = document.createElement('img')

    elon_picture.setAttribute('src' , item.elon_img)
    elon_namep.innerText = item.elon_name
    addressp.innerText = item.address
    costp.innerText = item.narxi
    costimg.setAttribute('src', item.like)


    elonlar.append(h1_block1)
    h1_block1.append(h1One)
    elonlar.append(elon_container)
    elon_container.append(elon_container1)
    elon_container1.append(elon_Img)
    elon_Img.append(elon_picture)
    elon_container1.append(elon_name)
    elon_name.append(elon_namep)
    elon_container1.append(address)
    address.append(addressp)
    elon_container1.append(cost)
    cost.append(costp)
    cost.append(costimg)
    elonBlock.appendChild(elonlar)
})
let lastScrollTop = 0
let header = document.querySelector('.header')
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document
                    .documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            header.style.top="-75px"
        } else{
            header.style.top="0"
        }
        lastScrollTop = scrollTop
})





