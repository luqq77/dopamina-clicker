const btn = document.querySelector("button")
const counter = document.querySelector(".counter")
const counter_text = document.querySelector(".counter_text")
const container = document.querySelectorAll(".container")
const price = document.querySelectorAll(".price")
const soundUpg = document.querySelector(".sound")
const subwayUpg = document.querySelector(".subway")
const btnUpg = document.querySelector(".btn")
const dvdUpg = document.querySelector(".dvd_upg")
const disUpg = document.querySelector(".dis")
const dvdSoundUpg = document.querySelector(".dvd_sound")
const counterUpg = document.querySelector(".counter_upg")
const pinwheelUpg = document.querySelector(".pinwheel")
const musicUpg = document.querySelector(".music")
const critUpg = document.querySelector(".crit")
const colorsUpg = document.querySelector(".colors")
const logoUpg = document.querySelector(".logo")
const slimeUpg = document.querySelector(".slime")
const weatherUpg = document.querySelector(".weather")
const shopUpg = document.querySelector(".shop_upg")
const rewardUpg = document.querySelector(".reward")
const link = document.querySelector("link[rel='icon']")
let counter_value = 0
let gain = 1
let autogain = 0
let autogain_timeout = 1000
let dvd_max = 0
let dvd_gain = 1
let DVDprice = 50
let critChance = 0.85
let temp 
let shownUpgrades
const music = new Audio("sound/Muzyka.mp3")

//button click sound
soundUpg.addEventListener("click", ()=>{
    if(counter_value >= 20){
        gain += 1
        soundUpg.id = "1"
        soundUpg.classList.add("disable")
        soundUpg.classList.remove("shown")
        counter_value -= 20
        check_function()
    }
})

//logo
logoUpg.addEventListener("click", ()=>{
    if(counter_value >= 75){
        logoUpg.classList.add("disable")
        logoUpg.classList.remove("shown")
        counter_value -= 75
        check_function()
        link.href = "img/icon.png"
    }
})

//subway surfers
subwayUpg.addEventListener("click", ()=>{
    if(counter_value >= 150){
        autogain += 2
        subwayUpg.id = "2"
        subwayUpg.classList.add("disable")
        subwayUpg.classList.remove("shown")
        document.querySelector(".subway_vid").classList.remove("disable")
        counter_value -= 150
        check_function()
    }
})

// crit upgrade
critUpg.addEventListener("click", ()=>{
    if(counter_value >= 250){
        critUpg.classList.add("disable")
        critUpg.classList.add("active")
        critUpg.classList.remove("shown")
        counter_value -= 250
        check_function()
    }
})

//button upgrade
btnUpg.addEventListener("click", ()=>{
    if(counter_value >= 120){
        gain += 3
        btnUpg.classList.add("disable")
        btn.classList.add("btn_upgraded")
        btnUpg.classList.remove("shown")
        counter_value-= 120
        check_function()
    }
})
//dvd 
dvdUpg.addEventListener("click", ()=>{


    if(counter_value >= DVDprice){
            document.querySelector(".dvd").classList.remove("hidden")
            dvdUpg.classList.remove("shown")
            counter_value-=DVDprice
            check_function()
            dvd_max += 1
            document.querySelector(".dvd_max").innerHTML = ` ${dvd_max}/5`
            if(dvd_max >=5){
                dvdUpg.classList.add("disable")
            }

    animate()
    }
})
    //dis 
    disUpg.addEventListener("click", ()=>{
    if(counter_value >= 400){
        autogain += 5
        disUpg.id = "4"
        disUpg.classList.add("disable")
        disUpg.classList.remove("shown")
        document.querySelector(".dis_vid").classList.remove("disable")
        document.querySelector(".dis_vid").play()
        counter_value -= 400
        check_function()
    }
})

    //DVD sound 
    dvdSoundUpg.addEventListener("click", ()=>{
        if(counter_value >= 500){
            dvd_gain += 2 
            dvdSoundUpg.classList.add("disable")
            dvdSoundUpg.classList.remove("shown")
            counter_value -= 500
            dvdSoundUpg.id = "8"
            check_function()
        }
    })

    //counter 
    counterUpg.addEventListener("click", ()=>{
    if(counter_value >= 800){
        autogain += 3
        critChance -= 0.15
        counterUpg.classList.add("disable")
        counterUpg.classList.remove("shown")
        counterUpg.id = "6"
        counter_value -= 800
        check_function()
    }
})
    //pinwheel background 
    pinwheelUpg.addEventListener("click", ()=>{
    if(counter_value >= 1100){
        autogain += 7
        pinwheelUpg.classList.add("disable")
        pinwheelUpg.classList.remove("shown")
        const pinwheel = document.querySelector(".background_vid")
        pinwheel.classList.remove("disable")
        pinwheel.play()
        pinwheel.playbackRate = 5.0
        counter_value -= 1100
        const layer =  document.querySelector(".background_vid_colors")
        layer.classList.remove("disable")
        setInterval(() => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            layer.style.backgroundColor = `rgb(${R}, ${G}, ${B}, 0.3)`
        }, 820)

        check_function()
    }
})
    //music 
    musicUpg.addEventListener("click", ()=>{
    if(counter_value >= 1300){
        gain += 6
        musicUpg.classList.add("disable")
        musicUpg.classList.remove("shown")
        counter_value -= 1300
        check_function()
        music.volume = 0.1
        music.play()
        document.querySelector(".wesele_gif").classList.remove("disable")
    }
})
    //colors 
    colorsUpg.addEventListener("click", ()=>{
    if(counter_value >= 900){
        const autogainPercent = autogain*15/100
        autogain += Math.round(autogainPercent)
        const gainPercent = gain*15/100
        gain += Math.round(gainPercent)
        colorsUpg.classList.add("disable")
        colorsUpg.classList.remove("shown")
        counter_value -= 900
        check_function()
        document.querySelectorAll(".upgrade").forEach((element)=> element.style.filter = "grayscale(0%)")
    }
})

    //slime video
    slimeUpg.addEventListener("click", ()=>{
        if(counter_value >= 1700){
            autogain += 10
            slimeUpg.classList.add("disable")
            slimeUpg.classList.remove("shown")
            document.querySelector(".slime_vid").classList.remove("disable")
            document.querySelector(".slime_vid").play()
            counter_value -= 1700
            document.querySelector(".dvd").firstChild.src = "img/slime_icon.png"
            check_function()
        }
        })

    //weather
        weatherUpg.addEventListener("click", ()=>{
        if(counter_value >= 2000){
            getWeather()
            weatherUpg.classList.add("disable")
            weatherUpg.classList.remove("shown")
            counter_value -= 2000
            check_function()
        }
        })

        const shop = document.querySelector(".shop")
        shop.children[0].addEventListener("click", ()=>{
            shop.children[1].classList.toggle("hidden")
            shop.children[2].classList.toggle("hidden")
            shop.children[3].classList.toggle("hidden")
            shop.children[4].classList.toggle("hidden")
            shop.children[5].classList.toggle("hidden")
            shop.classList.toggle("open")
        })


            //shop
            shopUpg.addEventListener("click", ()=>{
                if(counter_value >= 500){
                    shop.classList.remove("hidden")
                    shopUpg.classList.add("disable")
                    shopUpg.classList.remove("shown")
                    counter_value -= 500
                    check_function()
                }
                })

                const body = document.querySelectorAll("*")
                const cursor1 = document.querySelector(".cursor1")
                const cursor2 = document.querySelector(".cursor2")
                const cursor3 = document.querySelector(".cursor3")
                let activeCursors = 0
                cursor1.addEventListener("click", ()=>{
                if(!cursor1.classList.contains("active") && counter_value >= 300){
                    counter_value -= 300
                    cursor1.classList.add("active")
                    body.forEach((element)=> element.style.cursor = `url('img/cursor1.png'), auto`)
                    cursor1.style.color = "green"
                    document.querySelector(".cursor1_pricetag").innerHTML = "Kupione"
                    activeCursors+=1
                    check_function() 
                }
                else if(cursor1.classList.contains("active")){
                    body.forEach((element)=> element.style.cursor = `url('img/cursor1.png'), auto`)
                }
                })
                cursor2.addEventListener("click", ()=>{
                if(!cursor2.classList.contains("active") && counter_value >= 500){
                    counter_value -= 500
                    cursor2.classList.add("active")
                    body.forEach((element)=> element.style.cursor = `url('img/cursor2.png'), auto`)
                    cursor2.style.color = "green"
                    document.querySelector(".cursor2_pricetag").innerHTML = "Kupione"
                    activeCursors+=1
                    check_function() 
                }
                else if(cursor2.classList.contains("active")){
                    body.forEach((element)=> element.style.cursor = `url('img/cursor2.png'), auto`)
                }
                })
                cursor3.addEventListener("click", ()=>{
                if(!cursor3.classList.contains("active") && counter_value >= 900){
                    counter_value -= 900
                    cursor3.classList.add("active")
                    body.forEach((element)=> element.style.cursor = `url('img/cursor3.png'), auto`)
                    cursor3.style.color = "green"
                    document.querySelector(".cursor3_pricetag").innerHTML = "Kupione"
                    activeCursors+=1
                    check_function() 
                }
                else if(cursor3.classList.contains("active")){
                    body.forEach((element)=> element.style.cursor = `url('img/cursor3.png'), auto`)
                }
                })


            //reward
            rewardUpg.addEventListener("click", ()=>{
                if(counter_value >= 5000 && shownUpgrades.length == 1 && activeCursors == 3){
                    rewardUpg.classList.add("disable")
                    rewardUpg.classList.remove("shown")
                    document.querySelector(".click").classList.add("hidden")
                    document.querySelector(".addons").classList.add("hidden")
                    dvd.innerHTML = ""
                    shop.classList.add("hidden")
                    document.querySelector(".reward_screen").style.display = "flex"
                    document.querySelector(".david_video").play()
                    setTimeout(() => {
                        document.querySelector(".david_video").classList.add("hidden")
                    }, 19000);
                    shop.classList.add("hidden")
                    counter_value -= 5000
                    document.querySelector(".dis_vid").pause()
                    document.querySelector(".slime_vid").pause()
                    music.pause()
 
                    
                    check_function()
                }
                })



setInterval(()=>{
    if(autogain > 0){
        counter_value+=autogain
        check_function()
    }

    }, autogain_timeout)


const check_function = () => { 
    shownUpgrades = document.querySelectorAll(".shown")
    if(shownUpgrades.length < 4){
    if (counter_value > 20 * 25 / 100 && !soundUpg.classList.contains("disable")){
        soundUpg.classList.remove("vis_hidden")
        soundUpg.classList.add("shown")
        }
    if (counter_value > 75 * 25 / 100 && !logoUpg.classList.contains("disable")){
        logoUpg.classList.remove("hidden")
        logoUpg.classList.add("shown")
        }
    if (counter_value > 150 * 40 / 100 && !subwayUpg.classList.contains("disable")) {
        subwayUpg.classList.remove("hidden")
        subwayUpg.classList.add("shown")
        }
    if (counter_value > 120 * 40 / 100 && !btnUpg.classList.contains("disable")) {
        btnUpg.classList.remove("hidden")
        btnUpg.classList.add("shown")
        }
    if (counter_value > 50 * 25 / 100 && !dvdUpg.classList.contains("disable")) {
        dvdUpg.classList.remove("hidden")
         }
    if (counter_value > 400 * 40 / 100 && !disUpg.classList.contains("disable")) {
        disUpg.classList.remove("hidden")
        disUpg.classList.add("shown")
        }
    if (counter_value > 500 * 40 / 100 && !dvdSoundUpg.classList.contains("disable")) {
        dvdSoundUpg.classList.remove("hidden")
        dvdSoundUpg.classList.add("shown")
        }
    if (counter_value > 800 * 40 / 100 && !counterUpg.classList.contains("disable")) {
        counterUpg.classList.remove("hidden")
        counterUpg.classList.add("shown")
        }
    if (counter_value > 1100 * 40 / 100 && !pinwheelUpg.classList.contains("disable")) {
        pinwheelUpg.classList.remove("hidden")
        pinwheelUpg.classList.add("shown")
        }
    if (counter_value > 250 * 40 / 100 && !critUpg.classList.contains("disable")) {
        critUpg.classList.remove("hidden")
        critUpg.classList.add("shown")
        }
    if (counter_value > 200 * 40 / 100 && !colorsUpg.classList.contains("disable")) {
        colorsUpg.classList.remove("hidden")
        colorsUpg.classList.add("shown")
        }
    if (counter_value > 1300 * 40 / 100 && !musicUpg.classList.contains("disable")) {
        musicUpg.classList.remove("hidden")
        musicUpg.classList.add("shown")
        }
    if (counter_value > 1700 * 40 / 100 && !slimeUpg.classList.contains("disable")) {
        slimeUpg.classList.remove("hidden")
        slimeUpg.classList.add("shown")
        }
    if (counter_value > 2000 * 40 / 100 && !weatherUpg.classList.contains("disable")) {
        weatherUpg.classList.remove("hidden")
        weatherUpg.classList.add("shown")
        }
    if (counter_value > 500 * 40 / 100 && !shopUpg.classList.contains("disable")) {
        shopUpg.classList.remove("hidden")
        shopUpg.classList.add("shown")
        }
    if (counter_value >= 1300 && !rewardUpg.classList.contains("disable")) {
        rewardUpg.classList.remove("hidden")
        rewardUpg.classList.add("shown")
        }
}

    counter.innerHTML = counter_value


    price.forEach(element => counter_value >= element.innerHTML ? element.style.color = "green" : element.style.color = "red")
 }

 btn.addEventListener("click", ()=>{
    counter.innerHTML = counter_value
    if(critUpg.classList.contains("active")){
        if(Math.random() < critChance){
            counter_value+=gain
        }
        else{
            counter_value+=gain*2
            console.log("kryt" + critChance)
        }
    }
    else{
        counter_value+=gain
    }

    if(soundUpg.id == "1"){
        const click_sound = new Audio("sound/mouse-click.mp3")
        click_sound.play()
    }  
    if(counterUpg.id == "6"){
        let R = Math.floor(Math.random() * 255)
        let G = Math.floor(Math.random() * 255)
        let B = Math.floor(Math.random() * 255)
        counter_text.style.color = `rgb(${R}, ${G}, ${B})`
        counter.style.color = `rgb(${R}, ${G}, ${B})`
    }  

    check_function()
 })


 const dvd = document.querySelector('.dvd')
    let posX = 100
    let posY = 100
    let speedX = 4
    let speedY = 3
    const dvdSize = 100

    const animate = () => {
        posX += speedX
        posY += speedY
    
        if (posX + dvdSize >= window.innerWidth || posX <= 0) {
            speedX *= -1
            counter_value+=dvd_gain
            if(dvdSoundUpg.id == "8"){
                const bounce = new Audio("sound/dvd_bounce.mp3")
                bounce.volume = 0.2
                bounce.play()
            }
            check_function()
        }
        if (posY + dvdSize >= window.innerHeight || posY <= 0) {
            speedY *= -1
            counter_value+=dvd_gain
            if(dvdSoundUpg.id == "8"){
                const bounce = new Audio("sound/dvd_bounce.mp3")
                bounce.volume = 0.2
                bounce.play()
            }
            check_function()
        }  

            dvd.style.transform = `translate(${posX}px, ${posY}px)`
       
        requestAnimationFrame(animate)

    }

    window.addEventListener("resize", () => {
        posX = 100
        posY = 100
    })

    async function getWeather() {
        const api = "f5b9bbab23b65d59d27c826c7065159d"
        const city = "Bukowice"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
        try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.cod === 200) {
            temp = data.main.temp < 10 ? 1 : 2 
            if(temp == 2){
                gain+=5
            }
            else if(temp == 1){
                    gain-=5
                }
                document.querySelector(".weather_input").innerHTML = `Temperatura Bukowice: ${Math.round(data.main.temp)}°C ${data.main.temp < 10 ? "🥶" : "🌞"}</p>`
            } 
        } catch (error) {
            console.error("error", error)
        }
    }



