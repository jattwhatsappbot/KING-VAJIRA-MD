const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'jattwhatsappbot@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sindh Pakistan'
global.gurl = 'https://instagram.com/' //tayyabkhalid787
global.sudo = process.env.SUDO || '94710903687'
global.devs = '94710903687';
global.website = 'https://github.com/
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fjaat--681310249855099292%2F&psig=AOvVaw0iB8hdZr7AcyXKQxvXwcXz&ust=1702707335950000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMi3qMHmkIMDFQAAAAAdAAAAABAD'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Jatt Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Tayyab Khalid' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ptcGFSOW1yVE4veXNSNHRNZms0am5BTXkxRmNVSDZpcHp4bjgwck9YYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEF1d05kMXVHeXhqQVd3YXBxdUFYaC9WVUd5WXhkUVlvRVhUSkNSVW53WT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTm4zNlJ2T1JSZytCZ3RiVm1oRVZnbml0a1Ftd2VRSXpHeURIbjgyS25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMcVo2MWN2MWs4b0pFcUZESEgyaHRCRFFLTGJZaUZxNXVITnZmWXZuMDM4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDK2ZjaGFOemdybGVvVXlNSDJ4SDNZMStFTFNPOUxLYTZ0Ukg3SDNGRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9KSThIYVBDSGtEMHRZdjlpVkE0d29DTlB1bkF3VG8xbExOYUl4WXNPbHM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmbjdQbUlDSFNHdmp4Vm5YYkZuUi9JSDhZNllUYTU3dG1kZUduLzZhbWpabzZHVTQvM0U0d2lJVU1HVEdxNGFKaFhmNzhvc3FGSWh3K2VSdG44MmdqQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExOCwiYWR2U2VjcmV0S2V5IjoiSU90ekF3Qmt6dmZrOXVHVWhIOHB1N3J0SDdqaEhhN3N3bjdqQ016TjNVST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYlFYa0RRNl9Reld6SVBnZW5zWmZmdyIsInBob25lSWQiOiI3NzgyNjAzMS0zMDFlLTQ1ZTAtYWE1Ni1hMmMxYWQ1YzQ1ZjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9oejQ4bGY1cEJ3T0JXYkVnNkM4THlrWExJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCc05PZWt2SU90dEMvaUFCSWJJUDM4VktMZHc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdXJycXNHRU1QZzc2c0dHQXc9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik10VVgzd29JRER3U0FreEo0dXRtU2piaThuUzFBcmJkT1dyaFFubmxIVHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNTVFM2Unl3M2dFL05sb2FTVWlJREViNm1LRDFWUVhGbnZma04zU1hBUGIyNWJTV1VxTCtKeXhadVVWWG8zWjk2ZWZIVFZENGIxVXgyZVJmRGhMT0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMVStwMVZnUW1HSHp5Z25HWHlucWpsVnFUeWZVQVJpL0xlTnBFRU8xalgxU3hlQlpZMzYrYk4yM3h6aHRhNGtyQVlxWGVWOUlHMEFtV2xKQy9jSXpqUT09In0sIm1lIjp7ImlkIjoiOTIzMzUyMTgzNTYzOjlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzUyMTgzNTYzOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVExWRjk4S0NBdzhFZ0pNU2VMclprbzI0dkowdFFLMjNUbHE0VUo1NVIwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjYyMTI1NH0= : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  afk:  process.env.AFK ||true,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
