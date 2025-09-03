import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.botNumber = '' //Ejemplo: 51992621601

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.owner = [
  ['51992621601', 'Defen', true]
];

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.mods = []
global.suittag = ['51992621601']
global.prems = []

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.namebot = 'Defen'
global.packname = ' '
global.botname = 'alexdre_sa'
global.wm = 'ALEIZN'
global.author = 'alexdre_sa'
global.dev = 'Defen'
global.club = 'Mᴠʀᴄᴏ Sᴇxᴏ'
global.textbot = 'Mᴠʀᴄᴏ Sᴇxᴏ'
global.etiqueta = 'alexdre_sa'
global.jadi = 'JadiBots'
global.sessions = 'AleiznSession'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.moneda = 'Diamantes 💎'
global.xanime = '🍮'
global.xmenus = '🍪'
global.xnable = '🧋'
global.xefects = '🥥'
global.xfrases = '🍯'
global.xgame = '🌹'
global.xsearch = '🌳'
global.xtools = '🍚'
global.xdownload = '🥞'
global.xconverter = '🪾'
global.xlist = '📑'
global.xff = '🥧'
global.xlogos = '🖼️'
global.xgc = '🍃'
global.xinfo = '☁️'
global.xnsfw = '🪼'
global.xowner = '☕'
global.xia = '💭'
global.xfun = '🥯'
global.xsticker = '🫓'
global.xrpg = '🍙'
global.xreg = '🪴'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.github = 'https://github.com/Aleizn/Defen'
global.grupo = 'https://chat.whatsapp.com/LSFhllEEKW8HAP7eGwQpiX'
global.comu = 'https://chat.whatsapp.com/LSFhllEEKW8HAP7eGwQpiX'
global.channel = 'https://whatsapp.com/channel/0029Vb3BTIU2ZjCs8Scv1U0u'
global.ig = 'https://www.instagram.com/alexdre_sa'

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "51992621601-120363046971143826@g.us" } : {}) }, message: { orderMessage: { itemCount: -999999, status: 1, surface: 1, message: 'Aleizn', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net' } } }
global.multiplier = 70

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})