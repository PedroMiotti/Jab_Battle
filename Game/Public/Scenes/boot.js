"use strict";

class Boot extends Phaser.Scene {
    constructor(){
        super('boot')
    }

    preload() {
        // ------------- Loading Screen
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(345, 355, 320, 50);
            
        let width = this.cameras.main.width;
        let height = this.cameras.main.height;
        
        let loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 65,
            text: 'Carregando...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        let percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        let assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(355, 365, 300 * value, 30);
        });
        
        this.load.on('fileprogress', function (file) {
            assetText.setText('Carregando arquivo : ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        
        
        
        for (let i = 0; i < 600; i++) {

            this.load.image('logo', 'Assets/UI/Logo.png');
            
            // SFX
            //Lobby
            this.load.audio('lobby', 'Assets/sfx/Lobby.mp3');

            // Fight
            this.load.audio('fight', 'Assets/sfx/FIGHT.wav');

        // Tela Inicial 

            // Background
            this.load.image('telainicialBG', 'Assets/img/TelaInicial.png');
            // Botao Jogar
            this.load.image('botaoJogar', 'Assets/UI/BotaoJogar.png');
            // Music Config
            this.load.image('music', 'Assets/UI/alto-falante.png');
            // Mute 
            this.load.image('mute', 'Assets/UI/mudo.png');
            
        // Tela Nome 

            // Background
            this.load.image('telanomeBG', 'Assets/img/TelaNome.png');
            // Botao Voltar
            this.load.image('botaoVoltar', 'Assets/UI/BackButton.png');
            // Botao Fight
            this.load.image('botaoFight', 'Assets/UI/FightButton.png' );

        // Tela Escolher jogador

            // Background
            this.load.image('telachooseCharBG', 'Assets/img/TelaChooseChar1.png');

            // Fight Button
            this.load.image('FightButtonBig', "Assets/UI/FightButtonBig.png" );

            //Procurando Jogador Banner
            this.load.image('procJogadorBanner', 'Assets/UI/BannerProcJog.png');

            // Botao Voltar
            this.load.image('botaoVoltarBig', 'Assets/UI/BackButtonBig.png');
            
            // Characters Images
                // Tommy
                this.load.image('TommyBtt', '/Assets/UI/ChooseCharBtt/TommyBTT.png'); // Buttons
                this.load.image('TommyIMG', 'Assets/UI/ChooseCharIMG/TommyIMG.png'); // IMG
                
                // Jax
                this.load.image('JaxBtt', '/Assets/UI/ChooseCharBtt/JaxBTT.png'); // Buttons
                this.load.image('JaxIMG', 'Assets/UI/ChooseCharIMG/JaxIMG.png'); // IMG

                // Rut
                this.load.image('DigaraBtt', '/Assets/UI/ChooseCharBtt/RutBTT.png'); // Buttons
                this.load.image('DigaraIMG', 'Assets/UI/ChooseCharIMG/DigaraIMG2.png'); // IMG

                // Cascao
                this.load.image('CascaoBtt', '/Assets/UI/ChooseCharBtt/CascaoBTT.png'); // Buttons
                this.load.image('CascaoIMG', 'Assets/UI/ChooseCharIMG/CascaoIMG.png'); // IMG

                // Spidinho
                this.load.image('SpidinhoBtt', '/Assets/UI/ChooseCharBtt/SpidinhoBTT.png'); // Buttons
                this.load.image('SpidinhoIMG', 'Assets/UI/ChooseCharIMG/SpidinhoIMG.png'); // IMG

            
        // Tela Ringue

            // Background 
            this.load.image('telaringueBG', 'Assets/img/TelaRingue.png');

            // Botao Reiniciar
            this.load.image('botaoReiniciar', 'Assets/UI/botaoReiniciar.png');

            // HUD
                // LifeBar
                this.load.image("lifebarFrame", 'Assets/UI/LifeBarFrame.png');
                // P1 Bar
                this.load.image("p1Bar", 'Assets/UI/P1_FullBar.png');
                // P2 Bar
                this.load.image("p2Bar", 'Assets/UI/P2_FullBar.png');

            // Sprites
                // Tommy
                this.load.atlas("Tommy", "Assets/Sprites/Spritesheet/TommySprite.png", 'Assets/Sprites/JSON/Tommy.json');
                // Jax
                this.load.atlas("Jax", "Assets/Sprites/Spritesheet/JaxSprite.png", 'Assets/Sprites/JSON/Jax.json');
                // Cascao
                this.load.atlas("cascao", "Assets/Sprites/Spritesheet/cascao.png", 'Assets/Sprites/JSON/cascao.json');
                // Spidinho
                this.load.atlas("spidinho", "Assets/Sprites/Spritesheet/spidinho.png", 'Assets/Sprites/JSON/spidinho.json');

            // You Win
            this.load.image('youWin' , 'Assets/img/YouWin.png');

            // You Lose
            this.load.image('youLose' , 'Assets/img/YouLose.png');
 
            
        }

    }

    create() {

        this.add.image(512, 384, 'logo');
        
        setTimeout(() => { 
            this.scene.start('telaInicial') 
        }, 1000);

    }

}










