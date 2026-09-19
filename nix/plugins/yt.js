const yt = async (m, { conn, text, args }) => {
  if (!text) return m.reply('*📺 حط رابط يوتيوب أو اسم الفيديو*\nمثال: .yt اسم الأغنية\nأو .yt https://youtube.com/...');

  await m.reply('*⏳ كنقلب على الفيديو...*');

  try {
    // مثال بسيط - خاصك تربط API حقيقي (مثل yt-dlp أو API خارجي)
    await m.reply(`*🔍 البحث:* ${text}\n\n⚠️ حالياً خاصك تضيف API التحميل (مثل savetube أو yt-dlp)\nتقدر تستعمل خدمات مجانية أو تربط yt-dlp فالسيرفر`);
  } catch (e) {
    await m.reply('*❌ وقع خطأ فالتحميل*');
  }
};

yt.command = ["yt", "youtube", "يوتيوب", "play", "شغل"];
yt.category = "download";
yt.description = "تحميل من يوتيوب";
export default yt;
