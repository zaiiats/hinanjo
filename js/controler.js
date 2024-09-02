// import {fetchData} from "./model.js";
// import {state} from "./model.js"
const startPage = async function (state) {};

import CreateEnvironment from "./components/createEnv.js";
import CreatePlayers from "./components/createPlayers.js";

import MapCountryView from "./views/mapCountryView.js"



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
          'Common Cold', 'Seasonal Allergies', 'Stye', 'Acne', 'Mild Acne', 'Nosebleed', 'Mild Eczema', 'Gingivitis', 'Cold Sores', 'Bruises', 'Sinusitis', 'Warts', 'Sprained Ankle', 'Scoliosis', 'Athlete\'s Foot','Eye Twitch', 'Sunburn', 'Blisters',  'Stuttering', 'Mild Asthma', 'Mild Depression', 'Mild Anxiety','Heartburn','Carpal Tunnel Syndrome', 'Mild Insomnia', 'Minor Back Pain','Constipation', 'Chronic Cough', 'Chronic Fatigue Syndrome','Obesity','Anorexia Nervosa','Bulimia Nervosa','Thyroid Disorder','Hyperthyroidism', 'Hypothyroidism','Anxiety Disorder','Depression', 
          //teen-young
          'Canker Sores', 
          //teen
          'ADHD','Tonsillitis', 'Selective Mutism','Auditory Processing Disorder',
        ]},
        {prob:1,value:[
          //all
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache','Trigeminal Neuralgia','Cystic Fibrosis',
          'Lupus', "no hands", "no feet", 'no limbs', 'no finger', 'no arm', "no leg", 'cerebral palsy', 'Siamese twin', 'HIV/AIDS', "cadaveric spots", 'Glaucoma', 
         ]}
      ],
      ability: [
        {id:0,prob:2,value:['none']},
        {id:1,prob:1,value:[
          'Can ride a bicycle','Can skateboard or rollerblade','Good at photography', 'Good at DIY projects','Good at drawing','Good at video games', 'Good at sports','Can play a musical instrument', 'Strong social media presence',
        ]},
        {id:2,prob:1,value:[
          'Good communication skills', 'Can work in team', 'Good at problem-solving', 'Good time manager','Leadership skills', 'Adaptable','Good at studying','Can handle stressful situations','Can work under pressure', 'Fast learner', 'Organizational skills', 'Good memory','Good at planning and logistics',  
        ]},
        {id:3,prob:1,value:[
          'Can cook', 'First aid knowledge', 'Gardening skills', 'Not scared of blood','High energy','Quick reflexes','Good at mentoring','Can perfectly swim', 'Can teach others', 'Basic cooking skills', 'Basic gardening skills', 'Know 2 languages',  'Good with animals', 'Tech-savvy', 
         ]},
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
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus',"no hands", "no feet", 'no limbs', 'no finger', 'no arm', "no leg", 'cerebral palsy', 'Siamese twin', 'HIV/AIDS', "cadaveric spots", 'Glaucoma', 
          //young->end
          'PCOS','Infertility', 
        ]}
      ],
      ability: [
        {id:0,prob:2,value:['none']},
        {id:1,prob:1,value:[
          'Can ride a bicycle','Can skateboard or rollerblade','Good at photography', 'Good at DIY projects','Good at drawing','Good at video games', 'Good at sports','Can play a musical instrument', 'Strong social media presence',
        ]},
        {id:2,prob:1,value:[
          'Good communication skills', 'Can work in team', 'Good at problem-solving', 'Good time manager','Leadership skills', 'Adaptable','Good at studying','Can handle stressful situations','Can work under pressure', 'Fast learner', 'Organizational skills', 'Good at public speaking','Good memory','Good at planning and logistics',    
        ]},
        {id:3,prob:1,value:[
          'Can drive', 'Can cook', 'First aid knowledge', 'Gardening skills', 'Can manage finances', 'Independent living skills', 'Not scared of blood','High energy','Quick reflexes','Good at mentoring','Can perfectly swim', 'Can teach others', 'Basic cooking skills', 'Basic gardening skills', 'Know 2 languages', 'Good with kids', 'Good with animals', 'Tech-savvy', 
         ]},
        {id:4,prob:1,value:[          
          'Can operate aircraft', 'Fluent in multiple languages', 'Can drive heavy vehicles', 'Can program', 'Can repair electronics','Can repair cars or machinery', 'Good at networking', 'Can sew or knit', 'Can operate ship','Can perfectly navigate using a map',     
        ]},
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
          'Borderline Personality Disorder', 'Mild Hypertension' ,'Tension Headache', 'Addison\'s Disease','Fibromyalgia', 'Rheumatoid Arthritis','Macular Degeneration', 'Cataracts', 'Arthritis', 'Glaucoma',        
        ]},
        {prob:1,value:[
          //all
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus', "no hands", "no feet", 'no limbs', 'no finger', 'no arm', "no leg", 'cerebral palsy', 'Siamese twin', 'HIV/AIDS', "cadaveric spots", 'Glaucoma',            
          //adult->end
          'PCOS','Infertility', 'Multiple Sclerosis', 'Heart Disease',        
        ]},
      ],
      ability: [
        {id:0,prob:2,value:['none']},
        {id:1,prob:1,value:[
          'Can ride a bicycle','Can skateboard or rollerblade','Good at photography', 'Good at DIY projects','Good at drawing','Good at video games', 'Good at sports','Can play a musical instrument', 'Strong social media presence',
        ]},
        {id:2,prob:1,value:[
          'Good communication skills', 'Can work in team', 'Good at problem-solving', 'Good time manager','Leadership skills', 'Adaptable','Good at studying','Can handle stressful situations','Can work under pressure', 'Fast learner', 'Organizational skills', 'Good at public speaking','Good memory','Good at planning and logistics',    
        ]},
        {id:3,prob:1,value:[
          'Can drive', 'Can cook', 'First aid knowledge', 'Gardening skills', 'Can manage finances', 'Independent living skills', 'Not scared of blood','High energy','Quick reflexes','Good at mentoring','Can perfectly swim', 'Can teach others', 'Basic cooking skills', 'Basic gardening skills', 'Know 2 languages', 'Good with kids', 'Good with animals', 'Tech-savvy', 
         ]},
        {id:4,prob:1,value:[          
          'Can operate aircraft', 'Fluent in multiple languages', 'Can drive heavy vehicles', 'Can program', 'Can repair electronics','Can repair cars or machinery', 'Good at networking', 'Can sew or knit', 'Can operate ship','Can perfectly navigate using a map',     
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
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus', "no hands", "no feet", 'no limbs', 'no finger', 'no arm', "no leg", 'cerebral palsy', 'Siamese twin', 'HIV/AIDS', "cadaveric spots", 'Glaucoma', 
          //adult->end
          'PCOS','Infertility', 'Multiple Sclerosis', 'Heart Disease',
          //seniour->end
          'Parkinson\'s Disease', 'Stroke', 'Congestive Heart Failure',        
        ]},
      ],
      ability: [
        {id:0,prob:2,value:['none']},
        {id:1,prob:1,value:[
          'Can ride a bicycle','Can skateboard or rollerblade','Good at photography', 'Good at DIY projects','Good at drawing','Good at video games', 'Good at sports','Can play a musical instrument', 'Strong social media presence',
        ]},
        {id:2,prob:1,value:[
          'Good communication skills', 'Can work in team', 'Good at problem-solving', 'Good time manager','Leadership skills', 'Adaptable','Good at studying','Can handle stressful situations','Can work under pressure', 'Fast learner', 'Organizational skills', 'Good at public speaking','Good memory','Good at planning and logistics',    
        ]},
        {id:3,prob:1,value:[
          'Can drive', 'Can cook', 'First aid knowledge', 'Gardening skills', 'Can manage finances', 'Independent living skills', 'Not scared of blood','High energy','Quick reflexes','Good at mentoring','Can perfectly swim', 'Can teach others', 'Basic cooking skills', 'Basic gardening skills', 'Know 2 languages', 'Good with kids', 'Good with animals', 'Tech-savvy', 
         ]},
        {id:4,prob:1,value:[          
          'Can operate aircraft', 'Fluent in multiple languages', 'Can drive heavy vehicles', 'Can program', 'Can repair electronics','Can repair cars or machinery', 'Good at networking', 'Can sew or knit', 'Can operate ship','Can perfectly navigate using a map',     
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
          'Ringworm','Dyslexia','Cancer','Down syndrom','Diabetes','Autism Spectrum Disorder','Asthma','Panic Disorder','Migraine','Bipolar Disorder','Schizophrenia','Epilepsy','Celiac Disease','Irritable Bowel Syndrome (IBS)','Cluster Headache', 'Trigeminal Neuralgia','Cystic Fibrosis','Lupus', "no hands", "no feet", 'no limbs', 'no finger', 'no arm', "no leg", 'cerebral palsy', 'Siamese twin', 'HIV/AIDS', "cadaveric spots", 'Glaucoma',  
          //adult->end
          'PCOS','Infertility', 'Multiple Sclerosis', 'Heart Disease',
          //seniour->end
          'Parkinson\'s Disease', 'Stroke', 'Congestive Heart Failure',         
          //old
          'Alzheimer\'s Disease', 'Emphysema',
        ]},
      ],
      ability: [
        {id:0,prob:2,value:['none']},
        {id:1,prob:1,value:[
          'Can ride a bicycle','Can skateboard or rollerblade','Good at photography', 'Good at DIY projects','Good at drawing','Good at video games', 'Good at sports','Can play a musical instrument', 'Strong social media presence',
        ]},
        {id:2,prob:1,value:[
          'Good communication skills', 'Can work in team', 'Good at problem-solving', 'Good time manager','Leadership skills', 'Adaptable','Good at studying','Can handle stressful situations','Can work under pressure', 'Fast learner', 'Organizational skills', 'Good at public speaking','Good memory','Good at planning and logistics',    
        ]},
        {id:3,prob:1,value:[
          'Can drive', 'Can cook', 'First aid knowledge', 'Gardening skills', 'Can manage finances', 'Independent living skills', 'Not scared of blood','High energy','Quick reflexes','Good at mentoring','Can perfectly swim', 'Can teach others', 'Basic cooking skills', 'Basic gardening skills', 'Know 2 languages', 'Good with kids', 'Good with animals', 'Tech-savvy', 
         ]},
        {id:4,prob:1,value:[          
          'Can operate aircraft', 'Fluent in multiple languages', 'Can drive heavy vehicles', 'Can program', 'Can repair electronics','Can repair cars or machinery', 'Good at networking', 'Can sew or knit', 'Can operate ship','Can perfectly navigate using a map',     
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
    cantBeTogether : {
      health:[
        ['Basic cooking skills', 'Can cook',],
        ['Basic gardening skills','Gardening skills'],
        ['Can drive', 'Can drive heavy vehicles'],
      ]
    }
  },
  envData : {
    country:{
      name:[
        ['Cor', 'Man', 'El', 'Nor', 'San', 'Bel', 'Vil', 'Al', 'Kar', 'Mon','Lan', 'Dar', 'Ter', 'Gal', 'Bar', 'Fen', 'Mar', 'Riv', 'Sol'],
        ['land', 'ia', 'ova', 'ton', 'stan', 'ford', 'burg', 'via', 'gan', 'tan','lia', 'nia', 'don', 'var', 'nia', 'dra', 'dor', 'ria', 'fall', 'mere'],
        ['dor', 'mar', 'an', 'ven', 'lin', 'zor', 'mir', 'tal', 'vin', 'gal','lor', 'ber', 'han', 'ros', 'tin', 'mel', 'nel', 'sal', 'zar', 'ren'],
      ],
      quantity:[
        {start:10,end:15}
      ],
      population:[
        {start:1,end:7}
      ],
    },
    city:{
      name:[
        ['New', 'Port', 'Lake', 'Green', 'River', 'West', 'East', 'North', 'South', 'Fort','Clear', 'Spring', 'Bright', 'Fair', 'Old', 'Rock', 'Grand', 'High', 'Low', 'Sunny'],
        ['ton', 'ville', 'burg', 'ford', 'field', 'view', 'wood', 'dale', 'haven', 'side','bridge', 'worth', 'port', 'grove', 'hill', 'bury', 'land', 'way', 'crest', 'valley'],
      ],
      quantity:[
        {start:5,end:15}
      ],
      population:[
        {start:1,end:7}
      ],
    },

    easy : [
      {prob:4,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Tornado', 'Flood', 'Wildfire', 'Drought', 'Hurricane', 'Landslide',]
        }],
        population: [{start:1,end:3}],
        vegetation: [{start:10,end:25}],
        infrastructure: [{start:5,end:15}],
      }},

      {prob:1,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Virus outbreak','Uprising']
        }],
        population: [{start:5,end:15}],
        vegetation: [{start:1,end:3}],
        infrastructure: [{start:15,end:35}],
      }},
    ],
    medium : [
      {prob:4,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Cyclone', 'Chemical spill', 'Radiation leak','Ozone layer damage',]
        },],
        population: [{start:5,end:15}],
        vegetation: [{start:20,end:50}],
        infrastructure: [{start:15,end:35}],
      }},
      {prob:1,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Earthquake','Infrastructure collapse',]
        }],
        population: [{start:5,end:15}],
        vegetation: [{start:5,end:15}],
        infrastructure: [{start:65,end:85}],
      }},
    ],
    hard : [
      {prob:4,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Volcanic eruption','Tsunami', 'Extreme heat', 'Extreme cold',]
        },],
        population: [{start:55,end:65}],
        vegetation: [{start:85,end:95}],
        infrastructure: [{start:75,end:95}],
      }},
      {prob:1,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Alien invasion','AI rebellion',]
        }],
        population: [{start:65,end:85}],
        vegetation: [{start:15,end:45}],
        infrastructure: [{start:75,end:95}],
      }},
      
    ],
    extreme : [
      {prob:4,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Meteor strike', 'Nuclear disaster',]
        },],
        population: [{start:92,end:98}],
        vegetation: [{start:95,end:100}],
        infrastructure: [{start:95,end:100}],
      }},
      {prob:1,value:{
        catastrophe : [{
          prob:1,epicentr:'country',value:['Zombie apocalypse',]
        }],
        population: [{start:99,end:100}],
        vegetation: [{start:55,end:75}],
        infrastructure: [{start:65,end:85}],
      }},
    ],
   
    difficulty : [
      {start:5,end:24,prob:3,value:'easy'},
      {start:24,end:96,prob:3,value:'medium'},
      {start:96,end:300,prob:3,value:'hard'},
      {start:300,end:1200,prob:2,value:'extreme'}
    ],
    population : [
      {start:300000000,end:1500000000},
    ],

    featureProbability : {
      disease:[
        {prob:3,value:1},
        {prob:2,value:2},
        {prob:1,value:3},
      ],
      // health:[
      //   {prob:3,value:1},
      //   {prob:2,value:2},
      //   {prob:1,value:3},
      // ],
      // health:[
      //   {prob:3,value:1},
      //   {prob:2,value:2},
      //   {prob:1,value:3},
      // ],
    },

    
  },
}


class Game {
  constructor(data) {
    this.data = data;
    this.#initGame();
  }

  #initGame() {
    //console.log("Starting the game...");
    let createEnv = new CreateEnvironment(data.envData);
    this.env = createEnv.env
    let createPlayers = new CreatePlayers(data.userData);
    let mapCountryView = new MapCountryView(this.env);
    //console.log(createEnv.env.text);
    console.log(createPlayers.players);
    
    
    
  }

 
}

let game = new Game(data);