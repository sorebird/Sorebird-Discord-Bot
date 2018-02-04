const Discord = require('discord.js');
const bot = new Discord.Client();

//bot.setGame('!help for list of commands');
bot.on('ready', () => {
    bot.user.setGame("!help for commands");
});

bot.on('message', function(message) {
    var s = message.content;
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
	}else if(message.content == '!poutvina'){
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
}


	
});

bot.login(process.env.BOT_TOKEN);
