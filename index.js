/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT WA_CHATBOT
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YG MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* Javzlyn
* BOLEH UBAH TAPI KECUALI INFO!!!
*/
const aku = 'Javzlyn'; // JANGAN UBAH-UBAH INFO!!!
const botname = 'Javzlyn_chatbot'; // JANGAN UBAH-UBAH INFO!!!
const instagram = 'https://instagram.com/febri_swag12'; // JANGAN UBAH-UBAH INFO!!!
const nomer = 'Wa.me/+6281223461910'; // JANGAN UBAH-UBAH INFO!!!
const aktif = 'Tergantung jaringan'; // JANGAN UBAH-UBAH INFO!!!
const groupwhatsapp = 'https://chat.whatsapp.com/Ga1kIzOXYclCkobFuIg7sJ'; // JANGAN UBAH-UBAH INFO!!!
const youtube = 'https://youtube.com/channel/UCVsWylgplnE294DRojNuXSw'; // JANGAN UBAH-UBAH INFO!!!
//Javzlyn
const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const msgHandler = require('./msgHndlr')
const options = require('./options')

const start = async (client = new Client()) => {
        console.log('[SERVER] Server Started!')
        // Force it to keep the current session
        client.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
        })
        // listening on message
        client.onMessage((async (message) => {
            client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                    client.cutMsgCache()
                }
            })
            msgHandler(client, message)
        }))

        client.onGlobalParicipantsChanged((async (heuh) => {
            await welcome(client, heuh)
            //left(client, heuh)
            }))
        
        client.onAddedToGroup(((chat) => {
            let totalMem = chat.groupMetadata.participants.length
            if (totalMem < 30) { 
            	client.sendText(chat.id, `Cih member nya cuma ${totalMem}, Kalo mau invite bot, minimal jumlah mem ada 30`).then(() => client.leaveGroup(chat.id)).then(() => client.deleteChat(chat.id))
            } else {
                client.sendText(chat.groupMetadata.id, `Halo warga grup *${chat.contact.name}* terimakasih sudah menginvite bot ini, untuk melihat menu silahkan kirim *!help*`)
            }
        }))

        /*client.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) client.sendSeen(to)
        }))*/

        // listening on Incoming Call
        client.onIncomingCall(( async (call) => {
            await client.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!')
            .then(() => client.contactBlock(call.peerJid))
        }))
    }

create(options(true, start))
    .then(client => start(client))
    .catch((error) => console.log(error))
