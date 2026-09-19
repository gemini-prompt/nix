const ping = async (m) => {
  const start = Date.now();
  await m.reply('*جاري القياس...*');
  const end = Date.now();
  await m.reply(`*🏓 بينج*\n\nالسرعة: *${end - start}ms*\n_نيكس بوت_`);
};

ping.command = ["ping", "بنج", "سرعة"];
ping.category = "info";
export default ping;
