const broadcast = async (m, { conn, text }) => {
  if (!text) return m.reply('*📢 اكتب الرسالة اللي بغيتي ترسل*\nمثال: .broadcast مرحبا بالجميع');

  await m.reply('*⏳ كنبدا الإرسال...*');

  // هاد الجزء خاصو قائمة القروبات من الـ store
  await m.reply(`*✅ تم تحضير الرسالة:*\n${text}\n\n⚠️ خاصك تربط نظام الـ broadcast مع قائمة القروبات ديالك`);
};

broadcast.command = ["broadcast", "اذاعة", "بث", "bc"];
broadcast.category = "owner";
broadcast.owner = true;
export default broadcast;
