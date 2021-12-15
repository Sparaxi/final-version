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
