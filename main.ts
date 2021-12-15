function grasslands() {
    let Hero: Sprite = null
    tiles.setTilemap(tilemap`grasslands_level`)
    Hero = sprites.create(assets.image`hero walking down`, SpriteKind.Player)
    controller.moveSprite(Hero)
    scene.cameraFollowSprite(Hero)
    function heroMovement() {

        controller.moveSprite(Hero)
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking up`)
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking right`)
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking down`)
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking left`)
        })

    }
    heroMovement()
    function maprandomizer() {
        let boom1: Sprite = null
        let boom2: Sprite = null
        let boom3: Sprite = null
        let grass1: Sprite = null
        let rock1: Sprite = null
        let boomSpawnAmount = 0
        let boomRandomAmount = randint(30, 30)
        let grassSpawnAmount = 0
        let grassRandomAmount = randint(30, 70)
        let rockSpawnAmount = 0
        let rockRandomAmount = randint(10, 20)

        game.onUpdateInterval(0.5, function () {
            if (boomSpawnAmount < boomRandomAmount) {
                boomSpawnAmount++
                boom1 = sprites.create(assets.image`boom1`)
                boom2 = sprites.create(assets.image`boom2`)
                boom3 = sprites.create(assets.image`boom3`)

                tiles.placeOnRandomTile(boom1, assets.tile`grass_grasslands
`)
                tiles.placeOnRandomTile(boom2, assets.tile`grass_grasslands
`)
                tiles.placeOnRandomTile(boom3, assets.tile`grass_grasslands
`)
            }
            if (grassSpawnAmount < grassRandomAmount) {
                grassSpawnAmount++
                grass1 = sprites.create(assets.image`grass1`)
                tiles.placeOnRandomTile(grass1, assets.tile`grass_grasslands
`)
            }
            if (rockSpawnAmount < rockRandomAmount) {
                rockSpawnAmount++
                rock1 = sprites.create(assets.image`rock1`)
                tiles.placeOnRandomTile(rock1, assets.tile`grass_grasslands
`)
            }

        })
    }
    maprandomizer()
    function zebraspawner() {
        let zebra: Sprite = null
        let zebrapunten = 0
        let xzebra = randint(-10, 10)
        let yzebra = randint(-10, 10)
        game.onUpdateInterval(1000, function () {
            if (zebrapunten < 10) {
                zebrapunten += 1
                zebra = sprites.create(assets.image`Zebra left face`, SpriteKind.Food)
                tiles.placeOnRandomTile(zebra, assets.tile`grass_grasslands`)
            }
            xzebra = randint(-10, 10)
            yzebra = randint(-10, 10)
            zebra.setVelocity(xzebra, yzebra)
            if (yzebra < 0) {
                zebra.setImage(assets.image`Zebra left face`)
            }
            if (xzebra > 0) {
                zebra.setImage(assets.image`Zebra right face`)
            }

        })
    }
    zebraspawner()
    function giraffespawner() {
        let giraffe: Sprite = null
        let giraffepunten = 0
        let xgiraffe = randint(-10, 10)
        let ygiraffe = randint(-10, 10)
        game.onUpdateInterval(1000, function () {
            if (giraffepunten < 10) {
                giraffepunten += 1
                giraffe = sprites.create(assets.image`giraffe left face`, SpriteKind.Food)
                tiles.placeOnRandomTile(giraffe, assets.tile`grass_grasslands`)
            }
            xgiraffe = randint(-10, 10)
            ygiraffe = randint(-10, 10)
            giraffe.setVelocity(xgiraffe, ygiraffe)
            if (ygiraffe < 0) {
                giraffe.setImage(assets.image`giraffe left face`)
            }
            if (xgiraffe > 0) {
                giraffe.setImage(assets.image`giraffe right face`)
            }

        })
    }
    giraffespawner()
}
// grasslands()






//------------------------------------
function woestijn() {
    tiles.setTilemap(tilemap`woestijn_level`)
    let Hero: Sprite = null
    Hero = sprites.create(assets.image`hero walking down`, SpriteKind.Player)
    controller.moveSprite(Hero)
    scene.cameraFollowSprite(Hero)
    function heroMovement() {

        controller.moveSprite(Hero)
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking up`)
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking right`)
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking down`)
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            Hero.setImage(assets.image`hero walking left`)
        })

    }
    heroMovement()
    function maprandomizer() {
        let palmboom1: Sprite = null
        let cactus1: Sprite = null
        let palmboom1_1: Sprite = null
        let grass1: Sprite = null
        let rock1: Sprite = null
        let boomSpawnAmount = 0
        let boomRandomAmount = randint(30, 30)
        let grassSpawnAmount = 0
        let grassRandomAmount = randint(30, 70)
        let rockSpawnAmount = 0
        let rockRandomAmount = randint(10, 20)

        game.onUpdateInterval(0.5, function () {
            if (boomSpawnAmount < boomRandomAmount) {
                boomSpawnAmount++
                palmboom1 = sprites.create(assets.image`palmboom1`)
                cactus1 = sprites.create(assets.image`Cactus1`)
                palmboom1_1 = sprites.create(assets.image`palmboom1_1`)

                tiles.placeOnRandomTile(palmboom1, assets.tile`sand_tile
`)
                tiles.placeOnRandomTile(cactus1, assets.tile`sand_tile
`)
                tiles.placeOnRandomTile(palmboom1_1, assets.tile`sand_tile
`)
            }
//             if (grassSpawnAmount < grassRandomAmount) {
//                 grassSpawnAmount++
//                 grass1 = sprites.create(assets.image`grass1`)
//                 tiles.placeOnRandomTile(grass1, assets.tile`sand_tile
// `)
//             }
            if (rockSpawnAmount < rockRandomAmount) {
                rockSpawnAmount++
                rock1 = sprites.create(assets.image`rock1`)
                tiles.placeOnRandomTile(rock1, assets.tile`sand_tile
`)
            }

        })
    }
    maprandomizer()
    function zebraspawner() {
        let zebra: Sprite = null
        let zebrapunten = 0
        let xzebra = randint(-10, 10)
        let yzebra = randint(-10, 10)
        game.onUpdateInterval(1000, function () {
            if (zebrapunten < 10) {
                zebrapunten += 1
                zebra = sprites.create(assets.image`Zebra left face`, SpriteKind.Food)
                tiles.placeOnRandomTile(zebra, assets.tile`sand_tile
`)
            }
            xzebra = randint(-10, 10)
            yzebra = randint(-10, 10)
            zebra.setVelocity(xzebra, yzebra)
            if (yzebra < 0) {
                zebra.setImage(assets.image`Zebra left face`)
            }
            if (xzebra > 0) {
                zebra.setImage(assets.image`Zebra right face`)
            }

        })
    }
    zebraspawner()
    function kameelspawner() {
        let kameel: Sprite = null
        let kameelpunten = 0
        let xkameel = randint(-10, 10)
        let ykameel = randint(-10, 10)
        game.onUpdateInterval(1000, function () {
            if (kameelpunten < 10) {
                kameelpunten += 1
                kameel = sprites.create(assets.image`kameel left face`, SpriteKind.Food)
                tiles.placeOnRandomTile(kameel, assets.tile`sand_tile
`)
            }
            xkameel = randint(-10, 10)
            ykameel = randint(-10, 10)
            kameel.setVelocity(xkameel, ykameel)
            if (ykameel < 0) {
                kameel.setImage(assets.image`kameel left face
`)
            }
            if (xkameel > 0) {
                kameel.setImage(assets.image`kameel right face
`)
            }

        })
    }
    kameelspawner()
}
// woestijn()

function antartica() {

    let x2 = 0
    let y2 = 0
    let x = 0
    let y = 0
    let pengiun: Sprite = null
    let furnace: Sprite = null
    let punten = 0
    let sealPunten = 0
    let snowball: Sprite = null
    let mySprite: Sprite = null
    let vis = null
    let seal: Sprite = null
    pengiun = sprites.create(assets.image`pengiun front face`, 0)

    info.setScore(0)

    tiles.setTilemap(tilemap`antartica_level`)



    function playerController() {

        controller.moveSprite(pengiun)
        scene.cameraFollowSprite(pengiun)

        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            pengiun.setImage(assets.image`pengiun back`)
            y = -120
            x = 0
            y2 = -15
            x2 = 0
        })

        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            pengiun.setImage(assets.image`pengiun left face`)
            x = -120
            y = 0
            y2 = 0
            x2 = -15
        })

        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            pengiun.setImage(assets.image`pengiun right face`)
            x = 120
            y = 0
            y2 = 0
            x2 = 15
        })

        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            pengiun.setImage(assets.image`pengiun front face`)
            y = 120
            x = 0
            y2 = 15
            x2 = 0
        })

        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
            otherSprite.setPosition(otherSprite.x + x2, otherSprite.y + y2)
            sprite.destroy()
        })

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            snowball = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, x, y)
            snowball.setPosition(pengiun.x, pengiun.y)
            snowball.setKind(SpriteKind.Projectile)
            pause(1000)
        })

        sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
            sealPunten--
            sprite.destroy()
            info.changeScoreBy(25)
        })

        scene.onOverlapTile(SpriteKind.Enemy, assets.tile`antartica_water
`, function (sprite, location) {
            sprite.destroy()
            punten += -1
            info.changeScoreBy(-20 * punten)
        })

        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
            otherSprite.setPosition(otherSprite.x + x2, otherSprite.y + y2)
            sprite.destroy()
        })
    }
    playerController()


    function furnaceSpawn() {
        game.onUpdateInterval(5000, function () {
            if (punten < 10) {
                punten += 1
                furnace = sprites.create(assets.image`furnace`, SpriteKind.Enemy)
                place()

            }
            info.changeScoreBy(10 * punten)
        })


    }

    function place() {
        tiles.placeOnRandomTile(furnace, assets.tile`antartica_ice_tile`)
    }

    furnaceSpawn()


    game.onUpdateInterval(1000, function () {
        if (sealPunten < 5) {
            sealPunten++

            seal = sprites.create(assets.image`seal left face`, SpriteKind.Food)
            tiles.placeOnRandomTile(seal, assets.tile`antartica_water`)
        }

        let xSeal = randint(-10, 10)
        let ySeal = randint(-10, 10)
        seal.setVelocity(xSeal, ySeal)

        if (xSeal < 0) {
            seal.setImage(assets.image`seal left face`)

        }
        if (xSeal > 0) {
            seal.setImage(assets.image`seal right face`)
        }



    })



    

}
antartica()

function oceaan () {


}


