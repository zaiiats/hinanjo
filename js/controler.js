// import {fetchData} from "./model.js";
// import {state} from "./model.js"
const startPage = async function (state) {};

"use sctrict";

let data = {
  userData : {
    nameMale: [
      'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Charles', 'Thomas','Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth','George', 'Edward', 'Brian', 'Ronald', 'Timothy', 'Samuel', 'Henry', 'Nathan', 'Frank', 'Justin','Raymond', 'Jack', 'Dennis', 'Jerry', 'Alexander', 'Patrick', 'Tyler', 'Aaron', 'Jose', 'Henry','Douglas', 'Peter', 'Adam', 'Zachary', 'Walter', 'Ethan', 'Carl', 'Arthur', 'Kyle', 'Derek','Jordan', 'Seth', 'Christian', 'Roger', 'Jonathon', 'Willie', 'Alan', 'Wayne', 'Ralph', 'Roy','Louis', 'Billy', 'Johnny', 'Stanley', 'Leonard', 'Fred', 'Glenn', 'Howard', 'Martin', 'Phillip','Norman', 'Eugene', 'Larry', 'Terry', 'Earl', 'Herman', 'Craig', 'Dale', 'Gene', 'Carlos','Lawrence', 'Jim', 'Randy', 'Danny', 'Jesse', 'Joe', 'Curtis', 'Victor', 'Rodney', 'Gordon','Leon', 'Maurice', 'Albert', 'Clyde', 'Leroy', 'Melvin', 'Glen', 'Eddie', 'Clarence', 'Jake','Warren', 'Gerald', 'Edwin', 'Fredrick', 'Ray', 'Hugh',
    ],
    nameFemale: [
      'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen','Nancy', 'Margaret', 'Lisa', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon','Michelle', 'Laura', 'Sarah', 'Kimberly', 'Angela', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Laura','Shirley', 'Cynthia', 'Kathleen', 'Helen', 'Joan', 'Alice', 'Judith', 'Rose', 'Janet', 'Theresa','Gloria', 'Evelyn', 'Ann', 'Debra', 'Doris', 'Jean', 'Cheryl', 'Mildred', 'Katherine', 'Judy','Ashley', 'Donna', 'Tammy', 'Tracy', 'Crystal', 'Tina', 'Natalie', 'Brenda', 'Kathy', 'Beverly','Denise', 'Marilyn', 'Danielle', 'Diana', 'Sophia', 'Marie', 'Julie', 'Grace', 'Catherine', 'Jasmine','Olivia', 'Lori', 'Renee', 'Andrea', 'Sara', 'Megan', 'Eleanor', 'Hannah', 'Lillian', 'Heather','Samantha', 'Karen', 'Jenna', 'Carmen', 'Victoria', 'Jill', 'Diana', 'Paula', 'Robin', 'Heather','Lydia', 'Sally', 'Gina', 'Rita', 'Valerie', 'Wendy', 'Martha', 'Rosemary', 'Susan', 'Eva','Julia', 'Paulette', 'Carmen', 'Rosa', 'Joyce', 'Janelle', 'Melanie', 'Sylvia', 'Charlene', 'Cassandra',
    ],
    surname: [
      'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor','Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson','Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King','Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell','Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart','Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera','Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James','Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Hughes','Foster', 'Simmons', 'Fisher', 'Wells', 'Watkins', 'Olson', 'Stone', 'Webb', 'Tucker', 'Curtis',
    ],
    gender: [
      'Male', 'Female',
    ],

    teen : {
      profession: [
        {prob:1,value:['Without occupation']},
      ],
      sex: [
        {prob:1,value:['Heterosexual']},
      ],
      disease: [
        {prob:6,value:['Healthy']},
        {prob:4,value:[
          //all
          'Common Cold', 'Seasonal Allergies', 'Stye','Acne','Mild Acne', 'Nosebleed', 'Mild Eczema', 'Gingivitis', 'Cold Sores', 'Bruises', 'Sinusitis', 'Warts', 'Sprained Ankle', 'Scoliosis', 'Athlete\'s Foot','Eye Twitch', 'Sunburn', 'Blisters',  'Stuttering', 'Mild Asthma', 'Mild Depression', 'Mild Anxiety','Heartburn','Carpal Tunnel Syndrome', 'Mild Insomnia', 'Minor Back Pain','Constipation', 'Chronic Cough', 'Chronic Fatigue Syndrome','Obesity','Anorexia Nervosa','Bulimia Nervosa','Thyroid Disorder','Hyperthyroidism', 'Hypothyroidism','Anxiety Disorder','Depression',
          //teen-young
          'Canker Sores', 
          //teen
          'ADHD','Tonsillitis', 'Selective Mutism','Auditory Processing Disorder',
        ]},
        {prob:1,value:[
          //all
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache','Trigeminal Neuralgia','Cystic Fibrosis',
          'Lupus'
         ]}
      ],
    },
    young : {
      profession : [
        {prob:1,value:['Without occupation',],},
        {prob:2,value:['Tutor', 'Nurse', 'Software Developer', 'Photographer', 'Designer', 'Journalist', 'Veterinarian', 'Social Worker', 'Librarian', 'Artist', 'Musician', 'Dancer', 'Writer','Translator', 'Graphic Designer', 'Web Developer','Barista','Retail Associate','Fitness Trainer','Content Creator' ,'Video Editor','Model','Makeup Artist','Customer Service Representative','Teaching Assistant','Athlete','Tour Guide','Personal Assistant','Social Media Manager',]},
      ],
      sex: [
        {prob:1,value:['Heterosexual',]},
        {prob:1,value:['Homosexual', 'Asexual', 'Bisexual', 'Pansexual',]},
      ],
      disease : [
        {prob:4,value:['Healthy']},
        {prob:3,value:[
          //all
          'Common Cold', 'Seasonal Allergies', 'Stye','Acne','Mild Acne', 'Nosebleed', 'Mild Eczema', 'Gingivitis', 'Cold Sores', 'Bruises', 'Sinusitis', 'Warts', 'Sprained Ankle', 'Scoliosis', 'Athlete\'s Foot','Eye Twitch', 'Sunburn', 'Blisters', 'Stuttering', 'Mild Asthma', 'Mild Depression', 'Mild Anxiety','Heartburn','Carpal Tunnel Syndrome', 'Mild Insomnia', 'Minor Back Pain','Constipation', 'Chronic Cough',  'Chronic Fatigue Syndrome','Obesity','Anorexia Nervosa','Bulimia Nervosa','Thyroid Disorder','Hyperthyroidism', 'Hypothyroidism','Anxiety Disorder','Depression',
          //teen-young
          'Canker Sores',
          //young->end
          'Borderline Personality Disorder',          
        ]},
        {prob:1,value:[
          //all  
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus',
          //young->end
          'PCOS','Infertility', 
        ]}
      ],
    },
    adult : {
      profession : [
        {prob:1,value:['Without occupation']},
        {prob:4,value:['Tutor', 'Nurse', 'Software Developer', 'Photographer', 'Designer', 'Journalist', 'Veterinarian', 'Social Worker', 'Librarian', 'Artist', 'Musician', 'Dancer', 'Writer','Translator', 'Graphic Designer', 'Web Developer', 'Consultant', 'Event Planner','Barista','Retail Associate','Fitness Trainer','Content Creator' ,'Video Editor','Model','Makeup Artist','Customer Service Representative','Teaching Assistant','Athlete','Tour Guide','Personal Assistant','Social Media Manager', 'Entrepreneur', 'Doctor', 'Engineer', 'Teacher', 'Scientist', 'Lawyer', 'Architect', 'Pharmacist', 'Accountant', 'Dentist', 'Civil Engineer', 'Mechanical Engineer', 'Electrician', 'Plumber', 'Carpenter', 'Chef', 'Pilot', 'Psychologist', 'Interpreter', 'SEO Specialist', 'Marketing Manager', 'Project Manager', 'Business Analyst', 'Data Scientist','HR Manager', 'Sales Manager', 'Financial Analyst', 'Investment Banker', 'Professor', 'Researcher', 'Economist', 'Mathematician','Physicist', 'Chemist', 'Biologist', 'Geologist', 'Astronomer', 'Environmental Scientist', 'Oceanographer', 'Ecologist', 'Statistician', 'Anthropologist','Archaeologist', 'Sociologist', 'Politician', 'Diplomat', 'Public Relations Specialist', 'Advertising Manager', 'Real Estate Agent', 'Property Manager', 'Insurance Agent','Loan Officer', 'Bank Teller', 'Auditor', 'Actuary', 'Tax Consultant', 'Financial Advisor', 'Stockbroker', 'Trader', 'Portfolio Manager', 'Risk Manager',]},
      ],
      sex: [
        {prob:2,value:['Heterosexual',]},
        {prob:1,value:['Homosexual', 'Asexual', 'Bisexual', 'Pansexual',]},
      ],
      disease : [
        {prob:3,value:['Healthy']},
        {prob:3,value:[
          //all
          'Common Cold', 'Seasonal Allergies', 'Stye','Acne','Mild Acne', 'Nosebleed', 'Mild Eczema', 'Gingivitis', 'Cold Sores', 'Bruises', 'Sinusitis', 'Warts', 'Sprained Ankle', 'Scoliosis', 'Athlete\'s Foot','Eye Twitch', 'Sunburn', 'Blisters',  'Stuttering', 'Mild Asthma', 'Mild Depression', 'Mild Anxiety','Heartburn','Carpal Tunnel Syndrome', 'Mild Insomnia', 'Minor Back Pain','Constipation', 'Chronic Cough', 'Chronic Fatigue Syndrome', 'Obesity','Anorexia Nervosa','Bulimia Nervosa','Thyroid Disorder','Hyperthyroidism', 'Hypothyroidism','Anxiety Disorder','Depression',          
          //adult-> end
          'Borderline Personality Disorder', 'Mild Hypertension' ,'Tension Headache', 'Addison\'s Disease','Fibromyalgia', 'Rheumatoid Arthritis','Macular Degeneration', 'Cataracts', 'Arthritis',                
        ]},
        {prob:1,value:[
          //all
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus',            
          //adult->end
          'PCOS','Infertility', 'Multiple Sclerosis', 'Heart Disease',        
        ]},
      ],
    },
    seniour : {
      profession : [
        {prob:1,value:['Without occupation']},
        {prob:3,value:['Tutor', 'Nurse', 'Software Developer', 'Photographer', 'Designer', 'Journalist', 'Veterinarian', 'Social Worker', 'Librarian', 'Artist', 'Musician', 'Dancer', 'Writer','Translator', 'Graphic Designer', 'Web Developer', 'Consultant', 'Event Planner', 'Fitness Trainer','Content Creator' ,'Video Editor','Makeup Artist','Customer Service Representative', 'Teaching Assistant', 'Tour Guide','Personal Assistant','Social Media Manager', 'Entrepreneur', 'Doctor', 'Engineer', 'Teacher', 'Scientist', 'Lawyer', 'Architect', 'Pharmacist', 'Accountant', 'Dentist', 'Civil Engineer', 'Mechanical Engineer', 'Electrician', 'Plumber', 'Carpenter', 'Chef', 'Pilot', 'Psychologist', 'Interpreter', 'SEO Specialist', 'Marketing Manager', 'Project Manager', 'Business Analyst', 'Data Scientist','HR Manager', 'Sales Manager', 'Financial Analyst', 'Investment Banker', 'Professor', 'Researcher', 'Economist', 'Mathematician','Physicist', 'Chemist', 'Biologist', 'Geologist', 'Astronomer', 'Environmental Scientist', 'Oceanographer', 'Ecologist', 'Statistician', 'Anthropologist','Archaeologist', 'Sociologist', 'Politician', 'Diplomat', 'Public Relations Specialist', 'Advertising Manager', 'Real Estate Agent', 'Property Manager', 'Insurance Agent','Loan Officer', 'Bank Teller', 'Auditor', 'Actuary', 'Tax Consultant', 'Financial Advisor', 'Stockbroker', 'Trader', 'Portfolio Manager', 'Risk Manager', ]},
        
      ],
      sex: [
        {prob:3,value:['Heterosexual',]},
        {prob:1,value:['Homosexual', 'Asexual', 'Bisexual', 'Pansexual',]},
      ],
      disease : [
        {prob:2,value:['Healthy']},
        {prob:3,value:[
          //all
          'Common Cold', 'Seasonal Allergies', 'Stye','Acne','Mild Acne', 'Nosebleed', 'Mild Eczema', 'Gingivitis', 'Cold Sores', 'Bruises', 'Sinusitis', 'Warts', 'Sprained Ankle', 'Scoliosis', 'Athlete\'s Foot','Eye Twitch', 'Sunburn', 'Blisters',  'Stuttering', 'Mild Asthma', 'Mild Depression', 'Mild Anxiety','Heartburn','Carpal Tunnel Syndrome', 'Mild Insomnia', 'Minor Back Pain','Constipation', 'Chronic Cough', 'Chronic Fatigue Syndrome', 'Obesity','Anorexia Nervosa','Bulimia Nervosa','Thyroid Disorder','Hyperthyroidism', 'Hypothyroidism','Anxiety Disorder','Depression',
          //adult-> end
          'Borderline Personality Disorder', 'Mild Hypertension' ,'Tension Headache', 'Addison\'s Disease','Fibromyalgia', 'Rheumatoid Arthritis','Macular Degeneration', 'Cataracts', 'Arthritis',
          //seniour->end
          'Cushing\'s Syndrome','Mild Osteoarthritis','Sleep Apnea','Restless Legs Syndrome','Osteoporosis','Chronic Bronchitis',
          ]},
        {prob:1,value:[
          //all
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus', 
          //adult->end
          'PCOS','Infertility', 'Multiple Sclerosis', 'Heart Disease',
          //seniour->end
          'Parkinson\'s Disease', 'Stroke', 'Congestive Heart Failure',        
        ]},
      ],
    },
    old : {
      profession : [
        {prob:2,value:['Without occupation']},
        {prob:1,value:['Tutor', 'Consultant', 'Photographer', 'Artist', 'Writer', 'Translator', 'Graphic Designer', 'Web Developer', 'Content Creator', 'Video Editor', 'Makeup Artist', 'Customer Service Representative', 'Teaching Assistant', 'Tour Guide', 'Personal Assistant', 'Social Media Manager', 'Entrepreneur', 'Professor', 'Researcher', 'Librarian','Psychologist', 'SEO Specialist', 'Marketing Manager', 'Project Manager', 'Business Analyst', 'Data Scientist', 'HR Manager', 'Financial Advisor', 'Real Estate Agent', 'Property Manager', 'Tax Consultant',]},
      ],
      sex: [
        {prob:5,value:['Heterosexual',]},
        {prob:1,value:['Homosexual', 'Asexual', 'Bisexual', 'Pansexual',]},
      ],
      disease : [
        {prob:1,value:['Healthy']},
        {prob:2,value:[
          //all
          'Common Cold', 'Seasonal Allergies', 'Stye','Acne','Mild Acne', 'Nosebleed', 'Mild Eczema', 'Gingivitis', 'Cold Sores', 'Bruises', 'Sinusitis', 'Warts', 'Sprained Ankle', 'Scoliosis', 'Athlete\'s Foot','Eye Twitch', 'Sunburn', 'Blisters',  'Stuttering', 'Mild Asthma', 'Mild Depression', 'Mild Anxiety','Heartburn','Carpal Tunnel Syndrome', 'Mild Insomnia', 'Minor Back Pain','Constipation', 'Chronic Cough', 'Chronic Fatigue Syndrome', 'Obesity','Anorexia Nervosa','Bulimia Nervosa','Thyroid Disorder','Hyperthyroidism', 'Hypothyroidism','Anxiety Disorder','Depression',
          //adult-> end
          'Borderline Personality Disorder', 'Mild Hypertension' ,'Tension Headache', 'Addison\'s Disease','Fibromyalgia', 'Rheumatoid Arthritis','Macular Degeneration', 'Cataracts', 'Arthritis',
          //seniour->end
          'Cushing\'s Syndrome','Mild Osteoarthritis','Sleep Apnea','Restless Legs Syndrome','Osteoporosis','Chronic Bronchitis',          
          //old
          'Atrial Fibrillation',        
        ]},
        {prob:1,value:[
          //all
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus',            
          //adult->end
          'PCOS','Infertility', 'Multiple Sclerosis', 'Heart Disease',
          //seniour->end
          'Parkinson\'s Disease', 'Stroke', 'Congestive Heart Failure',         
          //old
          'Alzheimer\'s Disease', 'Emphysema',
        ]},
      ],
    },

    age : [
      {start:7,end:16,prob:1,value:'teen'},
      {start:16,end:25,prob:2,value:'young'},
      {start:25,end:40,prob:6,value:'adult'},
      {start:40,end:60,prob:2,value:'seniour'},
      {start:60,end:90,prob:1,value:'old'},
    ],
  },
  envData : {
    country:[
      ['Cor', 'Man', 'El', 'Nor', 'San', 'Bel', 'Vil', 'Al', 'Kar', 'Mon','Lan', 'Dar', 'Ter', 'Gal', 'Bar', 'Fen', 'Mar', 'Riv', 'Sol'],
      ['land', 'ia', 'ova', 'ton', 'stan', 'ford', 'burg', 'via', 'gan', 'tan','lia', 'nia', 'don', 'var', 'nia', 'dra', 'dor', 'ria', 'fall', 'mere'],
      ['dor', 'mar', 'an', 'ven', 'lin', 'zor', 'mir', 'tal', 'vin', 'gal','lor', 'ber', 'han', 'ros', 'tin', 'mel', 'nel', 'sal', 'zar', 'ren'],
    ],
    city:[
      ['New', 'Port', 'Lake', 'Green', 'River', 'West', 'East', 'North', 'South', 'Fort','Clear', 'Spring', 'Bright', 'Fair', 'Old', 'Rock', 'Grand', 'High', 'Low', 'Sunny'],
      ['ton', 'ville', 'burg', 'ford', 'field', 'view', 'wood', 'dale', 'haven', 'side','bridge', 'worth', 'port', 'grove', 'hill', 'bury', 'land', 'way', 'crest', 'valley'],
    ],

    easy : {
      catastrophy : [
        {prob:1,value:['Tornado', 'Virus outbreak','Flood', 'Wildfire', 'Drought' , 'Avalanche', 'Hurricane', 'Landslide', 'Sandstorm', 'Uprising']}
      ],
      population: [
        {start:2,end:5}
      ],
      vegetation: [
        {start:2,end:5}
      ],
      infrastructure: [
        {start:2,end:5}
      ]
    },
    medium : {
      catastrophy : [
        {prob:1,value:['Earthquake', 'Cyclone', 'Chemical spill', 'Radiation leak','Infrastructure collapse','Ozone layer damage',]}
      ],
      population: [
        {start:5,end:15}
      ],
      vegetation: [
        {start:5,end:15}
      ],
      infrastructure: [
        {start:5,end:15}
      ]
    },
    hard: {
      catastrophy : [
        {prob:1,value:['Volcanic eruption','Tsunami', 'Alien invasion', 'Meteor strike', 'Extreme heat', 'Extreme cold', 'AI rebellion',]}
      ],
      population: [
        {start:15,end:65}
      ],
      vegetation: [
        {start:15,end:65}
      ],
      infrastructure: [
        {start:15,end:65}
      ]
    },
    extreme: {
      catastrophy : [
        {prob:1,value:['Zombie apocalypse', 'Nuclear disaster',]}
      ],
      population: [
        {start:65,end:99}
      ],
      vegetation: [
        {start:65,end:99}
      ],
      infrastructure: [
        {start:65,end:99}
      ]
    },
   
    difficulty : [
      {start:5,end:24,prob:3,value:'easy'},
      {start:24,end:96,prob:3,value:'medium'},
      {start:96,end:300,prob:3,value:'hard'},
      {start:300,end:1200,prob:2,value:'extreme'}
    ],
  },
}

class Game {
  #PlayersCount;
  #population;
  #players;
  #data;
  #env;
  #connectFriends = [];
  constructor(data) {
    this.#PlayersCount = 6;
    this.#population = 8200000000;
    this.#players = [];
    this.#env;
    this.#connectFriends;

    this.#data = data;
    this.#initGame();
  }

  #initGame() {
    console.log("Starting the game...");
    this.#createPlayers();
    this.#createEnv();
    this.#makeFriends();
    this.#createMap();
    console.log(this.#players);
  }

  #createPlayers() {
    for (let i = 0; i < this.#PlayersCount; i++) {
      const gender = this.#randomFunction(this.#data.userData.gender);
      const ageArr = this.#createRandomInIntervals(this.#data.userData.age);
      let age = ageArr[0];
      let ageType = ageArr[1];
       
      const player = {
        id: i,
        gender: gender,
        friends: [],
        name: `${this.#randomFunction(this.#data.userData[`name${gender}`])} ${this.#randomFunction(this.#data.userData.surname)}`,
        age: age,

        profession: this.#createRandomInIntervals(this.#data.userData[`${ageType}`].profession),
        health: this.#createRandomInIntervals(this.#data.userData[`${ageType}`].disease),
        sex: this.#createRandomInIntervals(this.#data.userData[`${ageType}`].sex),
        
      };
    
      this.#players.push(player);
    }
  }

  #createEnv() {
    const diffArr = this.#createRandomInIntervals(this.#data.envData.difficulty);
    let diff = diffArr[0];
    let diffType = diffArr[1];

    const years = Math.floor(diff / 12);
    const remainingMonths = diff % 12;
    let result = [];
    if (years > 0) result.push(`${years} year${years > 1 ? 's' : ''}`)
    if (remainingMonths > 0) result.push(`${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`)

    let population = this.#population * this.#createRandomInIntervals(this.#data.envData[`${diffType}`].population) / 100;
    let diedPopulation;
    population>1000000000?diedPopulation=`${(population/1000000000).toFixed(2)} b.`:diedPopulation=`${(population/1000000).toFixed(2)} m.`;

    let country = '';
    let city = '';
    this.#data.envData.country.forEach(part=>{
      country += this.#randomFunction(part)
    })
    this.#data.envData.city.forEach(part=>{
      city += this.#randomFunction(part)
    })

    this.#env = {
      diffType:diffType,
      diff:diff,
      catastrophy: this.#createRandomInIntervals(this.#data.envData[`${diffType}`].catastrophy),
      population: population,
      infrastructure: this.#createRandomInIntervals(this.#data.envData[`${diffType}`].infrastructure),
      vegetation: this.#createRandomInIntervals(this.#data.envData[`${diffType}`].vegetation),
    };

    console.log(`${this.#env.catastrophy} happened in ${country}, ${city}\nWe need to survive for ${result.join(' and ')}, ${diedPopulation} people died, ${this.#env.infrastructure}% of world infrastructure was destroyed, and ${this.#env.vegetation}% of world vegetation was destroyed`);
  }

  #randomFunction(data, max, min = 0) {
    const range = data ? data.length : max;
    const randomNumber = Math.trunc(Math.random() * (range - min) + min);
    return data ? data[randomNumber] : randomNumber;
  }

  #createRandomInIntervals(args){
    let totalProb = args.reduce((sum, arg) => sum + arg.prob, 0);
    let randomProb = Math.random() * totalProb;
    let result;
    
    
    for (let arg of args) {
      if (arg.start) {
        if (randomProb < arg.prob) {
          result = Math.trunc(Math.random() * (arg.end - arg.start) + arg.start);          
          return [result,arg.value];
        }
        if (!arg.prob) {
          result = (Math.random() * (arg.end - arg.start) + arg.start).toFixed(2);          
          return result;
        }
        randomProb -= arg.prob;
      }
      
      else {        
        if (randomProb < arg.prob) {          
          return this.#randomFunction(arg.value);
        }
        randomProb -= arg.prob;
        
      }    
    }
  }

  #makeFriends(){
    let conectionsNum = Math.floor(this.#players.length / 2);
    let randomConectionNum = Math.trunc(Math.random()*3+conectionsNum-2);
    this.#createCons(this.#players, randomConectionNum);
    this.#assignFriends();
  }

  #createCons(players,num){
    for (let i = 0; i < num; i++) {
      this.#connectFriends.push(this.#randomConection(players, this.#connectFriends))
    }
  }

  #assignFriends(){
    this.#connectFriends.forEach(con => {
      con[0].friends.push(`${con[1].name}`);
      con[1].friends.push(`${con[0].name}`);
    });
  }

  #randomConection(players,prevCons){
    let consTemp = [];
    let newCon = this.#createConection(players);
    consTemp.push(newCon);
    
    players = players.filter((player) => player.id !== newCon.id);
    newCon = this.#createConection(players);
    consTemp.push(newCon);
  
    prevCons.map(con=>{
      if (this.#areArraysSimilar(con, consTemp)){
        return consTemp = this.#randomConection(players, prevCons)
      }
    })
    return consTemp;
  }

  #createConection(players){
    return players[Math.trunc(Math.random() * players.length)];
  }

  #areArraysSimilar(arr1, arr2) {
    return (
      (arr1[0].id === arr2[0].id && arr1[1].id === arr2[1].id) ||
      (arr1[0].id === arr2[1].id && arr1[1].id === arr2[0].id)
    );
  }

  #createMap(){
    let map = document.querySelector('.map')
    console.log(map);
    
  }
}

let game = new Game(data);