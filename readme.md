how 2 make a /aram bot

1. discord application erstellen
2. bot erstellen
3. dieses git repo runterladen
4. node.js packages installieren: terminal im git repo öffnen -> `npm i`
- damit alles funktioniert, ist node.js version 16 oder neuer erforderlich
5. .env datei erstellen und befüllen
- hier muss folgendes drinstehen:
- ```
    APPLICATION_ID=[your discord application id]
    PUBLIC_KEY=[public key of your application]
    TOKEN=[your bot token]
    SERVER_ID=[id of your discord server]
    ```
6. (OPTIONAL) gamemodes hinzufügen: siehe readme.md im `formats` ordner
7. (OPTIONAL) spieler hinzufügen: siehe readme.md im `players` ordner
8. bot auf den gewünschten server einladen. hierfür discord application im developer portal auswählen -> OAuth2 -> URL Generator -> unter Scopes `bot` und `applications.commands` abhaken -> generierte URL kopieren, in eigenen browser einfügen, bot erlauben
9. dem bot auf deinem server /aram beibringen: terminal -> `node deplay-commands.js`
10. den bot hosten: terminal -> `node .`

glhfgg