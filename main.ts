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
            if (grassSpawnAmount < grassRandomAmount) {
                grassSpawnAmount++
                grass1 = sprites.create(assets.image`grass1`)
                tiles.placeOnRandomTile(grass1, assets.tile`sand_tile
`)
            }
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
    function giraffespawner() {
        let giraffe: Sprite = null
        let giraffepunten = 0
        let xgiraffe = randint(-10, 10)
        let ygiraffe = randint(-10, 10)
        game.onUpdateInterval(1000, function () {
            if (giraffepunten < 10) {
                giraffepunten += 1
                giraffe = sprites.create(assets.image`giraffe left face`, SpriteKind.Food)
                tiles.placeOnRandomTile(giraffe, assets.tile`sand_tile
`)
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
woestijn()
