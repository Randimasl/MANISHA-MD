const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "🙍‍♀️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*🧍NADEEN-MD Support🧍*

*💓Whatsapp Channel Link:* 

*💗Contact Bot Owner:* 0759934522

*©ᴍᴀɴɪꜱʜᴀ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`

return await conn.sendMessage(from,{image: {url:`https://i.imgur.com/rRdKMrE.png`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
