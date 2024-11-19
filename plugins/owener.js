const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "owener",

    desc: "To get the bot informations.",

    react: "💫",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*💗MANISHA-MD OWENER💗*


*🔰whatsapp group Link:* https://chat.whatsapp.com/IEEUnyvlnCqDeuFw1DEsWk

*❤️‍🔥Contact Bot Owner:* 0759934522

*💖©ᴍᴀɴɪꜱʜᴀ-ᴍᴅ ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ*`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/tjhxsh.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
