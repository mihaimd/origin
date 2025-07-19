import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Message {
  question: string;
  answers: Answer;
  date: string;
  id: number;
  category: string
}

export interface Answer {
  type: string;
  options: Option[];
}

export interface Option {
  label: string,
  correct: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: any = {
    generic: [
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: true }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2025-06-19',
        id: 0,
        category: "geography"
      },
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: false }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2015-02-03',
        id: 1,
        category: "geography"
      },
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: false }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2015-02-03',
        id: 2,
        category: "geography"
      },
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: false }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2015-02-03',
        id: 3,
        category: "geography"
      },
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: false }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2015-02-03',
        id: 4,
        category: "geography"
      },
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: false }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2015-02-03',
        id: 5,
        category: "geography"
      },
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: false }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2015-02-03',
        id: 6,
        category: "geography"
      },
      {
        question: 'What is the capital of Romania?',
        answers: { options: [{ label: 'Bucharest', correct: false }, { label: 'Budapest', correct: false }, { label: 'Prague', correct: false }, { label: 'Warsaw', correct: false }], type: 'single' },
        date: '2015-02-03',
        id: 7,
        category: "geography"
      }
    ], "game1-4-1": [
      {
        question: 'Which fruit has its seeds on the outside?',
        answers: { options: [{ label: 'Apple', correct: false }, { label: 'Strawberry', correct: true }, { label: 'Kiwi', correct: false }, { label: 'Banana', correct: false }] },
        date: '2025-06-19',
        id: 0,
        category: "biology",
        top: '300px',
        left: '157px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 10
      },
      {
        question: 'Which vitamin is most abundant in oranges?',
        answers: { options: [{ label: 'Vitamin C', correct: true }, { label: 'Vitamin D', correct: false }, { label: 'Vitamin A', correct: false }, { label: 'Vitamin E', correct: false }] },
        date: '2015-02-03',
        id: 1,
        category: "chemistry",
        top: '366px',
        left: '102px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 10
      }, {
        question: 'What vegetable is known for making people cry when chopped?',
        answers: { options: [{ label: 'Potato', correct: false }, { label: 'Onion', correct: true }, { label: 'Celery', correct: false }, { label: 'Turnip', correct: false }] },
        date: '2025-06-19',
        id: 2,
        category: "biology",
        top: '366px',
        left: '203px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 5
      }, {
        question: 'Which part of the plant is a carrot?',
        answers: { options: [{ label: 'Stem', correct: false }, { label: 'Leaf', correct: false }, { label: 'Root', correct: true }, { label: 'Flower', correct: false }] },
        date: '2025-06-19',
        id: 3,
        category: "biology",
        top: '427px',
        left: '56px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which of the following fruits is a true botanical berry?',
        answers: { options: [{ label: 'Banana', correct: true }, { label: 'Raspberry', correct: false }, { label: 'Strawberry', correct: false }, { label: 'Blackberry', correct: false }] },
        date: '2025-06-19',
        id: 4,
        category: "biology",
        top: '427px',
        left: '241px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 15
      }, {
        question: 'Which fruit is known as “the king of fruits” for its strong odor?',
        answers: { options: [{ label: 'Mango', correct: false }, { label: 'Papaya', correct: false }, { label: 'Durian', correct: true }, { label: 'Lychee', correct: false }] },
        date: '2025-06-19',
        id: 5,
        category: "biology",
        top: '492px',
        left: '16px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 15
      }, {
        question: 'Which of these fruits does not grow on a tree?',
        answers: { options: [{ label: 'Mango', correct: false }, { label: 'Peach', correct: false }, { label: 'Apple', correct: false }, { label: 'Strawberry', correct: true }] },
        date: '2025-06-19',
        id: 6,
        category: "biology",
        top: '152px',
        left: '19px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 10
      }, {
        question: 'Botanically speaking, tomatoes are considered:',
        answers: { options: [{ label: 'Vegetables', correct: false }, { label: 'Roots', correct: false }, { label: 'Fruits', correct: true }, { label: 'Tubers', correct: false }] },
        date: '2025-06-19',
        id: 7,
        category: "biology",
        top: '144px',
        left: '295px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 15
      }, {
        question: 'Which fruit has a single large pit inside?',
        answers: { options: [{ label: 'Peach', correct: true }, { label: 'Grape', correct: false }, { label: 'Apple', correct: false }, { label: 'Blueberry', correct: false }] },
        date: '2025-06-19',
        id: 8,
        category: "biology",
        top: '489px',
        left: '271px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 10
      }, {
        question: 'Which of these vegetables is actually a flower?',
        answers: { options: [{ label: 'Lettuce', correct: false }, { label: 'Broccoli', correct: true }, { label: 'Carrot', correct: false }, { label: 'Cucumber', correct: false }] },
        date: '2025-06-19',
        id: 9,
        category: "biology",
        top: '427px',
        left: '153px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which vitamin is most present in dark leafy greens like kale and spinach?',
        answers: { options: [{ label: 'Vitamin A', correct: false }, { label: 'Vitamin K', correct: true }, { label: 'Vitamin C', correct: false }, { label: 'Vitamin E', correct: false }] },
        date: '2025-06-19',
        id: 10,
        category: "biology",
        top: '492px',
        left: '101px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which fruit is the base for traditional guacamole?',
        answers: { options: [{ label: 'Avocado', correct: true }, { label: 'Green Apple', correct: false }, { label: 'Cucumber', correct: false }, { label: 'Zucchini', correct: false }] },
        date: '2025-06-19',
        id: 11,
        category: "biology",
        top: '492px',
        left: '194px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 10
      }, {
        question: 'What part of the corn plant do humans eat?',
        answers: { options: [{ label: 'Stem', correct: false }, { label: 'Root', correct: false }, { label: 'Leaf', correct: false }, { label: 'Seed', correct: true }] },
        date: '2025-06-19',
        id: 12,
        category: "biology",
        top: '563px',
        left: '151px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 15
      }, {
        question: '‘Bartlett’ and ‘Anjou’ are varieties of which fruit?',
        answers: { options: [{ label: 'Apple', correct: false }, { label: 'Plum', correct: false }, { label: 'Pear', correct: true }, { label: 'Cherry', correct: false }] },
        date: '2025-06-19',
        id: 13,
        category: "biology",
        top: '636px',
        left: '151px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which fruit has many small edible seeds and is bright red inside?',
        answers: { options: [{ label: 'Raspberry', correct: false }, { label: 'Cherry', correct: false }, { label: 'Pomegranate', correct: true }, { label: 'Fig', correct: false }] },
        date: '2025-06-19',
        id: 14,
        category: "biology",
        top: '559px',
        left: '295px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 15
      }, {
        question: 'Which fruit contains the enzyme bromelain?',
        answers: { options: [{ label: 'Mango', correct: false }, { label: 'Pineapple', correct: true }, { label: 'Papaya', correct: false }, { label: 'Guava', correct: false }] },
        date: '2025-06-19',
        id: 15,
        category: "biology",
        top: '767px',
        left: '151px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which of the following is a legume?',
        answers: { options: [{ label: 'Pea', correct: true }, { label: 'Carrot', correct: false }, { label: 'Zucchini', correct: false }, { label: 'Spinach', correct: false }] },
        date: '2025-06-19',
        id: 16,
        category: "biology",
        top: '564px',
        left: '77px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 10
      }, {
        question: 'Which fruit floats and is commonly associated with autumn harvests?',
        answers: { options: [{ label: 'Blueberry', correct: false }, { label: 'Plum', correct: false }, { label: 'Cranberry', correct: true }, { label: 'Blackberry', correct: false }] },
        date: '2025-06-19',
        id: 17,
        category: "biology",
        top: '560px',
        left: '225px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 15
      }, {
        question: 'Which of these fruits grows in tight clusters on a vine?',
        answers: { options: [{ label: 'Grapes', correct: true }, { label: 'Peach', correct: false }, { label: 'Banana', correct: false }, { label: 'Orange', correct: false }] },
        date: '2025-06-19',
        id: 18,
        category: "biology",
        top: '563px',
        left: '7px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 10
      }, {
        question: 'Which country produces the most bananas globally?',
        answers: { options: [{ label: 'Brazil', correct: false }, { label: 'Philippines', correct: false }, { label: 'Thailand', correct: false }, { label: 'India', correct: true }] },
        date: '2025-06-19',
        id: 19,
        category: "biology",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }],
    "game1-1-1": [
      {
        question: 'Which civilization built the pyramids of Giza?',
        answers: { options: [{ label: 'Romans', correct: false }, { label: 'Greeks', correct: false }, { label: 'Ancient Egyptians', correct: false }, { label: 'Babylonians', correct: true }] },
        date: '2025-07-14',
        id: 0,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which civilization built the pyramids of Giza?',
        answers: { options: [{ label: 'Romans', correct: false }, { label: 'Greeks', correct: false }, { label: 'Ancient Egyptians', correct: false }, { label: 'Babylonians', correct: true }] },
        date: '2025-07-14',
        id: 1,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which civilization built the pyramids of Giza?',
        answers: { options: [{ label: 'Romans', correct: false }, { label: 'Greeks', correct: false }, { label: 'Ancient Egyptians', correct: true }, { label: 'Babylonians', correct: false }] },
        date: '2025-07-14',
        id: 2,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The city of Machu Picchu is associated with which ancient civilization?',
        answers: { options: [{ label: 'Inca', correct: true }, { label: 'Maya', correct: false }, { label: 'Aztec', correct: false }, { label: 'Olmec', correct: false }] },
        date: '2025-07-14',
        id: 3,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which writing system was used in ancient Mesopotamia?',
        answers: { options: [{ label: 'Hieroglyphics', correct: false }, { label: 'Latin', correct: false }, { label: 'Cuneiform', correct: true }, { label: 'Sanskrit', correct: false }] },
        date: '2025-07-14',
        id: 4,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient civilization was located on the island of Crete?',
        answers: { options: [{ label: 'Mycenaean', correct: false }, { label: 'Minoan', correct: true }, { label: 'Phoenician', correct: false }, { label: 'Sumerian', correct: false }] },
        date: '2025-07-14',
        id: 5,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The Hanging Gardens were said to be part of which ancient city?',
        answers: { options: [{ label: 'Athens', correct: false }, { label: 'Babylon', correct: true }, { label: 'Carthage', correct: false }, { label: 'Nineveh', correct: false }] },
        date: '2025-07-14',
        id: 6,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which South American civilization is known for mysterious lines in the desert?',
        answers: { options: [{ label: 'Aztec', correct: false }, { label: 'Inca', correct: false }, { label: 'Nazca', correct: true }, { label: 'Maya', correct: false }] },
        date: '2025-07-14',
        id: 7,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The Rosetta Stone helped scholars decode which writing system?',
        answers: { options: [{ label: 'Cuneiform', correct: false }, { label: 'Greek', correct: false }, { label: 'Latin', correct: false }, { label: 'Hieroglyphics', correct: true }] },
        date: '2025-07-14',
        id: 8,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient city was destroyed by a volcanic eruption in 79 AD?',
        answers: { options: [{ label: 'Pompeii', correct: true }, { label: 'Troy', correct: false }, { label: 'Carthage', correct: false }, { label: 'Persepolis', correct: false }] },
        date: '2025-07-14',
        id: 9,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What was the main city of the ancient Phoenician civilization?',
        answers: { options: [{ label: 'Tyre', correct: false }, { label: 'Thebes', correct: false }, { label: 'Carthage', correct: true }, { label: 'Ur', correct: false }] },
        date: '2025-07-14',
        id: 10,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient civilization was known for human sacrifice and a calendar system?',
        answers: { options: [{ label: 'Aztec', correct: true }, { label: 'Inca', correct: false }, { label: 'Etruscan', correct: false }, { label: 'Babylonian', correct: false }] },
        date: '2025-07-14',
        id: 11,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which of these is a lost city believed to have sunk into the sea?',
        answers: { options: [{ label: 'Atlantis', correct: true }, { label: 'Alexandria', correct: false }, { label: 'Antioch', correct: false }, { label: 'Abydos', correct: false }] },
        date: '2025-07-14',
        id: 12,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The Mayans primarily lived in which region?',
        answers: { options: [{ label: 'Northern Africa', correct: false }, { label: 'Middle East', correct: false }, { label: 'Central America', correct: true }, { label: 'India', correct: false }] },
        date: '2025-07-14',
        id: 13,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient civilization was known for massive stone heads with flat faces?',
        answers: { options: [{ label: 'Olmec', correct: true }, { label: 'Maya', correct: false }, { label: 'Inca', correct: false }, { label: 'Zapotec', correct: false }] },
        date: '2025-07-14',
        id: 14,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which lost civilization is associated with stone structures at Great Zimbabwe?',
        answers: { options: [{ label: 'Egyptian', correct: false }, { label: 'Shona', correct: true }, { label: 'Nubian', correct: false }, { label: 'Carthaginian', correct: false }] },
        date: '2025-07-14',
        id: 15,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The term “ziggurat” refers to what kind of structure?',
        answers: { options: [{ label: 'Tomb', correct: false }, { label: 'Temple', correct: false }, { label: 'Step Pyramid', correct: true }, { label: 'Fortress', correct: false }] },
        date: '2025-07-14',
        id: 16,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient people are considered the earliest known civilization?',
        answers: { options: [{ label: 'Egyptian', correct: false }, { label: 'Sumerian', correct: true }, { label: 'Indus Valley', correct: false }, { label: 'Greek', correct: false }] },
        date: '2025-07-14',
        id: 17,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient city was known as a center of knowledge and had a great library?',
        answers: { options: [{ label: 'Alexandria', correct: true }, { label: 'Rome', correct: false }, { label: 'Athens', correct: false }, { label: 'Sparta', correct: false }] },
        date: '2025-07-14',
        id: 18,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The Indus Valley Civilization flourished in what is now mostly:',
        answers: { options: [{ label: 'Egypt', correct: false }, { label: 'China', correct: false }, { label: 'Pakistan', correct: true }, { label: 'Iraq', correct: false }] },
        date: '2025-07-14',
        id: 19,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The ancient Etruscans lived in what modern-day country?',
        answers: { options: [{ label: 'Greece', correct: false }, { label: 'Italy', correct: true }, { label: 'Turkey', correct: false }, { label: 'Spain', correct: false }] },
        date: '2025-07-14',
        id: 19,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The mysterious city of Petra is carved into rock in which modern country?',
        answers: { options: [{ label: 'Jordan', correct: true }, { label: 'Iran', correct: false }, { label: 'Egypt', correct: false }, { label: 'Iraq', correct: false }] },
        date: '2025-07-14',
        id: 19,
        category: "lost civilizations",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }
    ],
    "game1-1-2": [
      {
        question: 'Which ancient language was spoken in ancient Rome?',
        answers: { options: [{ label: 'Greek', correct: false }, { label: 'Latin', correct: true }, { label: 'Aramaic', correct: false }, { label: 'Sanskrit', correct: false }] },
        date: '2025-07-14',
        id: 0,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which of the following is a constructed language created by J.R.R. Tolkien?',
        answers: { options: [{ label: 'Quenya', correct: true }, { label: 'Elvish', correct: false }, { label: 'Narnian', correct: false }, { label: 'Old Speech', correct: false }] },
        date: '2025-07-14',
        id: 1,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What is the name of the ancient Egyptian writing system?',
        answers: { options: [{ label: 'Cuneiform', correct: false }, { label: 'Hieroglyphics', correct: true }, { label: 'Latin', correct: false }, { label: 'Linear B', correct: false }] },
        date: '2025-07-14',
        id: 2,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which constructed language was designed to be an international auxiliary language in the late 19th century?',
        answers: { options: [{ label: 'Idish', correct: false }, { label: 'Volapük', correct: false }, { label: 'Esperanto', correct: true }, { label: 'Interlingua', correct: false }] },
        date: '2025-07-14',
        id: 3,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient language was primarily used in Mesopotamia?',
        answers: { options: [{ label: 'Sumerian', correct: true }, { label: 'Latin', correct: false }, { label: 'Sanskrit', correct: false }, { label: 'Hebrew', correct: false }] },
        date: '2025-07-14',
        id: 4,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which of these is a writing system rather than a spoken language?',
        answers: { options: [{ label: 'Greek', correct: false }, { label: 'Cuneiform', correct: true }, { label: 'Latin', correct: false }, { label: 'Aramaic', correct: false }] },
        date: '2025-07-14',
        id: 5,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Who created the Star Trek language Klingon?',
        answers: { options: [{ label: 'J.R.R. Tolkien', correct: false }, { label: 'Isaac Asimov', correct: false }, { label: 'Marc Okrand', correct: true }, { label: 'George Lucas', correct: false }] },
        date: '2025-07-14',
        id: 6,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which constructed language has a grammar book titled "La Fundamento"?',
        answers: { options: [{ label: 'Esperanto', correct: true }, { label: 'Quenya', correct: false }, { label: 'Volapük', correct: false }, { label: 'Sindarin', correct: false }] },
        date: '2025-07-14',
        id: 7,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What ancient language is the root of many Indian languages today?',
        answers: { options: [{ label: 'Tamil', correct: false }, { label: 'Hindi', correct: false }, { label: 'Sanskrit', correct: true }, { label: 'Bengali', correct: false }] },
        date: '2025-07-14',
        id: 8,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient language was spoken by the Babylonians?',
        answers: { options: [{ label: 'Aramaic', correct: false }, { label: 'Akkadian', correct: true }, { label: 'Greek', correct: false }, { label: 'Phoenician', correct: false }] },
        date: '2025-07-14',
        id: 9,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which constructed language was featured prominently in "The Lord of the Rings"?',
        answers: { options: [{ label: 'Dovahzul', correct: false }, { label: 'Sindarin', correct: true }, { label: 'Esperanto', correct: false }, { label: 'Na’vi', correct: false }] },
        date: '2025-07-14',
        id: 10,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which of these languages used a pictographic writing system?',
        answers: { options: [{ label: 'Latin', correct: false }, { label: 'Sanskrit', correct: false }, { label: 'Chinese', correct: true }, { label: 'Greek', correct: false }] },
        date: '2025-07-14',
        id: 11,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient language was used in the Rosetta Stone alongside Greek and Egyptian?',
        answers: { options: [{ label: 'Latin', correct: false }, { label: 'Demotic', correct: true }, { label: 'Phoenician', correct: false }, { label: 'Aramaic', correct: false }] },
        date: '2025-07-14',
        id: 12,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The term “Lingua Franca” originally referred to:',
        answers: { options: [{ label: 'A dialect of ancient Italy', correct: false }, { label: 'A lost Mediterranean tongue', correct: false }, { label: 'A trade language used across Europe', correct: true }, { label: 'An early form of French', correct: false }] },
        date: '2025-07-14',
        id: 13,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which constructed language is used in the movie Avatar?',
        answers: { options: [{ label: 'Klingon', correct: false }, { label: 'Quenya', correct: false }, { label: 'Esperanto', correct: false }, { label: 'Na\'vi', correct: true }] },
        date: '2025-07-14',
        id: 14,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient language is considered sacred in Hinduism?',
        answers: { options: [{ label: 'Pali', correct: false }, { label: 'Sanskrit', correct: true }, { label: 'Tamil', correct: false }, { label: 'Urdu', correct: false }] },
        date: '2025-07-14',
        id: 15,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which constructed language has its own day, celebrated on July 26th?',
        answers: { options: [{ label: 'Esperanto', correct: true }, { label: 'Na’vi', correct: false }, { label: 'Dothraki', correct: false }, { label: 'Elvish', correct: false }] },
        date: '2025-07-14',
        id: 16,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which of the following is an extinct language?',
        answers: { options: [{ label: 'Hebrew', correct: false }, { label: 'Latin', correct: false }, { label: 'Hittite', correct: true }, { label: 'Greek', correct: false }] },
        date: '2025-07-14',
        id: 17,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What is the primary feature of agglutinative languages like Turkish and Finnish?',
        answers: { options: [{ label: 'Lack of grammar rules', correct: false }, { label: 'No definite articles', correct: false }, { label: 'Words formed by joining many morphemes', correct: true }, { label: 'Completely tonal pronunciation', correct: false }] },
        date: '2025-07-14',
        id: 18,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What is the full name of this question series?',
        answers: { options: [{ label: 'Ancient languages', correct: false }, { label: 'Ancient writing systems', correct: false }, { label: 'Ancient and constructed languages', correct: true }, { label: 'Languages of the ancient world', correct: false }] },
        date: '2025-07-14',
        id: 19,
        category: "ancient & constructed languages",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }
    ],
    "game1-1-3": [
      {
        question: 'Which metal was once called "quicksilver"?',
        answers: { options: [{ label: 'Zinc', correct: false }, { label: 'Mercury', correct: true }, { label: 'Tin', correct: false }, { label: 'Lead', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which philosopher was forced to drink hemlock?',
        answers: { options: [{ label: 'Plato', correct: false }, { label: 'Socrates', correct: true }, { label: 'Aristotle', correct: false }, { label: 'Pythagoras', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient device was used to measure star positions?',
        answers: { options: [{ label: 'Sextant', correct: false }, { label: 'Telescope', correct: false }, { label: 'Astrolabe', correct: true }, { label: 'Compass', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What lost library was considered the greatest of the ancient world?',
        answers: { options: [{ label: 'Library of Rome', correct: false }, { label: 'Library of Alexandria', correct: true }, { label: 'Tower of Babel', correct: false }, { label: 'Temple of Solomon', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which civilization invented the concept of zero?',
        answers: { options: [{ label: 'Romans', correct: false }, { label: 'Indians ', correct: true }, { label: 'Chinese', correct: false }, { label: 'Greeks', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What ancient structure used no mortar, yet still stands today in Peru?',
        answers: { options: [{ label: 'Colosseum', correct: false }, { label: 'Machu Picchu', correct: true }, { label: 'Petra', correct: false }, { label: 'Parthenon', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which invention is attributed to Archimedes?',
        answers: { options: [{ label: 'Water clock', correct: false }, { label: 'Compass', correct: false }, { label: 'Screw pump', correct: true }, { label: 'Pendulum', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What ancient manuscript contains unknown language and undeciphered illustrations?',
        answers: { options: [{ label: 'Dead Sea Scrolls', correct: false }, { label: 'Voynich Manuscript', correct: true }, { label: 'Codex Gigas', correct: false }, { label: 'Rosetta Stone', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Alchemy was the early form of which modern science?',
        answers: { options: [{ label: 'Chemistry', correct: true }, { label: 'Biology', correct: false }, { label: 'Astronomy', correct: false }, { label: 'Physics', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which bird was sacred and often mummified in Ancient Egypt?',
        answers: { options: [{ label: 'Owl', correct: false }, { label: 'Falcon', correct: false }, { label: 'Ibis', correct: true }, { label: 'Vulture', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What ancient tool was used to predict eclipses and planetary movements?',
        answers: { options: [{ label: 'Hourglass', correct: false }, { label: 'Antikythera mechanism', correct: true }, { label: 'Gnomon', correct: false }, { label: 'Abacus', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which Greek hero solved the riddle of the Sphinx?',
        answers: { options: [{ label: 'Hercules', correct: false }, { label: 'Achilles', correct: false }, { label: 'Oedipus', correct: true }, { label: 'Odysseus', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which medieval practice involved diagnosing illness by studying urine?',
        answers: { options: [{ label: 'Uroscopy', correct: true }, { label: 'Scrying', correct: false }, { label: 'Humoring', correct: false }, { label: 'Phlebotomy', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Who wrote the mysterious cryptic book “Codex Seraphinianus”?',
        answers: { options: [{ label: 'Luigi Serafini', correct: true }, { label: 'Leonardo da Vinci', correct: false }, { label: 'Jorge Luis Borges', correct: false }, { label: 'H.P. Lovecraft', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'In Norse mythology, what is the name of the world tree?',
        answers: { options: [{ label: 'Niflheim', correct: false }, { label: 'Yggdrasil', correct: true }, { label: 'Midgard', correct: false }, { label: 'Bifrost', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient empire used quipu—knotted strings—to record data?',
        answers: { options: [{ label: 'Inca', correct: true }, { label: 'Maya', correct: false }, { label: 'Aztec', correct: false }, { label: 'Olmec', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The Emerald Tablet is a mystical text from which tradition?',
        answers: { options: [{ label: 'Buddhism', correct: false }, { label: 'Hermeticism', correct: true }, { label: 'Taoism', correct: false }, { label: 'Gnosticism', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient creature was thought to regenerate if cut in half?',
        answers: { options: [{ label: 'Chimera', correct: false }, { label: 'Phoenix', correct: false }, { label: 'Hydra', correct: true }, { label: 'Basilisk', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What ancient writing system is still not fully understood?',
        answers: { options: [{ label: 'Latin', correct: false }, { label: 'Linear A', correct: true }, { label: 'Cuneiform', correct: false }, { label: 'Phoenician', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which forgotten medieval theory stated the body had four vital fluids?',
        answers: { options: [{ label: 'Vitalism', correct: false }, { label: 'Humorism', correct: true }, { label: 'Animism', correct: false }, { label: 'Mechanism', correct: false }] },
        date: '2025-07-18',
        id: 0,
        category: "forgotten knoledge",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }
    ],
    "game1-2-1": [
      {
        question: 'What emotion is most often associated with the color blue in Western cultures?',
        answers: { options: [{ label: 'Joy', correct: false }, { label: 'Anger', correct: false }, { label: 'Sadness', correct: true }, { label: 'Curiosity', correct: false }] },
        date: '2025-07-19',
        id: 0,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which artist painted “The Scream,” expressing existential anxiety?',
        answers: { options: [{ label: 'Pablo Picasso', correct: false }, { label: 'Edvard Munch', correct: true }, { label: 'Claude Monet', correct: false }, { label: 'Vincent van Gogh', correct: false }] },
        date: '2025-07-19',
        id: 1,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'In psychology, which term refers to the ability to understand and manage your own emotions?',
        answers: { options: [{ label: 'Empathy', correct: false }, { label: 'Emotional intelligence', correct: true }, { label: 'Awareness', correct: false }, { label: 'Sympathy', correct: false }] },
        date: '2025-07-19',
        id: 2,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which composer is known for creating deeply emotional music while deaf?',
        answers: { options: [{ label: 'Chopin', correct: false }, { label: 'Beethoven', correct: true }, { label: 'Mozart', correct: false }, { label: 'Bach', correct: false }] },
        date: '2025-07-19',
        id: 3,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which modern art movement focused heavily on emotion and abstract expression?',
        answers: { options: [{ label: 'Cubism', correct: false }, { label: 'Realism ', correct: false }, { label: 'Surrealism', correct: false }, { label: 'Expressionism', correct: true }] },
        date: '2025-07-19',
        id: 4,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Crying in response to a powerful song is most closely tied to which psychological process?',
        answers: { options: [{ label: 'Repression', correct: false }, { label: 'Numbness', correct: false }, { label: 'Catharsis', correct: true }, { label: 'Regression', correct: false }] },
        date: '2025-07-19',
        id: 5,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which literary genre is often used to explore identity and emotional growth?',
        answers: { options: [{ label: 'Coming-of-age', correct: true }, { label: 'Horror', correct: false }, { label: 'Thriller', correct: false }, { label: 'Mystery', correct: false }] },
        date: '2025-07-19',
        id: 6,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which film genre is most associated with emotional transformation?',
        answers: { options: [{ label: 'Sci-fi', correct: false }, { label: 'Action', correct: false }, { label: 'Western', correct: false }, { label: 'Drama', correct: true }] },
        date: '2025-07-19',
        id: 7,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What is the Japanese term for appreciating the fleeting beauty of things?',
        answers: { options: [{ label: 'Ikigai', correct: false }, { label: 'Mono no aware', correct: true }, { label: 'Wabi-sabi', correct: false }, { label: 'Zen', correct: false }] },
        date: '2025-07-19',
        id: 8,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which psychological theory emphasizes childhood in emotional development?',
        answers: { options: [{ label: 'Freudian theory', correct: true }, { label: 'Behaviorism', correct: false }, { label: 'Humanism', correct: false }, { label: 'Existentialism', correct: false }] },
        date: '2025-07-19',
        id: 9,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What is the primary goal of art therapy?',
        answers: { options: [{ label: 'Teach painting', correct: false }, { label: 'Display artwork', correct: false }, { label: 'Heal emotional trauma', correct: true }, { label: 'Improve logic', correct: false }] },
        date: '2025-07-19',
        id: 10,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which emotion is considered “primary” in psychological models?',
        answers: { options: [{ label: 'Embarrassment', correct: false }, { label: 'Fear', correct: true }, { label: 'Jealousy', correct: false }, { label: 'Guilt', correct: false }] },
        date: '2025-07-19',
        id: 11,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The term “aesthetic experience” refers to:',
        answers: { options: [{ label: 'A logic puzzle', correct: false }, { label: 'A sports moment', correct: false }, { label: 'Emotional response to beauty', correct: true }, { label: 'A religious ritual', correct: false }] },
        date: '2025-07-19',
        id: 12,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which famous quote describes the role of art in expressing pain?',
        answers: { options: [{ label: '“Art is a lie that tells the truth.”', correct: false }, { label: '“Beauty is in the eye of the beholder.”', correct: false }, { label: '“Art is the wound turned into light.” ', correct: true }, { label: '“Art imitates life.”', correct: false }] },
        date: '2025-07-19',
        id: 13,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What emotion is often associated with the violin?',
        answers: { options: [{ label: 'Confidence', correct: false }, { label: 'Melancholy', correct: true }, { label: 'Surprise', correct: false }, { label: 'Rage', correct: false }] },
        date: '2025-07-19',
        id: 14,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which author wrote emotionally rich poetry in “Leaves of Grass”?',
        answers: { options: [{ label: 'Walt Whitman', correct: true }, { label: 'Emily Dickinson', correct: false }, { label: 'Sylvia Plath', correct: false }, { label: 'Robert Frost', correct: false }] },
        date: '2025-07-19',
        id: 15,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which psychological disorder is linked to extreme emotional instability?',
        answers: { options: [{ label: 'OCD', correct: false }, { label: 'Borderline Personality', correct: true }, { label: 'Autism', correct: false }, { label: 'Schizoid', correct: false }] },
        date: '2025-07-19',
        id: 16,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which medium is NOT commonly used in expressive therapy?',
        answers: { options: [{ label: 'Geometry', correct: true }, { label: 'Dance', correct: false }, { label: 'Painting', correct: false }, { label: 'Music', correct: false }] },
        date: '2025-07-19',
        id: 17,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which painting technique emphasizes spontaneous brushstrokes and emotion?',
        answers: { options: [{ label: 'Pointillism', correct: false }, { label: 'Renaissance layering', correct: false }, { label: 'Abstract expressionism', correct: true }, { label: 'Crosshatching', correct: false }] },
        date: '2025-07-19',
        id: 18,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient Greek philosopher believed music could influence mood and morality?',
        answers: { options: [{ label: 'Socrates', correct: false }, { label: 'Epicurus', correct: false }, { label: 'Plato', correct: true }, { label: 'Diogenes', correct: false }] },
        date: '2025-07-19',
        id: 19,
        category: "Emotional Intelligence & Expression Through Art",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }
    ],
    "game1-2-2": [
      {
        question: 'Which city’s ruins were lost for centuries until uncovered in 1748?',
        answers: { options: [{ label: 'Carthage', correct: false }, { label: 'Pompeii', correct: true }, { label: 'Troy', correct: false }, { label: 'Knossos', correct: false }] },
        date: '2025-07-19',
        id: 0,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which group is believed to have hidden the Ark of the Covenant?',
        answers: { options: [{ label: 'Romans', correct: false }, { label: 'Israelites', correct: true }, { label: 'Egyptians', correct: false }, { label: 'Persians', correct: false }] },
        date: '2025-07-19',
        id: 1,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Who discovered the tomb of Tutankhamun?',
        answers: { options: [{ label: 'Heinrich Schliemann', correct: false }, { label: 'Champollion', correct: false }, { label: 'Ramses', correct: false }, { label: 'Howard Carter', correct: true }] },
        date: '2025-07-19',
        id: 2,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which secretive group has been rumored to influence world events?',
        answers: { options: [{ label: 'The Illuminati', correct: true }, { label: 'The Templars', correct: false }, { label: 'The Druids', correct: false }, { label: 'The Scribes', correct: false }] },
        date: '2025-07-19',
        id: 3,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which “hidden” empire ruled parts of Central Asia and used coded writing?',
        answers: { options: [{ label: 'Phoenicians', correct: false }, { label: 'Celts ', correct: false }, { label: 'Khazars', correct: true }, { label: 'Huns', correct: false }] },
        date: '2025-07-19',
        id: 4,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which civilization built hidden cliff dwellings in the American Southwest?',
        answers: { options: [{ label: 'Anasazi', correct: true }, { label: 'Apache', correct: false }, { label: 'Inuit', correct: false }, { label: 'Aztec', correct: false }] },
        date: '2025-07-19',
        id: 5,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which secret was vital to cracking WWII German codes?',
        answers: { options: [{ label: 'The Enigma Machine', correct: true }, { label: 'Sputnik', correct: false }, { label: 'Manhattan Project', correct: false }, { label: 'Bletchley Scroll', correct: false }] },
        date: '2025-07-19',
        id: 6,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which island is home to the mysterious Moai statues?',
        answers: { options: [{ label: 'Atlantis', correct: false }, { label: 'Easter Island', correct: true }, { label: 'Cyprus', correct: false }, { label: 'Santorini', correct: false }] },
        date: '2025-07-19',
        id: 7,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What lost city is believed to lie beneath the sea, according to Plato?',
        answers: { options: [{ label: 'Atlantis', correct: true }, { label: 'Babylon', correct: false }, { label: 'Petra', correct: false }, { label: 'Alexandria', correct: false }] },
        date: '2025-07-19',
        id: 8,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What group used a fish symbol to communicate secretly?',
        answers: { options: [{ label: 'Roman soldiers', correct: false }, { label: 'Druids', correct: false }, { label: 'Early Christians', correct: true }, { label: 'Spartans', correct: false }] },
        date: '2025-07-19',
        id: 9,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which Mesoamerican civilization is famous for its cryptic calendar system?',
        answers: { options: [{ label: 'Olmec', correct: false }, { label: 'Maya', correct: true }, { label: 'Aztec', correct: false }, { label: 'Zapotec', correct: false }] },
        date: '2025-07-19',
        id: 10,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The Knights Templar were believed to guard which secret?',
        answers: { options: [{ label: 'A cursed sword', correct: false }, { label: 'Excalibur', correct: false }, { label: 'Book of Shadows', correct: false }, { label: 'Holy Grail', correct: true }] },
        date: '2025-07-19',
        id: 11,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which U.S. document is rumored to have a hidden map on the back?',
        answers: { options: [{ label: 'Bill of Rights', correct: false }, { label: 'Constitution', correct: false }, { label: 'Declaration of Independence', correct: true }, { label: 'Emancipation Proclamation', correct: false }] },
        date: '2025-07-19',
        id: 12,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The “Dead Sea Scrolls” were discovered in:',
        answers: { options: [{ label: 'A pyramid', correct: false }, { label: 'A cave', correct: true }, { label: 'A temple', correct: false }, { label: 'A fortress', correct: false }] },
        date: '2025-07-19',
        id: 13,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which stone structure aligns perfectly with solstices?',
        answers: { options: [{ label: 'Parthenon', correct: false }, { label: 'Stonehenge', correct: true }, { label: 'Acropolis', correct: false }, { label: 'Moai', correct: false }] },
        date: '2025-07-19',
        id: 14,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which “secret language” was used by day laborers during the Great Depression?',
        answers: { options: [{ label: 'Morse Code', correct: false }, { label: 'Pig Latin', correct: false }, { label: 'Hobo Code', correct: true }, { label: 'Navajo Code', correct: false }] },
        date: '2025-07-19',
        id: 15,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'The ancient library in Alexandria was located in which country?',
        answers: { options: [{ label: 'Greece', correct: false }, { label: 'Persia', correct: false }, { label: 'Egypt', correct: true }, { label: 'Italy', correct: false }] },
        date: '2025-07-19',
        id: 16,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What is the term for secret writing systems?',
        answers: { options: [{ label: 'Ciphers', correct: true }, { label: 'Crypts', correct: false }, { label: 'Stenography', correct: false }, { label: 'Manuscripts', correct: false }] },
        date: '2025-07-19',
        id: 17,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'Which ancient bronze artifact, discovered in Greece, is believed to be the world\'s first analog computer?',
        answers: { options: [{ label: 'Delphi Compass', correct: false }, { label: 'Ptolemy Sphere', correct: false }, { label: 'Antikythera Mechanism', correct: true }, { label: 'Samos Chronometer', correct: false }] },
        date: '2025-07-19',
        id: 18,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }, {
        question: 'What secret society was founded in 1717 and has long been the subject of conspiracy theories?',
        answers: { options: [{ label: 'Freemasons ', correct: true }, { label: 'The Illuminated Ones', correct: false }, { label: 'Black Brotherhood', correct: false }, { label: 'Order of the Scroll', correct: false }] },
        date: '2025-07-19',
        id: 19,
        category: "Secrets of History & Hidden Truths",
        top: '10px',
        left: '160px',
        level: 0,
        answtype: 'single',
        format: 'text',
        pts: 20
      }
    ],
    "game1-2-3": [
      {
        "id": 1,
        "question": "What creature's tears are said to heal wounds in mythology?",
        "answers": {
          "options": [
            {
              "label": "Griffin",
              "correct": false
            },
            {
              "label": "Phoenix",
              "correct": true
            },
            {
              "label": "Dragon",
              "correct": false
            },
            {
              "label": "Basilisk",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "100px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 2,
        "question": "What symbol is often used to represent eternity?",
        "answers": {
          "options": [
            {
              "label": "Triangle",
              "correct": false
            },
            {
              "label": "Star",
              "correct": false
            },
            {
              "label": "Ouroboros (snake eating its tail)",
              "correct": true
            },
            {
              "label": "Moon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "120px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3,
        "question": "In Norse mythology, what is the name of the tree that connects all worlds?",
        "answers": {
          "options": [
            {
              "label": "Mj\u00f6lnir",
              "correct": false
            },
            {
              "label": "Midgard",
              "correct": false
            },
            {
              "label": "Yggdrasil",
              "correct": true
            },
            {
              "label": "Fenrir",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "140px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4,
        "question": "What Greek oracle was known for delivering prophecies at Delphi?",
        "answers": {
          "options": [
            {
              "label": "Athena",
              "correct": false
            },
            {
              "label": "Pythia",
              "correct": true
            },
            {
              "label": "Sybil of Cumae",
              "correct": false
            },
            {
              "label": "Cassandra",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "160px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "question": "Which bird is often associated with omens and prophecy in various cultures?",
        "answers": {
          "options": [
            {
              "label": "Raven",
              "correct": true
            },
            {
              "label": "Sparrow",
              "correct": false
            },
            {
              "label": "Eagle",
              "correct": false
            },
            {
              "label": "Dove",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "180px",
        "left": "250px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "question": "What symbol represents rebirth in Egyptian mythology?",
        "answers": {
          "options": [
            {
              "label": "Scarab",
              "correct": true
            },
            {
              "label": "Jackal",
              "correct": false
            },
            {
              "label": "Pyramid",
              "correct": false
            },
            {
              "label": "Falcon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "200px",
        "left": "300px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "question": "What is the meaning of the 'Eye of Horus' in Egyptian lore?",
        "answers": {
          "options": [
            {
              "label": "Destruction",
              "correct": false
            },
            {
              "label": "Protection and healing",
              "correct": true
            },
            {
              "label": "Power and conquest",
              "correct": false
            },
            {
              "label": "Luck and fortune",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "220px",
        "left": "350px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "question": "Which ancient civilization predicted the end of the world in 2012?",
        "answers": {
          "options": [
            {
              "label": "Aztecs",
              "correct": false
            },
            {
              "label": "Maya",
              "correct": true
            },
            {
              "label": "Inca",
              "correct": false
            },
            {
              "label": "Babylonians",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "240px",
        "left": "400px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "question": "What legendary sword was said to be pulled from a stone by King Arthur?",
        "answers": {
          "options": [
            {
              "label": "Durandal",
              "correct": false
            },
            {
              "label": "Masamune",
              "correct": false
            },
            {
              "label": "Hrunting",
              "correct": false
            },
            {
              "label": "Excalibur",
              "correct": true
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "260px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 10,
        "question": "Which creature is a symbol of transformation in many myths?",
        "answers": {
          "options": [
            {
              "label": "Lion",
              "correct": false
            },
            {
              "label": "Butterfly",
              "correct": true
            },
            {
              "label": "Bear",
              "correct": false
            },
            {
              "label": "Goat",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "280px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 11,
        "question": "Which mythological figure is associated with a labyrinth?",
        "answers": {
          "options": [
            {
              "label": "Medusa",
              "correct": false
            },
            {
              "label": "Minotaur",
              "correct": true
            },
            {
              "label": "Chimera",
              "correct": false
            },
            {
              "label": "Cyclops",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "300px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "question": "What does the symbol of the snake represent in many cultures?",
        "answers": {
          "options": [
            {
              "label": "Duality or transformation",
              "correct": true
            },
            {
              "label": "Strength",
              "correct": false
            },
            {
              "label": "Loyalty",
              "correct": false
            },
            {
              "label": "Fertility only",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "320px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "question": "In Greek myth, who was doomed to always tell the truth but never be believed?",
        "answers": {
          "options": [
            {
              "label": "Pandora",
              "correct": false
            },
            {
              "label": "Cassandra",
              "correct": true
            },
            {
              "label": "Hera",
              "correct": false
            },
            {
              "label": "Medea",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "340px",
        "left": "250px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 14,
        "question": "Which plant is commonly associated with prophecy and visions?",
        "answers": {
          "options": [
            {
              "label": "Aloe",
              "correct": false
            },
            {
              "label": "Bay Laurel",
              "correct": true
            },
            {
              "label": "Thyme",
              "correct": false
            },
            {
              "label": "Lavender",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "360px",
        "left": "300px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "question": "The number three is often symbolic of what concept in myths?",
        "answers": {
          "options": [
            {
              "label": "Endings",
              "correct": false
            },
            {
              "label": "Balance and completeness",
              "correct": true
            },
            {
              "label": "War",
              "correct": false
            },
            {
              "label": "Youth",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "380px",
        "left": "350px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "question": "Who guards the gates of the underworld in Greek mythology?",
        "answers": {
          "options": [
            {
              "label": "Hades",
              "correct": false
            },
            {
              "label": "Cerberus",
              "correct": true
            },
            {
              "label": "Hermes",
              "correct": false
            },
            {
              "label": "Charon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "400px",
        "left": "400px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "question": "In Celtic symbolism, what is the Triquetra often associated with?",
        "answers": {
          "options": [
            {
              "label": "Chaos",
              "correct": false
            },
            {
              "label": "Fire",
              "correct": false
            },
            {
              "label": "Life, death, and rebirth",
              "correct": true
            },
            {
              "label": "Darkness",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "420px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "question": "What does a broken sword often symbolize in mythology?",
        "answers": {
          "options": [
            {
              "label": "Lost power or past betrayal",
              "correct": true
            },
            {
              "label": "Courage",
              "correct": false
            },
            {
              "label": "Victory",
              "correct": false
            },
            {
              "label": "Destiny fulfilled",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "440px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 19,
        "question": "Which of these is considered a prophetic tool?",
        "answers": {
          "options": [
            {
              "label": "Chalice",
              "correct": false
            },
            {
              "label": "Crystal ball",
              "correct": true
            },
            {
              "label": "Wand",
              "correct": false
            },
            {
              "label": "Harp",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "460px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 20,
        "question": "In prophecy legends, what usually follows the appearance of a comet?",
        "answers": {
          "options": [
            {
              "label": "Peace",
              "correct": false
            },
            {
              "label": "Great change or disaster",
              "correct": true
            },
            {
              "label": "Fertility",
              "correct": false
            },
            {
              "label": "War victory",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "480px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], 
  }

  constructor() { }

  public getMessages(group?: string): any {
    return this.messages[`game${group}` || 'generic'] || [];
  }

  public getMessageById(chapterId: string, gameId: string, campaignId: string, id: number): Observable<Message> {
    return of(this.messages?.[`game${chapterId}-${gameId}-${campaignId}` || 'generic']?.find((msg: Message) => msg.id === id))
  }
}
