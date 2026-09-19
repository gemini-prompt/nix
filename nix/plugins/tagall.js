const tagall = async (m, { conn, text, participants }) => {
  if (!m.isGroup) return m.reply('*👥 هاد الأمر كايخدم غير فالقروبات*');

  const members = participants || [];
  if (!members.length) return m.reply('*❌ ما لقيتش الأعضاء*');

  let teks = text ? `*📢 رسالة:*\n${text}\n\n` : '*📢 منشن للكل:*\n\n';
  const mentions = [];

  for (const p of members) {
    const jid = p.id || p.jid || p;
    teks += `• @${jid.split('@')[0]}\n`;
    mentions.push(jid);
  }

  teks += `\n_نيكس بوت_`;

  await conn.sendMessage(m.chat, {
    text: teks,
    mentions
  }, { quoted: m });
};

tagall.command = ["tagall", "منشن", "الكل", "tag"];
tagall.category = "group";
tagall.admin = true;
tagall.group = true;
tagall.description = "منشن جميع أعضاء القروب";

export default tagall;
