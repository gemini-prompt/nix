import { createSticker } from "../system/utils.js";

const sticker = async (m, { conn, bot }) => {
  if (!m.quoted) return m.reply("*🖼️ رد على صورة أو فيديو باش نحولو لستيكر*");

  try {
    const { pack, author } = bot.config.info.copyright;
    const q = await m.quoted;
    const buffer = await createSticker(await q.download(), { 
      mime: q.mimetype, 
      pack: pack || 'نيكس بوت', 
      author: author || 'المطور' 
    });

    await conn.sendMessage(m.chat, { sticker: buffer }, { quoted: m });
  } catch (e) {
    await m.reply("*❌ ما قدرتش نصايب الستيكر*\nتأكد أنك رديتي على صورة أو فيديو");
  }
};

sticker.command = ["sticker", "s", "ستيكر", "ملصق"];
sticker.category = "sticker";
export default sticker;
