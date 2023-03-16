neue spieler hinzufügen:

0. `.env` einrichten (siehe readme im hauptordner)
1. `[player_name].json` file in `arambot/players/json` erstellen
2. Namen aller Champions mit korrekter Rechtschreibung + per Zeilenumbruch getrennt in die .json file schreiben
- Als Beispiel dient die `example.json` datei. Bei Interesse einfach öffnen und das Skript in Schritt 6 ausführen
3. `const player` in zeile 5 zu `"[gamemode_name]"` umbenennen
4. `const uid` in zeile 6 zur discord user-id des discord-accounts hinzufügen, dessen champions hinzugefügt werden sollen
- hierfür auf discord `User Settings -> Advanced -> Developer Mode` aktivieren, auf die person in discord rechtsklicken -> `Copy ID` -> einfügen
5. terminal im `arambot` folder öffnen
6. skript ausführen mit `node formats/json-formatter.js`
7. neue .json file in `arambot/commands/aram.js` importieren
- `const [player_name] = require('../players/json/[player_name].json');`
8. handling für neuen spieler einbauen:
- unter kommentar `//add new players here` :
- ```
    case '[player_name].uid':
        userCollection = [player_name].champions;
    break;
    ```
9. bot aktualisieren mit `node deploy-commands.js`
10. bot starten mit `node .` und ausprobieren :)
