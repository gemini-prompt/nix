const hidetag = async (m, { conn, text, participants }) => {
  if (!m.isGroup) return m.reply('*👥 هاد الأمر كايخدم غير فالقروبات*');

  const members = participants || [];
  const mentions = members.map(p => p.id || p.jid || p);

  const msg = text || '📢';

  await conn.sendMessage(m.chat, {
    text: msg,
    mentions
  }, { quoted: m });
};

hidetag.command = ["hidetag", "هيدتاغ", "مخفي", "ht"];
hidetag.category = "group";
hidetag.admin = true;
hidetag.group = true;
hidetag.description = "منشن الكل بدون ما يبانو الأسماء";

export default hidetag;
