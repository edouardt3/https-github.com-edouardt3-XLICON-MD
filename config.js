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
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURPVEk3TkZVT0FDRnorNExVc3UrVDQ4blNOSE91VmFQL0djblBERmkwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWdLWEtUdlhPU1czMVVZWHF4VTJ3QU5zV2ZwQTJwT2VmdmRob3VWS2dnUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR0RYNXdFeTBhSG1lWkVweHlZUUZQVVgxK1hpSXpGTTBKeVNKdk5IWEVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTkZsenRXZ3VsU05uQUtpY3FiZEdBWHZ5YkIvemE1OTNzRU8vYXBUdGpNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBRVIxck5kNEhmd2RVL205b2lKRHNoNk9pd01oRGZGRGRsMEd2aHlaMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIvdmYxYzZYWGdZTzJtUHByQ21qQjBFcGVuQnNwdGk1cmErcVlkMTdHaWc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxS3B6NVBRdVYvT0hEN2Z1eWNTSFBqYWJpTmQ2VXFLZ29may9FVWZCL2JkRU9sZms5dzE2WjFTRWl0WEIzNFdGZGhlRWRseHRNQ3ZLZmlQU0laUkNnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1NSwiYWR2U2VjcmV0S2V5IjoiOERab2dYRlFWcFFGZ1c5b01PZFlTa2RzTUpHa3MyTG1odjN4L084ZW5zOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNFBwNl9hNXBRbXVESTUzUi1RV2pQZyIsInBob25lSWQiOiJlZTAyNzRhOS03YWVhLTQyNDMtOGM5OS1kZGI5MTVhMTkwN2YiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVZKcGx4NXFESVYyd0ZST2JQWlpMdHZIbEdrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrNnJnV3FKOTEvMkZQdEdSeDQyN3JXRVlIcVU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOMlJnZUlHRUppN25LY0dHQnc9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRxWDhWQTFDYXgwcFJ0amFuUy9Ea21Dc2U4bGJtKzZ2UkxaeTlIdmsza0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVwSnRRdXlraEU0aTl3TlNvS0VCZHgrdG5LUDN6RGdBTGxvRGcyUHAwQXpNYS9RamprbDBHd1RhQUdPV2dxejlPSTFMd3RseGxqbWxBWFVzbDNWbkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPSk44R0FlU1pWZjl5b1N4a0pFSDBxb0R6ZDJMeEY1NmFab3RUa1A0SkVVRFRPWWpKSVlNd3M4WlZVdUpuS2U1Zis0aFVrTFozdzVFSlFNQUVicEJndz09In0sIm1lIjp7ImlkIjoiMjM3Njk3MjU4MTE0Ojc5QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5NzI1ODExNDo3OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRNmwvRlFOUW1zZEtVYlkycDB2dzVKZ3JIdkpXNXZ1cjBTMmN2Ujc1TjVBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjkyODY3OTk1fQ",  //PUT Session Id Here, 
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
