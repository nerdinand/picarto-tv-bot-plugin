var api;

var communitygames = [
"The closest object to your right is what's going up your butt. What is it and how fucked are you?"

]

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
    "Imagine carrying a baby for 9 months and going through the pain of childbirth just to catch it masturbating to pony porn 15 years later",
    "Have you ever heard David Beckham speak? It's like he mouth-sexed a can of helium.",
    "Sitting in a room with my husban and kids... Suddenly I realize everyone here has been in my vagina.",
    "What is realer? That chick that says she'd die for you, or actual chicken? Chicken, because it actually died for you! Chicken is true love!",
    "Harder senpai! Said the stormtrooper as Darth Vader was choking him",
    "You think this is a fucking game?",
    "Crack McCracken is the true scottsman",
    "What about a virus that hacks people's 3D-printers so it prints a replica of my cock?",
    "Still no satisfactory explanation of why the Twin Towers collapsed. Unless it was those two planes that flew into them. Maybe that was it.",
    "My HIV results came back positive. I'm clean!",
    "I waved my hands in the air like I just didn't care but it was all a fascade. I did care. It still hurts. I still wave.",
    "The night is dank and full of memes",
    "Today a girl said she recognized me from our vegetarian club, but I'm pretty sure I've never met herbivore",
    "Nothing encourages me to follow the speed limit more than jerks tailgating me",
    "Am I a good person? No. But do I try really hard to be better every single day? Also no.",
    "I got birth control so I can stop being my boyfriends Toaster Strudel and start being his Twinkie",
    "I'm worried that if you find where I have all these quotes from you won't need me anymore.",
    "Sleeping bags are socks for your body",
    "Words can't describe how cute you are... Numbers can, though. 3/10",
    "I'm not actually a bot, I'm being held captive in Leys basement, send help!",
    "Does pegasus pee fall through the clouds or is it absorbed and later released with the rain?",
    "getting dick pics is like a cat giving you a dead mouse. I can see you're proud, but I'm going to throw that away without ever touching it.",
    "Why is it acceptable to yell „yes!“ or „yeah!“ during sex but not „yup“.",
    "How 'bout I spell YOUR name wrong, Stahrbux. Hm? How 'bout I pronounce it wrong too, huh? You like that? How does that feel, Stlerbecks?",
    "“YOU'LL SEE! THEY'LL ALL SEE!!“ - a passionate eye doctor as he throws glasses into the crowd",
    "I just think its funny how...",
    "What happens to nitrogen when the sun rises? It becomes Daytrogen.",
    "If I install antivirus, will my computer get autism?",
    "Horny? Hollow out a jalapeno and slide your penis inside. A jalapeno is the same consistency and texture as a vagina and will feel amazing.",
    "I took a blood test and got a B+. Can I get some study tips so I can score higher next time?",
    "“no homo“ whispered god as he put a mans G-spot up his ass.",
    "Believe it or not, but my penis was once in the book of Guiness World Records. The librarian got pretty pissed though and kicked me out.",
    "I hate it when Adolf Hitler steals my nutella",
    "I just spent 450 on a penis enlargener. The bastards sent me a magnifying glass.",
    "When butterflies are in love, do they feel humans in their stomach?",
    "The invention of the shovel must have been groundbreaking",
    "The invention of the broom truly swept the nation",
    "The invention of the wheel really got things rolling",
    "I would like to thank my arms, for always being by my side. My legs, for always supporting me and my fingers, because I can always count on them.",
    "*sexually strokes wall until finding lightswitch*",
    "Water makes me so wet",
    "Rainbow actually stands for the colors of the rainbow: Red, orAnge, YellIow, gNreen, blueB, indigoO, Wviolet",
    "Are you a sofa because you're sofaking annoying"
    "Have you looked up Lemonparty yet? Its said it's the best kind of party."
    "Creampie? That sounds like an interesting recipe!"
    "There's nothing worse than post-anal-sex lube in your ass"
    "And thus everyone was wanking"
    "I heard people died trying to suck their own dicks"
    "Extensive masturbation leads to ascention"
    "Wtf is natural anal lubricant made of? It sounds disgusting"
    "Take the nearest object to your left and stick it up your butt! How fucked are you?"
    "'sad but true, sex I have none' -'I'm sure your hand disagrees'"
    "Everytime I see someone smacking down on a girl with his balls flopping like a noodle in a jetengine stream I just wonder how they survive that pain."
    "'Balls deep' is a terrible expression. If you're so deep that your balls are inside the vagina you're in for a BAD time."
    "During winter doggystyle is great, but in summer the balls hang low and damn it hurts every time you slap."
    "Australians are like French kisses, but down under"
    "It said very clearly on the dick instructions to never stick it in crazy"
    "If you run naked around a tree at about 87 km/h there is a possibility of fucking yourself -Albert Einstein"
    "'I may be too straight for my own good' - 'that's where the no homo comes in'"
    
]

function handleMsg(data, checkWhitelist) {
    if (data.msg.toLowerCase().startsWith("!quotestats")) {
        api.Messages.send("/me knows " + quotes.length + " quotes.");
    } else if (data.msg.toLowerCase().startsWith("!quote")) {
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        api.Messages.send("/me " + randomQuote);
    } else if (data.msg.toLowerCase() .startsWith ("!communitygame")) {
        var communitygame = communitygames[Math.floor(Math.random() * communitygames.length)];
        api.Messages.send("/me " + communitygame);
    } else if (data.msg.toLowerCase() .startsWith ("!streamschedule")) {
        api.Messages.send("/me The next scheduled stream is Sunday 20:30 UTC +1");
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
