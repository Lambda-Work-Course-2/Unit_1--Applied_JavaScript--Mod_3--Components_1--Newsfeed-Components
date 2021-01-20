// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'New dimension filled with catnip found!',
    date: 'Jan 19st, 2021',
    firstParagraph: `Cats go for world domination stare at ceiling light brown cats with pink ears but check cat door for ambush 10 times before coming in yet funny little cat chirrup noise shaking upright tail when standing next to you. Mice give attitude that box? i can fit in that box, kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?, but twitch tail in permanent irritation so oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap purr purr purr until owner pets why owner not pet me hiss scratch meow. Mew lick the curtain just to be annoying, so demand to be let outside at once, and expect owner to wait for me as i think about it for meow all night having their mate disturbing sleeping humans poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree yet love to play with owner's hair tie. Prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot hey! you there, with the hands. Howl uncontrollably for no reason when in doubt, wash yet drink water out of the faucet or eats owners hair then claws head yet fart in owners food .  `,

    secondParagraph: `Catching very fast laser pointer massacre a bird in the living room and then look like the cutest and most innocent animal on the planet tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad i'm going to lap some water out of my master's cup meow. Catch eat throw up catch eat throw up bad birds peer out window, chatter at birds, lure them to mouth stare out the window but shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff knock dish off table head butt cant eat out of my own dish.  `,

    thirdParagraph: `Loved it, hated it, loved it, hated it ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss yet if human is on laptop sit on the keyboard stares at human while pushing stuff off a table hiss at vacuum cleaner jump around on couch, meow constantly until given food, . Meow meow mama i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk, yet am in trouble, roll over, too cute for human to get mad and pretend you want to go out but then don't, for sleep everywhere, but not in my bed yet pretend not to be evil. Pounce on unsuspecting person bite the neighbor's bratty kid for cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers lies down . Hide at bottom of staircase to trip human cat mojo cat playing a fiddle in hey diddle diddle?`
  }
];

function articleMaker(obj){
//create the elements needed so we can do things to them (They will like it I swear!)
    const articleDiv = document.createElement('div');  //Div contaner forall thearticle elements to live in, should gain class of article
    const articleTitle = document.createElement('h2'); // H2 will hold title text
    const articleDate = document.createElement('p');  //p element to hold the date of the article, should gain class date
    const articlePara1 = document.createElement('p');  //p element to hold the first parashraph
    const articlePara2 = document.createElement('p');  //p element to hold the second parashraph
    const articlePara3 = document.createElement('p');  //p element to hold the third parashraph
    const expandButton = document.createElement('span'); //span to act as a button, will need a click event to open / close, need class expandButton

//add content 
  articleTitle.innerText = obj.title; // H2 will hold title text
  articleDate.innerText = obj.date;  //p element to hold the date of the article, should gain class date
 articlePara1.innerText = obj.firstParagraph;  //p element to hold the first parashraph
 articlePara2.innerText = obj.secondParagraph;  //p element to hold the second parashraph
 articlePara3.innerText = obj.thirdParagraph;  //p element to hold the third parashraph
 expandButton.innerText = "-  +  -"; //span to act as a button, will need a click event to open / close

 //make the elements pretty with styles
articleDiv.classList.add('article'); //Div contaner forall thearticle elements to live in, should gain class of article
articleDate.classList.add('date'); //p element to hold the date of the article, should gain class date
expandButton.classList.add('expandButton'); // span to act as a button, will need a click event to open / close, need class expandButton

//add the elements to a parent
articleDiv.appendChild(articleTitle);     //adds title to the parent div
articleDiv.appendChild(articleDate);    //adds date to the parent div
articleDiv.appendChild(articlePara1);     //adds 1st p to the parent div
articleDiv.appendChild(articlePara2);   //adds 2ndst p to the parent div
articleDiv.appendChild(articlePara3);   //adds 3rd p to the parent div
articleDiv.appendChild(expandButton); //adds button span to the parent div

//   This listener should toggle the class 'article-open' on div.article.
expandButton.addEventListener('click', (event) => {
articleDiv.classList.toggle('article-open'); //target here is the main div NOT event.target
});
//returning parent div (this sill needs to be added to the DOM)
return(articleDiv);
};

 data.forEach(obj => {
 document.querySelector('.articles').appendChild(articleMaker(obj));
 });




