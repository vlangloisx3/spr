PennController.DebugOff()

var shuffleSequence = seq("intro", sepWith("sep", seq("practice")), "transfer", sepWith("sep", seq(anyOf("filler", "critical"))), "post1", "post2", "exit");
var practiceItemTypes = ["practice"];
var completionMessage = "Thank you for your participation! Don't forget to paste your unique identifier code into Mechanical Turk."


var defaults = [
    "Separator2", {
        normalTransfer: 700,
        errorTransfer: 5000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Incorrect. Please wait for the next sentence.",
        hideProgressBar: true
    },
    "DashedSentence", {
        mode: "self-paced reading",
        hideProgressBar: true
    },
    "Question", {
        randomOrder: false,
        hideProgressBar: true
    },
    "Form2", {
        hideProgressBar: true,
        continueOnReturn: true
    },
    "Message", {
        hideProgressBar: true
    },
    "completionMessage", {
        hideProgressBar: true
    }
    
];

var items = [
    
    ["sep", "Separator2", { }],
   
    
    // Intro
    
    ["intro", "Form2", {consentRequired: true, html: {include: "consent.html" }} ],
    ["intro", "Form2", {consentRequired: true, html: {include: "overview.html" }} ],
    ["intro", "Form2", {
        html: {include: "agelanguage.html"},
        validators: {
            age: function (s) { if (s.match(/[a-zA-Z]+/)) return "Please enter an integer for \u2018age\u2019";
                               if (s>=18) return true; else return "You must be 18 years or older to participate";}
        }
    } ],
    ["intro", "Form2", {consentRequired: true, html: {include: "background.html" }} ],
    ["intro", "Form2", {consentRequired: true, html: {include: "otherlang.html" }} ],
    ["intro", "Form2", {consentRequired: true, html: {include: "intro.html" }} ],
    ["intro", "Form2", {consentRequired: true, html: {include: "intro2.html" }} ],
    ["intro", "Form2", {consentRequired: true, html: {include: "intro3.html" }} ],
    ["intro", "Form2", {consentRequired: true, html: {include: "practicetransfer.html" }} ],
    
    // Practice
    
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."},
     "Question", {hasCorrect: "Yes", q: "Is this a practice question?", as: ["Yes","No"]}],
    
    ["practice", "DashedSentence", {s: "The green frog jumped into the river."},
     "Question", {hasCorrect: "Green", q: "What color was the frog?", as: ["Red","Green"]}],
    
    ["practice", "DashedSentence", {s: "The restaurant owners delivered food to the local community every Tuesday."},
     "Question", {hasCorrect: "Food", q: "What was delivered to the community?", as: ["Toys","Food"]}],
    
    // Transfer
    
    ["transfer", "Form2", {consentRequired: true, html: {include: "transfer.html" }} ],
    
    
    // Items
    
    ["filler", "DashedSentence", {s:"The storekeepers were afraid that riots would ensue after the home team won the tournament."},
     "Question", {hasCorrect: "Riots", q: "What were the storekeepers afraid of?", as: ["Riots", "Infection"]}],
    
    ["filler", "DashedSentence", {s:"The chess match lasted for hours and finally ended in a stale mate."},
     "Question", {hasCorrect: "No", q:"Did anyone win the chess match?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The parents completely disagreed with the new regulations."},
     "Question", {hasCorrect: "No", q:"Did the parents agree with the new regulations?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The unpopular anthropology professor was finally going to retire."},
     "Question", {hasCorrect: "Anthropology", q:"What subject did the professor teach?", as: ["Psychology", "Anthropology"]}],
   
    ["critical", "DashedSentence", {s:"The fire needs stoked to keep it from burning out."},
     "Question", {hasCorrect: "A fire", q:"What is being kept lit?", as: ["A fire", "A lightbulb"]}],
    
    ["filler", "DashedSentence", {s:"The roofer got a terrible sunburn from being outside all day."},
     "Question", {hasCorrect: "The roofer", q:"Who got a terrible sunburn?", as: ["The beachgoer", "The roofer"]}],
    
    ["filler", "DashedSentence", {s:"The shoppers love to spend all day at the mall on the weekends."},
     "Question", {hasCorrect: "The mall", q:"Where do the shoppers spend their day on the weekends?", as: ["The mall", "The movie theater"]}],
    
    ["filler", "DashedSentence", {s:"The coffee shop was a popular hangout for political activists."},
     "Question", {hasCorrect: "The coffee shop", q:"Where do the political activists hang out?", as: ["The club", "The coffee shop"]}],
    
    ["filler", "DashedSentence", {s:"The package arrived too late to be of any use."},
     "Question", {hasCorrect: "The package", q:"What arrived too late?", as: ["The paycheck", "The package"]}], 
    
    ["critical", "DashedSentence", {s:"The large pumpkin needs carved before it can be put on display."},
     "Question", {hasCorrect: "A pumpkin", q:"What will be displayed?", as: ["A potato", "A pumpkin"]}],
    
    ["filler", "DashedSentence", {s:"The girls on the basketball team tried to practice all summer."},
     "Question", {hasCorrect: "The basketball team", q:"What team were the girls on?", as: ["The soccer team", "The basketball team"]}],
    
    ["filler", "DashedSentence", {s:"The meal needs cooked vegetables so the guests will be happy."},
     "Question", {hasCorrect: "Vegetables", q:"What will make the guests happy?", as: ["Fruit", "Vegetables"]}],
    
    ["filler", "DashedSentence", {s:"The cyclist wanted to train throughout the winter so he moved to Hawaii."},
     "Question", {hasCorrect: "Hawaii", q:"Where did the cyclist move to?", as: ["Hawaii", "Jamaica"]}],
    
    ["critical", "DashedSentence", {s:"The lock needs checked so we can be sure the apartment is secure."},
     "Question", {hasCorrect: "The apartment", q:"What needs to be secured?", as: ["The apartment", "The car"]}],
    
    ["filler", "DashedSentence", {s:"The new student disappeared after only three days of school."},
     "Question", {hasCorrect: "Three days", q:"How long did the student stay for?", as: ["Three days", "A month"]}],
    
    ["filler", "DashedSentence", {s:"The new experiment was the source of a great deal of excitement in the lab."},
     "Question", {hasCorrect: "The new experiment", q:"What was the source of the excitement?", as: ["A new lab member", "The new experiment"]}],
    
    ["filler", "DashedSentence", {s:"The wedding had to be rescheduled because of a hurricane."},
     "Question", {hasCorrect: "A hurricane", q:"What caused the wedding to be rescheduled?", as: ["A hurricane", "A snowstorm"]}],
    
    ["critical", "DashedSentence", {s:"The computer program needs debugged before it can be handed in."},
     "Question", {hasCorrect: "A computer program", q:"What needs to be turned in?", as: ["A computer program", "An essay"]}],
    
    ["filler", "DashedSentence", {s:"The children in the park could be heard three blocks away."},
     "Question", {hasCorrect: "Children", q:"Who was playing in the park?", as: ["Children", "Teenagers"]}],
    
    ["filler", "DashedSentence", {s:"The pilots flew over the city where they had just had a wonderful weekend."},
     "Question", {hasCorrect: "Over the weekend", q:"When did the pilots visit the city?", as: ["On Tuesday", "Over the weekend"]}],
    
    ["critical", "DashedSentence", {s:"The television needs repaired before the series premiere airs."},
     "Question", {hasCorrect: "Series premiere", q:"What will be aired later?", as: ["Series premiere", "Series finale"]}],
    
    ["filler", "DashedSentence", {s:"The runners were in much better shape in the fall than in the winter."},
     "Question", {hasCorrect: "In the fall", q:"When were the runners in shape?", as: ["In the fall", "In the summer"]}],
    
    ["filler", "DashedSentence", {s:"All the undergraduates in the class had trouble keeping up."},
     "Question", {hasCorrect: "Keeping up with the class material", q:"What did the undergraduates struggle with?", 
                  as: ["Keeping up with the class material", "Sports"]}],
    
    ["filler", "DashedSentence", {s:"The draft needs approved signatures for it to pass the committee."},
     "Question", {hasCorrect: "A committee", q:"Who passes the draft?", as: ["A committee", "A judge"]}],
    
    ["filler", "DashedSentence", {s:"The textbooks were too expensive for most of the students."},
     "Question", {hasCorrect: "Textbooks", q:"What was too expensive for students?", as: ["Textbooks", "Netflix"]}],
    
    ["critical", "DashedSentence", {s:"The shirt needs ironed so the actor can wear it tonight."},
     "Question", {hasCorrect: "A shirt", q:"What will the actor be wearing tonight?", as: ["Green shoes", "A shirt"]}],
    
    ["filler", "DashedSentence", {s:"The lawnmower did not always function properly when the grass was wet."},
     "Question", {hasCorrect: "No", q:"Did the lawnmower always function properly?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The term papers from the previous semester were beginning to accumulate on the teacher’s desk."},
     "Question", {hasCorrect: "The previous semester", q:"What semester are the papers from?", as: ["The current semester", "The previous semester"]}],
    
    ["critical", "DashedSentence", {s:"The green light bulb needs changed since it just burned out."},
     "Question", {hasCorrect: "Green", q:"What color is the light bulb?", as: ["Green", "Yellow"]}],
    
    ["filler", "DashedSentence", {s:"The teachers had to move their classes online due to a pandemic."},
     "Question", {hasCorrect: "A pandemic", q:"What caused the classes to be moved online?", as: ["A snowstorm", "A pandemic"]}],
    
    ["filler", "DashedSentence", {s:"All the guitarists learned to play when they were teenagers."},
     "Question", {hasCorrect: "As teenagers", q:"When did the guitarists learn to play guitar?", as: ["As adults", "As teenagers"]}],
    
    ["critical", "DashedSentence", {s:"The blank CD needs burned so it can be given to the DJ."},
     "Question", {hasCorrect: "A DJ", q:"Who is receiving the CD?", as: ["A mechanic", "A DJ"]}],
    
    ["filler", "DashedSentence", {s:"The candles on the birthday cake were blown out in seconds."},
     "Question", {hasCorrect: "Candles", q:"What was on the cake?", as: ["Flowers", "Candles"]}],
    
    ["filler", "DashedSentence", {s:"The apple pie needs baked walnuts sprinkled on top of its crust."},
     "Question", {hasCorrect: "Apple", q:"What flavor is the pie?", as: ["Strawberry", "Apple"]}],
    
    ["filler", "DashedSentence", {s:"The real estate agent blundered when he revealed the house's plumbing problems."},
     "Question", {hasCorrect: "Plumbing problems", q:"What kind of problems did the house have?", as: ["Plumbing problems", "Mold"]}],
    
    ["filler", "DashedSentence", {s:"The indoor plants dried out due to lack of proper watering."},
     "Question", {hasCorrect: "The plants", q:"What dried out?", as: ["The towel", "The plants"]}],
    
    ["critical", "DashedSentence", {s:"The piano needs tuned so the musicians can play."},
     "Question", {hasCorrect: "Piano", q:"What instrument do the musicians play?", as: ["Trumpet", "Piano"]}],
    
    ["filler", "DashedSentence", {s:"The leader of the gambling ring was always mistrustful of his bodyguards."},
     "Question", {hasCorrect: "A gambling ring", q:"What was the leader in charge of?", as: ["A gambling ring", "A circus"]}],
    
    ["filler", "DashedSentence", {s:"Each of the divers had a strict regimen so that they would be prepared for the swim meet."},
     "Question", {hasCorrect: "A swim meet", q:"What were the divers preparing for?", as: ["A break", "A swim meet"]}],
    
    ["critical", "DashedSentence", {s:"The phone needs charged since its battery does not last long."},
     "Question", {hasCorrect: "Phone battery", q:"What does not last long?", as: ["Phone battery", "Laptop"]}],
    
    ["filler", "DashedSentence", {s:"The school principal had to work constantly all summer dealing with paperwork."},
     "Question", {hasCorrect: "Paperwork", q:"What did the principal have to deal with?", as: ["Paperwork", "Students"]}],
    
    ["filler", "DashedSentence", {s:"The library was open to all members of the community since it was supported by tax dollars."},
     "Question", {hasCorrect: "The library", q:"What was open to all members of the community?", as: ["The gym", "The library"]}],
    
    ["filler", "DashedSentence", {s:"The students went on a trip to Paris one summer to improve their language skills."},
     "Question", {hasCorrect: "Paris", q:"Where did the students go on a trip?", as: ["Australia", "Paris"]}],
    
    ["critical", "DashedSentence", {s:"The laundry needs rinsed before it can be put in the dryer."},
     "Question", {hasCorrect: "Laundry", q:"What will be put in the dryer?", as: ["Dishes", "Laundry"]}],
    
    ["filler", "DashedSentence", {s:"The street lamps usually came on automatically just before dark."},
     "Question", {hasCorrect: "Before dark", q:"When did the street lamps turn on?", as: ["Before dark", "At sunrise"]}],
    
    ["filler", "DashedSentence", {s:"The foreign ambassadors arrived to the meeting surrounded by security guards."},
     "Question", {hasCorrect: "Security guards", q:"Who surrounded the ambassadors?", as: ["Secret agents", "Security guards"]}],
    
    ["critical", "DashedSentence", {s:"The term paper needs revised before the due date tomorrow."},
     "Question", {hasCorrect: "Tomorrow", q:"When is the due date for the paper?", as: ["Tomorrow", "In two weeks"]}],
    
    ["filler", "DashedSentence", {s:"The sunburned boys who were fed the hot dogs got a stomach ache."},
     "Question", {hasCorrect: "Hot dogs", q:"What did the boys eat?", as: ["Hot dogs", "Burgers"]}],
    
    ["filler", "DashedSentence", {s:"The legal file needs completed documents before it can be closed."},
     "Question", {hasCorrect: "No", q:"Has the legal file been closed yet?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The university's math courses were among the nation's most rigorous."},
     "Question", {hasCorrect: "Math", q:"What courses were among the nation's most rigorous?", as: ["Math", "English"]}],
    
    ["critical", "DashedSentence", {s:"The room needs lighted so the students can read their books."},
     "Question", {hasCorrect: "Books", q:"What will the students read?", as: ["Magazines", "Books"]}],
    
    ["filler", "DashedSentence", {s:"The people downtown are frustrated by the lack of available parking."},
     "Question", {hasCorrect: "Downtown", q:"Where was there no parking?", as: ["In the suburbs", "Downtown"]}],
    
    ["filler", "DashedSentence", {s:"The company's health plan did not cover even the most basic health services."},
     "Question", {hasCorrect: "No", q:"Did the company's health plan have basic coverage?", as: ["Yes", "No"]}],
    
    ["critical", "DashedSentence", {s:"The patio needs renovated for the birthday party."},
     "Question", {hasCorrect: "A party", q:"What event will happen later?", as: ["A wedding", "A party"]}],
    
    ["filler", "DashedSentence", {s:"The landscaper boasted of his achievements constantly."},
     "Question", {hasCorrect: "The landscaper", q:"Who constantly boasted about their achievements?", as: ["The architect", "The landscaper"]}],
    
    ["filler", "DashedSentence", {s:"The physics professor at the university was finally going to retire."},
     "Question", {hasCorrect: "The physics professor", q:"Who was going to retire?", as: ["The physics professor", "The French professor"]}],
    
    ["filler", "DashedSentence", {s:"The basketball game ended with the home team missing the winning shot."},
     "Question", {hasCorrect: "The home team", q:"Who lost the basketball game?", as: ["The home team", "The visiting team"]}],
    
    ["critical", "DashedSentence", {s:"The wood floor needs cleaned before the student's parents get here."},
     "Question", {hasCorrect: "Parents", q:"Who will be visiting?", as: ["Friends", "Parents"]}],
    
    ["filler", "DashedSentence", {s:"The university students sometimes move into the dormitories as early as August."},
     "Question", {hasCorrect: "August", q:"When did some students move into the dormitories?", as: ["June", "August"]}],
    
    ["filler", "DashedSentence", {s:"Many of the soldiers were looking forward to going home for the winter holidays."},
     "Question", {hasCorrect: "During the winter holidays", q:"When were the soldiers going home?", 
                  as: ["During the winter holidays", "During spring break"]}],
    
    ["critical", "DashedSentence", {s:"The old chair needs fixed so the guests can sit on it."},
     "Question", {hasCorrect: "A chair", q:"What will the guests sit on?", as: ["A table", "A chair"]}],
    
    ["filler", "DashedSentence", {s:"The angry customers decided to leave the restaurant."},
     "Question", {hasCorrect: "Yes", q:"Were the customers angry?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"Each of the cab drivers had their own favorite route to get to the airport."},
     "Question", {hasCorrect: "The airport", q:"Where did the cab drivers' route take them?", as: ["The museum", "The airport"]}],
    
    ["filler", "DashedSentence", {s:"The power plant deserved more attention from the candidates during the election."},
     "Question", {hasCorrect: "The powerplant", q:"What deserved more attention?", as: ["The park", "The powerplant"]}],
    
    ["critical", "DashedSentence", {s:"The white walls need painted to keep the tenants happy."},
     "Question", {hasCorrect: "White", q:"What color were the walls originally?", as: ["White", "Blue"]}],
    
    ["filler", "DashedSentence", {s:"The eccentric professor always inspired his students to think critically about their work."},
     "Question", {hasCorrect: "His students", q:"Who did the professor inspire?", as: ["His students", "Other professors"]}],
    
    ["filler", "DashedSentence", {s:"The display case needs polished trophies so the students can admire them."},
     "Question", {hasCorrect: "Students", q:"Who can admire the display case?", as: ["Students", "Factory workers"]}],
    
    ["filler", "DashedSentence", {s:"The quilts were sold by the side of the road for ten dollars."},
     "Question", {hasCorrect: "Ten dollars", q:"How much were the quilts sold for?", as: ["Ten dollars", "Thirty dollars"]}],
    
    ["filler", "DashedSentence", {s:"The car salesman waited anxiously for more customers."},
     "Question", {hasCorrect: "The salesman", q:"Who waited for more customers?", as: ["The salesman", "The chef"]}],
    
    ["critical", "DashedSentence", {s:"The film needs copyrighted before it can be released."},
     "Question", {hasCorrect: "A film", q:"What will be released soon?", as: ["A film", "A TV series"]}],
    
    ["filler", "DashedSentence", {s:"The valuable lamp was broken by the mischievous boy."},
     "Question", {hasCorrect: "A lamp", q:"What did the boy break?", as: ["A vase", "A lamp"]}],
    
    ["filler", "DashedSentence", {s:"The spy was unable to cross the field without being seen."},
     "Question", {hasCorrect: "The field", q:"What was the spy planning to cross?", as: ["The field", "The lake"]}],
    
    ["filler", "DashedSentence", {s:"The engineers at the plant had to wear helmets when they went near the machines."},
     "Question", {hasCorrect: "Helmets", q:"What did the engineers wear?", as: ["Helmets", "Boots"]}],
    
    ["critical", "DashedSentence", {s:"The oranges need peeled before they can be eaten."},
     "Question", {hasCorrect: "Oranges", q:"What will be eaten?", as: ["Oranges", "Apples"]}],
    
    ["filler", "DashedSentence", {s:"The priceless ceramic sculpture had to sit on the top shelf of the lawyer's office."},
     "Question", {hasCorrect: "In the lawyers office", q:"Where was the ceramic sculpture located?", 
                  as: ["In the lawyers office", "In a musuem"]}],
    
    ["filler", "DashedSentence", {s:"The dance troupe came to set up their equipment."},
     "Question", {hasCorrect: "Their equipment", q:"What did the dance troupe set up?", as: ["Their equipment", "A merchandise stand"]}],
    
    ["filler", "DashedSentence", {s:"The wealthy bankers liked to frequent the bars downtown."},
     "Question", {hasCorrect: "Bankers", q:"Who liked to frequent the bars?", as: ["Bankers", "Judges"]}],
    
    ["critical", "DashedSentence", {s:"The potatoes need boiled before they can be used in the soup."},
     "Question", {hasCorrect: "Soup", q:"What is being made?", as: ["Sandwiches", "Soup"]}],
    
    ["filler", "DashedSentence", {s:"The former drug addict's memoirs were met with critical acclaim."},
     "Question", {hasCorrect: "The memoirs", q:"What was met with critical acclaim?", as: ["The TV series", "The memoirs"]}],
    
    ["filler", "DashedSentence", {s:"The new student caught everyone's attention when he came into the room."},
     "Question", {hasCorrect: "A new student", q:"Who caught everyone's attention?", as: ["A new student", "A new teacher"]}],
    
   // Post-questionnaire
    
    ["post1", "Form2", {consentRequired: true, html: {include: "post1.html" }} ],
    ["post2", "Form2", {consentRequired: true, html: {include: "post2.html" }} ],
   
   // Exit
    
    ["exit", "Form2", {consentRequired: true, html: {include: "exit.html" }} ]
    
];
    
