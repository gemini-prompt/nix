const { bot } = require('../lib/pluginLoader');
const { makeContext } = require('../nix/adapter');

bot({
  command: ["twitter", "x", "تويتر"],
  description: 'Gaff-Nix command',
  category: 'gaff-nix',
}, async (sock, chatId, message) => {
  try {
    const mod = await import('../nix/plugins/twitter.js');
    const fn = mod.default;
    if (typeof fn !== 'function') return;
    const { m, ctx } = await makeContext(sock, chatId, message);

    const meta = fn;
    if (meta.owner && !ctx.isOwner) return m.reply('*⛔ هاد الأمر غير للمطور*');
    if (meta.group && !m.isGroup) return m.reply('*👥 هاد الأمر كايخدم غير فالقروبات*');
    if (meta.admin && !ctx.isAdmin) return m.reply('*⛔ خاصك تكون أدمن باش تستعمل هاد الأمر*');
    if (meta.botAdmin && !ctx.isBotAdmin) return m.reply('*⛔ خاصني نكون أدمن فالقروب باش نخدم هاد الأمر*');

    await fn(m, ctx);
  } catch (e) {
    console.error('[Gaff-Nix] twitter.js:', e);
    try { await sock.sendMessage(chatId, { text: '*❌ وقع مشكل فالأمر، جرب من بعد*' }, { quoted: message }); } catch {}
  }
});
