var wordsList = [
  "abandon", "ability", "able", "abortion", "about", "above", "abroad", "absence", "absolute", "absolutely", "absorb", "abuse", "academic", "accept", "access", "accident",
  "accompany", "accomplish", "according", "account", "accurate", "accuse", "achieve", "achievement", "acid", "acknowledge", "acquire", "across", "act", "action", "active", "activity", "actor", "actress", "actual", "actually", "adjust", "adjustment", "administration", "administrator", "admire",
  "admission", "admit", "adolescent", "adopt", "bedroom", "beer", "before", "begin", "beginning", "behavior", "behind", "being", "belief", "believe", "bell", "belong", "below", "belt", "bench", "bend", "beneath", "benefit", "beside", "besides", "best", "chairman", "challenge", "chamber", "champion", "championship", "change", "changing", "channel", "chapter", "character", "characteristic", "characterize", "charge", "charity", "chart", "chase", "cheap", "check", "cheek", "cheese",
  "chef", "chemical", "chest", "chicken", "chief", "child", "childhood", "definition", "degree", "delay", "deliver", "delivery", "demand", "democracy", "democratic", "demonstrate", "demonstration", "deny", "department", "depend", "dependent", "depending", "depict", "depression", "depth", "deputy", "derive", "describe", "description", "desert", "deserve", "design", "designer", "desire", "desk", "desperate", "despite", "destroy", "destruction", "detail", "detailed", "detect", "determine", "development",
  "enhance", "enjoy", "enormous", "enough", "ensure", "enter", "enterprise", "entertainment", "entire", "entirely", "entrance", "entry", "environment", "examine", "example", "exceed", "excellent", "except", "exception", "exchange", "force", "foreign", "forest", "forever", "forget", "form", "formal", "formation", "former", "formula", "forth", "fortune", "forward", "found", "foundation", "founder", "golden", "golf", "good", "government", "governor",
  "grab", "grade", "gradually", "graduate", "grain", "grand", "grandfather", "grandmother", "historian", "historic", "historical", "history", "homeless", "honest", "honey", "honor", "hope", "horizon", "horror", "horse", "hospital", "incident", "include", "including", "income",
  "incorporate", "increase", "increased", "increasing", "increasingly", "incredible", "indeed", "independence", "independent", "index", "Indian", "indicate", "indication", "individual", "industrial", "industry", "mean", "meaning", "meanwhile", "measure", "measurement", "meat", "mechanism",
  "media", "medical", "medication", "medicine", "medium", "meet", "meeting", "member", "membership", "memory", "mental", "mention", "object", "objective", "obligation", "observation", "observe", "obtain", "obvious", "obviously", "occasion", "occasionally", "occupation", "occupy", "occur", "popular",
  "population", "porch", "port", "portion", "portrait", "portray", "pose", "position", "positive", "possess", "possibility", "remaining", "remarkable", "remember", "remind", "remote", "remove", "repeat", "repeatedly", "replace", "report", "reporter", "represent", "representation", "representative", "Republican", "reputation", "request", "software", "soil", "solar",
  "soldier", "solid", "solution", "solve", "some", "somebody", "somehow", "someone", "something", "sometimes", "tear", "teaspoon", "technical", "technique", "technology", "teen", "teenager", "telephone", "telescope", "television", "ultimate", "ultimately", "unable", "uncle", "under", "undergo", "understand", "variation", "variety", "various", "vary", "vast", "vegetable",
  "vehicle", "venture", "withdraw", "within", "without", "witness", "woman", "wonder", "wooden", "word", "work", "worker", "working", "works", "workshop", "world", "worried", "worry", "worth", "would", "wound", "wrap", "write", "writer", "writing", "yellow", "yes", "yesterday", "yet", "yield", "you", "young", "your", "yours", "yourself", "youth", "zone",
]








var motiveMsg = [
  "\“ The man who does not read books has no advantage over the one who cannot read them \”",
  "\“ Education is the passport to the future, for tomorrow belongs to those who prepare for it today \”",
  "\“ Teachers can open the door, but you must enter it yourself \”",
  "\“ The beautiful thing about learning is that no one can take it away from you \”",
  "\“ Education is the most powerful weapon you can use to change the world \“",
  "\“ The mind is not a vessel to be filled but a fire to be ignited \“",
  "\“ Do not let what you cannot do interfere with what you can do \“",
  "\“ A person who never made a mistake never tried anything new \“",
  "\“ Never let the fear of striking out stop you from playing the game \“",
  "\“ Procrastination makes easy things hard and hard things harder \“",
  "\“ You don’t have to be great to start, but you have to start to be great \“",
  "\“ The expert in anything was once a beginner \“",
  "\“ The way to get started is to quit talking and begin doing \“",
  "\“ I think it’s possible for ordinary people to choose to be extraordinary \“",
  "\“ I find that the harder I work, the more luck I seem to have \“",
  "\“ Genius is 10% inspiration, 90% perspiration \“",
  "\“ Motivation is what gets you started. Habit is what keeps you going \“",
  "\“ Success is the sum of small efforts, repeated \“",
  "\“ The best way to predict your future is to create it \“",
  "\“ The future belongs to those who believe in the beauty of their dreams \“",
  "\“ You are braver than you believe, stronger than you seem and smarter than you think \“",
  "\“ Learn from yesterday. Live for today. Hope for tomorrow \“",
  "\“ The more that you read, the more things you will know, the more that you learn, the more places you’ll go \“",
  "Really ?",
  "Lets see !",
  "Can you do this ?",
  "What do you think of it ?",
  "You can do it !",
  "Try this now..",
]










var wordHint = [
  {
    word: "Astronomer",
    img: "assets/hintImages/astronomer.jpeg"
  },
  {
    word: "Black Hole",
    img: "assets/hintImages/blackhole.jpeg"
  },
  {
    word: "Blue Bell",
    img: "assets/hintImages/bluebell.jpeg"
  },
  {
    word: "Colosseum",
    img: "assets/hintImages/colosseum.jpeg"
  },
  {
    word: "Environment",
    img: "assets/hintImages/environment.jpeg"
  },
  {
    word: "Hubble",
    img: "assets/hintImages/hubble.jpeg"
  },
  {
    word: "International Space Station",
    img: "assets/hintImages/iis.jpeg"
  },
  {
    word: "India Gate",
    img: "assets/hintImages/indiagate.jpeg"
  },
  {
    word: "Lavender",
    img: "assets/hintImages/lavender.jpeg"
  },
  {
    word: "Milky Way",
    img: "assets/hintImages/milkyway.jpeg"
  },
  {
    word: "Mount Everest",
    img: "assets/hintImages/mounteverest.jpeg"
  },
  {
    word: "Nebula",
    img: "assets/hintImages/nebula.jpeg"
  },
  {
    word: "Nigara Falls",
    img: "assets/hintImages/niagarafalls.jpeg"
  },
  {
    word: "Pollution",
    img: "assets/hintImages/pollution.jpeg"
  },
  {
    word: "Red Fort",
    img: "assets/hintImages/redfort.jpeg"
  },
  {
    word: "Red Rose",
    img: "assets/hintImages/redrose.jpeg"
  },
  {
    word: "Satellite",
    img: "assets/hintImages/satellite.jpeg"
  }, {
    word: "Solar System",
    img: "assets/hintImages/solarsystem.jpeg"
  },
  {
    word: "Space Shuttle",
    img: "assets/hintImages/spaceshuttle.jpeg"
  }, {
    word: "Sunflower",
    img: "assets/hintImages/sunflower.jpeg"
  },
  {
    word: "Supernova",
    img: "assets/hintImages/supernova.jpeg"
  },
  {
    word: "Taj Mahal",
    img: "assets/hintImages/tajmahal.jpeg"
  },
  {
    word: "White Dwarf Star",
    img: "assets/hintImages/whitedwarfstar.jpeg"
  }, {
    word: "White Rose",
    img: "assets/hintImages/whiterose.jpeg"
  }
]















var bgImages = [
  "url('./assets/images/bgimg1.jpeg')",
  "url('./assets/images/bgimg2.jpeg')",
  "url('./assets/images/bgimg3.jpeg')",
  "url('./assets/images/bgimg4.jpeg')",
  "url('./assets/images/bgimg5.jpeg')",
  "url('./assets/images/bgimg6.jpeg')",
  "url('./assets/images/bgimg7.jpeg')",
]
