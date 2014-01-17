var characters = [
  {
    name: "Elaine",
    real_name: "Erica Cresswell",
    home: "Coventry Gardens (33 mi)",
    job: "Sales Director at CloudWare (downtown, 8mi)",
    character_description: [
      "Erica has high expectations for her and everyone around her. She sees ineptitude and " +
      "sloth everywhere at her company, though the company has just had a successful IPO " +
      "last year and continues to set record profits. This is the first year of negative YOY new " +
      "sales growth. She recommended Reduction in Force for the Sales organization, " +
      "resulting in Patrick Cole being laid off this morning. HR sent the notices to the RIF'd " +
      "employees via the CloudWare Sales App.",

      "She lives in a mansion in the highest end of Coventry Gardens, a posh suburb north of " +
      "the city off the ICC. She married at a young age to an older man, divorced, but kept his " +
      "name out of dislike for her maiden name. She now dates frequently, but most are " +
      "mutually brief affairs.",

      "She stops at Carter's on her way home from work to save $0.20 a gallon on gas, " +
      "navigating her Audi Q7 around numerous potholes on Riverside Avenue. She refuses to " +
      "enter the mini-mart and ignores the other gas station patrons. She talks on her phone the " +
      "entire time she's at the pump."
    ]
  },
  {
    name: "Homeless Freddy",
    real_name: "William Jenkins",
    home: "Carter's Alley behind Carter's gas station (100 ft)",
    job: "Panhandling (in the immediate vicinity)",
    character_description: [
      "William Jenkins used to be a corporate attorney for Hy-Bar Chemical, based in Red " +
      "Rock City. His father and two brothers are also prominent corporate attorneys. He won a " +
      "major lawsuit in a class-action proceeding against Hy-Bar for illegally dumping in " +
      "Broadlands Park which had to be closed and was labeled a superfund site by the federal " +
      "government. All the families that lived there had their lives ruined. Mentally, he was off " +
      "his game and proceeded to lose several cases in a row, leading to his dismissal. He " +
      "started drinking heavily and lost the support of his wife, kids, brothers and father. After he " +
      "lost his house in Grosse Pointe, he wandered the streets until he found a good doorway " +
      "in the abandoned body shop off Carter's Alley."
    ]
  },

  {
    name: "Taylor",
    real_name: "Emily Farris",
    home: "Fairpointe (4.2mi)",
    job: "high school student at St Clare of Fairpointe (4.5mi)",
    character_description: [
      "Her family donated a wing at St Clare's as well as a wing of nearby Bellevue Isle Medical " +
      "Center. They live in a mansion on Hillcrest Drive, Fairpointe's wealthiest street."
    ]
  },
  {
    name: "Ashley",
    real_name: "Kelly Abbott",
    home: "Morningwood (2.4mi)",
    job: "high school student at St Clare of Fairpointe (4.5mi)",
    character_description: [
      "Kelly lives in a modest neighborhood not far from a housing project, Parkhurst Village. " +
      "Her family has her attend St Clare's on a work-study tuition assistance program. She's " +
      "best friends with Emily Farris.",
      "Her mother is in charge of CCD program at their church, St Thomas Aquinas, where her " +
      "father is a Eucharistic minister."
    ]
  },
  {
    name: "Adam",
    real_name: "Dave Norton",
    job: "",
    home: "A Condo in Clinton (16.2mi) with Lisa.",
    character_description: []
  },
  {
    name: "Jessica",
    real_name: "Lisa Riley",
    job: "",
    home: "A condo in Clinton (16.2mi) with Dave.",
    character_description: []
  },
  {
    name: "Nate",
    real_name: "Patrick Cole, uncle is Ricky Cole",
    home: "South Riverside (.5mi)",
    job: "Formerly a Sales Associate at Cloudware",
    character_description: [
      "Just laid off from Sales at Cloudware, because he's not aggressive enough. Just" +
      "lost his girlfriend, Melissa, because he wasn't motivated to get better accounts at" +
      "Cloudware or move to a better city.", 
      "Patrick lives with his Uncle Ricky, since his retired parents moved to Phoenix. He " +
      "helps out for free at Cole's Family Dry Cleaners since he was in high school.Cole's " +
      "Family Dry Cleaners has been just above water for the last decade. Even as " + 
      "families move out of Riverside, many still stop in for dry cleaning, but many more either " +
      "don't want the inconvenience of getting off the ICC or have moved south from Red Rock " +
      "City entirely.",
      "Patrick comes frequently to purchase a six-pack for his Uncle Ricky. Even though the six-" +
      "pack is more money, he doesn't buy the case, because of the erratic income that they " +
      "both have.",
      "Ricky Cole is a functioning alcoholic and owns the dry cleaners on Riverside Avenue in " +
      "South Riverside. He lost his license for DUI five months ago, putting further strain on " +
      "both Patrick's job and on his relationship with Melissa. Ricky is a happy drunk."
    ],
  },
  {
    name: "Connor",
    real_name: "Connor",
    home: "Morningwood (2.6mi)",
    job: "Carter's Gas Station, for the last year.",
    character_description: [
      "Connor is known for his great sense of humor. Most of the time, his jokes are at the " +
      "expense of someone else."
    ]
  },
  {
    name: "Gina",
    real_name: "Gina",
    home: "South Shores (26 mi)",
    job: "When she's not at Montefalco University (16mi), she works as a waitress at Olive Garden in South Shores.",
    character_description: [
      "She met Connor through Brent Saunders, who is in her circle of friends at the University. " +
      "Brent grew up in Morningwood and was childhood friends with Connor.",
      "Her father is a recovering alcoholic and is divorced. Gina lives with her mom in the " +
      "house she grew up in. Her father lives in a disheveled bachelor pad in Bloomfield. " +
      "Connor either comes to the University to meet her or they meet downtown at a sport's bar " +
      "like Cutter's, Longshot's or Third Base in University Heights."
    ]
  },
  {
    name: "Charlie",
    real_name: "Bartholomew \"Barry\" Worth",
    home: "South Riverside (.8mi)",
    job: "",
    character_description: [ "Couldn't live up to his name." ]
  }
]

function profileTerm(dictionary, infoList, term, label) {
  var dt = $('<dt>');
  dt.text(label + ':');
  infoList.append(dt);
  var dd = $('<dd>');
  dd.text(dictionary[term]);
  infoList.append(dd);
}

$(document).ready(function() {
  var cdiv = $('#characters');
  var toggle = false;
  for (var c=0; c<characters.length; c++) {
    var character = characters[c];
    console.log("Character: ", character);
    cdiv.append($("<hr class='featurette-divider'>"));
    var img = $("<img class=\"featurette-image img-responsive\" data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\">");
    var bio = $("<div class='bio'>");
    var info = $("<dl class='dl-horizontal'>");
    profileTerm(character, info, 'real_name', 'Name');
    profileTerm(character, info, 'name', 'Nick Name');
    profileTerm(character, info, 'home', 'Home');
    profileTerm(character, info, 'job', 'Job');
    bio.append(info);
    for (var p=0; p<character.character_description.length; p++) {
      paragraph = $("<p>");
      paragraph.text(character.character_description[p]);
      bio.append(paragraph);
    }

    var row = $("<div class='row featurette'>");
    var col1;
    if (toggle) {
      col1 = $("<div class='col-md-5'>");
      col1.append(img);
      col2 = $("<div class='col-md-7'>");
      col2.append(bio);
      toggle = false;
    } else {
      col1 = $("<div class='col-md-7'>");
      col1.append(bio);
      col2 = $("<div class='col-md-5'>");
      col2.append(img);
      toggle = true;
    }

    row.append(col1);
    row.append(col2);
    cdiv.append(row);
  }
});

