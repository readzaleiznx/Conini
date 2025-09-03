/*
let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `*☁️ El bot principal no se puede apagar.*`, m, )
else {
await conn.reply(m.chat, `*El Subbot fue desactivado exitosamente*`, m)
conn.ws.close()
}}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['serbot'];
handler.owner = true
handler.private = true
//handler.register = true
export default handler*/

let handler = async (m, { conn }) => {
  try {
    if (global.conn?.user?.jid === conn.user.jid) {
      return conn.reply(m.chat, '*☁️ El bot principal no se puede apagar.*', m)
    }
    await conn.reply(m.chat, '*🛑 El Subbot fue desactivado exitosamente.*', m)

    setTimeout(() => {
      try {
        conn.ws.close()
      } catch (e) {
        console.log('⚠️ Error al cerrar el subbot (probablemente ya estaba cerrado):', e.message)
      }
    }, 2000)

  } catch (err) {
    console.log('❌ Error inesperado en el comando stop/byebot:', err)
    await conn.reply(m.chat, '*✖️ Ocurrió un error al intentar apagar el Subbot.*', m)
  }
}

handler.command = handler.help = ['stop', 'byebot']
handler.tags = ['serbot']
handler.owner = true

export default handler