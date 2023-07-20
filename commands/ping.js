const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Ping!!!```🎩ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ🎩'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '*Pong*\n\n🎩ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ🎩\n *' + (final - inital) + ' ms* ', edit: key});
    }
);
