const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getRandomFriends } = require('./data');

connection.on('error', (err) => err);

// Get a random item given an array
const getRandomArrItem = (arr) =>{
  const arrValue = arr[Math.floor(Math.random() * arr.length)];
  return arrValue
}

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];  
   //I create a Friends Array from users fot put it into reaction-thought
  const usernameFriendsArray = [];
  let username = "";

  //loop for selecting friends that we are going to use in thoughts and reactions
  for (let i = 0; i < 10; i++) {    
    const usernameAndEmail= getRandomName();
    username = usernameAndEmail.split(' ')[0];   
    usernameFriendsArray.push(username);
  }

  //we will insert thoughts
  const thoughts = getRandomThoughts(10,usernameFriendsArray);
  const responseThought = await Thought.collection.insertMany(thoughts);
  const insertedIds = responseThought.insertedIds;
 // console.log('Thought Response ',insertedIds);
  const insertedIdsArray = Object.values(insertedIds)
  //console.log('Ids Array',insertedIdsArray);

  //loop for inserting users with the thoughts to de DB
  for (let i = 0; i < 10; i++) {    
    const usernameAndEmail= getRandomName();
    username = usernameAndEmail.split(' ')[0];
    const email = usernameAndEmail.split(' ')[1]; 
    const thoughts = [];
    thoughts.push(insertedIdsArray[i].toString());
    //const friends = getRandomFriends(usernameFriendsArray);

    users.push({
      username,
      email, 
      thoughts,      
    });   
   
  }

  const responseUser = await User.collection.insertMany(users);
  //const usersResult = await response;
  //console.log('response ',responseUser.insertedIds[0].toString());


 

  // loop through the saved thoughts, for each video we need to generate a video response and insert the video responses
  console.table(thoughts);
  console.table(users); 
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
