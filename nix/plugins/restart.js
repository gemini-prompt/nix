const restart = async (m) => {
  await m.reply('*🔄 كنعاود تشغيل البوت...*');
  process.exit(0);
};

restart.command = ["restart", "اعادة", "ريستارت"];
restart.category = "owner";
restart.owner = true;
export default restart;
