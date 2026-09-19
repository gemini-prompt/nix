const fb = async (m, { text }) => {
  if (!text) return m.reply('*📘 حط رابط فيسبوك*\nمثال: .fb https://facebook.com/...');

  await m.reply('*⏳ كنحمل من فيسبوك...*');
  await m.reply(`*📥 الرابط:* ${text}\n\n⚠️ أضف API التحميل`);
};

fb.command = ["fb", "facebook", "فيسبوك"];
fb.category = "download";
export default fb;
