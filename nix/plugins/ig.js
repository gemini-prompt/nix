const ig = async (m, { text }) => {
  if (!text) return m.reply('*📸 حط رابط إنستغرام*\nمثال: .ig https://instagram.com/p/...');

  await m.reply('*⏳ كنحمل من إنستغرام...*');

  try {
    await m.reply(`*📥 الرابط:* ${text}\n\n⚠️ أضف API التحميل (مثل saveig أو instaloader)`);
  } catch (e) {
    await m.reply('*❌ ما قدرتش نحمل*');
  }
};

ig.command = ["ig", "instagram", "انستا", "إنستغرام"];
ig.category = "download";
export default ig;
