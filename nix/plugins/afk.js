const afk = async (m, { text }) => {
  if (!global.db.afk) global.db.afk = {};

  global.db.afk[m.sender] = {
    reason: text || 'ما كينش سبب',
    time: Date.now()
  };

  await m.reply(`*💤 وضع عدم التواجد مفعل*\n\nالسبب: ${text || 'ما كينش'}\n\nغادي نجاوب تلقائياً إلا شي واحد عيط ليك`);
};

afk.command = ["afk", "غائب", "مشغول"];
afk.category = "tools";
export default afk;
