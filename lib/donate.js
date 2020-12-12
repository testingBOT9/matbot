exports.donate = (id, botname, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube, aku) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${BotName}*
╠════════════════════
║├≽️⚜ *OVO*: _0895-2466-4142_
║├≽️⚜ *PULSA*: _0895-2466-4142_
║├≽️⚜ *GOPAY*: _0895-2466-4142_
╠════════════════════
║  *${A187}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${BotName}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY ${Aku}*_
╚════════════════════`
}

