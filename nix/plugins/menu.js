const menu = async (m, { prefix }) => {
  const name = m.pushName || "حبيب";
  const time = new Date().toLocaleTimeString("ar-MA", { hour: "2-digit", minute: "2-digit" });

  const teks = `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃     *نيكس بوت*     
┃    النسخة المتقدمة
┗━━━━━━━━━━━━━━━━━━━━━┛

مرحبا *${name}* 👋
الساعة دابا: *${time}*

╭─❖ *الذكاء الاصطناعي* 🤖
│ ✦ ${prefix}gpt
│ ✦ ${prefix}botai
│ ✦ ${prefix}tts
│ ✦ ${prefix}صوت
│ ✦ ${prefix}translate
│ ✦ ${prefix}tr
│ ✦ ${prefix}remini
│ ✦ ${prefix}hd
╰─────────────────────

╭─❖ *الأدوات* 🛠️
│ ✦ ${prefix}vv
│ ✦ ${prefix}autovv
│ ✦ ${prefix}sticker
│ ✦ ${prefix}s
│ ✦ ${prefix}toimg
│ ✦ ${prefix}tomp3
│ ✦ ${prefix}afk
╰─────────────────────

╭─❖ *إدارة القروب* 👥
│ ✦ ${prefix}tagall
│ ✦ ${prefix}hidetag
│ ✦ ${prefix}kick
│ ✦ ${prefix}promote
│ ✦ ${prefix}demote
│ ✦ ${prefix}warn
│ ✦ ${prefix}antilink
│ ✦ ${prefix}poll
╰─────────────────────

╭─❖ *التحميل* 📥
│ ✦ ${prefix}yt
│ ✦ ${prefix}play
│ ✦ ${prefix}tiktok
│ ✦ ${prefix}ig
│ ✦ ${prefix}fb
│ ✦ ${prefix}twitter
╰─────────────────────

╭─❖ *المطور فقط* ⚙️
│ ✦ ${prefix}ghost
│ ✦ ${prefix}autostatus
│ ✦ ${prefix}antidelete
│ ✦ ${prefix}broadcast
│ ✦ ${prefix}restart
│ ✦ ${prefix}ping
╰─────────────────────

┏━━━━━━━━━━━━━━━━━━━━━┓
┃   استعمل الأوامر بالعقل
┃     نيكس بوت • 2026
┗━━━━━━━━━━━━━━━━━━━━━┛
`;

  await m.reply(teks);
};

menu.command = ["menu", "القائمة", "اوامر", "الأوامر", "help", "مساعدة", "م"];
menu.category = "info";
export default menu;
