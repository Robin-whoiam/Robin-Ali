module.exports.config = {
  'name': "kosto",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "RANDOM islamic video",
  'commandCategory': "Random video",
  'usages': "Statusvideo",
  'cooldowns': 0x2,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0xaa4f68,
  event: _0x3ec0df,
  args: _0x22794f,
  Users: _0x131c44,
  Threads: _0x38b004,
  Currencies: _0x36b5ec
}) => {
  const _0x3d77bf = global.nodemodule.request;
  const _0x23750b = global.nodemodule["fs-extra"];
  var _0x2e067a = ["https://drive.google.com/uc?id=17Siy3m5zeLkokRoCyWwczk6zu526JUPF"];
  var _0x5bcfcc = () => _0xaa4f68.sendMessage({
    'body': "╭──────•◈•───────╮\n\n🌻মানুষ হারাম ছাড়েনা অথচ সুখ শান্তি খুঁজে বেড়ায় আরাম \nমানুষ কেন বুঝতে চায় না\n সে যে খোদার গোলাম🥺। \n\nআল্লাহ আমাদের সবাইকে হারাম থেকে দূরে থাকার তৌফিক দান করুক 😭❤️‍🩹।\n\n𝗠𝗔𝗗𝗘 𝗕𝗬: 𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 \n╰──────•◈•───────╯",
    'attachment': _0x23750b.createReadStream(__dirname + "/cache/1.mp4")
  }, _0x3ec0df.threadID, () => _0x23750b.unlinkSync(__dirname + "/cache/1.mp4"));
  return _0x3d77bf(encodeURI(_0x2e067a[Math.floor(Math.random() * _0x2e067a.length)])).pipe(_0x23750b.createWriteStream(__dirname + "/cache/1.mp4")).on("close", () => _0x5bcfcc());
};
