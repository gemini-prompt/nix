const remini = async (m, { conn }) => {
  if (!m.quoted) {
    return m.reply(`*🖼️ تحسين جودة الصورة*\n\nرد على صورة باش نحسن جودتها\n\n*ملاحظة:* هاد الأمر حالياً تجريبي`);
  }

  const type = m.quoted.mtype || m.quoted.type || "";
  if (!/image/.test(type) && !/image/.test(m.quoted.mimetype || "")) {
    return m.reply("*❌ خاصك ترد على صورة*");
  }

  await m.reply("*⏳ كنحاول نحسن جودة الصورة...*");

  try {
    const buffer = await m.quoted.download();
    
    // حالياً كنرجعو نفس الصورة (يمكن ربط API مجاني لاحقاً)
    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: `*✅ تم معالجة الصورة*\n\n⚠️ النسخة الحالية تجريبية\nباش تخدم مزيان خاص API لتحسين الصور\n\n_نيكس بوت_`
    }, { quoted: m });

  } catch (e) {
    await m.reply("*❌ ما قدرتش نعالج الصورة*");
  }
};

remini.command = ["remini", "hd", "تحسين", "جودة", "وضح"];
remini.category = "ai";
remini.description = "تحسين جودة الصور";
export default remini;
