const shout = (string) => string.toUpperCase();

const whisper = (string) => string.toLowerCase();

const logShout = (string) => console.log(string.toUpperCase());

const logWhisper = (string) => console.log(string.toLowerCase());

function sayHiToHeadphonedRoommate (string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return 'I would love to!';
    };
};

// const sayHiToHeadphonedRoommate = (string) => string === string.toLowerCase() ? "I can't hear you!" : 0 ;

