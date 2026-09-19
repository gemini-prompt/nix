const kick = async (m, { conn, text, participants }) => {
  if (!m.isGroup) return m.reply('*👥 هاد الأمر كايخدم غير فالقروبات*');

  let users = [];
  if (m.quoted) {
    users.push(m.quoted.sender);
  } else if (m.mentionedJid?.length) {
    users = m.mentionedJid;
  } else {
    return m.reply('*❌ منشن الشخص أو رد على رسالتو*\nمثال: .kick @الشخص');
  }

  for (const user of users) {
    try {
      await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
      await m.reply(`*✅ تم طرد* @${user.split('@')[0]}`, { mentions: [user] });
    } catch (e) {
      await m.reply(`*❌ ما قدرتش نطرد* @${user.split('@')[0]}\nيمكن ما عنديش صلاحيات`, { mentions: [user] });
    }
  }
};

kick.command = ["kick", "طرد", "برّا", "احذف"];
kick.category = "group";
kick.admin = true;
kick.botAdmin = true;
kick.group = true;
kick.description = "طرد عضو من القروب";

export default kick;
