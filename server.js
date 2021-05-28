const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
var x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  message.content = message.content // let content ( a variable used to fetch response ) be equal to the message's content                  
  
  if (!message.content)
    return message.channel.send("I can only reply to text messages");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "Tomodachi", // Add Owner Name Here
    language: "auto" // You can change the language here ( auto ) states it will detect your language and prepare a response in english for you
  }).then(response => {
    message.channel.send(response);                               
  });
});
client.login(process.env.TOKEN); //login using the token
