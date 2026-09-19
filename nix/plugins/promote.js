const promote = async (m, { conn }) => {
  if (!m.isGroup) return m.reply('*👥 هاد الأمر كايخدم غير فالقروبات*');

  let users = [];
  if (m.quoted) users.push(m.quoted.sender);
  else if (m.mentionedJid?.length) users = m.mentionedJid;
  else return m.reply('*❌ منشن الشخص أو رد على رسالتو*');

  for (const user of users) {
    try {
      await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
      await m.reply(`*✅ مبروك* @${user.split('@')[0]} *وليتي أدمن*`, { mentions: [user] });
    } catch {
      await m.reply(`*❌ ما قدرتش نرفع* @${user.split('@')[0]}`, { mentions: [user] });
    }
  }
};

promote.command = ["promote", "رفع", "أدمن", "admin"];
promote.category = "group";
promote.admin = true;
promote.botAdmin = true;
promote.group = true;
export default promote;
