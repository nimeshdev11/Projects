let myjokes = [
    {
        "category": "Misc",
        "type": "single",
        "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 201,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id"   : 23,
        "safe" : true,
        "lang" : "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
        "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
        },
        "id": 180,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 41,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "How do you make holy water? You boil the hell out of it.",
        "flags": {
            "nsfw": false,
            "religious": true,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 202,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "If you're here for the yodeling lesson, please form an orderly orderly orderly queue.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 139,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Me and my Jewish friend were eating lunch and I farted. He got mad so I said \"cmon man a little gas never killed anyone\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": true
        },
        "id": 103,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": false
        },
        "id": 133,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 185,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 152,
        "safe": false,
        "lang": "en"
    }
];

function nextjoke(){
let index = Math.floor(Math.random()*(myjokes.length-1));
    jokes.innerHTML = myjokes[index].joke;
}
nextjoke();
