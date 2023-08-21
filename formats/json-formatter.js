/*
* how2use:
* 1. [gamemode_name].json file erstellen
* 2. yes/no aus der gewünschten google sheet-spalte in .json file einfügen
* 3. const gamemode in zeile 13 zu [gamemode_name] umbenennen
* 4. skript ausführen mit node ./json-formaatter.js
*/

const fs = require('node:fs');
const path = require('node:path');

//const gamemode = "[FORMAT NAME HERE]"
const gamemode = ""

const filename = gamemode + '.json'
const filepath = path.join(__dirname, 'json', filename)
const champListPath = path.join(__dirname, "championlist.txt")

let champList = fs.readFileSync(champListPath, {encoding:'utf8', flag:'r'}).split('\n');
let rulings = fs.readFileSync(filepath, {encoding:'utf8', flag:'r'}).split('\n');

//console.log(champList[1])

let filedata = JSON.parse(`{
    "champions": {}
}`)

/*filedata.champions['akali'] = {
    allowed: 'yes', 
    note: 'ad'
}*/

rulings.forEach(champ => {
    let notes = champ.split('_');
    champ = notes.shift()
    if(champList.includes(champ)){
        filedata.champions[champ] = {
            "note": `${notes.length ? notes.join(' ') : 'yes'}`
        }
    } else {
        console.log(`Couldn't find ${champ}. Make sure championlist.txt is up2date and you spelled the name of ${champ} correctly!`)
    }
})

//console.log(filedata)

fs.writeFileSync(filepath, JSON.stringify(filedata))