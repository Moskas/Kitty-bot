console.log("Uruchamianie...");
// File reader
const fs = require('fs');

// Discord.js
const bot = require ('discord.js');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const client = new bot.Client();

// Azur Lane API
const { getEquipment, getShipByEnglishName, getShip, getEquipmentByEnglishName } = require('@azurapi/azurapi')
const azurlane = require('@azurapi/azurapi');
const { equal } = require('assert');

// Kolory rzadkości statkow
// ENUM with ship rarity colors
let rarity=""; // Zmienna dla switcha
const color = {
 N :"0xd4d4d4", // White 
 R :"0x42e3f5", // Blue
 E :"0xbc42f5", // Purple
 SR :"0xffee00", // Yellow
 UR :"0xff009d", // Pink
}

function rarity_color(ship){
	switch(getShipByEnglishName(ship).rarity){
	case "Normal":rarity=color.N;break;
	case "Rare":rarity=color.R;break;
	case "Elite":rarity=color.E;break;
	case "Super Rare":rarity=color.SR;break;
	case "Priority":rarity=color.SR;break;
	case "Ultra Rare":rarity=color.UR;break;
	case "Decisive":rarity=color.UR;break;
	}
	return rarity;
}

// Wczytanie JSON'a ze wszystkimi statystykami statków
// Getting JSON file with ship stats 
let shipfus;
fs.readFile('./json/ships.json', 'utf8', function (err,data) {
	  if (err) {
		      return console.log(err);
		    }
	  shipfus = data;
	return shipfus;
});

let config_json;
fs.readFile('./config/config.json', 'utf8', function (err,data) {
	  if (err) {
		      return console.log(err);
		    }
	  config_json = data;
	return config_json;
});
let language;

// Funkcja podawania czasu (uzywana przy logowaniu)
// Function for getting time (used when logging in)
function czas(){
	data_czas = new Date();
	return data_czas;
}

function format(seconds){
	function pad(s){
	  return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60*60));
	var minutes = Math.floor(seconds % (60*60) / 60);
	var seconds = Math.floor(seconds % 60);
  
	return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }

let uptime;
// Czynności bota które są wykonywane po połączeniu z Discordem
client.on('ready', () => {
//	var login = Math.floor(Math.random() * 539);
	czas();
	console.log('Polaczono pomyslnie jako Kitty '+ data_czas +' '); // Informacja o połączeniu
	obj = JSON.parse(shipfus); // Wczytywanie JSON
	cfg = JSON.parse(config_json);
});


// Ustawianie prefiksu do komend
// Setting up prefix for commands
function commandIs(str,msg){
return msg.content.startsWith(cfg.config[0].prefix + str);
}

// Pętla wyczekująca wiadomości na czacie
// Loop for catching new messages in chat
client.on('message', msg  => {

 // Podawanie avatara
 // Sending avatar
 if(commandIs("avatar",msg)){
	 const embed = new MessageEmbed() 
	 .setTitle(msg.member.user.tag)
	 .setColor("#FF0000") // Red
	 .setImage(msg.author.avatarURL());
	 msg.channel.send(embed);
 }

 if(commandIs("uptime",msg)){
	uptime = process.uptime();
	msg.channel.send(format(uptime));
 }

 if(commandIs("help",msg)){
 }

 // Wyszukiwanie pasujących statków do podanej frazy/znaku
 // Searching function for all matching ships from given phrase
 if(commandIs("lookup",msg)){
	 let trafione =" | ";
	let ship = msg.content.split(/[ ]+/);
	 ship = ship.join(" ").substring(8).toLowerCase();
	let query = new RegExp(ship,"g");
	for(i in obj.ships)
	 if(obj.ships[i].name.toLowerCase().match(query))
		trafione+=obj.ships[i].name+" | ";
	 if(trafione!="")
	 msg.channel.send('\`\`\`'+trafione+'\`\`\`');
	 else
	 msg.channel.send("Nie znaleziono pasującego statku");
 }


// Podawanie losowego statku razem z grafika, nacja i typem statku razem z jego rzadkoscia
// Sending message embed with information about searched ship including graphic of the ship
 if(commandIs("ship",msg)){
	let i=1;
	let ship = msg.content.split(/[ ]+/);
	 ship = ship.join(" ").substring(6);
	if(ship==='-r'){
		i = Math.floor(Math.random()*obj.ships.length);
		console.log(i);
		let img=obj.ships[i].name.replace(/ /g,"_");
			const attach='./img/'+img+'.png';
			const image='attachment://'+img+'.png';
		        switch(obj.ships[i].rarity){
				case "Normal":rarity=color.N;break;
				case "Rare":rarity=color.R;break;
				case "Elite":rarity=color.E;break;
				case "Super Rare":rarity=color.SR;break;
				case "Priority":rarity=color.SR;break;
				case "Ultra Rare":rarity=color.UR;break;
				case "Decisive":rarity=color.UR;break;
			}
		        const embed = new MessageEmbed()
			.setTitle(obj.ships[i].name)
			.setURL("https://azurlane.koumakan.jp/"+obj.ships[i].name.replace(/ /g,"_").replace(/\_\(Retrofit\)/g,""))
			.addFields(
			{name:'Nation', value:obj.ships[i].nation , inline:true},
			{name:'Type', value:obj.ships[i].type , inline:true}
			)
			.attachFiles([attach])
			.setColor(rarity)
			.setImage(image)
			.setTimestamp();
		console.log(obj.ships[i]);
		msg.channel.send(embed);
	}
 }

 if(commandIs("ship",msg)){
	 let found = false;
	 let ship = msg.content.split(/[ ]+/);
	 ship = ship.join(" ").substring(6); 
       	for(i in obj.ships){
       		if(obj.ships[i].name.toLowerCase()===ship.toLowerCase()){
	       		let img=obj.ships[i].name.replace(/ /g,"_");
	       		const attach='./img/'+img+'.png';
	       		const image='attachment://'+img+'.png';
	switch(obj.ships[i].rarity){
		case "Normal":rarity=color.N;break;
		case "Rare":rarity=color.R;break;
		case "Elite":rarity=color.E;break;
		case "Super Rare":rarity=color.SR;break;
		case "Priority":rarity=color.SR;break;
		case "Ultra Rare":rarity=color.UR;break;
		case "Decisive":rarity=color.UR;break;
	}
	const embed = new MessageEmbed()
	   	.setTitle(obj.ships[i].name)
		.setURL("https://azurlane.koumakan.jp/"+obj.ships[i].name.replace(/ /g,"_").replace(/\_\(Retrofit\)/g,""))
		.addFields(
			{name:'Nation', value:obj.ships[i].nation , inline:true},
			{name:'Type', value:obj.ships[i].type , inline:true}
		)
		.attachFiles([attach])
		.setColor(rarity)
		.setImage(image)
		.setTimestamp();
		console.log(obj.ships[i]);
        msg.channel.send(embed);
	found = true; //Oznaczenie ze znaleziono statek zeby nie wyswietlac blednie informacji o braku statku 
		} else {
		 if(found === false){
			 console.log("Nie znaleziono statku");
		 	}
		 }
	}
 }

if(commandIs("stats",msg)){
	let found = false;
	let ship = msg.content.split(/[ ]+/);
	ship = ship.join(" ").substring(7);
	if(ship.length===0){
		msg.reply("Nie podales nazwy statku");
	} else {
		for(i in obj.ships){
			if(obj.ships[i].name.toLowerCase()==ship.toLowerCase()){
				console.log(obj.ships[i]);
			rarity="";
			switch(obj.ships[i].rarity){
			case "Normal":rarity=color.N;break;
			case "Rare":rarity=color.R;break;
			case "Elite":rarity=color.E;break;
			case "Super Rare":rarity=color.SR;break;
			case "Priority":rarity=color.SR;break;
			case "Ultra Rare":rarity=color.UR;break;
			case "Decisive":rarity=color.UR;break;
			}
	embed = new MessageEmbed()
		.setTitle(obj.ships[i].type+" "+obj.ships[i].name+" Lvl 120")
		.setURL("https://azurlane.koumakan.jp/"+obj.ships[i].name.replace(/ /g,"_").replace(/\_\(Retrofit\)/g,""))
		.addFields(
			{name:'Defensive',value:"HP: "+obj.ships[i].hp+" Armor: "+obj.ships[i].armor+" Eva: "+obj.ships[i].eva+" Speed: "+obj.ships[i].spd},
			{name:'Offensive',value:"FP: "+obj.ships[i].fp+" AA: "+obj.ships[i].aa+" Avi: "+obj.ships[i].avi+" Trp: "+obj.ships[i].trp+" Accuracy: "+obj.ships[i].acc+" Asw: "+obj.ships[i].asw},
			{name:'Other',value:"Luck: "+obj.ships[i].lck+" Reload: "+obj.ships[i].rld+" Oil: "+obj.ships[i].oil+" Ammo: "+obj.ships[i].ammo}
		)
		.setColor(rarity)
		.setTimestamp();
	msg.channel.send(embed);
		found=true;
	}
}
if(found===false){
	msg.reply("Nie znaleziono statku");
		}
	}
}

if(commandIs("wiki",msg)){
		let ship = msg.content.split(/[ ]+/);
		ship = ship.join(" ").substring(5);
		msg.channel.send(getShipByEnglishName(ship).wikiUrl);
}

if(commandIs("alship",msg)){
	let ship = msg.content.split(/[ ]+/);
	ship = ship.join(" ").substring(8);
	if(getShipByEnglishName(ship)!=undefined){
	rarity_color(ship);
	const embed = new MessageEmbed()
	   	.setTitle(getShipByEnglishName(ship).names.en)
		.setURL(getShipByEnglishName(ship).wikiUrl)
		.addFields(
			{name:'Nation', value:getShipByEnglishName(ship).nationality , inline:true},
			{name:'Type', value:getShipByEnglishName(ship).hullType , inline:true}
		)
		.setColor(rarity)
		.setImage(getShipByEnglishName(ship).skins[0].image)
		.setTimestamp();
        msg.channel.send(embed);
	}
}

if(commandIs("eq",msg)){

	let eq = msg.content.split(/[ ]+/);
	eq = eq.join(" ").substring(4);
	console.log(eq);
	const embed = new MessageEmbed()
	   	.setTitle(getEquipmentByEnglishName(eq).names.en)
		.setURL(getEquipmentByEnglishName(eq).wikiUrl)
		.addFields(
			{name:'Nation', value:getEquipmentByEnglishName(eq).nationality , inline:true},
			{name:'Fit', value:getEquipmentByEnglishName(eq).type.name , inline:true}
		)
		.setThumbnail(getEquipmentByEnglishName(eq).image)
		.setTimestamp();

		msg.channel.send(embed);
}

// Porównianie statystyk dwóch podanych statków
// Compare stats of two ships
if(commandIs("compare",msg)){
	let comp,ship=[0,0];
	console.log("porownanie statkow");
	comp=msg.content.split(/[ ]+/);
	comp = comp.join(" ").substring(9);
	comp=comp.split(/[|]+/);
	console.log(comp);
	for(i in obj.ships){
		if(comp[0]===obj.ships[i].name)
			ship[0]=i;
		if(comp[1]===obj.ships[i].name)
			ship[1]=i;
	}
	console.log(ship);
//		Porownywanie
	let sign = [,,,,,,,,,,,,,];
 	switch(true){
//		Firepower			
		case (obj.ships[ship[0]].fp>obj.ships[ship[1]].fp):sign[0]='>';break;
		case (obj.ships[ship[0]].fp<obj.ships[ship[1]].fp):sign[0]='<';break;
		case (obj.ships[ship[0]].fp==obj.ships[ship[1]].fp):sign[0]='=';break;
	}
//      Anti-air
	switch(true){
		case (obj.ships[ship[0]].aa>obj.ships[ship[1]].aa):sign[1]='>';break;
		case (obj.ships[ship[0]].aa<obj.ships[ship[1]].aa):sign[1]='<';break;
		case (obj.ships[ship[0]].aa==obj.ships[ship[1]].aa):sign[1]='=';break;
	}
//      Torpedo
	switch(true){
		case (obj.ships[ship[0]].trp>obj.ships[ship[1]].trp):sign[2]='>';break;
		case (obj.ships[ship[0]].trp<obj.ships[ship[1]].trp):sign[2]='<';break;
		case (obj.ships[ship[0]].trp==obj.ships[ship[1]].trp):sign[2]='=';break;
	}
//      Anti-air
	switch(true){
		case (obj.ships[ship[0]].aa>obj.ships[ship[1]].aa):sign[1]='>';break;
		case (obj.ships[ship[0]].aa<obj.ships[ship[1]].aa):sign[1]='<';break;
		case (obj.ships[ship[0]].aa==obj.ships[ship[1]].aa):sign[1]='=';break;
	}
//      Aviation
	switch(true){
		case (obj.ships[ship[0]].avi>obj.ships[ship[1]].avi):sign[3]='>';break;
		case (obj.ships[ship[0]].avi<obj.ships[ship[1]].avi):sign[3]='<';break;
		case (obj.ships[ship[0]].avi==obj.ships[ship[1]].avi):sign[3]='=';break;
	}
//      Reload
	switch(true){
		case (obj.ships[ship[0]].rld>obj.ships[ship[1]].rld):sign[4]='>';break;
		case (obj.ships[ship[0]].rld<obj.ships[ship[1]].rld):sign[4]='<';break;
		case (obj.ships[ship[0]].rld==obj.ships[ship[1]].rld):sign[4]='=';break;
	}
//      HP
	switch(true){
		case (obj.ships[ship[0]].hp>obj.ships[ship[1]].hp):sign[5]='>';break;
		case (obj.ships[ship[0]].hp<obj.ships[ship[1]].hp):sign[5]='<';break;
		case (obj.ships[ship[0]].hp==obj.ships[ship[1]].hp):sign[5]='=';break;
	}
//      Evasion
	switch(true){
		case (obj.ships[ship[0]].eva>obj.ships[ship[1]].eva):sign[6]='>';break;
		case (obj.ships[ship[0]].eva<obj.ships[ship[1]].eva):sign[6]='<';break;
		case (obj.ships[ship[0]].eva==obj.ships[ship[1]].eva):sign[6]='=';break;
	}
//      Speed
	switch(true){
		case (obj.ships[ship[0]].spd>obj.ships[ship[1]].spd):sign[7]='>';break;
		case (obj.ships[ship[0]].spd<obj.ships[ship[1]].spd):sign[7]='<';break;
		case (obj.ships[ship[0]].spd==obj.ships[ship[1]].spd):sign[7]='=';break;
	}
//      Luck
	switch(true){
		case (obj.ships[ship[0]].lck>obj.ships[ship[1]].lck):sign[8]='>';break;
		case (obj.ships[ship[0]].lck<obj.ships[ship[1]].lck):sign[8]='<';break;
		case (obj.ships[ship[0]].lck==obj.ships[ship[1]].lck):sign[8]='=';break;
	}
//      Anti-submarine Warfare
	switch(true){
		case (obj.ships[ship[0]].asw>obj.ships[ship[1]].asw):sign[9]='>';break;
		case (obj.ships[ship[0]].asw<obj.ships[ship[1]].asw):sign[9]='<';break;
		case (obj.ships[ship[0]].asw==obj.ships[ship[1]].asw):sign[9]='=';break;
	}
//      Ammo
	switch(true){
		case (obj.ships[ship[0]].ammo>obj.ships[ship[1]].ammo):sign[10]='>';break;
		case (obj.ships[ship[0]].ammo<obj.ships[ship[1]].ammo):sign[10]='<';break;
		case (obj.ships[ship[0]].ammo==obj.ships[ship[1]].ammo):sign[10]='=';break;
	}
//      Oxygen
	switch(true){
		case (obj.ships[ship[0]].oxy>obj.ships[ship[1]].oxy):sign[11]='>';break;
		case (obj.ships[ship[0]].oxy<obj.ships[ship[1]].oxy):sign[11]='<';break;
		case (obj.ships[ship[0]].oxy==obj.ships[ship[1]].oxy):sign[11]='=';break;
	}
//      Oxygen
	switch(true){
		case (obj.ships[ship[0]].oil>obj.ships[ship[1]].oil):sign[12]='>';break;
		case (obj.ships[ship[0]].oil<obj.ships[ship[1]].oil):sign[12]='<';break;
		case (obj.ships[ship[0]].oil==obj.ships[ship[1]].oil):sign[12]='=';break;
	}
	
// Wysylanie gotowego porownania
// Sending whole comparison
	        const embed = new MessageEmbed()
	            	.setTitle("Report")
			.setColor("FF0000")
	                .addFields(
			{name:"Ship names",value:obj.ships[ship[0]].name+" | "+obj.ships[ship[1]].name},
			{name:"FP",value:obj.ships[ship[0]].fp+sign[0]+obj.ships[ship[1]].fp,inline:true},
			{name:"AA",value:obj.ships[ship[0]].aa+sign[1]+obj.ships[ship[1]].aa,inline:true},
			{name:"TRP",value:obj.ships[ship[0]].trp+sign[2]+obj.ships[ship[1]].trp,inline:true},
			{name:"AVI",value:obj.ships[ship[0]].avi+sign[3]+obj.ships[ship[1]].avi,inline:true},
			{name:"RLD",value:obj.ships[ship[0]].rld+sign[4]+obj.ships[ship[1]].rld,inline:true},
			{name:"HP",value:obj.ships[ship[0]].hp+sign[5]+obj.ships[ship[1]].hp,inline:true},
			{name:"Armor",value:obj.ships[ship[0]].armor+" "+obj.ships[ship[1]].armor,inline:true},
			{name:"EVA",value:obj.ships[ship[0]].eva+sign[6]+obj.ships[ship[1]].eva,inline:true},
			{name:"SPD",value:obj.ships[ship[0]].spd+sign[7]+obj.ships[ship[1]].spd,inline:true},
			{name:"LCK",value:obj.ships[ship[0]].lck+sign[8]+obj.ships[ship[1]].lck,inline:true},
			{name:"ASW",value:obj.ships[ship[0]].asw+sign[9]+obj.ships[ship[1]].asw,inline:true},
			{name:"AMMO",value:obj.ships[ship[0]].ammo+sign[10]+obj.ships[ship[1]].ammo,inline:true},
			{name:"OXY",value:obj.ships[ship[0]].oxy+sign[11]+obj.ships[ship[1]].oxy,inline:true},
			{name:"Oil",value:obj.ships[ship[0]].oil+sign[12]+obj.ships[ship[1]].oil,inline:true}
			)
	                .setTimestamp();
	        msg.channel.send(embed);
	}

		
	if(commandIs("alcompare",msg)){
		let comp,ship=[0,0];
		console.log("porownanie statkow");
		comp=msg.content.split(/[ ]+/);
		comp = comp.join(" ").substring(11);
		comp=comp.split(/[|]+/);
		console.log(comp);

		ship[0]= getShipByEnglishName(comp[0]);
		ship[1]= getShipByEnglishName(comp[1]);

		msg.channel.send(ship);
	}

});


client.login('key');
client.on("error", () => { client.login('key') });
