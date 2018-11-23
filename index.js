const Discord = require('discord.js');
const bot = new Discord.Client();

//bot.setGame('!help for list of commands');
bot.on('ready', () => {
   bot.user.setGame("!help for commands ovo");
});

bot.on('message', function(message) {
    var s = message.content;
    var n = bot.user.username;
    if(message.content == 'Sorebird'){
        message.channel.sendMessage('chirp');
    }else if (String(s).match(/ludicat.*/)) {
        message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/394191656750022657/angrybirb.png');
    }else if(message.content == '!sivangry'){
        message.channel.sendMessage('chirp');
    }else if(message.content == '!sivhmm'){
        message.channel.sendFile('https://orig00.deviantart.net/b912/f/2017/273/1/d/siv4_by_sorebird-dbp2cq5.png');
    }else if(message.content == '!sivshock'){
        message.channel.sendFile('https://orig00.deviantart.net/3a8c/f/2017/273/c/6/siv6_by_sorebird-dbp299o.png');
    }else if(message.content == '!thwump'){
        message.channel.sendFile('https://gbf.wiki/images/5/57/Stamp122.png');
    }else if(message.content == '!help'){
        message.channel.sendMessage('** Currently available commands listed here: https://sta.sh/0k9j1w8rivp **');
    }else if(message.content == '$help'){
        message.channel.sendMessage('** Currently available GE commands listed here: https://sta.sh/01n1i5pzlsvx **');
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
        message.channel.sendFile('https://gbf.wiki/images/2/2b/Stamp8.png');
    }else if(message.content == '!striketime'){
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
        message.channel.sendFile('https://orig00.deviantart.net/5ce0/f/2017/274/7/4/rose_by_sorebird-dbp6a1b.png');
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
    }else if(message.content == '!letmeleech'){
        message.channel.sendFile('https://orig00.deviantart.net/e39d/f/2017/303/9/a/1502383454766_by_sorebird-dbs7e4m.jpg');
    }else if(message.content == '!inhale'){
        message.channel.sendFile('https://orig00.deviantart.net/ecdb/f/2017/303/3/e/unknown__1__by_sorebird-dbs7e5c.png');
    }else if(message.content == '!pleaseunderstand'){
        message.channel.sendFile('https://orig00.deviantart.net/9af1/f/2017/303/4/f/21765287_2046948135524724_7776885265799821966_n_by_sorebird-dbs7e4d.jpg');
    }else if(message.content == '!vyrnpunch'){
        message.channel.sendFile('https://orig00.deviantart.net/f8ca/f/2017/303/a/0/1509314225183_by_sorebird-dbs7e4h.jpg');
    }else if(message.content == '!dealwithit'){
        message.channel.sendFile('https://orig00.deviantart.net/611d/f/2017/303/e/0/unknown_by_sorebird-dbs7e4t.png');
    }else if(message.content == '!growpls'){
        message.channel.sendFile('https://orig00.deviantart.net/9442/f/2017/303/0/e/1_by_sorebird-dbs7i95.png');
    }else if(message.content == '!coughsblood'){
        message.channel.sendFile('https://orig00.deviantart.net/e4ad/f/2017/303/2/4/1502839806670_by_sorebird-dbs7i90.jpg');
    }else if(message.content == '!virahuh'){
        message.channel.sendFile('https://orig00.deviantart.net/3ccd/f/2017/303/5/c/7ts3sus_by_sorebird-dbs7e46.png');
	}else if(message.content == '!smile'){
        message.channel.sendFile('https://gbf.wiki/images/9/9e/Stamp171.png');
	}else if(message.content == '!yipyuel'){
        message.channel.sendFile('https://gbf.wiki/images/7/75/Stamp178.png');
	}else if(message.content == '!yipsocie'){
        message.channel.sendFile('https://gbf.wiki/images/d/d3/Stamp177.png');
	}else if(message.content == '!yugu'){
        message.channel.sendFile('https://gbf.wiki/images/3/3f/Stamp180.png');
	}else if(message.content == '!emolily'){
        message.channel.sendFile('https://orig00.deviantart.net/963d/f/2017/306/c/e/lily_by_sorebird-dbsi9wd.png');
	}else if(message.content == '!whee'){
        message.channel.sendFile('https://gbf.wiki/images/b/b6/Stamp128.png');
	}else if(message.content == '!ouch'){
        message.channel.sendFile('https://gbf.wiki/images/f/f7/Stamp52.png');
	}else if(message.content == '!jk'){
        message.channel.sendFile('https://gbf.wiki/images/4/4c/Stamp49.png');
	}else if(message.content == '!sturm?'){
        message.channel.sendFile('https://gbf.wiki/images/8/88/Stamp51.png');
	}else if(message.content == '!hereigo'){
        message.channel.sendFile('https://gbf.wiki/images/8/8a/Stamp124.png');
	}else if(message.content == '!nextst'){
        message.channel.sendMessage('chirp');
	}else if(message.content == '!jsttime'){
        message.channel.sendMessage('chirp');
	}else if(message.content == '!dickpick'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/364174595961389086/394245200249225236/23517475_1983184115304469_1305680920232120631_n.jpg');
	}else if(message.content == '!notsiete'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/364174595961389086/394245024872660993/23172379_262413200948763_6449796456933969007_n.jpg');
	}else if(message.content == '!tears'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/364174595961389086/393014867046563840/unknown.png');
	}else if(message.content == '!scaredludi'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/394199526401114124/scaredludi.png');
	}else if(message.content == '!dedrhyrhy'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/394208686576500747/dedrhyrhy.png');
	}else if(message.content == '!happysiv'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/394191735154147359/happysiv.png');
	}else if(message.content == '!angrybirb'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/394191656750022657/angrybirb.png');
	}else if(message.content == '!wheeze'){
        message.channel.sendFile('https://orig00.deviantart.net/bf68/f/2017/357/9/0/1513905101046_by_sorebird-dbxm5r9.jpg');
	}else if(message.content == '!ripbea'){
        message.channel.sendFile('https://orig00.deviantart.net/357c/f/2017/357/3/0/bea_by_sorebird-dbxm5tn.png');
	}else if(message.content == '!kaguya'){
        message.channel.sendFile('https://orig00.deviantart.net/df58/f/2017/357/a/0/kaguya_by_sorebird-dbxm5te.png');
	}else if(message.content == '!vyrnjade'){
        message.channel.sendFile('https://orig00.deviantart.net/e265/f/2017/357/a/9/1513976541393_by_sorebird-dbxm5ze.png');
	}else if(message.content == '!zeta'){
        message.channel.sendFile('https://orig00.deviantart.net/c069/f/2017/357/8/7/1512514569871_by_sorebird-dbxm5z0.jpg');
	}else if(message.content == '!poutvina' || message.content == '!vinapout'){
        message.channel.sendFile('https://cdn.discordapp.com/attachments/363815644682256384/394251646299013120/poutvina.png');
	}else if(message.content == '!salty'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/364174595961389086/393395814820478978/image.png');
	}else if(message.content == '!srszooey'){
	message.channel.sendFile('https://images-ext-2.discordapp.net/external/z2M17FmnsJwTJoVzVpadon43J0eqywIr42lfyLzoaGQ/https/gbf.wiki/images/9/96/Stamp194.png');
	}else if(message.content == '!amazing'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/364174595961389086/402771737378553876/Screen_Shot_2018-01-16_at_9.30.41_pm.png');
	}else if(message.content == '!happy'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/364174595961389086/399139045063655424/Screenshot_20180106-095530.jpg');
	}else if(message.content == '!silvano'){
	message.channel.sendFile('https://orig00.deviantart.net/d2cd/f/2018/024/9/d/silvano_by_sorebird-dc115cb.jpg');
	}else if(message.content == '!katdespair'){
	message.channel.sendFile('https://orig00.deviantart.net/d61f/f/2018/024/7/1/katdespair_by_sorebird-dc115cq.png');
	}else if(message.content == '!smuggran'){
	message.channel.sendFile('https://orig00.deviantart.net/21b4/f/2018/024/0/9/1516816715885_by_sorebird-dc115lx.jpg');
	}else if(message.content == '!djeanne'){
	message.channel.sendFile('https://orig00.deviantart.net/1d72/f/2018/027/3/8/djeanne_by_sorebird-dc1axb3.png');
	}else if(message.content == '!pholia'){
	message.channel.sendFile('https://orig00.deviantart.net/e456/f/2018/027/1/f/pholia_by_sorebird-dc1axay.png');
	}else if(message.content == '!djyes'){
	message.channel.sendFile('https://orig00.deviantart.net/8e44/f/2018/027/8/d/djyes_by_sorebird-dc1axat.png');
	}else if(message.content == '!nio'){
	message.channel.sendFile('https://orig00.deviantart.net/73ee/f/2018/027/2/c/naniong_by_sorebird-dc1axap.png');
	}else if(message.content == '!whylive'){
	message.channel.sendFile('https://orig00.deviantart.net/7962/f/2018/027/1/2/whylive_by_sorebird-dc1axaa.png');
	}else if(message.content == '!silva'){
	message.channel.sendFile('https://orig00.deviantart.net/40fb/f/2018/027/2/1/silva_by_sorebird-dc1axak.png');
	}else if(message.content == '!huhsong'){
	message.channel.sendFile('https://orig00.deviantart.net/2508/f/2018/027/c/6/ehsong_by_sorebird-dc1axbv.png');
	}else if(message.content == '!huhzoi'){
	message.channel.sendFile('https://orig00.deviantart.net/0af2/f/2018/027/1/7/ehzoi_by_sorebird-dc1axbo.png');
	}else if(message.content == '!sip'){
	message.channel.sendFile('https://orig00.deviantart.net/8ad2/f/2018/027/1/5/sip_by_sorebird-dc1axb5.png');
	}else if(message.content == '!ferry'){
	message.channel.sendFile('https://orig00.deviantart.net/2204/f/2018/027/e/9/ohhh_by_sorebird-dc1axaf.png');
	}else if(message.content == '!percy'){
	message.channel.sendFile('https://orig00.deviantart.net/59ce/f/2018/027/d/e/percy_sexy_by_sorebird-dc1axc2.png');
	}else if(message.content == '!seox'){
	message.channel.sendFile('https://orig00.deviantart.net/7155/f/2018/027/8/2/seox_by_sorebird-dc1aydo.jpg');
	}else if(message.content == '!vermeil'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407541786383351808/Clipboard14.png');
	}else if(message.content == '!tomtom'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407535476942176257/Clipboard13.png');
	}else if(message.content == '!walder'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407532758962012170/unknown.png');
	}else if(message.content == '!lancey'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407533337205538826/Clipboard11.png');
	}else if(message.content == '!ayer'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407531439442100234/unknown.png');
	}else if(message.content == '!meditate'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407527522637447170/unknown.png');
	}else if(message.content == '!katrun'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407525063366017024/Clipboard08.png');
	}else if(message.content == '!lunalu'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407524529011949569/unknown.png');
	}else if(message.content == '!byesong'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407524816661250050/unknown.png');
	}else if(message.content == '!wth'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407523189799780372/Clipboard06.png');
	}else if(message.content == '!vyrnhug'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407520939505352714/Clipboard04.png');
	}else if(message.content == '!srslyria'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407517947293335552/Clipboard02.png');
	}else if(message.content == '!lucius'){
	message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407514152249196556/Clipboard01.png');
	}else if(message.content == '$ohplease'){
	message.channel.sendFile('https://orig00.deviantart.net/d250/f/2018/035/7/c/ohplease_by_sena_nightsaber-dc25j72.png');
	}else if(message.content == '$whotalksshitabtme'){
		message.channel.sendFile('https://orig00.deviantart.net/2594/f/2018/035/8/d/whotalksshitabtme_by_sena_nightsaber-dc25jfc.png');
	}else if(message.content == '$na-nani'){
		message.channel.sendFile('https://orig00.deviantart.net/de3b/f/2018/035/5/d/nani_by_sena_nightsaber-dc25jox.png');
	}else if(message.content == '$boi'){
		message.channel.sendFile('https://orig00.deviantart.net/fbf1/f/2018/035/b/0/boi_by_sena_nightsaber-dc25jw0.png');
	}else if(message.content == '$amyhmm'){
		message.channel.sendFile('https://orig00.deviantart.net/4e75/f/2018/035/2/f/amyhmm_by_sena_nightsaber-dc25k5y.png');
	}else if(message.content == '$saduncle'){
		message.channel.sendFile('https://orig00.deviantart.net/01fa/f/2018/035/2/6/sadcleavage_by_sena_nightsaber-dc25kee.png');
	}else if(message.content == '$beautiful'){
		message.channel.sendFile('https://orig00.deviantart.net/1d12/f/2018/035/4/0/beautiful_by_sena_nightsaber-dc25kub.png');
	}else if(message.content == '$ohmyvaleron'){
		message.channel.sendFile('https://orig00.deviantart.net/adb0/f/2018/035/8/d/ohmyvaleron_by_sena_nightsaber-dc25l10.png');
	}else if(message.content == '$anissmile'){
		message.channel.sendFile('https://orig00.deviantart.net/aaba/f/2018/035/1/e/anissmile_by_sena_nightsaber-dc25l1s.png');
	}else if(message.content == '$angryrepublicannoises'){
		message.channel.sendFile('https://orig00.deviantart.net/112f/f/2018/035/2/4/angryrepublicannoises_by_sena_nightsaber-dc25lg0.png');
	}else if(message.content == '$angrysimonnoises'){
		message.channel.sendFile('https://orig00.deviantart.net/112f/f/2018/035/2/4/angryrepublicannoises_by_sena_nightsaber-dc25lg0.png');
	}else if(message.content == '$hellopolice'){
		message.channel.sendFile('https://orig00.deviantart.net/43f2/f/2018/035/0/8/hellopolice_by_sena_nightsaber-dc25lp1.png');
	}else if(message.content == '$imdrunk'){
		message.channel.sendFile('https://orig00.deviantart.net/d001/f/2018/035/1/5/imdrunk_by_sena_nightsaber-dc25lx1.png');
	}else if(message.content == '$hotuncle4racie'){
		message.channel.sendFile('https://orig00.deviantart.net/a2d4/f/2018/035/0/8/hotuncle4racie_by_sena_nightsaber-dc25m1n.png');
	}else if(message.content == '$angryvero'){
		message.channel.sendFile('https://orig00.deviantart.net/1cbd/f/2018/035/e/f/angryvero_by_sena_nightsaber-dc25mc5.png');
	}else if(message.content == '$omg'){
		message.channel.sendFile('https://orig00.deviantart.net/fe83/f/2018/035/1/1/omg_by_sena_nightsaber-dc25mi6.png');
	}else if(message.content == '$judgingstare'){
	message.channel.sendFile('https://orig00.deviantart.net/50f1/f/2018/035/d/a/judgingstare_by_sena_nightsaber-dc25n0a.png');
	}else if(message.content == '$killingstare'){
		message.channel.sendFile('https://orig00.deviantart.net/c32f/f/2018/035/d/f/killingstare_by_sena_nightsaber-dc25nej.png');
	}else if(message.content == '$concernedstare'){
		message.channel.sendFile('https://orig00.deviantart.net/4b48/f/2018/035/5/7/concernedstare_by_sena_nightsaber-dc25ng3.png');
	}else if(message.content == '$fml'){
		message.channel.sendFile('https://orig00.deviantart.net/ae99/f/2018/035/e/0/fml_by_sena_nightsaber-dc25nhl.png');
	}else if(message.content == '$fml2'){
		message.channel.sendFile('https://orig00.deviantart.net/645b/f/2018/035/b/c/fml2_by_sena_nightsaber-dc25nyi.png');
	}else if(message.content == '$angrydaria'){
		message.channel.sendFile('https://orig00.deviantart.net/3f97/f/2018/035/2/2/angrydaria_by_sena_nightsaber-dc25o5o.png');
	}else if(message.content == '$youtalkshitabtme'){
		message.channel.sendFile('https://orig00.deviantart.net/6eb2/f/2018/035/d/f/youtalkshitabtme_by_sena_nightsaber-dc25opz.png');
	}else if(message.content == '$omg2'){
		message.channel.sendFile('https://orig00.deviantart.net/bfc9/f/2018/035/d/1/omg2_by_sena_nightsaber-dc25owj.png');
	}else if(message.content == '$dokidoki'){
		message.channel.sendFile('https://orig00.deviantart.net/ff3e/f/2018/035/7/7/dokidoki_by_sena_nightsaber-dc25p3y.png');
	}else if(message.content == '$excuseyou'){
		message.channel.sendFile('https://orig00.deviantart.net/6b12/f/2018/035/4/b/excuseyou_by_sena_nightsaber-dc25p8j.png');
	}else if(message.content == '$narhmm'){
		message.channel.sendFile('https://orig00.deviantart.net/8ce4/f/2018/035/5/8/narhmm_by_sena_nightsaber-dc25pme.png');
	}else if(message.content == '$nopedidnthearyou'){
		message.channel.sendFile('https://orig00.deviantart.net/0e42/f/2018/035/8/8/nopedidnthearyou_by_sena_nightsaber-dc25pxg.png');
	}else if(message.content == '$angryroyalistnoises'){
		message.channel.sendFile('https://orig00.deviantart.net/98fc/f/2018/035/5/3/angryroyalistnoises_by_sena_nightsaber-dc25q4x.png');
	}else if(message.content == '$angrygabnoises'){
		message.channel.sendFile('https://orig00.deviantart.net/98fc/f/2018/035/5/3/angryroyalistnoises_by_sena_nightsaber-dc25q4x.png');
	}else if(message.content == '$bernphoto'){
		message.channel.sendFile('https://orig00.deviantart.net/3ccc/f/2018/035/c/f/bernphoto_by_sena_nightsaber-dc25rd6.png');
	}else if(message.content == '$uwu'){
		message.channel.sendFile('https://orig00.deviantart.net/fdda/f/2018/035/1/5/uwu_by_sena_nightsaber-dc25ref.png');
	}else if(message.content == '$wantsomedrugs'){
		message.channel.sendFile('https://orig00.deviantart.net/6686/f/2018/035/9/6/wantsomedrugs_by_sena_nightsaber-dc25rfi.png');
	}else if(message.content == '$eww'){
		message.channel.sendFile('https://orig00.deviantart.net/3cce/f/2018/035/2/2/eww_by_sena_nightsaber-dc25rgx.png');
	}else if(message.content == '$fufufu'){
		message.channel.sendFile('https://orig00.deviantart.net/99b2/f/2018/035/b/f/fufufu_by_sena_nightsaber-dc25ri9.png');
	}else if(message.content == '$fufufu2'){
		message.channel.sendFile('https://orig00.deviantart.net/89d5/f/2018/035/9/4/fufufu2_by_sena_nightsaber-dc25riw.png');
	}else if(message.content == '$justnormalperson'){
		message.channel.sendFile('https://orig00.deviantart.net/60a3/f/2018/035/6/6/justnormalperson_by_sena_nightsaber-dc25rpt.png');
	}else if(message.content == '$verygood'){
		message.channel.sendFile('https://orig00.deviantart.net/d839/f/2018/035/b/a/verygood_by_sena_nightsaber-dc25ryo.png');
	}else if(message.content == '$agreed'){
		message.channel.sendFile('https://orig00.deviantart.net/d839/f/2018/035/b/a/verygood_by_sena_nightsaber-dc25ryo.png');
	}else if(message.content == '$joshuasmile'){
		message.channel.sendFile('https://orig00.deviantart.net/26f1/f/2018/035/b/4/joshuasmile_by_sena_nightsaber-dc25s5t.png');
	}else if(message.content == '$whatdoyoumeankpopsucks'){
		message.channel.sendFile('https://orig00.deviantart.net/0c3f/f/2018/035/1/e/whatdoyoumeankpopsucks_by_sena_nightsaber-dc25tf7.png');
	}else if(message.content == '$kylethediva'){
		message.channel.sendFile('https://orig00.deviantart.net/1f06/f/2018/035/8/b/kylethediva_by_sena_nightsaber-dc25tfz.png');
	}else if(message.content == '$lipglossendorser'){
		message.channel.sendFile('https://orig00.deviantart.net/431b/f/2018/035/d/7/lipglossendorser_by_sena_nightsaber-dc25th5.png');
	}else if(message.content == '$constipatedkyle'){
		message.channel.sendFile('https://orig00.deviantart.net/8e7c/f/2018/035/9/9/constipatedkyle_by_sena_nightsaber-dc25thm.png');
	}else if(message.content == '$lifelessstare'){
		message.channel.sendFile('https://orig00.deviantart.net/9d6f/f/2018/035/1/3/lifelessstare_by_sena_nightsaber-dc25u32.png');
	}else if(message.content == '$lmaoplebs'){
		message.channel.sendFile('https://orig00.deviantart.net/76a6/f/2018/035/6/1/lmaoplebs_by_sena_nightsaber-dc25vmu.png');
	}else if(message.content == '$lmaonoobs'){
		message.channel.sendFile('https://orig00.deviantart.net/76a6/f/2018/035/6/1/lmaoplebs_by_sena_nightsaber-dc25vmu.png');
	}else if(message.content == '$kesssmile'){
		message.channel.sendFile('https://orig00.deviantart.net/bf98/f/2018/035/7/5/kesssmile_by_sena_nightsaber-dc25vu8.png');
	}else if(message.content == '$lol'){
		message.channel.sendFile('https://orig00.deviantart.net/5ee7/f/2018/035/4/7/lol_by_sena_nightsaber-dc25w24.png');
	}else if(message.content == '$codenameleong'){
		message.channel.sendFile('https://orig00.deviantart.net/2cf8/f/2018/035/6/a/codenameleong_by_sena_nightsaber-dc260ox.png');
	}else if(message.content == '$thischickenisraw'){
		message.channel.sendFile('https://orig00.deviantart.net/dd91/f/2018/035/f/b/thischickenisraw_by_sena_nightsaber-dc2611o.png');
	}else if(message.content == '$bueno'){
		message.channel.sendFile('https://orig00.deviantart.net/06a6/f/2018/035/1/4/bueno_by_sena_nightsaber-dc261l4.png');
	}else if(message.content == '$killthemall'){
		message.channel.sendFile('https://orig00.deviantart.net/b4a9/f/2018/035/9/9/kill_by_sena_nightsaber-dc262ah.png');
	}else if(message.content == '$illstabyouinthebutt'){
		message.channel.sendFile('https://orig00.deviantart.net/d15a/f/2018/035/8/d/illstabyouinthebutt_by_sena_nightsaber-dc263iw.png');
	}else if(message.content == '$bitchslap'){
		message.channel.sendFile('https://orig00.deviantart.net/3673/f/2018/035/e/4/bitchslap_by_sena_nightsaber-dc26386.png');
	}else if(message.content == '$lordsunsilk'){
		message.channel.sendFile('https://orig00.deviantart.net/ca3d/f/2018/035/7/9/lordsunsilk_by_sena_nightsaber-dc263ki.png');
	}else if(message.content == '$siriushmm'){
		message.channel.sendFile('https://orig00.deviantart.net/f139/f/2018/035/8/8/siriushmm_by_sena_nightsaber-dc263zg.png');
	}else if(message.content == '$tch'){
		message.channel.sendFile('https://orig00.deviantart.net/28ef/f/2018/035/3/a/tch_by_sena_nightsaber-dc2649u.png');
	}else if(message.content == '$havemercy'){
		message.channel.sendFile('https://orig00.deviantart.net/e04f/f/2018/035/8/7/havemercy_by_sena_nightsaber-dc264lu.png');
	}else if(message.content == '$imsorry'){
		message.channel.sendFile('https://orig00.deviantart.net/2ced/f/2018/035/b/8/imsorry_by_sena_nightsaber-dc265rd.png');
	}else if(message.content == '!sorry'){
		message.channel.sendFile('https://orig00.deviantart.net/8798/f/2018/035/5/e/stamp17_by_sorebird-dc267jk.png');
	}else if(message.content == '!virathanks'){
		message.channel.sendFile('https://orig00.deviantart.net/4da8/f/2018/035/e/d/stamp186_by_sorebird-dc267j8.png');
	}else if(message.content == '!viragj'){
		message.channel.sendFile('https://orig00.deviantart.net/881f/f/2018/035/5/9/stamp187_by_sorebird-dc267ir.png');
	}else if(message.content == '!aidus'){
		message.channel.sendFile('https://orig00.deviantart.net/6e12/f/2018/035/f/6/stamp181_by_sorebird-dc267fh.png');
	}else if(message.content == '!thathurt'){
		message.channel.sendFile('https://orig00.deviantart.net/cb82/f/2018/035/a/c/stamp192_by_sorebird-dc267ha.png');
	}else if(message.content == '!stuffed'){
		message.channel.sendFile('https://orig00.deviantart.net/4dc8/f/2018/035/b/0/stamp176_by_sorebird-dc267g6.png');
	}else if(message.content == '!comeagain'){
		message.channel.sendFile('https://orig00.deviantart.net/5599/f/2018/035/d/5/stamp174_by_sorebird-dc267gh.png');
	}else if(message.content == '!djwelcome'){
		message.channel.sendFile('https://orig00.deviantart.net/944a/f/2018/035/a/6/stamp173_by_sorebird-dc267fv.png');
	}else if(message.content == '!viraok'){
		message.channel.sendFile('https://orig00.deviantart.net/803d/f/2018/035/d/4/stamp191_by_sorebird-dc267gq.png');
	}else if(message.content == '!viraphalanx'){
		message.channel.sendFile('https://orig00.deviantart.net/6fa6/f/2018/035/4/f/stamp189_by_sorebird-dc267hy.png');
	}else if(message.content == '!viradrool'){
		message.channel.sendFile('https://orig00.deviantart.net/0d38/f/2018/035/1/6/stamp190_by_sorebird-dc267gz.png');
	}else if(message.content == '!viraheaveho'){
		message.channel.sendFile('https://orig00.deviantart.net/f337/f/2018/035/2/1/stamp188_by_sorebird-dc267ii.png');
	}else if(message.content == '!virasup'){
		message.channel.sendFile('https://orig00.deviantart.net/9b76/f/2018/035/6/a/stamp193_by_sorebird-dc267hp.png');
	}else if(message.content == '$cry'){
		message.channel.sendFile('https://orig00.deviantart.net/1737/f/2018/036/c/9/cry_by_sena_nightsaber-dc29e7b.png');
	}else if(message.content == '$hug'){
		message.channel.sendFile('https://orig00.deviantart.net/60e4/f/2018/036/a/2/hug_by_sena_nightsaber-dc29ebp.png');
	}else if(message.content == '$ugu'){
		message.channel.sendFile('https://orig00.deviantart.net/0594/f/2018/036/0/6/ugu_by_sena_nightsaber-dc29eeb.png');
	}else if(message.content == '$angryludin'){
		message.channel.sendFile('https://orig00.deviantart.net/70b4/f/2018/036/1/b/angryludin_by_sena_nightsaber-dc29ef5.png');
	}else if(message.content == '$stalk'){
		message.channel.sendFile('https://orig00.deviantart.net/9d5d/f/2018/036/4/4/stalk_by_sena_nightsaber-dc29egm.png');
	}else if(message.content == '$hailrnggod'){
		message.channel.sendFile('https://orig00.deviantart.net/0f99/f/2018/036/0/8/hailrngod_by_sena_nightsaber-dc29ulw.png');
	}else if(message.content == '$nyaa'){
		message.channel.sendFile('https://orig00.deviantart.net/aed4/f/2018/036/e/d/nyaa_by_sena_nightsaber-dc29uo7.png');
	}else if(message.content == '$orz'){
		message.channel.sendFile('https://orig00.deviantart.net/f7ea/f/2018/036/a/5/orz_by_sena_nightsaber-dc29wvh.png');
	}else if(message.content == '$yawn'){
		message.channel.sendFile('https://orig00.deviantart.net/e058/f/2018/036/b/3/yawn_by_sena_nightsaber-dc29zat.png');
	}else if(message.content == '$;_;'){
		message.channel.sendFile('https://orig00.deviantart.net/32f6/f/2018/038/6/b/__by_sena_nightsaber-dc2gnxh.png');
	}else if(message.content == '$whaat'){
		message.channel.sendFile('https://orig00.deviantart.net/ded9/f/2018/038/0/c/whaat_by_sena_nightsaber-dc2gny7.png');
	}else if(message.content == '$goodluck'){
		message.channel.sendFile('https://orig00.deviantart.net/ad12/f/2018/038/4/e/goodluck_by_sena_nightsaber-dc2gu47.png');
	}else if(message.content == '$holdit'){
		message.channel.sendFile('https://orig00.deviantart.net/0c7d/f/2018/038/d/0/holdit_by_sena_nightsaber-dc2gu6j.png');
	}else if(message.content == '$peace'){
		message.channel.sendFile('https://orig00.deviantart.net/d0e9/f/2018/038/d/2/peace_by_sena_nightsaber-dc2gu5g.png');
	}else if(message.content == '!naruplz'){
		message.channel.sendFile('https://orig00.deviantart.net/6ed7/f/2018/055/b/a/narupls_by_sorebird-dc47cqy.png');
	}else if (String(s).match(/!choose.*/)) {
		var choice = s.replace("!choose", "");
		var selections = choice.split(',');
		var n = selections.length;
		var random = Math.round(Math.random() * (n - 1)) + 1;
		
		var result = selections[random - 1];
		
		if(result == "Vyrn"){
			message.channel.sendFile('https://cdn.discordapp.com/attachments/356371808842416130/407520939505352714/Clipboard04.png');
		}else{
			message.reply('*chirp* o vo/ '+result);
		}
	}else if (String(s).match(/!role.*/)) {
		var choice = s.replace("!role", "");
		var role = "";
		
		switch(choice){
			case "Jump Addict":
				role = "459051783889616901";
				break;	
		}
		
		if(message.member.roles.find("name",choice)) {
		  message.member.removeRole(role);
		  message.reply('*chirp* Removed role o vo/ '+choice);
		} else {
		  message.member.addRole(role);
		  message.reply('*chirp* Added role o vo/ '+choice);
		}
	}else if(message.content == '!chakchak'){
	message.channel.sendFile('https://orig00.deviantart.net/a4e8/f/2018/067/e/5/1520534191283_by_sorebird-dc5b103.jpg');
	}else if(message.content == '!KMRlol'){
	message.channel.sendFile('https://orig00.deviantart.net/091f/f/2018/067/b/7/dxcbudgvqaas2vm_by_sorebird-dc5b10q.png');
	}else if(message.content == '!KMRlmao'){
	message.channel.sendFile('https://orig00.deviantart.net/2b35/f/2018/067/3/1/28468653_2039156589458083_2400986494849253376_n_by_sorebird-dc5b10g.jpg');
	}else if(message.content == '!NKM' || message.content == '!NKMR' ){
	message.channel.sendFile('https://orig00.deviantart.net/6ad8/f/2018/067/f/8/unknown_by_sorebird-dc5b2g5.png');
	}else if(message.content == '!NKMsad' || message.content == '!NKMRsad'){
	message.channel.sendFile('https://orig00.deviantart.net/0fe8/f/2018/067/3/1/2018_03_04_18_47_36__by_sorebird-dc5b112.png');
	}else if(message.content == '!NKMrly' || message.content == '!NKMRrly'){
	message.channel.sendFile('https://orig00.deviantart.net/119c/f/2018/067/2/4/let_me_grind_in_peace_by_sorebird-dc5b11a.png');
	}else if(message.content == '!onoscratch'){
	message.channel.sendFile('https://orig00.deviantart.net/931f/f/2018/067/6/a/image_by_sorebird-dc5b11f.jpg');
	}else if(message.content == '!th9'){
	message.channel.sendFile('https://orig00.deviantart.net/317c/f/2018/067/0/5/26733911_10215866732009349_9112396645391563826_n_by_sorebird-dc5b11q.jpg');
	}else if(message.content == '!veryhardvee'){
	message.channel.sendFile('https://orig00.deviantart.net/6802/f/2018/067/1/1/battleraid_big_bad_shadow_very_hard_by_sorebird-dc5b0qm.png');
	}else if(message.content == '!gogoclaris'){
	message.channel.sendFile('https://orig00.deviantart.net/a3fb/f/2018/067/7/2/stamp182_by_sorebird-dc5b0r7.png');
	}else if(message.content == '!myaha'){
	message.channel.sendFile('https://orig00.deviantart.net/f604/f/2018/067/e/9/stamp183_by_sorebird-dc5b0ri.png');
	}else if(message.content == '!leaveittome'){
	message.channel.sendFile('https://orig00.deviantart.net/e4b5/f/2018/067/f/0/stamp184_by_sorebird-dc5b0ro.png');
	}else if(message.content == '!vyrncakes'){
	message.channel.sendFile('https://orig00.deviantart.net/e869/f/2018/067/a/3/stamp71_by_sorebird-dc5b0sq.png');
	}else if(message.content == '!lunaluheaven'){
	message.channel.sendFile('https://orig00.deviantart.net/2c64/f/2018/067/5/b/stamp218_by_sorebird-dc5b0t6.png');
	}else if(message.content == '!bingo'){
	message.channel.sendFile('https://orig00.deviantart.net/8808/f/2018/067/d/a/stamp217_by_sorebird-dc5b0tg.png');
	}else if(message.content == '!wombocombo'){
	message.channel.sendFile('https://orig00.deviantart.net/5b8c/f/2018/067/7/a/stamp216_by_sorebird-dc5b0tt.png');
	}else if(message.content == '!whoawhoa'){
	message.channel.sendFile('https://orig00.deviantart.net/9c12/f/2018/067/b/c/stamp215_by_sorebird-dc5b0u1.png');
	}else if(message.content == '!good'){
	message.channel.sendFile('https://orig00.deviantart.net/651f/f/2018/067/3/6/stamp214_by_sorebird-dc5b0ua.png');
	}else if(message.content == '!nod'){
	message.channel.sendFile('https://orig00.deviantart.net/1b2c/f/2018/067/c/c/stamp213_by_sorebird-dc5b0um.png');
	}else if(message.content == '!geeh' || message.content == '!mugeeh'){
	message.channel.sendFile('https://orig00.deviantart.net/cfb8/f/2018/067/b/a/stamp195_by_sorebird-dc5b0v0.png');
	}else if(message.content == '!beawink'){
	message.channel.sendFile('https://orig00.deviantart.net/33b4/f/2018/067/f/5/stamp212_by_sorebird-dc5b0vc.png');
	}else if(message.content == '!jadethanks'){
	message.channel.sendFile('https://orig00.deviantart.net/a530/f/2018/067/c/5/stamp211_by_sorebird-dc5b0vk.png');
	}else if(message.content == '!happyboost'){
	message.channel.sendFile('https://orig00.deviantart.net/cfb4/f/2018/067/a/6/stamp210_by_sorebird-dc5b0w2.png');
	}else if(message.content == '!tgif'){
	message.channel.sendFile('https://orig00.deviantart.net/67f5/f/2018/067/6/3/stamp209_by_sorebird-dc5b0we.png');
	}else if(message.content == '!durray'){
	message.channel.sendFile('https://orig00.deviantart.net/ceb0/f/2018/067/3/f/stamp208_by_sorebird-dc5b0wn.png');
	}else if(message.content == '!lilele'){
	message.channel.sendFile('https://orig00.deviantart.net/f026/f/2018/067/e/5/stamp207_by_sorebird-dc5b0wv.png');
	}else if(message.content == '!shing'){
	message.channel.sendFile('https://orig00.deviantart.net/f4c9/f/2018/067/5/4/stamp206_by_sorebird-dc5b0x5.png');
	}else if(message.content == '!hoohah'){
	message.channel.sendFile('https://orig00.deviantart.net/4f9b/f/2018/067/c/1/stamp203_by_sorebird-dc5b0xg.png');
	}else if(message.content == '!AMAZING'){
	message.channel.sendFile('https://orig00.deviantart.net/6bb9/f/2018/067/a/b/stamp204_by_sorebird-dc5b0xo.png');
	}else if(message.content == '!swiftend'){
	message.channel.sendFile('https://orig00.deviantart.net/4e3a/f/2018/067/9/0/stamp205_by_sorebird-dc5b0xy.png');
	}else if(message.content == '!burnyou'){
	message.channel.sendFile('https://orig00.deviantart.net/040c/f/2018/067/f/4/stamp202_by_sorebird-dc5b0y8.png');
	}else if(message.content == '!wholaughed'){
	message.channel.sendFile('https://orig00.deviantart.net/762a/f/2018/067/7/6/stamp201_by_sorebird-dc5b0yj.png');
	}else if(message.content == '!vaneseal'){
	message.channel.sendFile('https://orig00.deviantart.net/875c/f/2018/067/0/0/stamp200_by_sorebird-dc5b0yq.png');
	}else if(message.content == '!killervee'){
	message.channel.sendFile('https://orig00.deviantart.net/427e/f/2018/067/d/e/stamp199_by_sorebird-dc5b0yy.png');
	}else if(message.content == '!belialmutter'){
	message.channel.sendFile('https://orig00.deviantart.net/e7f8/f/2018/067/b/9/1520534051085_by_sorebird-dc5b0zk.jpg');
	}else if(message.content == '!sandalgone'){
	message.channel.sendFile('https://orig00.deviantart.net/8f31/f/2018/067/7/d/1520534086601_by_sorebird-dc5b0zr.jpg');
	}else if(message.content == '!tsukio'){
	message.channel.sendFile('https://orig00.deviantart.net/dc6c/f/2018/067/e/2/screenshot_20180208_145651_by_sorebird-dc5b2gi.jpg');
	}else if(message.content == '!silence'){
	message.channel.sendFile('https://orig00.deviantart.net/bc55/f/2018/067/0/3/screenshot_20180208_145330_by_sorebird-dc5b2gd.jpg');
	}else if(message.content == '$prettyplease'){
	message.channel.sendFile('https://orig00.deviantart.net/58ea/f/2018/067/d/0/prettyplease_by_sena_nightsaber-dc5axg1.png');
	}else if(message.content == '$dab' || message.content == '$dablord'){
	message.channel.sendFile('https://orig00.deviantart.net/2cae/f/2018/067/e/9/dablord_by_sena_nightsaber-dc5axhl.png');
	}else if(message.content == '!holdit'){
	message.channel.sendFile('https://orig00.deviantart.net/7905/f/2018/072/0/f/29101955_1628893100561694_6667059639911288697_n_by_sorebird-dc5sk4s.jpg');
	}else if(message.content == '!icame'){
	message.channel.sendFile('https://orig00.deviantart.net/c782/f/2018/072/2/a/e28_by_sorebird-dc5sk63.jpg');
	}else if(message.content == '!bea'){
	message.channel.sendFile('https://orig00.deviantart.net/1c8a/f/2018/072/2/7/407159398058819594_by_sorebird-dc5sk66.png');
	}else if(message.content == '!lucilike'){
	message.channel.sendFile('https://orig00.deviantart.net/fa0f/f/2018/072/0/5/1519856366773_by_sorebird-dc5sk6f.jpg');
	}else if(message.content == '!relax'){
	message.channel.sendFile('https://orig00.deviantart.net/c392/f/2018/072/e/3/relax_by_sorebird-dc5slrr.png');
	}else if(message.content == '!twirl'){
	message.channel.sendFile('https://orig00.deviantart.net/e350/f/2018/072/f/9/twirl_by_sorebird-dc5slri.png');
	}else if(message.content == '!nosebleed'){
	message.channel.sendFile('https://orig00.deviantart.net/6558/f/2018/072/e/3/tyre_by_sorebird-dc5slrc.jpg');
	}else if(message.content == '!rippots'){
	message.channel.sendFile('https://orig00.deviantart.net/3bff/f/2018/072/5/a/downloadfile_18_400x280_by_sorebird-dc5slqz.png');
	}else if(message.content == '!manofculture'){
	message.channel.sendFile('https://orig00.deviantart.net/8fc3/f/2018/072/7/a/18446754_1739919892689231_4131137197201494572_n_by_sorebird-dc5stys.jpg');
	}else if(message.content == '!callpolice'){
	message.channel.sendFile('https://orig00.deviantart.net/d9f3/f/2018/072/a/5/27752074_574140259591239_5977405690976920483_n_by_sorebird-dc5su2m.jpg');
	}else if(message.content == '!allgood'){
	message.channel.sendFile('https://orig00.deviantart.net/3f75/f/2018/099/b/c/allgood_by_sorebird-dc8d4p2.png');
	}else if(message.content == '!nani'){
	message.channel.sendFile('https://orig00.deviantart.net/f70d/f/2018/099/0/5/nani_by_sorebird-dc8d4ov.jpg');
	}else if(message.content == '!willlick'){
	message.channel.sendFile('https://orig00.deviantart.net/5b05/f/2018/099/1/a/willlick_by_sorebird-dc8d4oj.png');
	}else if(message.content == '!vyrncannon'){
	message.channel.sendFile('https://orig00.deviantart.net/f48e/f/2018/099/9/5/veecannon_by_sorebird-dc8d4o4.jpg');
	}else if(message.content == '!bunnyleech'){
	message.channel.sendFile('https://orig00.deviantart.net/ea26/f/2018/099/b/b/bunnyleech_by_sorebird-dc8d4nu.jpg');
	}else if(message.content == '!kaguyaleech'){
	message.channel.sendFile('https://orig00.deviantart.net/ddb9/f/2018/099/8/b/kaguyaleech_by_sorebird-dc8d4ni.jpg');
	}else if(message.content == '!petnameko'){
	message.channel.sendFile('https://orig00.deviantart.net/b7e8/f/2018/099/8/d/petnameko_by_sorebird-dc8d4n2.png');
	}else if(message.content == '!naruhodo'){
	message.channel.sendFile('https://orig00.deviantart.net/0a58/f/2018/099/b/6/naruhodo_by_sorebird-dc8d4ms.png');
	}else if(message.content == '!onegai'){
	message.channel.sendFile('https://orig00.deviantart.net/7f4a/f/2018/099/2/0/onegai_by_sorebird-dc8d4mf.png');
	}else if(message.content == '!oi'){
	message.channel.sendFile('https://orig00.deviantart.net/ed29/f/2018/099/b/7/oi_by_sorebird-dc8d4m3.png');
	}else if(message.content == '!namekoblush'){
	message.channel.sendFile('https://orig00.deviantart.net/db18/f/2018/099/5/6/blush_by_sorebird-dc8da82.png');
	}else if(message.content == '!nomcake'){
	message.channel.sendFile('https://orig00.deviantart.net/16dc/f/2018/099/1/5/cake_by_sorebird-dc8dc7c.png');
	}else if(message.content == '!blankstare'){
	message.channel.sendFile('https://orig00.deviantart.net/418f/f/2018/100/0/1/blankvyrn_by_sorebird-dc8gfkf.jpg');
	}else if(message.content == '!yey'){
	message.channel.sendFile('https://orig00.deviantart.net/ebcc/f/2018/099/9/b/yey_by_sorebird-dc8d4gf.png');
	}else if(message.content == '!ohmygod'){
	message.channel.sendFile('https://orig00.deviantart.net/d6c0/f/2018/099/d/f/ohmygod_by_sorebird-dc8d4gl.png');
	}else if(message.content == '!hahaha'){
	message.channel.sendFile('https://orig00.deviantart.net/f0ca/f/2018/099/3/1/hahaha_by_sorebird-dc8d4gu.png');
	}else if(message.content == '!pancake'){
	message.channel.sendFile('https://orig00.deviantart.net/e9f0/f/2018/099/b/7/flat_by_sorebird-dc8d4h2.png');
	}else if(message.content == '!sobbu'){
	message.channel.sendFile('https://orig00.deviantart.net/37c9/f/2018/099/e/5/sobbu_by_sorebird-dc8dbqe.gif');
	}else if(message.content == '!weeps'){
	message.channel.sendFile('https://orig00.deviantart.net/eca7/f/2018/099/a/3/weeps_by_sorebird-dc8dbqh.gif');
	}else if(message.content == '!wat'){
	message.channel.sendFile('https://orig00.deviantart.net/729f/f/2018/099/4/2/wat_by_sorebird-dc8dbqy.gif');
	}else if(message.content == '!imlate'){
	message.channel.sendFile('https://orig00.deviantart.net/dd3a/f/2018/099/4/7/imlate_by_sorebird-dc8dbr4.gif');
	}else if(message.content == '!blushu'){
	message.channel.sendFile('https://orig00.deviantart.net/9144/f/2018/099/e/7/blushu_by_sorebird-dc8dbqn.gif');
	}else if(message.content == '!goodnight'){
	message.channel.sendFile('https://orig00.deviantart.net/c9b0/f/2018/099/c/7/goodnight_by_sorebird-dc8dbr3.gif');
	}else if(message.content == '!foryou'){
	message.channel.sendFile('https://orig00.deviantart.net/d5d4/f/2018/099/0/c/foryou_by_sorebird-dc8dbqt.gif');
	}else if(message.content == '!yesgood'){
	message.channel.sendFile('https://orig00.deviantart.net/6637/f/2018/099/1/7/good_by_sorebird-dc8d815.png');
	}else if(message.content == '!vyrnsing1'){
	message.channel.sendFile('https://orig00.deviantart.net/ba34/f/2018/099/9/1/stamp196_by_sorebird-dc8d2cd.png');
	}else if(message.content == '!vyrnsing2'){
	message.channel.sendFile('https://orig00.deviantart.net/f5ba/f/2018/099/c/8/stamp197_by_sorebird-dc8d2bz.png');
	}else if(message.content == '!vyrnsing3'){
	message.channel.sendFile('https://orig00.deviantart.net/1357/f/2018/099/5/c/stamp198_by_sorebird-dc8d2bl.png');
	}else if(message.content == '!vyrnwat'){
	message.channel.sendFile('https://orig00.deviantart.net/6bad/f/2018/099/f/a/sticker__1__by_sorebird-dc8da4w.png');
	}else if(message.content == '!sneakaway'){
	message.channel.sendFile('https://orig00.deviantart.net/9ee0/f/2018/099/c/e/sneakaway_by_sorebird-dc8da59.png');
	}else if(message.content == '!uhnice'){
	message.channel.sendFile('https://orig00.deviantart.net/d2c0/f/2018/099/f/2/nice_by_sorebird-dc8da4q.png');
	}else if(message.content == '!np'){
	message.channel.sendFile('https://orig00.deviantart.net/4360/f/2018/099/b/3/np_by_sorebird-dc8da5l.png');
	}else if(message.content == '!veryhardbel'){
	message.channel.sendFile('https://orig00.deviantart.net/d831/f/2018/099/7/1/1520535031195_by_sorebird-dc8d2cs.jpg');
	}else if(message.content == '!bealaugh'){
	message.channel.sendFile('https://orig00.deviantart.net/6d0b/f/2018/099/0/3/385836621288964099_by_sorebird-dc8d8n3.png');
	}else if (String(s).match(/sorebird.*/)) {
	  var choice = "Hello I'm "+n+", chirp, ovo, I'm not a Bot!, please be nice to me, I like to bath, please feed me cookies";
		var selections = choice.split(',');
		var n = selections.length;
		var random = Math.round(Math.random() * (n - 1)) + 1;
		var random2 = Math.round(Math.random() * (10 - 1)) + 1;
		var result = selections[random - 1];
		if(random2 < 7){
		var u = message.author.username;
			message.reply(result);
		}else{
			message.reply('chirp');
		}
    	}else if(message.content == '!katwut'){
		message.channel.sendFile('https://orig00.deviantart.net/ebd5/f/2018/122/3/e/1523645603309_by_sorebird-dcage7i.jpg');
	}else if(message.content == '!waitth9'){
		message.channel.sendFile('https://orig00.deviantart.net/e747/f/2018/122/3/a/30706191_10211868486808663_2020887756078579712_n_by_sorebird-dcage79.jpg');
	}else if(message.content == '!ferryhit'){
		message.channel.sendFile('https://orig00.deviantart.net/336a/f/2018/122/e/0/1524690734956_by_sorebird-dcage6y.jpg');
	}else if(message.content == '!KMReyes'){
		message.channel.sendFile('https://orig00.deviantart.net/c5d6/f/2018/122/6/a/30729066_2487783688114525_3554642365184066015_n_by_sorebird-dcage6k.jpg');
	}else if(message.content == '!vyrnshock'){
		message.channel.sendFile('https://orig00.deviantart.net/2d0d/f/2018/122/4/c/30698022_350020905490080_6633791749921701888_n_by_sorebird-dcage68.jpg');
	}else if(message.content == '!lalala'){
		message.channel.sendFile('https://orig00.deviantart.net/6914/f/2018/122/7/8/1524690773917_by_sorebird-dcage5z.jpg');
	}else if(message.content == '!dickpick2'){
		message.channel.sendFile('https://orig00.deviantart.net/5ac9/f/2018/122/2/9/1523642297073_by_sorebird-dcage5r.jpg');
	}else if(message.content == '!throwsalt'){
		message.channel.sendFile('https://orig00.deviantart.net/bc37/f/2018/122/8/a/164971_by_sorebird-dcage5l.jpg');
	}else if(message.content == '!yaygw'){
		message.channel.sendFile('https://orig00.deviantart.net/615c/f/2018/122/1/e/yeygw_by_sorebird-dcage57.jpg');
	}else if(message.content == '!vyrnchoke' || message.content == '!veechoke'){
		message.channel.sendFile('https://orig00.deviantart.net/8bfe/f/2018/122/5/6/1523786125094_by_sorebird-dcage4z.png');
	}else if(message.content == '!funfyay' || message.content == '!fifyay'){
		message.channel.sendFile('https://orig00.deviantart.net/5e58/f/2018/138/5/3/f74447606f1378ac8b1ae5733e5c9cc5_by_sorebird-dcbvkrx.png');
	}else if(message.content == '!headpat'){
		message.channel.sendFile('https://orig00.deviantart.net/d43d/f/2018/138/1/5/unknown__2__by_sorebird-dcbvksb.png');
	}else if(message.content == '!oktostare'){
		message.channel.sendFile('https://orig00.deviantart.net/de29/f/2018/138/9/d/1525933759358_by_sorebird-dcbvksg.jpg');
	}else if(message.content == '!funfyey' || message.content == '!fifyey'){
		message.channel.sendFile('https://orig00.deviantart.net/9da0/f/2018/138/2/d/fiflul_by_sorebird-dcbvksm.jpg');
	}else if(message.content == '!spitcoffee'){
		message.channel.sendFile('https://orig00.deviantart.net/ccb8/f/2018/138/a/8/sandalpfft_by_sorebird-dcbvkt0.jpg');
	}else if(message.content == '!hugfif' || message.content == '!hugfunf'){
		message.channel.sendFile('https://orig00.deviantart.net/b436/f/2018/138/2/b/e438e3ec05c65909d57f49db9aa3707b_by_sorebird-dcbvktc.png');
	}else if(message.content == '!proudfif' || message.content == '!proudfunf'){
		message.channel.sendFile('https://orig00.deviantart.net/a58f/f/2018/138/f/d/63ac9d99fbab201fc90d1a08115836a5_by_sorebird-dcbvktj.png');
	}else if(message.content == '!chikin'){
		message.channel.sendFile('https://orig00.deviantart.net/8529/f/2018/138/3/f/chikin_by_sorebird-dcbvku9.jpg');
	}else if(message.content == '!dontavoid'){
		message.channel.sendFile('https://orig00.deviantart.net/0b36/f/2018/138/8/5/29597993_1821721274514353_5206856097742737357_n_by_sorebird-dcbvktz.jpg');
	}else if(message.content == '!night'){
		message.channel.sendFile('https://orig00.deviantart.net/ab63/f/2018/151/e/1/ded_by_sorebird-dcd1zw2.png');
	}else if(message.content == '!whyme'){
		message.channel.sendFile('https://orig00.deviantart.net/b4a4/f/2018/151/e/0/stamp121_by_sorebird-dcd202m.png');
	}else if(message.content == '!iloveyou'){
		message.channel.sendFile('https://orig00.deviantart.net/d8f2/f/2018/151/4/e/stamp219_by_sorebird-dcd202w.png');
	}else if(message.content == '!thumbup'){
		message.channel.sendFile('https://orig00.deviantart.net/be4c/f/2018/151/4/d/1527766594020_by_sorebird-dcd2034.jpg');
	}else if(message.content == '!lunaluyes'){
		message.channel.sendFile('https://orig00.deviantart.net/519b/f/2018/151/f/d/1527753588045_by_sorebird-dcd203a.jpg');
	}else if(message.content == '!feelmypassion'){
		message.channel.sendFile('https://orig00.deviantart.net/a243/f/2018/151/9/d/stamp220_by_sorebird-dcd202q.png');
	}else if(message.content == '!veesigh' || message.content == '!vyrnsigh'){
		message.channel.sendFile('https://orig00.deviantart.net/65fb/f/2018/151/1/f/sigh2_by_sorebird-dcd20j6.png');
	}else if(message.content == '!cagshock'){
		message.channel.sendFile('https://orig00.deviantart.net/5e13/f/2018/151/7/5/cagshock_by_sorebird-dcd20jq.png');
	}else if(message.content == '!glitter'){
		message.channel.sendFile('https://orig00.deviantart.net/b2cb/f/2018/151/4/6/glitter_by_sorebird-dcd20jh.png');
	}else if(message.content == '!niong'){
		message.channel.sendFile('https://orig00.deviantart.net/fae0/f/2018/151/0/0/niong_by_sorebird-dcd20jb.png');
	}else if(message.content == '!hellopolice'){
		message.channel.sendFile('https://orig00.deviantart.net/7f95/f/2018/154/0/3/34302679_1078202778985790_384197404586409984_n_by_sorebird-dcdbl0e.jpg');
	}else if(message.content == '!funfwow' || message.content == '!fifwow'){
		message.channel.sendFile('https://orig00.deviantart.net/aa7b/f/2018/168/6/c/screen_shot_2018_06_12_at_7_27_22_pm_by_sorebird-dcenu0y.png');
	}else if(message.content == '!cheersore'){
		message.channel.sendFile('https://orig00.deviantart.net/20d0/f/2018/168/1/8/cheersoreillia1_by_sorebird-dcenu0l.png');
	}else if(message.content == '!tlepilli'){
		message.channel.sendFile('https://orig00.deviantart.net/6109/f/2018/168/7/3/tlepilli_by_sorebird-dcenu0c.png');
	}else if(message.content == '!jin'){
		message.channel.sendFile('https://orig00.deviantart.net/c9f4/f/2018/168/0/7/jinstare_by_sorebird-dcenu03.jpg');
	}else if(message.content == '!dance'){
		message.channel.sendFile('https://orig00.deviantart.net/258d/f/2018/168/e/2/1514654716901_by_sorebird-dcenu19.gif');
	}else if(message.content == '!chikinyay'){
		message.channel.sendFile('https://orig00.deviantart.net/00c8/f/2018/168/4/f/screenshot_20180608_110536_granblue_by_sorebird-dcenu1f.jpg');
	}else if(message.content == '!deviltrigger'){
		message.channel.sendFile('https://orig00.deviantart.net/9a82/f/2018/168/0/9/7ad_by_sorebird-dcenuo9.jpg');
	}else if(message.content == '!motivated'){
		message.channel.sendFile('https://orig00.deviantart.net/3787/f/2018/168/b/0/d5d_by_sorebird-dcenv4g.jpg');
	}else if(message.content == '!korwawryy'){
		message.channel.sendFile('https://orig00.deviantart.net/378c/f/2018/168/c/2/4383c10676d215197d28b70b8f2fa1ec_by_sorebird-dcenvp8.png');
	}else if(message.content == '!urgh'){
		message.channel.sendFile('https://orig00.deviantart.net/dbb2/f/2018/168/3/f/55c2314cb64ad7884fd3eec288e25b54_by_sorebird-dcenvpo.png');
	}else if(message.content == '!veewut' || message.content == '!vyrnwut'){
		message.channel.sendFile('https://orig00.deviantart.net/58f7/f/2018/168/b/d/vyrnwat_by_sorebird-dcenvr3.png');
	}else if(message.content == '!omoshiroi'){
		message.channel.sendFile('https://orig00.deviantart.net/d84e/f/2018/189/3/9/eahta_ii_by_sorebird-dcglx8i.png');
	}else if(message.content == '!feelsdante'){
		message.channel.sendFile('https://orig00.deviantart.net/8288/f/2018/189/7/9/1529786051952_by_sorebird-dcglx8n.jpg');
	}else if(message.content == '!boldgar'){
		message.channel.sendFile('https://orig00.deviantart.net/ae79/f/2018/189/2/a/boldgar_by_sorebird-dcglx8v.png');
	}else if(message.content == '!sandal'){
		message.channel.sendFile('https://orig00.deviantart.net/9e23/f/2018/189/9/9/sandal_by_sorebird-dcglx8x.png');
	}else if(message.content == '!pizza'){
		message.channel.sendFile('https://orig00.deviantart.net/aa34/f/2018/189/7/d/pizza_by_sorebird-dcglx94.gif');
	}else if(message.content == '!judging'){
		message.channel.sendFile('https://orig00.deviantart.net/438a/f/2018/189/a/5/1529855971489_by_sorebird-dcglx96.jpg');
	}else if(message.content == '!nioshock'){
		message.channel.sendFile('https://orig00.deviantart.net/8825/f/2018/189/c/1/unknown__3__by_sorebird-dcglx9c.png');
	}else if(message.content == '!kisama'){
		message.channel.sendFile('https://orig00.deviantart.net/8c76/f/2018/189/1/4/unknown__4__by_sorebird-dcglx9i.png');
	}else if(message.content == '!katcooking'){
		message.channel.sendFile('https://orig00.deviantart.net/fddb/f/2018/189/4/d/1529925143184_by_sorebird-dcglx9n.jpg');
	}else if(message.content == '!angriboi'){
		message.channel.sendFile('https://orig00.deviantart.net/d570/f/2018/189/8/1/screen_shot_2018_06_21_at_11_32_29_pm_by_sorebird-dcglx9s.png');
	}else if(message.content == '!eustacethink'){
		message.channel.sendFile('https://orig00.deviantart.net/dbe1/f/2018/189/8/d/euthink_by_sorebird-dcglx9z.jpg');
	}else if(message.content == '!quatre'){
		message.channel.sendFile('https://orig00.deviantart.net/0c3e/f/2018/189/c/0/quatre_by_sorebird-dcglxa3.jpg');
	}else if(message.content == '!nocomment'){
		message.channel.sendFile('https://orig00.deviantart.net/f819/f/2018/189/e/a/nocomment_by_sorebird-dcglxab.png');
	}else if(message.content == '!smugcag'){
		message.channel.sendFile('https://orig00.deviantart.net/58f9/f/2018/189/8/f/smugcag_by_sorebird-dcglxah.png');
	}else if(message.content == '!scoldme'){
		message.channel.sendFile('https://orig00.deviantart.net/cd73/f/2018/189/4/e/1531050049372_by_sorebird-dcgly75.jpg');
	}else if(message.content == '!covereye'){
		message.channel.sendFile('https://orig00.deviantart.net/28d0/f/2018/189/f/5/1531050066836_by_sorebird-dcgly7b.jpg');
	}else if(message.content == '!aegismerge'){
		message.channel.sendFile('https://orig00.deviantart.net/d6c9/f/2018/260/a/0/aegismerge_by_sorebird-dcn2qpg.png');
	}else if(message.content == '!approved'){
			message.channel.sendFile('https://orig00.deviantart.net/d8d6/f/2018/260/f/1/approved_by_sorebird-dcn2qpa.png');
	}else if(message.content == '!bedoclock'){
			message.channel.sendFile('https://orig00.deviantart.net/0d93/f/2018/260/6/4/bedoclock_by_sorebird-dcn2qp3.jpg');
	}else if(message.content == '!belialsigh'){
			message.channel.sendFile('https://orig00.deviantart.net/7f4c/f/2018/260/9/5/belialsigh_by_sorebird-dcn2qot.png');
	}else if(message.content == '!browhat'){
			message.channel.sendFile('https://orig00.deviantart.net/09a8/f/2018/260/5/4/bro_what_by_sorebird-dcn2qop.png');
	}else if(message.content == '!chikinslacc'){
			message.channel.sendFile('https://orig00.deviantart.net/03f2/f/2018/260/e/9/chikinslacc_by_sorebird-dcn2qoo.jpg');
	}else if(message.content == '!crashed'){
			message.channel.sendFile('https://orig00.deviantart.net/f0a6/f/2018/260/f/0/crushedhope_by_sorebird-dcn2qon.jpg');
	}else if(message.content == '!cagtehe'){
			message.channel.sendFile('https://orig00.deviantart.net/0bd7/f/2018/260/8/2/cutest_by_sorebird-dcn2qog.jpg');
	}else if(message.content == '!dante'){
			message.channel.sendFile('https://orig00.deviantart.net/2f78/f/2018/260/c/1/devil_may_cry_4_dante_dante_39278436_500_275_by_sorebird-dcn2qod.gif');
	}else if(message.content == '!elmotthuh'){
			message.channel.sendFile('https://orig00.deviantart.net/4f8b/f/2018/260/8/9/elmotthuh_by_sorebird-dcn2qo6.png');
	}else if(message.content == '!fish'){
			message.channel.sendFile('https://orig00.deviantart.net/038b/f/2018/260/2/7/fish_by_sorebird-dcn2qo5.png');
	}else if(message.content == '!glomps'){
			message.channel.sendFile('https://orig00.deviantart.net/0dc5/f/2018/260/9/2/glomps_by_sorebird-dcn2qo4.jpg');
	}else if(message.content == '!godie'){
			message.channel.sendFile('https://orig00.deviantart.net/bd51/f/2018/260/4/0/godie_by_sorebird-dcn2qo2.png');
	}else if(message.content == '!imsalty'){
			message.channel.sendFile('https://orig00.deviantart.net/825b/f/2018/260/1/3/imsalty_by_sorebird-dcn2qnz.jpg');
	}else if(message.content == '!kicks'){
			message.channel.sendFile('https://orig00.deviantart.net/08f5/f/2018/260/5/5/kicks_by_sorebird-dcn2qnt.png');
	}else if(message.content == '!nobonito'){
			message.channel.sendFile('https://orig00.deviantart.net/02ed/f/2018/260/a/e/nobonito_by_sorebird-dcn2qno.png');
	}else if(message.content == '!pholiashock'){
			message.channel.sendFile('https://orig00.deviantart.net/855d/f/2018/260/f/6/pholiashock_by_sorebird-dcn2qnk.jpg');
	}else if(message.content == '!pholiathink'){
			message.channel.sendFile('https://orig00.deviantart.net/b3cb/f/2018/260/5/a/pholiathink_by_sorebird-dcn2qng.jpg');
	}else if(message.content == '!sietedespair'){
			message.channel.sendFile('https://orig00.deviantart.net/ed98/f/2018/260/3/2/sietedespair_by_sorebird-dcn2qnc.jpg');
	}else if(message.content == '!sieteshock'){
			message.channel.sendFile('https://orig00.deviantart.net/98ac/f/2018/260/6/2/sieteshock_by_sorebird-dcn2qn9.jpg');
	}else if(message.content == '!cagsway'){
			message.channel.sendFile('https://orig00.deviantart.net/326d/f/2018/260/0/a/sway_by_sorebird-dcn2qn5.jpg');
	}else if(message.content == '!percyvroom'){
			message.channel.sendFile('https://orig00.deviantart.net/d225/f/2018/260/9/6/vroom_by_sorebird-dcn2qn1.jpg');
	}else if(message.content == '!vyrnstamp'){
			message.channel.sendFile('https://orig00.deviantart.net/27b6/f/2018/260/4/0/vyrnstamp_by_sorebird-dcn2qmw.png');
	}else if(message.content == '!dafck'){
			message.channel.sendFile('https://orig00.deviantart.net/cc04/f/2018/260/f/3/whatamireading_by_sorebird-dcn2qmn.jpg');
	}else if(message.content == '!woof'){
			message.channel.sendFile('https://orig00.deviantart.net/6bea/f/2018/260/3/1/woof_by_sorebird-dcn2qmj.png');
	}else if(message.content == '!zoerry'){
			message.channel.sendFile('https://orig00.deviantart.net/1550/f/2018/260/7/a/zoerry_by_sorebird-dcn2qma.png');
	}else if(message.content == '!wait'){
		 message.channel.sendFile('https://orig00.deviantart.net/0086/f/2018/265/c/8/v_by_sorebird-dcniko6.gif');
	}else if(message.content == '!danterose'){
		 message.channel.sendFile('https://orig00.deviantart.net/6c76/f/2018/265/9/9/tumblr_nfv411sgm61syag2xo1_r4_400_by_sorebird-dcnikm0.gif');
	}else if(message.content == '!coverears'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/491864486249234433/FB_IMG_1537340062745.jpg');
	}else if(message.content == '!leciaok'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/491840385203699713/image0.png');
	}else if(message.content == '!cucomg'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/492210729928359937/Screen_Shot_2018-09-20_at_3.49.35_pm.png');
	}else if(message.content == '!gettingbigger'){
		 message.channel.sendFile('https://orig00.deviantart.net/06fb/f/2018/266/a/e/gettingbigger_by_sorebird-dcnle7k.jpg');
	}else if(message.content == '!written'){
		 message.channel.sendFile('https://orig00.deviantart.net/3396/f/2018/266/0/2/written_by_sorebird-dcnldx0.jpg');
	}else if(message.content == '!vstare'){
		 message.channel.sendFile('https://orig00.deviantart.net/150b/f/2018/266/c/3/vpls_by_sorebird-dcnldx7.png');
	}else if(message.content == '!sparkleyes'){
		 message.channel.sendFile('https://media.discordapp.net/attachments/482826784627359744/494109288793636864/Screen_Shot_2018-09-25_at_9.33.44_pm.png');
	}else if(message.content == '!slapsno'){
		 message.channel.sendFile('https://media.discordapp.net/attachments/482826784627359744/494173948741943296/FB_IMG_1537890657260.jpg');
	}else if(message.content == '!disturbance'){
		 message.channel.sendFile('https://media.discordapp.net/attachments/482826784627359744/494174034087510016/FB_IMG_1537890413036.jpg');
	}else if(message.content == '!hifive'){
		 message.channel.sendFile('https://media.discordapp.net/attachments/482826784627359744/494174118846136332/FB_IMG_1537890450481.jpg');
	}else if(message.content == '!problems'){
		 message.channel.sendFile('https://media.discordapp.net/attachments/482826784627359744/494174174298898432/FB_IMG_1537890650190.jpg');
	}else if(message.content == '!kmrlookdown'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/501524717984022528/468008220695199754.png');
	}else if(message.content == '!europasmile'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/502320788469317643/Screen_Shot_2018-10-18_at_2.23.02_pm.png');
	}else if(message.content == '!europasmug'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/502321019030077453/Screen_Shot_2018-10-18_at_2.23.53_pm.png');
	}else if(message.content == '!lyriaded'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/503866642510643200/image0.png');
	}else if(message.content == '!aglovale'){
		 message.channel.sendFile('https://pbs.twimg.com/media/DqHodWnV4AAS1BU.png');
	}else if(message.content == '!gooddeal'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/504600707127574528/gooddeal.png');
	}else if(message.content == '!vaneded'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/505958234054721536/VGA04WA.png');
	}else if(message.content == '!lancelotwelcome'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/506363796298924043/image0.jpg');
	}else if(message.content == '!timetoscum'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/506438511751331870/unknown-3.png');
	}else if(message.content == '!derpyheles'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/506589023582552064/image0.jpg');
	}else if(message.content == '!vyrnsweat'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/507141839737061376/Screen_Shot_2018-10-31_at_9.38.08_pm.png');
	}else if(message.content == '!freesalt'){
		 message.channel.sendFile('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/d4f5aea5-377c-4b1e-8a72-d8cb4e21de3f/dcr5pi1-62952dca-5d96-421e-bf7f-53457c84d196.jpg');
	}else if(message.content == '!areyouok'){
		 message.channel.sendFile('https://media.discordapp.net/attachments/482826784627359744/508649542091145232/0ae48a7861022cb26ddcaea9ae73192f.png');
	}else if(message.content == '!katcooking2'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/508649664330072104/5c10ff47744ddd10f261221dc800b21b.png');
	}else if(message.content == '!aglothink'){
		 message.channel.sendFile('https://media.discordapp.net/attachments/482826784627359744/508649754180190214/e93bb2ca8d16258f07e5342dd9bec045.png');
	}else if(message.content == '!beastop'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/508650985883959306/cbcd666b7241b09260718128c8aa5d61.png');
	}else if(message.content == '!viranosebleed'){
		 message.channel.sendFile('https://cdn.discordapp.com/attachments/482826784627359744/508651168340115470/e29b03ae00d274cc771a998862bccc89.png');
	}else if(message.content == '!elmottgrin'){
		 message.channel.sendFile('https://orig00.deviantart.net/5642/f/2018/308/5/6/3c1ed9d2081128f52d4926ed3dc4c99f_by_sorebird-dcr5p1s.png');
	}else if(message.content == '!yuelok'){
		 message.channel.sendFile('https://orig00.deviantart.net/d0c8/f/2018/308/8/3/24b8a22b31edca653674b7ae1e0c7ee3_by_sorebird-dcr5p20.png');
	}
});

bot.login(process.env.BOT_TOKEN);
