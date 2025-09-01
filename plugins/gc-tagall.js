const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `> ✨𝐁𝐞𝐜𝐚𝐮𝐬𝐞 𝐓𝐨𝐦𝐨𝐫𝐫𝐨𝐰 ☀𝐖𝐢𝐥𝐥 𝐁𝐞 𝐍𝐢𝐜𝐞 ❤️\n\n *${oi}\n\n➥ _*LISTA DE INTEGRANTES ❤️*_\n`;
  for (const mem of participants) {
    teks += `*❤️‍🔥 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└MuñecaBᴏᴛ⇝@j.victoriaa.26*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;