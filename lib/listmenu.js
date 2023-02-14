const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

「 Anime Menu 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ fanart 🅕
│✧ animeinfo 🅕
│✧ animelink 🅕
│✧ otakudesu 🅕
│✧ manga 🅕
│✧ katanime 🅕
│✧ nekopoisearch 🅟
│✧ nekopoidl 🅟
│✧ nhentaisearch 🅟
│✧ nhentaidl 🅟
│✧ whatanime 🅕
│✧ doujinsearch 🅟
│✧ doujindownload 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Owner Menu 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ bc 🅞
│✧ join 🅞
│✧ shutdown 🅞
│✧ autodltt 🅞
│✧ autosticker 🅞
│✧ setppbot 🅞
│✧ addprem 🅞
│✧ delprem 🅞
│✧ addowner 🅞
│✧ delowner 🅞
│✧ addlist 🅞
│✧ dellist 🅞
│✧ updatelist 🅞
│✧ listnya 🅞
│✧ addvn 🅞
│✧ delvn 🅞
│✧ listvn 🅞
│✧ ban add 🅞
│✧ ban del 🅞
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Other Menu 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ owner 🅕
│✧ jadibot 🅟
│✧ listjadibot 🅟
│✧ donasi 🅕
│✧ listpremium 🅕
│✧ buypremium 🅕
│✧ jadiowner 🅕
│✧ sewabot 🅕
│✧ cekme 🅕
│✧ obfus 🅕
│✧ styletext 🅕
│✧ tts 🅕
│✧ tourl 🅕
│✧ tovn 🅕
│✧ toaudio 🅕
│✧ tomp3 🅕
│✧ toimg 🅕
│✧ toonce 🅕
│✧ sticker 🅕
│✧ smeme 🅕
│✧ snobg 🅕
│✧ menfes 🅕
│✧ leave 🅕
│✧ ebinary 🅕
│✧ dbinary 🅕
│✧ cariresep 🅕
│✧ bacaresep 🅕
│✧ ssweb 🅕
│✧ wasted 🅕
│✧ comrade 🅕
│✧ horny 🅕
│✧ blur 🅕
│✧ pixelate 🅕
│✧ simpcard 🅕
│✧ lolice 🅕
│✧ gay 🅕
│✧ jail 🅕
│✧ quoted 🅕
│✧ caridoi 🅟
│✧ cariteman 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Download Menu 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ tiktokvideo 🅕
│✧ tiktokaudio 🅕
│✧ ytsearch 🅕
│✧ play 🅕
│✧ mp3 🅕
│✧ mp4 🅕
│✧ googles 🅕
│✧ happymod 🅕
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Group Menu 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ antilink 🅖
│✧ antiwame 🅖
│✧ add 🅖
│✧ kick 🅖
│✧ promote 🅖
│✧ demote 🅖
│✧ hidetag 🅖
│✧ tagall 🅖
│✧ opentime 🅖
│✧ closetime 🅖
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Fun Group 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ memek 🅖
│✧ bego 🅖
│✧ goblok 🅖
│✧ janda 🅖
│✧ perawan 🅖
│✧ babi 🅖
│✧ tolol 🅖
│✧ pinter 🅖
│✧ pintar 🅖
│✧ asu 🅖
│✧ bodoh 🅖
│✧ gay 🅖
│✧ lesby 🅖
│✧ bajingan 🅖
│✧ jancok 🅖
│✧ anjing 🅖
│✧ ngentod 🅖
│✧ ngentot 🅖
│✧ monyet 🅖
│✧ mastah 🅖
│✧ newbie 🅖
│✧ bangsat 🅖
│✧ bangke 🅖
│✧ sange 🅖
│✧ sangean 🅖
│✧ dakjal 🅖
│✧ horny 🅖
│✧ wibu 🅖
│✧ puki 🅖
│✧ peak 🅖
│✧ pantex 🅖
│✧ pantek 🅖
│✧ setan 🅖
│✧ iblis 🅖
│✧ cacat 🅖
│✧ yatim 🅖
│✧ piatu 🅖
│✧ goblokcek 🅖
│✧ jelekcek 🅖
│✧ gaycek 🅖
│✧ rate 🅖
│✧ lesbicek 🅖
│✧ gantengcek 🅖
│✧ cantikcek 🅖
│✧ begocek 🅖
│✧ suhucek 🅖
│✧ pintercek 🅖
│✧ jagocek 🅖
│✧ nolepcek 🅖
│✧ babicek 🅖
│✧ bebancek 🅖
│✧ baikcek 🅖
│✧ jahatcek 🅖
│✧ anjingcek 🅖
│✧ haramcek 🅖
│✧ pakboycek 🅖
│✧ pakgirlcek 🅖
│✧ sangecek 🅖
│✧ bapercek 🅖
│✧ fakboycek 🅖
│✧ alimcek 🅖
│✧ suhucek 🅖
│✧ fakgirlcek 🅖
│✧ kerencek 🅖
│✧ wibucek 🅖
│✧ pasarkascek 🅖
│✧ kulcek 🅖                
│✧ cekgoblok 🅖
│✧ cekjelek 🅖
│✧ cekgay 🅖                
│✧ ceklesbi 🅖
│✧ cekganteng 🅖
│✧ cekcantik 🅖
│✧ cekbego 🅖
│✧ ceksuhu 🅖
│✧ cekpinter 🅖
│✧ cekjago 🅖
│✧ ceknolep 🅖
│✧ cekbabi 🅖
│✧ cekbeban 🅖
│✧ cekbaik 🅖
│✧ cekjahat 🅖
│✧ cekanjing 🅖
│✧ cekharam 🅖
│✧ cekpakboy 🅖
│✧ cekpakgirl 🅖
│✧ ceksange 🅖
│✧ cekbaper 🅖
│✧ cekfakboy 🅖
│✧ cekalim 🅖
│✧ ceksuhu 🅖
│✧ cekfakgirl 🅖
│✧ cekkeren 🅖
│✧ cekwibu 🅖
│✧ cekpasarkas 🅖
│✧ cekkul 🅖
│✧ cekbapak 🅖
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Random Foto 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ aesthetic 🅟
│✧ ahegao 🅟
│✧ akira 🅟
│✧ akiyama 🅟
│✧ ana 🅟
│✧ anjing 🅟
│✧ art 🅟
│✧ ass 🅟
│✧ asuna 🅟
│✧ ayuzawa 🅟
│✧ bdsm 🅟
│✧ boneka 🅟
│✧ boruto 🅟
│✧ bts 🅟
│✧ cecan 🅟
│✧ chiho 🅟
│✧ chitoge 🅟
│✧ cogan 🅟
│✧ cosplay 🅟
│✧ cosplayloli 🅟
│✧ cosplaysagiri 🅟
│✧ cuckold 🅟
│✧ cum 🅟
│✧ cyber 🅟
│✧ darkjokes 🅟
│✧ deidara 🅟
│✧ doraemon 🅟
│✧ eba 🅟
│✧ elaina 🅟
│✧ emilia 🅟
│✧ ero 🅟
│✧ erza 🅟
│✧ exo 🅟
│✧ femdom 🅟
│✧ foot 🅟
│✧ freefire 🅟
│✧ gamewallpaper 🅟
│✧ gangbang 🅟
│✧ gifs 🅟
│✧ glasses 🅟
│✧ gremory 🅟
│✧ hekel 🅟
│✧ hentai 🅟
│✧ hestia 🅟
│✧ hijaber 🅟
│✧ hinata 🅟
│✧ husbu 🅟
│✧ inori 🅟
│✧ islamic 🅟
│✧ isuzu 🅟
│✧ itachi 🅟
│✧ itori 🅟
│✧ jahy 🅟
│✧ jeni 🅟
│✧ jiso 🅟
│✧ justina 🅟
│✧ kaga 🅟
│✧ kagura 🅟
│✧ kakasih 🅟
│✧ kaori 🅟
│✧ kartun 🅟
│✧ katakata 🅟
│✧ keneki 🅟
│✧ kotori 🅟
│✧ kpop 🅟
│✧ kucing 🅟
│✧ kurumi 🅟
│✧ lisa 🅟
│✧ loli 🅟
│✧ madara 🅟
│✧ masturbation 🅟
│✧ megumin 🅟
│✧ mikasa 🅟
│✧ mikey 🅟
│✧ miku 🅟
│✧ milf 🅟
│✧ minato 🅟
│✧ mobil 🅟
│✧ motor 🅟
│✧ mountain 🅟
│✧ naruto 🅟
│✧ neko 🅟
│✧ neko2 🅟
│✧ nekonime 🅟
│✧ nezuko 🅟
│✧ onepiece 🅟
│✧ orgy 🅟
│✧ panties 🅟
│✧ pentol 🅟
│✧ pokemon 🅟
│✧ profil 🅟
│✧ programming 🅟
│✧ pubg 🅟
│✧ pussy 🅟
│✧ randblackpink 🅟
│✧ randomnime 🅟
│✧ randomnime2 🅟
│✧ rize 🅟
│✧ rose 🅟
│✧ ryujin 🅟
│✧ sagiri 🅟
│✧ sakura 🅟
│✧ sasuke 🅟
│✧ satanic 🅟
│✧ shina 🅟
│✧ shinka 🅟
│✧ shinomiya 🅟
│✧ shizuka 🅟
│✧ shota 🅟
│✧ tatasurya 🅟
│✧ technology 🅟
│✧ tejina 🅟
│✧ tentacles 🅟
│✧ thighs 🅟
│✧ toukachan 🅟
│✧ tsunade 🅟
│✧ waifu 🅟
│✧ wallhp 🅟
│✧ wallml 🅟
│✧ wallnime 🅟
│✧ yotsuba 🅟
│✧ yuki 🅟
│✧ yulibocil 🅟
│✧ yumeko 🅟
│✧ fox 🅟  
│✧ dog 🅟  
│✧ cat 🅟
│✧ panda 🅟  
│✧ birb 🅟 
│✧ koala 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Text Pro 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ candy 🅟 
│✧ christmas 🅟 
│✧ 3dchristmas 🅟 
│✧ sparklechristmas 🅟
│✧ deepsea 🅟 
│✧ scifi 🅟 
│✧ rainbow 🅟 
│✧ waterpipe 🅟 
│✧ spooky 🅟 
│✧ pencil 🅟 
│✧ circuit 🅟 
│✧ discovery 🅟 
│✧ metalic 🅟 
│✧ fiction 🅟 
│✧ demon 🅟 
│✧ transformer 🅟 
│✧ berry 🅟 
│✧ thunder 🅟 
│✧ magma 🅟 
│✧ 3dstone 🅟 
│✧ neonlight 🅟 
│✧ glitch 🅟 
│✧ harrypotter 🅟 
│✧ brokenglass 🅟 
│✧ papercut 🅟 
│✧ watercolor 🅟 
│✧ multicolor 🅟 
│✧ neondevil 🅟 
│✧ underwater 🅟 
│✧ graffitibike 🅟
│✧ snow 🅟 
│✧ cloud 🅟 
│✧ honey 🅟 
│✧ ice 🅟 
│✧ fruitjuice 🅟 
│✧ biscuit 🅟 
│✧ wood 🅟 
│✧ chocolate 🅟 
│✧ strawberry 🅟 
│✧ matrix 🅟 
│✧ blood 🅟 
│✧ dropwater 🅟 
│✧ toxic 🅟 
│✧ lava 🅟 
│✧ rock 🅟 
│✧ bloodglas 🅟 
│✧ hallowen 🅟 
│✧ darkgold 🅟 
│✧ joker 🅟 
│✧ wicker 🅟
│✧ firework 🅟 
│✧ skeleton 🅟 
│✧ blackpink 🅟 
│✧ sand 🅟 
│✧ glue 🅟 
│✧ 1917 🅟 
│✧ leaves 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Photo Oxy 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ shadow 🅟 
│✧ write 🅟 
│✧ romantic 🅟 
│✧ burnpaper 🅟
│✧ smoke 🅟 
│✧ narutobanner 🅟 
│✧ love 🅟 
│✧ undergrass 🅟
│✧ doublelove 🅟 
│✧ coffecup 🅟
│✧ underwaterocean 🅟
│✧ smokyneon 🅟
│✧ starstext 🅟
│✧ rainboweffect 🅟
│✧ balloontext 🅟
│✧ metalliceffect 🅟
│✧ embroiderytext 🅟
│✧ flamingtext 🅟
│✧ stonetext 🅟
│✧ writeart 🅟
│✧ summertext 🅟
│✧ wolfmetaltext 🅟
│✧ nature3dtext 🅟
│✧ rosestext 🅟
│✧ naturetypography 🅟
│✧ quotesunder 🅟
│✧ shinetext 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Ephoto 360 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ glitchtext 🅟
│✧ writetext 🅟
│✧ advancedglow 🅟
│✧ typographytext 🅟
│✧ pixelglitch 🅟
│✧ neonglitch 🅟
│✧ flagtext 🅟
│✧ flag3dtext 🅟
│✧ deletingtext 🅟
│✧ blackpinkstyle 🅟
│✧ glowingtext 🅟
│✧ underwatertext 🅟
│✧ logomaker 🅟
│✧ cartoonstyle 🅟
│✧ papercutstyle 🅟
│✧ watercolortext 🅟
│✧ effectclouds 🅟
│✧ blackpinklogo 🅟
│✧ gradienttext 🅟
│✧ summerbeach 🅟
│✧ luxurygold 🅟
│✧ multicoloredneon 🅟
│✧ sandsummer 🅟
│✧ galaxywallpaper 🅟
│✧ 1917style 🅟
│✧ makingneon 🅟
│✧ royaltext 🅟
│✧ freecreate 🅟
│✧ galaxystyle 🅟
│✧ lighteffects 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Random Cerpen 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ cerpen_sejarah 🅟
│✧ cerpen_sedih 🅟
│✧ cerpen_sastra 🅟
│✧ cerpen_romantis 🅟
│✧ cerpen_rohani 🅟
│✧ cerpen_rindu 🅟
│✧ cerpen_remaja 🅟
│✧ cerpen_ramadhan 🅟
│✧ cerpen_petualangan 🅟
│✧ cerpen_persahabatan 🅟
│✧ cerpen_perpisahan 🅟
│✧ cerpen_perjuangan 🅟
│✧ cerpen_penyesalan 🅟
│✧ cerpen_pengorbanan 🅟
│✧ cerpen_pengalaman 🅟
│✧ cerpen_pendidikan 🅟
│✧ cerpen_penantian 🅟
│✧ cerpen_patahhati 🅟
│✧ cerpen_olahraga 🅟
│✧ cerpen_nasionalisme 🅟
│✧ cerpen_nasihat 🅟
│✧ cerpen_motivasi 🅟
│✧ cerpen_misteri 🅟
│✧ cerpen_mengharukan 🅟
│✧ cerpen_malaysia 🅟
│✧ cerpen_liburan 🅟
│✧ cerpen_kristen 🅟
│✧ cerpen_korea 🅟
│✧ cerpen_kisahnyata 🅟
│✧ cerpen_keluarga 🅟
│✧ cerpen_kehidupan 🅟
│✧ cerpen_jepang 🅟
│✧ cerpen_inspiratif 🅟
│✧ cerpen_gokil 🅟
│✧ cerpen_galau 🅟
│✧ cerpen_cintasejati 🅟
│✧ cerpen_cintasegitiga 🅟
│✧ cerpen_cintasedih 🅟
│✧ cerpen_cintaromantis 🅟
│✧ cerpen_cintapertama 🅟
│✧ cerpen_cintaislami 🅟
│✧ cerpen_cinta 🅟
│✧ cerpen_budaya 🅟
│✧ cerpen_bahasasunda 🅟
│✧ cerpen_bahasajawa 🅟
│✧ cerpen_bahasainggris 🅟
│✧ cerpen_bahasadaerah 🅟
│✧ cerpen_anak 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Random Video 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ asupan 🅟
│✧ bocil 🅟
│✧ rikagusriani 🅟
│✧ hentavid 🅟
│✧ jjmeryani 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
  「 Stalker Menu 」
┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ igstalk 🅟
│✧ ffstalk 🅟
│✧ mlstalk 🅟
│✧ npmstalk 🅟
│✧ ghstalk 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.ownermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ bc 🅞
│✧ join 🅞
│✧ shutdown 🅞
│✧ autodltt 🅞
│✧ autosticker 🅞
│✧ setppbot 🅞
│✧ addprem 🅞
│✧ delprem 🅞
│✧ addowner 🅞
│✧ delowner 🅞
│✧ addlist 🅞
│✧ dellist 🅞
│✧ updatelist 🅞
│✧ listnya 🅞
│✧ addvn 🅞
│✧ delvn 🅞
│✧ listvn 🅞
│✧ ban add 🅞
│✧ ban del 🅞
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.othermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ owner 🅕
│✧ jadibot 🅟
│✧ listjadibot 🅟
│✧ donasi 🅕
│✧ listpremium 🅕
│✧ buypremium 🅕
│✧ jadiowner 🅕
│✧ sewabot 🅕
│✧ cekme 🅕
│✧ obfus 🅕
│✧ styletext 🅕
│✧ tts 🅕
│✧ tourl 🅕
│✧ tovn 🅕
│✧ toaudio 🅕
│✧ tomp3 🅕
│✧ toimg 🅕
│✧ toonce 🅕
│✧ sticker 🅕
│✧ smeme 🅕
│✧ snobg 🅕
│✧ menfes 🅕
│✧ leave 🅕
│✧ ebinary 🅕
│✧ dbinary 🅕
│✧ cariresep 🅕
│✧ bacaresep 🅕
│✧ ssweb 🅕
│✧ wasted 🅕
│✧ comrade 🅕
│✧ horny 🅕
│✧ blur 🅕
│✧ pixelate 🅕
│✧ simpcard 🅕
│✧ lolice 🅕
│✧ gay 🅕
│✧ jail 🅕
│✧ quoted 🅕
│✧ caridoi 🅟
│✧ cariteman 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.downloadmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ tiktokvideo 🅕
│✧ tiktokaudio 🅕
│✧ ytsearch 🅕
│✧ play 🅕
│✧ ytmp3 🅕
│✧ ytmp4 🅕
│✧ googles 🅕
│✧ happymod 🅕
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.bugmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Bug Menu
│✧ send 🅞
│✧ spambugvip 🅞
│✧ santetpc 🅞
│✧ santetgc 🅞
│✧ santetpcparah 🅞
│✧ santetgcparah 🅞
│✧ sendbug 🅞
│✧ senddoc 🅞
│✧ sendloc 🅞
│✧ kaystick 🅞
│✧ kayteks 🅞
│✧ kayitem 🅞
│✧ kaylog 🅞
│✧ kaykontak 🅞
│✧ kayloc 🅞
│✧ kaydoc 🅞
│✧ kayvn 🅞
│✧ vote 🅞
│✧ stickgas 🅞
│✧ itemgas 🅞
│✧ cataloggas 🅞
│✧ docgas 🅞
│✧ kongas 🅞
│✧ vngas 🅞
│✧ teksgas 🅞
│✧ locgas 🅞
│✧ crash 🅞
│✧ jagoan 🅞
│✧ jagoanneon 🅞
`}

global.groupmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ antilink 🅖
│✧ antiwame 🅖
│✧ add 🅖
│✧ kick 🅖
│✧ promote 🅖
│✧ demote 🅖
│✧ hidetag 🅖
│✧ tagall 🅖
│✧ opentime 🅖
│✧ closetime 🅖
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.funmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ memek 🅖
│✧ bego 🅖
│✧ goblok 🅖
│✧ janda 🅖
│✧ perawan 🅖
│✧ babi 🅖
│✧ tolol 🅖
│✧ pinter 🅖
│✧ pintar 🅖
│✧ asu 🅖
│✧ bodoh 🅖
│✧ gay 🅖
│✧ lesby 🅖
│✧ bajingan 🅖
│✧ jancok 🅖
│✧ anjing 🅖
│✧ ngentod 🅖
│✧ ngentot 🅖
│✧ monyet 🅖
│✧ mastah 🅖
│✧ newbie 🅖
│✧ bangsat 🅖
│✧ bangke 🅖
│✧ sange 🅖
│✧ sangean 🅖
│✧ dakjal 🅖
│✧ horny 🅖
│✧ wibu 🅖
│✧ puki 🅖
│✧ peak 🅖
│✧ pantex 🅖
│✧ pantek 🅖
│✧ setan 🅖
│✧ iblis 🅖
│✧ cacat 🅖
│✧ yatim 🅖
│✧ piatu 🅖
│✧ goblokcek 🅖
│✧ jelekcek 🅖
│✧ gaycek 🅖
│✧ rate 🅖
│✧ lesbicek 🅖
│✧ gantengcek 🅖
│✧ cantikcek 🅖
│✧ begocek 🅖
│✧ suhucek 🅖
│✧ pintercek 🅖
│✧ jagocek 🅖
│✧ nolepcek 🅖
│✧ babicek 🅖
│✧ bebancek 🅖
│✧ baikcek 🅖
│✧ jahatcek 🅖
│✧ anjingcek 🅖
│✧ haramcek 🅖
│✧ pakboycek 🅖
│✧ pakgirlcek 🅖
│✧ sangecek 🅖
│✧ bapercek 🅖
│✧ fakboycek 🅖
│✧ alimcek 🅖
│✧ suhucek 🅖
│✧ fakgirlcek 🅖
│✧ kerencek 🅖
│✧ wibucek 🅖
│✧ pasarkascek 🅖
│✧ kulcek 🅖                
│✧ cekgoblok 🅖
│✧ cekjelek 🅖
│✧ cekgay 🅖                
│✧ ceklesbi 🅖
│✧ cekganteng 🅖
│✧ cekcantik 🅖
│✧ cekbego 🅖
│✧ ceksuhu 🅖
│✧ cekpinter 🅖
│✧ cekjago 🅖
│✧ ceknolep 🅖
│✧ cekbabi 🅖
│✧ cekbeban 🅖
│✧ cekbaik 🅖
│✧ cekjahat 🅖
│✧ cekanjing 🅖
│✧ cekharam 🅖
│✧ cekpakboy 🅖
│✧ cekpakgirl 🅖
│✧ ceksange 🅖
│✧ cekbaper 🅖
│✧ cekfakboy 🅖
│✧ cekalim 🅖
│✧ ceksuhu 🅖
│✧ cekfakgirl 🅖
│✧ cekkeren 🅖
│✧ cekwibu 🅖
│✧ cekpasarkas 🅖
│✧ cekkul 🅖
│✧ cekbapak 🅖
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.stalkermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ igstalk 🅟
│✧ ffstalk 🅟
│✧ mlstalk 🅟
│✧ npmstalk 🅟
│✧ ghstalk 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.randfotomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ aesthetic 🅟
│✧ ahegao 🅟
│✧ akira 🅟
│✧ akiyama 🅟
│✧ ana 🅟
│✧ anjing 🅟
│✧ art 🅟
│✧ ass 🅟
│✧ asuna 🅟
│✧ ayuzawa 🅟
│✧ bdsm 🅟
│✧ boneka 🅟
│✧ boruto 🅟
│✧ bts 🅟
│✧ cecan 🅟
│✧ chiho 🅟
│✧ chitoge 🅟
│✧ cogan 🅟
│✧ cosplay 🅟
│✧ cosplayloli 🅟
│✧ cosplaysagiri 🅟
│✧ cuckold 🅟
│✧ cum 🅟
│✧ cyber 🅟
│✧ darkjokes 🅟
│✧ deidara 🅟
│✧ doraemon 🅟
│✧ eba 🅟
│✧ elaina 🅟
│✧ emilia 🅟
│✧ ero 🅟
│✧ erza 🅟
│✧ exo 🅟
│✧ femdom 🅟
│✧ foot 🅟
│✧ freefire 🅟
│✧ gamewallpaper 🅟
│✧ gangbang 🅟
│✧ gifs 🅟
│✧ glasses 🅟
│✧ gremory 🅟
│✧ hekel 🅟
│✧ hentai 🅟
│✧ hestia 🅟
│✧ hijaber 🅟
│✧ hinata 🅟
│✧ husbu 🅟
│✧ inori 🅟
│✧ islamic 🅟
│✧ isuzu 🅟
│✧ itachi 🅟
│✧ itori 🅟
│✧ jahy 🅟
│✧ jeni 🅟
│✧ jiso 🅟
│✧ justina 🅟
│✧ kaga 🅟
│✧ kagura 🅟
│✧ kakasih 🅟
│✧ kaori 🅟
│✧ kartun 🅟
│✧ katakata 🅟
│✧ keneki 🅟
│✧ kotori 🅟
│✧ kpop 🅟
│✧ kucing 🅟
│✧ kurumi 🅟
│✧ lisa 🅟
│✧ loli 🅟
│✧ madara 🅟
│✧ masturbation 🅟
│✧ megumin 🅟
│✧ mikasa 🅟
│✧ mikey 🅟
│✧ miku 🅟
│✧ milf 🅟
│✧ minato 🅟
│✧ mobil 🅟
│✧ motor 🅟
│✧ mountain 🅟
│✧ naruto 🅟
│✧ neko 🅟
│✧ neko2 🅟
│✧ nekonime 🅟
│✧ nezuko 🅟
│✧ onepiece 🅟
│✧ orgy 🅟
│✧ panties 🅟
│✧ pentol 🅟
│✧ pokemon 🅟
│✧ profil 🅟
│✧ programming 🅟
│✧ pubg 🅟
│✧ pussy 🅟
│✧ randblackpink 🅟
│✧ randomnime 🅟
│✧ randomnime2 🅟
│✧ rize 🅟
│✧ rose 🅟
│✧ ryujin 🅟
│✧ sagiri 🅟
│✧ sakura 🅟
│✧ sasuke 🅟
│✧ satanic 🅟
│✧ shina 🅟
│✧ shinka 🅟
│✧ shinomiya 🅟
│✧ shizuka 🅟
│✧ shota 🅟
│✧ tatasurya 🅟
│✧ technology 🅟
│✧ tejina 🅟
│✧ tentacles 🅟
│✧ thighs 🅟
│✧ toukachan 🅟
│✧ tsunade 🅟
│✧ waifu 🅟
│✧ wallhp 🅟
│✧ wallml 🅟
│✧ wallnime 🅟
│✧ yotsuba 🅟
│✧ yuki 🅟
│✧ yulibocil 🅟
│✧ yumeko 🅟
│✧ fox 🅟  
│✧ dog 🅟  
│✧ cat 🅟
│✧ panda 🅟  
│✧ birb 🅟 
│✧ koala 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.randvideomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ asupan 🅟
│✧ bocil 🅟
│✧ rikagusriani 🅟
│✧ hentavid 🅟
│✧ jjmeryani 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.textpromenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ candy 🅟 
│✧ christmas 🅟 
│✧ 3dchristmas 🅟 
│✧ sparklechristmas 🅟
│✧ deepsea 🅟 
│✧ scifi 🅟 
│✧ rainbow 🅟 
│✧ waterpipe 🅟 
│✧ spooky 🅟 
│✧ pencil 🅟 
│✧ circuit 🅟 
│✧ discovery 🅟 
│✧ metalic 🅟 
│✧ fiction 🅟 
│✧ demon 🅟 
│✧ transformer 🅟 
│✧ berry 🅟 
│✧ thunder 🅟 
│✧ magma 🅟 
│✧ 3dstone 🅟 
│✧ neonlight 🅟 
│✧ glitch 🅟 
│✧ harrypotter 🅟 
│✧ brokenglass 🅟 
│✧ papercut 🅟 
│✧ watercolor 🅟 
│✧ multicolor 🅟 
│✧ neondevil 🅟 
│✧ underwater 🅟 
│✧ graffitibike 🅟
│✧ snow 🅟 
│✧ cloud 🅟 
│✧ honey 🅟 
│✧ ice 🅟 
│✧ fruitjuice 🅟 
│✧ biscuit 🅟 
│✧ wood 🅟 
│✧ chocolate 🅟 
│✧ strawberry 🅟 
│✧ matrix 🅟 
│✧ blood 🅟 
│✧ dropwater 🅟 
│✧ toxic 🅟 
│✧ lava 🅟 
│✧ rock 🅟 
│✧ bloodglas 🅟 
│✧ hallowen 🅟 
│✧ darkgold 🅟 
│✧ joker 🅟 
│✧ wicker 🅟
│✧ firework 🅟 
│✧ skeleton 🅟 
│✧ blackpink 🅟 
│✧ sand 🅟 
│✧ glue 🅟 
│✧ 1917 🅟 
│✧ leaves 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.photooxymenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ shadow 🅟 
│✧ write 🅟 
│✧ romantic 🅟 
│✧ burnpaper 🅟
│✧ smoke 🅟 
│✧ narutobanner 🅟 
│✧ love 🅟 
│✧ undergrass 🅟
│✧ doublelove 🅟 
│✧ coffecup 🅟
│✧ underwaterocean 🅟
│✧ smokyneon 🅟
│✧ starstext 🅟
│✧ rainboweffect 🅟
│✧ balloontext 🅟
│✧ metalliceffect 🅟
│✧ embroiderytext 🅟
│✧ flamingtext 🅟
│✧ stonetext 🅟
│✧ writeart 🅟
│✧ summertext 🅟
│✧ wolfmetaltext 🅟
│✧ nature3dtext 🅟
│✧ rosestext 🅟
│✧ naturetypography 🅟
│✧ quotesunder 🅟
│✧ shinetext 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.ephoto360menu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ glitchtext 🅟
│✧ writetext 🅟
│✧ advancedglow 🅟
│✧ typographytext 🅟
│✧ pixelglitch 🅟
│✧ neonglitch 🅟
│✧ flagtext 🅟
│✧ flag3dtext 🅟
│✧ deletingtext 🅟
│✧ blackpinkstyle 🅟
│✧ glowingtext 🅟
│✧ underwatertext 🅟
│✧ logomaker 🅟
│✧ cartoonstyle 🅟
│✧ papercutstyle 🅟
│✧ watercolortext 🅟
│✧ effectclouds 🅟
│✧ blackpinklogo 🅟
│✧ gradienttext 🅟
│✧ summerbeach 🅟
│✧ luxurygold 🅟
│✧ multicoloredneon 🅟
│✧ sandsummer 🅟
│✧ galaxywallpaper 🅟
│✧ 1917style 🅟
│✧ makingneon 🅟
│✧ royaltext 🅟
│✧ freecreate 🅟
│✧ galaxystyle 🅟
│✧ lighteffects 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

global.cerpenmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

┏┈┈┈┈┈┈┈┈┈┈┈┈┈ᭁ
│✧ cerpen_sejarah 🅟
│✧ cerpen_sedih 🅟
│✧ cerpen_sastra 🅟
│✧ cerpen_romantis 🅟
│✧ cerpen_rohani 🅟
│✧ cerpen_rindu 🅟
│✧ cerpen_remaja 🅟
│✧ cerpen_ramadhan 🅟
│✧ cerpen_petualangan 🅟
│✧ cerpen_persahabatan 🅟
│✧ cerpen_perpisahan 🅟
│✧ cerpen_perjuangan 🅟
│✧ cerpen_penyesalan 🅟
│✧ cerpen_pengorbanan 🅟
│✧ cerpen_pengalaman 🅟
│✧ cerpen_pendidikan 🅟
│✧ cerpen_penantian 🅟
│✧ cerpen_patahhati 🅟
│✧ cerpen_olahraga 🅟
│✧ cerpen_nasionalisme 🅟
│✧ cerpen_nasihat 🅟
│✧ cerpen_motivasi 🅟
│✧ cerpen_misteri 🅟
│✧ cerpen_mengharukan 🅟
│✧ cerpen_malaysia 🅟
│✧ cerpen_liburan 🅟
│✧ cerpen_kristen 🅟
│✧ cerpen_korea 🅟
│✧ cerpen_kisahnyata 🅟
│✧ cerpen_keluarga 🅟
│✧ cerpen_kehidupan 🅟
│✧ cerpen_jepang 🅟
│✧ cerpen_inspiratif 🅟
│✧ cerpen_gokil 🅟
│✧ cerpen_galau 🅟
│✧ cerpen_cintasejati 🅟
│✧ cerpen_cintasegitiga 🅟
│✧ cerpen_cintasedih 🅟
│✧ cerpen_cintaromantis 🅟
│✧ cerpen_cintapertama 🅟
│✧ cerpen_cintaislami 🅟
│✧ cerpen_cinta 🅟
│✧ cerpen_budaya 🅟
│✧ cerpen_bahasasunda 🅟
│✧ cerpen_bahasajawa 🅟
│✧ cerpen_bahasainggris 🅟
│✧ cerpen_bahasadaerah 🅟
│✧ cerpen_anak 🅟
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈༓᭄
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})