const demote = async (m, { conn }) => {
  if (!m.isGroup) return m.reply('*👥 هاد الأمر كايخدم غير فالقروبات*');

  let users = [];
  if (m.quoted) users.push(m.quoted.sender);
  else if (m.mentionedJid?.length) users = m.mentionedJid;
  else return m.reply('*❌ منشن الشخص أو رد على رسالتو*');

  for (const user of users) {
    try {
      await conn.groupParticipantsUpdate(m.chat, [user], 'demote');
      await m.reply(`*✅ تم تنزيل* @${user.split('@')[0]} *لعضو عادي*`, { mentions: [user] });
    } catch {
      await m.reply(`*❌ ما قدرتش ننزل* @${user.split('@')[0]}`, { mentions: [user] });
    }
  }
};

demote.command = ["demote", "تنزيل", "عزل"];
demote.category = "group";
demote.admin = true;
demote.botAdmin = true;
demote.group = true;
export default demote;
