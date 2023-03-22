const { SlashCommandBuilder } = require('discord.js');
//gamemodes
const alle = require('../formats/json/alle.json');
const nobruiser = require('../formats/json/nobruiser.json');
const mid = require('../formats/json/mid.json');
const adc = require('../formats/json/adc.json');
const bruiser = require('../formats/json/bruiser.json');
//spieler
const defaultCollection = require('../players/json/default.json');
const rafael = require('../players/json/rafael.json');
const jan = require('../players/json/jan.json');
const bene = require('../players/json/bene.json');
const nick = require('../players/json/nick.json');
const dominik = require('../players/json/dominik.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aram')
        .setDescription('gibt dir champs die du spielen darfst')
        .addStringOption(option => 
            option.setName('gamemode')
            .setDescription('was für champs sind erlaubt?')
            .addChoices(
                //add new gamemodes here
                {name: 'alle', value: 'alle'},
                {name: 'nobruiser', value: 'nobruiser'},
                {name: 'mid', value: 'mid'},
                {name: 'bruiser', value: 'bruiser'},
                {name: 'adc', value: 'adc'},
            )
        ).addIntegerOption(option =>
            option.setName('anzahl')
            .setDescription('wie viele chancen du brauchst um ivern zu rollen')
        ),
    async execute(interaction) {
        const gamemode = interaction.options.getString('gamemode') ?? "alle";
        const rolls = interaction.options.getInteger('anzahl') ?? 3;
        const uid = interaction.user.id;

        let champions;
        let choiceString = `Gamemode: ${gamemode}. Rolls: `;

        switch(gamemode){
            //add new gamemode here (AGAIN)
            case 'alle':
                champions = alle.champions;
            break;
            case 'nobruiser':
                champions = nobruiser.champions;
            break;
            case 'mid':
                champions = mid.champions;
            break;
            case 'bruiser':
                champions = bruiser.champions;
            break;
            case 'adc':
                champions = adc.champions;
            break;
        }

        let champArrayAll = Object.keys(champions).map(key => {
            return [key, champions[key]];
        });
        //console.log(champArray);

        let userCollection;

        switch(uid){
            //add new players here
            case rafael.uid:
                userCollection = rafael.champions;
            break;
            case jan.uid:
                userCollection = jan.champions;
            break;
            case bene.uid:
                userCollection = bene.champions;
            break;
            case nick.uid:
                userCollection = nick.champions;
            break;
            case dominik.uid:
                userCollection = dominik.champions;
            break;
            default:
                //await interaction.reply({content: "kp welche champs du hast, gönn dir mal alle", ephemeral: true})
                userCollection = defaultCollection.champions;
            break;
        }

        let champArray = champArrayAll.filter(champ => userCollection.includes(champ[0]));

        //console.log(champArray)
        //console.log(champArrayAll)

        for(let i = 0; i < rolls-1 && champArray.length > 1; i++) {
            const rand = Math.floor(Math.random() * champArray.length)
            const randomElement = champArray[rand];
            champArray.splice(rand, 1)
            //console.log(champArray.length)
            
            const stringRep = (randomElement[1].note=="yes") ? randomElement[0] : randomElement[0] + ` (${randomElement[1].note})`
            choiceString += `${stringRep}, `
        }
        const randomElement = champArray[Math.floor(Math.random() * champArray.length)];
        const stringRep = (randomElement[1].note=="yes") ? randomElement[0] : randomElement[0] + ` (${randomElement[1].note})`
        choiceString += `${stringRep}.`

        await interaction.reply({content: choiceString, ephemeral: true})
    }
}