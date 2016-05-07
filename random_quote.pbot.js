var api;

var quotes = [
    "Anything's a dildo if you're brave enough",
    "Have your heard of the Dead Sea, the saltiest place on earth? Next to your bitch ass, that is...",
    "I wish everything was as easy as getting fat",
    "FENGA PAPIT",
    "You're getting a ticket, sir. That meme wasn't dank enough.",
    "If I had a dollar for every damn made up gender there was...",
    "I tried to put myself in your shoes, but they were cheap and ugly, just like you.",
    "I see you did not delete your browser history. I too like to live dangerously.",
    "-'I made $400.05 sucking dick yesterday' -'Who gave you the nickel?' -'They all did.'"
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

bacchanalia
