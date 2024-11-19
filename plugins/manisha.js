const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "manisha-md",

    desc: "To get the bot informations.",

    react: "🧑‍🔧",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*💗telegram bot owner:* https://t.me/manisha_sasmitha

*💗Contact Bot Owner:* https://wa.me/94759934522

*©ᴍᴀɴɪꜱʜᴀ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ*`

return await conn.sendMessage(from,{image: {url:`https://i.imgur.com/rRdKMrE.png`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
