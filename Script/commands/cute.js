/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "cute",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CYBER-SUJON",
  description: "VEDIO",
  commandCategory: "Hình ảnh",
  usages: "video",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝐒𝐭𝐚𝐭𝐮𝐬 𝐯𝐢𝐝𝐞𝐨"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?export=download&id=12cSO6VfCt_0t9vkajnG4w4LQP4TYjBVZ","https://drive.google.com/uc?export=download&id=1jz0roD_-z4rB742HRxbRDegHccsPTY_y","https://drive.google.com/uc?export=download&id=1cTnQ16KerXKqBIcSYotvMhd2K1SFhEKl","https://drive.google.com/uc?export=download&id=150MTJN8qHQWKseHu9eJo1D_vvfhax8RV","","","","",];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
