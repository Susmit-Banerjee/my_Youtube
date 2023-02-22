let firstName = ["Alice","Amy","Anne","Arya","Charles","Charlotte","Elizabeth","Poppy","Daniel","Arthur","Emily","Fern","Gabriel","Harry","Henry","Herman","Hermione","Samuel","Chloe","Sara","Huckleberry","James","Jane","John","Julie","Laura","Leo","Lewis","Isla","Eva","Lucy","Nicholas","Oliver","Philip","Ramona","George","Noah","Selig","Wilbur","Thomas","Madeline","Meghan","Ralph","Jessica","Lilly","Iris","Freya","Alfie","William","Tony","Matilda","Margaret","Mike","Aurora","Hugo","Ethan","Amelia","Evelyn","Zelda","Sherlock"]
let surName = ["Allen","Brooks","Cooper","Davidson","Jones","Murphy","Perry","Roberts","Stevens","Taylor","Adams","Barnes","Collins","Elliott","Hughes","Morris","Pearson","Richardson","Simpson","Thomson","Baker","Bailey","Carter","Evans","Holmes","Miller","Parker","Reynolds","Smith","Wright","Atkinson","Armstrong","Butler","Fisher","Harris","Matthews","Owen","Powell","Russell","Watts","Lee","Anderson","Brown","Grant","Green","Lawrence","Murray","Phillips","Robertson","Watson"]

export function generateRandomNames() {
 return firstName[Math.floor(Math.random() * firstName.length)] + " " + surName[Math.floor(Math.random() * surName.length)]
}

const games = ['Fortnite', 'Minecraft', 'Call of Duty', 'Overwatch', 'League of Legends', 'Apex Legends', 'Genshin Impact', 'Among Us','Battlefield', 'Valorant', 'Rainbow Six Siege', 'Counter-Strike'];
const players = ['pro players', 'newbies', 'casual gamers', 'hardcore gamers', 'streamers', 'content creators'];
const genres = ['action', 'adventure', 'RPG', 'strategy', 'simulation', 'sports'];
const platforms = ['PC', 'console', 'mobile', 'VR'];
const characters = ['Mario', 'Ganyu','Diluc','Geralt of Rivia', 'Kratos', 'Aloy', 'Nathan Drake', ' Lara Croft'];
const enemies = ['aliens', 'zombies', 'robots', 'dragons', 'vampires', 'werewolves', 'demons'];
const actions = ['fighting', 'exploring', 'collecting items', 'solving puzzles', 'stealth'];
const opinions = ['love it', 'hate it', 'it is okay', 'have not played it yet'];

const randomGame = () => games[Math.floor(Math.random() * games.length)];
const randomPlayer = () => players[Math.floor(Math.random() * players.length)];
const randomCharacter = () =>
  characters[Math.floor(Math.random() * characters.length)];
const randomEnemy = () => enemies[Math.floor(Math.random() * enemies.length)];
const randomGenre = () => genres[Math.floor(Math.random() * genres.length)];
const randomPlatform = () =>
  platforms[Math.floor(Math.random() * platforms.length)];

const randomPlayer1 = () => players[Math.floor(Math.random() * players.length)];
const randomPlayer2 = () => players[Math.floor(Math.random() * players.length)];
const randomOpinion1 = () =>
  opinions[Math.floor(Math.random() * opinions.length)];
const randomOpinion2 = () =>
  opinions[Math.floor(Math.random() * opinions.length)];
const randomAction = () => actions[Math.floor(Math.random() * actions.length)];
const randomScore = () => Math.floor(Math.random() * 10) + 1;

export function generateRandomChat() {
  let messages = [
    "I haven't tried it yet, is it difficult?",
    "Nah, it's pretty easy. I finished it in like 10 minutes.",  
    `What's your favorite ${randomGenre()} game on ${randomPlatform()}? I'm really into that genre/platform combination right now.`,
    `Who would win in a fight between ${randomCharacter()} and ${randomEnemy()} ?`, 
    `I hope they fix the bugs in the ${randomGame()} too. It's been lagging a lot lately.`,
    "Yeah, I agree. I've been having a lot of connection issues too.",
    "I think it's because too many people are playing at the same time.",
    "That's definitely possible. It seems like the servers are always overloaded.",
    `What do you think about ${randomGame()} ?`,
    `I love playing it with ${randomPlayer()} !`,         
    `Hey, has anyone tried the new map in ${randomGame()} yet?`,
    "Yeah, I played it yesterday. It's pretty cool.",
    "What game are you guys talking about?",
    `I think it would be a close match!`,
    `Have you played ${randomGame()} before?`,
    `Yeah, I've played it a few times with some ${randomPlayer1()}.`,
    `How do you think it compares to other games in the ${randomGenre()} genre?`,
    `I think it's pretty unique, but I've heard some ${randomPlayer2()} say they don't like it as much.`,
    `They're talking about the new map on ${randomGame()} we all play.`,
    `Oh, I haven't played ${randomGame()} in a while. I should get back into it.`,
    `Have you guys heard about the new update of ${randomGame()} coming out next week?`,
    "No, what's in it?",
    `I just got a high score of ${randomScore()} in ${randomGame()} !`,
    `I heard they're adding a new character and a bunch of new weapons in ${randomGame()}`,
    "That sounds awesome!",
    `I really ${randomOpinion1()} ${randomGenre()} games, but I haven't played any on ${randomPlatform()} yet. What about you?`,
    `I ${randomOpinion2()} ${randomGenre()} games on ${randomPlatform()}. Have you tried any other genres on ${randomPlatform()}?`,
    `Have you played the new ${randomCharacter()} character in the game?`,
    `No, I haven't. What's it like?`,
    `It's a ${randomAction()} game where you play as ${randomCharacter()} and fight ${randomEnemy()}.`,
    `That sounds pretty cool! Is it a single player game or multiplayer?`,
    `Hey, did anyone see that awesome play in the last round? That was insane!`,
    `No, I missed it. What happened?`,
    `Someone pulled off this crazy trick shot and took out three people at once.`,
    `Wow, that's impressive. I wish I could do stuff like that.`,
    `Well, you just have to practice more. That's how I got good at ${randomGame()}.`,
    `It's a single player game, but there are some online features that let you compare your progress with other players.`,
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}


// // ?---------------



// // * ************************************** HARRY POTTER **************

// Person 1: Hey, did anyone else re-read the Harry Potter series recently?
// Person 2: Yes, I did! I forgot how much I love those books.
// Person 3: Me too! Which one is your favorite?
// Person 4: Definitely The Prisoner of Azkaban. I loved the introduction of Sirius Black.
// Person 5: That one's great, but I think I have to go with The Half-Blood Prince. It's so emotionally intense.
// Person 6: I'm a big fan of The Goblet of Fire. The Triwizard Tournament was so exciting.
// Person 7: The Order of the Phoenix was always my favorite. I loved seeing the students form Dumbledore's Army.
// Person 8: Honestly, I can't choose a favorite. They're all so good!
// Person 9: I wish I could go to Hogwarts. Imagine learning magic and making friends like Harry, Ron, and Hermione.
// Person 10: And fighting against Voldemort, of course!
// Person 11: Speaking of Voldemort, what do you guys think of the Fantastic Beasts movies?
// Person 12: I thought the first one was good, but the second one was a bit confusing.
// Person 13: I haven't seen the second one yet. Is it worth watching?
// Person 14: Eh, it's not as good as the first one, but it's still entertaining.
// Person 15: I'm just excited to see more of the wizarding world on screen.
// Person 16: Did you guys know there's a Harry Potter theme park in Orlando?
// Person 17: Yes, I've been there! It's so cool to walk around Diagon Alley and Hogwarts.
// Person 18: I've always wanted to go. Maybe we should plan a trip together!
// Person 19: That would be amazing. We could all get wands and go on the rides.
// Person 20: Speaking of wands, what's everyone's wand made of?
// Person 21: I have a unicorn hair core and a maple wood wand.
// Person 22: Mine is phoenix feather and holly wood.
// Person 23: Mine is dragon heartstring and walnut wood.
// Person 24: I have a thestral tail hair core and a yew wood wand.
// Person 25: I have a unicorn hair core and a cherry wood wand.
// Person 26: I have a dragon heartstring core and a vine wood wand.
// Person 27: Mine is unicorn hair core and a cedar wood wand.
// Person 28: I have a phoenix feather core and an ebony wood wand.
// Person 29: I have a dragon heartstring core and a fir wood wand.
// Person 30: I have a phoenix feather core and a birch wood wand.

// const characters = [
//     "Harry",
//     "Ron",
//     "Hermione",
//     "Ginny",
//     "Neville",
//     "Luna",
//     "Fred",
//     "George",
//     "Cho",
//     "Cedric",
//     "Draco",
//     "Snape",
//     "McGonagall",
//     "Dumbledore",
//     "Hagrid",
//     "Sirius",
//     "Remus",
//     "Bellatrix",
//     "Voldemort",
//     "Lucius",
//     "Narcissa",
//     "Kingsley",
//     "Tonks",
//     "Fleur",
//     "Bill",
//     "Percy",
//     "Charlie",
//     "Arthur",
//     "Molly",
//     "Dobby",
//     "Kreacher",
//     "Winky",
//     "Ollivander",
//     "Flitwick",
//     "Sprout",
//     "Trelawney",
//     "Filch",
//     "Madame Maxime",
//     "Rita Skeeter",
//     "Grawp",
//     "Aragog",
//     "Buckbeak",
//     "Fang",
//     "Scabbers",
//     "Crookshanks",
//     "Pigwidgeon",
//     "Errol",
//     "Hedwig",
//   ];

//   // ?=========================================================
//   here's an example of how you could use JavaScript to generate random conversations around Harry Potter characters:

//   const conversations = [];

//   for (let i = 0; i < 30; i++) {
//     let conversation = "";
//     const numMessages = Math.floor(Math.random() * 10) + 1; // generate 1-10 messages per conversation
//     for (let j = 0; j < numMessages; j++) {
//       const speakerIndex = Math.floor(Math.random() * characters.length);
//       const speaker = characters[speakerIndex];
//       let message = "";
//       if (speaker === "Harry") {
//         message = "I can't believe I'm a wizard!";
//       } else if (speaker === "Ron") {
//         message = "That Hermione is really something, isn't she?";
//       } else if (speaker === "Hermione") {
//         message = "I just wish people would take magical creatures more seriously.";
//       } else if (speaker === "Ginny") {
//         message = "I'm so glad Harry finally noticed me.";
//       } else if (speaker === "Neville") {
//         message = "I'm not sure I'm cut out for this.";
//       } else if (speaker === "Luna") {
//         message = "Nargles are real, you know.";
//       } else if (speaker === "Fred" || speaker === "George") {
//         message = "Mischief managed!";
//       } else if (speaker === "Draco") {
//         message = "My father will hear about this!";
//       } else if (speaker === "Snape") {
//         message = "Potter, what are you doing in my classroom?";
//       } else if (speaker === "McGonagall") {
//         message = "This is a school, not a playground!";
//       } else if (speaker === "Dumbledore") {
//         message = "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.";
//       } else if (speaker === "Hagrid") {
//         message = "I shouldn't have told you that.";
//       } else if (speaker === "Voldemort") {
//         message = "Avada Kedavra!";
//       } else {
//         message = "I love magic!";
//       }
//       conversation += `${speaker}: ${message}\n`;
//     }
//     conversations.push(conversation);
//   }

//   const fanbase = [
//   "What house are you in?",
//   "Who is your favorite character?",
//   "What's your favorite book/movie?",
//   "What's your favorite spell?",
//   "What's your favorite magical creature?",
//   "What's your favorite class at Hogwarts?",
//   "Which death hit you the hardest?",
//   "What's your favorite magical object?",
//   "What's your favorite fan theory?",
//   "What's your favorite fanfiction?",
//   "What would your patronus be?",
//   "What's your favorite quote from the books/movies?",
//   "What's your favorite wizarding family?",
//   "What would your wand be made of?",
//   "Who would you want as your Hogwarts professor?",
//   "What's your favorite scene in the books/movies?",
//   "What do you think happened to the characters after the series ended?",
//   "Who do you ship?",
//   "What's your favorite Quidditch team?",
//   "What's your favorite magical food?",
//   "What's your favorite magical drink?",
//   "What's your favorite magical location?",
//   "What's your favorite fan art?",
//   "What's your favorite fan-made video?",
//   "What's your favorite moment of character development?",
//   "What would your animagus form be?",
//   "What's your favorite magical job?",
//   "What's your favorite magical object you wish you had?",
//   "What's your favorite wizarding sport?",
// ];

// const discussions = [];

// for (let i = 0; i < 30; i++) {
//   let discussion = "";
//   const numMessages = Math.floor(Math.random() * 10) + 1; // generate 1-10 messages per discussion
//   for (let j = 0; j < numMessages; j++) {
//     const messageIndex = Math.floor(Math.random() * fanbase.length);
//     const message = fanbase[messageIndex];
//     discussion += `${message}\n`;
//   }
//   discussions.push(discussion);
// }
