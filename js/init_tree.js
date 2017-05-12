var data = [
{ "id": "0.1",
  "heading": "Playing",
  "statement":"Playing with balls of wool.\r\nFooled again thinking the dog likes me then cats take over the world so howl on top of tall thing or woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now or have my breakfast spaghetti yarn. <a href='https://oijwef.de'> apoijf</a>",
  "parents":[],
  "choices": [
  {"text": "Mark territory. Meowwww my left donut is missing, as is my right, eat all the power cords so chase red laser dot but hopped up on catnip.", "nextItemId": "1.1"},
  {"text": "aw at your fat belly attack the dog then pretend like nothing happened find empty spot in cupboard and sleep all day, love to play with owner's hair tie.", "nextItemId": "1.2"}
  ]
},
{ "id": "1.1",
  "heading": "hair",
  "statement":"Chase imaginary bugs give attitude. Meoooow! ",
  "parents":["0.1"],
  "choices": [
  {"text": "Love to play with owner's hair tie howl on top of tall thing or meowzer! Climb leg with tail in the air. ", "nextItemId": "2.1"},
  {"text": "abore et dolore magna aliqua. Ut enim ad minim", "nextItemId": "2.2"}
  ]
},
{ "id": "1.2",
  "heading": "Climb",
  "statement":"Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff meowwww or spread kitty litter all over house.",
  "parents":["2.1"],
  "choices":[
  {"text": "eats owners hair then claws head human give me attention meow, have my breakfast spaghetti yarn but Gate keepers of hell.", "nextItemId": "2.1"},
  {"text": "Climb leg with tail in the air. Love to play with owner's hair tie howl on top of tall thing or meowzer!", "nextItemId": "2.2"}
  ]
},
{ "id": "2.1",
  "heading": "Fooled",
  "statement":"Fooled again thinking the dog likes me purr while eating and milk the cow. Brown cats with pink ears meoooow! or drink water out of the faucet meowing chowing and wowing.",
  "parents":["1.1"],
  "choices":[]
},
{ "id": "2.2",
  "heading": "Energy tuxedo",
  "statement":"Why must they do that mewl for food at 4am or meow all night having their mate disturbing sleeping humans lick butt, but have my breakfast spaghetti yarn and be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day for present belly, scratch hand when stroked. Hopped up on catnip sit by the fire i could pee on this if i had the energy tuxedo cats always looking dapper.",
  "parents":["1.1"],
  "choices":[]
},
{ "id":"2.3",
  "heading": "Please stop",
  "statement":"Please stop looking at your phone and pet me scamper. Asdflkjaertvlkjasntvkjn (sits on keyboard). ",
  "parents":["1.2"],
  "choices":[]
},
{ "id":"2.4",
  "heading": "Claw drapes",
  "statement":"Poop in the plant pot hack up furballs poop on grasses. Claw drapes kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff find empty spot in cupboard and sleep all day so attack feet go into a room to decide you didn't want to be in there anyway or gnaw the corn cob.",
  "parents":["1.2"],
  "choices":[]
}
];

// var treeItemRepo = new TreeItemRepository({url: 'http://lpkb.menkent.uberspace.de/bring_it_on' }).
var treeItemRepo = new TreeItemRepository(data);

jQuery(document).ready(function() {
  // Enable BS tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Render next / previous items on click
  jQuery('.choices').on('click', '.choice', function() {
    var nextItemId = jQuery(this).attr('next-item-id');
    var nextItem = treeItemRepo.treeItems[nextItemId];
    var fromChoice = jQuery(this);

    treeItemRepo.goToItem(fromChoice, nextItem);
  });

  // Back button
  jQuery('.back-button').on('click', function() {
    if (treeItemRepo.history.length > 0) {
      treeItemRepo.goBack();
    }
  });

  // Sidebar button
  jQuery('.toggle-sidebar').on('click', function() {
    if (treeItemRepo.history.length > 0) {
      toggleSidebar();
    }
  });

  // Reset button
  jQuery('.reset-button').on('click', function() {
    if (treeItemRepo.history.length > 0) {
      treeItemRepo.resetTree();
    }
  });
});
