var api;

var quotes = [
    "Anything's a dildo if you're brave enough",
    "Have you heard of the Dead Sea, the saltiest place on earth? Next to your bitch ass, that is...",
    "I wish everything was as easy as getting fat",
    "FENGA PAPIT",
    "You're getting a ticket, sir. That meme wasn't dank enough.",
    "If I had a dollar for every damn made up gender there was...",
    "I tried to put myself in your shoes, but they were cheap and ugly, just like you.",
    "I see you did not delete your browser history. I too like to live dangerously.",
    "-'I made $400.05 sucking dick yesterday' -'Who gave you the nickel?' -'They all did.'",
    "Do you guys really think that someone would just get on the internet and tell lies?",
    "Little do you guys know, I'm actually five years old",
    "Swiggity Swooty I'm coming for that booty",
    "Not since the accident",
    "I don't have a dirty mind, I have a sexy imagination",
    "Kinky is using a feather. Perverted is using the whole chicken",
    "When someone tells me „great question“ I never hear their answer because I'm busy congratulating myself for asking such a great question.",
    "Random fact: Everyone is naked under their clothes. Just in case you didn't know.",
    "Random fact: Your lip skin is the same as your butthole skin.",
    "Dogs are probably really excited about dog sledding before they find out what it actually is.",
    "Honestly? If you keep hanging up on me every time I ask, your salon doesn't deserve to wax my parakeets butthole.",
    "Me: Have a nice day, sir.  *guy leaves store, gets hit by car crossing street*  *I run out, kneel beside him*  What did I just fucken tell you!?",
    "Kids have you applied the minty paste to the exposed part of your skeleton? Yes? Well now its time to lie down in a dark room for hours.",
    "„So doc... am I dying?“ „We're all dying, just at different paces“ „But what about me?“ „You're like, the Usain Bolt of dying dude lmao“",
    "Imagine carrying a baby for 9 months and going through the pain of childbirth just to catch it masturbating to pony porn 15 years later"
    
]

function handleMsg(data, checkWhitelist) {
    if (data.msg.toLowerCase().startsWith("!quote")) {
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        api.Messages.send("/me " + randomQuote);
    }
}

module.exports = {
    meta_inf: {
        name: "Random quote",
        version: "1.0.0",
        description: "Type !quote to receive a random quote from a predefined list",
        author: "nerdinand"
    },
    load: function (_api) {
        api = _api;
    },
    start: function () {
        api.Events.on("userMsg", handleMsg);
    },
    stop: function () {
        api.Events.removeListener("userMsg", handleMsg);
    }
}
