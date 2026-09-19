const toimg = async (m, { conn }) => {
  if (!m.quoted) return m.reply("*🖼️ رد على ستيكر باش نحولو لصورة*");

  try {
    const buffer = await m.quoted.download();
    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: "*✅ تم التحويل لصورة*\n_نيكس بوت_"
    }, { quoted: m });
  } catch {
    await m.reply("*❌ ما قدرتش نحول الستيكر*");
  }
};

toimg.command = ["toimg", "toimage", "لصوره", "صورة"];
toimg.category = "tools";
export default toimg;
