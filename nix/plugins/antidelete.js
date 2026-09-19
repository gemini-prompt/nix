const antidelete = async (m, { args }) => {
  const action = (args[0] || '').toLowerCase();

  if (!['on', 'off', 'شغل', 'طفي'].includes(action)) {
    const status = global.botSettings?.antiDelete ? '🟢 شغال' : '🔴 مطفي';
    return m.reply(`*🗑️ استرجاع الرسائل المحذوفة*\n\nالحالة: ${status}\n\n• .antidelete on\n• .antidelete off`);
  }

  if (['on', 'شغل'].includes(action)) {
    global.botSettings.antiDelete = true;
    return m.reply('*✅ تم تشغيل استرجاع المحذوف*\nأي رسالة تتحذف غادي ترجع');
  }

  global.botSettings.antiDelete = false;
  return m.reply('*🛑 تم إيقاف استرجاع المحذوف*');
};

antidelete.command = ["antidelete", "استرجاع", "محذوف"];
antidelete.category = "tools";
antidelete.owner = true;
export default antidelete;
