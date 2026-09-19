const autostatus = async (m, { args }) => {
  const action = (args[0] || '').toLowerCase();

  if (!['on', 'off', 'شغل', 'طفي'].includes(action)) {
    const status = global.botSettings?.autoStatus ? '🟢 شغال' : '🔴 مطفي';
    return m.reply(`*👀 المشاهدة التلقائية للستوري*\n\nالحالة: ${status}\n\n• .autostatus on\n• .autostatus off`);
  }

  if (['on', 'شغل'].includes(action)) {
    global.botSettings.autoStatus = true;
    return m.reply('*✅ تم تشغيل مشاهدة الستوري تلقائياً*');
  }

  global.botSettings.autoStatus = false;
  return m.reply('*🛑 تم إيقاف مشاهدة الستوري*');
};

autostatus.command = ["autostatus", "ستوري", "autoview"];
autostatus.category = "owner";
autostatus.owner = true;
export default autostatus;
