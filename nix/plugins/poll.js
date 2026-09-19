const poll = async (m, { conn, text }) => {
  if (!text) return m.reply('*📊 اكتب السؤال والخيارات*\nمثال: .poll شنو أحسن لون | أحمر | أزرق | أخضر');

  const parts = text.split('|').map(s => s.trim());
  if (parts.length < 3) return m.reply('*❌ خاص السؤال + جوج خيارات على الأقل*\nافصل بينهم بـ |');

  const question = parts[0];
  const options = parts.slice(1);

  try {
    await conn.sendMessage(m.chat, {
      poll: {
        name: question,
        values: options,
        selectableCount: 1
      }
    });
  } catch {
    await m.reply('*❌ ما قدرتش نصايب التصويت*');
  }
};

poll.command = ["poll", "تصويت", "استطلاع"];
poll.category = "group";
export default poll;
