const username = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  ``,
];

const thoughtTextBodies = [
  'Start children off on the way they should go, and even when they are old they will not turn from it. Proverbs 22:6',
  'A wife of noble character who can find? She is worth far more than rubies. Proverbs 31:10',
  'There is a way that appears to be right, but in the end it leads to death. Proverbs 14:12',
  'Above all else, guard your heart, for everything you do flows from it. Proverbs 4:23',
  'Every word of God is flawless; he is a shield to those who take refuge in him. Proverbs 30:5',
  'As iron sharpens iron, so one person sharpens another. Proverbs 27:17',
  'Where there is no revelation, people cast off restraint; but blessed are those who heed wisdoms instruction. Proverbs 29:18',
  'A gentle answer turns away wrath, but a harsh word stirs up anger. Proverbs 15:1',
  'A friend loves at all times, and a brother is born for a time of adversity. Proverbs 17:17',
  'My son, do not forget my teaching, but keep my commands in your heart. Proverbs 3:1',
  'In all your ways submit to him, and he will make your paths straight. Proverbs 3:6',
];

const possibleReactions = [
  'Excelent words!',
  'Do you have another similar proverb',
  'This was awesome',
  'Thank you for the great content',
  'I like this one a lot',
  'God bless you',
  'PSalms are good too',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>{
  const randomNameOne = getRandomArrItem(username);
  const randomNameTwo = getRandomArrItem(username);
  const randomName = randomNameOne+randomNameTwo;
  return `${randomName} ${randomName}@criptosedena.org`;
}
// Function to generate random thoughts that we can add to the database. Includes thought responses.
const getRandomThoughts = (int,friendsArray) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    const usernameThought = getRandomArrItem(friendsArray);

    results.push({

      thoughtText: getRandomArrItem(thoughtTextBodies), 
      username: usernameThought,
      reactions: [...getThoughtReactions(3,friendsArray)],
      /*
      published: Math.random() < 0.5,
      description: getRandomArrItem(descriptionsBodies),
      advertiserFriendly: Math.random() < 0.5,
      responses: [...getThoughtResponses(3)],
      */
    });
  }
  return results;
};

// Create the responses that will be added to each Thought
const getThoughtReactions = (int,usernameReactionArray) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {   
    const usernameReaction = getRandomArrItem(usernameReactionArray);

    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: usernameReaction,
    });
  }
  return results;
};

// Function to generate random thoughts that we can add to the database. Includes thought responses.
const getRandomFriends = (usernameArray) => {
  let results = [];
  //let lengthFriends = Math.random(username.length); 
  let lengthFriends = Math.floor(Math.random() * usernameArray.length)
  //console.log('lengthFriends ',lengthFriends);

  for (let i = 0; i < lengthFriends; i++) {

    const usernameFriend = getRandomArrItem(usernameArray);
       
    results.push({     
      username: usernameFriend,
    });
  }
  //console.log('friends array',results);
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomFriends};
