/** data pre-processing */

const data = require('./data/data_full.json');
const ref = data.restricted_access.secret_document.users;
const users = Object.keys(ref); 

let songs = [];
for(let i of users) {
    let user = ref[i];
    let index = 0;
    for(let j of user.audioFeatures) {
        j.song = user.recentlyPlayedTrackIDs[index];
        songs.push(j);
        index++;
    }
}

/** write to file */
const fs = require('fs');
fs.writeFileSync('./data/songs.json', JSON.stringify(songs), { encoding: 'utf-8' });