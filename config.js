const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "237697258114"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '237697258114' 
global.devs = '237697258114';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic08yblN1UWRlTFkxOWJFeFZLb1hJbWVLbFNTdFRuczZYaTZwSjI0VE1sST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYndueG9MR1Y0QVFaK2dpOGhLQS80VTAwdVUwMUQxN2c2eHJQUkZ5SlNWdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTWNiSk1MbVdFeEZzZlBSa2RxSDJWZFB1MzZ6cVdiWGdMOE02K0o5b204PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGcjI3ZG5rbWhoQ25YRDViZnF2am1MM2YrM0c4OWJ2bkZjRXdqVFExT0JJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPSERaR05vMTNXSTAvVC9BM1JaT25YeTJnY1V0U3g0RHJPSjB0dk12V009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMybjlVelhkV3RTbkVvanI0YkhRZkt4MzhRS3ArdEVvK3ZnY3RZTFh2QnM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxL1pnREJENmJ5L3FCVXZEYXJiQmlGd3FNTGg4aG40K1NmZGtFUmNWTFZKd3ZtU1NhSjgrWGkyZ0RBc3VKeUVnVnY4dzMySUxrSUlIcVg2MDFjbTZBUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2LCJhZHZTZWNyZXRLZXkiOiJqZ0M1K2R2RUhGaVVWQWtacXVzWThzQWRyZW41SlVaQTVjZTdXSXU5Y0ljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJybG1TdXpNeFRxcXU1UzZFX1ZrYUxRIiwicGhvbmVJZCI6ImI3NzEwOWE1LTdmOGMtNGM2ZS1hZjlhLWVmMmJlMTk4OTcwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3UW9HcXZUUWZDMllBbGprZ0I2Yis1bzVBN1E9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InphbkRHcHNkS3Jvc3pveGU1Uis1QnFIKzkxZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04yUmdlSUdFTmZMbXFjR0dCUT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHFYOFZBMUNheDBwUnRqYW5TL0RrbUNzZThsYm0rNnZSTFp5OUh2azNrQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieTdpV2ZaM2Z6eE0ybysxMUtkRk5neDUzdzlZbWM2WVZ6Q1BZVVFObmRXalFFUkdsUnJ3T1FybU5hdWZaMlAzZ21waS9WSXQ0bWowR0pxaVAxcUhvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InFQempPdHgyZkRRZmY5Um9yNHc4N09MRCt5bWxJSnM0ZDlWM1crN1grU3BlZWZ1VnNIWUNCeDFNbnZJZ3ZnMUVnUUI4OFZuNHorMFRqYVQvV2hQQkNBPT0ifSwibWUiOnsiaWQiOiIyMzc2OTcyNTgxMTQ6NzFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk3MjU4MTE0OjcxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE2bC9GUU5RbXNkS1ViWTJwMHZ3NUpnckh2Slc1dnVyMFMyY3ZSNzVONUEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTI4MzczNDF9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'TEF BOT',
  packname:  process.env.PACK_NAME || 'MADE BY TEF',
  
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
