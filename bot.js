
// Potrzebne biblioteki
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const bot = new Client();
//const client = require('discord-rich-presence')('526893482309320705');
const user = ('291735895986405386');
const fs = require('fs');
// Dodawanie wykrywania prefixu dla bota

var pre='*';
function commandIs(str,msg){
  return msg.content.startsWith(pre + str);
}
//Self rich presence
// Log do konsoli po zalogowaniu się do serwerów discorda.
bot.on('ready', () => {
  console.log('Udało się zalogować jako ' + `${bot.user.username}`);
//  time(); //Funkcja pobierajaca czas systemowy
//  rich(); //Inicjalizacja rich presence
//  console.log('O godzinie '+ h +":"+ minuty +":" + sek + " | " + dz +" "+ mies );
  bot.user.setActivity('around with *help');
});

var komendy =
[
  '```Lista aktualnie dostępnych komend (Prefix *)\n\nhelp - wyświetla tą liste komend\navatar - podaje link do twojego avatara i wstawia go jako obrazek\nroll - losuje liczbę z zakresu 1-6 (tak jak kostka lol)\nsay [argument] - bot powtarza napisany argument\ntime - podaje aktualna godzine i datę\nquote - bot podaje losowy cytat\nimg - losowy obrazek```'
];

var cytaty =['Brak'];

let timer,ship,ship_name,ship_img,ship_rarity;
var r_color;

var rarity=['Decisive','Ultra Rare','Priority','Super Rare','Elite','Rare','Normal'];
var rarity_color=['0xff009d','0xffee00','0xbc42f5','0x42e3f5','0xd4d4d4'];

//Light craft
var timer_light=['0:17:00','0:19:00','0:20:00','0:21:00','0:23:00','0:24:00','0:25:00'];
var light_017=['Shirakami_Fubuki'];
var light_017R=[rarity[3]];
var light_019=['Acasta','Amazon','Ardent'];
var light_019R=[rarity[5],rarity[5],rarity[5]];
var light_020=['Aylwin','Hatakaze','Kamikaze','Matsukaze','Beagle','Bulldog'];
var light_020R=[rarity[5],rarity[5],rarity[5],rarity[5],rarity[6],rarity[6],];
var light_021=['Fumizuki','Comet','Crescent','Cygnet','Kisaragi','Mutsuki','Uzuki'];
var light_021R=[rarity[5],rarity[6],rarity[6],rarity[6],rarity[6],rarity[6],rarity[6]];
var light_023=['Nekone','Ayanami','Fubuki','Forbin','Cassin','Downes'];
var light_023R=[rarity[3],rarity[4],rarity[4],rarity[5],rarity[6],rarity[6]];
var light_024=['Foxhound'];
var light_024R=[rarity[6]];
var light_025=['Kawakaze','Grenville','Maury','Ariake','Hatsuharu','Wakaba','Yuugure','Craven','McCall'];
var light_025R=[rarity[3],rarity[4],rarity[4],rarity[5],rarity[5],rarity[5],rarity[5],rarity[6],rarity[6],];
var light_115=['St.Louis'];
var light_115R=[rarity[4]];

//Heavy craft
var timer_heavy=['1:15:00'];
var heavy_115=['St. Louis'];

//Special craft
var timer_special=['0:11:00','0:12:00','0:13:00','0:20:00','0:24:00','0:30:00','0:34:00','0:35:00','2:00:00','2:10:00','2:15:00','2:20:00','2:22:00','2:30:00','2:40:00','2:47:00','3:00:00','3:40:00','3:50:00',"4:00:00"];
var special_11=['U-47','U-110','U-552','U-73'];
var special_11R=[rarity[3],rarity[4],rarity[4],rarity[4]];
var special_12=['U-101','U-81'];
var special_12R=[rarity[4],rarity[4]];
var special_13=['U-556',"U-557"];
var special_13R=[rarity[4],rarity[4]];
var special_20=['Minato_Aqua'];
var special_20R=[rarity[3]];
var special_24=['Albacore','Dace'];
var special_24R=[rarity[3],rarity[4]];
var special_30=['I-168','I-19','I-25','I-26','I-56','I-58'];
var special_30R=[rarity[3],rarity[3],rarity[4],rarity[4],rarity[4],rarity[4]];
var special_34=['I-13'];
var special_34R=[rarity[3]];
var special_35=['Surcouf'];
var special_35R=[rarity[4]];
var special_200=['Eagle','Vestal','Langley'];
var special_200R=[rarity[4],rarity[4],rarity[6]];
var special_210=['Hermes'];
var special_210R=[rarity[6]];
var special_215=['Long Island'];
var special_215R=[rarity[5]];
var special_220=['Chaser','Bogue'];
var special_220R=[rarity[4],rarity[5]];
var special_222=['Ryuuhou','Ryuujou'];
var special_222R=[rarity[3],rarity[4]];
var special_230=['Perseus','Unicorn'];
var special_230R=[rarity[3],rarity[4]];
var special_240=['Ranger'];
var special_240R=[rarity[6]];
var special_247=['Green_Heart'];
var special_247R=[rarity[3]];
var special_300=['Centaur'];
var special_300R=[rarity[3]];
var special_340=['Lexington','Saratoga'];
var special_340R=[rarity[4],rarity[4]];
var special_350=['Glorious'];
var special_350R=[rarity[4]];
var special_400=['Ark_Royal'];
var special_400R=[rarity[4]];

// Oczekiwanie na wiadomość

function lightcraft(){
  timer=(Math.floor(Math.random() * timer_light.length-1)+1);
    switch(timer){
    case 0: 
            ship=Math.floor(Math.random() * light_017.length);
            ship_rarity=light_017R[ship];
            ship_name=light_017[ship].slice();
        break;
    case 1: 
            ship=Math.floor(Math.random() * light_019.length);
            ship_rarity=light_019R[ship];
            ship_name=light_019[ship].slice();
        break;
    case 2:
        ship=Math.floor(Math.random() * light_020.length);
        ship_rarity=light_020R[ship];
        ship_name=light_020[ship].slice();
    break;
    case 3:
      ship=Math.floor(Math.random() * light_021.length);
      ship_rarity=light_021R[ship];
      ship_name=light_021[ship].slice();
    break;
    case 4:
      ship=Math.floor(Math.random() * light_023.length);
      ship_rarity=light_023R[ship];
      ship_name=light_023[ship].slice();
    break;
    case 5: 
            ship=Math.floor(Math.random() * light_024.length);
            ship_rarity=light_024R[ship];
            ship_name=light_024[ship].slice();
        break;
    case 6: 
            ship=Math.floor(Math.random() * light_025.length);
            ship_rarity=light_025R[ship];
            ship_name=light_025[ship].slice();
        break;
    }
    ship_img=ship_name+'.png';
    console.log(timer+ship_name);
    return timer, ship_name, ship_rarity;
}

function heavycraft(){
  timer=(Math.floor(Math.random() * timer_heavy.length-1)+1);
    switch(timer){
    case 0: 
            ship=Math.floor(Math.random() * heavy_115.length);
            ship_name=heavy_115[ship];
        break;
    }
    ship_img=ship_name+'.png';
    console.log(timer+ship_name);
    return timer, ship_name;
}

 function specialcraft(){
    timer=(Math.floor(Math.random() * timer_special.length-1)+1);
    console.log(timer);
    switch(timer){
    case 0: 
        ship=Math.floor(Math.random() * special_11.length);
        ship_rarity=special_11R[ship];
        ship_name=special_11[ship];
        break;
    case 1: 
        ship=Math.floor(Math.random() * special_12.length)
        ship_rarity=special_12R[ship];
        ship_name=special_12[ship];
        break;
    case 2: 
        ship=Math.floor(Math.random() * special_13.length)
        ship_rarity=special_13R[ship];
        ship_name=special_13[ship];
        break;
    case 3: 
        ship=Math.floor(Math.random() * special_20.length)
        ship_rarity=special_20R[ship];
        ship_name=special_20[ship];
        break;
    case 4: 
        ship=Math.floor(Math.random() * special_24.length)
        ship_rarity=special_24R[ship];
        ship_name=special_24[ship];
        break;
    case 5: 
        ship=Math.floor(Math.random() * special_30.length)
        ship_rarity=special_30R[ship];
        ship_name=special_30[ship];
        break;
    case 6: 
        ship=Math.floor(Math.random() * special_34.length)
        ship_rarity=special_34R[ship];
        ship_name=special_34[ship];
        break;
    case 7: 
        ship=Math.floor(Math.random() * special_35.length)
        ship_rarity=special_35R[ship];
        ship_name=special_35[ship];
        break;
    case 8: 
        ship=Math.floor(Math.random() * special_200.length)
        ship_rarity=special_200R[ship];
        ship_name=special_200[ship];
        break;
    case 9: 
        ship=Math.floor(Math.random() * special_210.length)
        ship_rarity=special_210R[ship];
        ship_name=special_210[ship];
        break;
    case 10: 
        ship=Math.floor(Math.random() * special_215.length)
        ship_rarity=special_215R[ship];
        ship_name=special_215[ship];
        break;
    case 11: 
        ship=Math.floor(Math.random() * special_220.length)
        ship_rarity=special_220R[ship];
        ship_name=special_220[ship];
        break;
    case 12: 
        ship=Math.floor(Math.random() * special_222.length)
        ship_rarity=special_222R[ship];
        ship_name=special_222[ship];
        break;
    case 13: 
        ship=Math.floor(Math.random() * special_230.length)
        ship_rarity=special_230R[ship];
        ship_name=special_230[ship];
        break;
    case 14: 
        ship=Math.floor(Math.random() * special_240.length)
        ship_rarity=special_240R[ship];
        ship_name=special_240[ship];
        break;
    }
    ship_img=ship_name+'.png';
    return timer,ship_name;
 }

 function color(){
   switch (ship_rarity){
     case 'Normal':r_color=rarity_color[4];break;
     case 'Rare':r_color=rarity_color[3];break;
     case 'Elite':r_color=rarity_color[2];break;
     case 'Super Rare':r_color=rarity_color[1];break;
   }
   return r_color;
 }

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
      msg.channel.send((cytaty[Math.floor(Math.random() * cytaty.length-1)]));}

    if(commandIs("avatar",msg)){
      const avatar= new MessageAttachment(msg.author.avatarURL());
      msg.channel.send(avatar);
    }

    if(commandIs("say",msg)){
      let args = msg.content.split(/[ ]+/);
        if(args.length === 1) {
        msg.reply('Nie uzyles komendy poprawnie! ``Poprawna skladnia to: *say [argument]``')}
        else{
        msg.channel.send(args.join(" ").substring(5));}}

    if(commandIs("light",msg)){
        console.log("Craft");
        lightcraft(timer, ship);
        const attach='./img/ships/'+ship_img; // Sciezka do pliku
        const image='attachment://'+ship_img; // "Link" do pliku
//        console.log(attach+" "+image);
        color(ship_rarity);
    // Formatowanie wiadomosci + tresc
    const embed = new MessageEmbed()
      .setTitle(ship_name)
      .setDescription('Timer: ' + timer_light[timer])
      .addField('Rarity', ship_rarity, true)
      .setColor(r_color)
      .attachFiles([attach])
      .setImage(image)
      .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
      .setTimestamp();
      msg.channel.send(embed);
      }
    
    if(commandIs("heavy",msg)){
          console.log("Craft");
          heavycraft();
          msg.channel.send("Timer: "+timer_heavy[timer]+" Nazwa statku: "+ship_name);}

    if(commandIs("special",msg)){
            specialcraft(timer,ship);
            const attach='./img/ships/'+ship_img; // Sciezka do pliku
            const image='attachment://'+ship_img; // "Link" do pliku
            color(ship_rarity);
          const embed = new MessageEmbed()
            .setTitle(ship_name)
            .setDescription('Timer: ' + timer_special[timer])
            .addField('Rarity', ship_rarity, true)
            .setColor(r_color)
            .attachFiles([attach])
            .setImage(image)
            .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
            .setTimestamp();
            msg.channel.send(embed);
    }
});

bot.login('MjkxNzM1ODk1OTg2NDA1Mzg2.DwJvCw.-SdgncOc0J4dzphthRb_pkMJ0ZE');
