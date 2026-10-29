import { DistractorMap } from "./index";

// Two wrong answers per question, in question order.
// Each wrong answer is written to about the same length and detail as the correct one, so a reader
// cannot win by always picking the longest option. Checked with a measuring script, not by eye —
// see CONTENT_GUIDELINES.md rule 6.
// Wrong answers reuse real series facts (real explorers, real places, real animals) put in the
// wrong story, which makes them plausible without being accidentally true.

const secretExplorersDistractors: DistractorMap = {
  // 1. The Lost Whales
  "se-01": [
    [
      "Tamiko, the dinosaur expert, and Cheng, the geology expert, were the two chosen to go on the ocean mission together.",
      "Ollie, the rainforest expert, and Kiki, the engineering expert, were the two chosen to go on the ocean mission together.",
    ],
    [
      "A whole pod of humpback whales had swum into a bay that was far too shallow, so the explorers had to float them back out again.",
      "A whole pod of humpback whales had been split up by a bad storm, so the explorers had to gather them back into one group again.",
    ],
    [
      "It changed into a fast speedboat, so that Connor and Roshni could stay on the surface and follow the whales from up above.",
      "It changed into a diving bell, so that Connor and Roshni could be lowered on a long cable and watch the whales from one spot.",
    ],
    [
      "They had to deal with a torn fishing net caught on a whale's fin, and a thick fog that made the pod very hard to see.",
      "They had to deal with a hungry pack of orcas following the pod, and a strong current pushing the whales the wrong way.",
    ],
    [
      "He was building a model sailing boat at the kitchen table, at home by the harbour, when his compass badge glowed.",
      "He was helping to count fish down at the busy harbour market, close to his home, when his compass badge glowed.",
    ],
  ],

  // 2. The Comet Collision
  "se-02": [
    [
      "Roshni, the space expert, and Cheng, the geology expert, were the two chosen to blast off on the space mission together.",
      "Connor, the marine expert, and Tamiko, the dinosaur expert, were the two chosen to blast off on the space mission together.",
    ],
    [
      "It took them out to the ringed planet Saturn and its moons, where they got a close-up look at Saturn's icy rings.",
      "It took them to the red planet Mars and its two moons, where they got a close-up look at the huge dusty Martian volcanoes.",
    ],
    [
      "They had to move a weather satellite out of the comet's path, before the broken pieces of the comet could smash straight into it.",
      "They had to shut down a space telescope's camera safely, before the bright light of the comet could damage it for good.",
    ],
    [
      "They had to fly through the rings of a planet, and climb down a ladder onto an icy moon while wearing heavy spacesuits.",
      "They had to steer around a cloud of frozen gas, and crawl along the outside of the probe itself to reach a broken panel.",
    ],
    [
      "She was setting up her telescope beside a lake, high up in the mountains at home, when the mission call reached her.",
      "She was reading a book about the planets up on her flat roof, late in the evening, when the mission call reached her.",
    ],
  ],

  // 3. The Tomb Robbers
  "se-03": [
    [
      "Tamiko, the dinosaur expert, and Leah, the biology expert, were the two chosen to travel back in time together.",
      "Cheng, the geology expert, and Roshni, the space expert, were the two chosen to travel back in time together.",
    ],
    [
      "It took them back in time to ancient Rome, to the days of the emperors, near the River Tiber and the great Colosseum.",
      "It took them back in time to ancient Greece, to the days of the first Olympics, near the temples of the city of Athens.",
    ],
    [
      "They were up against a crew of smugglers who were taking carved statues out of a temple and loading them onto a boat.",
      "They were up against a group of forgers who were making fake golden treasures and selling them to rich traders.",
    ],
    [
      "They had to learn to count in ancient Egyptian numbers, and they had to get inside the busy workshop of the royal stonemasons.",
      "They had to learn how to steer a reed boat on the Nile, and they had to get inside the treasure store beside the temple.",
    ],
    [
      "A sandstorm had buried part of the site the museum was digging, so the explorers were sent back to find what was lost.",
      "A famous golden mask had vanished from the museum's hall, so the explorers were sent back in time to find out who took it.",
    ],
  ],

  // 4. The Jurassic Rescue
  "se-04": [
    [
      "Connor, the marine expert, and Ollie, the rainforest expert, were the two chosen to travel back to the time of the dinosaurs.",
      "Gustavo, the history expert, and Kiki, the engineering expert, were the two chosen to travel back to the time of the dinosaurs.",
    ],
    [
      "It took them back in time about 65 million years, to the Cretaceous period, right at the very end of the age of dinosaurs.",
      "It took them back in time about 250 million years, to the Triassic period, when the very first dinosaurs were appearing.",
    ],
    [
      "They had to save a baby Stegosaurus that had been separated from its herd, and lead it back to the others before dark.",
      "They had to save a nest of Compsognathus eggs from a flood, and carry them up to higher ground away from the river.",
    ],
    [
      "They had to hide from a hunting pack of Compsognathuses, cross a wide river, and climb a cliff to reach a high nest.",
      "They had to escape a herd of stampeding Cetiosauruses, put out a small forest fire, and dig a fossil out of a hillside.",
    ],
    [
      "It explains that the biggest dinosaurs kept growing their whole lives, which is why some of them became so enormous.",
      "It explains that dinosaurs were all cold-blooded like lizards, and had to lie in the sun each morning to warm up.",
    ],
  ],

  // 5. The Rainforest Rangers
  "se-05": [
    [
      "Leah, the biology expert, and Gustavo, the history expert, were the two chosen to go on the rainforest mission together.",
      "Tamiko, the dinosaur expert, and Connor, the marine expert, were the two chosen to go on the rainforest mission together.",
    ],
    [
      "It took them to the hot, steamy Amazon rainforest in Brazil, where they searched the thick trees along the great river.",
      "It took them to the rainforests of central Africa, where they searched the thick trees and the national park found there.",
    ],
    [
      "They were searching for a lost baby elephant named Fig, a young calf that had wandered away from its herd in the forest.",
      "They were searching for a lost baby gibbon named Fig, a small ape that had fallen out of the treetops and gone missing.",
    ],
    [
      "They set out in a little boat, which let them travel quietly along the muddy rivers and look into the forest from the water.",
      "They set out on a zip wire the rangers had built, which let them cross high above the forest floor from tree to tree.",
    ],
    [
      "They found that a logging company was planning to cut a new road right through the middle of the nature reserve.",
      "They found that poachers were setting traps along the river so that they could catch and sell the rarest forest animals.",
    ],
  ],

  // 6. The Smoking Volcano
  "se-06": [
    [
      "Cheng, the geology and volcano expert, and Ollie, the rainforest expert, were the two chosen to go to the volcano together.",
      "Kiki, the engineering expert, and Tamiko, the dinosaur expert, were the two chosen to go to the volcano together.",
    ],
    [
      "They went to Mount Etna, a real active volcano on the large island of Sicily, which is part of the country of Italy.",
      "They went to Kilauea, a real active volcano on the Big Island of Hawaii, which is part of the United States.",
    ],
    [
      "A river of hot lava started flowing down towards the village, so the two explorers had to warn everybody living there.",
      "The ash cloud grounded the only plane off the island, so the two explorers had to find another way to get everyone out.",
    ],
    [
      "He was building a model volcano out of clay for school, because he was very keen to see how a real eruption works.",
      "He was reading his rock collection notes in the garden, because he was very keen to see how a real eruption works.",
    ],
    [
      "It explains that volcanoes only erupt where the sea floor is sinking, which is why they are always close to a coast.",
      "It explains that the heat inside a volcano comes from burning coal and gas deep down underneath the mountain.",
    ],
  ],

  // 7. The Missing Scientist
  "se-07": [
    [
      "Leah, the biology expert, and Cheng, the geology expert, were the two chosen to go to the Arctic together.",
      "Roshni, the space expert, and Gustavo, the history expert, were the two chosen to go to the Arctic together.",
    ],
    [
      "It took them to Antarctica, the frozen place at the bottom of the world, where the ice sits on top of a whole continent.",
      "It took them high into the Himalayas, the coldest mountains in the world, where the snow never melts off the peaks.",
    ],
    [
      "They found a fishing boat that had been studying how the fish numbers are falling, stuck fast and held in the frozen sea ice.",
      "They found a weather station that was measuring how fast the ice is melting, half buried under a huge fall of snow.",
    ],
    [
      "One of the ship's scientists had gone out onto the ice to collect samples of it, and had not come back again.",
      "One of the ship's engineers had set off on a snowmobile to look for a way through the ice, and had not come back.",
    ],
    [
      "They had to watch out for walruses, and the book even has a chapter about it that is called “Beware the walrus”.",
      "They had to watch out for killer whales, and the book even has a chapter about them called “Orcas in the ice”.",
    ],
  ],

  // 8. The Plant Poachers
  "se-08": [
    [
      "Ollie, the rainforest expert, and Kiki, the engineering expert, were the two chosen to go on the woodland mission together.",
      "Connor, the marine expert, and Roshni, the space expert, were the two chosen to go on the woodland mission together.",
    ],
    [
      "It took them to a forest in Oregon, in the United States, which is one of the places the rarest wild orchids grow.",
      "It took them to the swampy forests of Florida, in the United States, where many insect-eating plants grow in the wet ground.",
    ],
    [
      "They met a park ranger, which is somebody who looks after wild places, and whose job was guarding the rare forest plants.",
      "They met a seed collector, which is somebody who gathers seeds to save, and whose job was keeping the flytraps growing.",
    ],
    [
      "The poachers were digging up the rare orchids growing in the forest, so that they could sell them on to collectors.",
      "The poachers were cutting down the old trees in the woodland, so that they could then sell the valuable timber on for money.",
    ],
    [
      "It is a plant that lives on rainwater alone, and its deep cup-shaped leaf holds enough water to last through a dry summer.",
      "It is a plant that glows faintly at night, and its light pulls in the moths and beetles that it needs to spread its pollen.",
    ],
  ],

  // 9. The Moon Mission
  "se-09": [
    [
      "Roshni, the space expert, and Kiki, the engineering expert, were the two chosen to blast off to the Moon together.",
      "Cheng, the geology expert, and Ollie, the rainforest expert, were the two chosen to blast off to the Moon together.",
    ],
    [
      "It took them out to the planet Mars, where they bounced over the dusty, rocky ground in the planet's very low gravity.",
      "It took them to a space station orbiting Earth, where they floated about inside it because there was almost no gravity.",
    ],
    [
      "They used the space junk as weights to hold the Beagle down, so that it would not drift off in the Moon's low gravity.",
      "They gathered up the space junk into one pile to study it, so that they could work out which mission had left it behind.",
    ],
    [
      "They had to rescue a weather satellite, which is a machine that watches the sky, that had crashed down onto the Moon.",
      "They had to rescue a landing module, which is the part of a spacecraft that touches down, that had tipped over on a slope.",
    ],
    [
      "They collected samples of moon dust in sealed tubes, including the fine grey powder that covers the whole surface.",
      "They collected ice from the bottom of a dark crater, because ice on the Moon can tell scientists about comets long ago.",
    ],
  ],

  // 10. The Ice Age Adventure
  "se-10": [
    [
      "Cheng, the geology expert, and Leah, the biology expert, were the two chosen to travel back to the Ice Age together.",
      "Gustavo, the history expert, and Connor, the marine expert, were the two chosen to travel back to the Ice Age together.",
    ],
    [
      "It took them back in time to the Ice Age, onto the thick sheet of ice that covered the sea at the top of the world.",
      "It took them back to the end of the Ice Age, into the deep pine forest that grew as the great ice sheets melted away.",
    ],
    [
      "They found woolly rhinos, heavy animals with thick shaggy coats and two curved horns, including a young one and its mother.",
      "They found giant ground sloths, huge slow animals with long claws, including one feeding high up in a conifer tree.",
    ],
    [
      "They met a boy named Fang, a child from the Ice Age, and Ollie used his tracking skills to help him out on the steppe.",
      "They met a girl named Leaf, a young mammoth hunter, and Ollie used his tracking skills to help her find her family.",
    ],
    [
      "Sabre-toothed cats were a danger, and the book has a chapter about them near the end called “Sabre-tooth alert”.",
      "Dire wolves were a danger, and the book has a chapter about the pack near the end that is called “Wolves on the steppe”.",
    ],
  ],

  // 11. The Haunted Castle
  "se-11": [
    [
      "Gustavo, the history expert, and Leah, the biology expert, were the two who were chosen to travel back to the past together.",
      "Tamiko, the dinosaur expert, and Cheng, the geology expert, were the two chosen to travel back to the past together.",
    ],
    [
      "It took them back to the Middle Ages, to a walled city that was busy getting ready for a great summer market fair.",
      "It took them back to the time of the castles, to a monastery high on a hill that was preparing for a royal visit.",
    ],
    [
      "A ghostly, glowing lady known as the Grey Countess kept walking the castle walls and terrifying the crowds of people.",
      "A ghostly, glowing horse known as the Night Mare kept galloping through the courtyard and terrifying the castle guests.",
    ],
    [
      "They found a hidden room above the great hall, which let them look down on the feast and watch everybody in it.",
      "They found an old plan of the castle in the chapel, which showed them where the walls and towers had once stood.",
    ],
    [
      "It explains phosphorescence, which is the word for paints and powders that soak up light and then shine it back out.",
      "It explains how marsh gas can catch fire on its own, making the flickering lights people once thought were ghosts.",
    ],
  ],

  // 12. The Desert Disappearance
  "se-12": [
    [
      "Leah, the biology expert, and Cheng, the geology expert, were the two chosen to set off into the desert together.",
      "Kiki, the engineering expert, and Ollie, the rainforest expert, were the two chosen to set off into the desert together.",
    ],
    [
      "It took them into the Sonoran Desert, a hot dry desert in Arizona, where they drove across it in a desert buggy.",
      "It took them into the Sahara, the biggest hot desert in the world, where they crossed the sand dunes in a desert buggy.",
    ],
    [
      "They had to rescue a litter of coyote pups, which are young wild dogs that had been left alone in the desert heat.",
      "They had to rescue a family of young bighorn sheep, which had become trapped on a rocky ledge above the dry valley.",
    ],
    [
      "A flash flood made it much harder, because the sudden rain filled the dry riverbeds that they needed to cross.",
      "The burning heat made it much harder, because by the middle of the day it was too hot to search the desert at all.",
    ],
    [
      "She was watering all the plants in the big greenhouse where she works, when her compass badge glowed and called her away.",
      "She was out collecting leaves for her nature notebook nearby, when her compass badge glowed and called her away.",
    ],
  ],

  // 13. The Sunken Treasure
  "se-13": [
    [
      "Tamiko, the dinosaur expert, and Gustavo, the history expert, were the two chosen to go treasure hunting together.",
      "Leah, the biology expert, and Roshni, the space expert, were the two chosen to go treasure hunting together.",
    ],
    [
      "They set out to find a sunken cargo ship, searching the sea for the crates of gold coins it had been carrying.",
      "They set out to map an old harbour wall under the sea, searching the seabed for the heavy stones that had fallen from it.",
    ],
    [
      "A whale shark needed their help, which is a huge, spotted shark with pale markings that swims slowly near the top of the sea.",
      "A hawksbill turtle needed their help, which is a sea turtle that comes up onto the beach at night to lay its eggs.",
    ],
    [
      "It had swallowed a floating plastic bag by mistake, and the book has a whole chapter about it called “A bad meal”.",
      "It had got stuck in a narrow gap in the coral reef, and the book has a whole chapter about freeing it called “Wedged in”.",
    ],
    [
      "He was out in a kayak just off the beach near his home, looking down into the clear water, when the roll call came.",
      "He was helping to mend a fishing net down on the harbour wall, close to his home, when the roll call reached him.",
    ],
  ],

  // 14. The Cave Crisis
  "se-14": [
    [
      "Connor, the marine expert, and Kiki, the engineering expert, were the two chosen to go down into the caves together.",
      "Gustavo, the history expert, and Tamiko, the dinosaur expert, were the two chosen to go down into the caves together.",
    ],
    [
      "It took them to a network of caves in Vietnam, which the book calls the Green Caves, deep under a thick jungle.",
      "It took them to a chain of sea caves in Greece, which the book calls the Blue Caves, cut into the cliffs by the waves.",
    ],
    [
      "They found a colony of cave swiftlets, small birds that nest on the cave walls and find their way about using clicks.",
      "They found whole shoals of blind cave fish, which have no eyes at all and feel their way through the water instead.",
    ],
    [
      "There was a part called the flooded gallery, and the book even has a whole chapter about it with that same name.",
      "There was a part called the bottomless shaft, and the book warns about it in a chapter with that same name.",
    ],
    [
      "People were taking the old cave paintings off the walls, which was spoiling something that could never be put back.",
      "People were pumping water out of the caves for their crops, which was drying out the pools that the cave life needed.",
    ],
  ],
};

export default secretExplorersDistractors;
