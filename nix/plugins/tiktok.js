const tiktok = async (m, { text }) => {
  if (!text) return m.reply('*🎵 حط رابط تيك توك*\nمثال: .tiktok https://tiktok.com/...');

  await m.reply('*⏳ كنحمل الفيديو من تيك توك...*');

  try {
    await m.reply(`*📥 الرابط:* ${text}\n\n⚠️ أضف API التحميل (مثل tikwm أو snaptik)`);
  } catch (e) {
    await m.reply('*❌ ما قدرتش نحمل الفيديو*');
  }
};

tiktok.command = ["tiktok", "تك توك", "tt", "تيكتوك"];
tiktok.category = "download";
export default tiktok;
