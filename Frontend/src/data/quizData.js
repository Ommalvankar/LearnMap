const quizData = {
  english: {
    title: "English",
    chapters: {
      "chapter-1": {
        title: "Grammar & Vocabulary",
        questions: [
          {
            question: "Which sentence is in the Present Perfect tense?",
            options: [
              "She ate an apple.",
              "She has eaten an apple.",
              "She is eating an apple.",
              "She will eat an apple."
            ],
            answer: "She has eaten an apple."
          },
          {
            question: "Select the correct synonym for 'Abundant'.",
            options: ["Scarce", "Plentiful", "Tiny", "Rare"],
            answer: "Plentiful"
          },
          {
            question: "Which word is a noun?",
            options: ["Beautiful", "Quickly", "School", "Run"],
            answer: "School"
          },
          {
            question: "Choose the correct article: ___ apple a day keeps the doctor away.",
            options: ["A", "An", "The", "No article"],
            answer: "An"
          },
          {
            question: "What is the opposite of 'Ancient'?",
            options: ["Old", "Modern", "Historic", "Past"],
            answer: "Modern"
          }
        ]
      },

      "chapter-2": {
        title: "Tenses",
        questions: [
          {
            question: "Which tense is used in 'She is reading a book'?",
            options: [
              "Simple Present",
              "Present Continuous",
              "Simple Past",
              "Future Tense"
            ],
            answer: "Present Continuous"
          },
          {
            question: "Choose the correct sentence.",
            options: [
              "He go to school.",
              "He goes to school.",
              "He going school.",
              "He gone school."
            ],
            answer: "He goes to school."
          },
          {
            question: "Which sentence is in the Simple Past tense?",
            options: [
              "I play cricket.",
              "I am playing cricket.",
              "I played cricket.",
              "I will play cricket."
            ],
            answer: "I played cricket."
          },
          {
            question: "Which word indicates future tense?",
            options: ["Yesterday", "Now", "Tomorrow", "Today"],
            answer: "Tomorrow"
          },
          {
            question: "Choose the correct form: They ___ football yesterday.",
            options: ["play", "played", "playing", "plays"],
            answer: "played"
          }
        ]
      },

      "chapter-3": {
        title: "Reading & Comprehension",
        questions: [
          {
            question: "What is the main idea of a passage?",
            options: [
              "The smallest detail",
              "The central point",
              "A difficult word",
              "The title only"
            ],
            answer: "The central point"
          },
          {
            question: "A person who writes a book is called a ____.",
            options: ["Reader", "Author", "Editor", "Poet"],
            answer: "Author"
          },
          {
            question: "What does a dictionary provide?",
            options: [
              "Weather reports",
              "Word meanings",
              "News",
              "Maps"
            ],
            answer: "Word meanings"
          },
          {
            question: "Which skill helps us understand a written passage?",
            options: ["Reading", "Drawing", "Singing", "Running"],
            answer: "Reading"
          },
          {
            question: "What is a paragraph?",
            options: [
              "A group of related sentences",
              "A single word",
              "A punctuation mark",
              "A number"
            ],
            answer: "A group of related sentences"
          }
        ]
      }
    }
  },

  mathematics: {
    title: "Mathematics",
    chapters: {
      "chapter-1": {
        title: "Algebra & Arithmetic",
        questions: [
          {
            question: "Solve for x: 2x + 5 = 15",
            options: ["x = 5", "x = 10", "x = 7.5", "x = 2"],
            answer: "x = 5"
          },
          {
            question: "What is the square root of 144?",
            options: ["10", "11", "12", "14"],
            answer: "12"
          },
          {
            question: "What is 15 × 4?",
            options: ["45", "50", "60", "65"],
            answer: "60"
          },
          {
            question: "What is 100 ÷ 5?",
            options: ["10", "15", "20", "25"],
            answer: "20"
          },
          {
            question: "What is 25 + 37?",
            options: ["52", "62", "72", "82"],
            answer: "62"
          }
        ]
      },

      "chapter-2": {
        title: "Geometry",
        questions: [
          {
            question: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            answer: "3"
          },
          {
            question: "How many degrees are in a right angle?",
            options: ["45°", "90°", "180°", "360°"],
            answer: "90°"
          },
          {
            question: "How many sides does a square have?",
            options: ["3", "4", "5", "6"],
            answer: "4"
          },
          {
            question: "What is the distance around a circle called?",
            options: ["Area", "Radius", "Circumference", "Diameter"],
            answer: "Circumference"
          },
          {
            question: "A shape with five sides is called a ____.",
            options: ["Triangle", "Pentagon", "Hexagon", "Square"],
            answer: "Pentagon"
          }
        ]
      },

      "chapter-3": {
        title: "Fractions & Decimals",
        questions: [
          {
            question: "What is 1/2 as a decimal?",
            options: ["0.2", "0.5", "1.2", "2.0"],
            answer: "0.5"
          },
          {
            question: "What is 0.25 as a fraction?",
            options: ["1/2", "1/3", "1/4", "3/4"],
            answer: "1/4"
          },
          {
            question: "What is 3/4 + 1/4?",
            options: ["1/2", "1", "2", "3/4"],
            answer: "1"
          },
          {
            question: "Which is greater?",
            options: ["0.2", "0.5", "0.1", "0.05"],
            answer: "0.5"
          },
          {
            question: "What is 50% as a fraction?",
            options: ["1/2", "1/4", "3/4", "1/5"],
            answer: "1/2"
          }
        ]
      }
    }
  },

  science: {
    title: "Science",
    chapters: {
      "chapter-1": {
        title: "Physics",
        questions: [
          {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            answer: "Newton"
          },
          {
            question: "What is the approximate speed of light in a vacuum?",
            options: [
              "3 × 10^8 m/s",
              "3 × 10^6 m/s",
              "1.5 × 10^8 m/s",
              "300,000 m/s"
            ],
            answer: "3 × 10^8 m/s"
          },
          {
            question: "What force pulls objects toward Earth?",
            options: ["Friction", "Gravity", "Magnetism", "Pressure"],
            answer: "Gravity"
          },
          {
            question: "What is the SI unit of energy?",
            options: ["Newton", "Joule", "Watt", "Meter"],
            answer: "Joule"
          },
          {
            question: "Which device measures temperature?",
            options: ["Barometer", "Thermometer", "Ammeter", "Speedometer"],
            answer: "Thermometer"
          }
        ]
      },

      "chapter-2": {
        title: "Chemistry",
        questions: [
          {
            question: "What is the chemical symbol for Gold?",
            options: ["Ag", "Au", "Fe", "Pb"],
            answer: "Au"
          },
          {
            question: "What is the pH level of pure water at room temperature?",
            options: ["5", "7", "9", "14"],
            answer: "7"
          },
          {
            question: "What is the chemical symbol for Oxygen?",
            options: ["O", "Ox", "C", "H"],
            answer: "O"
          },
          {
            question: "What is H2O commonly known as?",
            options: ["Oxygen", "Hydrogen", "Water", "Salt"],
            answer: "Water"
          },
          {
            question: "Which gas is needed for burning?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
            answer: "Oxygen"
          }
        ]
      },

      "chapter-3": {
        title: "Biology",
        questions: [
          {
            question: "What is the basic unit of life?",
            options: ["Organ", "Cell", "Tissue", "Bone"],
            answer: "Cell"
          },
          {
            question: "Which organ pumps blood through the body?",
            options: ["Lungs", "Brain", "Heart", "Kidney"],
            answer: "Heart"
          },
          {
            question: "Which organ is mainly used for breathing?",
            options: ["Heart", "Lungs", "Stomach", "Liver"],
            answer: "Lungs"
          },
          {
            question: "What process do plants use to make food?",
            options: [
              "Respiration",
              "Photosynthesis",
              "Digestion",
              "Fermentation"
            ],
            answer: "Photosynthesis"
          },
          {
            question: "Which part of a plant absorbs water?",
            options: ["Flower", "Leaf", "Root", "Fruit"],
            answer: "Root"
          }
        ]
      }
    }
  },

  geography: {
    title: "Geography",
    chapters: {
      "chapter-1": {
        title: "Earth & Continents",
        questions: [
          {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            answer: "7"
          },
          {
            question: "Which is the largest continent?",
            options: ["Africa", "Asia", "Europe", "Australia"],
            answer: "Asia"
          },
          {
            question: "Which is the smallest continent?",
            options: ["Europe", "Australia", "Africa", "Asia"],
            answer: "Australia"
          },
          {
            question: "Which planet is known as the Blue Planet?",
            options: ["Mars", "Earth", "Venus", "Jupiter"],
            answer: "Earth"
          },
          {
            question: "What is the shape of Earth approximately?",
            options: ["Flat", "Spherical", "Square", "Triangular"],
            answer: "Spherical"
          }
        ]
      },

      "chapter-2": {
        title: "Oceans & Rivers",
        questions: [
          {
            question: "Which is the largest ocean?",
            options: [
              "Atlantic Ocean",
              "Indian Ocean",
              "Pacific Ocean",
              "Arctic Ocean"
            ],
            answer: "Pacific Ocean"
          },
          {
            question: "Which river is traditionally considered the longest river in India?",
            options: ["Ganga", "Yamuna", "Godavari", "Narmada"],
            answer: "Ganga"
          },
          {
            question: "Which ocean lies south of India?",
            options: [
              "Atlantic Ocean",
              "Indian Ocean",
              "Pacific Ocean",
              "Arctic Ocean"
            ],
            answer: "Indian Ocean"
          },
          {
            question: "A large body of salt water is called a ____.",
            options: ["Lake", "Ocean", "Pond", "River"],
            answer: "Ocean"
          },
          {
            question: "Which river flows through Egypt?",
            options: ["Nile", "Amazon", "Ganga", "Thames"],
            answer: "Nile"
          }
        ]
      },

      "chapter-3": {
        title: "Climate & Weather",
        questions: [
          {
            question: "What instrument measures rainfall?",
            options: ["Thermometer", "Rain gauge", "Barometer", "Compass"],
            answer: "Rain gauge"
          },
          {
            question: "What is the condition of the atmosphere at a particular time called?",
            options: ["Climate", "Weather", "Season", "Environment"],
            answer: "Weather"
          },
          {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: "Nitrogen"
          },
          {
            question: "Which season is usually the hottest in India?",
            options: ["Winter", "Summer", "Monsoon", "Autumn"],
            answer: "Summer"
          },
          {
            question: "What instrument measures temperature?",
            options: ["Thermometer", "Compass", "Rain gauge", "Barometer"],
            answer: "Thermometer"
          }
        ]
      }
    }
  },

  history: {
    title: "History",
    chapters: {
      "chapter-1": {
        title: "Ancient India",
        questions: [
          {
            question: "Which civilization is known for cities like Harappa and Mohenjo-daro?",
            options: [
              "Indus Valley Civilization",
              "Roman Civilization",
              "Greek Civilization",
              "Egyptian Civilization"
            ],
            answer: "Indus Valley Civilization"
          },
          {
            question: "Who founded the Maurya Empire?",
            options: [
              "Ashoka",
              "Chandragupta Maurya",
              "Akbar",
              "Shivaji Maharaj"
            ],
            answer: "Chandragupta Maurya"
          },
          {
            question: "Which ancient Indian emperor promoted Buddhism?",
            options: ["Ashoka", "Akbar", "Babur", "Harsha"],
            answer: "Ashoka"
          },
          {
            question: "The Vedas were written in which ancient language?",
            options: ["Latin", "Sanskrit", "Greek", "Persian"],
            answer: "Sanskrit"
          },
          {
            question: "Nalanda was famous as an ancient ____.",
            options: ["Fort", "University", "Temple", "Market"],
            answer: "University"
          }
        ]
      },

      "chapter-2": {
        title: "Medieval India",
        questions: [
          {
            question: "Who founded the Mughal Empire in India?",
            options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
            answer: "Babur"
          },
          {
            question: "Who built the Taj Mahal?",
            options: ["Akbar", "Shah Jahan", "Babur", "Humayun"],
            answer: "Shah Jahan"
          },
          {
            question: "Who founded the Maratha Empire?",
            options: [
              "Shivaji Maharaj",
              "Akbar",
              "Chandragupta Maurya",
              "Ashoka"
            ],
            answer: "Shivaji Maharaj"
          },
          {
            question: "The Red Fort in Delhi was built by which Mughal emperor?",
            options: ["Akbar", "Shah Jahan", "Babur", "Humayun"],
            answer: "Shah Jahan"
          },
          {
            question: "Who was known as the 'Akbar the Great'?",
            options: [
              "A Mughal emperor",
              "A Maratha king",
              "A British ruler",
              "A Roman emperor"
            ],
            answer: "A Mughal emperor"
          }
        ]
      },

      "chapter-3": {
        title: "Modern India",
        questions: [
          {
            question: "When did India gain independence?",
            options: [
              "15 August 1947",
              "26 January 1950",
              "2 October 1947",
              "15 August 1950"
            ],
            answer: "15 August 1947"
          },
          {
            question: "Who is known as the Father of the Nation in India?",
            options: [
              "Jawaharlal Nehru",
              "Mahatma Gandhi",
              "Sardar Patel",
              "B. R. Ambedkar"
            ],
            answer: "Mahatma Gandhi"
          },
          {
            question: "When did the Constitution of India come into effect?",
            options: [
              "15 August 1947",
              "26 January 1950",
              "2 October 1950",
              "26 November 1949"
            ],
            answer: "26 January 1950"
          },
          {
            question: "Who was the first Prime Minister of independent India?",
            options: [
              "Mahatma Gandhi",
              "Jawaharlal Nehru",
              "Sardar Patel",
              "Rajendra Prasad"
            ],
            answer: "Jawaharlal Nehru"
          },
          {
            question: "Who played an important role in drafting the Indian Constitution?",
            options: [
              "B. R. Ambedkar",
              "Akbar",
              "Shivaji Maharaj",
              "Ashoka"
            ],
            answer: "B. R. Ambedkar"
          }
        ]
      }
    }
  },

  "computer-science": {
    title: "Computer Science",
    chapters: {
      "chapter-1": {
        title: "Computer Basics",
        questions: [
          {
            question: "What is the brain of a computer?",
            options: ["Monitor", "CPU", "Keyboard", "Mouse"],
            answer: "CPU"
          },
          {
            question: "Which device is used to type text?",
            options: ["Mouse", "Keyboard", "Monitor", "Printer"],
            answer: "Keyboard"
          },
          {
            question: "Which device displays information?",
            options: ["Monitor", "Keyboard", "CPU", "Scanner"],
            answer: "Monitor"
          },
          {
            question: "What does CPU stand for?",
            options: [
              "Central Processing Unit",
              "Computer Personal Unit",
              "Central Program Utility",
              "Computer Processing Utility"
            ],
            answer: "Central Processing Unit"
          },
          {
            question: "Which device is used to move the pointer on the screen?",
            options: ["Keyboard", "Mouse", "Printer", "Speaker"],
            answer: "Mouse"
          }
        ]
      },

      "chapter-2": {
        title: "Internet & Networking",
        questions: [
          {
            question: "What does WWW stand for?",
            options: [
              "World Wide Web",
              "World Web Window",
              "Web World Wide",
              "Wide World Web"
            ],
            answer: "World Wide Web"
          },
          {
            question: "Which device connects computers to a network?",
            options: ["Router", "Monitor", "Keyboard", "Printer"],
            answer: "Router"
          },
          {
            question: "What is used to identify a website?",
            options: ["URL", "CPU", "RAM", "USB"],
            answer: "URL"
          },
          {
            question: "Which of these is a web browser?",
            options: ["Chrome", "Windows", "Linux", "Android"],
            answer: "Chrome"
          },
          {
            question: "What does Wi-Fi allow devices to do?",
            options: [
              "Connect wirelessly to a network",
              "Print documents only",
              "Store files only",
              "Turn off the computer"
            ],
            answer: "Connect wirelessly to a network"
          }
        ]
      },

      "chapter-3": {
        title: "Programming Basics",
        questions: [
          {
            question: "Which language is commonly used to create web page structure?",
            options: ["HTML", "Python", "SQL", "C++"],
            answer: "HTML"
          },
          {
            question: "Which language is used for web page styling?",
            options: ["CSS", "HTML", "SQL", "Java"],
            answer: "CSS"
          },
          {
            question: "Which language is commonly used to add interactivity to web pages?",
            options: ["JavaScript", "HTML", "CSS", "SQL"],
            answer: "JavaScript"
          },
          {
            question: "What is a variable used for?",
            options: [
              "Storing data",
              "Printing paper",
              "Connecting electricity",
              "Drawing pictures only"
            ],
            answer: "Storing data"
          },
          {
            question: "Which symbol is commonly used for a comment in JavaScript for a single line?",
            options: ["//", "##", "<!--", "**"],
            answer: "//"
          }
        ]
      }
    }
  }
};

export default quizData;