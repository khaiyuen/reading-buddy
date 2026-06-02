import { Series } from "./types";

const aToZMysteries: Series = {
  id: "a-to-z-mysteries",
  title: "A to Z Mysteries",
  author: "Ron Roy",
  description:
    "Dink, Josh, and Ruth Rose solve a different mystery in every book — one for each letter of the alphabet!",
  recommendedAge: "6-9",
  themeColor: "#1565c0",
  books: [
    {
      id: "az-01",
      number: 1,
      title: "The Absent Author",
      color: "#1565c0",
      listenFor: "Why the kids get suspicious when their favorite author goes missing",
      verified: false,
      questions: [
        {
          q: "What kicks the mystery off at the start of the story?",
          a: "Dink's favorite author, Wallis Wallace, is supposed to visit Green Lawn for a book signing, but he never shows up. Dink is crushed and wonders where he could have gone.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to figure out?",
          a: "They're trying to find out whether Wallis Wallace was kidnapped or simply chose not to come. They want to know if he's safe.",
        },
        {
          q: "What important clue changes the direction of their investigation?",
          a: "The kids discover that someone sent a letter pretending to be Wallis Wallace canceling the visit, and the real author may never have even known about it. That makes them realize someone planned the whole thing.",
        },
        {
          q: "Who was behind the mystery, and what was really going on?",
          a: "A man named Jimmy Fallon had kidnapped Wallis Wallace and was holding him at a local inn. He wanted the author all to himself.",
        },
        {
          q: "How does it all end, and what happens to the culprit?",
          a: "Dink and his friends find Wallace and help free him. The kidnapper is caught and Wallace is safe, and he even thanks the kids for saving him.",
        },
      ],
    },
    {
      id: "az-02",
      number: 2,
      title: "The Bald Bandit",
      color: "#0277bd",
      listenFor: "How a blurry video leads the kids to a sneaky thief",
      verified: false,
      questions: [
        {
          q: "What happens at the beginning that starts the mystery?",
          a: "A bank in Green Lawn is robbed by a bald man, and a local kid named Tyler captured part of it on video. The kids are hired to figure out who the robber is.",
        },
        {
          q: "What problem are Dink, Josh, and Ruth Rose trying to solve?",
          a: "They need to figure out the identity of the bald bandit before he escapes or strikes again.",
        },
        {
          q: "What clue turns the investigation around?",
          a: "The kids realize the bald man in the video might be wearing a disguise, and they start looking at people who might have reason to fake being bald.",
        },
        {
          q: "Who was the bandit, and how were they hiding?",
          a: "The robber was actually someone the kids knew who had disguised himself with a bald cap. He had been hiding in plain sight the whole time.",
        },
        {
          q: "How does the story wrap up?",
          a: "The kids expose the bandit with the evidence they've gathered, and the police are able to make an arrest. The stolen money is recovered.",
        },
      ],
    },
    {
      id: "az-03",
      number: 3,
      title: "The Canary Caper",
      color: "#01579b",
      listenFor: "What makes a missing canary turn into a bigger mystery",
      verified: false,
      questions: [
        {
          q: "What sets off the mystery in this story?",
          a: "An elderly woman named Mrs. Davis reports that her prize canary has gone missing from her apartment. She's heartbroken and asks the kids for help.",
        },
        {
          q: "What are the kids trying to figure out?",
          a: "They need to find out who stole the canary and why anyone would want to take a pet bird.",
        },
        {
          q: "What clue shifts the investigation in a new direction?",
          a: "The kids discover that the canary wasn't just a pet — it had been trained to repeat a secret phrase, which someone wanted to silence or steal for a reason.",
        },
        {
          q: "Who took the canary and what was the real motive?",
          a: "A neighbor had stolen the bird because it kept repeating something that could expose their wrongdoing. They wanted to get rid of the evidence.",
        },
        {
          q: "How does the story end?",
          a: "The canary is found safe and returned to Mrs. Davis, and the person responsible for taking it faces consequences for what they did.",
        },
      ],
    },
    {
      id: "az-04",
      number: 4,
      title: "The Deadly Dungeon",
      color: "#006064",
      listenFor: "What strange things start happening at a spooky old castle",
      verified: false,
      questions: [
        {
          q: "What gets the mystery started in this book?",
          a: "Dink and his friends visit a historic castle inn in Maine, and strange and scary things start happening almost immediately. Someone seems to be trying to scare the guests away.",
        },
        {
          q: "What are the kids trying to solve?",
          a: "They want to find out who is behind the frightening events at the castle and why someone would want to terrorize the inn's visitors.",
        },
        {
          q: "What discovery changes what they think is going on?",
          a: "The kids find a hidden dungeon beneath the castle and realize the scary events were deliberately staged to keep people away from a secret hidden there.",
        },
        {
          q: "What was really going on, and who was behind it?",
          a: "Someone was using the castle to hide stolen goods and was trying to frighten away guests so no one would discover the dungeon or what was stored inside.",
        },
        {
          q: "How does everything get resolved?",
          a: "The kids expose the scheme and the hidden stash is discovered. The culprit is caught, and the castle inn is finally safe for guests again.",
        },
      ],
    },
    {
      id: "az-05",
      number: 5,
      title: "The Empty Envelope",
      color: "#00695c",
      listenFor: "Why an envelope with nothing inside might actually be a big clue",
      verified: false,
      questions: [
        {
          q: "What mystery begins at the start of this story?",
          a: "Dink receives a mysterious envelope in the mail, but when he opens it, there's nothing inside. He can't figure out who sent it or what it means.",
        },
        {
          q: "What are the kids working to figure out?",
          a: "They want to know who sent the empty envelope, why it was mailed to Dink, and whether it's connected to something dangerous.",
        },
        {
          q: "What clue helps crack open the case?",
          a: "The kids figure out that the envelope itself contains a hidden message — something written in invisible ink or concealed in the paper. The emptiness was a trick.",
        },
        {
          q: "What was the secret behind the envelope and who sent it?",
          a: "The envelope was part of a plan to pass along a secret message without being detected. Someone was using Dink as an unwitting carrier.",
        },
        {
          q: "How does the mystery get wrapped up?",
          a: "Once the hidden message is decoded, the kids are able to piece together the full scheme and the right people are alerted to stop it.",
        },
      ],
    },
    {
      id: "az-06",
      number: 6,
      title: "The Falcon's Feathers",
      color: "#2e7d32",
      listenFor: "How the kids connect a stolen bird to a bigger crime",
      verified: false,
      questions: [
        {
          q: "What event kicks off the investigation?",
          a: "A rare peregrine falcon and its eggs go missing from a protected nesting site near Green Lawn. Someone has stolen an endangered bird.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to solve?",
          a: "They want to find out who took the falcon and eggs, and whether the birds can be recovered before it's too late.",
        },
        {
          q: "What clue changes the direction of the investigation?",
          a: "The kids find a distinctive feather near a suspect's property and realize the falcon is being kept nearby, hidden from wildlife officials.",
        },
        {
          q: "Who was behind the theft and why did they do it?",
          a: "A poacher was stealing the rare birds to sell them illegally. The falcon and eggs were valuable on the black market.",
        },
        {
          q: "How does the story end?",
          a: "The kids lead wildlife officials to the hidden birds in time. The falcon and eggs are safe, and the poacher is turned over to the authorities.",
        },
      ],
    },
    {
      id: "az-07",
      number: 7,
      title: "The Goose's Gold",
      color: "#558b2f",
      listenFor: "Why a goofy-sounding story about a goose might actually hide treasure",
      verified: false,
      questions: [
        {
          q: "What starts the mystery in this book?",
          a: "The kids hear a legend about buried gold connected to an old goose statue in their town. Then the statue goes missing, and so does any chance of following the clues.",
        },
        {
          q: "What problem are the kids trying to solve?",
          a: "They need to find the stolen goose statue and figure out whether the legend of buried gold is actually true.",
        },
        {
          q: "What clue or moment turns the case around?",
          a: "The kids discover that markings on the goose statue form a map, and the thief knew exactly what those markings meant before anyone else did.",
        },
        {
          q: "Who stole the statue and what were they after?",
          a: "Someone who had researched the legend knew the statue was a key to finding real hidden gold. They took it to follow the trail themselves.",
        },
        {
          q: "How does it all end?",
          a: "The kids recover the statue and solve the clues themselves. Whether the gold is found or not, the thief doesn't get away with the crime.",
        },
      ],
    },
    {
      id: "az-08",
      number: 8,
      title: "The Haunted Hotel",
      color: "#827717",
      listenFor: "Why strange noises in a hotel might not be ghosts at all",
      verified: false,
      questions: [
        {
          q: "What gets the story going at the start?",
          a: "The kids visit a grand old hotel that has a reputation for being haunted, and strange things start happening as soon as they arrive — noises, shadows, and unexplained events.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to figure out?",
          a: "They want to know whether the hotel really is haunted or whether someone is faking the ghostly activity and, if so, why.",
        },
        {
          q: "What moment or clue shifts the investigation?",
          a: "The kids find evidence that the haunting is being staged — someone is using secret passages and mechanical tricks to create the illusion of a ghost.",
        },
        {
          q: "Who was behind the haunting and what did they want?",
          a: "Someone was trying to drive away guests and push the hotel out of business so they could buy it cheaply or get something hidden inside.",
        },
        {
          q: "How does the story get resolved?",
          a: "The kids expose the fake haunting and the schemer is caught. The hotel's reputation is restored and the guests can rest in peace — literally.",
        },
      ],
    },
    {
      id: "az-09",
      number: 9,
      title: "The Invisible Island",
      color: "#f57f17",
      listenFor: "How an island that seems to appear and disappear hides a real secret",
      verified: false,
      questions: [
        {
          q: "What mystery begins at the start of this story?",
          a: "The kids hear about a small island that locals say sometimes disappears from view, and when they investigate, they find it really is hard to see — and someone seems to be living there in secret.",
        },
        {
          q: "What are the kids trying to find out?",
          a: "They want to know who is hiding on the island, why they don't want to be found, and whether anyone is in danger.",
        },
        {
          q: "What discovery changes the investigation?",
          a: "The kids find signs of a campsite and realize whoever is on the island is there by choice, not by accident — they've been hiding deliberately.",
        },
        {
          q: "Who was on the island and what was the real story?",
          a: "A person was hiding out on the island to avoid something — either trouble they'd caused or trouble that had found them. The kids uncover the full situation.",
        },
        {
          q: "How does everything get resolved?",
          a: "The truth comes out about why the person was hiding, and with the kids' help, the situation is handled safely and fairly.",
        },
      ],
    },
    {
      id: "az-10",
      number: 10,
      title: "The Jaguar's Jewel",
      color: "#e65100",
      listenFor: "How a stolen jewel leads back to a surprising hiding place",
      verified: false,
      questions: [
        {
          q: "What starts the mystery off?",
          a: "A priceless jewel shaped like a jaguar goes missing from a museum exhibit, and the kids happen to be there right when it disappears.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to solve?",
          a: "They need to figure out who took the jewel from the museum and where it was hidden before it could be smuggled away.",
        },
        {
          q: "What clue breaks the case open?",
          a: "The kids notice that one person who was near the exhibit had an unusual bag or container — something that could have hidden the jewel — and start following that lead.",
        },
        {
          q: "Who stole the jewel and how did they do it?",
          a: "An inside connection at the museum helped smuggle the jewel out, hiding it among ordinary objects to avoid detection.",
        },
        {
          q: "How does the story end?",
          a: "The jewel is recovered before it can leave the country, and the thief is caught thanks to the kids' sharp observation.",
        },
      ],
    },
    {
      id: "az-11",
      number: 11,
      title: "The Kidnapped King",
      color: "#bf360c",
      listenFor: "What makes the kids realize a visitor to their town might be in real danger",
      verified: false,
      questions: [
        {
          q: "What event sets off the mystery?",
          a: "A young prince from a small country comes to visit Green Lawn, and almost immediately strange things start happening around him, making the kids suspicious.",
        },
        {
          q: "What are the kids trying to figure out?",
          a: "They suspect someone is planning to kidnap the prince, and they're trying to identify who the threat is before it's too late.",
        },
        {
          q: "What clue or moment shifts the investigation?",
          a: "The kids notice that one of the people in the prince's entourage is acting strangely and doesn't seem to have the prince's best interests at heart.",
        },
        {
          q: "Who was behind the kidnapping plot and why?",
          a: "Someone in or close to the prince's own group was working against him — motivated by politics or money back in his home country.",
        },
        {
          q: "How does it all end?",
          a: "The kids intervene in time to protect the prince and expose the traitor. The prince returns home safely, and the plotters are handed over to authorities.",
        },
      ],
    },
    {
      id: "az-12",
      number: 12,
      title: "The Lucky Lottery",
      color: "#b71c1c",
      listenFor: "Why winning the lottery might actually cause more problems than it solves",
      verified: false,
      questions: [
        {
          q: "What starts the mystery at the beginning?",
          a: "Someone in Green Lawn wins the lottery, but instead of celebrating, they become frightened — and then the winning ticket goes missing.",
        },
        {
          q: "What problem are the kids trying to solve?",
          a: "They want to find the stolen lottery ticket and figure out who took it and why the winner was so scared after winning.",
        },
        {
          q: "What clue changes the course of the investigation?",
          a: "The kids discover that the winner had been threatened by someone who wanted a share of the money, which explains why they were too afraid to go public.",
        },
        {
          q: "Who stole the ticket and what was their plan?",
          a: "Someone close to the winner — or watching them — stole the ticket intending to claim the prize for themselves.",
        },
        {
          q: "How does the story get resolved?",
          a: "The ticket is recovered and the rightful winner gets their prize. The thief faces consequences for trying to steal what wasn't theirs.",
        },
      ],
    },
    {
      id: "az-13",
      number: 13,
      title: "The Missing Mummy",
      color: "#880e4f",
      listenFor: "How a mummy that walks out of a museum leads the kids on a wild chase",
      verified: false,
      questions: [
        {
          q: "What mystery begins at the start?",
          a: "A mummy disappears from a museum exhibit overnight, and since no alarms went off, it seems like someone with access took it — or the mummy walked out on its own, if you believe the legends.",
        },
        {
          q: "What are the kids trying to solve?",
          a: "They want to figure out who stole the mummy and whether the theft has anything to do with the ancient curse the exhibit talked about.",
        },
        {
          q: "What clue turns the investigation?",
          a: "The kids find evidence that the mummy was moved carefully and professionally, not grabbed in a panic — this was a planned theft, not a random one.",
        },
        {
          q: "Who took the mummy and what did they want?",
          a: "An expert — someone who knew the mummy's value — stole it to sell it to a private collector who didn't want anyone to know they had it.",
        },
        {
          q: "How is the case wrapped up?",
          a: "The kids track down where the mummy was taken and tip off the authorities. The mummy is returned to the museum and the thief is caught.",
        },
      ],
    },
    {
      id: "az-14",
      number: 14,
      title: "The Ninth Nugget",
      color: "#4a148c",
      listenFor: "What makes a gold nugget worth more than gold to the wrong person",
      verified: false,
      questions: [
        {
          q: "What gets the mystery started?",
          a: "During a trip to a gold mining area out west, the kids learn about nine legendary gold nuggets — and one of them goes missing right in front of everyone.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to find out?",
          a: "They need to find the missing ninth nugget and figure out who took it and how they managed to steal it without being seen.",
        },
        {
          q: "What discovery changes the direction of the search?",
          a: "The kids realize the nugget was swapped with a fake, meaning the real theft happened earlier — and someone had been planning this all along.",
        },
        {
          q: "Who took the nugget and how did they pull it off?",
          a: "Someone with access to the collection had quietly replaced the real nugget with a convincing replica before the kids even arrived.",
        },
        {
          q: "How does everything end?",
          a: "The real nugget is tracked down and recovered, and the person behind the swap is exposed and turned in to the authorities.",
        },
      ],
    },
    {
      id: "az-15",
      number: 15,
      title: "The Orange Outlaw",
      color: "#311b92",
      listenFor: "How a thief who only steals orange things leaves a trail the kids can follow",
      verified: false,
      questions: [
        {
          q: "What starts the mystery in this book?",
          a: "A series of thefts hits Green Lawn, and the only thing the stolen items have in common is that they're all orange. Someone very specific is targeting orange things.",
        },
        {
          q: "What are the kids trying to figure out?",
          a: "They want to catch the orange-obsessed thief and understand why anyone would steal things based on color alone.",
        },
        {
          q: "What clue helps narrow down who the outlaw might be?",
          a: "The kids figure out there's a pattern to where the thefts happen, pointing to a particular neighborhood or person with a strange fixation.",
        },
        {
          q: "Who was behind the thefts and what was going on?",
          a: "The thief had a personal reason — maybe a obsession, a dare, or something odder — that connected all the orange items together in their mind.",
        },
        {
          q: "How does the mystery get resolved?",
          a: "The kids catch the outlaw and the stolen items are returned to their owners. The reason behind the strange thefts finally makes sense once it's all explained.",
        },
      ],
    },
    {
      id: "az-16",
      number: 16,
      title: "The Panda Puzzle",
      color: "#1a237e",
      listenFor: "How a panda bear at the zoo becomes the center of a crime",
      verified: false,
      questions: [
        {
          q: "What kicks off the mystery at the start?",
          a: "A beloved giant panda at a nearby zoo goes missing, and the zoo staff can't explain how it happened or who could have gotten past the security.",
        },
        {
          q: "What are the kids working to find out?",
          a: "They want to find the panda and figure out how someone managed to steal such a large and recognizable animal.",
        },
        {
          q: "What clue shifts the investigation?",
          a: "The kids discover that the panda's disappearance was connected to a smuggling operation — someone wanted to sell the animal overseas.",
        },
        {
          q: "Who was behind the theft and how did they do it?",
          a: "People with inside knowledge of the zoo's layout helped orchestrate the theft, using special transport to move the panda without being noticed.",
        },
        {
          q: "How does it all end?",
          a: "The panda is found before it can be transported out of the country, and the smugglers are arrested. The panda goes back to a very relieved zoo.",
        },
      ],
    },
    {
      id: "az-17",
      number: 17,
      title: "The Quicksand Question",
      color: "#0d47a1",
      listenFor: "Why something as dangerous as quicksand might be hiding a secret on purpose",
      verified: false,
      questions: [
        {
          q: "What mystery begins at the start of this story?",
          a: "The kids discover a patch of quicksand near a local landmark, and they soon realize someone seems to be using it — or the fear of it — to keep people away from a certain area.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to solve?",
          a: "They want to find out what's being hidden near the quicksand and why someone would go to such dangerous lengths to keep people out.",
        },
        {
          q: "What clue changes what they think is happening?",
          a: "The kids find signs that someone has been safely crossing the dangerous area regularly, which means they know the safe path — and they're hiding something beyond it.",
        },
        {
          q: "Who was using the quicksand as a barrier and what were they protecting?",
          a: "Someone was using the natural hazard to guard a hiding spot — whether stolen goods, a secret camp, or something else they didn't want found.",
        },
        {
          q: "How does the case get solved?",
          a: "The kids find the safe path, uncover what was hidden, and make sure the right people know. The dangerous area is eventually marked and made safer.",
        },
      ],
    },
    {
      id: "az-18",
      number: 18,
      title: "The Runaway Racehorse",
      color: "#006064",
      listenFor: "How a missing racehorse leads to a trail of clues at the racetrack",
      verified: false,
      questions: [
        {
          q: "What starts the mystery?",
          a: "A prized racehorse goes missing from its stable the night before a big race, and the horse's owner is frantic. The kids are drawn into the investigation.",
        },
        {
          q: "What are the kids trying to figure out?",
          a: "They want to find the horse and understand whether it ran away on its own or was taken — and if taken, who would want to prevent it from racing.",
        },
        {
          q: "What clue changes the direction of the search?",
          a: "Evidence near the stable shows the horse didn't escape on its own — a gate was deliberately left open and there are signs of someone leading the horse away.",
        },
        {
          q: "Who took the horse and why?",
          a: "Someone with something to gain by keeping the horse out of the race — maybe a rival owner or a gambler — arranged for the horse to disappear before the event.",
        },
        {
          q: "How does it all end?",
          a: "The horse is found safe and returned in time, or the mystery is solved even if the race has to go on without it. The culprit is caught and faces the consequences.",
        },
      ],
    },
    {
      id: "az-19",
      number: 19,
      title: "The School Skeleton",
      color: "#004d40",
      listenFor: "Why a skeleton in the school building turns out to be more than a Halloween decoration",
      verified: false,
      questions: [
        {
          q: "What gets the mystery started?",
          a: "A real human skeleton is found hidden inside the walls of the kids' school during renovations, and suddenly a creepy discovery becomes a full-blown mystery.",
        },
        {
          q: "What are the kids trying to find out?",
          a: "They want to know who the skeleton belonged to, how it ended up inside the school walls, and whether there's a crime connected to it.",
        },
        {
          q: "What discovery changes what they think happened?",
          a: "Historical records suggest the skeleton may be connected to the original construction of the school, and an old secret about someone who disappeared long ago starts to surface.",
        },
        {
          q: "What was the truth behind the skeleton?",
          a: "The skeleton belonged to someone who went missing decades earlier, and the mystery of their disappearance had never been solved until now.",
        },
        {
          q: "How does the story resolve?",
          a: "The identity of the skeleton is pieced together and the old mystery finally gets an answer. The school community gets closure on a long-forgotten chapter of history.",
        },
      ],
    },
    {
      id: "az-20",
      number: 20,
      title: "The Talking T. Rex",
      color: "#1b5e20",
      listenFor: "How a dinosaur that seems to talk turns out to be hiding someone's secret",
      verified: false,
      questions: [
        {
          q: "What mystery begins at the start of this book?",
          a: "The kids visit a natural history museum and hear what sounds like a T. rex skeleton talking — and then a valuable fossil goes missing from the exhibit.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to solve?",
          a: "They want to figure out who stole the fossil and what the mysterious voice coming from the dinosaur exhibit was all about.",
        },
        {
          q: "What clue turns the case around?",
          a: "The kids discover that the 'voice' was being broadcast through a hidden speaker, which means someone had set it up in advance — probably to cause a distraction during the theft.",
        },
        {
          q: "Who stole the fossil and how did they use the T. rex trick?",
          a: "A thief used the spooky talking dinosaur to draw crowds away from the real theft happening nearby, making it easier to grab the valuable specimen.",
        },
        {
          q: "How is the mystery wrapped up?",
          a: "The fossil is recovered and the trick speaker is found. The thief is caught and the museum's collection is restored.",
        },
      ],
    },
    {
      id: "az-21",
      number: 21,
      title: "The Unwilling Umpire",
      color: "#33691e",
      listenFor: "How trouble at a baseball game turns into a real mystery off the field",
      verified: false,
      questions: [
        {
          q: "What starts the mystery in this story?",
          a: "During a local baseball game, the umpire makes strange calls and then suddenly disappears, leaving the game and everyone around it confused and suspicious.",
        },
        {
          q: "What are the kids trying to figure out?",
          a: "They want to know why the umpire was acting so oddly and whether something was threatening or forcing him to behave that way.",
        },
        {
          q: "What clue helps break the case open?",
          a: "The kids find out the umpire was being pressured by someone who had something to hold over him — he wasn't crooked by choice, he was being coerced.",
        },
        {
          q: "Who was behind the pressure and what did they want?",
          a: "Someone was fixing the game by threatening the umpire, either to win a bet or to make sure a particular team lost or won for their own benefit.",
        },
        {
          q: "How does the story end?",
          a: "The umpire is freed from the threat and able to tell the truth. The people manipulating him are exposed and the game's integrity is restored.",
        },
      ],
    },
    {
      id: "az-22",
      number: 22,
      title: "The Vampire's Vacation",
      color: "#827717",
      listenFor: "Whether the spooky stranger in town is really a vampire or just acting like one",
      verified: false,
      questions: [
        {
          q: "What starts the mystery off?",
          a: "A mysterious man in a long black cape checks into a local inn and starts behaving in very vampire-like ways — sleeping all day, appearing only at night, and avoiding sunlight.",
        },
        {
          q: "What are the kids trying to figure out?",
          a: "They want to know whether this man is actually a vampire — or what he's really hiding — and why he's behaving so strangely.",
        },
        {
          q: "What clue shifts what they think is going on?",
          a: "The kids discover that valuable things start going missing around town right after the 'vampire' arrives, suggesting his act might be a cover for theft.",
        },
        {
          q: "Who was the mysterious stranger and what was he really doing?",
          a: "He was using the vampire persona as a disguise to scare off curious people while he committed thefts. The cloak and drama were all part of a con.",
        },
        {
          q: "How does the mystery get resolved?",
          a: "The kids see through the act, expose the thief, and the stolen items are returned. The 'vampire' turns out to be very human — and very guilty.",
        },
      ],
    },
    {
      id: "az-23",
      number: 23,
      title: "The White Wolf",
      color: "#e65100",
      listenFor: "How a rare white wolf spotted in the woods leads to something unexpected",
      verified: false,
      questions: [
        {
          q: "What kicks off the story?",
          a: "Rumors spread about a white wolf seen in the woods near town, and then a local wildlife sanctuary reports that their rare white wolf has gone missing.",
        },
        {
          q: "What are the kids trying to solve?",
          a: "They want to find the missing wolf and figure out whether it escaped on its own or was taken — and if taken, why.",
        },
        {
          q: "What clue changes the direction of the investigation?",
          a: "The kids find evidence that the wolf's enclosure was opened from the outside, not broken from the inside, which means someone deliberately let the wolf out.",
        },
        {
          q: "Who released the wolf and what was the reason?",
          a: "Someone wanted to capture the rare white wolf for themselves — either to sell it or keep it — and releasing it was the first step in their plan.",
        },
        {
          q: "How does the story end?",
          a: "The wolf is tracked and safely returned to the sanctuary, and the person who let it out is caught before they can complete their scheme.",
        },
      ],
    },
    {
      id: "az-24",
      number: 24,
      title: "The X'ed-Out X-Ray",
      color: "#bf360c",
      listenFor: "How an x-ray from a doctor's office hides more than bones",
      verified: false,
      questions: [
        {
          q: "What mystery starts things off?",
          a: "A mix-up at a medical office leads to the kids getting hold of an x-ray that seems to show something hidden inside an ordinary object — something that wasn't a body part.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to figure out?",
          a: "They want to understand what the x-ray really shows, whose it is, and why someone seems very determined to get it back.",
        },
        {
          q: "What clue changes what they think the x-ray means?",
          a: "The kids realize the x-ray wasn't taken at a regular doctor's visit — it was used to hide information or smuggle something disguised as a medical record.",
        },
        {
          q: "What was hidden in or on the x-ray and who wanted it?",
          a: "The x-ray contained a secret — coded information or an image of hidden valuables — that someone was using to pass along without being caught.",
        },
        {
          q: "How does it all get resolved?",
          a: "The kids decode the x-ray's secret and get the right information to the right people. The person who was using medical records as cover is found out.",
        },
      ],
    },
    {
      id: "az-25",
      number: 25,
      title: "The Yellow Yacht",
      color: "#0277bd",
      listenFor: "How a bright yellow boat floating in the harbor hides a dark secret",
      verified: false,
      questions: [
        {
          q: "What gets the mystery going?",
          a: "A flashy yellow yacht shows up in the harbor, and when the kids get curious and investigate, they find something suspicious going on aboard.",
        },
        {
          q: "What are the kids trying to find out?",
          a: "They want to know who owns the yacht, what's being kept on it, and why the people aboard seem to want no one coming near.",
        },
        {
          q: "What clue turns the investigation in a new direction?",
          a: "The kids spot unusual activity on the yacht at night — loading and unloading in the dark — which suggests smuggling or something equally secretive.",
        },
        {
          q: "What was really going on aboard the yellow yacht?",
          a: "The yacht was being used to move stolen goods or contraband along the coast, using the bright color as an unlikely disguise — hiding in plain sight.",
        },
        {
          q: "How does the mystery get wrapped up?",
          a: "The kids alert the coast guard or police, and the yacht is stopped before it can leave port. The people aboard face charges for their crimes.",
        },
      ],
    },
    {
      id: "az-26",
      number: 26,
      title: "The Zombie Zone",
      color: "#4527a0",
      listenFor: "Why a spooky graveyard legend might be hiding something very real and very sneaky",
      verified: false,
      questions: [
        {
          q: "What starts the mystery in the final book?",
          a: "Strange zombie-like figures are spotted lurching around an old cemetery at night, and the legend of a zombie zone spreads through town — but the kids think something real is going on.",
        },
        {
          q: "What are Dink, Josh, and Ruth Rose trying to figure out?",
          a: "They want to know whether the 'zombies' are real, a prank, or a cover for something criminal happening in the graveyard after dark.",
        },
        {
          q: "What clue shifts the investigation?",
          a: "The kids find footprints and equipment near the cemetery that have nothing to do with the supernatural — someone is using the zombie story to keep people away from a real operation.",
        },
        {
          q: "Who was behind the zombie sightings and what were they really doing?",
          a: "People in disguise were using the creepy legend to scare off anyone who might wander into the cemetery and catch them in the act of something illegal.",
        },
        {
          q: "How does the series end with this final mystery?",
          a: "The kids expose the fake zombies, the real crime is uncovered, and the culprits are caught. Green Lawn's graveyard goes back to being just a normal — if still a little spooky — cemetery.",
        },
      ],
    },
  ],
};

export default aToZMysteries;
