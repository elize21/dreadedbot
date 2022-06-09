
@@ -1,4 +1,4 @@
global.owner = ['6281515860089'] // Put your number here
global.owner = ['6281515860089','6281334177340'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '9dbfefbd20a1b284'
}
// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'Nurutomo'
global.multiplier = 69 // The higher, The harder levelup
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
