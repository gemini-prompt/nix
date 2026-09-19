const twitter = async (m, { text }) => {
  if (!text) return m.reply('*🐦 حط رابط تويتر/X*\nمثال: .twitter https://x.com/...');

  await m.reply('*⏳ كنحمل من تويتر...*');
  await m.reply(`*📥 الرابط:* ${text}\n\n⚠️ أضف API التحميل`);
};

twitter.command = ["twitter", "x", "تويتر"];
twitter.category = "download";
export default twitter;
