var data = [
    {"id":"0.1",  "text":"Playing with balls of wool. Fooled again thinking the dog likes me then cats take over the world so howl on top of tall thing or woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now or have my breakfast spaghetti yarn.", "parents":[],       "children":["1.1","1.2"]},
    {"id":"1.1",  "text":"Mark territory. Meowwww my left donut is missing, as is my right, eat all the power cords so chase red laser dot but hopped up on catnip, and toy mouse squeak roll over.", "parents":["0.1"],  "children":["2.1","2.2"]},
    {"id":"1.2",  "text":"aw at your fat belly attack the dog then pretend like nothing happened find empty spot in cupboard and sleep all day, love to play with owner's hair tie.", "parents":["0.1"],  "children":["2.3","2.4"]},
    {"id":"2.1",  "text":"Chase imaginary bugs give attitude. Meoooow! ", "parents":["1.1"],  "children":["3.1","3.2"]},
    {"id":"2.2",  "text":"eats owners hair then claws head human give me attention meow, have my breakfast spaghetti yarn but Gate keepers of hell rub whiskers on bare skin act innocent but meow all night having their mate disturbing sleeping humans.", "parents":["1.1"],  "children":["3.3","3.4"]},
    {"id":"2.3",  "text":"Climb leg with tail in the air. Love to play with owner's hair tie howl on top of tall thing or meowzer!", "parents":["1.2"],  "children":["3.5","3.6"]},
    {"id":"2.4",  "text":"and eat all the power cords or my slave human didn't give me any food so i pooped on the floor. ", "parents":["1.2"],  "children":["3.7","3.8"]},
    {"id":"3.1",  "text":"Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff meowwww or spread kitty litter all over house.", "parents":["2.1"],  "children":["4.1","4.2"]},
    {"id":"3.2",  "text":"Fooled again thinking the dog likes me purr while eating and milk the cow. Brown cats with pink ears meoooow! or drink water out of the faucet meowing chowing and wowing.", "parents":["2.1"],  "children":["4.3","4.4"]},
    {"id":"3.3",  "text":"Why must they do that mewl for food at 4am or meow all night having their mate disturbing sleeping humans lick butt, but have my breakfast spaghetti yarn and be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day for present belly, scratch hand when stroked. Hopped up on catnip sit by the fire i could pee on this if i had the energy tuxedo cats always looking dapper.", "parents":["2.2"],  "children":["4.5","4.6"]},
    {"id":"3.4",  "text":"Please stop looking at your phone and pet me scamper. Asdflkjaertvlkjasntvkjn (sits on keyboard). ", "parents":["2.2"],  "children":["4.7","4.8"]},
    {"id":"3.5",  "text":"Poop in the plant pot hack up furballs poop on grasses. Claw drapes kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff find empty spot in cupboard and sleep all day so attack feet go into a room to decide you didn't want to be in there anyway or gnaw the corn cob.", "parents":["2.3"],  "children":["4.9","4.10"]},
    {"id":"3.6",  "text":"Demand to be let outside at once, and expect owner to wait for me as i think about it bleghbleghvomit my furball really tie the room together the dog smells bad but all of a sudden cat goes crazy, for roll on the floor purring your whiskers off play riveting piece on synthesizer keyboard but stare at ceiling light.", "parents":["2.3"],  "children":["4.11","4.12"]},
    {"id":"3.7",  "text":"Have my breakfast spaghetti yarn intrigued by the shower, but sleep nap.", "parents":["2.4"],  "children":["4.13","4.14"]},
    {"id":"3.8",  "text":"Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked! thinking longingly about tuna brine.", "parents":["2.4"],  "children":["4.15","4.16"]},
    {"id":"4.1",  "text":"Chase after silly colored fish toys around the house chase laser so pooping rainbow while flying in a toasted bread costume in space roll over and sun my belly but hide at bottom of staircase to trip human yet vommit food and eat it again for soft kitty warm kitty little ball of furr.", "parents":["3.1"],   "children":[]},
    {"id":"4.2",  "text":"Pose purrfectly to show my beauty scream at teh bath yet mesmerizing birds intently sniff hand.", "parents":["3.1"],   "children":[]},
    {"id":"4.3",  "text":"Asdflkjaertvlkjasntvkjn (sits on keyboard) purr meow meow, i tell my human.", "parents":["3.2"],   "children":[]},
    {"id":"4.4",  "text":"Ears back wide eyed destroy couch. Chase imaginary bugs attack dog, run away and pretend to be victim or wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again stare at the wall, play with food and get confused by dust sweet beast, and give me attention or face the wrath of my claws meow.", "parents":["3.2"],   "children":[]},
    {"id":"4.5",  "text":"Eat half my food and ask for more leave dead animals as gifts i like big cats and i can not lie and hunt by meowing loudly at 5am next to human slave food dispenser or jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans need to chase tail, and a nice warm laptop for me to sit on.", "parents":["3.3"],   "children":[]},
    {"id":"4.6",  "text":"Eat from dog's food thinking longingly about tuna brine paw at your fat belly.", "parents":["3.3"],   "children":[]},
    {"id":"4.7",  "text":"Throwup on your pillow warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats. ", "parents":["3.4"],   "children":[]},
    {"id":"4.8",  "text":"Fall over dead (not really but gets sypathy) hide from vacuum cleaner kitten is playing with dead mouse kitty scratches couch bad kitty licks your face touch water with paw then recoil in horror human give me attention meow.", "parents":["3.4"],   "children":[]},
    {"id":"4.9",  "text":"Play riveting piece on synthesizer keyboard mew.", "parents":["3.5"],   "children":[]},
    {"id":"4.10", "text":"Plan steps for world domination my left donut is missing, as is my right chase after silly colored fish toys around the house relentlessly pursues moth for hate dog see owner, run in terror and gnaw the corn cob.", "parents":["3.5"],   "children":[]},
    {"id":"4.11", "text":"Plays league of legends lick sellotape kitten is playing with dead mouse, scratch at the door then walk away so kitty scratches couch bad kitty but cat slap dog in face.", "parents":["3.6"],   "children":[]},
    {"id":"4.12", "text":"Meowzer!", "parents":["3.6"],   "children":[]},
    {"id":"4.13", "text":"jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed for pee in human's bed until he cleans the litter box but get video posted to internet for chasing red dot, chew foot a nice warm laptop for me to sit on or jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed.", "parents":["3.7"],   "children":[]},
    {"id":"4.14", "text":"Lie in the sink all day use lap as chair, yet hunt by meowing loudly at 5am next to human slave food dispenser or meow to be let out plan steps for world domination. ", "parents":["3.7"],   "children":[]},
    {"id":"4.15", "text":"Cat is love, cat is life peer out window, chatter at birds, lure them to mouth my slave human didn't give me any food so i pooped on the floor or nap all day, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff so sit in box.", "parents":["3.8"],   "children":[]},
    {"id":"4.16", "text":"Chase ball of string pee in human's bed until he cleans the litter box for meow meow, i tell my human spread kitty litter all over house so be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day, spend all night ensuring people don't sleep sleep all day.", "parents":["3.8"],   "children":[]}
]

// var treeItemRepo = new TreeItemRepository({url: 'http://lpkb.menkent.uberspace.de/bring_it_on' }).
var treeItemRepo = new TreeItemRepository(data);

jQuery(document).ready(function() {
  treeItemRepo.currentItem.renderSelf();
  // // Render next / previous items on click
  jQuery('.choice').on('click', function() {
    var itemId = jQuery(this).attr('item-id');
    var item = treeItemRepo.treeItems[itemId];
    treeItemRepo.currentItem = item;
    item.renderSelf();
  });

  // jQuery('.back').on('click', function() {
  // });
});
