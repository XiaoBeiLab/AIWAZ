const version = require('../package.json').version;
const fs = require('fs');
const moment = require('moment-timezone');
module.exports = client => {
  var d = new Date();
  var ser = client.guilds.get("179445290795794432");

  console.log(`I\`m Online at : ${toTimeZone(d, "Asia/Hong_Kong")} \n AIwaz 御坂網絡 : ${version}`);
  client.user.setPresence( { game: {name: '御坂網絡 ' + version, type:3 }});
  
  try{
    ser.channels.find('name', 'aiw-log').send(`Client Online at : ${toTimeZone(d, "Asia/Hong_Kong")}`);
  } catch (error) {
    console.log("Can't find channel");
  }
  
  function toTimeZone(d, zone) {
   var format = 'YYYY/MM/DD HH:mm:ss';
   return moment(d, format).tz(zone).format(format);
  };
  
  fs.readdir('./commands/', (error, files) => {
    if (error) console.error(error);

    console.log(`Loading a total of ${files.length} commands.`);
    files.forEach(f => {
      delete require.cache[require.resolve(`../commands/${f}`)];
      let props = require(`../commands/${f}`);
    });
  });
}
