"use strict";

class Cascao extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y){

        super(scene, x, y, 'cascao', 'cascao_01.png')

        
        this.scene.add.existing(this)
        
        // ANIMATIONS

        //WALK
        this.scene.anims.create({
            key: "walk_cascao",
            repeat: -1,
            frameRate: 6,
            frames: this.scene.anims.generateFrameNames('cascao', {
                prefix: 'cascao_',
                suffix: ".png",
                start: 6,
                end: 8,
                zeroPad: 2,
            })
        })

        //JAB
        this.scene.anims.create({
            key: "jab_cascao",            
            frameRate: 4,
            frames: this.scene.anims.generateFrameNames('cascao', {
                prefix: 'cascao_',
                suffix: ".png",
                start: 1,
                end: 3,
                zeroPad: 2,
            })
        })

        // DIRETO
        this.scene.anims.create({
            key: "direto_cascao",      
            frameRate: 4,
            frames: this.scene.anims.generateFrameNames('cascao', {
                prefix: 'cascao_',
                suffix: ".png",
                start: 4,
                end: 5,
                zeroPad: 2,
            })
        })

        // IDLE
        this.scene.anims.create({
            key: "idle_cascao",           
            frameRate: 4,
            repeat: -1,
            frames: this.scene.anims.generateFrameNames('cascao', {
                prefix: 'cascao_',
                suffix: ".png",
                start: 7,
                end: 7,
                zeroPad: 2,
            })
        })

    }


}
