const Discord = require('discord.js');
const bot = new Discord.Client();

//bot.setGame('!help for list of commands');
bot.on('ready', () => {
    bot.user.setGame("!help for commands");
});

bot.on('message', function(message) {
    var s = message.content;

    if(message.content == 'sorebird'){
        message.channel.sendMessage('chirp');
    }else if (String(s).match(/ludicat.*/)) {
        message.channel.sendMessage('AGGRESSIVE CHIRPING');
    }else if (String(s).match(/rhyrhy.*/)) {
        message.channel.sendMessage('*blushu dies*');
    }else if(message.content == '!sivangry'){
        message.channel.sendMessage('chirp');
    }else if(message.content == '!sivhmm'){
        message.channel.sendFile('https://orig00.deviantart.net/b912/f/2017/273/1/d/siv4_by_sorebird-dbp2cq5.png');
    }else if(message.content == '!sivshock'){
        message.channel.sendFile('https://orig00.deviantart.net/3a8c/f/2017/273/c/6/siv6_by_sorebird-dbp299o.png');
    }else if(message.content == '!thwump'){
        message.channel.sendFile('https://gbf.wiki/images/5/57/Stamp122.png');
    }else if(message.content == '!help'){
        message.channel.sendMessage('```Currently available commands:\n\nGBF emotes:\n!thwump, !heyo, !siero, !pffft, !machovee, !huh, !hi, !heregoes, !hurray, !awesome, !obliged, !goodwork, !thanks, !giveup, !drool, !gratz, !crushed, !nice, !zzz, !???, !wobble, !bop, !please, !sup, !nope, !untz, !bebopboo, !tehe, !jkpls, !cutielicious, !wiggle, !letmehelp, !ok, !aww, !yummy, !noo, !itson, !done, !hmph !stopplz, !phalanx, !what, !fail, !sigh, !qt, !canihelp, !chomp, !salute, !humph, !followme, !neversurrender, !thanksforwaiting, !aye, !notgood, !letsgo, !wink, !bully, !meow, !bam, !gong, !yikes, !calmdown, !sara, !cry !rainbow, !scamgacha, !clarisse, !shock, !creep, !despair, !rackam, !rackaam, !rackaaam, !rackaaaam, !legendofrackam, !soiya1, !soiya2, !soiya3' +
                                        '\n\nOther emotes:\n!sivangry, !sivhmm, !sivshock```');
    }else if (String(s).match(/kissu.*/)) {
        message.channel.sendFile('https://stickershop.line-scdn.net/stickershop/v1/sticker/15670572/android/sticker.png');
    }else if (String(s).match(/sorebird is annoying.*/)) {
    message.channel.sendFile('https://stickershop.line-scdn.net/stickershop/v1/sticker/4801391/android/sticker.png');
    }else if(message.content == '!heyo'){
        message.channel.sendFile('https://gbf.wiki/images/9/9f/Stamp110.png');
    }else if(message.content == '!siero'){
        message.channel.sendFile('https://gbf.wiki/images/0/0a/Stamp102.png');
    }else if(message.content == '!pffft'){
        message.channel.sendFile('https://gbf.wiki/images/f/fc/Stamp103.png');
    }else if(message.content == '!machovee'){
        message.channel.sendFile('https://gbf.wiki/images/0/0e/Stamp88.png');
    }else if(message.content == '!huh'){
        message.channel.sendFile('https://gbf.wiki/images/9/9c/Stamp43.png');
    }else if(message.content == '!hi'){
        message.channel.sendFile('https://gbf.wiki/images/4/4d/Stamp41.png');
    }else if(message.content == '!heregoes'){
        message.channel.sendFile('https://gbf.wiki/images/7/78/Stamp1.png');
    }else if(message.content == '!hurray'){
        message.channel.sendFile('https://gbf.wiki/images/d/dc/Stamp2.png');
    }else if(message.content == '!awesome'){
        message.channel.sendFile('https://gbf.wiki/images/2/2f/Stamp3.png');
    }else if(message.content == '!obliged'){
        message.channel.sendFile('https://gbf.wiki/images/8/8a/Stamp4.png');
    }else if(message.content == '!reportingin'){
        message.channel.sendFile('https://gbf.wiki/images/a/a6/Stamp5.png');
    }else if(message.content == '!goodwork'){
        message.channel.sendFile('https://gbf.wiki/images/7/7c/Stamp10.png');
    }else if(message.content == '!thanks'){
        message.channel.sendFile('https://gbf.wiki/images/0/0b/Stamp9.png');
    }else if(message.content == '!giveup'){
        message.channel.sendFile('https://gbf.wiki/images/2/28/Stamp11.png');
    }else if(message.content == '!crushed'){
        message.channel.sendFile('https://gbf.wiki/images/d/d0/Stamp21.png');
    }else if(message.content == '!drool'){
        message.channel.sendFile('https://gbf.wiki/images/4/44/Stamp40.png');
    }else if(message.content == '!gratz'){
        message.channel.sendFile('https://gbf.wiki/images/9/94/Stamp42.png');
    }else if(message.content == '!nice'){
        message.channel.sendFile('https://gbf.wiki/images/b/bf/Stamp78.png');
    }else if(message.content == '!zzz'){
        message.channel.sendFile('https://gbf.wiki/images/7/7c/Stamp79.png');
    }else if(message.content == '!wobble'){
        message.channel.sendFile('https://gbf.wiki/images/e/e4/Stamp90.png');
    }else if(message.content == '!please'){
        message.channel.sendFile('https://gbf.wiki/images/e/e5/Stamp97.png');
    }else if(message.content == '!bop'){
        message.channel.sendFile('https://gbf.wiki/images/2/2f/Stamp91.png');
    }else if(message.content == '!sup'){
        message.channel.sendFile('https://gbf.wiki/images/6/64/Stamp108.png');
    }else if(message.content == '!nope'){
        message.channel.sendFile('https://gbf.wiki/images/b/b3/Stamp109.png');
    }else if(message.content == '!wiggle'){
        message.channel.sendFile('https://gbf.wiki/images/6/65/Stamp105.png');
    }else if(message.content == '!rate10'){
        message.channel.sendFile('https://gbf.wiki/images/b/b0/Stamp115.png');
    }else if(message.content == '!???'){
        message.channel.sendFile('https://gbf.wiki/images/f/f1/Stamp117.png');
    }else if(message.content == '!untz'){
        message.channel.sendFile('https://gbf.wiki/images/a/a5/Stamp161.png');
    }else if(message.content == '!bebopboo'){
        message.channel.sendFile('https://gbf.wiki/images/f/fb/Stamp162.png');
    }else if(message.content == '!nicefight'){
        message.channel.sendFile('https://gbf.wiki/images/c/c4/Stamp141.png');
    }else if(message.content == '!slap'){
        message.channel.sendFile('https://gbf.wiki/images/3/36/Stamp112.png');
    }else if(message.content == '!jkpls'){
        message.channel.sendFile('https://orig00.deviantart.net/93d2/f/2017/273/3/2/21232022_1370649793030773_4452136225626623473_n_by_sorebird-dbp2iys.jpg');
    }else if(message.content == '!tehe'){
        message.channel.sendFile('https://gbf.wiki/images/0/08/Stamp142.png');
    }else if(message.content == '!cutielicious'){
        message.channel.sendFile('https://gbf.wiki/images/0/03/Stamp148.png');
    }else if(message.content == '!ok'){
        message.channel.sendFile('https://gbf.wiki/images/a/ab/Stamp44.png');
    }else if(message.content == '!letmehelp'){
        message.channel.sendFile('https://gbf.wiki/images/6/6c/Stamp46.png');
    }else if(message.content == '!aww'){
        message.channel.sendFile('https://gbf.wiki/images/f/f3/Stamp81.png');
    }else if(message.content == '!yummy'){
        message.channel.sendFile('https://gbf.wiki/images/0/0c/Stamp99.png');
    }else if(message.content == '!noo'){
        message.channel.sendFile('https://gbf.wiki/images/8/81/Stamp111.png');
    }else if(message.content == '!itson'){
        message.channel.sendFile('https://gbf.wiki/images/7/76/Stamp155.png');
    }else if(message.content == '!gogopowpow'){
        message.channel.sendFile('https://gbf.wiki/images/b/b6/Stamp154.png');
    }else if(message.content == '!hmph'){
        message.channel.sendFile('https://gbf.wiki/images/2/2b/Stamp157.png');
    }else if(message.content == '!done'){
        message.channel.sendFile('https://gbf.wiki/images/f/f7/Stamp120.png');
    }else if(message.content == '!what'){
        message.channel.sendFile('https://gbf.wiki/images/3/3a/Stamp118.png');
    }else if(message.content == '!fail'){
        message.channel.sendFile('https://gbf.wiki/images/8/8c/Stamp113.png');
    }else if(message.content == '!quiet'){
        message.channel.sendFile('https://gbf.wiki/images/1/1e/Stamp101.png');
    }else if(message.content == '!sigh'){
        message.channel.sendFile('https://gbf.wiki/images/7/73/Stamp63.png');
    }else if(message.content == '!qt'){
        message.channel.sendFile('https://gbf.wiki/images/b/bd/Stamp169.png');
    }else if(message.content == '!canihelp'){
        message.channel.sendFile('https://gbf.wiki/images/d/dd/Stamp64.png');
    }else if(message.content == '!chomp'){
        message.channel.sendFile('https://gbf.wiki/images/0/05/Stamp123.png');
    }else if(message.content == '!ouch'){
        message.channel.sendFile('https://gbf.wiki/images/f/f7/Stamp52.png');
    }else if(message.content == '!whoa'){
        message.channel.sendFile('https://gbf.wiki/images/c/c8/Stamp57.png');
    }else if(message.content == '!salute'){
        message.channel.sendFile('https://gbf.wiki/images/0/0c/Stamp61.png');
    }else if(message.content == '!calmdown'){
        message.channel.sendFile('https://gbf.wiki/images/3/39/Stamp67.png');
    }else if(message.content == '!yikes'){
        message.channel.sendFile('https://gbf.wiki/images/a/af/Stamp73.png');
    }else if(message.content == '!humph'){
        message.channel.sendFile('https://gbf.wiki/images/3/3a/Stamp150.png');
    }else if(message.content == '!followme'){
        message.channel.sendFile('https://gbf.wiki/images/3/3e/Stamp170.png');
    }else if(message.content == '!neversurrender'){
        message.channel.sendFile('https://gbf.wiki/images/b/b1/Stamp151.png');
    }else if(message.content == '!aye'){
        message.channel.sendFile('https://gbf.wiki/images/d/d2/Stamp147.png');
    }else if(message.content == '!notgood'){
        message.channel.sendFile('https://gbf.wiki/images/5/52/Stamp146.png');
    }else if(message.content == '!thanksforwaiting'){
        message.channel.sendFile('https://gbf.wiki/images/6/6f/Stamp127.png');
    }else if(message.content == '!wink'){
        message.channel.sendFile('https://gbf.wiki/images/c/cd/Stamp94.png');
    }else if(message.content == '!letsgo'){
        message.channel.sendFile('https://gbf.wiki/images/2/29/Stamp75.png');
    }else if(message.content == '!bam'){
        message.channel.sendFile('https://gbf.wiki/images/6/60/Stamp55.png');
    }else if(message.content == '!confused'){
        message.channel.sendFile('https://gbf.wiki/images/8/88/Stamp51.png');
    }else if(message.content == '!bully'){
        message.channel.sendFile('https://gbf.wiki/images/7/7a/Stamp74.png');
    }else if(message.content == '!meow'){
        message.channel.sendFile('https://gbf.wiki/images/3/32/Stamp93.png');
    }else if(message.content == '!gong'){
        message.channel.sendFile('https://gbf.wiki/images/9/98/Stamp60.png');
    }else if(message.content == '!stopplz'){
        message.channel.sendFile('https://gbf.wiki/images/a/aa/Stamp70.png');
    }else if(message.content == '!phalanx'){
        message.channel.sendFile('https://gbf.wiki/images/5/57/Stamp19.png');
    }else if(message.content == '!clarisse'){
        message.channel.sendFile('https://orig00.deviantart.net/1326/f/2017/274/3/0/claris_by_sorebird-dbp6a2i.png');
    }else if(message.content == '!creep'){
        message.channel.sendFile('https://orig00.deviantart.net/3910/f/2017/274/5/e/creep_by_sorebird-dbp6a2e.png');
    }else if(message.content == '!cry'){
        message.channel.sendFile('https://orig00.deviantart.net/0627/f/2017/274/2/e/cry_by_sorebird-dbp6a29.png');
    }else if(message.content == '!despair'){
        message.channel.sendFile('https://orig00.deviantart.net/959a/f/2017/274/3/d/despair_by_sorebird-dbp6a27.png');
    }else if(message.content == '!shock'){
        message.channel.sendFile('https://orig00.deviantart.net/9543/f/2017/274/d/a/shock_by_sorebird-dbp6a13.png');
    }else if(message.content == '!rainbow'){
        message.channel.sendFile('https://orig00.deviantart.net/fcf5/f/2017/274/3/b/rainbow_by_sorebird-dbp6a1o.png');
    }else if(message.content == '!scamgacha'){
        message.channel.sendFile('https://orig00.deviantart.net/5fa3/f/2017/274/8/2/rip_by_sorebird-dbp6a1f.png');
    }else if(message.content == '!sara'){
        message.channel.sendFile('https://orig00.deviantart.net/8e66/f/2017/274/9/4/sara_by_sorebird-dbp6a16.png');
    }else if(message.content == '!rackam'){
        message.channel.sendFile('https://gbf.wiki/images/4/45/Stamp32.png');
    }else if(message.content == '!rackaam'){
        message.channel.sendFile('https://gbf.wiki/images/a/a1/Stamp33.png');
    }else if(message.content == '!rackaaam'){
        message.channel.sendFile('https://gbf.wiki/images/2/26/Stamp34.png');
    }else if(message.content == '!rackaaaam'){
        message.channel.sendFile('https://gbf.wiki/images/8/8e/Stamp35.png');
    }else if(message.content == '!legendofrackam'){
        message.channel.sendFile('https://gbf.wiki/images/4/4f/Stamp36.png');
    }else if(message.content == '!luvya'){
        message.channel.sendFile('https://gbf.wiki/images/2/22/Stamp158.png');
    }else if(message.content == '!soiya1'){
        message.channel.sendFile('https://gbf.wiki/images/2/26/Stamp13.png');
    }else if(message.content == '!soiya2'){
        message.channel.sendFile('https://gbf.wiki/images/6/6c/Stamp14.png');
    }else if(message.content == '!soiya3'){
        message.channel.sendFile('https://gbf.wiki/images/a/a4/Stamp15.png');
    }
});

bot.login('MzYzNzk0MDU3MjI0Mzg4NjA4.DLGcww.SpYgjM2YtVISdxCEv_fKULI4Ow4');
