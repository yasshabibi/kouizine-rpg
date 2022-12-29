const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var no_move=true
canvas.width = 1280
canvas.height = 720
var combat = false
var running = '0'
var etape =0
var dialogue_tomate =false
var dialogue_fromage =false
var dialogue_pate =false

buttonStart = document.getElementById("start");
buttonStart.innerText = "Commencer";
buttonStart.addEventListener("click", function(e) {
    buttonStart.parentNode.removeChild(buttonStart);
    buttonCredit.parentNode.removeChild(buttonCredit);
    buttonQuit.parentNode.removeChild(buttonQuit);
    var textCompteur_debut = 1;
    i=0
    document.getElementById("pText").innerHTML = ""
    pText = "Vous incarnerez le rôle d'un cuisinier dont son but est de trouver la recette divine :" ;
    textCompteur_debut ++
    typing()
    // dialogue début
    
    window.addEventListener('keydown',(e) =>{
        switch (e.key){
            case ' ':
                if (textCompteur_debut == 2) {
                    i=0;
                    document.getElementById("pText").innerHTML = "";
                    pText = "la pizza." ;
                    textCompteur_debut ++;
                    typing();
                }else if (textCompteur_debut == 3) {
                    i=0;
                    document.getElementById("pText").innerHTML = "";
                    pText    = "Rejoignez-le dans son aventure pour mettre fin à la famine dans le monde." ;
                    textCompteur_debut ++;
                    typing();
                }else if (textCompteur_debut == 4) {
                    i=0;
                    document.getElementById("pText").innerHTML = ""
                    pText    = "L'île gourmet" ;
                    textCompteur_debut ++;
                    typing();
                    no_move=false;
                }
        } 
    })
})


buttonCredit = document.getElementById("credit");
        buttonCredit.innerText = "Crédits";
        buttonCredit.addEventListener("click", function(e) {
            console.log(true);
            window.open('credits.html', 'credit');
        })

buttonQuit = document.getElementById("quit");
buttonQuit.innerText = "Quitter";
buttonQuit.addEventListener("click", function(e) {
window.close()
})

const collisionsMap = []
for(let i = 0; i < collisions.length; i+=30){
    collisionsMap.push(collisions.slice(i, 30 + i))
}

const change_map_x = []
for(let i = 0; i < change_map_data.length; i+=30){
    change_map_x.push(change_map_data.slice(i, 30 + i))
}

const pnj_cave_x = []
for(let i = 0; i < pnj_cave_data.length; i+=30){
    pnj_cave_x.push(pnj_cave_data.slice(i, 30 + i))
}

const pnj_sea_x = []
for(let i = 0; i < pnj_sea_data.length; i+=30){
    pnj_sea_x.push(pnj_sea_data.slice(i, 30 + i))
}

const pnj_academia_x = []
for(let i = 0; i < pnj_academia_data.length; i+=30){
    pnj_academia_x.push(pnj_academia_data.slice(i, 30 + i))
}

const pnj_restaurant_x = []
for(let i = 0; i < pnj_restaurant_data.length; i+=30){
    pnj_restaurant_x.push(pnj_restaurant_data.slice(i, 30 + i))
}
const shell_x = []
for(let i = 0; i < shell_data.length; i+=30){
    shell_x.push(shell_data.slice(i, 30 + i))
}

const swimmingpool_x = []
for(let i = 0; i < swimmingpool_data.length; i+=30){
    swimmingpool_x.push(swimmingpool_data.slice(i, 30 + i))
}

const caravan_x = []
for(let i = 0; i < caravan_data.length; i+=30){
    caravan_x.push(caravan_data.slice(i, 30 + i))
}

var limite = '0'

class Boundary {
    static widht = 96
    static height = 96
    constructor({position}) {
        this.position = position
        this.width = 96
        this.height = 96
    }
    draw() {
        c.fillStyle = 'red (255, 0, 0, 0.5)'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const offset = {
    x: 100,
    y: -200
}

const boundaries = []
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 657)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const change_map = []
change_map_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 191)
            change_map.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const pnj_cave = []
pnj_cave_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 368)
            pnj_cave.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const pnj_sea = []
pnj_sea_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 368)
            pnj_sea.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const pnj_academia = []
pnj_academia_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 368)
            pnj_academia.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const pnj_restaurant = []
pnj_restaurant_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 368)
            pnj_restaurant.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})
const swimmingpool = []
swimmingpool_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2867)
            swimmingpool.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const caravan = []
caravan_x.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2867)
            caravan.push(
                new Boundary({
                    position: {
                        x: j * Boundary.widht + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const image = new Image()
image.src = 'ileFINAL.png'

const foregroundImage = new Image()
foregroundImage.src = 'foregroundObjects.png'

const playerFace = new Image()
playerFace.src = 'Sanji_Face.png'

const playerBack = new Image()
playerBack.src = 'Sanji_Dos.png'

const playerLeft = new Image()
playerLeft.src = 'Sanji_Gauche.png'

const playerRight = new Image()
playerRight.src = 'Sanji_Droite.png'


class sprite{
    constructor({position, image, frames = { max: 1 }}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = false
    }

    draw(){
        c.drawImage(
            this.image,
            this.frames.val*this.width, 
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )

        if (!this.moving) return
            
        if (this.frames.max>1){
                this.frames.elapsed++
            }
        if (this.frames.elapsed % 15 === 0){
            if (this.frames.val<this.frames.max-1) this.frames.val++
            else this.frames.val = 0
            }
    }
}

const player = new sprite({
    position: {
        x: canvas.width / 2 - 1250 / 4 / 2,
        y: canvas.height / 2 - -110/ 2 
    },
    image: playerFace,
    frames: {
        max:3
    }
})


const background = new sprite({
    position:{
    x: offset.x,
    y: offset.y
    }, 
    image: image
})

const foreground = new sprite({
    position:{
    x: offset.x,
    y: offset.y
    }, 
    image: foregroundImage
})

const keys = {
    z: {
        pressed: false
    },
    q: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const movables = [background, ...boundaries, foreground, ...change_map, ...pnj_cave, ...pnj_sea, ...pnj_academia, ...pnj_restaurant, ...swimmingpool, ...caravan]

function rectangularCollision({rectangle1, rectangle2}) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}

const mapswap = {
    initiadted: false
}
var textCompteur_pnj_3 = 1;
var textCompteur_pnj_3_1 = 1;
var textCompteur_pnj_2= 1;
var textCompteur_pnj_1 = 1;
var textCompteur_pnj_1_1 = 1;
var textCompteur_fin = 1;
var charade = 0;
var textCompteur_charade1 = 0;
var textCompteur_charade2 = 0;
var textCompteur_charade3 = 0;
var i=0,pText;
function typing() {
    if(i<pText.length){
      document.getElementById("pText").innerHTML += pText.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
}
var y=0,pText2;

function typing_2() {
    if(y<pText2.length){
      document.getElementById("pText2").innerHTML += pText2.charAt(y);
      y++;
      setTimeout(typing_2, 50);
    }
    
}
var x=0,pText3;

function typing_3() {
    if(x<pText3.length){
      document.getElementById("pText3").innerHTML += pText3.charAt(x);
      x++;
      setTimeout(typing_3, 50);
    }
    
}
var z=0,pText4;

function typing_4() {
    if(z<pText4.length){
      document.getElementById("pText4").innerHTML += pText4.charAt(z);
      z++;
      setTimeout(typing_4, 50);
    }
    
}
var w=0,pText5;

function typing_5() {
    if(w<pText5.length){
      document.getElementById("pText5").innerHTML += pText5.charAt(w);
      w++;
      setTimeout(typing_5, 50);
    } 
}
 
function animate(){
    const animationId = window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach((boundary) => {
        boundary.draw()
    })
    change_map.forEach((change_maps) => {
        change_maps.draw()
    })

    player.draw()
    foreground.draw()


    for (let i = 0; i < pnj_cave.length; i++) {
        const pnj_caves = pnj_cave[i]
        if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: pnj_caves
            }) 
        ) {
            if (textCompteur_pnj_3== 1 && textCompteur_pnj_3_1== 1) {
                i=0;
                document.getElementById("pText").innerHTML = "";
                document.getElementById("pText2").innerHTML = "";
                document.getElementById("pText3").innerHTML = "";
                document.getElementById("pText4").innerHTML = "";
                document.getElementById("pText5").innerHTML = "";
                pText = "Je m'appelle Toriko, et je suis le sage de la grotte." ;
                textCompteur_pnj_3 ++;
                no_move = true;
                typing();
                dialogue_tomate = true
            }
            
            
        }
    }

    for (let i = 0; i < pnj_sea.length; i++) {
        const pnj_seas = pnj_sea[i]
        if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: pnj_seas
            }) 
        ) {
            if (textCompteur_pnj_2 == 1) {
                i=0;
                document.getElementById("pText").innerHTML = "";
                document.getElementById("pText2").innerHTML = "";
                document.getElementById("pText3").innerHTML = "";
                document.getElementById("pText4").innerHTML = "";
                document.getElementById("pText5").innerHTML = "";
                pText= "             Je suis Rémy, le grand maître des énigmes." ;
                typing();
                textCompteur_pnj_2 ++;
                no_move=true;
                dialogue_fromage =true
            } 
            
        }
    }

    for (let i = 0; i < pnj_academia.length; i++) {
        const pnj_academias = pnj_academia[i]
        if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: pnj_academias
            }) 
        ) {
            window.addEventListener('keydown',(e) => {
                switch (e.key){
                    case ' ':
                        if (textCompteur_pnj_1 == 1) {
                            i=0;
                            document.getElementById("pText").innerHTML = "";
                            document.getElementById("pText2").innerHTML = "";
                            document.getElementById("pText3").innerHTML = "";
                            document.getElementById("pText4").innerHTML = "";
                            document.getElementById("pText5").innerHTML = "";
                            pText = "Je m'appelle Soma, et je suis le gardien de l'Académie Tootsuki" ;
                            textCompteur_pnj_1 ++;
                            no_move=true;
                            typing();
                            console.log('test');
                            break
                        }
                        
                    } 
            })
        }
    }
    for (let i = 0; i < swimmingpool.length; i++) {
        const swimmingpools = swimmingpool[i]
        if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: swimmingpools
            }) 
        ) {
            
        }
    }
    for (let i = 0; i < caravan.length; i++) {
        const caravans = caravan[i]
        if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: caravans
            }) 
        ) {
            window.addEventListener('keydown',(e) => {
                switch (e.key){
                    case ' ':
                        if (charade == 2) {
                            document.getElementById('pText').innerHTML = "bravo" ;
                            textCompteur_charade1 ++;
                            no_move=true;
                            var item_pate=document.getElementById('pate')
                            item_pate.src='image/icons8-pizza-100.png'
                            etape++
                            
                        }
                        
                    } 
            })
        }
    }
    for (let i = 0; i < pnj_restaurant.length; i++) {
        const pnj_restaurants = pnj_restaurant[i]
        if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: pnj_restaurants
            }) 
        ) {
            window.addEventListener('keydown',(e) =>{
                switch (e.key){
                    case ' ':
                        if (textCompteur_fin == 1 && etape== 3) {
                            i=0;
                            document.getElementById("pText").innerHTML = "";
                            document.getElementById("pText2").innerHTML = "";
                            document.getElementById("pText3").innerHTML = "";
                            document.getElementById("pText4").innerHTML = "";
                            document.getElementById("pText5").innerHTML = "";
                            pText = "Vous avez récupérer tous les ingrédients de la recette divine. felicitation" ;
                            no_move = true;
                            typing();
                        }
                } 
            })

        }
    }

    if (keys.z.pressed || keys.q.pressed || keys.s.pressed || keys.d.pressed) {
        for (let i = 0; i < change_map.length; i++) {
            const change_maps = change_map[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: change_maps
                }) 
            ) {
                window.cancelAnimationFrame(animationId);
                mapswap.initiated = true;
                porte=true;
                i=0;
                document.getElementById("pText").innerHTML = "";
                pText = "Voulez vous entrez ? " ;
                no_move = true;
                typing();
                y=0;
                document.getElementById("pText2").innerHTML = "";
                pText2 = " oui" ;
                typing_2();
                w=0;
                document.getElementById("pText5").innerHTML = "";
                pText5 = " non" ;
                typing_5();
                break;
                       
            }     
        }                  
    }
    
    
    let moving = true
    player.moving = false
    if(keys.z.pressed && lastKey === 'z'&& no_move==false) {
        player.moving = true
        player.image = playerBack
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }
        
        if (moving)
            movables.forEach(movables => {
                movables.position.y += 3
            })
    } else if(keys.q.pressed  && lastKey === 'q'&& no_move==false) {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = playerLeft
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movables => {
                movables.position.x += 3
            })
    } else if(keys.s.pressed  && lastKey === 's'&& no_move==false) {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = playerFace
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movables => {
                movables.position.y -= 3
            })
    } else if(keys.d.pressed  && lastKey === 'd' && no_move==false) {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = playerRight
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position : {
                        x: boundary.position.x - 3 ,
                        y: boundary.position.y
                    }}
                }) 
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movables => {
                movables.position.x -= 3
            })
    }
}


animate()

// const battlebackgroundImage = new Image ()
// battlebackgroundImage.src = 'fightscreen.jpg'
// const battlebackground = new sprite ({position:{
//     x:0,
//     y:0
// },
// image : battlebackgroundImage
// })
function animateTransition() {
    window.requestAnimationFrame(animateTransition)
    if (limite == '0') {
        addElementsDivHealthBar()
        limite = '1'
    }
    animate2()
}   

let lastKey = ''
window.addEventListener('keydown',(e)=> {
    switch(e.key){
        case 'z':
            keys.z.pressed = true
            lastKey = 'z'
            break
        case 'q':
            keys.q.pressed = true
            lastKey = 'q'
            break   
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break 
        case 'd':
        keys.d.pressed = true
        lastKey = 'd'
        break 
    }
})

window.addEventListener('keyup',(e)=> {
    switch(e.key){
        case 'z':
            keys.z.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break   
        case 's':
            keys.s.pressed = false
            break 
        case 'd':
        keys.d.pressed = false
        break 
    }
})

const image2 = new Image()
image2.src = 'fightscreen.jpg'

class sprite2{
    constructor({position, velocity, image2, frames = { max: 1 }}) {
        this.position = position
        this.image2 = image2
        this.frames = frames
        this.image2.onload = () => {
            this.width = this.image2.width / this.frames.max
            this.height = this.image2.height
        }
    }

    draw(){
        c.drawImage(
            this.image2,
            0, 
            0,
            this.image2.width / this.frames.max,
            this.image2.height,
            this.position.x,
            this.position.y,
            this.image2.width / this.frames.max,
            this.image2.height
        )
    }
}

const background2 = new sprite2({
    position:{
    x: 0,
    y: 0
    }, 
    image2: image2,
})

const Tomate = new Image()
Tomate.src = 'image/tomate_pourrie.png'

const Sanji = new Image()
Sanji.src = 'image/SanjiDos.png'

const ennemy = new sprite2({
    position:{
        x: 900,
        y: 325
    },
    image2: Tomate
})

const combattant = new sprite2({
    position:{
        x: 0,
        y: 300
    },
    image2: Sanji
})

function addElementsDivHealthBar (){
    // Sanji
    var StatusCombattant = document.createElement("div")
    StatusCombattant.className="CombatantStatus"
    StatusCombattant.style.backgroundColor = "#EBEBEB"
    StatusCombattant.style.height = 70 + "px"
    StatusCombattant.style.width = 350 + "px"
    StatusCombattant.style.position = "relative"
    StatusCombattant.style.top = -700 + "px"
    StatusCombattant.style.left = 75 + "px"
    StatusCombattant.style.display = "block"
    StatusCombattant.style.borderRadius = 5 + "px"
    document.getElementById('screen').appendChild(StatusCombattant)

    var NameSanji = document.createElement("h1")
    const NameHero = "Sanji"
    NameSanji.innerHTML = NameHero
    NameSanji.style.color = "#3333333"
    NameSanji.style.margin = 2 + "%"
    StatusCombattant.appendChild(NameSanji)

    var HealthBarHero = document.createElement("div")
    HealthBarHero.className="health-barHero"
    HealthBarHero.dataset.total="1000"
    HealthBarHero.dataset.value="1000"
    HealthBarHero.style.boxSizing = "border-box"
    HealthBarHero.style.width = 300 + "px"
    HealthBarHero.style.height = 20 + "px"
    HealthBarHero.style.padding = 5 + "px"
    HealthBarHero.style.background = "#333"
    HealthBarHero.style.borderRadius = 5 + "px"
    HealthBarHero.style.position = "relative"
    HealthBarHero.style.margin = 2 + "%"
    StatusCombattant.appendChild(HealthBarHero)

    var BarHero = document.createElement("div")
    BarHero.className = "bar-hero"
    BarHero.style.background = "green"
    BarHero.style.width = 100 + "%"
    BarHero.style.height = 10 + "px"
    BarHero.style.position = "relative"
    BarHero.style.transition = "width .5s linear"
    HealthBarHero.appendChild(BarHero)

    var HitHero = document.createElement("div")
    HitHero.className = "hit-hero"
    HitHero.style.background = "rgba(255,255,255,0.6)"
    HitHero.style.position = "absolute"
    HitHero.style.top = 0
    HitHero.style.right = 0
    HitHero.style.bottom = 0
    HitHero.style.width = 0 +"px"
    HitHero.style.transition = "width .5s linear"
    BarHero.appendChild(HitHero)

    // Tomate pourrie
    var Statusennemy = document.createElement("div")
    Statusennemy.className="mechantstatut"
    Statusennemy.style.backgroundColor = "#EBEBEB"
    Statusennemy.style.height = 70 + "px"
    Statusennemy.style.width = 350 + "px"
    Statusennemy.style.position = "relative"
    Statusennemy.style.top = -770 + "px"
    Statusennemy.style.left = 800 + "px"
    Statusennemy.style.borderRadius = 5 + "px"
    document.getElementById('screen').appendChild(Statusennemy)

    var Nametomate = document.createElement("h1")
    const NameMechant = " Tomate pourrie"
    Nametomate.innerHTML = " "+NameMechant
    Nametomate.style.color = "#3333333"
    NameSanji.style.margin = 3 + "%"
    Statusennemy.appendChild(Nametomate)

    var HealthBarMechant = document.createElement("div")
    HealthBarMechant.className="health-barMechant"
    HealthBarMechant.dataset.total="1000"
    HealthBarMechant.dataset.value="1000"
    HealthBarMechant.style.boxSizing = "border-box"
    HealthBarMechant.style.width = 300 + "px"
    HealthBarMechant.style.height = 20 + "px"
    HealthBarMechant.style.padding = 5 + "px"
    HealthBarMechant.style.background = "#333"
    HealthBarMechant.style.borderRadius = 5 + "px"
    HealthBarMechant.style.position = "relative"
    HealthBarMechant.style.margin = 2 + "%"
    Statusennemy.appendChild(HealthBarMechant)

    var BarMechant = document.createElement("div")
    BarMechant.className = "barMechant"
    BarMechant.style.background = "green"
    BarMechant.style.width = 100 + "%"
    BarMechant.style.height = 10 + "px"
    BarMechant.style.position = "relative"
    BarMechant.style.transition = "width .5s linear"
    HealthBarMechant.appendChild(BarMechant)

    var HitMechant = document.createElement("div")
    HitMechant.className = "hitMechant"
    HitMechant.style.background = "rgba(255,255,255,0.6)"
    HitMechant.style.position = "absolute"
    HitMechant.style.top = 0
    HitMechant.style.right = 0
    HitMechant.style.bottom = 0
    HitMechant.style.width = 0 +"px"
    HitMechant.style.transition = "width .5s linear"
    BarMechant.appendChild(HitMechant)
}
function updateHealth(Life,Who){
    if (Life >= 0){
        if (Who == "Hero"){
            document.querySelector(".health-barMechant").dataset = Life
        }
    }

}

function animate2(){
    window.requestAnimationFrame(animate2)
    background2.draw()
    ennemy.draw()
    combattant.draw()
}

function Endboy (){
    document.querySelector(".CombatantStatus").style.display = "none"
    document.querySelector(".mechantstatut").style.display = "none"
}



function AttackBot(){
    var LifeHeroData = document.querySelector('.health-barHero')
    var HeroMax = LifeHeroData.dataset.total
    var HeroLife = LifeHeroData.dataset.value
    var damage = Math.floor(Math.random()*(HeroMax/2))
    if (damage < 200){
        damage = 200
    } 

    var Life = HeroLife - damage
    
    var barWidth = (Life / HeroMax) * 100;
    var hitWidth = (damage / HeroLife) * 100 + "%";
    document.querySelector('.hit-hero').style.width = hitWidth
    document.querySelector('.health-barHero').dataset.value = Life
    setTimeout(function(){
        document.querySelector('.hit-hero').style.width = 0
        document.querySelector('.bar-hero').style.width = barWidth + "%"
    }, 500);
    if (Life <= 0){
        image2.src = "image/defeatSanji.png"
        Sanji.src = " "    
        Tomate.src = " "
        document.getElementById("pText").innerHTML = ""
        i=0
        pText = "vous etes mort" ;
        typing()
        change_map.splice(0, 5)
        setTimeout(animate, 5000)
        document.getElementById("pText2").innerHTML = ""
        pText2= "" ;
        typing_2()
        document.getElementById("pText3").innerHTML = ""
        pText3 = "" ;
        typing_3()
        document.getElementById("pText4").innerHTML = ""
        pText4 = "" ;
        typing_4()
        document.getElementById("pText5").innerHTML = ""
        pText5 = "" ;
        typing_5()
        Endboy()
        return
    } 
}



function choice(){
    if (textCompteur_pnj_3_1 == 1 && dialogue_tomate == true) {
        if (textCompteur_pnj_3 == 2) {
            i=0;
            document.getElementById("pText").innerHTML = "";
            document.getElementById("pText2").innerHTML = "";
            document.getElementById("pText3").innerHTML = "";
            document.getElementById("pText4").innerHTML = "";
            document.getElementById("pText5").innerHTML = "";

            pText = "Pour obtenir la sauce tomate, un des ingrédients majeurs de la recette divine" ;
            textCompteur_pnj_3 ++;
            typing();
        }else if (textCompteur_pnj_3 == 3) {
            i=0;
            document.getElementById("pText").innerHTML = "";
            pText = "vous devrez abattre le monstre, le grand et l’invincible boss" ;
            textCompteur_pnj_3 ++;
            typing();
        }else {
            i=0;
            document.getElementById("pText").innerHTML = "";
            pText = "la Tomate Pourrie qui réside au fin fond de cette grotte" ;
            textCompteur_pnj_3 = 1;
            textCompteur_pnj_3_1 ++;
            no_move = false;
            typing();
        }
    }else if (textCompteur_pnj_3_1 < 5 && dialogue_tomate == true) {
        if (textCompteur_pnj_3 == 1) {
            i=0;
            document.getElementById("pText").innerHTML = "";
            pText = "Vous devez battre la Tomate Pourrie au fond de la grotte." ;
            textCompteur_pnj_3 = 1;
            no_move = false;
            typing();
        }
    }else if (textCompteur_pnj_3_1 >= 5 && dialogue_tomate == true){
        if (textCompteur_pnj_3 == 1) {
            i=0;
            document.getElementById("pText").innerHTML = "";
            pText = "La Tomate Pourrie est au fond de la grotte." ;
            textCompteur_pnj_3 = 1;
            no_move = false;
            typing();
            dialogue_tomate =false
        }
    }else if (textCompteur_fin == 3) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText = "Bonus : Rajouter des ananas sur vos pizzas ?" ;
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2 = "" ;
        textCompteur_fin = 1
        no_move = false
        typing()
        typing_2()
    }else if (textCompteur_pnj_2 == 2) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText= "De manière à obtenir du fromage, un des ingrédients absolus de la recette divine vous devrez résoudre 3 d'énigmes." ;
        textCompteur_pnj_2 ++;
        no_move = true;
        typing();
    }else if (textCompteur_pnj_2 == 3) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "vous devez répondre correctement à tous les énigmes pour réussir l'épreuve, sinon, revenez lorsque vous serez plus apte.A vos cerveaux!" ;
        textCompteur_pnj_2 ++;
        typing();
    }else if (textCompteur_pnj_2 == 4) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText= "Enigme 1 : Quel est le prix d'un menu McFirst en France?" ;
        textCompteur_pnj_2 ++;
        typing();
    }else if (textCompteur_pnj_2 == 5) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "4.95 " ;
        typing();
        y=0;
        document.getElementById("pText2").innerHTML = "";
        pText2 = "4.50" ;
        typing_2();
        z=0;
        document.getElementById("pText3").innerHTML = ""
        pText3 = " 5" ;
        typing_3();
        x=0;
        document.getElementById("pText4").innerHTML = "";
        pText4 = "6" ;
        typing_4();
        textCompteur_pnj_2 ++;
    }else if (textCompteur_pnj_2 == 6) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "bonne reponse" ;
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        textCompteur_pnj_2 =7
    }else if (textCompteur_pnj_2 == 7 ) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "Enigme 2 :Combien faut-il manger de fruits et légumes par jour?" ;
        textCompteur_pnj_2 =8
        typing();
    }else if (textCompteur_pnj_2 == 8 ) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "3 " ;
        typing();
        y=0;
        document.getElementById("pText2").innerHTML = "";
        pText2 = "4" ;
        typing_2();
        z=0;
        document.getElementById("pText3").innerHTML = "";
        pText3 = " 5" ;
        typing_3();
        x=0;
        document.getElementById("pText4").innerHTML = "";
        pText4 = "6" ;
        typing_4();
        textCompteur_pnj_2 =9
    }else if (textCompteur_pnj_2 == 9) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false

    }else if (textCompteur_pnj_2 == 10 ) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "Enigme 3 : D'où vient la pizza? " ;
        textCompteur_pnj_2 ++;
        typing();
    }else if (textCompteur_pnj_2 == 11 ) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "France " ;
        typing();
        y=0;
        document.getElementById("pText2").innerHTML = "";
        pText2 = "Allemagne" ;
        typing_2();
        z=0;
        document.getElementById("pText3").innerHTML = "";
        pText3 = " Maroc" ;
        typing_3();
        x=0;
        document.getElementById("pText4").innerHTML = "";
        pText4 = "Italie" ;
        typing_4();
        textCompteur_pnj_2 ++;
    }else if (textCompteur_pnj_2 == 12) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false
    }else if (textCompteur_pnj_1 == 2) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "Pour obtenir une pâte à pizza, un des ingrédients essentiels de la recette divine," ;
        textCompteur_pnj_1 ++;
        typing();
        console.log('test2');
    }else if (textCompteur_pnj_1 == 3){
        i=0;
        document.getElementById("pText").innerHTML = "";
        pText = "Vous devrez vous trouve la clé qui se cache quelque part dans cette île ..." ;
        typing();
        textCompteur_pnj_1= 4
        textCompteur_charade2 = 1
        console.log('test3');
    }else if (textCompteur_charade2 == 1) {
            document.getElementById('pText').innerHTML = "Mon premier est la onzième lettre de l'alphabet." ;
            textCompteur_charade2 ++;

    }else if (textCompteur_charade2 == 2) {
        document.getElementById('pText').innerHTML = "Mon deuxième est une grosse souris." ;
        textCompteur_charade2 ++;
    }else if (textCompteur_charade2 == 3) {
        document.getElementById('pText').innerHTML = "Mon troisième est le verbe aller conjugué à la troisième personne du singulier." ;
        textCompteur_charade2 ++;
    }else if (textCompteur_charade2 == 4) {
        document.getElementById('pText').innerHTML = "Mon quatrième sert à attacher des chaussures." ;
        textCompteur_charade2 ++;
    }else if (textCompteur_charade2 == 5) {
        document.getElementById('pText').innerHTML = "On tire mon tout derrière une voiture." ;
        textCompteur_charade2 ++;
    }else if (textCompteur_charade2 == 6) {
        document.getElementById('pText').innerHTML = "Qui suis-je ?" ;
        textCompteur_charade2 =0;
        no_move=false
        charade = 2
    }else if(combat == true ){
        Sanji.src = 'image/sanjibadass.png'
        w=0
        document.getElementById("pText5").innerHTML = ""

        pText5 = "Ce n'est pas très efficace. Dommage que ce soit la beauté du joueur qui est prise en compte" ;
        typing_5()  
        var Mob = document.querySelector('.health-barMechant')
        let MobMax = Mob.dataset.total
        let MobLife = Mob.dataset.value
        var damage = 200

        var Life = MobLife - damage
        //console.log(damage,Life)
        var barWidth = (Life / MobMax) * 100;
        var hitWidth = (damage / MobLife) * 100 + "%";
        //console.log(barWidth,hitWidth)
        document.querySelector('.hitMechant').style.width = hitWidth
        document.querySelector('.health-barMechant').dataset.value = Life
        setTimeout(function(){
            document.querySelector('.hitMechant').style.width = 0
            document.querySelector('.barMechant').style.width = barWidth + "%"
        }, 500);
        console.log(Life)
        if (Life <= 0){
            image2.src = "image/victorySanji.png"
            changesong2()
            Sanji.src = " "
            Tomate.src = " "
            document.getElementById("pText").innerHTML = ""
            i=0
            etape++
            pText = "vous avez gagnez" ;
            var item_tomate= document.getElementById('tomate')
            item_tomate.src='image/tomate.png'
            typing()
            change_map.splice(0, 5)
            setTimeout(animate, 5000)
            document.getElementById("pText2").innerHTML = ""
            pText2= "" ;
            typing_2()
            document.getElementById("pText3").innerHTML = ""
            pText3 = "" ;
            typing_3()
            document.getElementById("pText4").innerHTML = ""
            pText4 = "" ;
            typing_4()
            document.getElementById("pText5").innerHTML = ""
            pText5 = "" ;
            typing_5()
            Endboy()
            return
        }else{
            var Mygate = Math.floor(Math.random() * (100 - 1 + 1)) + 1
            if (Mygate <= 25){
                document.getElementById("pText5").innerHTML = ""
    
                pText5 = " Vous avez esquivé un coup" ;
                typing_5()
            }
            else{
                AttackBot()
            }
        }
    }
}

function choice2(){
    if (textCompteur_fin == 3) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText = "Bonus : Rajouter des ananas sur vos pizzas ?" ;
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2 = "" ;
        no_move = false
        typing()
        typing_2()
    }else if (textCompteur_pnj_2 == 6) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false
    }else if (textCompteur_pnj_2 == 9) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false

    }else if (textCompteur_pnj_2 == 12) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false

    }else if(porte==true && combat == false){
        i=0
        y=0
        w=0
        z=0
        x=0
        no_move=false
        porte==false
        combat = true
        animateTransition()      
        document.getElementById("pText").innerHTML = ""
        pText = "Faire le beau" ;
        typing()
        document.getElementById("pText2").innerHTML = ""
        pText2= "Cuisiner" ;
        typing_2()
        document.getElementById("pText3").innerHTML = ""
        pText3 = "Petit pas" ;
        typing_3()
        document.getElementById("pText4").innerHTML = ""
        pText4 = "Fumer" ;
        typing_4()
        document.getElementById("pText5").innerHTML = ""
        pText5 = "Choisissez ce que vous voulez faire" ;
        typing_5() 
        changesong()
    }else if(combat == true ){
        Sanji.src = 'image/sanjicuisine.png'
        w=0
        document.getElementById("pText5").innerHTML = ""

        pText5 = "Oh regarde ! Un couscous volant. La diversion est efficace, Vous en profitez pour taper l'adversaire" ;
        typing_5() 
        var Mob = document.querySelector('.health-barMechant')
        let MobMax = Mob.dataset.total
        let MobLife = Mob.dataset.value
        var damage = 250

        var Life = MobLife - damage
        //console.log(damage,Life)
        var barWidth = (Life / MobMax) * 100;
        var hitWidth = (damage / MobLife) * 100 + "%";
        //console.log(barWidth,hitWidth)
        document.querySelector('.hitMechant').style.width = hitWidth
        document.querySelector('.health-barMechant').dataset.value = Life
        setTimeout(function(){
            document.querySelector('.hitMechant').style.width = 0
            document.querySelector('.barMechant').style.width = barWidth + "%"
        }, 500);
        console.log(Life)
        if (Life <= 0){
            image2.src = "image/victorySanji.png"

            changesong2()
            Sanji.src = " "
            Tomate.src = " "
            document.getElementById("pText").innerHTML = ""
            i=0
            pText = "vous avez gagnez" ;
            var item_tomate= document.getElementById('tomate')
            item_tomate.src='image/tomate.png'
            etape++
            typing()
            change_map.splice(0, 5)
            setTimeout(animate, 5000)
            document.getElementById("pText2").innerHTML = ""
            pText2= "" ;
            typing_2()
            document.getElementById("pText3").innerHTML = ""
            pText3 = "" ;
            typing_3()
            document.getElementById("pText4").innerHTML = ""
            pText4 = "" ;
            typing_4()
            document.getElementById("pText5").innerHTML = ""
            pText5 = "" ;
            typing_5()
            Endboy()
            return
        }else{
            var Mygate = Math.floor(Math.random() * (100 - 1 + 1)) + 1
            if (Mygate <= 0){
                document.getElementById("pText5").innerHTML = ""
    
                pText5 = " Vous avez esquivé un coup" ;
                typing_5()
            }
            else{
                AttackBot()
            }
        } 
    }
}

function choice3(){
    if (textCompteur_pnj_2 == 6) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false

    }else if (textCompteur_pnj_2 == 9) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "bonne reponse" ;
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        textCompteur_pnj_2 ++
    }else if (textCompteur_pnj_2 == 12) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false
    }else if(combat == true ){
        Sanji.src = 'image/sanjipetitpas.png'
        w=0
        document.getElementById("pText5").innerHTML = ""

        pText5 = "Un petit pas de danse c'est toujours efficace" ;
        typing_5()  
        //console.log('A')
        var Mob = document.querySelector('.health-barMechant')
        let MobMax = Mob.dataset.total
        let MobLife = Mob.dataset.value
        var damage = 100
        var Life = MobLife - damage
        //console.log(damage,Life)
        var barWidth = (Life / MobMax) * 100;
        var hitWidth = (damage / MobLife) * 100 + "%";
        //console.log(barWidth,hitWidth)
        document.querySelector('.hitMechant').style.width = hitWidth
        document.querySelector('.health-barMechant').dataset.value = Life
        
        setTimeout(function(){
            document.querySelector('.hitMechant').style.width = 0
            document.querySelector('.barMechant').style.width = barWidth + "%"
        }, 500);
        
        if (Life <= 0){
            image2.src = "image/victorySanji.png"

            changesong2()
            Sanji.src = " "
            Tomate.src = " "
            document.getElementById("pText").innerHTML = ""
            i=0
            pText = "vous avez gagnez" ;
            etape++
            var item_tomate= document.getElementById('tomate')
            item_tomate.src='image/tomate.png'
            typing()
            change_map.splice(0, 5)
            setTimeout(animate, 5000)
            document.getElementById("pText2").innerHTML = ""
            pText2= "" ;
            typing_2()
            document.getElementById("pText3").innerHTML = ""
            pText3 = "" ;
            typing_3()
            document.getElementById("pText4").innerHTML = ""
            pText4 = "" ;
            typing_4()
            document.getElementById("pText5").innerHTML = ""
            pText5 = "" ;
            typing_5()
            Endboy()
            return
        }else{
            var Mygate = Math.floor(Math.random() * (100 - 1 + 1)) + 1
            if (Mygate <= 75){
                document.getElementById("pText5").innerHTML = ""
    
                pText5 = " Vous avez esquivé un coup" ;
                typing_5()
            }
            else{
                AttackBot()
            }
        } 
    }
}
function choice4(){
    if (textCompteur_pnj_2 == 6) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false
    }else if (textCompteur_pnj_2 == 9) {
        i=0
        document.getElementById("pText").innerHTML = ""
        pText= "mauvaise reponse" ;
        textCompteur_pnj_2 =1
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        z=0
        document.getElementById("pText3").innerHTML = ""
        pText3=""
        typing_3()
        x=0
        document.getElementById("pText4").innerHTML = ""
        pText4=""
        typing_4()
        no_move=false
    } else if (textCompteur_pnj_2 == 12 ) {
        i=0;
        document.getElementById("pText").innerHTML = "";
        document.getElementById("pText2").innerHTML = "";
        document.getElementById("pText3").innerHTML = "";
        document.getElementById("pText4").innerHTML = "";
        document.getElementById("pText5").innerHTML = "";
        pText= "Félicitations, vous avez obtenu du fromage!!" ;
        var fromage=document.getElementById("fromage");
        fromage.src ='image/fromage.png';
        no_move=false;
        typing();
        dialogue_fromage =false
        etape++
    }else if(combat == true ){
        Sanji.src = 'image/SanjiDos.png'
        w=0
        document.getElementById("pText5").innerHTML = ""

        pText5 = "Fumer tue, vous prenez la moitié des dégâts fait à l'adversaire" ;
        typing_5() 
        var Mob = document.querySelector('.health-barMechant')
        let MobMax = Mob.dataset.total
        let MobLife = Mob.dataset.value
        var damage = 150

        var Life = MobLife - damage
        //console.log(damage,Life)
        var barWidth = (Life / MobMax) * 100;
        var hitWidth = (damage / MobLife) * 100 + "%";
        //console.log(barWidth,hitWidth)
        document.querySelector('.hitMechant').style.width = hitWidth
        document.querySelector('.health-barMechant').dataset.value = Life
        setTimeout(function(){
            document.querySelector('.hitMechant').style.width = 0
            document.querySelector('.barMechant').style.width = barWidth + "%"
        }, 500);
        console.log(Life)
        if (Life <= 0){
            image2.src = "image/victorySanji.png"

            changesong2()
            Sanji.src = " "
            Tomate.src = " "
            document.getElementById("pText").innerHTML = ""
            i=0
            pText = "vous avez gagnez" ;
            etape++
            var item_tomate= document.getElementById('tomate')
            item_tomate.src='image/     tomate.png'
            typing()
            change_map.splice(1, 1)
            origin2 = change_map.splice(1, 1)
            setTimeout(animate, 2000)
            document.getElementById("pText2").innerHTML = ""
            pText2= "" ;
            typing_2()
            document.getElementById("pText3").innerHTML = ""
            pText3 = "" ;
            typing_3()
            document.getElementById("pText4").innerHTML = ""
            pText4 = "" ;
            typing_4()
            document.getElementById("pText5").innerHTML = ""
            pText5 = "" ;
            typing_5()
            Endboy()
            return
        }else{
            var Mygate = Math.floor(Math.random() * (100 - 1 + 1)) + 1
            if (Mygate <= 50){
                document.getElementById("pText5").innerHTML = ""
    
                pText5 = " Vous avez esquivé un coup" ;
                typing_5()
            }
            else{
                AttackBot()
            }
        } 
    }
}
function choice5(){
    if(porte==true){
        i=0
        document.getElementById("pText").innerHTML = ""
        pText=""
        typing()
        y=0
        document.getElementById("pText2").innerHTML = ""
        pText2=""
        typing_2()
        w=0
        document.getElementById("pText5").innerHTML = ""
        pText5=""
        typing_5()
        porte=false
        no_move=false
    }
}
function changesong2(){
    var musique = document.getElementById("son")
    musique.src = 'musique/Main_HxH_WhaleIsland.mp3'
}
function changesong(){
    var musique = document.getElementById("son")
    musique.src = 'musique/Boss_PKMN_SS_ChairmanRoseBattle.mp3'
}
var start = document.getElementById("son")
var temp = 0
function son(){
    if(temp== 0){
        start.play();
        temp=1;
    }else{
        start.pause();
        temp=0;
    }
}