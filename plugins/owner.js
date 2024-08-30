import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212624855939
*instagram:*\nhttps://instagram.com/hamza___boyka_

*WhatsApp :*\nhttps://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X

*facebook page:*\https://www.facebook.com/reel/816227530665152/

*script bot :* github.com/hamzaamirni1

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
