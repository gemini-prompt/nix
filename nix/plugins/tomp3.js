const tomp3 = async (m, { conn }) => {
  if (!m.quoted) return m.reply("*🎵 رد على فيديو باش نحولو لصوت*");

  try {
    const buffer = await m.quoted.download();
    await conn.sendMessage(m.chat, {
      audio: buffer,
      mimetype: 'audio/mpeg',
      fileName: 'audio.mp3'
    }, { quoted: m });
    await m.reply("*✅ تم التحويل لصوت*");
  } catch {
    await m.reply("*❌ ما قدرتش نحول الفيديو*");
  }
};

tomp3.command = ["tomp3", "لصوت", "mp3", "صوت"];
tomp3.category = "tools";
export default tomp3;
