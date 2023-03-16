const fs = require('node:fs');
const path = require('node:path');

//const player = "[FORMAT NAME HERE]"
const player = "default"
const uid = ""

const filename = player + '.json'
const filepath = path.join(__dirname, 'json', filename)
const champListPath = path.join(__dirname, "championlist.txt")

let champList = fs.readFileSync(champListPath, {encoding:'utf8', flag:'r'}).split('\n');
let owned = fs.readFileSync(filepath, {encoding:'utf8', flag:'r'}).split('\n');

//console.log(champList[1])

let filedata = JSON.parse(`{
    "uid": "${uid}",
    "champions": []
}`)

/*filedata.champions['akali'] = {
    allowed: 'yes', 
    note: 'ad'
}*/

champList.forEach((champ, i) => {
    if(owned[i]=='YUP'){
        filedata.champions.push(champ)
    } 
})

console.log(filedata)

fs.writeFileSync(filepath, JSON.stringify(filedata))