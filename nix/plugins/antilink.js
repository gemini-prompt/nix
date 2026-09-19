const antilink = async (m, { args }) => {
  const action = (args[0] || '').toLowerCase();

  if (!['on', 'off', 'شغل', 'طفي'].includes(action)) {
    const status = global.botSettings?.antiLink ? '🟢 شغال' : '🔴 مطفي';
    return m.reply(`*🔗 إعدادات منع الروابط*\n\nالحالة: ${status}\n\n• .antilink on\n• .antilink off`);
  }

  if (['on', 'شغل'].includes(action)) {
    global.botSettings.antiLink = true;
    return m.reply('*✅ تم تشغيل منع الروابط*\nأي رابط غادي يتحذف');
  }

  global.botSettings.antiLink = false;
  return m.reply('*🛑 تم إيقاف منع الروابط*');
};

antilink.command = ["antilink", "منع_روابط", "انتي لينك"];
antilink.category = "group";
antilink.admin = true;
antilink.group = true;
export default antilink;
