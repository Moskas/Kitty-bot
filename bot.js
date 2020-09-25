
// Potrzebne biblioteki
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');;
const bot = new Client();
const fs = require('fs');
const { timeStamp } = require('console');
// Dodawanie wykrywania prefixu dla bota

var pre='*';
function commandIs(str,msg){
  return msg.content.startsWith(pre + str);
}
//Self rich presence
// Log do konsoli po zalogowaniu się do serwerów discorda.
bot.on('ready', () => {
  console.log('Udało się zalogować jako ' + `${bot.user.username}`);
  time(); //Funkcja pobierajaca czas systemowy
  console.log('O godzinie '+ h +":"+ minuty +":" + sek + " | " + dz +" "+ mies );
  bot.user.setActivity('around with *help');
});

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

var cytaty =['Brak'];

let timer,ship,ship_name,ship_img,ship_rarity,ship_type;
var r_color;

var type=['CL','CA','DD','CV','CVL','BB','BC','BV','SS','AR'];
var rarity=['Decisive','Ultra Rare','Priority','Super Rare','Elite','Rare','Normal'];
var rarity_color=['0xff009d','0xffee00','0xbc42f5','0x42e3f5','0xd4d4d4'];

//Light craft
{
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
}

//Heavy craft
{
var timer_heavy=['1:15:00'];
var heavy_115=['St.Louis'];
var heavy_115R=[rarity[4]];
var heavy_115T=[type[0]];
}

//Special craft
{
var timer_special=['0:11:00','0:12:00','0:13:00','0:20:00','0:24:00','0:30:00','0:34:00','0:35:00','2:00:00','2:10:00','2:15:00','2:20:00','2:22:00','2:30:00','2:40:00','2:47:00','3:00:00','3:40:00','3:50:00',"4:00:00"];
var special_11=['U-47','U-110','U-522','U-73'];
var special_11R=[rarity[3],rarity[4],rarity[4],rarity[4]];
var special_12=['U-101','U-81'];
var special_12R=[rarity[4],rarity[3]];
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
}

//PR
let Cheshire=['Cheshire','PR3','CA','https://azurlane.koumakan.jp/w/images/2/2e/CheshireChibi.png',"I am a heavy cruiser of the Royals, Chesire! But before I met darling, I am a ship that only existed in one's imagination. So, this body of mine, belongs to you, Darling!",'5141'];

// Oczekiwanie na wiadomość

function lightcraft(){
  timer=(Math.floor(Math.random() * timer_light.length-1)+1);
  ship=null;
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
  ship=null;
  timer=(Math.floor(Math.random() * timer_heavy.length-1)+1);
    switch(timer){
    case 0: 
            ship=Math.floor(Math.random() * heavy_115.length);
            ship_name=heavy_115[ship];
            ship_rarity=heavy_115R[ship];
            ship_type=heavy_115T[ship];
        break;
    }
    ship_img=ship_name+'.png';
    console.log(timer_heavy[timer]+ship_name);
    return timer, ship_name,ship_rarity,ship_type;
}

 function specialcraft(){
  ship=null;
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
    case 15: 
        ship=Math.floor(Math.random() * special_247.length)
        ship_rarity=special_247R[ship];
        ship_name=special_247[ship];
        break;
    case 16: 
        ship=Math.floor(Math.random() * special_300.length)
        ship_rarity=special_300R[ship];
        ship_name=special_300[ship];
        break;
    case 17: 
        ship=Math.floor(Math.random() * special_340.length)
        ship_rarity=special_340R[ship];
        ship_name=special_340[ship];
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


bot.on('message', msg => {
    if(commandIs("help",msg)){
      var komendy;
      fs.readFile('./data/help.txt','utf8',function(err,komendy){
      msg.channel.send(komendy);
      });
    }

    if(commandIs("quote",msg)){
      msg.channel.send((cytaty[Math.floor(Math.random() * cytaty.length-1)]));
    }

    if(commandIs("time",msg)){
      time();
      msg.channel.send('aktualnie jest: '+ h +":"+ minuty +":" + sek + " | " + dz +" "+ mies );
    }


    if(commandIs("avatar",msg)){
      const avatar= new MessageAttachment(msg.author.avatarURL());
      msg.channel.send(avatar);
    }

    if(commandIs("say",msg)){
      let args = msg.content.split(/[ ]+/);
        if(args.length === 1) {
        msg.reply('Nie uzyles komendy poprawnie! ``Poprawna skladnia to: *say [argument]``')}
        else{
        msg.channel.send(args.join(" ").substring(5));}
      }

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
      .addField('Type', ship_type, true)
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
          const attach='./img/ships/'+ship_img; // Sciezka do pliku
          const image='attachment://'+ship_img; // "Link" do pliku
          color(ship_rarity);
        const embed = new MessageEmbed()
          .setTitle(ship_name)
          .setDescription('Timer: ' + timer_heavy[timer])
          .addField('Rarity', ship_rarity, true)
          .addField('Type', ship_type, true)
          .setColor(r_color)
          .attachFiles([attach])
          .setImage(image)
          .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
          .setTimestamp();
          msg.channel.send(embed);
    }

    if(commandIs("special",msg)){
            specialcraft(timer,ship);
            const attach='./img/ships/'+ship_img; // Sciezka do pliku
            const image='attachment://'+ship_img; // "Link" do pliku
            color(ship_rarity);
          const embed = new MessageEmbed()
            .setTitle(ship_name)
            .setDescription('Timer: ' + timer_special[timer])
            .addField('Rarity', ship_rarity, true)
            .addField('Type', ship_type, true)
            .setColor(r_color)
            .attachFiles([attach])
            .setImage(image)
            .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
            .setTimestamp();
            msg.channel.send(embed);
    }

    if(commandIs("pr3",msg)){
      let args = msg.content.split(/[ ]+/);
      if(args.length === 1) {
        msg.reply('Nie ma takiego statku')}
        else{
          var pr3_ship=args.join(" ").substring(5);
//          console.log(pr3_ship);
          switch(pr3_ship){
            case 'Cheshire':{
              const attach='./img/ships/Cheshire.png'; // Sciezka do pliku
              const image='attachment://Cheshire.png' // "Link" do pliku
            const embed = new MessageEmbed()
              .setTitle('HMS Cheshire')
              .setURL('https://azurlane.koumakan.jp/Cheshire')
              .setDescription('Meow')
              .addField('Rarity', 'Priority', true)
              .addField('Type', type[1],true)
              .setColor('0xffee00')
              .addFields(
                { name: '\u200B',value: 'Stats:'},
                { name: 'HP', value: '5141', inline: true },
                { name: 'FP', value: '282', inline: true },
                { name: 'AA', value: '409', inline: true },
                { name: 'TP', value: '208', inline: true },
                { name: 'EVA', value: '276', inline: true },
                { name: 'SPD', value: '27', inline: true },
                { name: 'ACC', value: '130', inline: true },
                { name: 'RLD', value: '156', inline: true },
                { name: 'LCK', value: '0', inline: true },
              )
              .attachFiles([attach])
              .setThumbnail('https://azurlane.koumakan.jp/w/images/2/2e/CheshireChibi.png')
              .setImage(image)
              .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
              .setTimestamp();
              msg.channel.send(embed);
            };break;
            case 'Drake':{
              const attach='./img/ships/Drake.png'; // Sciezka do pliku
              const image='attachment://Drake.png' // "Link" do pliku
            const embed = new MessageEmbed()
              .setTitle('HMS Drake')
              .setURL('https://azurlane.koumakan.jp/Drake')
              .setDescription('Meow')
              .addField('Rarity', 'Decisive', true)
              .addField('Type', type[1],true)
              .setColor(0xff009d)
              .addFields(
                { name: '\u200B',value: 'Stats:'},
                { name: 'HP', value: '5668', inline: true },
                { name: 'FP', value: '289', inline: true },
                { name: 'AA', value: '289', inline: true },
                { name: 'TP', value: '245', inline: true },
                { name: 'EVA', value: '75', inline: true },
                { name: 'SPD', value: '26', inline: true },
                { name: 'ACC', value: '145', inline: true },
                { name: 'RLD', value: '139', inline: true },
                { name: 'LCK', value: '0', inline: true },
              )
              .attachFiles([attach])
              .setThumbnail('https://azurlane.koumakan.jp/w/images/9/93/DrakeChibi.png')
              .setImage(image)
              .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
              .setTimestamp();
              msg.channel.send(embed);
            };break;
            case 'Odin':{
              const attach='./img/ships/Odin.png'; // Sciezka do pliku
              const image='attachment://Odin.png' // "Link" do pliku
            const embed = new MessageEmbed()
              .setTitle('KMS Odin')
              .setURL('https://azurlane.koumakan.jp/Odin')
              .setDescription('Meow')
              .addField('Rarity', 'Priority', true)
              .addField('Type', type[6],true)
              .setColor('0xffee00')
              .addFields(
                { name: '\u200B',value: 'Stats:'},
                { name: 'HP', value: '7126', inline: true },
                { name: 'FP', value: '361', inline: true },
                { name: 'AA', value: '337', inline: true },
                { name: 'TP', value: '241', inline: true },
                { name: 'EVA', value: '36', inline: true },
                { name: 'SPD', value: '30', inline: true },
                { name: 'ACC', value: '62', inline: true },
                { name: 'RLD', value: '171', inline: true },
                { name: 'LCK', value: '0', inline: true },
              )
              .attachFiles([attach])
              .setThumbnail('https://azurlane.koumakan.jp/w/images/9/9c/OdinChibi.png')
              .setImage(image)
              .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
              .setTimestamp();
              msg.channel.send(embed);
            };break;
            case 'test':{
                const attach='./img/ships/'+Cheshire[0]+'.png';
                const image='attachment://'+Cheshire[0]+'.png';
                console.log(attach+' '+image);
              const embed = new MessageEmbed()
              .setTitle(Cheshire[0]+' '+Cheshire[1])
              .setURL('https://azurlane.koumakan.jp/'+Cheshire[0])
              .setDescription(Cheshire[4])
              .addField('Rarity', 'Priority', true)
              .addField('Type', Cheshire[2],true)
              .setColor('0xffee00')
              .attachFiles([attach])
              .setThumbnail(Cheshire[3])
              .setImage(image)
              .setFooter('Moskas','https://moskas.github.io/IMG/icon.png')
              .setTimestamp();
              msg.channel.send(embed);
            }break;
            default:msg.reply('Nie ma takiego statku');break;
          }
        }
    }
});

bot.login('authkey');
