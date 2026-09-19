const autovv = async (m, { conn, args }) => {
  const action = (args[0] || '').toLowerCase();

  if (!action || !['on', 'off', 'شغل', 'طفي', 'تفعيل', 'إيقاف'].includes(action)) {
    const status = global.botSettings?.autoVV ? '🟢 شغال' : '🔴 مطفي';
    return m.reply(`*⚙️ إعدادات الاستخراج التلقائي (AutoVV)*\n\nالحالة الحالية: ${status}\n\n*الاستخدام:*\n• .autovv on  ← تشغيل\n• .autovv off ← إيقاف`);
  }

  if (['on', 'شغل', 'تفعيل'].includes(action)) {
    global.botSettings.autoVV = true;
    return m.reply(`*✅ تم تشغيل الاستخراج التلقائي*\n\nدابا أي رسالة عرض مرة واحدة غادي تطلع لوحدها بدون ما تكتب والو`);
  }

  if (['off', 'طفي', 'إيقاف'].includes(action)) {
    global.botSettings.autoVV = false;
    return m.reply(`*🛑 تم إيقاف الاستخراج التلقائي*`);
  }
};

autovv.command = ["autovv", "اوتوڤي", "تلقائي"];
autovv.category = "tools";
autovv.owner = true;
autovv.description = "تشغيل/إيقاف استخراج View Once تلقائياً";

export default autovv;
