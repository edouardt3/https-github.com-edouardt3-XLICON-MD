const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0UvTk1XZDlHOFlvY3VxQ1NVa0kxcGJHWWtoa29SS2Nnbjdubkk4amJtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NscW44MkgyM1llVkFvRWkrODg3dnQ5Y2h3TUhybGo3dVlxV2JBWmN4ST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSkFFTjlHVFlUaFZua21lOU1qT1M0eDNicWdqdFhlU0NJNHpFbkVEREZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTWhhMk5oN2t5Qk1HZFEyc3ZuekJSb2FtM0gvN2I1YU5DOWNobmxOZ21zPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHRGIrRG9IVEFrVHFuNmNtYkFROVZoVEJ4Wi9VSk9waG5KRmwxUCs3WDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk4ci8zSjhnMzVyRlQxSDFnS1FIaFVOTlJ4NW1YK0UrV0tiZGRqTm12MWc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrdWNMNmZ1ZzBNcURmUXYydnpBRjJuQm5OWUNKb2NIeHgwUC93MkpDUk9STFo2Tld2c2k1ekhlNzE5anZNUjRzK2RrQ1U5UndCVGd5ZktVcHI2NzNndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2LCJhZHZTZWNyZXRLZXkiOiJYbENROU85bStLSjh2M0Z6TE44RnhORDRZWHRVMWR3Qk40L2FFUzBRYXAwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCYzFqMGFfM1NiQ1g3T2U3cDNwZllBIiwicGhvbmVJZCI6IjJiOTkxZTM1LTI1ZDMtNGU1OC04ZGFiLWY2Mzg2OWQ2ZDI4ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTXUxUmE1ZHp5dXd4RzREbldDd2NoV1R1bW89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdmTklOSXZ2SDFaM2oyV2E4d2RZdUR0V1d0VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04yUmdlSUdFSmlTbWFjR0dBYz0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHFYOFZBMUNheDBwUnRqYW5TL0RrbUNzZThsYm0rNnZSTFp5OUh2azNrQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWk5oc3FaVjhWSFBHVTZEUjJObWp1ZGRtajhobWNrOFVlaHUyTERpblFza3BrcEtBSDlsL0JLWlAwOHIyWExSN3ozUkxwSTRoVTRkRGpJMU5DN3AzQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IllnWi9vLzkrM2hsYTkxa09RODl4UjBua3Y5OWM2bkZsTnZLUkdaKzVnOXR1aHhhc1RwRkFjSVlNSGRzckkyZnYrbFZpMTFGM3FUZmR0UjJZb3pKTGp3PT0ifSwibWUiOnsiaWQiOiIyMzc2OTcyNTgxMTQ6NjBAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk3MjU4MTE0OjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE2bC9GUU5RbXNkS1ViWTJwMHZ3NUpnckh2Slc1dnVyMFMyY3ZSNzVONUEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTI4MTM1OTl9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SALMAN AHMAD',
  
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
