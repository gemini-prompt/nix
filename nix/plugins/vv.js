const vv = async (m, { conn }) => {
  try {
    if (!m.quoted) {
      return m.reply(`*👀 أمر عرض مرة واحدة*\n\nرد على صورة أو فيديو أو صوت من نوع *عرض مرة واحدة* باش نطلعو ليك`);
    }

    let mediaBuffer;
    try {
      mediaBuffer = await m.quoted.download();
    } catch (e) {
      return m.reply(`*❌ ما قدرتش نحمل الميديا*\nيمكن الرسالة انفاتحت قبل ولا فيها مشكل`);
    }

    if (!mediaBuffer) {
      return m.reply(`*❌ فشل التحميل*\nجرب مرة أخرى`);
    }

    const type = m.quoted.mtype || m.quoted.type || '';

    if (type === 'imageMessage' || /image/.test(m.quoted.mimetype || '')) {
      await conn.sendMessage(m.chat, {
        image: mediaBuffer,
        caption: `*✅ تم استخراج الصورة*\n\n*عرض مرة واحدة* → ولات عادية دابا\n\n_نيكس بوت_`
      }, { quoted: m });
    } 
    else if (type === 'videoMessage' || /video/.test(m.quoted.mimetype || '')) {
      await conn.sendMessage(m.chat, {
        video: mediaBuffer,
        caption: `*✅ تم استخراج الفيديو*\n\n*عرض مرة واحدة* → ولى عادي دابا\n\n_نيكس بوت_`
      }, { quoted: m });
    } 
    else if (type === 'audioMessage' || /audio/.test(m.quoted.mimetype || '')) {
      await conn.sendMessage(m.chat, {
        audio: mediaBuffer,
        mimetype: 'audio/ogg; codecs=opus',
        ptt: true
      }, { quoted: m });
      await m.reply(`*✅ تم استخراج الرسالة الصوتية*`);
    } 
    else {
      return m.reply(`*❌ هاد النوع ما مدعومش*\nرد على صورة أو فيديو أو صوت فقط`);
    }

  } catch (e) {
    console.error(e);
    await m.reply(`*❌ وقع خطأ*\n\`\`\`${e.message}\`\`\``);
  }
};

vv.command = ["vv", "عرض", "كشف", "افتح", "viewonce"];
vv.category = "tools";
vv.usage = ["vv"];
vv.description = "كيستخرج الميديا من رسائل العرض مرة واحدة";

export default vv;
