let message1 = document.getElementById('result1');
let message2 = document.getElementById('result2');
let message3 = document.getElementById('result3');
let messageAlert = document.getElementById("alert")
let btn = document.getElementById('btn');
let varName = 5
let emojis = [
  '😀', '😃', '😄', '😁', '😆','✔', '✅', '💖', '😊', '😇',
  '🥰', '😍', '🤩', '😎', '😌', '🥳', '🤗', '🙌', '👏', '🎉'
];
let numCharacters = document.getElementById('numCharacters').value
let colors = ['redColor', 'lightGreenColor', 'blueColor', 'yellowColor', 'whiteColor', 'blackColor', 'pinkColor', 'orangeColor', 'purpleColor', 'greenColor', 'lightGrayColor', 'darkGrayColor']
let ranSymbol = ['-', '_', '.']

let ranNames = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Sophia', 'Robert', 'Olivia', 'James', 'Ava', 'William', 'Emma', 'Joseph', 'Mia', 'Charles', 'Charlotte', 'Thomas', 'Amelia', 'Daniel', 'Ella', 'Matthew', 'Grace', 'Christopher', 'Liam', 'Elizabeth', 'Andrew', 'Aiden', 'Anna', 'Joshua', 'Madison', 'Anthony', 'Abigail', 'Benjamin', 'Sofia', 'Ethan', 'Chloe', 'Ryan', 'Evelyn', 'Samuel', 'Harper', 'Nathan', 'Addison', 'Jonathan', 'Lily', 'Noah', 'Natalie', 'Logan', 'Victoria', 'Jackson', 'Layla', 'Gabriel', 'Zoe', 'Christian', 'Lillian', 'Jonathan', 'Hannah', 'Elijah', 'Lyla', 'Nicholas', 'Grace', 'Caleb', 'Samantha', 'Isaac', 'Avery', 'Owen', 'Scarlett', 'Evan', 'Audrey', 'Connor', 'Camila', 'Henry', 'Leah', 'David', 'Nora', 'Luke', 'Aubrey', 'Isaiah', 'Madelyn', 'Brayden', 'Brooklyn', 'Dylan', 'Claire', 'Julian', 'Eleanor', 'Sebastian', 'Skylar', 'Isaiah', 'Liliana', 'Nolan', 'Peyton', 'Colton', 'Hazel', 'Angel', 'Lucy', 'Dominic', 'Aria', 'Austin', 'Kinsley', 'Jordan', 'Adeline', 'Liam', 'Zara', 'Adam', 'Sadie', 'Samuel', 'Annabelle', 'Eli', 'Gabriella', 'Carter', 'Madeline', 'Hunter', 'Aaliyah', 'Luke', 'Alyssa', 'Isaiah', 'Lydia', 'Jack', 'Ruby', 'Dylan', 'Mackenzie', 'Matthew', 'Nova', 'Nathan', 'Allison', 'Leo', 'Hailey', 'Mason', 'Brianna', 'Aaron', 'Violet', 'Eli', 'Katherine', 'Oscar', 'Nevaeh', 'Aidan', 'Hannah', 'David', 'Makayla', 'Wyatt', 'Luna', 'Jackson', 'Scarlet', 'Nicholas', 'Ariana', 'Christopher', 'Piper', 'Zachary', 'Autumn', 'Julian', 'Elena', 'Wyatt', 'Mila', 'Owen', 'Quinn', 'Daniel', 'Willow', 'Gabriel', 'Stella', 'Henry', 'Haley', 'Caleb', 'Isabella', 'Josiah', 'Emery', 'Anthony', 'Fiona', 'Landon', 'Aurora', 'Eli', 'Penelope', 'Lucas', 'Nova', 'Joseph', 'Madilyn', 'Jonathan', 'Kylie', 'Michael', 'Ariel', 'Evan', 'Lilah', 'Nicholas', 'Gianna', 'Levi', 'Harmony', 'Austin', 'Ivy', 'Nathaniel', 'Serenity', 'Isaac', 'Valentina', 'Grayson', 'Alexa', 'Elijah', 'Kaylee', 'Luke', 'Athena', 'Liam', 'Jocelyn', 'Daniel', 'Alaina', 'Alexander', 'Riley', 'Ethan', 'Jade', 'David', 'Eliza', 'Andrew', 'Willow', 'Benjamin', 'Laila', 'Samuel', 'Adalynn', 'Ryan', 'Jennifer', 'Nicholas', 'Raegan', 'Isaiah', 'Sara', 'Christian', 'Bella', 'Colton', 'Leilani', 'Sebastian', 'Melanie', 'Mason', 'Melody', 'Caleb', 'Kayla', 'Jonathan', 'Ayla'];


function changeNum(e) {
  btn.value = e
  varName = e
  make()
}
function makename() {
  let rand = Math.floor(Math.random() * ranNames.length)
  result = ranNames[rand]

  message1.innerHTML = result
}
/* generate code */
function makemail(length) {
  length = varName

  let result1 = '';
  let result2 = '';
  const characters1 = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength1 = characters1.length;
  let counter1 = 0;
  while (counter1 < length) {
    result1 += characters1.charAt(Math.floor(Math.random() * charactersLength1));
    counter1 += 1;
  }
  const characters2 = '0123456789';
  const charactersLength2 = characters2.length;
  let counter2 = 0;
  while (counter2 < 3) {
    result2 += characters2.charAt(Math.floor(Math.random() * charactersLength2));
    counter2 += 1;
  }
  message2.innerHTML = result1 + result2
}
function makepass(length) {
  let result = '';
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  message3.innerHTML = result
}
function make() {
  makename()
  makemail(6)
  makepass(12)
}
make()
function copy(containerid) {
  var range = document.createRange();
  document.getElementById("alert").innerHTML = ''
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  let randColor = colors[Math.floor(Math.random() * colors.length)]
  messageAlert.className = randColor
  let randEmojis = emojis[Math.floor(Math.random() * emojis.length)]
  messageAlert.innerHTML = `This will be copied to clipboard! ` + randEmojis;
}