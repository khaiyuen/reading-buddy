import { Series } from "./types";

// Titles, numbering and facts verified against DK/Penguin Random House and each book's own
// printed table of contents and term index. See content/research/secret-explorers.md.
// Questions stay at "setup level" on purpose: who goes, where, what the problem is, what the
// book teaches. No online source describes how these books end, so asking about endings would
// mean inventing — see CONTENT_GUIDELINES.md rules 1 and 3.
// verified: false marks a book where at least one answer rests on a weaker source.

const secretExplorers: Series = {
  id: "secret-explorers",
  title: "The Secret Explorers",
  author: "SJ King",
  description:
    "Eight kid experts are called through a glowing door to the Exploration Station, then ride the Beagle — a go-kart that changes shape — to fix a real problem somewhere on Earth, in space, or in the past.",
  recommendedAge: "7-9",
  themeColor: "#00695c",
  books: [
    {
      id: "se-01",
      number: 1,
      title: "The Secret Explorers and the Lost Whales",
      color: "#1565c0",
      verified: true,
      listenFor:
        "Listen for which two explorers get picked, and what has gone wrong for the whales.",
      questions: [
        {
          q: "Which two Secret Explorers were picked for this mission, and what is each one an expert in?",
          a: "Connor, the marine life expert, and Roshni, the space expert, were the two chosen to go on the ocean mission together.",
        },
        {
          q: "What had gone wrong for the humpback whales?",
          a: "A whole pod of humpback whales had lost their migration route, so the explorers had to find a way to steer them back on track.",
        },
        {
          q: "What did the Beagle turn into for this mission?",
          a: "It changed into a submarine, so that Connor and Roshni could travel underwater and follow the whales through the ocean.",
        },
        {
          q: "What two problems got in the explorers' way while they searched?",
          a: "They had to deal with a lost baby whale, which is called a calf, and a whole fleet of boats that got in the way.",
        },
        {
          q: "What was Connor doing at home when the mission call came?",
          a: "He was pond dipping, which means looking at the tiny creatures that live in pond water, when his compass badge glowed.",
        },
      ],
    },
    {
      id: "se-02",
      number: 2,
      title: "The Secret Explorers and the Comet Collision",
      color: "#283593",
      verified: true,
      listenFor:
        "Listen for what the explorers have to fix in space, and how little time they have.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Roshni, the space expert, and Ollie, the rainforest expert, were the two chosen to blast off on the space mission together.",
        },
        {
          q: "Where in space did this mission take them?",
          a: "It took them out to the giant planet Jupiter and its moons, where they got a close-up look at Jupiter's swirling surface.",
        },
        {
          q: "What job did the explorers have to finish before the comet arrived?",
          a: "They had to repair a space probe called Odin, which was orbiting Jupiter, before pieces of the comet crashed into the planet.",
        },
        {
          q: "What dangerous things did the explorers have to do during the mission?",
          a: "They had to dodge asteroids flying through space, and go outside the spacecraft on a spacewalk while wearing spacesuits.",
        },
        {
          q: "What was Roshni doing at home when her compass badge began to glow?",
          a: "She was stargazing, which means looking up at the night sky to study the stars and planets, when the mission call reached her.",
        },
      ],
    },
    {
      id: "se-03",
      number: 3,
      title: "The Secret Explorers and the Tomb Robbers",
      color: "#8d6e63",
      verified: true,
      listenFor:
        "Listen for who the explorers are up against, and what they have to learn to read.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Gustavo, the history expert, and Kiki, the engineering expert, were the two chosen to travel back in time together.",
        },
        {
          q: "Where and when did this mission take place?",
          a: "It took them back in time to ancient Egypt, to the days of Pharaoh Khufu, near the River Nile and the Great Pyramid.",
        },
        {
          q: "Who were the explorers up against on this mission?",
          a: "They were up against a gang of thieves, called tomb robbers, who were stealing the treasures from a pharaoh's tomb.",
        },
        {
          q: "What did Gustavo and Kiki have to learn to read, and where did they have to go?",
          a: "They had to learn to read hieroglyphs, the picture writing of ancient Egypt, and they had to get inside the Great Pyramid.",
        },
        {
          q: "What was happening back in the present day that started this mission?",
          a: "The Cairo Museum was in trouble and was about to close down, so the explorers were sent to ancient Egypt to help save it.",
        },
      ],
    },
    {
      id: "se-04",
      number: 4,
      title: "The Secret Explorers and the Jurassic Rescue",
      color: "#2e7d32",
      verified: true,
      listenFor:
        "Listen for which egg the explorers are trying to save, and which dinosaurs get in the way.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Tamiko, the dinosaur expert, and Cheng, the geology expert, were the two chosen to travel back to the time of the dinosaurs.",
        },
        {
          q: "When and where did this mission take the explorers?",
          a: "It took them back in time about 150 million years, to the Jurassic period, when dinosaurs were living all over the Earth.",
        },
        {
          q: "What was the main thing the explorers had to rescue?",
          a: "They had to save an Archaeopteryx egg from being destroyed, and get it safely back to the nest it belonged in.",
        },
        {
          q: "What three tricky things did Tamiko and Cheng have to do on the mission?",
          a: "They had to outsmart a fierce Allosaurus, rescue a baby Stegosaurus, and find a clever way to attract an Archaeopteryx.",
        },
        {
          q: "What surprising fact does this book teach about dinosaurs and birds?",
          a: "It explains that the birds flying around today really are dinosaurs, because birds come from a group of dinosaurs long ago.",
        },
      ],
    },
    {
      id: "se-05",
      number: 5,
      title: "The Secret Explorers and the Rainforest Rangers",
      color: "#1b5e20",
      verified: true,
      listenFor:
        "Listen for the name of the lost baby animal, and the secret plan the explorers uncover.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Ollie, the rainforest expert, and Kiki, the engineering expert, were the two chosen to go on the rainforest mission together.",
        },
        {
          q: "Where in the world did this mission take place?",
          a: "It took them to the hot, steamy rainforest of Borneo, where they searched the thick trees and the nature reserve there.",
        },
        {
          q: "Which lost animal were the explorers looking for, and what was its name?",
          a: "They were searching for a lost baby orangutan named Fig, a young ape who had gone missing in the rainforest.",
        },
        {
          q: "How did Ollie and Kiki travel over the rainforest to search?",
          a: "They set out in a glider, which let them fly quietly above the treetops and look down over the huge rainforest canopy.",
        },
        {
          q: "What secret plan did the explorers uncover while they searched?",
          a: "They found that greedy plantation owners were plotting to destroy the forest to make their palm oil plantation bigger.",
        },
      ],
    },
    {
      id: "se-06",
      number: 6,
      title: "The Secret Explorers and the Smoking Volcano",
      color: "#bf360c",
      verified: true,
      listenFor:
        "Listen for the name of the real volcano, and who needs to be rescued from it.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Cheng, the geology and volcano expert, and Leah, the biology expert, were the two chosen to go to the volcano together.",
        },
        {
          q: "Which real volcano did this mission take the explorers to, and where is it?",
          a: "They went to Mount Yasur, a real active volcano on the island of Tanna, which is part of the country of Vanuatu.",
        },
        {
          q: "What went wrong once the explorers were on the island?",
          a: "Some of their new friends went missing on the mountain, so the two explorers had to get them off it before it erupted again.",
        },
        {
          q: "What was Cheng doing at the start of the story?",
          a: "He was doing an exciting experiment with baking soda, because he was very keen to see how a real eruption works.",
        },
        {
          q: "What does this book explain about how a volcano like Mount Yasur works?",
          a: "It explains that hot melted rock called magma pushes up through the Earth's crust where two tectonic plates meet.",
        },
      ],
    },
    {
      id: "se-07",
      number: 7,
      title: "The Secret Explorers and the Missing Scientist",
      color: "#0277bd",
      verified: true,
      listenFor:
        "Listen for what has trapped the ship, and which animal the explorers must watch out for.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Kiki, the engineering expert, and Connor, the marine biology expert, were the two chosen to go to the Arctic together.",
        },
        {
          q: "Where did this mission take the explorers?",
          a: "It took them to the Arctic, the frozen place at the top of the world, where the sea itself freezes over into thick ice.",
        },
        {
          q: "What did the explorers find when they arrived?",
          a: "They found a research ship that was studying how climate change is warming the world, stuck fast in the frozen sea ice.",
        },
        {
          q: "Who was missing, and why had that person left the ship?",
          a: "One of the ship's scientists had set off to a research station nearby to fetch help, and had not come back again.",
        },
        {
          q: "Which dangerous Arctic animal did the explorers have to watch out for?",
          a: "They had to watch out for polar bears, and the book even has a chapter about it that is called “Beware polar bear”.",
        },
      ],
    },
    {
      id: "se-08",
      number: 8,
      title: "The Secret Explorers and the Plant Poachers",
      color: "#558b2f",
      verified: true,
      listenFor:
        "Listen for which plant is in danger, and who is trying to steal it.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Leah, the biology expert, and Gustavo, the history expert, were the two chosen to go on the woodland mission together.",
        },
        {
          q: "Where did this mission take the explorers?",
          a: "It took them to a forest in North Carolina, in the United States, which is one of the places Venus flytraps grow wild.",
        },
        {
          q: "Who did the explorers meet in the forest, and what was that person's job?",
          a: "They met a botanist, which is a scientist who studies plants, and whose job was protecting the amazing Venus flytrap.",
        },
        {
          q: "What were the poachers doing that the explorers had to stop?",
          a: "The poachers were stealing the Venus flytraps, which are an endangered plant, so that they could sell them for money.",
        },
        {
          q: "What is special about a Venus flytrap?",
          a: "It is a plant that eats insects, and its leaf snaps shut when a bug touches the tiny trigger hairs growing inside it.",
        },
      ],
    },
    {
      id: "se-09",
      number: 9,
      title: "The Secret Explorers and the Moon Mission",
      color: "#37474f",
      verified: false,
      listenFor:
        "Listen for what goes wrong with the Beagle, and what the explorers have to pull out of a crater.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Roshni, the space expert, and Cheng, the geology expert, were the two chosen to blast off to the Moon together.",
        },
        {
          q: "Where did this mission take the explorers?",
          a: "It took them all the way to the Moon, where they bounced over the dusty, rocky ground in the Moon's very low gravity.",
        },
        {
          q: "What did the explorers use the space junk on the Moon for?",
          a: "They used bits of old space junk left lying on the Moon as spare parts, to fix the Beagle after its landing damaged it.",
        },
        {
          q: "What machine did the explorers have to rescue, and where was it?",
          a: "They had to rescue a lunar rover, which is a robot car for driving on the Moon, that had got stuck down in a crater.",
        },
        {
          q: "What did Roshni and Cheng collect while they were on the Moon?",
          a: "They collected important samples of moon rock, including kinds of rock called basalt and breccia, to bring back home.",
        },
      ],
    },
    {
      id: "se-10",
      number: 10,
      title: "The Secret Explorers and the Ice Age Adventure",
      color: "#78909c",
      verified: false,
      listenFor:
        "Listen for the boy the explorers meet, and which big animals roam the cold grassland.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Tamiko, the dinosaur expert, and Ollie, the rainforest expert, were the two chosen to travel back to the Ice Age together.",
        },
        {
          q: "When and where did this mission take the explorers?",
          a: "It took them back in time to the last Ice Age, onto the cold, open grassland that is known as the mammoth steppe.",
        },
        {
          q: "Which huge animals did the explorers find on the steppe?",
          a: "They found woolly mammoths, shaggy elephant-like animals with long curved tusks, including a baby mammoth and its herd.",
        },
        {
          q: "Who was the boy the explorers met on their mission?",
          a: "They met a boy named Leaf, a child from the Ice Age, and Ollie used his tracking skills to help him out on the steppe.",
        },
        {
          q: "Which fierce hunters were a danger on this mission?",
          a: "Cave lions were a danger, and the book has a chapter about them near the end that is called “Cave lion alert”.",
        },
      ],
    },
    {
      id: "se-11",
      number: 11,
      title: "The Secret Explorers and the Haunted Castle",
      color: "#4527a0",
      verified: false,
      listenFor:
        "Listen for what the ghostly figure looks like, and what the castle is getting ready for.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Kiki, the engineering expert, and Gustavo, the history expert, were the two chosen to travel back to the past together.",
        },
        {
          q: "Where and when did this mission take the explorers?",
          a: "It took them back to the Middle Ages, to a medieval castle that was busy getting ready for a big jousting tournament.",
        },
        {
          q: "What was frightening everybody at the castle?",
          a: "A ghostly, glowing figure known as the Horned Knight kept appearing at the castle and terrifying the crowds of people.",
        },
        {
          q: "What did the explorers find inside the castle that helped them investigate?",
          a: "They found secret passages hidden inside the castle walls, which let them move around and follow up on the mystery.",
        },
        {
          q: "What does this book explain about things that glow in the dark?",
          a: "It explains bioluminescence, which is the word for living things, such as some kinds of fungus, that make their own glow.",
        },
      ],
    },
    {
      id: "se-12",
      number: 12,
      title: "The Secret Explorers and the Desert Disappearance",
      color: "#ef6c00",
      verified: true,
      listenFor:
        "Listen for which young animals need rescuing, and what kind of storm gets in the way.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Leah, the biology expert, and Connor, the marine expert, were the two chosen to set off into the desert together.",
        },
        {
          q: "Which desert did this mission take the explorers to?",
          a: "It took them into the Chihuahuan Desert, a huge dry desert in Mexico, where they drove across it in a desert buggy.",
        },
        {
          q: "Which young animals did the explorers have to rescue?",
          a: "They had to rescue a pack of Mexican wolf cubs, which are young wolves whose numbers in the wild had dropped very low.",
        },
        {
          q: "What kind of weather made the mission harder?",
          a: "Dust storms made it much harder, because the blowing dust filled the air and hid the desert that they were searching.",
        },
        {
          q: "What was Leah doing at home when the mission call came?",
          a: "She was happily gardening, looking after her plants and flowers, when her compass badge glowed and called her away.",
        },
      ],
    },
    {
      id: "se-13",
      number: 13,
      title: "The Secret Explorers and the Sunken Treasure",
      color: "#00838f",
      verified: true,
      listenFor:
        "Listen for what the explorers are hunting for, and which sea animal needs their help instead.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Connor, the marine expert, and Kiki, the engineering expert, were the two chosen to go treasure hunting together.",
        },
        {
          q: "What did the explorers set out to look for on this mission?",
          a: "They set out to hunt for pirate treasure, searching the sea for a lost pirate ship that had sunk down to the seabed.",
        },
        {
          q: "Which sea animal needed the explorers' help?",
          a: "A basking shark needed their help, which is a huge, harmless shark that swims along with its enormous mouth wide open.",
        },
        {
          q: "What had happened to that sea animal?",
          a: "It had got caught and trapped in a fishing net, and the book has a whole chapter about it called “Trapped in a net”.",
        },
        {
          q: "What was Connor doing at the start of the story?",
          a: "He was down at a rock pool by the sea, looking at the little creatures in it, when the Secret Explorers roll call came.",
        },
      ],
    },
    {
      id: "se-14",
      number: 14,
      title: "The Secret Explorers and the Cave Crisis",
      color: "#311b92",
      verified: false,
      listenFor:
        "Listen for which animals live in the caves, and why the mission turns out to be tricky.",
      questions: [
        {
          q: "Which two Secret Explorers went on this mission, and what is each one an expert in?",
          a: "Leah, the biology expert, and Cheng, the geology expert, were the two chosen to go down into the caves together.",
        },
        {
          q: "Where did this mission take the explorers?",
          a: "It took them to a network of caves in India, which the book calls the Blue Caves, deep under the ground in the dark.",
        },
        {
          q: "Which animals did the explorers find living in the caves?",
          a: "They found a colony of horseshoe bats, which find their way about in the dark by using sound, called echolocation.",
        },
        {
          q: "Which part of the cave were the explorers not supposed to go into?",
          a: "There was a part called the forbidden chamber, and the book has a whole chapter about it with that same name.",
        },
        {
          q: "What was being taken out of the caves that made this a crisis?",
          a: "People were digging precious stones out of the caves without permission, which was damaging the caves and the bats.",
        },
      ],
    },
  ],
};

export default secretExplorers;
