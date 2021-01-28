PennController.DebugOff()

var shuffleSequence = seq("intro", sepWith("sep", seq("practice")), "transfer", sepWith("sep", seq(anyOf("filler", "dtrain", "dtest"))), "post1", "post2", "exit");
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
    
    // Training Phase
    
    ["filler", "DashedSentence", {s:"The storekeepers were afraid that riots would ensue after the home team won the tournament."},
     "Question", {hasCorrect: "Riots", q: "What were the storekeepers afraid of?", as: ["Riots", "Infection"]}],
    
    ["filler", "DashedSentence", {s:"The chess match lasted for hours and finally ended in a stale mate."},
     "Question", {hasCorrect: "No", q:"Did anyone win the chess match?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The board directors want accomplished doctors to make up most of the hospital staff."},
     "Question", {hasCorrect: "The hospital", q:"What are the board directors in charge of?", as: ["The hospital", "The town hall"]}],
    
    ["filler", "DashedSentence", {s:"The unpopular anthropology professor was finally going to retire."},
     "Question", {hasCorrect: "Anthropology", q:"What subject did the professor teach?", as: ["Psychology", "Anthropology"]}],
   
    ["dtrain", "DashedSentence", {s:"The chef wants praised for her extraordinary recipe for chicken soup."},
     "Question", {hasCorrect: "Chicken", q:"What kind of soup did the chef make?", as: ["Tomato", "Chicken"]}],
    
    ["filler", "DashedSentence", {s:"The soccer coach wants motivated athletes for the team."},
     "Question", {hasCorrect: "Soccer", q:"What sport is being coached?", as: ["Soccer", "Tennis"]}],
    
    ["filler", "DashedSentence", {s:"The shoppers love to spend all day at the mall on the weekends."},
     "Question", {hasCorrect: "The mall", q:"Where do the shoppers spend their day on the weekends?", as: ["The mall", "The movie theater"]}],
    
    ["filler", "DashedSentence", {s:"The coffee shop was a popular hangout for political activists."},
     "Question", {hasCorrect: "The coffee shop", q:"Where do the political activists hang out?", as: ["The club", "The coffee shop"]}],
    
    ["filler", "DashedSentence", {s:"The director wants nominated actors to attend the exclusive party after the award ceremony."},
     "Question", {hasCorrect: "After the ceremony", q:"When is the exclusive party?", as: ["After the ceremony", "Before the ceremony"]}], 
    
    ["dtrain", "DashedSentence", {s:"The cardio instructor wants energized for the morning class."},
     "Question", {hasCorrect: "A cardio instructor", q:"What kind of instructor is teaching the class?", as: ["A cardio instructor", "A yoga instructor"]}],
    
    ["filler", "DashedSentence", {s:"The girls on the basketball team tried to practice all summer."},
     "Question", {hasCorrect: "The basketball team", q:"What team were the girls on?", as: ["The soccer team", "The basketball team"]}],
    
    ["filler", "DashedSentence", {s:"The salesman wants updated information before the end of the quarter."},
     "Question", {hasCorrect: "The salesman", q:"Who is requesting information?", as: ["The CEO", "The salesman"]}],
    
    ["filler", "DashedSentence", {s:"The cyclist had to train throughout the winter so he moved to Hawaii."},
     "Question", {hasCorrect: "Hawaii", q:"Where did the cyclist move to?", as: ["Hawaii", "Jamaica"]}],
    
    ["dtrain", "DashedSentence", {s:"The injured soccer player wants treated by the team doctor."},
     "Question", {hasCorrect: "A soccer player", q:"Who was injured?", as: ["A basketball player", "A soccer player"]}],
    
    ["filler", "DashedSentence", {s:"The university dean wants talented professors to head up the psychology undergraduate program."},
     "Question", {hasCorrect: "Psychology", q:"What major is the program in?", as: ["Psychology", "Biology"]}],
    
    ["filler", "DashedSentence", {s:"The new experiment was the source of a great deal of excitement in the lab."},
     "Question", {hasCorrect: "The new experiment", q:"What was the source of the excitement?", as: ["A new lab member", "The new experiment"]}],
    
    ["filler", "DashedSentence", {s:"The principal wants empowered students to take action within the community."},
     "Question", {hasCorrect: "The principal", q:"Who wants to improve the community?", as: ["The principal", "The mayor"]}],
    
    ["dtrain", "DashedSentence", {s:"The doctor wants rested before the surgery tomorrow."},
     "Question", {hasCorrect: "A surgery", q:"What is happening tomorrow?", as: ["A dance performance", "A surgery"]}],
    
    ["filler", "DashedSentence", {s:"The competitive swimmer wants dried towels for after swim practice."},
     "Question", {hasCorrect: "A competitive swimmer", q:"Who is practicing swimming?", as: ["A competitive swimmer", "A diver"]}],
    
    ["filler", "DashedSentence", {s:"The pilots flew over the city where they had just had a wonderful weekend."},
     "Question", {hasCorrect: "Over the weekend", q:"When did the pilots visit the city?", as: ["On Tuesday", "Over the weekend"]}],
    
    ["dtrain", "DashedSentence", {s:"The valiant hero wants recognized for his courageous actions."},
     "Question", {hasCorrect: "No", q:"Was the hero a coward?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The runners were in much better shape in the fall than in the winter."},
     "Question", {hasCorrect: "In the fall", q:"When were the runners in shape?", as: ["In the fall", "In the summer"]}],
    
    ["filler", "DashedSentence", {s:"The children want brushed hair before going to school."},
     "Question", {hasCorrect: "To school", q:"Where are the children going?", 
                  as: ["To the playground", "To school"]}],
    
    ["filler", "DashedSentence", {s:"The adventurer wants glorified songs of his achievements."},
     "Question", {hasCorrect: "Yes", q:"Does the adventurer have any achievements?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The textbooks were too expensive for most of the students."},
     "Question", {hasCorrect: "Textbooks", q:"What was too expensive for students?", as: ["Textbooks", "Netflix"]}],
    
    ["dtrain", "DashedSentence", {s:"The writer wants inspired so that they can create a masterpiece."},
     "Question", {hasCorrect: "The writer", q:"Who wants to create a masterpiece?", as: ["The writer", "The painter"]}],
    
    ["filler", "DashedSentence", {s:"The diver wants certified lifeguards keeping watch over the beach."},
     "Question", {hasCorrect: "At the beach", q:"Where is the diver?", as: ["At the store", "At the beach"]}],
    
    ["filler", "DashedSentence", {s:"The term papers from the previous semester were beginning to accumulate on the teacher’s desk."},
     "Question", {hasCorrect: "The previous semester", q:"What semester are the papers from?", as: ["The current semester", "The previous semester"]}],
    
    ["dtrain", "DashedSentence", {s:"The research assistant wants rewarded for all their hard work."},
     "Question", {hasCorrect: "Yes", q:"Did the research assistant work hard?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The teachers had to move their classes online due to a pandemic."},
     "Question", {hasCorrect: "A pandemic", q:"What caused the classes to be moved online?", as: ["A snowstorm", "A pandemic"]}],
    
    ["filler", "DashedSentence", {s:"The employer wants determined applicants for the vacant position."},
     "Question", {hasCorrect: "No", q:"Is the position already filled?", as: ["Yes", "No"]}],
    
    ["dtrain", "DashedSentence", {s:"The teacher wants appreciated for putting together the school curriculum."},
     "Question", {hasCorrect: "The school curriculum", q:"What did the teacher put together?", as: ["The school curriculum", "The school lunches"]}],
    
    ["filler", "DashedSentence", {s:"The candles on the birthday cake were blown out in seconds."},
     "Question", {hasCorrect: "Candles", q:"What was on the cake?", as: ["Flowers", "Candles"]}],
    
    ["filler", "DashedSentence", {s:"The nurse wants disinfected needles placed in their respective drawer."},
     "Question", {hasCorrect: "The drawers", q:"Where are the needles placed?", as: ["The drawers", "The cabinets"]}],
    
    ["filler", "DashedSentence", {s:"The real estate agent blundered when he revealed the house's plumbing problems."},
     "Question", {hasCorrect: "Plumbing problems", q:"What kind of problems did the house have?", as: ["Plumbing problems", "Mold"]}],
    
    ["filler", "DashedSentence", {s:"The conductor wants skilled musicians playing in the orchestra."},
     "Question", {hasCorrect: "The orchestra", q:"What is the conductor in charge of?", as: ["The train", "The orchestra"]}],
    
    ["dtrain", "DashedSentence", {s:"The brightly colored parrot wants fed because she has been hungry for days."},
     "Question", {hasCorrect: "A parrot", q:"What kind of animal was hungry?", as: ["A parrot", "A rabbit"]}],
    
    ["filler", "DashedSentence", {s:"The leader of the gambling ring was always mistrustful of his bodyguards."},
     "Question", {hasCorrect: "A gambling ring", q:"What was the leader in charge of?", as: ["A gambling ring", "A circus"]}],
    
    ["filler", "DashedSentence", {s:"The veterinarian wants behaved pets at their practice."},
     "Question", {hasCorrect: "The veterinarian", q:"Who runs the practice?", as: ["The dentist", "The veterinarian"]}],
    
    ["dtrain", "DashedSentence", {s:"The landlord wants reimbursed for the damages to the property."},
     "Question", {hasCorrect: "No", q:"Was the property in perfect condition?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The kids want animated movies shown at the theater during their spring break."},
     "Question", {hasCorrect: "During spring break", q:"When can the kids go to the theater?", as: ["During school hours", "During spring break"]}],
    
    ["filler", "DashedSentence", {s:"The library was open to all members of the community since it was supported by tax dollars."},
     "Question", {hasCorrect: "The library", q:"What was open to all members of the community?", as: ["The gym", "The library"]}],
    
    ["filler", "DashedSentence", {s:"The kindergarten teacher wants excited kids to attend class online."},
     "Question", {hasCorrect: "Kindergarteners", q:"Who is being taught?", as: ["High schoolers", "Kindergarteners"]}],
    
    ["dtrain", "DashedSentence", {s:"The businesswoman wants prepared for the presentation."},
     "Question", {hasCorrect: "The businesswoman", q:"Who is presenting?", as: ["The intern", "The businesswoman"]}],
    
    ["filler", "DashedSentence", {s:"The actor wants rehearsed performances scheduled before the opening of the show."},
     "Question", {hasCorrect: "An actor", q:"Who is starring in the show?", as: ["An actor", "A musician"]}],
    
    ["filler", "DashedSentence", {s:"The foreign ambassadors arrived to the meeting surrounded by security guards."},
     "Question", {hasCorrect: "Security guards", q:"Who surrounded the ambassadors?", as: ["Secret agents", "Security guards"]}],
    
    ["dtrain", "DashedSentence", {s:"The workers want paid for completing construction."},
     "Question", {hasCorrect: "Construction", q:"What did the workers complete?", as: ["Construction", "Deliveries"]}],
    
    ["filler", "DashedSentence", {s:"The sunburned boys who were fed the hot dogs got a stomach ache."},
     "Question", {hasCorrect: "Hot dogs", q:"What did the boys eat?", as: ["Hot dogs", "Burgers"]}],
    
    ["filler", "DashedSentence", {s:"The school board wants pleased parents so that they can get more funding from the town."},
     "Question", {hasCorrect: "The town", q:"Where does the funding come from?", as: ["The town", "The state"]}],
    
    ["filler", "DashedSentence", {s:"The university's math courses were among the nation's most rigorous."},
     "Question", {hasCorrect: "Math", q:"What courses were among the nation's most rigorous?", as: ["Math", "English"]}],
    
    ["dtrain", "DashedSentence", {s:"The customer wants served before everyone else in the restaurant."},
     "Question", {hasCorrect: "At the restaurant", q:"Where was the customer?", as: ["At the restaurant", "At the grocery store"]}],
    
    ["filler", "DashedSentence", {s:"The people downtown are frustrated by the lack of available parking."},
     "Question", {hasCorrect: "Downtown", q:"Where was there no parking?", as: ["In the suburbs", "Downtown"]}],
    
    ["filler", "DashedSentence", {s:"The lawyer wants approved papers by tomorrow morning."},
     "Question", {hasCorrect: "Tomorrow morning", q:"When are the papers due?", as: ["Tomorrow morning", "Next week"]}],
    
    ["dtrain", "DashedSentence", {s:"The cute baby wants held because he is feeling uneasy."},
     "Question", {hasCorrect: "Uneasy", q:"How was the baby feeling?", as: ["Uneasy", "Happy"]}],
    
    ["filler", "DashedSentence", {s:"The temporary worker wants assigned hours before the holidays."},
     "Question", {hasCorrect: "No", q:"Have the hours been assigned?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The physics professor at the university was finally going to retire."},
     "Question", {hasCorrect: "The physics professor", q:"Who was going to retire?", as: ["The physics professor", "The French professor"]}],
    
    ["filler", "DashedSentence", {s:"The bride and groom want recorded video of their wedding."},
     "Question", {hasCorrect: "A wedding", q:"What kind of celebration is happening?", as: ["A graduation party", "A wedding"]}],
    
    ["dtrain", "DashedSentence", {s:"The prospective students want accepted to the graduate program."},
     "Question", {hasCorrect: "A graduate program", q:"What kind of program were the students interested in?", as: ["A graduate program", "An undergraduate program"]}],
    
    ["filler", "DashedSentence", {s:"The university students sometimes move into the dormitories as early as August."},
     "Question", {hasCorrect: "August", q:"When did some students move into the dormitories?", as: ["June", "August"]}],
    
    ["filler", "DashedSentence", {s:"The high school student wants appointed study hours for the upcoming standardized exam."},
     "Question", {hasCorrect: "A high school student", q:"Who is taking the exam?", 
                  as: ["A college student", "A high school student"]}],
    
    ["dtrain", "DashedSentence", {s:"The sheep want sheared before summer arrives in two months."},
     "Question", {hasCorrect: "In two months", q:"When will summer arrive?", as: ["In two months", "In seven months"]}],
    
    ["filler", "DashedSentence", {s:"The angry customers decided to leave the restaurant."},
     "Question", {hasCorrect: "Yes", q:"Were the customers angry?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"The hotel manager wants satisfied guests at each of their hotels."},
     "Question", {hasCorrect: "Hotels", q:"What buildings does the manager take care of?", as: ["Apartments", "Hotels"]}],
    
    ["filler", "DashedSentence", {s:"The artist wants developed photographs before the gallery opens  in two days."},
     "Question", {hasCorrect: "In two days", q:"When will the gallery open?", as: ["In three weeks", "In two days"]}],
    
    ["dtrain", "DashedSentence", {s:"The mayor wants respected after calming down the crowds."},
     "Question", {hasCorrect: "The mayor", q:"Who calmed down the crowds?", as: ["The president", "The mayor"]}],
    
    ["filler", "DashedSentence", {s:"The eccentric professor always inspired his students to think critically about their work."},
     "Question", {hasCorrect: "His students", q:"Who did the professor inspire?", as: ["His students", "Other professors"]}],
    
    ["filler", "DashedSentence", {s:"The official wants translated documents for the court case."},
     "Question", {hasCorrect: "A court case", q:"What are the documents for?", as: ["A passport", "A court case"]}],
    
    ["filler", "DashedSentence", {s:"The quilts were sold by the side of the road for ten dollars."},
     "Question", {hasCorrect: "Ten dollars", q:"How much were the quilts sold for?", as: ["Ten dollars", "Thirty dollars"]}],
    
    ["filler", "DashedSentence", {s:"The young agent wants married couples to lease the nice apartment units."},
     "Question", {hasCorrect: "Apartment units", q:"What is being leased?", as: ["Used cars", "Apartment units"]}],
    
    ["dtrain", "DashedSentence", {s:"The general wants honored for his wartime heroics six years ago."},
     "Question", {hasCorrect: "Six years ago", q:"When was the general a hero?", as: ["One year ago", "Six years ago"]}],
    
    ["filler", "DashedSentence", {s:"The valuable lamp was broken by the mischievous boy."},
     "Question", {hasCorrect: "A lamp", q:"What did the boy break?", as: ["A vase", "A lamp"]}],
    
    ["filler", "DashedSentence", {s:"The politician wants persuaded constituents to vote for them in the upcoming election."},
     "Question", {hasCorrect: "An election", q:"What is coming up?", as: ["A debate", "An election"]}],
    
    ["filler", "DashedSentence", {s:"The educator wants informed opinions about standardized testing before writing up a new policy."},
     "Question", {hasCorrect: "Standardized testing", q:"What will the policy be on?", as: ["Standardized testing", "Student attendance"]}],
    
    ["dtrain", "DashedSentence", {s:"The ballet dancer wants featured in the upcoming performance."},
     "Question", {hasCorrect: "Ballet", q:"What type of dance is the performance?", as: ["Tango", "Ballet"]}],
    
    ["filler", "DashedSentence", {s:"The competitors want impressed judges during the school talent show."},
     "Question", {hasCorrect: "A school talent show", q:"What kind of show is it?", 
                  as: ["A musical", "A school talent show"]}],
    
    ["filler", "DashedSentence", {s:"The dance troupe came to set up their equipment."},
     "Question", {hasCorrect: "Their equipment", q:"What did the dance troupe set up?", as: ["Their equipment", "A merchandise stand"]}],
    
    ["filler", "DashedSentence", {s:"The presenter wants prepped meals to go with the meeting next week. "},
     "Question", {hasCorrect: "Next week", q:"When is the meeting?", as: ["Next week", "In two months"]}],
    
    ["dtrain", "DashedSentence", {s:"The high school student wants tutored before the big math exam."},
     "Question", {hasCorrect: "A math exam", q:"What kind of exam is coming up?", as: ["A math exam", "A biology exam"]}],
    
    ["filler", "DashedSentence", {s:"The former drug addict's memoirs were met with critical acclaim."},
     "Question", {hasCorrect: "The memoirs", q:"What was met with critical acclaim?", as: ["The TV series", "The memoirs"]}],
    
    ["filler", "DashedSentence", {s:"The new student caught everyone's attention when he came into the room."},
     "Question", {hasCorrect: "A new student", q:"Who caught everyone's attention?", as: ["A new student", "A new teacher"]}],
     
   // Test Phase
   
    ["dtest", "DashedSentence", {s:"The shaggy dog wants washed before it is time to go to bed."},
     "Question", {hasCorrect: "Yes", q:"Is the dog shaggy?", as: ["Yes", "No"]}],
     
    ["filler", "DashedSentence", {s:"The astronomer discovered a new planet a couple days ago."},
     "Question", {hasCorrect: "A couple days ago", q:"When was the planet discovered?", as: ["A couple days ago", "One year ago"]}],
     
    ["filler", "DashedSentence", {s:"The grocery store ran out of cleaning supplies and hand sanitizer."},
     "Question", {hasCorrect: "No", q:"Did the store have hand sanitizer?", as: ["Yes", "No"]}],
     
    ["dtest", "DashedSentence", {s:"The painter wants cleaned before heading to the birthday party."},
     "Question", {hasCorrect: "A birthday party", q:"Where is the painter headed?", as: ["A wedding", "A birthday party"]}],
      
    ["filler", "DashedSentence", {s:"The graduate student applied to many job positions but only got one offer."},
     "Question", {hasCorrect: "One", q:"How many offers did the student receive?", as: ["Five", "One"]}],
     
    ["dtest", "DashedSentence", {s:"The academics want trained on new methodology in their field."},
     "Question", {hasCorrect: "No", q:"Are the academics currently trained on new methodology?", as: ["Yes", "No"]}], 
     
    ["filler", "DashedSentence", {s:"The newly released movie did not receive a lot of praise from critics."},
     "Question", {hasCorrect: "No", q:"Did the movie receive a lot of praise?", as: ["Yes", "No"]}],
      
    ["filler", "DashedSentence", {s:"The radio station played new releases every day without any commercials."},
     "Question", {hasCorrect: "New releases", q:"What did the radio station play?", as: ["New releases", "Commercials"]}],
     
    ["filler", "DashedSentence", {s:"The price of the streaming service increased despite complaints from customers."},
     "Question", {hasCorrect: "No", q:"Were the customers happy with the price increase?", as: ["Yes", "No"]}],

    ["dtest", "DashedSentence", {s:"The factory worker wants supervised while working on the new machine."},
     "Question", {hasCorrect: "The factory worker", q:"Who will work on the new machine?", as: ["The owner", "The factory worker"]}],
     
    ["filler", "DashedSentence", {s:"The ice skater was skilled enough to qualify for the U.S. olympic team."},
     "Question", {hasCorrect: "The ice skater", q:"Who was skilled enough to qualify for the olympic team?", as: ["The ice skater", "The skiier"]}], 

    ["filler", "DashedSentence", {s:"The local animal shelter had all of their animals adopted over the weekend."},
     "Question", {hasCorrect: "Yes", q:"Were all the animals adopted?", as: ["Yes", "No"]}], 

    ["filler", "DashedSentence", {s:"The surfers were surprised by the large waves at the beach."},
     "Question", {hasCorrect: "Yes", q:"Were the waves large?", as: ["Yes", "No"]}],
     
    ["dtest", "DashedSentence", {s:"The college professor wants organized before the semester starts in two weeks."},
     "Question", {hasCorrect: "In two weeks", q:"When will the semester start?", as: ["In five weeks", "In two weeks"]}],
        
    ["filler", "DashedSentence", {s:"The chemistry professor was disappointed by the grades on the last exam."},
     "Question", {hasCorrect: "The chemistry professor", q:"Who was disappointed by the grades?", as: ["The chemistry professor", "The psychology professor"]}],
      
    ["dtest", "DashedSentence", {s:"The brilliant scientist wants photographed for the town newspaper."},
     "Question", {hasCorrect: "Yes", q:"Is the scientist brillant?", as: ["Yes", "No"]}],
    
    ["filler", "DashedSentence", {s:"All the athletes on the football team were excited about the upcoming championship."},
     "Question", {hasCorrect: "Football", q:"What sport did the athletes play?", as: ["Hockey", "Football"]}], 

    ["filler", "DashedSentence", {s:"The shack next to the highway caught on fire a few years ago."},
     "Question", {hasCorrect: "Next to a highway", q:"Where was the shack?", as: ["Near the beach", "Next to a highway"]}],
      
    ["dtest", "DashedSentence", {s:"The customer wants refunded since there was a lawsuit associated with the product."},
     "Question", {hasCorrect: "Yes", q:"Was there a lawsuit?", as: ["Yes", "No"]}],
     
    ["filler", "DashedSentence", {s:"The birds liked the new birdfeeder that was in the park."},
     "Question", {hasCorrect: "In the park", q:"Where was the birdfeeder?", as: ["On the beach", "In the park"]}], 

    ["filler", "DashedSentence", {s:"The new restaurant finally opened to the public over the summer."},
     "Question", {hasCorrect: "In the summer", q:"When did the restaurant open?", as: ["In the winter", "In the summer"]}],
       
    ["dtest", "DashedSentence", {s:"The company wants educated on issues relating to social justice."},
     "Question", {hasCorrect: "Social justice issues", q:"What issues are the company considering?", as: ["Social justice issues", "Environmental issues"]}],
     
    ["filler", "DashedSentence", {s:"The hikers brought water and trail mix with them on their trip."},
     "Question", {hasCorrect: "Trail mix", q:"What did the hikers bring with them?", as: ["Sandwiches", "Trail mix"]}], 

    ["filler", "DashedSentence", {s:"The plumber fixed all the leaks under the kitchen sink."},
     "Question", {hasCorrect: "Under the sink", q:"Where were all the leaks?", as: ["Under the sink", "In the shower"]}], 

    ["filler", "DashedSentence", {s:"The new book was on the bestseller list for eight weeks in a row."},
     "Question", {hasCorrect: "Eight", q:"How many weeks was the book on the bestseller list?", as: ["Eight", "Ten"]}],

    ["dtest", "DashedSentence", {s:"The university wants supported by large donations from alumni."},
     "Question", {hasCorrect: "Alumni", q:"Who is making large donations?", as: ["Alumni", "Current students"]}],
     
    ["filler", "DashedSentence", {s:"The museum opened its new exhibit on whales at the beginning of the month."},
     "Question", {hasCorrect: "Whales", q:"What was the new exhibit on?", as: ["Penguins", "Whales"]}], 

    ["filler", "DashedSentence", {s:"The campers set up their tents near the lake."},
     "Question", {hasCorrect: "Near the lake", q:"Where did the campers set up their tents?", as: ["Near the lake", "Near the mountains"]}], 

    ["filler", "DashedSentence", {s:"The dolphins at the aquarium performed many tricks during the show."},
     "Question", {hasCorrect: "The dolphins", q:"Who performed tricks?", as: ["The dolphins", "The sea lion"]}],

    ["dtest", "DashedSentence", {s:"The financial advisors want convinced before making a decision about investing."},
     "Question", {hasCorrect: "The financial advisors", q:"Who makes decisions about investments?", as: ["The interns", "The financial advisors"]}],
      
   // Post-questionnaire
    
    ["post1", "Form2", {consentRequired: true, html: {include: "post1.html" }} ],
    ["post2", "Form2", {consentRequired: true, html: {include: "post2.html" }} ],
   
   // Exit
    
    ["exit", "Form2", {consentRequired: true, html: {include: "exit.html" }} ]
    
];
    
