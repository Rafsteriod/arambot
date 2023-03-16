neues format hinzufügen:

0. .env einrichten (siehe readme im hauptordner)
1. `[gamemode_name].json` file in `arambot/formats/json` erstellen
2. namen der erlaubten champions mit korrekter Rechtschreibung + per Zeilenumbruch getrennt in die .json file schreiben. kommentare zum jeweiligen champion (z.B. 'nur ap') können hinter einem unterstrich (_) hinzugefügt werden.
- Als Beispiel dient die `example.json` datei. Bei Interesse einfach öffnen und das Skript in Schritt 5 ausführen
3. `const gamemode` in zeile 13 zu `"[gamemode_name]"` umbenennen
4. terminal im `arambot` folder öffnen
5. skript ausführen mit `node formats/json-formatter.js`
6. neue .json file in `arambot/commands/aram.js` importieren
- `const [gamemode_name] = require('../formats/json/[gamemode_name].json');`
7. gamemode in `/aram`-befehl einfügen:
- unter kommentar `//add new gamemodes here` :
- `{name: '[gamemode_name]', value: '[gamemode_name]'},`
8. handling für neue gamemode option einbauen:
- unter kommentar `//add new gamemodes here (AGAIN)` :
- ```
    case '[gamemode_name]':
        champions = [gamemode_name].champions;
    break;
    ```
9. bot aktualisieren mit `node deploy-commands.js`
10. bot starten mit `node .` und ausprobieren :)
