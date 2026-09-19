import { AiChat } from "../system/utils.js";

const gpt = async (m, { text }) => {
  if (!text) {
    return m.reply(`*🤖 نيكس AI*\n\nاكتب سؤالك أو اللي بغيتي\n\n*أمثلة:*\n• .gpt شنو هي عاصمة المغرب؟\n• .gpt اشرح ليا الذكاء الاصطناعي\n• .botai واش كاين فرق بين AI و ML؟`);
  }

  await m.reply("*⏳ كنفكر...*");

  try {
    const response = await AiChat({ 
      text: `أجب باللهجة المغربية الدارجة بشكل طبيعي ومفيد:\n\n${text}`,
      model: "openai" 
    });

    await m.reply(`*🤖 نيكس AI:*\n\n${response}\n\n_نيكس بوت_`);
  } catch (e) {
    console.error(e);
    await m.reply("*❌ ما قدرتش نوصل للذكاء الاصطناعي دابا*\nجرب من بعد شوية");
  }
};

gpt.command = ["gpt", "botai", "ai", "ذكاء", "سوال", "اسأل"];
gpt.category = "ai";
gpt.description = "دردشة مع الذكاء الاصطناعي";
export default gpt;
