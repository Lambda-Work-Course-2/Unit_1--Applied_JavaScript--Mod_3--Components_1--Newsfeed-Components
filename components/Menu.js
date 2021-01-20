// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


const menuMaker = (arr) => {
//create the elements needed so we can do things to them (They will like it I swear!)
  const menuDiv = document.createElement('div');
  const menuList = document.createElement('ul');
  //Loop to create the links
  arr.forEach(link => {
    const listItem = document.createElement('li'); //make the the list item
    listItem.textContent = link; // give the link a name
    menuList.appendChild(listItem);  //add the item to the list
  
  });

  //Don't forget to be classy
  menuDiv.classList.add('menu');
  
//Add the list to its parent
  menuDiv.appendChild(menuList);
  
  //event listener to open and close the menu
  document.querySelector('img').addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
  })
   
  return menuDiv;
}
document.querySelector('.header').appendChild(menuMaker(menuItems));


