import axios from "axios";

const translate = async (m, { text, args }) => {
  let content = text;
  let targetLang = "ar";

  if (m.quoted && !text) {
    content = m.quoted.text || m.quoted.conversation || "";
  }

  if (!content) {
    return m.reply(`*🌐 ترجمة*\n\nاكتب النص أو رد على رسالة\n\n*أمثلة:*\n• .tr en مرحبا\n• .translate fr Hello\n• .ترجمة ar How are you?`);
  }

  // إذا أول كلمة لغة
  const first = args[0]?.toLowerCase();
  const langCodes = ["ar", "en", "fr", "es", "de", "tr", "it", "pt", "ru", "zh", "ja", "ko"];
  if (langCodes.includes(first)) {
    targetLang = first;
    content = args.slice(1).join(" ") || content;
  }

  await m.reply("*⏳ كنترجم...*");

  try {
    // استخدام Google Translate المجاني
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(content)}`;
    const { data } = await axios.get(url);

    let translated = "";
    if (data && data[0]) {
      data[0].forEach(item => {
        if (item[0]) translated += item[0];
      });
    }

    if (!translated) throw new Error("Empty translation");

    await m.reply(`*🌐 الترجمة:*\n\n${translated}\n\n_من → ${targetLang.toUpperCase()}_`);
  } catch (e) {
    console.error(e);
    await m.reply("*❌ فشلت الترجمة*\nجرب مرة أخرى");
  }
};

translate.command = ["translate", "tr", "ترجمة", "ترجم", "ترجمه"];
translate.category = "ai";
translate.description = "ترجمة النصوص";
export default translate;
