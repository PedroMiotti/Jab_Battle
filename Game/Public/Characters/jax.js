"use strict";

class Jax extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){

        super(scene, x, y, 'Jax', 'SpriteSheetJax_01.png')

        
        this.scene.add.existing(this)
        
        // ANIMATIONS

        //WALK
        this.scene.anims.create({
            key: "walk",
            repeat: -1,
            frameRate: 6,
            frames: this.scene.anims.generateFrameNames('Jax', {
                prefix: 'SpriteSheetJax_',
                suffix: ".png",
                start: 1,
                end: 4,
                zeroPad: 2,
            })
        })

        //JAB
        this.scene.anims.create({
            key: "jab",
            frameRate: 4,
            frames: this.scene.anims.generateFrameNames('Jax', {
                prefix: 'SpriteSheetJax_',
                suffix: ".png",
                start: 5,
                end: 6,
                zeroPad: 2,
            })
        })

        // DIRETO
        this.scene.anims.create({
            key: "direto",           
            frameRate: 4,
            frames: this.scene.anims.generateFrameNames('Jax', {
                prefix: 'SpriteSheetJax_',
                suffix: ".png",
                start: 7,
                end: 8,
                zeroPad: 2,
            })
        })

        // IDLE
        this.scene.anims.create({
            key: "idle",           
            frameRate: 4,
            repeat: -1,
            frames: this.scene.anims.generateFrameNames('Jax', {
                prefix: 'SpriteSheetJax_',
                suffix: ".png",
                start: 1,
                end: 1,
                zeroPad: 2,
            })
        })

    }


}
