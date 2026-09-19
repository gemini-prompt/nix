const warn = async (m, { conn, args }) => {
  if (!m.isGroup) return m.reply('*👥 هاد الأمر كايخدم غير فالقروبات*');

  let user;
  if (m.quoted) user = m.quoted.sender;
  else if (m.mentionedJid?.length) user = m.mentionedJid[0];
  else return m.reply('*❌ منشن الشخص أو رد على رسالتو*');

  if (!global.db.warns) global.db.warns = {};
  if (!global.db.warns[m.chat]) global.db.warns[m.chat] = {};
  if (!global.db.warns[m.chat][user]) global.db.warns[m.chat][user] = 0;

  global.db.warns[m.chat][user] += 1;
  const count = global.db.warns[m.chat][user];
  const limit = global.botSettings?.warnLimit || 3;

  await m.reply(`*⚠️ تحذير*\n@${user.split('@')[0]}\nعدد التحذيرات: ${count}/${limit}`, { mentions: [user] });

  if (count >= limit) {
    try {
      await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
      global.db.warns[m.chat][user] = 0;
      await m.reply(`*🚫 تم طرد* @${user.split('@')[0]} *بسبب تجاوز عدد التحذيرات*`, { mentions: [user] });
    } catch {
      await m.reply('*❌ ما قدرتش نطردو، تأكد أني أدمن*');
    }
  }
};

warn.command = ["warn", "تحذير", "انذار"];
warn.category = "group";
warn.admin = true;
warn.group = true;
export default warn;
