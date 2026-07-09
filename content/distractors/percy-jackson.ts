import type { DistractorMap } from "./index";

// Distractors keyed by "<bookId>-<chapterId>" (e.g. "pj-01-ch-01").
// Each entry is an array of 5 pairs (one per question), each pair being
// two plausible-but-wrong answers for that question.

const percyJacksonDistractors: DistractorMap = {

  // ─── Book 1: The Lightning Thief ───────────────────────────────────────

  "pj-01-ch-01": [
    ["At the Natural History Museum in Washington D.C.", "At the Smithsonian Institution on a class day trip."],
    ["A Harpy — a bird-monster with a woman's face.", "A Lamia — a snake-woman who hunted children."],
    ["A magical spear called Anaklusmos hidden in his shoe.", "A short bow that appeared when he snapped his fingers."],
    ["She shrieked and fled through the window, escaping.", "She was knocked unconscious and left lying on the floor."],
    ["They screamed and ran away in a panic.", "They all claimed they had seen the whole fight."],
  ],

  "pj-01-ch-02": [
    ["Three old men in black robes who smelled of the underworld.", "Three ravens perched on a branch, staring only at Percy."],
    ["She dropped the yarn entirely and it rolled under traffic.", "She spun the yarn faster and faster, staring at the sky."],
    ["He laughed nervously and pretended he hadn't seen anything.", "He told Percy they were just three normal senior citizens."],
    ["He was suspended for cheating on his final exams.", "He failed his end-of-year tests because of too many absences."],
    ["They booked a trip to their grandmother's house upstate.", "They planned to move to a new apartment closer to the city."],
  ],

  "pj-01-ch-03": [
    ["It blew in from the east and was warmer than any storm they had seen.", "The water turned black and oily before the thunder even started."],
    ["Percy's stepfather Gabe arrived drunk and looking for a fight.", "An old woman in a black cloak knocked on the window."],
    ["She told Percy that his father had died before Percy was born.", "She admitted she had lied about his father — he was still alive."],
    ["Monsters wouldn't find him if no one knew who he was.", "His father had specifically asked her to keep Percy far from the divine world."],
    ["They planned to catch the first flight out of New York to London.", "They decided to hide in the cabin until morning and then call for help."],
  ],

  "pj-01-ch-04": [
    ["A Cyclops with a huge club chased them down the road.", "A pack of hellhounds came howling out of the forest."],
    ["She was thrown against a tree and knocked unconscious.", "She managed to escape into the woods and hid safely."],
    ["He tricked it into running off a cliff edge in the dark.", "He distracted it with his pen and Grover stabbed it with a stick."],
    ["He was dragged inside the camp by Grover and treated by healers.", "He walked into camp on his own and then fainted at the door."],
    ["He hadn't been strong enough to fight the monster without training.", "Grover had panicked and run instead of helping fight."],
  ],

  "pj-01-ch-05": [
    ["Chiron — who had already arrived at camp disguised as a centaur stable hand.", "Luke Castellan — who had found him on the hillside and carried him to a cabin."],
    ["He was actually a faun — a nature spirit who had been spying on Percy all year.", "He was a satyr working undercover for Olympus, sent there to recruit Percy."],
    ["A training academy on Long Island for the children of ancient heroes.", "A secret government facility that studied and protected people with unusual gifts."],
    ["The smell of ambrosia — the food they ate — attracted the wrong creatures.", "He had been careless and kept showing his abilities in public places."],
    ["Each cabin was colour-coded so campers could find their group quickly.", "Campers shared the cabins based on their powers, not their parent."],
  ],

  "pj-01-ch-06": [
    ["In the Zeus cabin — the head god's children got priority housing.", "In the Hades cabin on the edge of camp, away from everyone else."],
    ["Water that touched him turned to acid, burning the enemy nearby.", "He found he could breathe fire briefly every time he landed in a stream."],
    ["It was the mark of Poseidon, who ruled water and called the sea his domain.", "Water healed all demigods the same way — it was camp's secret resource."],
    ["A winged helmet floated above his head and spun slowly.", "A golden lightning bolt flashed in the sky directly above him."],
    ["He was the first son of Poseidon born in over a century.", "Poseidon had always planned to keep Percy hidden until he was older and ready."],
  ],

  "pj-01-ch-07": [
    ["Ares had stolen the bolt as a prank to stir up trouble between the gods.", "Hermes had misplaced it while delivering a package across Olympus."],
    ["It would lead to a season of drought and crops failing across the world.", "All sea travel would become dangerously stormy for the next hundred years."],
    ["A mummified figure inside a sealed glass case in the camp's library.", "A golden statue that spoke prophecies when a camper touched its plinth."],
    ["Travel east to find the bolt in Hades's realm and challenge him to a duel.", "Climb Mount Olympus immediately and confront Zeus directly about the theft."],
    ["Grover the satyr and Luke Castellan, son of Hermes.", "Thalia Grace and Clarisse, two of the strongest campers available."],
  ],

  "pj-01-ch-08": [
    ["They stole a car from a roadside parking lot and drove without stopping.", "They took a train that Chiron had pre-booked for the first stage of the trip."],
    ["Luke, who had secretly followed them to make sure they didn't mess up.", "A pair of empousai disguised as grandmothers sitting at the back."],
    ["They pulled the emergency cord and fled through the rear door.", "Percy used his sword to cut a hole in the roof and they climbed out."],
    ["That Ares himself was hunting Percy and wanted revenge for past slights.", "That Kronos had put a bounty on Percy through all the monsters of the world."],
    ["Grover called in a favour from a nature spirit who created fog to hide them.", "They doubled back the way they came and hitched a different ride."],
  ],

  "pj-01-ch-09": [
    ["A luxury hotel that turned travellers to stone if they didn't pay their bill.", "A roadside museum full of ancient Greek artefacts displayed in order of age."],
    ["She was an empousa — a vampire who fed on the life force of travellers.", "She was a Lamia — a child-eating monster that disguised itself as a kind woman."],
    ["She had once been cursed by Poseidon and therefore mistrusted his children.", "As a daughter of Athena, she had a natural rivalry with Medusa going back centuries."],
    ["He threw his shield at her neck and caught her off guard from behind.", "He closed his eyes and stabbed blindly in the direction of her breathing."],
    ["He buried it in the ground nearby so no one could use it again.", "He smashed it into fragments with a rock to destroy its power permanently."],
  ],

  "pj-01-ch-10": [
    ["Percy's foot slipped and he fell from a moving vehicle on a highway.", "A Cyclops threw Percy through the air from several blocks away."],
    ["He discovered he could fly briefly if he concentrated hard enough.", "He created a water shield that slowed his fall enough to survive."],
    ["The river had been blessed by Apollo to protect sacred travellers.", "He was wearing enchanted armour that activated on impact with any water."],
    ["Hermes appeared with a message telling Percy to take the next train east.", "Apollo's golden chariot flew past and a god tossed him a clue about the bolt."],
    ["He could heal completely only in saltwater, not fresh rivers or pools.", "Water made him stronger but he could still be hurt by weapons while submerged."],
  ],

  "pj-01-ch-11": [
    ["Persephone, who was hiding from Hades near the surface for the summer.", "Dionysus, who was on a road trip and bored enough to stop for lunch."],
    ["He would lend them his flying chariot to travel west faster than on foot.", "He would personally escort them through monster territory safely."],
    ["A nest of fire ants that Hephaestus had enchanted to guard his tools.", "A flood trap — Hephaestus had rigged the waterslides to drown intruders."],
    ["The body of Ares's shield polisher, who had accidentally left it behind.", "A secret message from Hephaestus hidden inside a hollow suit of armour."],
    ["Kronos himself had magically placed it there in Ares's absence.", "Grover had accidentally picked it up when Ares wasn't looking and hidden it."],
  ],

  "pj-01-ch-12": [
    ["A casino in the desert where magic dice made everyone forget the time.", "A carnival beside a lake where the rides never stopped running."],
    ["The music playing in the lobby made everyone forget why they had come.", "Staff members sprayed a memory-erasing mist whenever guests tried to leave."],
    ["He splashed water from the fountain on his face, which shocked him awake.", "He set a loud alarm on his phone before entering and that woke him up."],
    ["About three hours — they had been lucky to get out before a full day passed.", "Nearly a week — though it had felt like barely half an afternoon to them."],
    ["The deadline to prevent war between the gods was only a few days away.", "Their money was running out and they couldn't afford to stay any longer."],
  ],

  "pj-01-ch-13": [
    ["Beneath a busy airport in Los Angeles, accessed through a luggage carousel.", "At the bottom of a lake in Santa Monica, reached by holding your breath."],
    ["The old ferryman who checked passports and decided if souls could enter.", "A guard dog trainer who put monsters to work keeping out the living."],
    ["They each donated a piece of something personally meaningful to them.", "Annabeth argued legal theory with Charon until he agreed to let them cross."],
    ["A river of forgetfulness — drinking it wiped your memory completely clean.", "A flaming moat filled with the souls of those who had refused to be judged."],
    ["A pair of massive bronze gates that required a key to unlock from outside.", "A magical wall of fire that only parted for those already dead."],
  ],

  "pj-01-ch-14": [
    ["The Isles of the Blessed — where heroes rested after many rebirths.", "The Mourning Fields — where guilty souls wandered ashamed forever."],
    ["She sang him a lullaby from her childhood until he fell asleep.", "She scattered enchanted water on him that calmed him like a pet."],
    ["The entire underworld was silent and orderly — nothing like the myths said.", "It smelled of fresh flowers and the temperature was surprisingly pleasant."],
    ["It was reserved for demigods who had completed all their quests.", "Only those who had died saving another person's life were allowed in."],
    ["He was annoyed but showed off by identifying the names of every soul they passed.", "He kept stopping to help confused souls find their way, slowing the group down."],
  ],

  "pj-01-ch-15": [
    ["He was delighted — he assumed Percy had brought the bolt as a gift.", "He assumed Percy had come to apologise for stealing his helm."],
    ["An empty backpack with just a used wrapper at the bottom.", "A map of Olympus that Annabeth had drawn — clearly not a lightning bolt."],
    ["An ancient helmet that granted the wearer the power of storms.", "A crown that allowed the wearer to command the dead."],
    ["He laughed and said it proved Percy was cleverer than expected.", "He called Percy a liar and threatened to send the Furies after him."],
    ["That Ares and Luke had planned the whole thing together from the start.", "That Zeus himself had arranged for the bolt to disappear to test Percy."],
  ],

  "pj-01-ch-16": [
    ["A magic rope ladder that Poseidon had lowered through the earth's crust.", "A secret passage Annabeth had spotted behind Hades's throne."],
    ["There were only two pearls — one for Percy and one for Annabeth.", "There were four pearls, but one had cracked on the way down."],
    ["They swam upward through the rivers of the Underworld to reach the surface.", "They argued with Hades until he agreed to open a direct door to the mortal world."],
    ["He didn't care — he knew they could come back for her later.", "He was furious at Annabeth and Grover for not caring enough."],
    ["Kronos in disguise, who had taken over the beach to block their escape.", "A pack of Furies who had been waiting on the shore for them to emerge."],
  ],

  "pj-01-ch-17": [
    ["He revealed he had been working for Hades all along, not Kronos.", "He admitted it was just a personal challenge — he wanted to see if Percy would fail."],
    ["He used the ocean to confuse Ares and then called lightning from the sky.", "He threw sand in Ares's eyes and then struck him with Riptide from behind."],
    ["He was banished to the bottom of the ocean for a hundred years.", "He faded from sight in embarrassment and could never return to Olympus."],
    ["He told Percy that Luke had become so powerful that even the gods feared him.", "He said Poseidon regretted having Percy and wished he had stayed mortal."],
    ["Riptide — he had dropped it during the duel and needed it to return the bolt.", "A bag of gold coins Ares had stolen from the camp's treasury."],
  ],

  "pj-01-ch-18": [
    ["On the roof of the Chrysler Building on the 100th floor.", "Inside a volcano in Iceland that served as the gods' northern retreat."],
    ["He embraced Percy warmly and apologised for ever doubting him.", "He was still furious and needed Poseidon to physically restrain him."],
    ["Percy gave it directly to Hades, who appeared on Olympus to collect it.", "He left it on a pedestal in the throne room with a note asking Hades to fetch it."],
    ["He set her free himself as a final act of mercy before disappearing.", "She had never actually been taken — the vision Percy saw was just a dream."],
    ["He said Percy had been a disappointment but had done enough to avoid punishment.", "He said nothing and turned away, which Percy took as a sign of respect."],
  ],

  "pj-01-ch-19": [
    ["That he had taken it accidentally and had been trying to return it ever since.", "That he had stolen it as a personal challenge to prove demigods could outwit gods."],
    ["He was angry because Hermes had ignored him for years after making a promise.", "He felt the gods forced demigods to risk their lives for contests that meant nothing."],
    ["He challenged Percy to a duel and won, leaving Percy unconscious.", "He revealed Kronos had taken control of his body against his will."],
    ["His water powers kicked in and healed the sting before it spread.", "Thalia's pine tree sent roots to block the poison from reaching his heart."],
    ["That Luke had been planning this since before Percy even arrived at camp.", "That a second traitor was still at camp and Percy didn't know who it was."],
  ],

  "pj-01-ch-20": [
    ["She was at a neighbour's apartment and had assumed Percy had run away.", "She had been living in the Underworld the whole time and didn't know she'd been released."],
    ["She was angry at Poseidon for putting Percy in danger and refused to talk about it.", "She cried for a long time and made Percy promise never to go on another quest."],
    ["He could go back to a normal school and no monster would ever find him again.", "That his friendship with Grover and Annabeth would slowly fade since they lived at camp."],
    ["He signed up for a special programme at a school for gifted students.", "He asked Chiron if he could stay at camp permanently and train year-round."],
    ["That Annabeth would never forgive him for the events of the quest.", "That the next summer at camp would be boring compared to this one."],
  ],

  // ─── Book 2: The Sea of Monsters ──────────────────────────────────────

  "pj-02-ch-01": [
    ["Visions of Annabeth trapped inside a giant mirror crying for help.", "Nightmares about Olympus crumbling while all the gods stood watching."],
    ["An unusually quiet kid who never spoke and always sat alone.", "A new student who moved every few weeks and had no records at all."],
    ["Every school he attended burned down within a month of him arriving.", "Every teacher secretly tried to recruit him for a special government programme."],
    ["He let Tyson copy his homework so the teachers wouldn't punish him.", "He reported the bullying to the school counsellor on Tyson's behalf."],
    ["A group of older students surrounded them in the corridor after class.", "A fire alarm pulled by one of the bullies trapped everyone in the gym."],
  ],

  "pj-02-ch-02": [
    ["Demigods hired by Kronos to keep an eye on Percy from inside the school.", "Creatures of Hecate sent by Luke to observe Percy before the attack."],
    ["They were rubber balls painted to look like metal that crumbled on impact.", "They were snowballs that had been soaked in Greek fire and then frozen."],
    ["Nico di Angelo appeared with a horde of skeleton warriors.", "Grover came running in from outside, waving a reed flute."],
    ["He hid under the bleachers and stayed completely out of the way.", "He cried and cowered in a corner until the monsters were distracted."],
    ["She immediately liked Tyson and invited him to train at camp with them.", "She was friendly toward him but nervous about his enormous size."],
  ],

  "pj-02-ch-03": [
    ["A pack of hellhounds had broken through the borders at night.", "The river running beside camp had flooded and washed out the north border."],
    ["Monsters could fly in over the tree line and drop into the camp directly.", "It meant the entire island of Long Island was no longer safe for demigods."],
    ["He was a friendly automaton — a robot built by Hephaestus to guard the camp.", "He was a giant — a child of Gaia who had run away from the enemy's army."],
    ["He was the son of a river god — a minor deity who had blessed Percy once.", "He was a half-blood son of a Nereid who had lived near Percy's apartment."],
    ["He was excited and immediately boasted about it to every cabin.", "He accepted it quickly and moved into the Poseidon cabin without comment."],
  ],

  "pj-02-ch-04": [
    ["The magical sheepskin of the first golden ram sacrificed to the gods.", "A glowing blanket woven by Athena and infused with the power of healing."],
    ["Luke — but he had gone missing and couldn't be officially given the quest.", "Annabeth — but she was too young according to camp rules for a solo quest."],
    ["A spirit from the Elysian fields given a temporary body as a reward.", "A minor god who had lost a bet with Hermes and had to serve as activities director."],
    ["A two-way mental connection between two people who had shared a meal.", "A divine radio signal that demigods could tune into using bronze instruments."],
    ["They bribed a delivery driver to take them west in a refrigerated truck.", "They convinced Chiron to give them an official head start before the others left."],
  ],

  "pj-02-ch-05": [
    ["A tugboat convoy travelling the Mississippi that Luke owned through a shell company.", "A private submarine docked at a marina in New York Harbour."],
    ["A massive bronze cauldron in which Kronos's followers boiled down monsters.", "A glowing golden throne that magnified Kronos's divine power remotely."],
    ["With sarcastic politeness — offering them a seat and pretending it was a courtesy.", "With visible surprise and then immediate fury — he hadn't expected them at all."],
    ["They fought their way to the anchor chain and climbed down to the water.", "They hid inside cargo crates and were offloaded at the next port."],
    ["That the gods were already losing the war and didn't know it yet.", "That Kronos had a spy inside Olympus who was feeding him information daily."],
  ],

  "pj-02-ch-06": [
    ["A rest stop by the sea that turned male visitors into crabs.", "A seaside holiday camp that was actually a prison for misbehaving demigods."],
    ["She turned Percy into a hamster and placed him in a maze for testing.", "She served him a cake that slowed his thinking to that of a small animal."],
    ["Circe's enchantment only affected those with divine blood in their veins.", "Annabeth had eaten a special antidote herb before they arrived on the island."],
    ["Percy broke the spell by concentrating on his father's name for sixty seconds.", "Grover played a magical tune on his pipes that undid the transformation."],
    ["They were staff members who had refused to work for Circe any longer.", "They were monsters that Circe had tamed and then grown bored of."],
  ],

  "pj-02-ch-07": [
    ["Temptresses whose appearance made sailors crash their boats into the rocks.", "Musicians whose instruments played notes so high they paralysed any listener."],
    ["She was furious at Percy for suggesting something so reckless and dangerous.", "She refused outright — her training meant she had better self-control than most."],
    ["She drove the boat far out to sea so the sound couldn't reach them.", "She had Percy throw the Sirens' island instrument overboard first."],
    ["She sank to her knees on the deck but managed to resist swimming toward them.", "She plugged her ears in time and broke free of the trance almost immediately."],
    ["That she had a habit of charging into situations without considering the risks.", "That she trusted her own strength too much and underestimated every enemy."],
  ],

  "pj-02-ch-08": [
    ["Scylla was a giant squid and Charybdis was a sea serpent curled around a rock.", "Scylla was a giant bird that dove from cliffs and Charybdis was a waterfall."],
    ["Sailing straight through the middle while moving as fast as possible.", "Turning back and finding a longer route around the outside of both monsters."],
    ["He leaped onto Charybdis's back and stabbed her until she released the ship.", "He threw the anchor into the whirlpool's centre to disrupt its spinning."],
    ["He dog-paddled to shore and waited on a nearby beach until they came back.", "He grabbed a floating plank and rode the current until it carried him to safety."],
    ["His father Poseidon personally guided their ship through the strait.", "Percy turned himself into a current of water and steered the ship from below."],
  ],

  "pj-02-ch-09": [
    ["The Cyclops had found him wandering in the sea and locked him up for fun.", "He had followed a trail he thought led to Pan and ended up in the cave."],
    ["Annabeth created a diversion by setting Polyphemus's sheep on fire.", "Percy knocked out the cave's door boulder with a blast of sea water."],
    ["He told the Cyclops his name was 'Someone' so Polyphemus would blame no one.", "He called himself 'The Invisible One' and hid behind Polyphemus's largest sheep."],
    ["Tyson held Polyphemus down so Percy could pull it free from the tree.", "The Fleece fell off the tree during the chaos of the fight and landed near them."],
    ["He created a massive wave from the sea and washed Polyphemus away.", "He challenged Polyphemus to a shouting contest and then escaped during the noise."],
  ],

  "pj-02-ch-10": [
    ["Clarisse arrived first because she had been secretly following Percy's team.", "Hermes delivered it to camp himself as a favour to Percy."],
    ["Slowly, over the next several weeks, as the magic spread through the roots.", "A rumble shook the camp and the tree burst into golden flame before healing."],
    ["Thalia's spirit was still trapped in the tree and needed more time.", "The tree was so old that the Fleece's healing power took decades to work."],
    ["A daughter of Hermes who had run away from camp to join Luke years before.", "A daughter of Apollo who had been struck by lightning on her way to camp."],
    ["That Zeus now had two potential candidates for the prophecy instead of one.", "That Kronos would personally target Thalia before she could become a threat to him."],
  ],

  // ─── Book 3: The Titan's Curse ────────────────────────────────────────

  "pj-03-ch-01": [
    ["Grover had smelled ambrosia near the school and thought a demigod was baking.", "A teacher at the school had sent a coded message to Camp Half-Blood."],
    ["A giant scorpion — the same species that had nearly killed Percy before.", "A sea serpent — an unusual creature so far from any coast."],
    ["She was hit by a stray arrow and taken to a healer at camp.", "She chased the monster off a cliff edge and tumbled down with it."],
    ["Chiron himself galloped in and drove the manticore off with his bow.", "Percy called a rainstorm from a nearby cloud to blast the monster back."],
    ["Bianca had been hidden in another dimension for safekeeping.", "The manticore had carried Annabeth to Luke's camp as a prisoner."],
  ],

  "pj-03-ch-02": [
    ["They were the children of two minor gods who had no cabin at camp.", "They had been raised by mortals who had found them as babies in a forest."],
    ["A group of mortal girls who had sworn to protect the goddess on her hunts.", "An ancient sisterhood of witches who served Artemis in exchange for power."],
    ["She asked to be given training time at Olympus itself rather than go to camp.", "She decided to stay at Westover Hall since it felt safer than either option."],
    ["He was angry but quickly accepted it once he understood the advantages.", "He was relieved — the Hunters seemed well-equipped and would protect her."],
    ["She was tracking a rare sea creature that had been washing up on beaches.", "She was following a trail of golden fur that pointed to a monster no one had named."],
  ],

  "pj-03-ch-03": [
    ["She had been drawn underground by one of Hades's tricks and was trapped there.", "She had gone to Olympus to confront Zeus about the missing demigods and vanished."],
    ["One would turn to stone, one would turn back time, and one would be chosen last.", "Four companions would carry the sky, and the best of them would choose to die."],
    ["Zoe, Thalia, Annabeth, and Clarisse — the camp's four strongest fighters.", "Bianca, Nico, Luke, and Grover — those the Oracle specifically named."],
    ["He was already on a quest of his own and the rules prevented doubling up.", "Chiron decided Percy's fatal flaw made him too great a risk on an official mission."],
    ["She was holding a polished shield that showed a reflection of a pale throne.", "His dream showed Annabeth locked in a bronze box somewhere underground."],
  ],

  "pj-03-ch-04": [
    ["The smell of a great monster that only gods could fully sense from a distance.", "The presence of Kronos's main force, which was moving faster than expected."],
    ["Shadow warriors made from darkness — they melted in sunlight but came back at night.", "Stymphalian birds made of bronze who kept reforming from their own fallen feathers."],
    ["They dissolved permanently when struck with weapons made of Celestial bronze.", "They could be reasoned with — Annabeth once talked a pair into standing aside."],
    ["She was being carried toward a mountaintop somewhere in the American west.", "She was being held in a cave below sea level that smelled of brimstone."],
    ["She began to show grudging respect for his skill after he saved Grover from a trap.", "She asked him to explain his thinking before each fight to help her trust him more."],
  ],

  "pj-03-ch-05": [
    ["A pile of old Olympian treasures left over from when the gods outgrew them.", "An ancient battlefield where the gods had defeated the Titans the first time."],
    ["He spotted a golden dog collar inside a helmet that he thought was a puppy.", "He saw a glowing ring that he thought was a magic portal back to camp."],
    ["It was actually a Colossus — a giant divine statue that protected the grounds.", "A bronze guardian activated when any thief touched something within its radius."],
    ["Percy managed to destroy the metal giant's core power source just in time.", "Zoe shot an arrow through a gap in the armour and froze the soldier's mechanism."],
    ["She was angry at Percy for not jumping in immediately to try to stop it.", "She accepted it quietly and suggested they press on without looking back."],
  ],

  "pj-03-ch-06": [
    ["Kronos's right-hand general — a Titan named Hyperion who served him loyally.", "A disguised Olympian god who had switched sides after losing a bet to Kronos."],
    ["He had broken free when a mortal archaeologist accidentally opened his prison.", "Luke had found a loophole in the ancient agreement that had originally trapped him."],
    ["He offered her a position as one of his generals if she held it for one day.", "He lured her in by threatening to destroy her sacred forest if she didn't comply."],
    ["She was struggling but holding the sky in place so no one else would be hurt.", "She was frozen and motionless — Kronos's power had put her in a trance."],
    ["To weaken Artemis's influence over the Hunt so more girls would join Kronos.", "To use the sky's weight to shatter Olympus's foundations from below."],
  ],

  "pj-03-ch-07": [
    ["He stood underneath it and redirected some of the weight into the mountain itself.", "He shouted for Poseidon and his father sent a column of water to share the load."],
    ["Like he was being inflated with too much air — pressure without clear pain.", "His skin turned to bronze and he felt nothing at all — only cold."],
    ["Annabeth shot arrows at Atlas while also trying to take care of Grover.", "Thalia fought Atlas while holding one of his wrists so he couldn't escape."],
    ["Atlas grabbed it back and placed it on a different part of the mountain range.", "The sky moved on its own when Artemis broke free — no longer needing a carrier."],
    ["Annabeth defeated him in a contest of strategy, and he agreed to give up.", "Percy used Riptide to cut the golden chains holding Artemis in place."],
  ],

  "pj-03-ch-08": [
    ["She was struck by one of the Spartoi skeleton warriors during the retreat.", "She fell from a cliff edge while running from a herd of monsters after the battle."],
    ["She was the granddaughter Atlas had rejected as unworthy of his bloodline.", "She had been a favourite of Artemis in ancient times before a disagreement."],
    ["She was taken by Artemis to be healed at Olympus, but the wounds were too severe.", "She smiled at Percy and asked him to tell camp they had done well."],
    ["She created a new island in the ocean and named it after Zoe.", "She invited the remaining Hunters to choose one of their own as the new constellation."],
    ["She joined the Hunters to stay close to Artemis as a personal bodyguard.", "She was voted camp leader by the other demigods in recognition of her bravery."],
  ],

  "pj-03-ch-09": [
    ["A letter arrived at the camp addressed to him from Bianca.", "Another camper named Silena broke the news gently before Percy could."],
    ["He wailed loudly and then forgave Percy immediately, hugging him.", "He went very quiet, refused to talk about it, and walked away."],
    ["He shot arrows into the air that turned into skeleton soldiers mid-flight.", "He slammed his hands on the ground and caused a small earthquake."],
    ["A son of Hades — the ancient god of death who ruled the Underworld.", "A son of Thanatos — the minor god of death who carried souls to judgement."],
    ["The prophecy said a half-blood child of the eldest would destroy or save Olympus.", "Hades's children had a history of becoming the most powerful demigods of any age."],
  ],

  // ─── Book 4: The Battle of the Labyrinth ─────────────────────────────

  "pj-04-ch-01": [
    ["Meriwether Prep — a private school in upstate New York near the forest.", "Horizon Academy — a boarding school with strict rules and no outside visitors."],
    ["Nico di Angelo, who had been following Percy to ask questions about his sister.", "Thalia Grace, who was passing through New York with the Hunters."],
    ["The class pets in the biology lab transformed and attacked the lunchroom.", "A fire started in the school library during a false alarm evacuation drill."],
    ["A hollow in the school's basement wall that led into the earth below the gym.", "A drain in the gym changing room that opened into a much larger underground space."],
    ["It meant monsters could track demigods through the tunnel system without detection.", "It provided a direct route between camp and New York that Chiron didn't know about."],
  ],

  "pj-04-ch-02": [
    ["The old plumbing beneath Long Island's water table had been converted into tunnels.", "An old smuggling cave network from the Revolutionary War ran under the camp."],
    ["Monsters would arrive disguised as new demigod recruits during the war games.", "Luke would use it to teleport his entire army inside in the middle of the night."],
    ["The maze changed with the tides — only navigable at certain times of day.", "The maze could be navigated by anyone with Daedalus's personal mark on their skin."],
    ["Thalia and Nico both volunteered, along with Clarisse and a Hunter named Phoebe.", "Luke himself was rumoured to be planning to lead the mission — until it fell apart."],
    ["No map of it was accurate for more than a few minutes before the passages moved.", "It required you to walk backward through every corridor or you looped back to the start."],
  ],

  "pj-04-ch-03": [
    ["She needed Hephaestus's fire to light the correct path through the shifting tunnels.", "She lacked the empathy link that satyrs used to feel when they were on the right trail."],
    ["She had inherited her mother's ability to find hidden doors in solid surfaces.", "She could read the magical graffiti left by previous explorers in the Labyrinth's walls."],
    ["Monsters inside would smell her mortal scent and ignore the demigod team.", "Having a mortal along guaranteed that the maze's shifting logic would pause temporarily."],
    ["She understood it was necessary and tried to stay as helpful as possible.", "She was flattered that Annabeth had personally asked for her help."],
    ["She could sense which direction was north at all times — the maze couldn't confuse her compass sense.", "She could see the maze's original blueprint projected on its walls like a ghost image."],
  ],

  "pj-04-ch-04": [
    ["He was Perdix reborn — Daedalus's nephew who had been killed and brought back.", "He was Hephaestus in disguise, testing the campers to see if they deserved help."],
    ["He had transferred his mind into a magical crown that only activated when worn.", "He had encoded his personality into the camp's magical boundary tree for safekeeping."],
    ["He had already given Luke a map that only worked if you walked it in Greek.", "He had given Luke a thread-system — the same trick he gave Theseus — to navigate."],
    ["She realised the swordmaster's fighting style exactly matched the maze's construction logic.", "She noticed his tools were covered in the same bronze markings as the Labyrinth's walls."],
    ["He had accidentally invented something that had been used to kill hundreds of men.", "He had stolen credit for inventions made by others, including his own students."],
  ],

  "pj-04-ch-05": [
    ["A grove of ancient trees that had survived since before the Greek gods rose to power.", "A valley beneath a mountain range where no human had ever lived or built."],
    ["Pan had been hiding in the Labyrinth all along — it was the last wild place left.", "Pan appeared as a massive golden animal that spoke in a language only Grover understood."],
    ["He had been imprisoned by Kronos to prevent him interfering with the war plans.", "He had gone into a self-imposed sleep, waiting for a champion worthy of waking him."],
    ["He asked Grover to carry his spirit back to camp and sing his story to the other satyrs.", "He granted Grover the title of Lord of the Wild and made him his official successor."],
    ["That the wild would always be there as long as at least one satyr believed in Pan.", "That Grover had arrived too soon — Pan would return when the right mortal asked for him."],
  ],

  "pj-04-ch-06": [
    ["Percy dreamed Luke was writing in a journal that had Kronos's thoughts instead of his own.", "Percy saw Luke standing before a golden mirror that showed the face of a Titan."],
    ["Luke had drunk from the Titan's power source during a ritual on the Princess Andromeda.", "Luke had made a deal with Hades — possession in exchange for protection after death."],
    ["His hair turned silver and his voice echoed in two registers at once.", "He began to speak in ancient Greek automatically, not realising he was doing it."],
    ["He told Percy that joining Kronos was the only logical outcome for a demigod like him.", "He offered Percy a second chance — if he joined now, Kronos would spare his friends."],
    ["He had been secretly reading the journal of a past demigod who had served Kronos.", "He had heard Bianca's ghost in the Underworld warn him about the plan."],
  ],

  "pj-04-ch-07": [
    ["They came up through a river that flowed under the camp's north border.", "They teleported in using Hecate's magic, appearing in the middle of the dining hall."],
    ["Organised and overwhelming — two waves, with archers at the back covering the advance.", "Chaotic and desperate — both sides mixing together so fast that no strategy worked."],
    ["He was faster and tougher than before — he could take hits that would have downed him.", "His eyes turned silver and he could command monsters on the battlefield briefly."],
    ["A combination of giants, drakon riders, and fire-breathing creatures working in formation.", "Primarily skeleton warriors armed with ancient bronze weapons and impervious to arrows."],
    ["He pushed his weight toward the Hudson River to draw strength from the current.", "He teleported between spots on the battlefield using underground water as a shortcut."],
  ],

  "pj-04-ch-08": [
    ["His tendency to act without thinking — which had already cost him several allies.", "His fear of failure — which Kronos planned to exploit to make Percy freeze in battle."],
    ["He had intercepted private letters between Percy and Chiron about upcoming plans.", "He had borrowed Hermes's caduceus to spy on conversations inside the camp."],
    ["He had planned to tell Percy but then got sidetracked by the battle at camp.", "He felt Percy had already demonstrated the flaw and didn't need it explained."],
    ["There were fewer than thirty campers left able to fight after the Labyrinth battle.", "The camp's magical border was still weakened — it would need months to fully recover."],
    ["Kronos had fully inhabited Luke's body and was sitting up inside his sarcophagus.", "Kronos had scattered his consciousness into ten separate vessels, making him unkillable."],
  ],

  // ─── Book 5: The Last Olympian ────────────────────────────────────────

  "pj-05-ch-01": [
    ["They planned to steal Kronos's sarcophagus from the lower deck and toss it overboard.", "They would sabotage the ship's navigation so it ran aground far from New York."],
    ["A son of Apollo who had been Percy's bunkmate during his first summer at camp.", "A son of Ares who had switched sides after realising Kronos's army killed indiscriminately."],
    ["He grabbed a lifeboat and paddled to shore before the explosion triggered.", "He was pulled to safety by a Nereid who appeared in the ship's wake."],
    ["It delayed Luke's invasion of New York by three days while they rebuilt the fleet.", "It eliminated a monster called the Drakon that Kronos had planned to use as a front-line weapon."],
    ["He had been Percy's main rival in the camp's sword-fighting competitions for years.", "He was the most positive and cheerful person at camp — the loss left a noticeable gap."],
  ],

  "pj-05-ch-02": [
    ["He would drink from the River Lethe to clear his mind and make him fearless.", "He would ask Hades for a temporary armour upgrade tied to his Underworld connection."],
    ["He screamed constantly and felt the memories of every person who had died.", "He felt his body stretching apart and compressing again — like being squeezed through a straw."],
    ["The tip of his left finger, which he had been curling around Riptide's handle.", "The palm of his right hand, which he had been clenching in a fist throughout."],
    ["A different god had created a weak spot in each person during the process.", "The Styx chose the spot based on the person's oldest memory, not their thoughts."],
    ["The spot connected to where Kronos would most easily possess someone.", "It was the area of the body where divine blood concentrated — always the chest."],
  ],

  "pj-05-ch-03": [
    ["A Titan who controlled time and had been rebuilding since the first Titan War.", "A Titan who controlled the sea, and who Poseidon had been quietly wrestling with."],
    ["In Georgia — he rose from a tar pit near an ancient burial site at dawn.", "In Arizona — he appeared from underground in a desert canyon after a series of earthquakes."],
    ["Three gods left — the others had already been defeated by Luke's advance forces.", "Zeus ordered everyone to stay — but Hermes and Ares left anyway to fight Typhon alone."],
    ["Zeus had arranged it on purpose to give the demigods a chance to prove themselves.", "Kronos had created a magical lure — a false signal that made Typhon seem worse than he was."],
    ["Apollo and Artemis stayed behind as the designated defenders of Olympus.", "Ares stayed at the gates of Olympus, too proud to run after any monster."],
  ],

  "pj-05-ch-04": [
    ["They evacuated the mortals on school buses driven by automaton soldiers.", "Iris, goddess of the rainbow, used her powers to make mortals think they were dreaming."],
    ["He assigned everyone a specific monster to fight in single combat, no switching.", "He had each cabin defend one block of the city starting from the outer edges."],
    ["He became reckless and overconfident, getting injured several times unnecessarily.", "He struggled more than expected — the pressure of commanding others distracted him."],
    ["Waves of monsters reinforced by teleporting Titans who targeted weak points.", "A series of coordinated attacks on the bridges and tunnels simultaneously."],
    ["The rivers of Manhattan flowed in toward him when he called for strength.", "He absorbed electrical energy from the city's power grid whenever he touched a lamppost."],
  ],

  "pj-05-ch-05": [
    ["A satyr who had been captured on an earlier quest and turned to work for Luke.", "A minor god who had been secretly supplying the camp's food — and poisoning it."],
    ["She had grown bitter after years of being overlooked as a daughter of Aphrodite.", "She had been cursed by Kronos using a golden arrow that changed her loyalties."],
    ["Clarisse threw her sword down and refused to fight for the rest of the battle.", "The Ares cabin split — half fighting alongside the enemies before rejoining camp."],
    ["She put on Annabeth's invisibility cap and snuck out to retrieve a stolen weapon.", "She tricked a group of monsters into following her away from the main battle."],
    ["Clarisse was inspired to lead her cabin into the most dangerous part of the battle.", "Clarisse forgave Silena publicly in front of both cabins, ending the long tension."],
  ],

  "pj-05-ch-06": [
    ["A son of Hephaestus who had left camp after an argument about forge rights.", "A son of Hermes who had joined Kronos believing the god would give unclaimed kids a home."],
    ["He began receiving dreams from Percy that slowly changed his perspective.", "He met the shade of a demigod in the Underworld who warned him about Kronos's true plan."],
    ["He tried to steal Kronos's scythe and use it to wound him from behind.", "He grabbed Riptide from Percy's hand and swung it at Kronos's unguarded side."],
    ["He was struck by a bolt of divine energy and faded permanently.", "Kronos crushed him under a fallen pillar and left him to dissolve slowly."],
    ["That a few fighters stood no chance and they needed to retreat immediately.", "That the prophecy was wrong — Percy would not be the one to face Kronos after all."],
  ],

  "pj-05-ch-07": [
    ["Annabeth stepped between Percy and a group of soldiers and took an arrow.", "Annabeth was thrown off the edge of Olympus and Percy had to grab her arm."],
    ["She spoke Luke's real name three times, which broke the Titan's hold on the vessel.", "She held up the photo of Luke from their first year at camp, which he recognized."],
    ["He held up his empty hands — a gesture of peace — and waited for Luke to act.", "He spoke the prophecy aloud, making Luke realize he was the one it had described."],
    ["He slashed Luke across the chest, which expelled Kronos and ended the possession.", "He stabbed Kronos through the back of the hand, which broke the connection."],
    ["He fell unconscious and Kronos dissolved into golden dust around him.", "He said Percy was the only person who had ever really understood him, then closed his eyes."],
  ],

  "pj-05-ch-08": [
    ["Apollo chased Typhon into the ocean using a flurry of silver arrows.", "Hera called down a divine wind that swept Typhon into a chasm that sealed behind him."],
    ["They offered to make Percy the new head of the Hermes cabin — a huge honour.", "They agreed to build Percy a personal forge in Hephaestus's workshop as a thank-you gift."],
    ["He said yes and immediately underwent a brief transformation ceremony.", "He asked if he could think about it and then never gave them a final answer."],
    ["Because becoming a god would mean he could never eat blue food again.", "Because he wanted to grow up, finish school, and live an ordinary life eventually."],
    ["He made them swear to stop the war between themselves every fifty years.", "He demanded that each god take a human form and live among mortals for one year."],
  ],
};

export default percyJacksonDistractors;
