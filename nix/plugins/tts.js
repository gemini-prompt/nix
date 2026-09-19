import axios from "axios";
import fs from "fs";
import path from "path";

const tts = async (m, { conn, text, args }) => {
  if (!text && !m.quoted) {
    return m.reply(`*🔊 تحويل النص إلى صوت*\n\nاكتب النص أو رد على رسالة\n\n*أمثلة:*\n• .tts مرحبا بكم\n• .tts ar السلام عليكم\n• .tts fr Bonjour\n• .tts en Hello everyone`);
  }

  let content = text || m.quoted?.text || m.quoted?.conversation || "";
  if (!content) return m.reply("*❌ ما لقيتش النص*");

  // استخراج اللغة إذا مكتوبة
  let lang = "ar";
  const possibleLang = args[0]?.toLowerCase();
  const langMap = {
    ar: "ar", العربية: "ar", عربي: "ar",
    fr: "fr", الفرنسية: "fr", فرنسي: "fr",
    en: "en", الإنجليزية: "en", انجليزي: "en",
    es: "es", es: "es",
    de: "de",
    tr: "tr"
  };

  if (langMap[possibleLang]) {
    lang = langMap[possibleLang];
    content = args.slice(1).join(" ") || content;
  }

  if (content.length > 200) {
    return m.reply("*⚠️ النص طويل بزاف*\nحاول تخليه أقل من 200 حرف");
  }

  await m.reply("*⏳ كنحول النص لصوت...*");

  try {
    // Google TTS (مجاني بدون API Key)
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(content)}&tl=${lang}&client=tw-ob`;

    const response = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const buffer = Buffer.from(response.data);

    await conn.sendMessage(m.chat, {
      audio: buffer,
      mimetype: "audio/mpeg",
      ptt: true, // يرسل كـ رسالة صوتية
      fileName: "tts.mp3"
    }, { quoted: m });

  } catch (e) {
    console.error("TTS Error:", e.message);
    await m.reply("*❌ ما قدرتش نحول النص لصوت*\nجرب مرة أخرى أو غير اللغة");
  }
};

tts.command = ["tts", "speak", "صوت", "نطق", "gtts"];
tts.category = "ai";
tts.description = "تحويل النص إلى صوت (مجاني)";
export default tts;
