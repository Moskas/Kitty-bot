// Shitowe zmienne poki nie naucze sie dobrze Java Scriptu :/
var cytaty =
['```Moskas:KEK\nKawaiiBot: MI \n-KawaiiBot 2k17```',
'```Git Gut \n- Szczur2015```'
,'```Question: Do you like @Rak ?\nAnswer: no... (╯°□°）╯︵ ┻━┻\n-KawaiiBot 2k17```'
,'```( ͡° ͜ʖ ͡°) \n- MrFelix```'
,'```𝑽𝒆𝒏𝒕𝒂𝒍𝒂: @KawaiiBot tak, a ty?.\nKawaiiBotBOT: Ja niewale konia a ty tak.\n-KawaiiBot 2k17```'
,'``` KEK\n - Moskas```'
];
var komendy =
[
  '```Lista aktualnie dostępnych komend (Prefix *)\n\nhelp - wyświetla tą liste komend\nava - podaje link do twojego avatara i wstawia go jako obrazek\nroll - losuje liczbę z zakresu 1-6 (tak jak kostka lol)\nsay [argument] - bot powtarza napisany argument\ntime - podaje aktualna godzine i datę\nquote - bot podaje losowy cytat\nimg - losowy obrazek```'
];
// Potrzebne biblioteki
//const Discord = require("discord.js");
//const bot = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const bot = new Client();
const client = require('discord-rich-presence')('526893482309320705');
const user = ('291735895986405386');
const fs = require('fs');
// Dodawanie wykrywania prefixu dla bota

var pre='*';
function commandIs(str,msg){
  return msg.content.startsWith(pre + str);
}
var state='Working!';
//Self rich presence
function rich(){
client.updatePresence({
	details: state,
	startTimestamp: Date.now(),
	largeimage: 'pc',
	smallimage: 'kitty',
	instance: true,
	});
}
// Log do konsoli po zalogowaniu się do serwerów discorda.
bot.on('ready', () => {
//  while(!fs.error()){
//var c=0;
//}
  console.log('Udało się zalogować jako ' + `${bot.user.username}`);
  time(); //Funkcja pobierajaca czas systemowy
  rich(); //Inicjalizacja rich presence
  console.log('O godzinie '+ h +":"+ minuty +":" + sek + " | " + dz +" "+ mies );
  bot.user.setActivity('around with *help');
});

//Funkcja czasu
function time(){
	var d = new Date();h = d.getHours();minuty = d.getMinutes();sek = d.getSeconds();dz = d.getDate();mies = d.getMonth();
              // Ustawianie miesiecy
              switch(mies){case 0: mies = 'Styczeń'; break;case 1: mies = 'Luty';break;case 2: mies = 'Marzec';break;case 3: mies = 'Kwiecień';break;case 4: mies = 'Maj';break;case 5: mies = 'Czerwiec';break;case 6: mies = 'Lipiec';break;
              case 7: mies = 'Sierpień';break;case 8: mies = 'Wrzesień';break;case 9: mies = 'Październik';break;case 10: mies = 'Listopad';break;case 11: mies = 'Grudzień';break;
              }
              // Zamiana minut i sekund z 1 na 01
              switch(minuty){case 0: minuty = '00';break;case 1: minuty = '01';break;case 2: minuty = '02';break;case 3: minuty = '03';break;case 4: minuty = '04';break;case 5: minuty = '05';break;case 6: minuty = '06';break;
              case 7: minuty = '07';break;case 8: minuty = '08';break;case 9: minuty = '09';break;}
              switch(sek){case 0: sek = '00';break;case 1: sek = '01';break;case 2: sek = '02';break;case 3: sek = '03';break;case 4: sek = '04';break;case 5: sek = '05';break;case 6: sek = '06';break;
              case 7: sek = '07';break;case 8: sek = '08';break;case 9: sek - '09';break;}
              switch(h){
                case 0: h = '00';
			  }
}
// Oczekiwanie na wiadomość

function img(){
    rng = Math.floor(Math.random() * 31);
    rng=rng+'.jpg';
//    console.log(rng);
    return rng;
}
bot.on('message', msg => {
    if(commandIs("help",msg)){
      msg.channel.send(komendy)}

    if(commandIs("quote",msg)){
      msg.channel.send((cytaty[Math.floor(Math.random() * cytaty.length)]));}

     if(msg.isMentioned(bot.user)){
      if(msg.author.id === '181762962174771200'){
        msg.reply(':heart:');}
        else{
      msg.reply('Cześć! Jeśli chciałeś porozmawiać to przykro mi ale nie umiem ' + ':frowning:'+' Jeśli nie to możesz wpisać komende *help żeby dowiedzieć się co naprawdę potrafię!' + ':smiley:');}
		}

    if(commandIs("ava",msg)){
      msg.channel.send( msg.author.username + " avatar: " + msg.author.avatarURL);}

    if(commandIs("say",msg)){
      var args = msg.content.split(/[ ]+/);
        if(args.length === 1) {
        msg.reply('Nie uzyles komendy poprawnie! ``Poprawna skladnia to: *say [argument]``')}
        else{
        msg.channel.send(args.join(" ").substring(5));}}

    if(commandIs("roll",msg)){
      var roll = Math.floor(Math.random() * 7);
        if(roll === 1){
        msg.reply(':frowning:' + " wyrzuciles " + roll + ' ' + ':game_die:');}
        else{
        msg.reply('wyrzuciłeś ' + roll + ' ' + ':game_die:');}}

    if(commandIs("spam",msg) && msg.author.id === '174976418424291328'){
        msg.channel.send('SPAM SPAM SPAM SPAM SPAM, przestań spamować!');}
	//Podawanie czasu
    if(commandIs("time",msg)){
		time(); //Funkcja pobierajaca czas systemowy
        msg.reply('aktualnie jest: '+ h +":"+ minuty +":" + sek + " | " + dz +" "+ mies );
     }
	 //Wlaczenie AFK
	 if(commandIs("afk",msg)){
      if(msg.author.id === '174976418424291328'){
        state="AFK";
		rich(state);
		}
	 }
	 //Wylaczenie AFK
	 if(commandIs("nafk",msg)){
      if(msg.author.id === '174976418424291328'){
        state="Working!";
		rich(state);
		}
	 }

   if(commandIs("img",msg)){
     img();
     const buffer = fs.readFileSync('./img/'+rng);
     const attachment = new Attachment(buffer, rng);
     msg.channel.send(`${msg.author}, twój losowy obrazek:`, attachment);
   }
   
/*   if(commandIs("prefix",msg)){
      var args = msg.content.split(/[ ]+/);
        if(args.length>1 && args.length<4) {
        prefix=args.join(" ").substring(5);}
        else{
        msg.reply('Nie uzyles komendy poprawnie! ``Poprawna skladnia to: *say [argument]``')}}*/
});

bot.login('MjkxNzM1ODk1OTg2NDA1Mzg2.DwJvCw.-SdgncOc0J4dzphthRb_pkMJ0ZE');
