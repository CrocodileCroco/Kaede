const Discord = require('discord.js');
const client = new Discord.Client();
var date = new Date();
var current_hour = date.getHours();
const prefix = "!";
let price = require('crypto-price')
var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();
var bossla = 0;
var bossvie = 100;
var clicker = 0;
var logka = 0;
var doorgame = 0;
var doorandom = 0;
var doorist = ['lol'];
var doorlast = "nobody";
var hostilelevel = 0;
var doorhammer = 0;
var doorcoins = 0;

//test
//test 2
//a

var hostilegtext = [
  "Jean",
  "Eddy",
  "Le Fort Du Monde",
  "The Boss",
  "Boss",
  "Za",
  "Thanorio",
  "Chocapic King",
  "La légende du trofor",
  "Le rasta",
  "Sopiké",
  "Genocidaire",
  "Intuable",
  "Abraham",
  "LapinouDeTesMorts",
  "J'aime-les-placement-de-produit",
  "Jean-lourd",
  "Tartinage",
  "Nounours-clasheur",
  "JeBouffeMcdoMcJerry",
  "Présentateur-télé",
  "Le Roi",
  "Qui-mange-des-spaghettis",
  "Knuckles",
  "Furry-LGBT",
  "Fetichiste",
  "Mange-tout",
  "Explosif",
  "Surnois",
  "En-forme-de-tnt-minecraft",
  "Personnage d'object show",
  "Gros-fan-de-BFDI",
  "Codeur",
  "Mange-sandwich-seulement",
  "Tonerre",
  "Orangeant Orageux Orage",
  "Eddyface",
  "Saoulant",
  "Lynx",
  "Développeur",
  "Chat",
  "Renard-furry",
  "De la ville de gland",
  "Undertale",
  "Gaming",
  "Cyprien",
  "Squeezie",
  "Tartinex",
  "Natoo",
  "Joue-du-Saxophone",
  "Epic Sax",
  "Pas-commun",
  "Commun",
  "Très Smirk :smirk:",
  "Restaurateur",
  "Insulteur",
  "Raciste",
  "Joueur-de-flute",
  "CLOWNORIGOLO",
  "Noraj-man",
  "J'aime-la-paix",
  "Fétichiste de DeviantART La!",
  "PasFort",
  "Nuclear",
  "Extreme Chaos",
  "Topinanboure",
  "JAIMEZAIUS",
  "Zapdexio",
  "Kepa64",
  "LOKATAIIIIIIIIIIIR",
  "PROPRIETAIIIIIIIIIIIR",
  "Linuxien",
  "Bouffe-tout",
  "ChanteurDeLopéra",
  "Avec-Un-TShirt-Sanic",
  "PasNormie",
  "Roulmandetanboureuh",
  "Marmite is terrible",
  "ULTRADANGEREUX :warning:",
  "Croustinews",
  "YTPMV SCAN",
  "Les Inexusibles de android",
  "Power Rangers",
  "transformé en pokémon tout mignon",
  "IlAimeLesTransformation",
  "MANGEDUNUGGETS",
  "Placeur de Produit dans ses vidéos youtube la",
  "Farod Gamms La",
  "Kiyu",
  "Paulok",
  "Lopoke",
  "Leo de la chaine techmaker",
  "Kidpaddleetcie",
  "CanalPLUS",
  "TF1",
  "M6",
  "Poney",
  "Furry mais mignon",
  "Tchoupi",
  "TheKairi78",
  "Top Inambour",
  "SALE VILAIN",
  "Powerpoint",
  "Professionel qui fait des conventions la",
  "Furby",
  "Je Code en Python!!!!!!!!!!!!!!",
  "MLG",
  "Mouton",
  "Oiseau",
  "Ornitorynque",
  "éponge-carré",
  "étoile de mer",
  "poisson",
  "éducationnel",
  "Jotaro",
  "Star Platinum",
  "Za Warudo",
  "NE MAPELE PA DONNIE GRO NULLEU",
  "Chanceux",
  "PasChanceux",
  "Manimak",
  "Horrible",
  "Myope",
  "PorteLunettes",
  "Multimilliardaire grace au cryptomonnaies comme le bitcoin ou autres truc du genre",
  "DESPACITO",
  "Damé tu coznito!",
  "SPONSORIZAI ORANGINEAU",
  "Pichu",
  "EnPersoDeAnime",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLOBAMADOLASAMAROLATAGOUAHHHHHHHHHHHHH",
  "Roblox",
  "JoueurProDeTetris",
  "Speedrunner",
  "Pro de la TNT",
  "LE GRAND LE MAGNIFIQUE LE MAITRE LE SPLENDIDE LINCROYABLE LINOUBLIABLE ET LE PLUS FORT",
  "Joker",
  "YTPMViste (donc c bien)",
  "éponge rond",
  "BUVEZ ORANGINO",
  "Chef De Entreprise",
  "Discordien (toi tu lé lol)",
  "Nutritionniste",
  "Sportif",
  "Patron",
  "ARNAQUEUR",
  "VRAIMENT GENTIL",
  "Avec La Voix du Heavy dans TF2",
  "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEYYYYMACARENA"
]

var mikiti = [
  "**Mikit trouve que tu n'es pas locataire**",
  "Il ne faut pas être un vilain mikit, mikit cher locataire",
  "Locataire... Tu n'es pas aussi drole que moi :|",
  "Locataire... C'est vraiment sympa de t'avoir rencontré, mais **SAUPIQUET EST UN MEME MORT** mikit.",
  "Ne te décourage pas mon cher locataire, mikit te soutiens dans ton aventure",
  "Locataire, la richesse viendra vers toi un jour",
  "Locataire, utilise mon délire, tu sera connu après, locataire.",
  "Croyez Moi Locataire, je ne fait qu'essayez de vous faire rire avec mon délire, n'aviez vous pas découvert toute les vidéos mikit?",
  "Locataire, c'est pas facile de ne pas avoir de la richesse en euro, la revente vous fera de la richesse je l'espère",
  "Locataire, ce n'est pas facile de payer les impôts, courage."
]

var delircalc = [
  "Ce délire tiendra 1 jour",
  "Ce délire tiendra 3 jours",
  "Ce délire tiendra 1 mois",
  "Ce délire tiendra 2 mois",
  "Ce délire est invincible",
  "Ce délire tiendra 9 mois",
  "Ce délire est éternel mais périmation possible",
  "Ce délire tiendra 1 heure",
  "Ce délire est nul, ce n'est donc pas un bon délire",
  "Ce délire EST NUL POUR TOUJOURS MOUAHAHA",
  "Ce délire est aussi nul que les lapins crétins",
  "Ce délire tiendra 1 an",
  "Ce délire tiendra 2 an",
  "Ce délire est mort si quelqun écris patate après mon message",
  "TON DELIRE EST INVALIDE",
  "Tu veut me faire rigoler ou quoi mdr? Ton délire est aussi nul que le délire sauce ET SERA PROBABLEMENT **JAMAIS** UN DELIRE LOL",
  "Même bill gates il a rigolé, ton délire est nul",
  "Ton délire, c est de la poudre de bide-impimpim",
  "BOOM! ton délire tiendra 3 ans!",
  "Mouais 2 minutes ton délire tiendra",
  "Ce délire tiendra 1 milliseconde",
  "Ce délire tiendra même pas 1 milliseconde",
  "Tu es le roi des délires, ton délire tiendra 9 ans",
  "Mikit était mieux que ton délire",
  "Sauce? MDR C UN DELIR NUL",
  "TON DELIRE A PROVOQUER UNE ERREUR DANS MON SYSTEME!",
  "Ton délire est aussi nul que fortnite, TON DELIRE EST NUL",
  "Scan du délire en cours... c'est un délire nul, 0/10 et ton délire sera jamais un délire, scan terminé",
  "KefKifPaf? Les délires nul de l'apéro ! (ton délire est nul)",
  "Ce délire tiendra 10000000000000000000000000000000000000000000000000000000000 ans",
  "Ce délire est milhouse donc pas un meme !",
  "Mikit dit : Ton délire est vraiment vraiment VRAIMENT **VRAIMENT** nul.",
  "Une menace a été détecté : Virus.DélirePérimé",
  "JE SUIS MALADE A CAUSE DE TON DELIRE",
  "**DELIRE DE LOKATAIR! NUL**"
]

var nomjeu = [
  "Cuphead",
  "Sonic",
  "Dessine Ton Aventure",
  "Kirby",
  "Megaman",
  "Zelda",
  "F-ZaiRO",
  "Jak And Daxter",
  "Sly Cooper",
  "Klonoa",
  "Re-Volt"
]

var jeu2 = [
  "avec un éditeur de niveau",
  ".",
  "multijoueur en ligne",
  "inspiré de splatoon",
  "sur switch",
  "compétitif"
]

var verity1 = [
  "Zapdexio",
  "ZiJo",
  "La Redbox",
  "Wikipédia",
  "Facebook",
  "Twitter",
  "Mastodon",
  "Roblox",
  "Despacito",
  "Maplestory",
  "Klonoa",
  "Les Vidéos YTPMV Scans",
  "Tony Yoka",
  "Les placements de produits",
  "La publicité",
  "Les Furries",
  "Dr Zaius",
  "Le Délire Onque",
  "Adibou",
  "Adiboudchou",
  "LL Productions FR",
  "Vinesauce",
  "Dadyday",
  "M6",
  "TF1",
  "TF1 SERIES FILM",
  "Sploon"
]

var verity2 = [
  "est un placement de produit de SFR!",
  "est une société mal intentionné",
  "est une société secrète du complot",
  "est chez free! :angry:",
  "est un placement de produit de TéléShopping!",
  "est un réseau venant des profondeurs du web!",
  "est secretement une marque!",
  "gagnent 1 milliards par mois!",
  "ont déja arnaqué au moins une fois en tant que entreprise!",
  "est une société elsagate!",
  "est une seule personne!!"
]

var eske = [
  "Je te répond Oui!",
  "euhhh Non",
  "Peut être !",
  "Surement",
  "Pas du tout",
  "Je ne sais pas",
  "Absolument !",
  "Absolument Pas!!"
  ]

var probly = [
  "C'est Hyper Improbable",
  "C'est Moyen Improbable",
  "C'est Plutôt Improbable",
  "C'est Improbable",
  "C'est Probable",
  "C'est Plutôt Probable",
  "C'est Moyen Probable",
  "C'est Hyper Probable"
  ]

var modechiant = [
  "Au secours!",
  "Quel bide!",
  "J'ai jamais vu une chose pareille!",
  "D'accord!",
  "Je veut ta réponse!",
  "Envoie moi un MP toi!",
  "LALALALALALALAOALOALALOALOALOALOA",
  "EUGAGA",
  "T'a trop bu mon gars",
  "ALALALALALAAAAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRR",
  "ONCHE"
  ]

var phrs1 = [
  "Hé Toi!",
  "Il parait que",
  "On s'en doutais",
  "Disons que",
  "Il était une fois",
  "Sans faire exprès"
  ]

var phrs2 = [
  "Mikit",
  "Jean Luc Reichmann",
  "Dadyday",
  "Supergustin",
  "Von Blitz",
  "Gaston Molotof",
  "Le Platypus",
  "Canard VC en Colère",
  "Lilluzion",
  "Le Lorax",
  "Shinoyoruka",
  "Pierre Caillou",
  "Jean Paté",
  "rigolestp",
  "Chadtronic",
  "PeanutButterGamer",
  "SMG4",
  "Pewdiepie",
  "LinksTheSun",
  "Squeezie",
  "Cyprien",
  "Narouxto",
  "Sonirika La Seule Tee Qui n'est pas un mec",
  "enzocosmos",
  "lolipopcorn",
  "DarkDadyday",
  "Kidpaddleetcie",
  "Rayman",
  "Globox",
  "Inspecteur Gadget",
  "Sonic",
  "Tails",
  "Daydady le clone vilain de dadyday",
  "Un Tee",
  "Un Furry",
  "Un Fursuiter"
  ]

var phrs3 = [
  "a",
  "avait",
  "viens de",
  "a bu en",
  "sans arrêt",
  "pour la justice viens de",
  "lancer des tnt sur les creepers et puis il"
  ]

var phrs4 = [
  "tuer",
  "boire",
  "chanter avec",
  "mettre KO",
  "exploser",
  "mitrailler bombarder tuer assassiner",
  "périmer le délire de",
  "faire l'amour avec",
  "jeter dans le puit",
  "enterrer",
  "dessiner du r34 de",
  "salsifisifier",
  "manger les cookies de"
  ]

var phrs5 = [
  "Indéfiniment",
  "Tout les 2 jours",
  "Sans Arrêt",
  "Pour Rien",
  "Pour la justice",
  "Pour danser"
  ]

var mdchiant = 0;

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'Délire Simulator | !web for help', type: 0 } });
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'rageux') {
    	message.reply('je suis literallement en trains de rire sur ta face');
  	}
});


client.on('message', message => {
    if (message.content === 'horloge') {
        var current_hour = date.getHours();
    	message.reply('Il est ' + current_hour + ' heures aujourdhui');
  	}
});

client.on('message', message => {
    if (message.content === 'k!chinese') {
    	message.reply('CHINESE CHINESE CHINESE , ANYTHING GOES.. EVEN CHINESE! http://i0.kym-cdn.com/entries/icons/original/000/022/632/CHINESE.jpg');
  	}
});

client.on('message', message => {
    if (message.content === '!bigmac') {
    	message.reply('http://i.cubeupload.com/fnlXfP.png big mac pliz');
  	}
});

client.on('message', message => {
    if (message.content === '!bigmacpliz') {
    	message.reply('http://i.cubeupload.com/fnlXfP.png big mac pliz');
  	}
});

client.on('message', message => {
    if (message.content === '!bigmacplz') {
    	message.reply('http://i.cubeupload.com/fnlXfP.png big mac pliz');
  	}
});

client.on('message', message => {
    if (message.content === 'SOMEBODY TOUCHA MY SPAGHETT') {
    	message.reply('http://i0.kym-cdn.com/photos/images/newsfeed/001/332/955/58e.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!excellent') {
    	message.reply('https://static.comicvine.com/uploads/square_medium/0/4772/151575-47591-mr-burns.jpg');
  	}
});

client.on('message', message => {
    if (message.content === '!zaius') {
    	message.reply('https://i.pinimg.com/originals/80/e2/59/80e259486e8ddb121b416602524b3c89.jpg EXCELLENT');
  	}
});

client.on('message', message => {
    if (message.content === '!zaius2') {
    	message.reply('https://im-01.gifer.com/fetch/w300-preview/d1/d1b2f392af965a301b00f38d33d08990.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!zaiusohnodude') {
    	message.reply('https://i.pinimg.com/originals/46/37/06/463706b1a9e56ad3cde2f37d13c15f9d.png');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji fox') {
    	message.channel.send('https://fthmb.tqn.com/ROC5xD9jkOwXHXms6oA3KzICeAI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/iphonex_animoji_fox-59dd137c03f4020010a60b54.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji poop') {
    	message.channel.send('https://worldissmall.fr/wp-content/uploads/2017/10/animoji-poo-caca.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji monkey') {
    	message.channel.send('https://cdn.makeuseof.com/wp-content/uploads/2017/12/emoji_monkey.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji rabbit') {
    	message.channel.send('https://emojipedia-us.s3.amazonaws.com/content/2017/09/21/animoji-rabbit-emojipedia.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji lion') {
    	message.channel.send('http://media.idownloadblog.com/wp-content/uploads/2018/01/iOS-11.3-lion-Animoji.png');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji chicken') {
    	message.channel.send('http://media.idownloadblog.com/wp-content/uploads/2017/11/Animoji-to-gif-example.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji cat') {
    	message.channel.send('https://cdn.makeuseof.com/wp-content/uploads/2017/12/emoji_cat.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji help') {
    	message.channel.send('Animojis Disponible : cat, chicken, lion, rabbit, poop, monkey, fox');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji poisson') {
    	message.channel.send('https://78.media.tumblr.com/8f0beb90a033e02e6a3292887a864659/tumblr_osdyr7KCW81u2x70wo2_400.png Miaou ! Dommage! Tu as 0.00000000001% de chance de pouvoir avoir un poisson! Joyeux chat du mois de avril');
  	}
});

client.on('message', message => {
    if (message.content === '!animoji carpe') {
    	message.channel.send('https://i.pinimg.com/736x/5f/1a/70/5f1a703fc393e95c9d89bc389833df0e--funny-cat-faces-emoticon.jpg oh mince j"ai oublié que tu voulais une carpe, miaou d"avril miahaha');
  	}
});

//client.on('message', message => {
//    if (message.content === '@everyone') {
//    	message.reply('<:png1:469889200783622154> :angry: **MAIS DE OU TU PING LA** :angry: <:png1:469889200783622154>');
//  	}
//});

//client.on('message', message => {
//    if (message.content === '@here') {
//    	message.reply('<:png1:469889200783622154> :angry: **MAIS DE OU TU PING LA** :angry: <:png1:469889200783622154>');
//  	}
//});

client.on('message', message => {
    if (message.content === 't!ouinon') {
    	message.channel.send('t!choose oui | non');
  	}
});

client.on('message', message => {
    if (message.content === '!stck') {
    	message.channel.send('Stickers List : eddy, fenneko, ptp (zapdexio) | If you want sticker list of eddy (for example), type !stck eddy list');
  	}
});

client.on('message', message => {
    if (message.content === '!stck help') {
    	message.channel.send('Stickers List : eddy, fenneko, ptp (zapdexio) | If you want sticker list of eddy (for example), type !stck eddy list');
  	}
});

client.on('message', message => {
    if (message.content === '!stck eddy list') {
    	message.channel.send('Eddy Stickers List : edd, badlydrawn, monroface');
  	}
});

client.on('message', message => {
    if (message.content === '!stck eddy edd') {
    	message.channel.send('http://i.cubeupload.com/BT3lxO.png');
  	}
});

client.on('message', message => {
    if (message.content === '!stck eddy badlydrawn') {
    	message.channel.send('http://i.cubeupload.com/vzK08m.png');
  	}
});

client.on('message', message => {
    if (message.content === '!stck fenneko list') {
    	message.channel.send('Fenneko Stickers List : hahaha (gif)');
  	}
});

client.on('message', message => {
    if (message.content === '!stck fenneko hahaha') {
    	message.channel.send('http://i.cubeupload.com/lM9I36.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!stck eddy monroface') {
    	message.channel.send('http://i.cubeupload.com/fEYfsf.jpg');
  	}
});


client.on('message', message => {
    if (message.content === '!stck ptp list') {
    	message.channel.send('ptp, russie, ayy pepito, yolo, ss');
  	}
});

client.on('message', message => {
    if (message.content === '!stck ptp ptp') {
    	message.channel.send('https://cdn.discordapp.com/attachments/355745229485244417/441965448263630868/ptp.png');
  	}
});

client.on('message', message => {
    if (message.content === '!stck ptp russie') {
    	message.channel.send('https://cdn.discordapp.com/attachments/355745229485244417/441966399141707789/ptprloussie.png');
  	}
});

client.on('message', message => {
    if (message.content === '!stck ptp ayy pepito') {
    	message.channel.send('https://cdn.discordapp.com/attachments/355745229485244417/441966460059910144/ptpayypepito.png');
  	}
});

client.on('message', message => {
    if (message.content === '!stck ptp yolo') {
    	message.channel.send('https://cdn.discordapp.com/attachments/355745229485244417/441966591287230485/ptpthuglife.png');
  	}
});

client.on('message', message => {
    if (message.content === '!stck ptp ss') {
    	message.channel.send('https://cdn.discordapp.com/attachments/355745229485244417/441966665878470656/ptpmui.png');
  	}
});


client.on('message', message => {
    if (message.content === 'k!web') {
    	message.channel.send('https://crocodilecroco.github.io/kaedev2/');
  	}
});

client.on('message', message => {
    if (message.content === '!clicker') {
      clicker = clicker + 1
    	message.channel.send('Vous avez cliqué! Maintenant il y a ' + clicker + ' clics!');
  	}
});

client.on('message', message => {
    if (message.content === 'k!help') {
    	message.channel.send('https://crocodilecroco.github.io/kaedev2/');
  	}
});

client.on('message', message => {
    if (message.content === '!invite') {
    	message.channel.send('**FRANCAIS** : Vous Souhaitez Inviter Kaede? Rendez-vous sur LLCentral (Envoyez un Message Privé a Mobirise (LL) le créateur pour le lien, normalement il est sur un des serveur avec kaede), rendez vous dans le salon processus d"invitation Kaede, il faut que Mobirise soit sur votre serveur tout le temps, ne le kickez/bannez pas! Il faudra mettre LL en admin aussi afin d"inviter le bot! Soyez sur aussi de ne pas quitter LLCentral!');
  	}
});

client.on('message', message => {
    if (message.content === '!inviter') {
    	message.channel.send('**FRANCAIS** : Vous Souhaitez Inviter Kaede? Rendez-vous sur LLCentral (Envoyez un Message Privé a Mobirise (LL) le créateur pour le lien, normalement il est sur un des serveur avec kaede), rendez vous dans le salon processus d"invitation Kaede, il faut que Mobirise soit sur votre serveur tout le temps, ne le kickez/bannez pas! Il faudra mettre LL en admin aussi afin d"inviter le bot! Soyez sur aussi de ne pas quitter LLCentral!');
  	}
});

client.on('message', message => {
    if (message.content === '!invit') {
    	message.channel.send('**FRANCAIS** : Vous Souhaitez Inviter Kaede? Rendez-vous sur LLCentral (Envoyez un Message Privé a Mobirise (LL) le créateur pour le lien, normalement il est sur un des serveur avec kaede), rendez vous dans le salon processus d"invitation Kaede, il faut que Mobirise soit sur votre serveur tout le temps, ne le kickez/bannez pas! Il faudra mettre LL en admin aussi afin d"inviter le bot! Soyez sur aussi de ne pas quitter LLCentral!');
  	}
});

client.on('message', message => {
    if (message.content === '!invitez') {
    	message.channel.send('**FRANCAIS** : Vous Souhaitez Inviter Kaede? Rendez-vous sur LLCentral (Envoyez un Message Privé a Mobirise (LL) le créateur pour le lien, normalement il est sur un des serveur avec kaede), rendez vous dans le salon processus d"invitation Kaede, il faut que Mobirise soit sur votre serveur tout le temps, ne le kickez/bannez pas! Il faudra mettre LL en admin aussi afin d"inviter le bot! Soyez sur aussi de ne pas quitter LLCentral!');
  	}
});

client.on('message', message => {
    if (message.content === '!invit') {
    	message.channel.send('**FRANCAIS** : Vous Souhaitez Inviter Kaede? Rendez-vous sur LLCentral (Envoyez un Message Privé a Mobirise (LL) le créateur pour le lien, normalement il est sur un des serveur avec kaede), rendez vous dans le salon processus d"invitation Kaede, il faut que Mobirise soit sur votre serveur tout le temps, ne le kickez/bannez pas! Il faudra mettre LL en admin aussi afin d"inviter le bot! Soyez sur aussi de ne pas quitter LLCentral!');
  	}
});

client.on('message', message => {
    if (message.content === '!lien') {
    	message.channel.send('**FRANCAIS** : Vous Souhaitez Inviter Kaede? Rendez-vous sur LLCentral (Envoyez un Message Privé a Mobirise (LL) le créateur pour le lien, normalement il est sur un des serveur avec kaede), rendez vous dans le salon processus d"invitation Kaede, il faut que Mobirise soit sur votre serveur tout le temps, ne le kickez/bannez pas! Il faudra mettre LL en admin aussi afin d"inviter le bot! Soyez sur aussi de ne pas quitter LLCentral!');
  	}
});


client.on('message', message => {
    if (message.content === '!btc') {
    	    coinmarketcap.get("bitcoin", coin => {
            message.channel.send("En USD, le bitcoin coute " + coin.price_usd); // Prints the price in USD of BTC at the moment.
        });
  	}
});

client.on("message", (message) => {
    if (message.content.startsWith("parler a mikit")) {
      var randomAnswers = mikiti[Math.floor(Math.random() * mikiti.length)];
      message.channel.send(randomAnswers);
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("!délirecalcul")) {
      var randomAnswers = delircalc[Math.floor(Math.random() * delircalc.length)];
      message.channel.send(randomAnswers);
    }
});

client.on('message', message => {
    if (message.content === 'k!dice') {
    	message.channel.send(Math.floor(Math.random() * 11));
  	}
});

client.on('message', message => {
  if (message.content === 'k!fightboss') {
    	  if (bossla == 1) {
          bossvie = bossvie - 3
          message.channel.send('Le boss perd 3 vie, il a maintenant ' + bossvie);
          if (bossvie < 0) {
           message.channel.send('Pas besoin d"attaquer! Le boss est mort, fait !bossheal pour que il reapparaisse'); 
          }
        } 
        if (bossla == 0) {
          message.channel.send('Le boss a pas encore apparu! Fait !boss pour que il apparaisse');
        }
  	}
});

client.on('message', message => {
if (message.content === 'k!boss') {
    	  if (bossla == 0) {
          bossla = 1;
          message.channel.send('Un Boss Apparait avec 100 vies');
          return;
        }
        if (bossla == 1) {
          message.channel.send('Le boss est déja apparu!');
        }
  	}
});

client.on('message', message => {
    if (message.content === 'k!bossheal') {
      bossvie = 100;
    	message.channel.send('Le boss est réinitialisé, ATTENTION SI VOUS REINITIALISEZ ABUSIVEMENT, VOUS AUREZ UN AVERTISSEMENT');
  	}
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "foaas")) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let fukof = args[0];
        message.reply(`https://www.foaas.com/${fukof}/Kaede`)
  }
});            


client.on('message', message => {
  if (message.author.id == 313264056733532170) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
        if(command === "ksay") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
            
        message.delete().catch(O_o=>{});
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }
  }
});            



client.on('message', message => {
    if (message.content === '!bossgen') {
      var randomboss = hostilegtext[Math.floor(Math.random() * hostilegtext.length)];
      var randomboss2 = hostilegtext[Math.floor(Math.random() * hostilegtext.length)];
      var randomboss3 = hostilegtext[Math.floor(Math.random() * hostilegtext.length)];
    	message.channel.send('Attention ! ' + randomboss + ' ' + randomboss2 + ' ' + randomboss3 + ' apparait! Avec ' + Math.floor(Math.random() * 1001) + ' point de vies');
  	}
});

client.on('message', message => {
    if (message.content === '!reference') {
    	message.channel.send('|  ||\n|| |_');
  	}
});

client.on('message', message => {
    if (message.content === '!e3generator') {
      var randnomi = nomjeu[Math.floor(Math.random() * nomjeu.length)];
      var randtype = jeu2[Math.floor(Math.random() * jeu2.length)];
    	message.channel.send('Un jeu ' + randnomi + ' ' + randtype);
  	}
});

//client.on('message', message => {
//    if (message.content === '!logkaede on') {
//      logka = 1;
//    	message.channel.send('logs are activated now');
//  	}
//});

//client.on('message', message => {
//    if (logka == 1) {
//      if (message.author.bot) return;
//    	message.guild.channels.find("name", "kaede-logger").send(message.content + ' | de ' + message.author.tag);
//  	}
//});

client.on('message', message => {
    if (message.content === '!doorpass') {
      message.channel.send('Trying to Open Door');
      doorandom = Math.floor(Math.random() * 2);
      if (doorist.includes(message.author.id)) {
       message.channel.send({embed : {
            color: 13632027,
            description: ":construction: You already tried! You need a friend to open the door, you are still at door **" + doorgame + "** :construction:"
          }});
       return;
      } else {
        doorist.push(message.author.id);
        if (doorandom == 0) {
          message.channel.send({embed : {
            color: 13632027,
            description: ":no_entry_sign: Failed to open! You did not pass a door, you are still at door **" + doorgame + "** :no_entry_sign:"
          }});
          return;
        }
        if (doorandom == 1) {
          doorgame = doorgame + 1;
          doorlast = message.author.tag;
          doorcoins = doorcoins + Math.floor(Math.random() * 10);
          message.channel.send({embed : {
            color: 8781568,
            description: ":tada: You Opened a door! You Are Now To Door Number **" + doorgame + "** :tada: , and you have now " + doorcoins + " doorcoins!"
          }});
          message.channel.send({embed : {
            color: 8781568,
            description: "Remember, use !doorshop to go to the shop"
          }});
          doorist = ['lol'];
        }
      }
}});

client.on('message', message => {
    if (message.content === '!doorstat') {
    	message.channel.send({embed : {
            color: 13632027,
            description: "**DoorPass Statistics** [ Door Level : " + doorgame + " ]  [ Last Door Opener : " + doorlast + " ]"
          }});
  	}
});

client.on('message', message => {
    if (message.content === '!doorshop') {
    	message.channel.send({embed : {
            color: 13632027,
            description: "Available Items : doorhammer (!doorbuy ItemName)"
          }});
  	}
});

client.on('message', message => {
    if (message.content === '!doorcoins') {
    	message.channel.send({embed : {
            color: 13632027,
            description: "The whole game team has " + doorcoins + " doorcoins"
          }});
  	}
});

client.on('message', message => {
    if (message.content === '!doorhammer') {
      if (doorhammer == 1) {
        doorgame = doorgame + 1;
        doorlast = message.author.tag;
    	message.channel.send({embed : {
            color: 13632027,
            description: "You broke a door ! Now you are to door number " + doorgame + " but you did not get coins"
          }});
      message.channel.send({embed : {
            color: 13632027,
            description: "You need buy another doorhammer to use doorhammer again :scream_cat:"
          }});
        doorist = ['lol'];
        doorhammer = 0;
      }
  	}
});

client.on('message', message => {
    if (message.content === '!doorbuy doorhammer') {
        if (doorcoins > 45) {
        doorhammer = 1;
    	  message.channel.send({embed : {
             color: 13632027,
             description: "The team got DoorHammer ! Use !doorhammer to break a door"
          }});
        doorcoins = doorcoins - 45;
        }
        if (doorcoins < 45) {
         message.channel.send('Sorry ! You need 45 and more doorcoins to buy that.'); 
        }
  	}
});

client.on('message', message => {
    if (message.content === '!doorpassstat') {
    	message.channel.send({embed : {
            color: 13632027,
            description: "**DoorPass Statistics** [ Door Level : " + doorgame + " ]  [ Last Door Opener : " + doorlast + " ]"
          }});
  	}
});

client.on('message', message => {
    if (message.content === '!doorstats') {
    	message.channel.send({embed : {
            color: 13632027,
            description: "**DoorPass Statistics** [ Door Level : " + doorgame + " ]  [ Last Door Opener : " + doorlast + " ]"
          }});
  	}
});

client.on('message', message => {
    if (message.content === '!doorstatistic') {
    	message.channel.send({embed : {
            color: 13632027,
            description: "**DoorPass Statistics** [ Door Level : " + doorgame + " ]  [ Last Door Opener : " + doorlast + " ]"
          }});
  	}
});

client.on('message', message => {
    if (message.content === '!doorpass stat') {
    	message.channel.send({embed : {
            color: 13632027,
            description: "**DoorPass Statistics** [ Door Level : " + doorgame + " ]  [ Last Door Opener : " + doorlast + " ]"
          }});
  	}
});

client.on('message', message => {
    if (message.content === '!forcedoor') {
    	if (message.author.id == 313264056733532170) {
        doorist = ['lol'];
        doorgame = doorgame + 1;
        doorlast = message.author.tag;
        message.channel.send('Door Bypassed');
      }
  	}
});

client.on('message', message => {
  if (message.content === 'k!pdp') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
    if (message.content === 'unexpected mikit') {
    	message.channel.send('https://agences.acheterlouerpro.fr/images/expression/numero11/perroquet.png');
  	}
});

client.on('message', message => {
    if (message.content === 'unexpected onque') {
    	message.channel.send('http://groquik.chez.com/provisoire/parla.gif');
  	}
});

client.on('message', message => {
    if (message.content === 'groquik!') {
    	message.channel.send('Groquik : Ils ont encore volé votre nesquik?! Vous en faites pas, allons y! \n musique se joue \n par ici le nesquik! \n nesquik, on en a une énorme envie!');
  	}
});

client.on('message', message => {
    if (message.content === 'Groquik!') {
    	message.channel.send('Groquik : Ils ont encore volé votre nesquik?! Vous en faites pas, allons y! \n musique se joue \n par ici le nesquik! \n nesquik, on en a une énorme envie!');
  	}
});

client.on('message', message => {
    if (message.content === 'Groquik !') {
    	message.channel.send('Groquik : Ils ont encore volé votre nesquik?! Vous en faites pas, allons y! \n musique se joue \n par ici le nesquik! \n nesquik, on en a une énorme envie!');
  	}
});

client.on('message', message => {
    if (message.content === 'groquik !') {
    	message.channel.send('Groquik : Ils ont encore volé votre nesquik?! Vous en faites pas, allons y! \n musique se joue \n par ici le nesquik! \n nesquik, on en a une énorme envie!');
  	}
});

client.on('message', message => {
    if (message.content === 'unexpected adibou') {
    	message.channel.send('http://adibou.fr/images/adibou2.jpg');
  	}
});

client.on('message', message => {
    if (message.content === 'unexpected croustinews') {
    	message.channel.send('http://www.softdrink-paris.com/166-large_default/ancel-sticks-bretzels-boite-de-300g.jpg');
  	}
});

client.on('message', message => {
    if (message.content.startsWith("!emojify")) {
      if(message.author.bot) return;
      var messaj1 = message.content;
      var bee = /B/g;
      var messaj2 = messaj1.replace(bee, ":b:");
      var messaj3 = messaj2.replace("!emojify", "");
    	message.channel.send(messaj3 + " :joy: :ok_hand: :100: :joy: :joy:");
  	}
});

//Celui la c pour un RP Bot (e_e)
client.on('message', message => {
    if (message.author.id == 313264056733532170) {
        if (message.content.startsWith('RPsayBOT')) {
            var str = message.content
            client.channels.get("470215594269212682").send(str.substring(8))
        }
    }
});

client.on('message', message => {
    if (message.content === '!vérité') {
      var verito1 = verity1[Math.floor(Math.random() * verity1.length)];
      var verito2 = verity2[Math.floor(Math.random() * verity2.length)];
    	message.channel.send(verito1 + " " + verito2);
  	}
});

client.on('message', message => {
    if (message.content === '!guilty') {
    	message.channel.send('https://media.discordapp.net/attachments/360050049826160640/470891379824787457/GAME_OVER.gif');
  	}
});

client.on('message', message => {
    if (message.content.startsWith("Dis Kaede,")) {
      var raiponce = eske[Math.floor(Math.random() * eske.length)];
    	message.channel.send(raiponce);
  	}
});

client.on('message', message => {
    if (message.content.startsWith("Dis kaede,")) {
      var raiponce = eske[Math.floor(Math.random() * eske.length)];
    	message.channel.send(raiponce);
  	}
});

client.on('message', message => {
    if (message.content.startsWith("dis kaede,")) {
      var raiponce = eske[Math.floor(Math.random() * eske.length)];
    	message.channel.send(raiponce);
  	}
});

client.on('message', message => {
    if (message.content.startsWith("!proba")) {
      var probabo = probly[Math.floor(Math.random() * probly.length)];
    	message.channel.send(probabo);
  	}
});

client.on('message', message => {
    if (message.content === '!ohno') {
    	message.channel.send('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n░░░░████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n░░░██░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░░░░░░░\n░░█░░░░░██░░░█░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░\n░█░░░░░█░░█░░█░░░░██░░░░░░░░░░░░░░░░░░░░░░░░░\n░█░░░░░█░░█░░███░░░█░░░░░░░░░░░░░░░░░░░░░░░░░\n█░░░░░░█░░█░░█░░█░░░█░░░░░░░░░░░░░░░░░░░░░░░░\n█░░░░░░░██░░░█░░█░░░█░░░░░░░░░░░░░░░░░░░░░░░░\n█░░░░░░░░░░░░░░░░░░░░█░░░░░░░░███████░░░░░░░░\n█░░░░░░░░░░░░░░░░░░░░█░░░░░░░█░░░░░░░█░░░░░░░\n██░░░░░░░░░░░░░░░░░░░█░░░░░░░█░█░░█░░█░░░░░░░\n░█░░░░░░░░░░░░░░░░░░░░██░░░░░█░░░░░░░█░░░░░░░\n░█░░░░░█░░░█░░████░░░░░██░░░░█░░░░░░░█░░░░░░░\n░█░░░░░██░░█░░█░░█░░░████░░░░█░█████░█░░░░░░░\n░░█░░░░█░█░█░░█░░█░░██░░░░░██░░░░░░░░░██░░░░░\n░░██░░░█░░██░░████░░█░░░░░█░░░░░░░░░░░░░█░░░░\n░░░█░░░░░░░░░░░░░░░░█░░░░█░░░░░░░░░░░░░░░█░░░\n░░░███░░░░░░░░░░░░░█░░░░█░░░░░░░░░░░░░░░░░█░░\n░░░░░██████████████░░░░█░░░█░░░░░░░░░░█░░░░█░\n░░░░░░░░░░░░░░░░░░░░░░█░░░██░░░░░░░░░░██░░░█░\n░░░░░░░░░░░░░░░░░░░░░░█░░█░█░░░░░░░░░░█░█░░█░\n░░░░░░░░░░░░░░░░░░░░░░░██░░█░░░░░░░░░░█░░██░░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░█░░░░░░');
  	}
});

client.on('message', message => {
    if (message.content.startsWith("!posta ")) {
      if (message.author.id == 313264056733532170) {
        var postax = message.content
        client.channels.get("376073988704829441").send(postax.substring(7))
      }
  	}
});

client.on('message', message => {
    	console.log(message.content + " " + message.author.tag)
});

client.on('message', message => {
    if (message.content.startsWith("!histoirelol")) {
      var phra1 = phrs1[Math.floor(Math.random() * phrs1.length)];
      var phra2 = phrs2[Math.floor(Math.random() * phrs2.length)];
      var phra3 = phrs3[Math.floor(Math.random() * phrs3.length)];
      var phra4 = phrs4[Math.floor(Math.random() * phrs4.length)];
      var phra5 = phrs2[Math.floor(Math.random() * phrs2.length)];
      var phra6 = phrs5[Math.floor(Math.random() * phrs5.length)];
    	message.channel.send(phra1 + " " + phra2 + " " + phra3 + " " + phra4 + " " + phra5 + " " + phra6);
  	}
});

client.on('message', message => {
    if (message.content === '!kaedepremium') {
    	message.channel.send('Vous n\'avez pas Kaede Premium, écrivez !premiumbuy, et vous aurez kaede premium en payant 50 de vos DiscordCoins');
  	}
});

client.on('message', message => {
    if (message.content === '!premiumbuy') {
    	message.channel.send('Vous avez acheté Kaede Premium pour 50 DiscordCoins, Kaede Premium donne un accès illimité au épisodes de JoJo et des jeux normalement payant! Recevez bientôt cela en MP!');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
