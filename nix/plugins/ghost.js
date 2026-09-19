const ghost = async (m, { args }) => {
  const action = (args[0] || '').toLowerCase();

  if (!['on', 'off', 'شغل', 'طفي'].includes(action)) {
    const status = global.botSettings?.ghostMode ? '🟢 شغال' : '🔴 مطفي';
    return m.reply(`*👻 وضع الشبح (Ghost Mode)*\n\nالحالة: ${status}\n\n• .ghost on ← قراءة بدون صح أزرق\n• .ghost off`);
  }

  if (['on', 'شغل'].includes(action)) {
    global.botSettings.ghostMode = true;
    return m.reply('*✅ تم تشغيل وضع الشبح*\nدابا الرسائل كتقرا بدون ما يبان الصح الأزرق');
  }

  global.botSettings.ghostMode = false;
  return m.reply('*🛑 تم إيقاف وضع الشبح*');
};

ghost.command = ["ghost", "شبح", "ghostmode"];
ghost.category = "owner";
ghost.owner = true;
export default ghost;
