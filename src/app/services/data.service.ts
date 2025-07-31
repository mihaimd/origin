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
      }
      // , {
      //   question: 'Which civilization built the pyramids of Giza?',
      //   answers: { options: [{ label: 'Romans', correct: false }, { label: 'Greeks', correct: false }, { label: 'Ancient Egyptians', correct: false }, { label: 'Babylonians', correct: true }] },
      //   date: '2025-07-14',
      //   id: 1,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which civilization built the pyramids of Giza?',
      //   answers: { options: [{ label: 'Romans', correct: false }, { label: 'Greeks', correct: false }, { label: 'Ancient Egyptians', correct: true }, { label: 'Babylonians', correct: false }] },
      //   date: '2025-07-14',
      //   id: 2,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The city of Machu Picchu is associated with which ancient civilization?',
      //   answers: { options: [{ label: 'Inca', correct: true }, { label: 'Maya', correct: false }, { label: 'Aztec', correct: false }, { label: 'Olmec', correct: false }] },
      //   date: '2025-07-14',
      //   id: 3,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which writing system was used in ancient Mesopotamia?',
      //   answers: { options: [{ label: 'Hieroglyphics', correct: false }, { label: 'Latin', correct: false }, { label: 'Cuneiform', correct: true }, { label: 'Sanskrit', correct: false }] },
      //   date: '2025-07-14',
      //   id: 4,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient civilization was located on the island of Crete?',
      //   answers: { options: [{ label: 'Mycenaean', correct: false }, { label: 'Minoan', correct: true }, { label: 'Phoenician', correct: false }, { label: 'Sumerian', correct: false }] },
      //   date: '2025-07-14',
      //   id: 5,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The Hanging Gardens were said to be part of which ancient city?',
      //   answers: { options: [{ label: 'Athens', correct: false }, { label: 'Babylon', correct: true }, { label: 'Carthage', correct: false }, { label: 'Nineveh', correct: false }] },
      //   date: '2025-07-14',
      //   id: 6,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which South American civilization is known for mysterious lines in the desert?',
      //   answers: { options: [{ label: 'Aztec', correct: false }, { label: 'Inca', correct: false }, { label: 'Nazca', correct: true }, { label: 'Maya', correct: false }] },
      //   date: '2025-07-14',
      //   id: 7,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The Rosetta Stone helped scholars decode which writing system?',
      //   answers: { options: [{ label: 'Cuneiform', correct: false }, { label: 'Greek', correct: false }, { label: 'Latin', correct: false }, { label: 'Hieroglyphics', correct: true }] },
      //   date: '2025-07-14',
      //   id: 8,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient city was destroyed by a volcanic eruption in 79 AD?',
      //   answers: { options: [{ label: 'Pompeii', correct: true }, { label: 'Troy', correct: false }, { label: 'Carthage', correct: false }, { label: 'Persepolis', correct: false }] },
      //   date: '2025-07-14',
      //   id: 9,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What was the main city of the ancient Phoenician civilization?',
      //   answers: { options: [{ label: 'Tyre', correct: false }, { label: 'Thebes', correct: false }, { label: 'Carthage', correct: true }, { label: 'Ur', correct: false }] },
      //   date: '2025-07-14',
      //   id: 10,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient civilization was known for human sacrifice and a calendar system?',
      //   answers: { options: [{ label: 'Aztec', correct: true }, { label: 'Inca', correct: false }, { label: 'Etruscan', correct: false }, { label: 'Babylonian', correct: false }] },
      //   date: '2025-07-14',
      //   id: 11,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which of these is a lost city believed to have sunk into the sea?',
      //   answers: { options: [{ label: 'Atlantis', correct: true }, { label: 'Alexandria', correct: false }, { label: 'Antioch', correct: false }, { label: 'Abydos', correct: false }] },
      //   date: '2025-07-14',
      //   id: 12,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The Mayans primarily lived in which region?',
      //   answers: { options: [{ label: 'Northern Africa', correct: false }, { label: 'Middle East', correct: false }, { label: 'Central America', correct: true }, { label: 'India', correct: false }] },
      //   date: '2025-07-14',
      //   id: 13,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient civilization was known for massive stone heads with flat faces?',
      //   answers: { options: [{ label: 'Olmec', correct: true }, { label: 'Maya', correct: false }, { label: 'Inca', correct: false }, { label: 'Zapotec', correct: false }] },
      //   date: '2025-07-14',
      //   id: 14,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which lost civilization is associated with stone structures at Great Zimbabwe?',
      //   answers: { options: [{ label: 'Egyptian', correct: false }, { label: 'Shona', correct: true }, { label: 'Nubian', correct: false }, { label: 'Carthaginian', correct: false }] },
      //   date: '2025-07-14',
      //   id: 15,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The term “ziggurat” refers to what kind of structure?',
      //   answers: { options: [{ label: 'Tomb', correct: false }, { label: 'Temple', correct: false }, { label: 'Step Pyramid', correct: true }, { label: 'Fortress', correct: false }] },
      //   date: '2025-07-14',
      //   id: 16,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient people are considered the earliest known civilization?',
      //   answers: { options: [{ label: 'Egyptian', correct: false }, { label: 'Sumerian', correct: true }, { label: 'Indus Valley', correct: false }, { label: 'Greek', correct: false }] },
      //   date: '2025-07-14',
      //   id: 17,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient city was known as a center of knowledge and had a great library?',
      //   answers: { options: [{ label: 'Alexandria', correct: true }, { label: 'Rome', correct: false }, { label: 'Athens', correct: false }, { label: 'Sparta', correct: false }] },
      //   date: '2025-07-14',
      //   id: 18,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The Indus Valley Civilization flourished in what is now mostly:',
      //   answers: { options: [{ label: 'Egypt', correct: false }, { label: 'China', correct: false }, { label: 'Pakistan', correct: true }, { label: 'Iraq', correct: false }] },
      //   date: '2025-07-14',
      //   id: 19,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The ancient Etruscans lived in what modern-day country?',
      //   answers: { options: [{ label: 'Greece', correct: false }, { label: 'Italy', correct: true }, { label: 'Turkey', correct: false }, { label: 'Spain', correct: false }] },
      //   date: '2025-07-14',
      //   id: 19,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The mysterious city of Petra is carved into rock in which modern country?',
      //   answers: { options: [{ label: 'Jordan', correct: true }, { label: 'Iran', correct: false }, { label: 'Egypt', correct: false }, { label: 'Iraq', correct: false }] },
      //   date: '2025-07-14',
      //   id: 19,
      //   category: "lost civilizations",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }
    ],
    "game1-1-2": [
      // {
      //   question: 'Which ancient language was spoken in ancient Rome?',
      //   answers: { options: [{ label: 'Greek', correct: false }, { label: 'Latin', correct: true }, { label: 'Aramaic', correct: false }, { label: 'Sanskrit', correct: false }] },
      //   date: '2025-07-14',
      //   id: 0,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which of the following is a constructed language created by J.R.R. Tolkien?',
      //   answers: { options: [{ label: 'Quenya', correct: true }, { label: 'Elvish', correct: false }, { label: 'Narnian', correct: false }, { label: 'Old Speech', correct: false }] },
      //   date: '2025-07-14',
      //   id: 1,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What is the name of the ancient Egyptian writing system?',
      //   answers: { options: [{ label: 'Cuneiform', correct: false }, { label: 'Hieroglyphics', correct: true }, { label: 'Latin', correct: false }, { label: 'Linear B', correct: false }] },
      //   date: '2025-07-14',
      //   id: 2,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which constructed language was designed to be an international auxiliary language in the late 19th century?',
      //   answers: { options: [{ label: 'Idish', correct: false }, { label: 'Volapük', correct: false }, { label: 'Esperanto', correct: true }, { label: 'Interlingua', correct: false }] },
      //   date: '2025-07-14',
      //   id: 3,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient language was primarily used in Mesopotamia?',
      //   answers: { options: [{ label: 'Sumerian', correct: true }, { label: 'Latin', correct: false }, { label: 'Sanskrit', correct: false }, { label: 'Hebrew', correct: false }] },
      //   date: '2025-07-14',
      //   id: 4,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which of these is a writing system rather than a spoken language?',
      //   answers: { options: [{ label: 'Greek', correct: false }, { label: 'Cuneiform', correct: true }, { label: 'Latin', correct: false }, { label: 'Aramaic', correct: false }] },
      //   date: '2025-07-14',
      //   id: 5,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Who created the Star Trek language Klingon?',
      //   answers: { options: [{ label: 'J.R.R. Tolkien', correct: false }, { label: 'Isaac Asimov', correct: false }, { label: 'Marc Okrand', correct: true }, { label: 'George Lucas', correct: false }] },
      //   date: '2025-07-14',
      //   id: 6,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which constructed language has a grammar book titled "La Fundamento"?',
      //   answers: { options: [{ label: 'Esperanto', correct: true }, { label: 'Quenya', correct: false }, { label: 'Volapük', correct: false }, { label: 'Sindarin', correct: false }] },
      //   date: '2025-07-14',
      //   id: 7,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What ancient language is the root of many Indian languages today?',
      //   answers: { options: [{ label: 'Tamil', correct: false }, { label: 'Hindi', correct: false }, { label: 'Sanskrit', correct: true }, { label: 'Bengali', correct: false }] },
      //   date: '2025-07-14',
      //   id: 8,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient language was spoken by the Babylonians?',
      //   answers: { options: [{ label: 'Aramaic', correct: false }, { label: 'Akkadian', correct: true }, { label: 'Greek', correct: false }, { label: 'Phoenician', correct: false }] },
      //   date: '2025-07-14',
      //   id: 9,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which constructed language was featured prominently in "The Lord of the Rings"?',
      //   answers: { options: [{ label: 'Dovahzul', correct: false }, { label: 'Sindarin', correct: true }, { label: 'Esperanto', correct: false }, { label: 'Na’vi', correct: false }] },
      //   date: '2025-07-14',
      //   id: 10,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which of these languages used a pictographic writing system?',
      //   answers: { options: [{ label: 'Latin', correct: false }, { label: 'Sanskrit', correct: false }, { label: 'Chinese', correct: true }, { label: 'Greek', correct: false }] },
      //   date: '2025-07-14',
      //   id: 11,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient language was used in the Rosetta Stone alongside Greek and Egyptian?',
      //   answers: { options: [{ label: 'Latin', correct: false }, { label: 'Demotic', correct: true }, { label: 'Phoenician', correct: false }, { label: 'Aramaic', correct: false }] },
      //   date: '2025-07-14',
      //   id: 12,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The term “Lingua Franca” originally referred to:',
      //   answers: { options: [{ label: 'A dialect of ancient Italy', correct: false }, { label: 'A lost Mediterranean tongue', correct: false }, { label: 'A trade language used across Europe', correct: true }, { label: 'An early form of French', correct: false }] },
      //   date: '2025-07-14',
      //   id: 13,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which constructed language is used in the movie Avatar?',
      //   answers: { options: [{ label: 'Klingon', correct: false }, { label: 'Quenya', correct: false }, { label: 'Esperanto', correct: false }, { label: 'Na\'vi', correct: true }] },
      //   date: '2025-07-14',
      //   id: 14,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient language is considered sacred in Hinduism?',
      //   answers: { options: [{ label: 'Pali', correct: false }, { label: 'Sanskrit', correct: true }, { label: 'Tamil', correct: false }, { label: 'Urdu', correct: false }] },
      //   date: '2025-07-14',
      //   id: 15,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which constructed language has its own day, celebrated on July 26th?',
      //   answers: { options: [{ label: 'Esperanto', correct: true }, { label: 'Na’vi', correct: false }, { label: 'Dothraki', correct: false }, { label: 'Elvish', correct: false }] },
      //   date: '2025-07-14',
      //   id: 16,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which of the following is an extinct language?',
      //   answers: { options: [{ label: 'Hebrew', correct: false }, { label: 'Latin', correct: false }, { label: 'Hittite', correct: true }, { label: 'Greek', correct: false }] },
      //   date: '2025-07-14',
      //   id: 17,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What is the primary feature of agglutinative languages like Turkish and Finnish?',
      //   answers: { options: [{ label: 'Lack of grammar rules', correct: false }, { label: 'No definite articles', correct: false }, { label: 'Words formed by joining many morphemes', correct: true }, { label: 'Completely tonal pronunciation', correct: false }] },
      //   date: '2025-07-14',
      //   id: 18,
      //   category: "ancient & constructed languages",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, 
      {
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
      }
      // , {
      //   question: 'Which philosopher was forced to drink hemlock?',
      //   answers: { options: [{ label: 'Plato', correct: false }, { label: 'Socrates', correct: true }, { label: 'Aristotle', correct: false }, { label: 'Pythagoras', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient device was used to measure star positions?',
      //   answers: { options: [{ label: 'Sextant', correct: false }, { label: 'Telescope', correct: false }, { label: 'Astrolabe', correct: true }, { label: 'Compass', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What lost library was considered the greatest of the ancient world?',
      //   answers: { options: [{ label: 'Library of Rome', correct: false }, { label: 'Library of Alexandria', correct: true }, { label: 'Tower of Babel', correct: false }, { label: 'Temple of Solomon', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which civilization invented the concept of zero?',
      //   answers: { options: [{ label: 'Romans', correct: false }, { label: 'Indians ', correct: true }, { label: 'Chinese', correct: false }, { label: 'Greeks', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What ancient structure used no mortar, yet still stands today in Peru?',
      //   answers: { options: [{ label: 'Colosseum', correct: false }, { label: 'Machu Picchu', correct: true }, { label: 'Petra', correct: false }, { label: 'Parthenon', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which invention is attributed to Archimedes?',
      //   answers: { options: [{ label: 'Water clock', correct: false }, { label: 'Compass', correct: false }, { label: 'Screw pump', correct: true }, { label: 'Pendulum', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What ancient manuscript contains unknown language and undeciphered illustrations?',
      //   answers: { options: [{ label: 'Dead Sea Scrolls', correct: false }, { label: 'Voynich Manuscript', correct: true }, { label: 'Codex Gigas', correct: false }, { label: 'Rosetta Stone', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Alchemy was the early form of which modern science?',
      //   answers: { options: [{ label: 'Chemistry', correct: true }, { label: 'Biology', correct: false }, { label: 'Astronomy', correct: false }, { label: 'Physics', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which bird was sacred and often mummified in Ancient Egypt?',
      //   answers: { options: [{ label: 'Owl', correct: false }, { label: 'Falcon', correct: false }, { label: 'Ibis', correct: true }, { label: 'Vulture', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What ancient tool was used to predict eclipses and planetary movements?',
      //   answers: { options: [{ label: 'Hourglass', correct: false }, { label: 'Antikythera mechanism', correct: true }, { label: 'Gnomon', correct: false }, { label: 'Abacus', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which Greek hero solved the riddle of the Sphinx?',
      //   answers: { options: [{ label: 'Hercules', correct: false }, { label: 'Achilles', correct: false }, { label: 'Oedipus', correct: true }, { label: 'Odysseus', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which medieval practice involved diagnosing illness by studying urine?',
      //   answers: { options: [{ label: 'Uroscopy', correct: true }, { label: 'Scrying', correct: false }, { label: 'Humoring', correct: false }, { label: 'Phlebotomy', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Who wrote the mysterious cryptic book “Codex Seraphinianus”?',
      //   answers: { options: [{ label: 'Luigi Serafini', correct: true }, { label: 'Leonardo da Vinci', correct: false }, { label: 'Jorge Luis Borges', correct: false }, { label: 'H.P. Lovecraft', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'In Norse mythology, what is the name of the world tree?',
      //   answers: { options: [{ label: 'Niflheim', correct: false }, { label: 'Yggdrasil', correct: true }, { label: 'Midgard', correct: false }, { label: 'Bifrost', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient empire used quipu—knotted strings—to record data?',
      //   answers: { options: [{ label: 'Inca', correct: true }, { label: 'Maya', correct: false }, { label: 'Aztec', correct: false }, { label: 'Olmec', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The Emerald Tablet is a mystical text from which tradition?',
      //   answers: { options: [{ label: 'Buddhism', correct: false }, { label: 'Hermeticism', correct: true }, { label: 'Taoism', correct: false }, { label: 'Gnosticism', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient creature was thought to regenerate if cut in half?',
      //   answers: { options: [{ label: 'Chimera', correct: false }, { label: 'Phoenix', correct: false }, { label: 'Hydra', correct: true }, { label: 'Basilisk', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What ancient writing system is still not fully understood?',
      //   answers: { options: [{ label: 'Latin', correct: false }, { label: 'Linear A', correct: true }, { label: 'Cuneiform', correct: false }, { label: 'Phoenician', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which forgotten medieval theory stated the body had four vital fluids?',
      //   answers: { options: [{ label: 'Vitalism', correct: false }, { label: 'Humorism', correct: true }, { label: 'Animism', correct: false }, { label: 'Mechanism', correct: false }] },
      //   date: '2025-07-18',
      //   id: 0,
      //   category: "forgotten knoledge",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }
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
      }
      // , {
      //   question: 'Which artist painted “The Scream,” expressing existential anxiety?',
      //   answers: { options: [{ label: 'Pablo Picasso', correct: false }, { label: 'Edvard Munch', correct: true }, { label: 'Claude Monet', correct: false }, { label: 'Vincent van Gogh', correct: false }] },
      //   date: '2025-07-19',
      //   id: 1,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'In psychology, which term refers to the ability to understand and manage your own emotions?',
      //   answers: { options: [{ label: 'Empathy', correct: false }, { label: 'Emotional intelligence', correct: true }, { label: 'Awareness', correct: false }, { label: 'Sympathy', correct: false }] },
      //   date: '2025-07-19',
      //   id: 2,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which composer is known for creating deeply emotional music while deaf?',
      //   answers: { options: [{ label: 'Chopin', correct: false }, { label: 'Beethoven', correct: true }, { label: 'Mozart', correct: false }, { label: 'Bach', correct: false }] },
      //   date: '2025-07-19',
      //   id: 3,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which modern art movement focused heavily on emotion and abstract expression?',
      //   answers: { options: [{ label: 'Cubism', correct: false }, { label: 'Realism ', correct: false }, { label: 'Surrealism', correct: false }, { label: 'Expressionism', correct: true }] },
      //   date: '2025-07-19',
      //   id: 4,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Crying in response to a powerful song is most closely tied to which psychological process?',
      //   answers: { options: [{ label: 'Repression', correct: false }, { label: 'Numbness', correct: false }, { label: 'Catharsis', correct: true }, { label: 'Regression', correct: false }] },
      //   date: '2025-07-19',
      //   id: 5,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which literary genre is often used to explore identity and emotional growth?',
      //   answers: { options: [{ label: 'Coming-of-age', correct: true }, { label: 'Horror', correct: false }, { label: 'Thriller', correct: false }, { label: 'Mystery', correct: false }] },
      //   date: '2025-07-19',
      //   id: 6,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which film genre is most associated with emotional transformation?',
      //   answers: { options: [{ label: 'Sci-fi', correct: false }, { label: 'Action', correct: false }, { label: 'Western', correct: false }, { label: 'Drama', correct: true }] },
      //   date: '2025-07-19',
      //   id: 7,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What is the Japanese term for appreciating the fleeting beauty of things?',
      //   answers: { options: [{ label: 'Ikigai', correct: false }, { label: 'Mono no aware', correct: true }, { label: 'Wabi-sabi', correct: false }, { label: 'Zen', correct: false }] },
      //   date: '2025-07-19',
      //   id: 8,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which psychological theory emphasizes childhood in emotional development?',
      //   answers: { options: [{ label: 'Freudian theory', correct: true }, { label: 'Behaviorism', correct: false }, { label: 'Humanism', correct: false }, { label: 'Existentialism', correct: false }] },
      //   date: '2025-07-19',
      //   id: 9,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What is the primary goal of art therapy?',
      //   answers: { options: [{ label: 'Teach painting', correct: false }, { label: 'Display artwork', correct: false }, { label: 'Heal emotional trauma', correct: true }, { label: 'Improve logic', correct: false }] },
      //   date: '2025-07-19',
      //   id: 10,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which emotion is considered “primary” in psychological models?',
      //   answers: { options: [{ label: 'Embarrassment', correct: false }, { label: 'Fear', correct: true }, { label: 'Jealousy', correct: false }, { label: 'Guilt', correct: false }] },
      //   date: '2025-07-19',
      //   id: 11,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The term “aesthetic experience” refers to:',
      //   answers: { options: [{ label: 'A logic puzzle', correct: false }, { label: 'A sports moment', correct: false }, { label: 'Emotional response to beauty', correct: true }, { label: 'A religious ritual', correct: false }] },
      //   date: '2025-07-19',
      //   id: 12,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which famous quote describes the role of art in expressing pain?',
      //   answers: { options: [{ label: '“Art is a lie that tells the truth.”', correct: false }, { label: '“Beauty is in the eye of the beholder.”', correct: false }, { label: '“Art is the wound turned into light.” ', correct: true }, { label: '“Art imitates life.”', correct: false }] },
      //   date: '2025-07-19',
      //   id: 13,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What emotion is often associated with the violin?',
      //   answers: { options: [{ label: 'Confidence', correct: false }, { label: 'Melancholy', correct: true }, { label: 'Surprise', correct: false }, { label: 'Rage', correct: false }] },
      //   date: '2025-07-19',
      //   id: 14,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which author wrote emotionally rich poetry in “Leaves of Grass”?',
      //   answers: { options: [{ label: 'Walt Whitman', correct: true }, { label: 'Emily Dickinson', correct: false }, { label: 'Sylvia Plath', correct: false }, { label: 'Robert Frost', correct: false }] },
      //   date: '2025-07-19',
      //   id: 15,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which psychological disorder is linked to extreme emotional instability?',
      //   answers: { options: [{ label: 'OCD', correct: false }, { label: 'Borderline Personality', correct: true }, { label: 'Autism', correct: false }, { label: 'Schizoid', correct: false }] },
      //   date: '2025-07-19',
      //   id: 16,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which medium is NOT commonly used in expressive therapy?',
      //   answers: { options: [{ label: 'Geometry', correct: true }, { label: 'Dance', correct: false }, { label: 'Painting', correct: false }, { label: 'Music', correct: false }] },
      //   date: '2025-07-19',
      //   id: 17,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which painting technique emphasizes spontaneous brushstrokes and emotion?',
      //   answers: { options: [{ label: 'Pointillism', correct: false }, { label: 'Renaissance layering', correct: false }, { label: 'Abstract expressionism', correct: true }, { label: 'Crosshatching', correct: false }] },
      //   date: '2025-07-19',
      //   id: 18,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient Greek philosopher believed music could influence mood and morality?',
      //   answers: { options: [{ label: 'Socrates', correct: false }, { label: 'Epicurus', correct: false }, { label: 'Plato', correct: true }, { label: 'Diogenes', correct: false }] },
      //   date: '2025-07-19',
      //   id: 19,
      //   category: "Emotional Intelligence & Expression Through Art",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }
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
      }
      // , {
      //   question: 'Which group is believed to have hidden the Ark of the Covenant?',
      //   answers: { options: [{ label: 'Romans', correct: false }, { label: 'Israelites', correct: true }, { label: 'Egyptians', correct: false }, { label: 'Persians', correct: false }] },
      //   date: '2025-07-19',
      //   id: 1,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Who discovered the tomb of Tutankhamun?',
      //   answers: { options: [{ label: 'Heinrich Schliemann', correct: false }, { label: 'Champollion', correct: false }, { label: 'Ramses', correct: false }, { label: 'Howard Carter', correct: true }] },
      //   date: '2025-07-19',
      //   id: 2,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which secretive group has been rumored to influence world events?',
      //   answers: { options: [{ label: 'The Illuminati', correct: true }, { label: 'The Templars', correct: false }, { label: 'The Druids', correct: false }, { label: 'The Scribes', correct: false }] },
      //   date: '2025-07-19',
      //   id: 3,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which “hidden” empire ruled parts of Central Asia and used coded writing?',
      //   answers: { options: [{ label: 'Phoenicians', correct: false }, { label: 'Celts ', correct: false }, { label: 'Khazars', correct: true }, { label: 'Huns', correct: false }] },
      //   date: '2025-07-19',
      //   id: 4,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which civilization built hidden cliff dwellings in the American Southwest?',
      //   answers: { options: [{ label: 'Anasazi', correct: true }, { label: 'Apache', correct: false }, { label: 'Inuit', correct: false }, { label: 'Aztec', correct: false }] },
      //   date: '2025-07-19',
      //   id: 5,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which secret was vital to cracking WWII German codes?',
      //   answers: { options: [{ label: 'The Enigma Machine', correct: true }, { label: 'Sputnik', correct: false }, { label: 'Manhattan Project', correct: false }, { label: 'Bletchley Scroll', correct: false }] },
      //   date: '2025-07-19',
      //   id: 6,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which island is home to the mysterious Moai statues?',
      //   answers: { options: [{ label: 'Atlantis', correct: false }, { label: 'Easter Island', correct: true }, { label: 'Cyprus', correct: false }, { label: 'Santorini', correct: false }] },
      //   date: '2025-07-19',
      //   id: 7,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What lost city is believed to lie beneath the sea, according to Plato?',
      //   answers: { options: [{ label: 'Atlantis', correct: true }, { label: 'Babylon', correct: false }, { label: 'Petra', correct: false }, { label: 'Alexandria', correct: false }] },
      //   date: '2025-07-19',
      //   id: 8,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What group used a fish symbol to communicate secretly?',
      //   answers: { options: [{ label: 'Roman soldiers', correct: false }, { label: 'Druids', correct: false }, { label: 'Early Christians', correct: true }, { label: 'Spartans', correct: false }] },
      //   date: '2025-07-19',
      //   id: 9,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which Mesoamerican civilization is famous for its cryptic calendar system?',
      //   answers: { options: [{ label: 'Olmec', correct: false }, { label: 'Maya', correct: true }, { label: 'Aztec', correct: false }, { label: 'Zapotec', correct: false }] },
      //   date: '2025-07-19',
      //   id: 10,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The Knights Templar were believed to guard which secret?',
      //   answers: { options: [{ label: 'A cursed sword', correct: false }, { label: 'Excalibur', correct: false }, { label: 'Book of Shadows', correct: false }, { label: 'Holy Grail', correct: true }] },
      //   date: '2025-07-19',
      //   id: 11,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which U.S. document is rumored to have a hidden map on the back?',
      //   answers: { options: [{ label: 'Bill of Rights', correct: false }, { label: 'Constitution', correct: false }, { label: 'Declaration of Independence', correct: true }, { label: 'Emancipation Proclamation', correct: false }] },
      //   date: '2025-07-19',
      //   id: 12,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The “Dead Sea Scrolls” were discovered in:',
      //   answers: { options: [{ label: 'A pyramid', correct: false }, { label: 'A cave', correct: true }, { label: 'A temple', correct: false }, { label: 'A fortress', correct: false }] },
      //   date: '2025-07-19',
      //   id: 13,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which stone structure aligns perfectly with solstices?',
      //   answers: { options: [{ label: 'Parthenon', correct: false }, { label: 'Stonehenge', correct: true }, { label: 'Acropolis', correct: false }, { label: 'Moai', correct: false }] },
      //   date: '2025-07-19',
      //   id: 14,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which “secret language” was used by day laborers during the Great Depression?',
      //   answers: { options: [{ label: 'Morse Code', correct: false }, { label: 'Pig Latin', correct: false }, { label: 'Hobo Code', correct: true }, { label: 'Navajo Code', correct: false }] },
      //   date: '2025-07-19',
      //   id: 15,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'The ancient library in Alexandria was located in which country?',
      //   answers: { options: [{ label: 'Greece', correct: false }, { label: 'Persia', correct: false }, { label: 'Egypt', correct: true }, { label: 'Italy', correct: false }] },
      //   date: '2025-07-19',
      //   id: 16,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What is the term for secret writing systems?',
      //   answers: { options: [{ label: 'Ciphers', correct: true }, { label: 'Crypts', correct: false }, { label: 'Stenography', correct: false }, { label: 'Manuscripts', correct: false }] },
      //   date: '2025-07-19',
      //   id: 17,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'Which ancient bronze artifact, discovered in Greece, is believed to be the world\'s first analog computer?',
      //   answers: { options: [{ label: 'Delphi Compass', correct: false }, { label: 'Ptolemy Sphere', correct: false }, { label: 'Antikythera Mechanism', correct: true }, { label: 'Samos Chronometer', correct: false }] },
      //   date: '2025-07-19',
      //   id: 18,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }, {
      //   question: 'What secret society was founded in 1717 and has long been the subject of conspiracy theories?',
      //   answers: { options: [{ label: 'Freemasons ', correct: true }, { label: 'The Illuminated Ones', correct: false }, { label: 'Black Brotherhood', correct: false }, { label: 'Order of the Scroll', correct: false }] },
      //   date: '2025-07-19',
      //   id: 19,
      //   category: "Secrets of History & Hidden Truths",
      //   top: '10px',
      //   left: '160px',
      //   level: 0,
      //   answtype: 'single',
      //   format: 'text',
      //   pts: 20
      // }
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
      }
      // ,
      // {
      //   "id": 2,
      //   "question": "What symbol is often used to represent eternity?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Triangle",
      //         "correct": false
      //       },
      //       {
      //         "label": "Star",
      //         "correct": false
      //       },
      //       {
      //         "label": "Ouroboros (snake eating its tail)",
      //         "correct": true
      //       },
      //       {
      //         "label": "Moon",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "120px",
      //   "left": "100px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 40
      // },
      // {
      //   "id": 3,
      //   "question": "In Norse mythology, what is the name of the tree that connects all worlds?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Mj\u00f6lnir",
      //         "correct": false
      //       },
      //       {
      //         "label": "Midgard",
      //         "correct": false
      //       },
      //       {
      //         "label": "Yggdrasil",
      //         "correct": true
      //       },
      //       {
      //         "label": "Fenrir",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "140px",
      //   "left": "150px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 40
      // },
      // {
      //   "id": 4,
      //   "question": "What Greek oracle was known for delivering prophecies at Delphi?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Athena",
      //         "correct": false
      //       },
      //       {
      //         "label": "Pythia",
      //         "correct": true
      //       },
      //       {
      //         "label": "Sybil of Cumae",
      //         "correct": false
      //       },
      //       {
      //         "label": "Cassandra",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "160px",
      //   "left": "200px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 5,
      //   "question": "Which bird is often associated with omens and prophecy in various cultures?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Raven",
      //         "correct": true
      //       },
      //       {
      //         "label": "Sparrow",
      //         "correct": false
      //       },
      //       {
      //         "label": "Eagle",
      //         "correct": false
      //       },
      //       {
      //         "label": "Dove",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "180px",
      //   "left": "250px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 6,
      //   "question": "What symbol represents rebirth in Egyptian mythology?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Scarab",
      //         "correct": true
      //       },
      //       {
      //         "label": "Jackal",
      //         "correct": false
      //       },
      //       {
      //         "label": "Pyramid",
      //         "correct": false
      //       },
      //       {
      //         "label": "Falcon",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "200px",
      //   "left": "300px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 7,
      //   "question": "What is the meaning of the 'Eye of Horus' in Egyptian lore?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Destruction",
      //         "correct": false
      //       },
      //       {
      //         "label": "Protection and healing",
      //         "correct": true
      //       },
      //       {
      //         "label": "Power and conquest",
      //         "correct": false
      //       },
      //       {
      //         "label": "Luck and fortune",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "220px",
      //   "left": "350px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 20
      // },
      // {
      //   "id": 8,
      //   "question": "Which ancient civilization predicted the end of the world in 2012?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Aztecs",
      //         "correct": false
      //       },
      //       {
      //         "label": "Maya",
      //         "correct": true
      //       },
      //       {
      //         "label": "Inca",
      //         "correct": false
      //       },
      //       {
      //         "label": "Babylonians",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "240px",
      //   "left": "400px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 9,
      //   "question": "What legendary sword was said to be pulled from a stone by King Arthur?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Durandal",
      //         "correct": false
      //       },
      //       {
      //         "label": "Masamune",
      //         "correct": false
      //       },
      //       {
      //         "label": "Hrunting",
      //         "correct": false
      //       },
      //       {
      //         "label": "Excalibur",
      //         "correct": true
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "260px",
      //   "left": "50px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 20
      // },
      // {
      //   "id": 10,
      //   "question": "Which creature is a symbol of transformation in many myths?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Lion",
      //         "correct": false
      //       },
      //       {
      //         "label": "Butterfly",
      //         "correct": true
      //       },
      //       {
      //         "label": "Bear",
      //         "correct": false
      //       },
      //       {
      //         "label": "Goat",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "280px",
      //   "left": "100px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 20
      // },
      // {
      //   "id": 11,
      //   "question": "Which mythological figure is associated with a labyrinth?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Medusa",
      //         "correct": false
      //       },
      //       {
      //         "label": "Minotaur",
      //         "correct": true
      //       },
      //       {
      //         "label": "Chimera",
      //         "correct": false
      //       },
      //       {
      //         "label": "Cyclops",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "300px",
      //   "left": "150px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 12,
      //   "question": "What does the symbol of the snake represent in many cultures?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Duality or transformation",
      //         "correct": true
      //       },
      //       {
      //         "label": "Strength",
      //         "correct": false
      //       },
      //       {
      //         "label": "Loyalty",
      //         "correct": false
      //       },
      //       {
      //         "label": "Fertility only",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "320px",
      //   "left": "200px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 13,
      //   "question": "In Greek myth, who was doomed to always tell the truth but never be believed?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Pandora",
      //         "correct": false
      //       },
      //       {
      //         "label": "Cassandra",
      //         "correct": true
      //       },
      //       {
      //         "label": "Hera",
      //         "correct": false
      //       },
      //       {
      //         "label": "Medea",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "340px",
      //   "left": "250px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 40
      // },
      // {
      //   "id": 14,
      //   "question": "Which plant is commonly associated with prophecy and visions?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Aloe",
      //         "correct": false
      //       },
      //       {
      //         "label": "Bay Laurel",
      //         "correct": true
      //       },
      //       {
      //         "label": "Thyme",
      //         "correct": false
      //       },
      //       {
      //         "label": "Lavender",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "360px",
      //   "left": "300px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 20
      // },
      // {
      //   "id": 15,
      //   "question": "The number three is often symbolic of what concept in myths?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Endings",
      //         "correct": false
      //       },
      //       {
      //         "label": "Balance and completeness",
      //         "correct": true
      //       },
      //       {
      //         "label": "War",
      //         "correct": false
      //       },
      //       {
      //         "label": "Youth",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "380px",
      //   "left": "350px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 16,
      //   "question": "Who guards the gates of the underworld in Greek mythology?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Hades",
      //         "correct": false
      //       },
      //       {
      //         "label": "Cerberus",
      //         "correct": true
      //       },
      //       {
      //         "label": "Hermes",
      //         "correct": false
      //       },
      //       {
      //         "label": "Charon",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "400px",
      //   "left": "400px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 17,
      //   "question": "In Celtic symbolism, what is the Triquetra often associated with?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Chaos",
      //         "correct": false
      //       },
      //       {
      //         "label": "Fire",
      //         "correct": false
      //       },
      //       {
      //         "label": "Life, death, and rebirth",
      //         "correct": true
      //       },
      //       {
      //         "label": "Darkness",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "420px",
      //   "left": "50px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 40
      // },
      // {
      //   "id": 18,
      //   "question": "What does a broken sword often symbolize in mythology?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Lost power or past betrayal",
      //         "correct": true
      //       },
      //       {
      //         "label": "Courage",
      //         "correct": false
      //       },
      //       {
      //         "label": "Victory",
      //         "correct": false
      //       },
      //       {
      //         "label": "Destiny fulfilled",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "440px",
      //   "left": "100px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // },
      // {
      //   "id": 19,
      //   "question": "Which of these is considered a prophetic tool?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Chalice",
      //         "correct": false
      //       },
      //       {
      //         "label": "Crystal ball",
      //         "correct": true
      //       },
      //       {
      //         "label": "Wand",
      //         "correct": false
      //       },
      //       {
      //         "label": "Harp",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "460px",
      //   "left": "150px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 20
      // },
      // {
      //   "id": 20,
      //   "question": "In prophecy legends, what usually follows the appearance of a comet?",
      //   "answers": {
      //     "options": [
      //       {
      //         "label": "Peace",
      //         "correct": false
      //       },
      //       {
      //         "label": "Great change or disaster",
      //         "correct": true
      //       },
      //       {
      //         "label": "Fertility",
      //         "correct": false
      //       },
      //       {
      //         "label": "War victory",
      //         "correct": false
      //       }
      //     ]
      //   },
      //   "date": "2025-07-19",
      //   "category": "Myth, Prophecy & Symbols",
      //   "top": "480px",
      //   "left": "200px",
      //   "level": 0,
      //   "answtype": "single",
      //   "format": "text",
      //   "pts": 30
      // }
    ], "game1-3-1": [
      {
        "id": 1,
        "question": "What was the ancient library of Alexandria famous for?",
        "answers": {
          "options": [
            {
              "label": "Its scrolls and manuscripts",
              "correct": true
            },
            {
              "label": "Its statues",
              "correct": false
            },
            {
              "label": "Its gardens",
              "correct": false
            },
            {
              "label": "Its trade routes",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "330px",
        "left": "390px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 2,
        "question": "Which material was primarily used for scrolls in the ancient world?",
        "answers": {
          "options": [
            {
              "label": "Papyrus",
              "correct": true
            },
            {
              "label": "Parchment",
              "correct": false
            },
            {
              "label": "Clay",
              "correct": false
            },
            {
              "label": "Silk",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "187px",
        "left": "161px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "question": "Which civilization is credited with the invention of cuneiform writing?",
        "answers": {
          "options": [
            {
              "label": "Egyptians",
              "correct": false
            },
            {
              "label": "Sumerians",
              "correct": true
            },
            {
              "label": "Greeks",
              "correct": false
            },
            {
              "label": "Romans",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "494px",
        "left": "162px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4,
        "question": "The Rosetta Stone was key to deciphering which ancient language?",
        "answers": {
          "options": [
            {
              "label": "Latin",
              "correct": false
            },
            {
              "label": "Greek",
              "correct": false
            },
            {
              "label": "Coptic",
              "correct": false
            },
            {
              "label": "Egyptian hieroglyphs",
              "correct": true
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "172px",
        "left": "392px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "question": "What type of structure was the ziggurat?",
        "answers": {
          "options": [
            {
              "label": "Temple tower",
              "correct": true
            },
            {
              "label": "Grain store",
              "correct": false
            },
            {
              "label": "Tomb",
              "correct": false
            },
            {
              "label": "Marketplace",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "476px",
        "left": "118px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "question": "Which philosopher taught Alexander the Great?",
        "answers": {
          "options": [
            {
              "label": "Socrates",
              "correct": false
            },
            {
              "label": "Plato",
              "correct": false
            },
            {
              "label": "Aristotle",
              "correct": true
            },
            {
              "label": "Pythagoras",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "116px",
        "left": "285px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "question": "What does the term 'classical antiquity' refer to?",
        "answers": {
          "options": [
            {
              "label": "Middle Ages",
              "correct": false
            },
            {
              "label": "Ancient Greece and Rome",
              "correct": true
            },
            {
              "label": "Prehistoric times",
              "correct": false
            },
            {
              "label": "Renaissance period",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "184px",
        "left": "209px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "question": "Which lost city was rediscovered in the Andes in 1911?",
        "answers": {
          "options": [
            {
              "label": "Tikal",
              "correct": false
            },
            {
              "label": "Machu Picchu",
              "correct": true
            },
            {
              "label": "Petra",
              "correct": false
            },
            {
              "label": "Babylon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "377px",
        "left": "236px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "question": "What was a common use for obelisks in ancient cultures?",
        "answers": {
          "options": [
            {
              "label": "Sun dials",
              "correct": false
            },
            {
              "label": "Religious monuments",
              "correct": true
            },
            {
              "label": "Weapons",
              "correct": false
            },
            {
              "label": "Market stalls",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "390px",
        "left": "363px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 10,
        "question": "Which document is considered one of the oldest legal codes?",
        "answers": {
          "options": [
            {
              "label": "The Torah",
              "correct": false
            },
            {
              "label": "The Constitution",
              "correct": false
            },
            {
              "label": "The Code of Hammurabi",
              "correct": true
            },
            {
              "label": "The Republic",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "106px",
        "left": "365px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "question": "Which structure was considered a center of learning in ancient Mesopotamia?",
        "answers": {
          "options": [
            {
              "label": "House of Knowledge",
              "correct": true
            },
            {
              "label": "Tower of Babel",
              "correct": false
            },
            {
              "label": "Etemenanki",
              "correct": false
            },
            {
              "label": "School of Athens",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "490px",
        "left": "395px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "question": "Who wrote 'Histories', one of the first major works of history?",
        "answers": {
          "options": [
            {
              "label": "Thucydides",
              "correct": false
            },
            {
              "label": "Herodotus",
              "correct": true
            },
            {
              "label": "Homer",
              "correct": false
            },
            {
              "label": "Aristophanes",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "437px",
        "left": "287px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "question": "Which artifact was key in the development of early astronomy?",
        "answers": {
          "options": [
            {
              "label": "Stonehenge",
              "correct": false
            },
            {
              "label": "The Astrolabe",
              "correct": false
            },
            {
              "label": "The Antikythera Mechanism",
              "correct": true
            },
            {
              "label": "The Oracle Bones",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "473px",
        "left": "284px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 14,
        "question": "What ancient civilization built step pyramids before the Egyptians?",
        "answers": {
          "options": [
            {
              "label": "Olmecs",
              "correct": false
            },
            {
              "label": "Sumerians",
              "correct": false
            },
            {
              "label": "Mayans",
              "correct": true
            },
            {
              "label": "Chinese",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "494px",
        "left": "390px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "question": "What is a 'codex' in the context of ancient texts?",
        "answers": {
          "options": [
            {
              "label": "A map",
              "correct": false
            },
            {
              "label": "A type of scroll",
              "correct": false
            },
            {
              "label": "An early book format",
              "correct": true
            },
            {
              "label": "A scroll carrier",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "349px",
        "left": "294px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 16,
        "question": "What famous philosopher founded the Academy in Athens?",
        "answers": {
          "options": [
            {
              "label": "Plato",
              "correct": true
            },
            {
              "label": "Socrates",
              "correct": false
            },
            {
              "label": "Zeno",
              "correct": false
            },
            {
              "label": "Epicurus",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "251px",
        "left": "269px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "question": "What was the primary language of scholarly texts in medieval Islamic libraries?",
        "answers": {
          "options": [
            {
              "label": "Latin",
              "correct": false
            },
            {
              "label": "Greek",
              "correct": false
            },
            {
              "label": "Arabic",
              "correct": true
            },
            {
              "label": "Hebrew",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "411px",
        "left": "353px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 18,
        "question": "What was discovered in Qumran in 1947?",
        "answers": {
          "options": [
            {
              "label": "Oracle bones",
              "correct": false
            },
            {
              "label": "Mayan codices",
              "correct": false
            },
            {
              "label": "Dead Sea Scrolls",
              "correct": true
            },
            {
              "label": "Rosetta Stone",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "272px",
        "left": "246px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 19,
        "question": "Who preserved many Greek texts through translation during the Islamic Golden Age?",
        "answers": {
          "options": [
            {
              "label": "Persians",
              "correct": false
            },
            {
              "label": "Moors",
              "correct": false
            },
            {
              "label": "Byzantines",
              "correct": false
            },
            {
              "label": "Arab scholars",
              "correct": true
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "175px",
        "left": "216px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "question": "What is the term for a sacred or magical book of ancient knowledge?",
        "answers": {
          "options": [
            {
              "label": "Scriptorium",
              "correct": false
            },
            {
              "label": "Grimoire",
              "correct": true
            },
            {
              "label": "Codex",
              "correct": false
            },
            {
              "label": "Talisman",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "354px",
        "left": "378px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-3-2": [
      {
        "id": 3001,
        "question": "What legendary war is described in Homer\u2019s Iliad?",
        "answers": {
          "options": [
            {
              "label": "The Trojan War",
              "correct": true
            },
            {
              "label": "The Peloponnesian War",
              "correct": false
            },
            {
              "label": "The Punic War",
              "correct": false
            },
            {
              "label": "The Hundred Years' War",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "347px",
        "left": "133px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3002,
        "question": "What ancient weapon was used to launch projectiles in siege warfare?",
        "answers": {
          "options": [
            {
              "label": "Ballista",
              "correct": true
            },
            {
              "label": "Scythe",
              "correct": false
            },
            {
              "label": "Gladius",
              "correct": false
            },
            {
              "label": "Pilum",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "273px",
        "left": "250px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3003,
        "question": "Who was the god of war in Greek mythology?",
        "answers": {
          "options": [
            {
              "label": "Zeus",
              "correct": false
            },
            {
              "label": "Ares",
              "correct": true
            },
            {
              "label": "Apollo",
              "correct": false
            },
            {
              "label": "Poseidon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "328px",
        "left": "340px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3004,
        "question": "Which empire used war elephants in battle?",
        "answers": {
          "options": [
            {
              "label": "Roman",
              "correct": false
            },
            {
              "label": "Greek",
              "correct": false
            },
            {
              "label": "Carthaginian",
              "correct": true
            },
            {
              "label": "Persian",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "100px",
        "left": "174px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3005,
        "question": "What was the role of a 'hoplite' in ancient Greece?",
        "answers": {
          "options": [
            {
              "label": "Messenger",
              "correct": false
            },
            {
              "label": "Cavalryman",
              "correct": false
            },
            {
              "label": "Infantry soldier",
              "correct": true
            },
            {
              "label": "Merchant",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "279px",
        "left": "136px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3006,
        "question": "Which Norse event was said to be the end of the world and a great battle?",
        "answers": {
          "options": [
            {
              "label": "Yggdrasil",
              "correct": false
            },
            {
              "label": "Valhalla",
              "correct": false
            },
            {
              "label": "Ragnar\u00f6k",
              "correct": true
            },
            {
              "label": "Sk\u00e5l",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "199px",
        "left": "297px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3007,
        "question": "Which ancient warrior society trained boys from a young age?",
        "answers": {
          "options": [
            {
              "label": "Romans",
              "correct": false
            },
            {
              "label": "Spartans",
              "correct": true
            },
            {
              "label": "Vikings",
              "correct": false
            },
            {
              "label": "Celts",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "132px",
        "left": "259px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3008,
        "question": "The Battle of Thermopylae involved how many Spartans?",
        "answers": {
          "options": [
            {
              "label": "100",
              "correct": false
            },
            {
              "label": "300",
              "correct": true
            },
            {
              "label": "1000",
              "correct": false
            },
            {
              "label": "5000",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "435px",
        "left": "178px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3009,
        "question": "What was the name of the sword wielded by King Arthur?",
        "answers": {
          "options": [
            {
              "label": "Sting",
              "correct": false
            },
            {
              "label": "Durandal",
              "correct": false
            },
            {
              "label": "Excalibur",
              "correct": true
            },
            {
              "label": "Glamdring",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "298px",
        "left": "306px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3010,
        "question": "Which empire built the largest contiguous land empire in history?",
        "answers": {
          "options": [
            {
              "label": "Mongol",
              "correct": true
            },
            {
              "label": "Roman",
              "correct": false
            },
            {
              "label": "Ottoman",
              "correct": false
            },
            {
              "label": "British",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "304px",
        "left": "176px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3011,
        "question": "Who were samurai loyal to?",
        "answers": {
          "options": [
            {
              "label": "The Emperor",
              "correct": false
            },
            {
              "label": "Their Shogun",
              "correct": false
            },
            {
              "label": "Their Daimyo",
              "correct": true
            },
            {
              "label": "Their Clan",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "362px",
        "left": "146px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3012,
        "question": "What Viking warriors were said to fight in a trance-like fury?",
        "answers": {
          "options": [
            {
              "label": "Thanes",
              "correct": false
            },
            {
              "label": "Berserkers",
              "correct": true
            },
            {
              "label": "Skalds",
              "correct": false
            },
            {
              "label": "Chieftains",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "469px",
        "left": "321px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3013,
        "question": "Which battle marked the end of Napoleon's reign?",
        "answers": {
          "options": [
            {
              "label": "Austerlitz",
              "correct": false
            },
            {
              "label": "Trafalgar",
              "correct": false
            },
            {
              "label": "Waterloo",
              "correct": true
            },
            {
              "label": "Leipzig",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "459px",
        "left": "63px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3014,
        "question": "Which weapon was associated with medieval knights?",
        "answers": {
          "options": [
            {
              "label": "Longsword",
              "correct": true
            },
            {
              "label": "Katana",
              "correct": false
            },
            {
              "label": "Gladius",
              "correct": false
            },
            {
              "label": "Halberd",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "73px",
        "left": "75px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3015,
        "question": "What does the term 'phalanx' refer to?",
        "answers": {
          "options": [
            {
              "label": "A shield",
              "correct": false
            },
            {
              "label": "A sword technique",
              "correct": false
            },
            {
              "label": "A military formation",
              "correct": true
            },
            {
              "label": "A type of armor",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "554px",
        "left": "269px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3016,
        "question": "Which battle strategy involved surrounding and cutting off an enemy?",
        "answers": {
          "options": [
            {
              "label": "Encirclement",
              "correct": true
            },
            {
              "label": "Feint",
              "correct": false
            },
            {
              "label": "Charge",
              "correct": false
            },
            {
              "label": "Retreat",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "519px",
        "left": "285px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3017,
        "question": "In Chinese lore, what legendary text teaches the art of war?",
        "answers": {
          "options": [
            {
              "label": "The Dao De Jing",
              "correct": false
            },
            {
              "label": "The Book of Five Rings",
              "correct": false
            },
            {
              "label": "The Art of War",
              "correct": true
            },
            {
              "label": "The I Ching",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "218px",
        "left": "263px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3018,
        "question": "What was the purpose of a war horn?",
        "answers": {
          "options": [
            {
              "label": "Decoration",
              "correct": false
            },
            {
              "label": "Signal orders",
              "correct": true
            },
            {
              "label": "Summon rain",
              "correct": false
            },
            {
              "label": "Mark territory",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "194px",
        "left": "271px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3019,
        "question": "In myth, who led the Greek forces against Troy?",
        "answers": {
          "options": [
            {
              "label": "Odysseus",
              "correct": false
            },
            {
              "label": "Achilles",
              "correct": false
            },
            {
              "label": "Agamemnon",
              "correct": true
            },
            {
              "label": "Paris",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "509px",
        "left": "330px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3020,
        "question": "What metal was most commonly used for weapons in the Bronze Age?",
        "answers": {
          "options": [
            {
              "label": "Iron",
              "correct": false
            },
            {
              "label": "Bronze",
              "correct": true
            },
            {
              "label": "Steel",
              "correct": false
            },
            {
              "label": "Copper",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "535px",
        "left": "234px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], "game1-3-3": [
      {
        "id": 4001,
        "question": "What is Yggdrasil in Norse mythology?",
        "answers": {
          "options": [
            {
              "label": "A sea serpent",
              "correct": false
            },
            {
              "label": "A tree connecting worlds",
              "correct": true
            },
            {
              "label": "A dragon",
              "correct": false
            },
            {
              "label": "A mountain",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "174px",
        "left": "86px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4002,
        "question": "Which trees were considered sacred by the ancient Druids?",
        "answers": {
          "options": [
            {
              "label": "Birch",
              "correct": false
            },
            {
              "label": "Oak",
              "correct": true
            },
            {
              "label": "Pine",
              "correct": false
            },
            {
              "label": "Willow",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "76px",
        "left": "303px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4003,
        "question": "What is the Greek dryad associated with?",
        "answers": {
          "options": [
            {
              "label": "Waterfalls",
              "correct": false
            },
            {
              "label": "Mountains",
              "correct": false
            },
            {
              "label": "Trees",
              "correct": true
            },
            {
              "label": "Stars",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "292px",
        "left": "96px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4004,
        "question": "Which tree is known as the 'Tree of Life' in many cultures?",
        "answers": {
          "options": [
            {
              "label": "Fig",
              "correct": true
            },
            {
              "label": "Cedar",
              "correct": false
            },
            {
              "label": "Baobab",
              "correct": false
            },
            {
              "label": "Oak",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "513px",
        "left": "85px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4005,
        "question": "Which forest is home to the myth of Robin Hood?",
        "answers": {
          "options": [
            {
              "label": "Sherwood",
              "correct": true
            },
            {
              "label": "Black Forest",
              "correct": false
            },
            {
              "label": "Epping",
              "correct": false
            },
            {
              "label": "Arden",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "517px",
        "left": "117px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4006,
        "question": "What was the sacred grove in ancient Rome called?",
        "answers": {
          "options": [
            {
              "label": "Silva",
              "correct": false
            },
            {
              "label": "Lucus",
              "correct": true
            },
            {
              "label": "Hortus",
              "correct": false
            },
            {
              "label": "Bosco",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "447px",
        "left": "271px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4007,
        "question": "Which tree is a national symbol of Lebanon?",
        "answers": {
          "options": [
            {
              "label": "Cypress",
              "correct": false
            },
            {
              "label": "Palm",
              "correct": false
            },
            {
              "label": "Cedar",
              "correct": true
            },
            {
              "label": "Pine",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "553px",
        "left": "114px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4008,
        "question": "In many cultures, what do whispering trees symbolize?",
        "answers": {
          "options": [
            {
              "label": "Danger",
              "correct": false
            },
            {
              "label": "Wisdom",
              "correct": true
            },
            {
              "label": "Laziness",
              "correct": false
            },
            {
              "label": "Confusion",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "140px",
        "left": "315px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4009,
        "question": "The Bodhi tree is significant in which religion?",
        "answers": {
          "options": [
            {
              "label": "Christianity",
              "correct": false
            },
            {
              "label": "Islam",
              "correct": false
            },
            {
              "label": "Hinduism",
              "correct": false
            },
            {
              "label": "Buddhism",
              "correct": true
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "233px",
        "left": "241px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4010,
        "question": "What kind of creature is an Ent in Tolkien's mythology?",
        "answers": {
          "options": [
            {
              "label": "Elf",
              "correct": false
            },
            {
              "label": "Dragon",
              "correct": false
            },
            {
              "label": "Tree-being",
              "correct": true
            },
            {
              "label": "Dwarf",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "561px",
        "left": "108px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4011,
        "question": "Which culture believed spirits lived in trees and forests?",
        "answers": {
          "options": [
            {
              "label": "Norse",
              "correct": false
            },
            {
              "label": "Celtic",
              "correct": true
            },
            {
              "label": "Incan",
              "correct": false
            },
            {
              "label": "Persian",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "565px",
        "left": "233px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4012,
        "question": "What is a sacred fig tree under which Buddha attained enlightenment?",
        "answers": {
          "options": [
            {
              "label": "Asvattha",
              "correct": true
            },
            {
              "label": "Neem",
              "correct": false
            },
            {
              "label": "Banyan",
              "correct": false
            },
            {
              "label": "Sandalwood",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "493px",
        "left": "263px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4013,
        "question": "In mythology, who guarded the golden apples in the Garden of the Hesperides?",
        "answers": {
          "options": [
            {
              "label": "Sirens",
              "correct": false
            },
            {
              "label": "Cyclopes",
              "correct": false
            },
            {
              "label": "Harpies",
              "correct": false
            },
            {
              "label": "Nymphs",
              "correct": true
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "345px",
        "left": "335px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4014,
        "question": "Which forest is considered haunted in Romania?",
        "answers": {
          "options": [
            {
              "label": "Sherwood",
              "correct": false
            },
            {
              "label": "Hoia",
              "correct": true
            },
            {
              "label": "Sinca Veche",
              "correct": false
            },
            {
              "label": "Buzaului",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "568px",
        "left": "101px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4015,
        "question": "What tree\u2019s leaves were worn as a crown by Roman emperors?",
        "answers": {
          "options": [
            {
              "label": "Pine",
              "correct": false
            },
            {
              "label": "Olive",
              "correct": false
            },
            {
              "label": "Laurel",
              "correct": true
            },
            {
              "label": "Maple",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "300px",
        "left": "235px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4016,
        "question": "Which ancient culture had sacred groves dedicated to Artemis?",
        "answers": {
          "options": [
            {
              "label": "Greek",
              "correct": true
            },
            {
              "label": "Mayan",
              "correct": false
            },
            {
              "label": "Nubian",
              "correct": false
            },
            {
              "label": "Babylonian",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "438px",
        "left": "178px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4017,
        "question": "The ancient term 'nemeton' refers to what?",
        "answers": {
          "options": [
            {
              "label": "Burial site",
              "correct": false
            },
            {
              "label": "Sacred grove",
              "correct": true
            },
            {
              "label": "Battlefield",
              "correct": false
            },
            {
              "label": "Meeting hall",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "536px",
        "left": "119px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4018,
        "question": "What is the purpose of a 'totem tree' in some indigenous cultures?",
        "answers": {
          "options": [
            {
              "label": "To mark property",
              "correct": false
            },
            {
              "label": "To scare animals",
              "correct": false
            },
            {
              "label": "To connect to spirits",
              "correct": true
            },
            {
              "label": "To show direction",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "425px",
        "left": "134px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4019,
        "question": "Which of the following is considered a sacred tree in Japanese Shintoism?",
        "answers": {
          "options": [
            {
              "label": "Sakura",
              "correct": false
            },
            {
              "label": "Ginkgo",
              "correct": false
            },
            {
              "label": "Camphor",
              "correct": false
            },
            {
              "label": "Cryptomeria",
              "correct": true
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "492px",
        "left": "99px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4020,
        "question": "What tree is associated with the underworld in many myths?",
        "answers": {
          "options": [
            {
              "label": "Elm",
              "correct": false
            },
            {
              "label": "Birch",
              "correct": false
            },
            {
              "label": "Cypress",
              "correct": true
            },
            {
              "label": "Maple",
              "correct": false
            }
          ]
        },
        "date": "2025-07-19",
        "category": "Myth, Prophecy & Symbols",
        "top": "229px",
        "left": "149px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], "game1-4-2": [
      {
        "id": 6001,
        "question": "Which fish is known for its vibrant colors and is often found in coral reefs?",
        "answers": {
          "options": [
            { "label": "Clownfish", "correct": false },
            { "label": "Pufferfish", "correct": false },
            { "label": "Mandarinfish", "correct": true },
            { "label": "Goby", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "210px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6002,
        "question": "Which exotic fish can inflate itself when threatened?",
        "answers": {
          "options": [
            { "label": "Anglerfish", "correct": false },
            { "label": "Pufferfish", "correct": true },
            { "label": "Lionfish", "correct": false },
            { "label": "Stonefish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "160px",
        "left": "95px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6003,
        "question": "Which fish has venomous spines and a distinctive striped appearance?",
        "answers": {
          "options": [
            { "label": "Scorpionfish", "correct": false },
            { "label": "Pufferfish", "correct": false },
            { "label": "Lionfish", "correct": true },
            { "label": "Catfish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "330px",
        "left": "170px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6004,
        "question": "What is the most expensive edible fish in the world?",
        "answers": {
          "options": [
            { "label": "Bluefin tuna", "correct": true },
            { "label": "Mahi-mahi", "correct": false },
            { "label": "Giant grouper", "correct": false },
            { "label": "Swordfish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "260px",
        "left": "250px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6005,
        "question": "Which fish can produce electric shocks up to 600 volts?",
        "answers": {
          "options": [
            { "label": "Electric ray", "correct": false },
            { "label": "Electric catfish", "correct": false },
            { "label": "Electric eel", "correct": true },
            { "label": "Stargazer", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "300px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6006,
        "question": "Which tropical fish is known for its parrot-like beak?",
        "answers": {
          "options": [
            { "label": "Triggerfish", "correct": false },
            { "label": "Angelfish", "correct": false },
            { "label": "Parrotfish", "correct": true },
            { "label": "Butterflyfish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "390px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6007,
        "question": "Which exotic fish has a long, sword-like upper jaw?",
        "answers": {
          "options": [
            { "label": "Swordfish", "correct": true },
            { "label": "Barracuda", "correct": false },
            { "label": "Needlefish", "correct": false },
            { "label": "Garfish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "350px",
        "left": "190px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6008,
        "question": "Which deep-sea fish is known for its bioluminescent lure?",
        "answers": {
          "options": [
            { "label": "Anglerfish", "correct": true },
            { "label": "Lanternfish", "correct": false },
            { "label": "Fangtooth", "correct": false },
            { "label": "Viperfish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "420px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6009,
        "question": "Which rare fish is known for walking on the ocean floor using fins?",
        "answers": {
          "options": [
            { "label": "Batfish", "correct": true },
            { "label": "Stargazer", "correct": false },
            { "label": "Blobfish", "correct": false },
            { "label": "Frogfish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "270px",
        "left": "170px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6010,
        "question": "Which exotic fish is considered sacred in Japanese koi ponds?",
        "answers": {
          "options": [
            { "label": "Goldfish", "correct": false },
            { "label": "Betta", "correct": false },
            { "label": "Koi", "correct": true },
            { "label": "Tetra", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "230px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-4-3": [
      {
        "id": 6101,
        "question": "What is the primary material used to make a traditional blacksmith’s anvil?",
        "answers": {
          "options": [
            { "label": "Bronze", "correct": false },
            { "label": "Cast iron", "correct": false },
            { "label": "Steel", "correct": true },
            { "label": "Aluminum", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "140px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6102,
        "question": "Which tool is essential for shaping hot metal in blacksmithing?",
        "answers": {
          "options": [
            { "label": "Hammer", "correct": true },
            { "label": "Chisel", "correct": false },
            { "label": "Wrench", "correct": false },
            { "label": "File", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "200px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6103,
        "question": "What is the purpose of quenching a blade?",
        "answers": {
          "options": [
            { "label": "To color the metal", "correct": false },
            { "label": "To harden the steel", "correct": true },
            { "label": "To remove impurities", "correct": false },
            { "label": "To cool it quickly for handling", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "260px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6104,
        "question": "What do blacksmiths typically use to heat metal?",
        "answers": {
          "options": [
            { "label": "Furnace", "correct": true },
            { "label": "Torch", "correct": false },
            { "label": "Oven", "correct": false },
            { "label": "Campfire", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "220px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6105,
        "question": "Which ancient culture is credited with developing Damascus steel?",
        "answers": {
          "options": [
            { "label": "Romans", "correct": false },
            { "label": "Greeks", "correct": false },
            { "label": "Persians", "correct": true },
            { "label": "Egyptians", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "300px",
        "left": "190px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6106,
        "question": "Why is carbon important in forging steel?",
        "answers": {
          "options": [
            { "label": "It makes it shiny", "correct": false },
            { "label": "It helps the steel rust", "correct": false },
            { "label": "It gives steel its hardness", "correct": true },
            { "label": "It melts the metal faster", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "350px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6107,
        "question": "What is a tang in the context of sword making?",
        "answers": {
          "options": [
            { "label": "The sword's edge", "correct": false },
            { "label": "The decorative hilt", "correct": false },
            { "label": "The part of the blade inside the handle", "correct": true },
            { "label": "A type of quenching technique", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "260px",
        "left": "220px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6108,
        "question": "Which of these is a step in traditional sword forging?",
        "answers": {
          "options": [
            { "label": "Carving", "correct": false },
            { "label": "Twisting", "correct": false },
            { "label": "Folding", "correct": true },
            { "label": "Lathing", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "170px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6109,
        "question": "Which item is often used by blacksmiths to cool metal quickly?",
        "answers": {
          "options": [
            { "label": "Olive oil", "correct": false },
            { "label": "Cold air", "correct": false },
            { "label": "Water or oil quench", "correct": true },
            { "label": "Ice", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "320px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6110,
        "question": "What is the flat surface called where blacksmiths hammer hot metal?",
        "answers": {
          "options": [
            { "label": "Anvil", "correct": true },
            { "label": "Bench", "correct": false },
            { "label": "Press", "correct": false },
            { "label": "Forge block", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "280px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-4-4": [
      {
        "id": 6111,
        "question": "Which beef cut is best for a slow-cooked stew?",
        "answers": {
          "options": [
            { "label": "Ribeye", "correct": false },
            { "label": "Chuck", "correct": true },
            { "label": "Tenderloin", "correct": false },
            { "label": "Sirloin", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "140px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6112,
        "question": "Which pork cut is ideal for stew due to its fat and collagen content?",
        "answers": {
          "options": [
            { "label": "Pork loin", "correct": false },
            { "label": "Pork belly", "correct": false },
            { "label": "Pork shoulder (Boston butt)", "correct": true },
            { "label": "Pork chops", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "200px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6113,
        "question": "Lamb shank is a great cut for which type of cooking?",
        "answers": {
          "options": [
            { "label": "Grilling", "correct": false },
            { "label": "Boiling", "correct": false },
            { "label": "Braising", "correct": true },
            { "label": "Frying", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "260px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6114,
        "question": "What is a common feature of stew-friendly cuts?",
        "answers": {
          "options": [
            { "label": "Low fat content", "correct": false },
            { "label": "High muscle activity", "correct": true },
            { "label": "Thin slices", "correct": false },
            { "label": "Boneless texture", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "180px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6115,
        "question": "Which meat cut should be avoided for stews due to quick cooking?",
        "answers": {
          "options": [
            { "label": "Chuck steak", "correct": false },
            { "label": "Beef brisket", "correct": false },
            { "label": "Tenderloin", "correct": true },
            { "label": "Short ribs", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "300px",
        "left": "190px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6116,
        "question": "Which cooking method best suits meat cuts with lots of connective tissue?",
        "answers": {
          "options": [
            { "label": "Broiling", "correct": false },
            { "label": "Deep frying", "correct": false },
            { "label": "Slow braising", "correct": true },
            { "label": "Steaming", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "350px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6117,
        "question": "Which beef cut is commonly used in French beef bourguignon?",
        "answers": {
          "options": [
            { "label": "Flank steak", "correct": false },
            { "label": "Chuck", "correct": true },
            { "label": "T-bone", "correct": false },
            { "label": "Rib roast", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "260px",
        "left": "220px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6118,
        "question": "Which part of the chicken is most commonly used in stews?",
        "answers": {
          "options": [
            { "label": "Breast", "correct": false },
            { "label": "Wings", "correct": false },
            { "label": "Thighs", "correct": true },
            { "label": "Neck", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "220px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6119,
        "question": "What is the advantage of using bone-in cuts in stews?",
        "answers": {
          "options": [
            { "label": "They cook faster", "correct": false },
            { "label": "They give more flavor", "correct": true },
            { "label": "They are easier to cut", "correct": false },
            { "label": "They have less fat", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "240px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6120,
        "question": "Which cut would most likely dry out in a long stew?",
        "answers": {
          "options": [
            { "label": "Short ribs", "correct": false },
            { "label": "Chuck roast", "correct": false },
            { "label": "Tenderloin", "correct": true },
            { "label": "Shank", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "280px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-4-5": [
      {
        "id": 6130,
        "question": "Which insect is responsible for the production of honey?",
        "answers": {
          "options": [
            { "label": "Butterfly", "correct": false },
            { "label": "Bee", "correct": true },
            { "label": "Wasp", "correct": false },
            { "label": "Ant", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "100px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6131,
        "question": "What is the main ingredient bees use to make honey?",
        "answers": {
          "options": [
            { "label": "Tree sap", "correct": false },
            { "label": "Pollen", "correct": false },
            { "label": "Nectar", "correct": true },
            { "label": "Water", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "160px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6132,
        "question": "What is the name of the structure bees live in?",
        "answers": {
          "options": [
            { "label": "Colony", "correct": false },
            { "label": "Hive", "correct": true },
            { "label": "Nest", "correct": false },
            { "label": "Den", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "130px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6133,
        "question": "Which ancient civilization used honey in mummification?",
        "answers": {
          "options": [
            { "label": "Romans", "correct": false },
            { "label": "Greeks", "correct": false },
            { "label": "Egyptians", "correct": true },
            { "label": "Sumerians", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "190px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6134,
        "question": "In mythology, which Greek god is associated with bees and prophecy?",
        "answers": {
          "options": [
            { "label": "Hermes", "correct": false },
            { "label": "Apollo", "correct": true },
            { "label": "Dionysus", "correct": false },
            { "label": "Ares", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "220px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6135,
        "question": "What is the role of the queen bee in a hive?",
        "answers": {
          "options": [
            { "label": "Gather nectar", "correct": false },
            { "label": "Produce honey", "correct": false },
            { "label": "Lay eggs", "correct": true },
            { "label": "Build the hive", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "250px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6136,
        "question": "Which part of the plant do bees collect nectar from?",
        "answers": {
          "options": [
            { "label": "Roots", "correct": false },
            { "label": "Leaves", "correct": false },
            { "label": "Flowers", "correct": true },
            { "label": "Stems", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "280px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6137,
        "question": "What is mead made from?",
        "answers": {
          "options": [
            { "label": "Wheat", "correct": false },
            { "label": "Barley", "correct": false },
            { "label": "Honey", "correct": true },
            { "label": "Rice", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "310px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6138,
        "question": "How many wings does a honeybee have?",
        "answers": {
          "options": [
            { "label": "Two", "correct": false },
            { "label": "Four", "correct": true },
            { "label": "Six", "correct": false },
            { "label": "Eight", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "340px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6139,
        "question": "What ancient symbol often used bees to represent order and community?",
        "answers": {
          "options": [
            { "label": "Celtic cross", "correct": false },
            { "label": "Egyptian ankh", "correct": false },
            { "label": "Napoleonic bee", "correct": true },
            { "label": "Greek omega", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "370px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], "game1-4-6": [
      {
        "id": 6150,
        "question": "What material is traditionally used to make pottery?",
        "answers": {
          "options": [
            { "label": "Sandstone", "correct": false },
            { "label": "Clay", "correct": true },
            { "label": "Marble", "correct": false },
            { "label": "Granite", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "80px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6151,
        "question": "Which ancient civilization is famous for black-figure and red-figure pottery?",
        "answers": {
          "options": [
            { "label": "Romans", "correct": false },
            { "label": "Greeks", "correct": true },
            { "label": "Egyptians", "correct": false },
            { "label": "Phoenicians", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "130px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6152,
        "question": "What is the process of heating pottery in a kiln called?",
        "answers": {
          "options": [
            { "label": "Glazing", "correct": false },
            { "label": "Firing", "correct": true },
            { "label": "Pressing", "correct": false },
            { "label": "Baking", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "180px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6153,
        "question": "Which color is commonly associated with Chinese porcelain?",
        "answers": {
          "options": [
            { "label": "Red and gold", "correct": false },
            { "label": "Blue and white", "correct": true },
            { "label": "Green and black", "correct": false },
            { "label": "Purple and silver", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "230px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6154,
        "question": "What does a broken but repaired Japanese pot using gold-filled cracks symbolize?",
        "answers": {
          "options": [
            { "label": "Perfection", "correct": false },
            { "label": "Wealth", "correct": false },
            { "label": "Strength through imperfection", "correct": true },
            { "label": "Rebirth", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "280px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6155,
        "question": "Which region is known for terracotta warriors?",
        "answers": {
          "options": [
            { "label": "Mesopotamia", "correct": false },
            { "label": "India", "correct": false },
            { "label": "China", "correct": true },
            { "label": "Persia", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "320px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6156,
        "question": "What is slip in the context of pottery?",
        "answers": {
          "options": [
            { "label": "A glaze", "correct": false },
            { "label": "Liquid clay", "correct": true },
            { "label": "A crack", "correct": false },
            { "label": "Decorative ring", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "360px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6157,
        "question": "Which pottery form is used to store oil or wine in ancient Greece?",
        "answers": {
          "options": [
            { "label": "Krater", "correct": false },
            { "label": "Amphora", "correct": true },
            { "label": "Hydria", "correct": false },
            { "label": "Kylix", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "400px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6158,
        "question": "Which famous Italian city is known for Majolica ceramic art?",
        "answers": {
          "options": [
            { "label": "Venice", "correct": false },
            { "label": "Faenza", "correct": true },
            { "label": "Florence", "correct": false },
            { "label": "Rome", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "440px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6159,
        "question": "What does the potter’s wheel symbolize in many mythologies?",
        "answers": {
          "options": [
            { "label": "Cycle of life", "correct": true },
            { "label": "War and conflict", "correct": false },
            { "label": "The seasons", "correct": false },
            { "label": "Chaos", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "top": "480px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], "game1-6-1": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Greek mythology, what plant did Persephone eat that bound her to the underworld?",
        "answers": {
          "options": [
            { "label": "Pomegranate", "correct": true },
            { "label": "Fig", "correct": false },
            { "label": "Olive", "correct": false },
            { "label": "Lotus", "correct": false }
          ]
        },
        "top": "120px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which legendary tree connects the nine worlds in Norse mythology?",
        "answers": {
          "options": [
            { "label": "Yggdrasil", "correct": true },
            { "label": "Eldertree", "correct": false },
            { "label": "Dryadroot", "correct": false },
            { "label": "Nidavellir Oak", "correct": false }
          ]
        },
        "top": "260px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which flower is associated with resurrection in Egyptian mythology?",
        "answers": {
          "options": [
            { "label": "Lotus", "correct": true },
            { "label": "Rose", "correct": false },
            { "label": "Lily", "correct": false },
            { "label": "Daisy", "correct": false }
          ]
        },
        "top": "180px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "The Mandrake root is said to scream when what happens?",
        "answers": {
          "options": [
            { "label": "It is pulled from the ground", "correct": true },
            { "label": "It is fed milk", "correct": false },
            { "label": "It is burned", "correct": false },
            { "label": "It blooms at night", "correct": false }
          ]
        },
        "top": "300px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which plant was believed to give eternal youth in Chinese folklore?",
        "answers": {
          "options": [
            { "label": "Peach of Immortality", "correct": true },
            { "label": "Bamboo", "correct": false },
            { "label": "Tea Flower", "correct": false },
            { "label": "Ginseng", "correct": false }
          ]
        },
        "top": "220px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which tree's wood was said to ward off evil in European folklore?",
        "answers": {
          "options": [
            { "label": "Rowan", "correct": true },
            { "label": "Maple", "correct": false },
            { "label": "Pine", "correct": false },
            { "label": "Elm", "correct": false }
          ]
        },
        "top": "180px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What fruit in Celtic myth was said to grant wisdom?",
        "answers": {
          "options": [
            { "label": "Hazelnut", "correct": true },
            { "label": "Apple", "correct": false },
            { "label": "Pear", "correct": false },
            { "label": "Blackberry", "correct": false }
          ]
        },
        "top": "240px",
        "left": "170px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Ambrosia, the food of the gods, was often described as what?",
        "answers": {
          "options": [
            { "label": "A sweet nectar or fruit", "correct": true },
            { "label": "A bitter herb", "correct": false },
            { "label": "A steaming broth", "correct": false },
            { "label": "Golden bread", "correct": false }
          ]
        },
        "top": "340px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Harry Potter, what magical plant helps restore those who’ve been petrified?",
        "answers": {
          "options": [
            { "label": "Mandrake", "correct": true },
            { "label": "Devil's Snare", "correct": false },
            { "label": "Gillyweed", "correct": false },
            { "label": "Whomping Willow", "correct": false }
          ]
        },
        "top": "300px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which plant was used by Odysseus to resist Circe’s magic?",
        "answers": {
          "options": [
            { "label": "Moly", "correct": true },
            { "label": "Wolfsbane", "correct": false },
            { "label": "Belladonna", "correct": false },
            { "label": "Aconite", "correct": false }
          ]
        },
        "top": "140px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which mythical flower only blooms under moonlight and grants visions?",
        "answers": {
          "options": [
            { "label": "Moonflower", "correct": true },
            { "label": "Sunblossom", "correct": false },
            { "label": "Starpetal", "correct": false },
            { "label": "Lunaria", "correct": false }
          ]
        },
        "top": "390px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "The 'Tree of Life' is a motif found in which ancient civilization?",
        "answers": {
          "options": [
            { "label": "Babylonian", "correct": true },
            { "label": "Roman", "correct": false },
            { "label": "Celtic", "correct": false },
            { "label": "Viking", "correct": false }
          ]
        },
        "top": "260px",
        "left": "300px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which herb was used in love potions in medieval Europe?",
        "answers": {
          "options": [
            { "label": "Rosemary", "correct": true },
            { "label": "Lavender", "correct": false },
            { "label": "Mint", "correct": false },
            { "label": "Basil", "correct": false }
          ]
        },
        "top": "190px",
        "left": "320px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 14,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which magical fruit was said to grant wishes in Arabian tales?",
        "answers": {
          "options": [
            { "label": "Golden Apple", "correct": true },
            { "label": "Ruby Grape", "correct": false },
            { "label": "Silver Pomegranate", "correct": false },
            { "label": "Emerald Date", "correct": false }
          ]
        },
        "top": "330px",
        "left": "360px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 15,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which magical herb gives humans the ability to breathe underwater?",
        "answers": {
          "options": [
            { "label": "Gillyweed", "correct": true },
            { "label": "Waterfern", "correct": false },
            { "label": "Kelproot", "correct": false },
            { "label": "Seabloom", "correct": false }
          ]
        },
        "top": "400px",
        "left": "310px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Slavic folklore, what plant protects against evil spirits?",
        "answers": {
          "options": [
            { "label": "Garlic", "correct": true },
            { "label": "Nettle", "correct": false },
            { "label": "Heather", "correct": false },
            { "label": "Yarrow", "correct": false }
          ]
        },
        "top": "420px",
        "left": "250px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What tree was sacred to the Druids?",
        "answers": {
          "options": [
            { "label": "Oak", "correct": true },
            { "label": "Willow", "correct": false },
            { "label": "Holly", "correct": false },
            { "label": "Yew", "correct": false }
          ]
        },
        "top": "130px",
        "left": "360px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which plant is used in many myths as a truth serum?",
        "answers": {
          "options": [
            { "label": "Veritaserum", "correct": true },
            { "label": "Dreamleaf", "correct": false },
            { "label": "Feverfew", "correct": false },
            { "label": "Moonwort", "correct": false }
          ]
        },
        "top": "370px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 19,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Aztec belief, what sacred plant was used in rituals and sacrifices?",
        "answers": {
          "options": [
            { "label": "Cacao", "correct": true },
            { "label": "Corn", "correct": false },
            { "label": "Tomato", "correct": false },
            { "label": "Yucca", "correct": false }
          ]
        },
        "top": "220px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 20,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which magical plant was used in flying ointments according to folklore?",
        "answers": {
          "options": [
            { "label": "Belladonna", "correct": true },
            { "label": "Chamomile", "correct": false },
            { "label": "Rosehip", "correct": false },
            { "label": "Elderberry", "correct": false }
          ]
        },
        "top": "160px",
        "left": "270px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      }
    ], "game1-6-2": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What mythical island is said to have vanished beneath the sea?",
        "answers": {
          "options": [
            { "label": "Atlantis", "correct": true },
            { "label": "Avalon", "correct": false },
            { "label": "Thule", "correct": false },
            { "label": "Lemuria", "correct": false }
          ]
        },
        "top": "60px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In folklore, what is a place where time flows differently often called?",
        "answers": {
          "options": [
            { "label": "Fairy Ring", "correct": true },
            { "label": "Time Hollow", "correct": false },
            { "label": "Chrono Pool", "correct": false },
            { "label": "Echo Chamber", "correct": false }
          ]
        },
        "top": "120px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What ancient library is believed to have held the knowledge of the world before its destruction?",
        "answers": {
          "options": [
            { "label": "Library of Alexandria", "correct": true },
            { "label": "House of Wisdom", "correct": false },
            { "label": "Sumerian Archives", "correct": false },
            { "label": "Temple of Delphi", "correct": false }
          ]
        },
        "top": "180px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which civilization is thought to have used mirrored illusions in its temples?",
        "answers": {
          "options": [
            { "label": "Maya", "correct": true },
            { "label": "Inca", "correct": false },
            { "label": "Babylonian", "correct": false },
            { "label": "Phoenician", "correct": false }
          ]
        },
        "top": "240px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which mythical place is believed to be a realm of eternal youth and forgetfulness?",
        "answers": {
          "options": [
            { "label": "Lethe", "correct": true },
            { "label": "Elysium", "correct": false },
            { "label": "Arcadia", "correct": false },
            { "label": "Hyperborea", "correct": false }
          ]
        },
        "top": "300px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which plant is often linked to memory and used in rituals of remembrance?",
        "answers": {
          "options": [
            { "label": "Rosemary", "correct": true },
            { "label": "Thyme", "correct": false },
            { "label": "Mint", "correct": false },
            { "label": "Lavender", "correct": false }
          ]
        },
        "top": "360px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which god in Greek mythology could manipulate memory?",
        "answers": {
          "options": [
            { "label": "Mnemosyne", "correct": true },
            { "label": "Apollo", "correct": false },
            { "label": "Hermes", "correct": false },
            { "label": "Thanatos", "correct": false }
          ]
        },
        "top": "60px",
        "left": "170px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What illusion-related term refers to a city seen in the distance that vanishes on approach?",
        "answers": {
          "options": [
            { "label": "Fata Morgana", "correct": true },
            { "label": "Echo Mirage", "correct": false },
            { "label": "Spectral Vale", "correct": false },
            { "label": "Shimmermist", "correct": false }
          ]
        },
        "top": "120px",
        "left": "210px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which of these is considered a lost city of gold?",
        "answers": {
          "options": [
            { "label": "El Dorado", "correct": true },
            { "label": "Atlantis", "correct": false },
            { "label": "Petra", "correct": false },
            { "label": "Shambhala", "correct": false }
          ]
        },
        "top": "180px",
        "left": "250px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which river in the Greek underworld erases the memories of souls?",
        "answers": {
          "options": [
            { "label": "Lethe", "correct": true },
            { "label": "Styx", "correct": false },
            { "label": "Acheron", "correct": false },
            { "label": "Phlegethon", "correct": false }
          ]
        },
        "top": "240px",
        "left": "280px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which mountain is said to hide the mythical city of Shambhala?",
        "answers": {
          "options": [
            { "label": "Himalayas", "correct": true },
            { "label": "Andes", "correct": false },
            { "label": "Alps", "correct": false },
            { "label": "Carpathians", "correct": false }
          ]
        },
        "top": "300px",
        "left": "320px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What ancient art involves creating illusions through geometry and shape?",
        "answers": {
          "options": [
            { "label": "Trompe-l'œil", "correct": true },
            { "label": "Fresco", "correct": false },
            { "label": "Etching", "correct": false },
            { "label": "Mosaic", "correct": false }
          ]
        },
        "top": "360px",
        "left": "290px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What magical object stores thoughts and memories in the Harry Potter universe?",
        "answers": {
          "options": [
            { "label": "Pensieve", "correct": true },
            { "label": "Time-Turner", "correct": false },
            { "label": "Remembrall", "correct": false },
            { "label": "Mirror of Erised", "correct": false }
          ]
        },
        "top": "60px",
        "left": "350px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 14,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What is the name of the mirror that shows the viewer their deepest desire?",
        "answers": {
          "options": [
            { "label": "Mirror of Erised", "correct": true },
            { "label": "Glass of Wishes", "correct": false },
            { "label": "Window of Want", "correct": false },
            { "label": "Reflection of Truth", "correct": false }
          ]
        },
        "top": "120px",
        "left": "380px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What mythical creature is known to lure travelers into illusionary mazes?",
        "answers": {
          "options": [
            { "label": "Will-o’-the-Wisp", "correct": true },
            { "label": "Kelpie", "correct": false },
            { "label": "Hippogriff", "correct": false },
            { "label": "Golem", "correct": false }
          ]
        },
        "top": "180px",
        "left": "400px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 16,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which lost continent is sometimes associated with psychic memory and crystal power?",
        "answers": {
          "options": [
            { "label": "Lemuria", "correct": true },
            { "label": "Mu", "correct": false },
            { "label": "Thule", "correct": false },
            { "label": "Hyperion", "correct": false }
          ]
        },
        "top": "240px",
        "left": "420px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What city is believed by some to appear once every hundred years and vanish again?",
        "answers": {
          "options": [
            { "label": "Brigadoon", "correct": true },
            { "label": "Erewhon", "correct": false },
            { "label": "Zanarkand", "correct": false },
            { "label": "Illium", "correct": false }
          ]
        },
        "top": "300px",
        "left": "460px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 18,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which memory-related deity was mother to the nine muses?",
        "answers": {
          "options": [
            { "label": "Mnemosyne", "correct": true },
            { "label": "Metis", "correct": false },
            { "label": "Gaia", "correct": false },
            { "label": "Rhea", "correct": false }
          ]
        },
        "top": "360px",
        "left": "490px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 19,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What ancient ritual attempted to restore lost memories to a person?",
        "answers": {
          "options": [
            { "label": "Dream Incubation", "correct": true },
            { "label": "Soul Bathing", "correct": false },
            { "label": "Wind Whispering", "correct": false },
            { "label": "Ether Communion", "correct": false }
          ]
        },
        "top": "420px",
        "left": "300px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 20,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What ancient artifact was said to store the knowledge of an entire lost civilization?",
        "answers": {
          "options": [
            { "label": "Emerald Tablet", "correct": true },
            { "label": "Tablet of Destiny", "correct": false },
            { "label": "Stone of Fal", "correct": false },
            { "label": "Chronos Crystal", "correct": false }
          ]
        },
        "top": "480px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-6-3": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What grain was sacred to the ancient Egyptians and used in religious offerings?",
        "answers": {
          "options": [
            { "label": "Barley", "correct": true },
            { "label": "Corn", "correct": false },
            { "label": "Millet", "correct": false },
            { "label": "Rye", "correct": false }
          ]
        },
        "top": "60px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Aztec ritual, which food was associated with human sacrifice and gods?",
        "answers": {
          "options": [
            { "label": "Amaranth", "correct": true },
            { "label": "Chili", "correct": false },
            { "label": "Beans", "correct": false },
            { "label": "Pumpkin", "correct": false }
          ]
        },
        "top": "110px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What mythical drink grants immortality in many cultures?",
        "answers": {
          "options": [
            { "label": "Ambrosia", "correct": true },
            { "label": "Kumis", "correct": false },
            { "label": "Soma", "correct": false },
            { "label": "Mead", "correct": false }
          ]
        },
        "top": "160px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which fruit is associated with the Greek myth of Persephone and the underworld?",
        "answers": {
          "options": [
            { "label": "Pomegranate", "correct": true },
            { "label": "Fig", "correct": false },
            { "label": "Grapes", "correct": false },
            { "label": "Olive", "correct": false }
          ]
        },
        "top": "210px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What bread was eaten during the Jewish festival of Passover?",
        "answers": {
          "options": [
            { "label": "Matzah", "correct": true },
            { "label": "Challah", "correct": false },
            { "label": "Brioche", "correct": false },
            { "label": "Pita", "correct": false }
          ]
        },
        "top": "260px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which Norse god is associated with feasting and mead?",
        "answers": {
          "options": [
            { "label": "Odin", "correct": true },
            { "label": "Thor", "correct": false },
            { "label": "Freyr", "correct": false },
            { "label": "Baldur", "correct": false }
          ]
        },
        "top": "310px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What food did the Greek gods eat on Mount Olympus?",
        "answers": {
          "options": [
            { "label": "Ambrosia", "correct": true },
            { "label": "Olives", "correct": false },
            { "label": "Figs", "correct": false },
            { "label": "Honeycakes", "correct": false }
          ]
        },
        "top": "360px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What is the ritual drink called in Vedic tradition?",
        "answers": {
          "options": [
            { "label": "Soma", "correct": true },
            { "label": "Mead", "correct": false },
            { "label": "Ghee", "correct": false },
            { "label": "Tisane", "correct": false }
          ]
        },
        "top": "410px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Roman tradition, what food was offered to household gods?",
        "answers": {
          "options": [
            { "label": "Bread", "correct": true },
            { "label": "Wine", "correct": false },
            { "label": "Fish", "correct": false },
            { "label": "Cheese", "correct": false }
          ]
        },
        "top": "460px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which vegetable was considered sacred by the ancient Egyptians?",
        "answers": {
          "options": [
            { "label": "Onion", "correct": true },
            { "label": "Garlic", "correct": false },
            { "label": "Turnip", "correct": false },
            { "label": "Leek", "correct": false }
          ]
        },
        "top": "510px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What magical food sustained the Elves in Tolkien’s Middle-earth?",
        "answers": {
          "options": [
            { "label": "Lembas", "correct": true },
            { "label": "Miruvor", "correct": false },
            { "label": "Waybread", "correct": false },
            { "label": "Ent-Draught", "correct": false }
          ]
        },
        "top": "560px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which culture made mooncakes during festivals as a spiritual offering?",
        "answers": {
          "options": [
            { "label": "Chinese", "correct": true },
            { "label": "Greek", "correct": false },
            { "label": "Persian", "correct": false },
            { "label": "Hittite", "correct": false }
          ]
        },
        "top": "610px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What ritual involved eating the flesh of a sacred bull in ancient rites?",
        "answers": {
          "options": [
            { "label": "Taurobolium", "correct": true },
            { "label": "Saturnalia", "correct": false },
            { "label": "Bacchanalia", "correct": false },
            { "label": "Elusinian Feast", "correct": false }
          ]
        },
        "top": "660px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 14,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What ancient fruit symbolized fertility and abundance across many cultures?",
        "answers": {
          "options": [
            { "label": "Fig", "correct": true },
            { "label": "Apple", "correct": false },
            { "label": "Pear", "correct": false },
            { "label": "Plum", "correct": false }
          ]
        },
        "top": "710px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Japanese folklore, which food is believed to house ancestral spirits?",
        "answers": {
          "options": [
            { "label": "Rice", "correct": true },
            { "label": "Miso", "correct": false },
            { "label": "Seaweed", "correct": false },
            { "label": "Umeboshi", "correct": false }
          ]
        },
        "top": "760px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 16,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which ancient culture used honey as both food and offering in funeral rites?",
        "answers": {
          "options": [
            { "label": "Greek", "correct": true },
            { "label": "Celtic", "correct": false },
            { "label": "Viking", "correct": false },
            { "label": "Babylonian", "correct": false }
          ]
        },
        "top": "810px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What feast honored the dead in Mesoamerican cultures with special foods?",
        "answers": {
          "options": [
            { "label": "Día de los Muertos", "correct": true },
            { "label": "Feast of Souls", "correct": false },
            { "label": "Festival of Ancients", "correct": false },
            { "label": "Night of Flowers", "correct": false }
          ]
        },
        "top": "860px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which sacred tree bore fruit that was said to grant divine knowledge?",
        "answers": {
          "options": [
            { "label": "Tree of Knowledge", "correct": true },
            { "label": "Tree of Wisdom", "correct": false },
            { "label": "Tree of Prophecy", "correct": false },
            { "label": "Tree of Time", "correct": false }
          ]
        },
        "top": "910px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 19,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What fermented beverage was often brewed for ancient sacred festivals?",
        "answers": {
          "options": [
            { "label": "Mead", "correct": true },
            { "label": "Cider", "correct": false },
            { "label": "Ale", "correct": false },
            { "label": "Wine", "correct": false }
          ]
        },
        "top": "960px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 20,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which spice was considered so valuable it was offered to the gods?",
        "answers": {
          "options": [
            { "label": "Saffron", "correct": true },
            { "label": "Cinnamon", "correct": false },
            { "label": "Clove", "correct": false },
            { "label": "Nutmeg", "correct": false }
          ]
        },
        "top": "1010px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      }
    ], "game1-8-1": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Norse mythology, what is the name of the serpent that coils around the world tree Yggdrasil?",
        "answers": {
          "options": [
            { "label": "Jörmungandr", "correct": true },
            { "label": "Fafnir", "correct": false },
            { "label": "Níðhöggr", "correct": false },
            { "label": "Sleipnir", "correct": false }
          ]
        },
        "top": "60px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which mythical creature guards the golden apples in the Garden of the Hesperides?",
        "answers": {
          "options": [
            { "label": "Ladon", "correct": true },
            { "label": "Hydra", "correct": false },
            { "label": "Cerberus", "correct": false },
            { "label": "Chimera", "correct": false }
          ]
        },
        "top": "120px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Chinese mythology, what do dragons often symbolize?",
        "answers": {
          "options": [
            { "label": "Power and good fortune", "correct": true },
            { "label": "Destruction and chaos", "correct": false },
            { "label": "Rebellion and trickery", "correct": false },
            { "label": "Night and darkness", "correct": false }
          ]
        },
        "top": "180px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "The ouroboros is a symbol of what concept?",
        "answers": {
          "options": [
            { "label": "Eternal cycle of life and death", "correct": true },
            { "label": "Protection from evil spirits", "correct": false },
            { "label": "Divine right to rule", "correct": false },
            { "label": "Rage and vengeance", "correct": false }
          ]
        },
        "top": "240px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What tree is Yggdrasil in Norse mythology?",
        "answers": {
          "options": [
            { "label": "The world tree", "correct": true },
            { "label": "The tree of knowledge", "correct": false },
            { "label": "The tree of healing", "correct": false },
            { "label": "The tree of light", "correct": false }
          ]
        },
        "top": "300px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What color is traditionally associated with Chinese imperial dragons?",
        "answers": {
          "options": [
            { "label": "Gold", "correct": true },
            { "label": "Green", "correct": false },
            { "label": "Red", "correct": false },
            { "label": "Black", "correct": false }
          ]
        },
        "top": "360px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What is the significance of dragons coiling around trees in many ancient myths?",
        "answers": {
          "options": [
            { "label": "Guardians of knowledge or life", "correct": true },
            { "label": "Symbols of famine", "correct": false },
            { "label": "Messengers of death", "correct": false },
            { "label": "Worshiped as sun gods", "correct": false }
          ]
        },
        "top": "420px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What did Fafnir, the dragon in Norse mythology, guard?",
        "answers": {
          "options": [
            { "label": "A hoard of gold", "correct": true },
            { "label": "A magic sword", "correct": false },
            { "label": "An ancient tree", "correct": false },
            { "label": "The gates of Valhalla", "correct": false }
          ]
        },
        "top": "480px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which creature is said to gnaw at Yggdrasil’s roots?",
        "answers": {
          "options": [
            { "label": "Níðhöggr", "correct": true },
            { "label": "Sleipnir", "correct": false },
            { "label": "Fenrir", "correct": false },
            { "label": "Jörmungandr", "correct": false }
          ]
        },
        "top": "540px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "The ouroboros is often depicted as:",
        "answers": {
          "options": [
            { "label": "A serpent eating its own tail", "correct": true },
            { "label": "A dragon with multiple heads", "correct": false },
            { "label": "A coiled snake around a staff", "correct": false },
            { "label": "A serpent with wings", "correct": false }
          ]
        },
        "top": "600px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Hindu mythology, what is Shesha?",
        "answers": {
          "options": [
            { "label": "A serpent who holds the world", "correct": true },
            { "label": "A demon king", "correct": false },
            { "label": "A divine flower", "correct": false },
            { "label": "A sea of milk", "correct": false }
          ]
        },
        "top": "660px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What kind of tree is often linked to dragons in Eastern mythology?",
        "answers": {
          "options": [
            { "label": "Mulberry", "correct": true },
            { "label": "Oak", "correct": false },
            { "label": "Ash", "correct": false },
            { "label": "Baobab", "correct": false }
          ]
        },
        "top": "720px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which dragon was defeated by Saint George?",
        "answers": {
          "options": [
            { "label": "The Libyan Dragon", "correct": true },
            { "label": "Fafnir", "correct": false },
            { "label": "Smaug", "correct": false },
            { "label": "Hydra", "correct": false }
          ]
        },
        "top": "780px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 14,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Dragons guarding trees often protect what?",
        "answers": {
          "options": [
            { "label": "Sacred fruit or knowledge", "correct": true },
            { "label": "Hidden weapons", "correct": false },
            { "label": "Powerful beasts", "correct": false },
            { "label": "Ancient scrolls", "correct": false }
          ]
        },
        "top": "840px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In mythology, coiling dragons can represent:",
        "answers": {
          "options": [
            { "label": "The eternal cycle of nature", "correct": true },
            { "label": "Fear of the sea", "correct": false },
            { "label": "Nightmares", "correct": false },
            { "label": "Punishment from gods", "correct": false }
          ]
        },
        "top": "900px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 16,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Slavic mythology, the Zmey Gorynych is a dragon with how many heads?",
        "answers": {
          "options": [
            { "label": "Three", "correct": true },
            { "label": "One", "correct": false },
            { "label": "Nine", "correct": false },
            { "label": "Seven", "correct": false }
          ]
        },
        "top": "960px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which Greek hero killed the dragon Python?",
        "answers": {
          "options": [
            { "label": "Apollo", "correct": true },
            { "label": "Heracles", "correct": false },
            { "label": "Perseus", "correct": false },
            { "label": "Theseus", "correct": false }
          ]
        },
        "top": "1020px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 18,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In some Aztec myths, the feathered serpent Quetzalcoatl is associated with:",
        "answers": {
          "options": [
            { "label": "Wind and wisdom", "correct": true },
            { "label": "Fire and war", "correct": false },
            { "label": "Rain and harvest", "correct": false },
            { "label": "Darkness and death", "correct": false }
          ]
        },
        "top": "1080px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 19,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In which culture are dragons considered wise, benevolent spirits of water and sky?",
        "answers": {
          "options": [
            { "label": "Chinese", "correct": true },
            { "label": "Norse", "correct": false },
            { "label": "Greek", "correct": false },
            { "label": "Celtic", "correct": false }
          ]
        },
        "top": "1140px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 20,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which symbol is closely associated with the balance of forces in nature and resembles two dragons?",
        "answers": {
          "options": [
            { "label": "Yin and Yang", "correct": true },
            { "label": "Triskelion", "correct": false },
            { "label": "Ankh", "correct": false },
            { "label": "Phoenix Rising", "correct": false }
          ]
        },
        "top": "1200px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      }
    ], "game1-8-2": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In mythology, a candle with three wicks might symbolize what?",
        "answers": {
          "options": [
            { "label": "Past, Present, and Future", "correct": true },
            { "label": "Mind, Body, and Spirit", "correct": false },
            { "label": "Sun, Moon, and Stars", "correct": false },
            { "label": "Faith, Hope, and Charity", "correct": false }
          ]
        },
        "top": "60px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which ancient civilization used candles as timekeeping devices?",
        "answers": {
          "options": [
            { "label": "Chinese", "correct": true },
            { "label": "Egyptian", "correct": false },
            { "label": "Mayan", "correct": false },
            { "label": "Roman", "correct": false }
          ]
        },
        "top": "120px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "The lighting of three candles together in some traditions can be seen as:",
        "answers": {
          "options": [
            { "label": "An omen", "correct": true },
            { "label": "A wedding blessing", "correct": false },
            { "label": "A healing ritual", "correct": false },
            { "label": "A harvest call", "correct": false }
          ]
        },
        "top": "180px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What does the flame in many myths often symbolize?",
        "answers": {
          "options": [
            { "label": "Life and transformation", "correct": true },
            { "label": "Evil and destruction", "correct": false },
            { "label": "Rain and fertility", "correct": false },
            { "label": "Silence and peace", "correct": false }
          ]
        },
        "top": "240px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which festival uses candles to represent miracles?",
        "answers": {
          "options": [
            { "label": "Hanukkah", "correct": true },
            { "label": "Diwali", "correct": false },
            { "label": "Beltane", "correct": false },
            { "label": "Samhain", "correct": false }
          ]
        },
        "top": "300px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Wiccan tradition, what do triple flames often represent?",
        "answers": {
          "options": [
            { "label": "Maiden, Mother, Crone", "correct": true },
            { "label": "Body, Soul, Earth", "correct": false },
            { "label": "Sun, Moon, Fire", "correct": false },
            { "label": "Spirit, Smoke, Wind", "correct": false }
          ]
        },
        "top": "360px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What ingredient was used in the earliest candles in ancient Rome?",
        "answers": {
          "options": [
            { "label": "Tallow", "correct": true },
            { "label": "Beeswax", "correct": false },
            { "label": "Olive oil", "correct": false },
            { "label": "Lard", "correct": false }
          ]
        },
        "top": "420px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which Norse deity is associated with fire and transformation?",
        "answers": {
          "options": [
            { "label": "Loki", "correct": true },
            { "label": "Odin", "correct": false },
            { "label": "Thor", "correct": false },
            { "label": "Freyja", "correct": false }
          ]
        },
        "top": "480px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Lighting candles for the dead is a practice seen in many cultures. What does it generally represent?",
        "answers": {
          "options": [
            { "label": "Guiding souls to the afterlife", "correct": true },
            { "label": "Inviting spirits for conversation", "correct": false },
            { "label": "Warding off curses", "correct": false },
            { "label": "A celebration of power", "correct": false }
          ]
        },
        "top": "540px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In some legends, three flames were said to burn continuously in what kind of sacred location?",
        "answers": {
          "options": [
            { "label": "Temple of knowledge", "correct": true },
            { "label": "Wizard's tower", "correct": false },
            { "label": "Stone circle", "correct": false },
            { "label": "Forest shrine", "correct": false }
          ]
        },
        "top": "600px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which color candle is often used in rituals for protection?",
        "answers": {
          "options": [
            { "label": "Black", "correct": true },
            { "label": "Green", "correct": false },
            { "label": "White", "correct": false },
            { "label": "Blue", "correct": false }
          ]
        },
        "top": "660px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What symbolic number is commonly associated with prophecy and seen in rituals like triple candle lighting?",
        "answers": {
          "options": [
            { "label": "Three", "correct": true },
            { "label": "Seven", "correct": false },
            { "label": "Five", "correct": false },
            { "label": "Nine", "correct": false }
          ]
        },
        "top": "720px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What does an unlit wick in a triple candle often symbolize in ritual settings?",
        "answers": {
          "options": [
            { "label": "Unfulfilled potential", "correct": true },
            { "label": "Doomed fate", "correct": false },
            { "label": "Time passed", "correct": false },
            { "label": "Chaos", "correct": false }
          ]
        },
        "top": "780px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 14,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In dream symbolism, a flickering candle may indicate:",
        "answers": {
          "options": [
            { "label": "Uncertainty or fading hope", "correct": true },
            { "label": "Rising anger", "correct": false },
            { "label": "Material success", "correct": false },
            { "label": "Stable mind", "correct": false }
          ]
        },
        "top": "840px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which saint is associated with candlelit processions in Christian tradition?",
        "answers": {
          "options": [
            { "label": "Saint Lucia", "correct": true },
            { "label": "Saint Paul", "correct": false },
            { "label": "Saint George", "correct": false },
            { "label": "Saint Anthony", "correct": false }
          ]
        },
        "top": "900px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 16,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What material is considered most ‘pure’ for ritual candle making?",
        "answers": {
          "options": [
            { "label": "Beeswax", "correct": true },
            { "label": "Tallow", "correct": false },
            { "label": "Soy", "correct": false },
            { "label": "Palm oil", "correct": false }
          ]
        },
        "top": "960px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which Hindu festival involves lighting many candles and oil lamps?",
        "answers": {
          "options": [
            { "label": "Diwali", "correct": true },
            { "label": "Holi", "correct": false },
            { "label": "Navratri", "correct": false },
            { "label": "Ram Navami", "correct": false }
          ]
        },
        "top": "1020px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 18,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which Norse goddess is associated with fire and transformation?",
        "answers": {
          "options": [
            { "label": "Freya", "correct": true },
            { "label": "Sif", "correct": false },
            { "label": "Idun", "correct": false },
            { "label": "Skadi", "correct": false }
          ]
        },
        "top": "1080px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 19,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Roman rituals, a candle was extinguished at the end of ceremonies to signify:",
        "answers": {
          "options": [
            { "label": "The end of divine presence", "correct": true },
            { "label": "A call for sleep", "correct": false },
            { "label": "Farewell to guests", "correct": false },
            { "label": "Beginning of silence", "correct": false }
          ]
        },
        "top": "1140px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 20,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which rare candle in myth is said to reveal truth, banish shadows, and summon forgotten names when all three flames align?",
        "answers": {
          "options": [
            { "label": "The Flame of Thrice-Seers", "correct": true },
            { "label": "The Candle of Eldritch", "correct": false },
            { "label": "The Lantern of Echoes", "correct": false },
            { "label": "The Light of Lirae", "correct": false }
          ]
        },
        "top": "1200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-8-3": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What does an hourglass traditionally symbolize?",
        "answers": {
          "options": [
            { "label": "The passage of time", "correct": true },
            { "label": "Infinity", "correct": false },
            { "label": "Chaos", "correct": false },
            { "label": "Balance", "correct": false }
          ]
        },
        "top": "60px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "An hourglass that spills upward might symbolize what?",
        "answers": {
          "options": [
            { "label": "Time reversal or memory unraveling", "correct": true },
            { "label": "Renewed youth", "correct": false },
            { "label": "Static eternity", "correct": false },
            { "label": "Lunar cycles", "correct": false }
          ]
        },
        "top": "120px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In medieval iconography, the hourglass was often held by which symbolic figure?",
        "answers": {
          "options": [
            { "label": "Death", "correct": true },
            { "label": "The Fool", "correct": false },
            { "label": "The Warrior", "correct": false },
            { "label": "The Sage", "correct": false }
          ]
        },
        "top": "180px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which material was traditionally used as sand in ancient hourglasses?",
        "answers": {
          "options": [
            { "label": "Crushed eggshell or powdered marble", "correct": true },
            { "label": "Beach sand", "correct": false },
            { "label": "Pulverized quartz", "correct": false },
            { "label": "Bone ash", "correct": false }
          ]
        },
        "top": "240px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which Greek deity is most closely associated with time?",
        "answers": {
          "options": [
            { "label": "Chronos", "correct": true },
            { "label": "Hermes", "correct": false },
            { "label": "Apollo", "correct": false },
            { "label": "Erebus", "correct": false }
          ]
        },
        "top": "300px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "An hourglass flowing upward might suggest a break in what?",
        "answers": {
          "options": [
            { "label": "Linear perception of time", "correct": true },
            { "label": "Seasonal cycles", "correct": false },
            { "label": "Fate's decree", "correct": false },
            { "label": "Celestial alignment", "correct": false }
          ]
        },
        "top": "360px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What event in folklore might reset an hourglass of fate?",
        "answers": {
          "options": [
            { "label": "The shedding of a tear on sacred soil", "correct": true },
            { "label": "A lunar eclipse", "correct": false },
            { "label": "An eclipse of memory", "correct": false },
            { "label": "A crow’s cry at dawn", "correct": false }
          ]
        },
        "top": "420px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What celestial object is symbolically tied to time and fate?",
        "answers": {
          "options": [
            { "label": "Saturn", "correct": true },
            { "label": "Mars", "correct": false },
            { "label": "Venus", "correct": false },
            { "label": "Neptune", "correct": false }
          ]
        },
        "top": "480px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "A reversed hourglass in dream interpretation can signify:",
        "answers": {
          "options": [
            { "label": "A desire to undo regret", "correct": true },
            { "label": "Approaching danger", "correct": false },
            { "label": "Success in finance", "correct": false },
            { "label": "Health and strength", "correct": false }
          ]
        },
        "top": "540px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which symbol is often used alongside an hourglass to represent mortality?",
        "answers": {
          "options": [
            { "label": "Skull", "correct": true },
            { "label": "Raven", "correct": false },
            { "label": "Serpent", "correct": false },
            { "label": "Tree", "correct": false }
          ]
        },
        "top": "600px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In what card-based divination system is the hourglass implicitly referenced?",
        "answers": {
          "options": [
            { "label": "Tarot", "correct": true },
            { "label": "Lenormand", "correct": false },
            { "label": "Runes", "correct": false },
            { "label": "I Ching", "correct": false }
          ]
        },
        "top": "660px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What mythical artifact was said to hold sand that measured divine time?",
        "answers": {
          "options": [
            { "label": "Chronoglass", "correct": true },
            { "label": "Obsidian Dial", "correct": false },
            { "label": "Celestial Compass", "correct": false },
            { "label": "Mirror of Aeons", "correct": false }
          ]
        },
        "top": "720px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "The hourglass’s shape resembles what sacred symbol?",
        "answers": {
          "options": [
            { "label": "Infinity loop", "correct": true },
            { "label": "Crossroads", "correct": false },
            { "label": "Trident", "correct": false },
            { "label": "Circle", "correct": false }
          ]
        },
        "top": "780px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 14,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which Roman god was often invoked at the start and end of rituals involving time?",
        "answers": {
          "options": [
            { "label": "Janus", "correct": true },
            { "label": "Jupiter", "correct": false },
            { "label": "Pluto", "correct": false },
            { "label": "Bacchus", "correct": false }
          ]
        },
        "top": "840px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 15,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "The reversal of time in many stories is often initiated by:",
        "answers": {
          "options": [
            { "label": "A broken hourglass", "correct": true },
            { "label": "A spoken incantation", "correct": false },
            { "label": "Touching a relic", "correct": false },
            { "label": "Staring at the moon", "correct": false }
          ]
        },
        "top": "900px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 16,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "An upward-spilling hourglass might appear during what kind of dream?",
        "answers": {
          "options": [
            { "label": "Lucid or prophetic dreams", "correct": true },
            { "label": "Stress dreams", "correct": false },
            { "label": "Night terrors", "correct": false },
            { "label": "Sleep paralysis", "correct": false }
          ]
        },
        "top": "960px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "In alchemy, reversing the flow of time is related to which concept?",
        "answers": {
          "options": [
            { "label": "The Philosopher’s Stone", "correct": true },
            { "label": "Transmutation", "correct": false },
            { "label": "The Black Sun", "correct": false },
            { "label": "Elixir of Silence", "correct": false }
          ]
        },
        "top": "1020px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 18,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What does the hourglass symbolize in Tarot?",
        "answers": {
          "options": [
            { "label": "Time-bound fate", "correct": true },
            { "label": "Abundance", "correct": false },
            { "label": "Emotion", "correct": false },
            { "label": "Knowledge", "correct": false }
          ]
        },
        "top": "1080px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 19,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What element rules time in the classical Greek system?",
        "answers": {
          "options": [
            { "label": "Air", "correct": true },
            { "label": "Water", "correct": false },
            { "label": "Earth", "correct": false },
            { "label": "Fire", "correct": false }
          ]
        },
        "top": "1140px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-06-30",
        "category": "Myth, Prophecy & Symbols",
        "question": "What mythical ritual causes an hourglass to spill upward, resetting a soul's timeline?",
        "answers": {
          "options": [
            { "label": "The Rite of Return", "correct": true },
            { "label": "The Pulse of Mirrors", "correct": false },
            { "label": "The Bell of Stillness", "correct": false },
            { "label": "The Whispering Veil", "correct": false }
          ]
        },
        "top": "1200px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-10-1": [
      {
        "id": 1,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "What is often symbolized by a mirror in mythology?",
        "answers": {
          "options": [
            {
              "label": "Truth",
              "correct": true
            },
            {
              "label": "Wealth",
              "correct": false
            },
            {
              "label": "Power",
              "correct": false
            },
            {
              "label": "War",
              "correct": false
            }
          ]
        },
        "top": "183px",
        "left": "287px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Greek myth, who was turned to stone by seeing their own reflection?",
        "answers": {
          "options": [
            {
              "label": "Narcissus",
              "correct": false
            },
            {
              "label": "Perseus",
              "correct": false
            },
            {
              "label": "Medusa",
              "correct": true
            },
            {
              "label": "Orpheus",
              "correct": false
            }
          ]
        },
        "top": "287px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which culture believed mirrors could trap souls?",
        "answers": {
          "options": [
            {
              "label": "Aztec",
              "correct": false
            },
            {
              "label": "Norse",
              "correct": false
            },
            {
              "label": "Egyptian",
              "correct": false
            },
            {
              "label": "Chinese",
              "correct": true
            }
          ]
        },
        "top": "391px",
        "left": "39px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "What is the symbolic meaning of broken mirrors?",
        "answers": {
          "options": [
            {
              "label": "Seven years of bad luck",
              "correct": true
            },
            {
              "label": "Eternal love",
              "correct": false
            },
            {
              "label": "Good fortune",
              "correct": false
            },
            {
              "label": "Silence",
              "correct": false
            }
          ]
        },
        "top": "335px",
        "left": "204px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "In folklore, what is a \u2018scrying mirror\u2019 used for?",
        "answers": {
          "options": [
            {
              "label": "Cooking",
              "correct": false
            },
            {
              "label": "Seeing the future",
              "correct": true
            },
            {
              "label": "Measuring time",
              "correct": false
            },
            {
              "label": "Starting fire",
              "correct": false
            }
          ]
        },
        "top": "562px",
        "left": "132px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which magical object shows 'the deepest desires of your heart'?",
        "answers": {
          "options": [
            {
              "label": "Seeing stone",
              "correct": false
            },
            {
              "label": "Mirror of Erised",
              "correct": true
            },
            {
              "label": "Truth glass",
              "correct": false
            },
            {
              "label": "Oracle orb",
              "correct": false
            }
          ]
        },
        "top": "391px",
        "left": "226px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 7,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "What animal is often associated with self-awareness through mirrors?",
        "answers": {
          "options": [
            {
              "label": "Crow",
              "correct": false
            },
            {
              "label": "Elephant",
              "correct": true
            },
            {
              "label": "Dog",
              "correct": false
            },
            {
              "label": "Rabbit",
              "correct": false
            }
          ]
        },
        "top": "322px",
        "left": "31px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 8,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which planet is symbolically tied to mirrors and reflection?",
        "answers": {
          "options": [
            {
              "label": "Mars",
              "correct": false
            },
            {
              "label": "Venus",
              "correct": true
            },
            {
              "label": "Jupiter",
              "correct": false
            },
            {
              "label": "Saturn",
              "correct": false
            }
          ]
        },
        "top": "542px",
        "left": "39px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 9,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "What term describes illusion or mirage in the desert?",
        "answers": {
          "options": [
            {
              "label": "Oasis",
              "correct": false
            },
            {
              "label": "Sandwake",
              "correct": false
            },
            {
              "label": "Fata Morgana",
              "correct": true
            },
            {
              "label": "Horizon Glimmer",
              "correct": false
            }
          ]
        },
        "top": "523px",
        "left": "330px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 10,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "Who was the Roman goddess of magic and crossroads, often seen in triple reflection?",
        "answers": {
          "options": [
            {
              "label": "Minerva",
              "correct": false
            },
            {
              "label": "Luna",
              "correct": false
            },
            {
              "label": "Hecate",
              "correct": true
            },
            {
              "label": "Vesta",
              "correct": false
            }
          ]
        },
        "top": "301px",
        "left": "331px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 11,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "In dreams, seeing your reflection might symbolize what?",
        "answers": {
          "options": [
            {
              "label": "Loss",
              "correct": false
            },
            {
              "label": "Discovery",
              "correct": true
            },
            {
              "label": "Fear",
              "correct": false
            },
            {
              "label": "Greed",
              "correct": false
            }
          ]
        },
        "top": "263px",
        "left": "133px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 12,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "What is the name of the Norse well of wisdom beneath the world tree?",
        "answers": {
          "options": [
            {
              "label": "Mimir\u2019s Well",
              "correct": true
            },
            {
              "label": "Odin\u2019s Pool",
              "correct": false
            },
            {
              "label": "Freyja\u2019s Fountain",
              "correct": false
            },
            {
              "label": "Yggdrasil Basin",
              "correct": false
            }
          ]
        },
        "top": "280px",
        "left": "31px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which literary work features mirrors as a passage to another world?",
        "answers": {
          "options": [
            {
              "label": "The Hobbit",
              "correct": false
            },
            {
              "label": "Through the Looking-Glass",
              "correct": true
            },
            {
              "label": "Beowulf",
              "correct": false
            },
            {
              "label": "The Odyssey",
              "correct": false
            }
          ]
        },
        "top": "94px",
        "left": "34px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 14,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "In Eastern traditions, what do round mirrors represent?",
        "answers": {
          "options": [
            {
              "label": "Unity and harmony",
              "correct": true
            },
            {
              "label": "Chaos",
              "correct": false
            },
            {
              "label": "Trickery",
              "correct": false
            },
            {
              "label": "Judgment",
              "correct": false
            }
          ]
        },
        "top": "316px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "What mirror-based superstition is common before a funeral?",
        "answers": {
          "options": [
            {
              "label": "Cover all mirrors",
              "correct": true
            },
            {
              "label": "Polish the biggest mirror",
              "correct": false
            },
            {
              "label": "Place a mirror in the coffin",
              "correct": false
            },
            {
              "label": "Break a mirror for luck",
              "correct": false
            }
          ]
        },
        "top": "319px",
        "left": "333px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 16,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "What was the purpose of obsidian mirrors to Mesoamerican priests?",
        "answers": {
          "options": [
            {
              "label": "Timekeeping",
              "correct": false
            },
            {
              "label": "Reflection",
              "correct": false
            },
            {
              "label": "Divination",
              "correct": true
            },
            {
              "label": "Fire starting",
              "correct": false
            }
          ]
        },
        "top": "363px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which of these is NOT a property often given to enchanted mirrors?",
        "answers": {
          "options": [
            {
              "label": "Reveal truth",
              "correct": false
            },
            {
              "label": "Talk",
              "correct": false
            },
            {
              "label": "Cause blindness",
              "correct": true
            },
            {
              "label": "Trap souls",
              "correct": false
            }
          ]
        },
        "top": "213px",
        "left": "101px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 20,
        "date": "2025-07-20",
        "category": "Myth, Prophecy & Symbols",
        "question": "Which ancient god is associated with perception and trickery?",
        "answers": {
          "options": [
            {
              "label": "Hermes",
              "correct": true
            },
            {
              "label": "Apollo",
              "correct": false
            },
            {
              "label": "Zeus",
              "correct": false
            },
            {
              "label": "Hephaestus",
              "correct": false
            }
          ]
        },
        "top": "545px",
        "left": "207px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-10-2": [
      {
        "id": 1,
        "question": "Which insect is most associated with transformation in folklore?",
        "answers": {
          "options": [
            { "label": "Butterfly", "correct": true },
            { "label": "Ant", "correct": false },
            { "label": "Moth", "correct": false },
            { "label": "Beetle", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Insects",
        "top": "120px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "question": "Which crystal is believed to enhance memory?",
        "answers": {
          "options": [
            { "label": "Amethyst", "correct": true },
            { "label": "Onyx", "correct": false },
            { "label": "Citrine", "correct": false },
            { "label": "Garnet", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Crystals",
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3,
        "question": "What family of instruments does the violin belong to?",
        "answers": {
          "options": [
            { "label": "Percussion", "correct": false },
            { "label": "Brass", "correct": false },
            { "label": "Woodwinds", "correct": false },
            { "label": "Strings", "correct": true }
          ]
        },
        "date": "2025-06-30",
        "category": "Musical Instruments",
        "top": "150px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4,
        "question": "Which insect is sacred in ancient Egyptian mythology?",
        "answers": {
          "options": [
            { "label": "Firefly", "correct": false },
            { "label": "Wasp", "correct": false },
            { "label": "Scarab beetle", "correct": true },
            { "label": "Dragonfly", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Insects",
        "top": "210px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "question": "What is the hardest known crystal on Earth?",
        "answers": {
          "options": [
            { "label": "Diamond", "correct": true },
            { "label": "Topaz", "correct": false },
            { "label": "Quartz", "correct": false },
            { "label": "Sapphire", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Crystals",
        "top": "80px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 6,
        "question": "Which instrument uses a double reed to create sound?",
        "answers": {
          "options": [
            { "label": "Flute", "correct": false },
            { "label": "Oboe", "correct": true },
            { "label": "Clarinet", "correct": false },
            { "label": "Trumpet", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Musical Instruments",
        "top": "260px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 7,
        "question": "Which gemstone is traditionally linked to intuition and prophecy?",
        "answers": {
          "options": [
            { "label": "Lapis Lazuli", "correct": true },
            { "label": "Ruby", "correct": false },
            { "label": "Amber", "correct": false },
            { "label": "Emerald", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Crystals",
        "top": "120px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 8,
        "question": "Which small insect can lift up to 50 times its body weight?",
        "answers": {
          "options": [
            { "label": "Bee", "correct": false },
            { "label": "Ant", "correct": true },
            { "label": "Cricket", "correct": false },
            { "label": "Weevil", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Insects",
        "top": "190px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "question": "Which ancient instrument is shaped like a bowl and produces resonant tones?",
        "answers": {
          "options": [
            { "label": "Singing bowl", "correct": true },
            { "label": "Steel drum", "correct": false },
            { "label": "Hang", "correct": false },
            { "label": "Timpani", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Musical Instruments",
        "top": "260px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 10,
        "question": "Which crystal is believed to calm anxiety and bring emotional stability?",
        "answers": {
          "options": [
            { "label": "Obsidian", "correct": false },
            { "label": "Citrine", "correct": false },
            { "label": "Rose Quartz", "correct": true },
            { "label": "Fluorite", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Crystals",
        "top": "300px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 11,
        "question": "What sound do cicadas use to attract mates?",
        "answers": {
          "options": [
            { "label": "High-pitched clicking", "correct": true },
            { "label": "Wing fluttering", "correct": false },
            { "label": "Buzzing hum", "correct": false },
            { "label": "Tapping", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Insects",
        "top": "140px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "question": "Which insect is known for its iridescent wings?",
        "answers": {
          "options": [
            { "label": "Wasp", "correct": false },
            { "label": "Flea", "correct": false },
            { "label": "Termite", "correct": false },
            { "label": "Dragonfly", "correct": true }
          ]
        },
        "date": "2025-06-30",
        "category": "Insects",
        "top": "150px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 13,
        "question": "Which crystal is known as the 'Stone of the Moon'?",
        "answers": {
          "options": [
            { "label": "Moonstone", "correct": true },
            { "label": "Selenite", "correct": false },
            { "label": "Quartz", "correct": false },
            { "label": "Labradorite", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Crystals",
        "top": "170px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 14,
        "question": "Which instrument is traditionally used in Celtic folk music?",
        "answers": {
          "options": [
            { "label": "Tin whistle", "correct": true },
            { "label": "Pan flute", "correct": false },
            { "label": "Didgeridoo", "correct": false },
            { "label": "Baglama", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Musical Instruments",
        "top": "190px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "question": "Which gem is said to banish nightmares and promote lucid dreaming?",
        "answers": {
          "options": [
            { "label": "Amethyst", "correct": true },
            { "label": "Ruby", "correct": false },
            { "label": "Onyx", "correct": false },
            { "label": "Opal", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Crystals",
        "top": "280px",
        "left": "210px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-10-3": [
      {
        "id": 1,
        "question": "Which metal is primarily used in blacksmithing due to its durability and workability?",
        "answers": {
          "options": [
            { "label": "Iron", "correct": true },
            { "label": "Copper", "correct": false },
            { "label": "Aluminum", "correct": false },
            { "label": "Lead", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metals",
        "top": "80px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "question": "What material is used in forges to reach the high temperatures needed to shape metal?",
        "answers": {
          "options": [
            { "label": "Coal", "correct": true },
            { "label": "Wood", "correct": false },
            { "label": "Charcoal", "correct": false },
            { "label": "Peat", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Coal",
        "top": "120px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 3,
        "question": "Which tool is essential for shaping metal on an anvil?",
        "answers": {
          "options": [
            { "label": "Hammer", "correct": true },
            { "label": "Tongs", "correct": false },
            { "label": "Bellows", "correct": false },
            { "label": "Chisel", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Blacksmith",
        "top": "100px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4,
        "question": "What color indicates that metal is at the ideal forging temperature?",
        "answers": {
          "options": [
            { "label": "Bright orange-yellow", "correct": true },
            { "label": "Blue", "correct": false },
            { "label": "White", "correct": false },
            { "label": "Dull red", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metalwork",
        "top": "140px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 5,
        "question": "Which metal is known for its resistance to rust?",
        "answers": {
          "options": [
            { "label": "Stainless steel", "correct": true },
            { "label": "Copper", "correct": false },
            { "label": "Iron", "correct": false },
            { "label": "Bronze", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metals",
        "top": "160px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6,
        "question": "Which substance is traditionally used to fuel a blacksmith’s forge?",
        "answers": {
          "options": [
            { "label": "Bituminous coal", "correct": true },
            { "label": "Anthracite coal", "correct": false },
            { "label": "Wood", "correct": false },
            { "label": "Peat", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Coal",
        "top": "200px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "question": "What is the name of the cooling process that increases metal hardness?",
        "answers": {
          "options": [
            { "label": "Quenching", "correct": true },
            { "label": "Tempering", "correct": false },
            { "label": "Forging", "correct": false },
            { "label": "Smelting", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Blacksmith",
        "top": "180px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 8,
        "question": "Which ancient civilization is credited with the earliest known iron smelting?",
        "answers": {
          "options": [
            { "label": "Hittites", "correct": true },
            { "label": "Romans", "correct": false },
            { "label": "Greeks", "correct": false },
            { "label": "Egyptians", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metalwork",
        "top": "220px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 9,
        "question": "What term describes the carbon-rich fuel derived from coal used in metallurgy?",
        "answers": {
          "options": [
            { "label": "Coke", "correct": true },
            { "label": "Slag", "correct": false },
            { "label": "Ore", "correct": false },
            { "label": "Char", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Coal",
        "top": "240px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 10,
        "question": "Which metal alloy is made primarily of copper and tin?",
        "answers": {
          "options": [
            { "label": "Bronze", "correct": true },
            { "label": "Brass", "correct": false },
            { "label": "Steel", "correct": false },
            { "label": "Nickel silver", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metals",
        "top": "260px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 11,
        "question": "What tool controls airflow into a forge to increase heat?",
        "answers": {
          "options": [
            { "label": "Bellows", "correct": true },
            { "label": "Tongs", "correct": false },
            { "label": "Crucible", "correct": false },
            { "label": "Clamp", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Blacksmith",
        "top": "280px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "question": "Which black metal is known for its ability to absorb and radiate heat efficiently?",
        "answers": {
          "options": [
            { "label": "Cast iron", "correct": true },
            { "label": "Aluminum", "correct": false },
            { "label": "Silver", "correct": false },
            { "label": "Tin", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metals",
        "top": "300px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 13,
        "question": "What is the blacksmith’s term for unwanted residue formed during forging?",
        "answers": {
          "options": [
            { "label": "Slag", "correct": true },
            { "label": "Grain", "correct": false },
            { "label": "Dross", "correct": false },
            { "label": "Oxide", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Blacksmith",
        "top": "320px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 14,
        "question": "Which precious metal is known for being the most conductive?",
        "answers": {
          "options": [
            { "label": "Silver", "correct": true },
            { "label": "Gold", "correct": false },
            { "label": "Copper", "correct": false },
            { "label": "Platinum", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metals",
        "top": "340px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 15,
        "question": "Which metal is added to steel to make it stainless?",
        "answers": {
          "options": [
            { "label": "Chromium", "correct": true },
            { "label": "Nickel", "correct": false },
            { "label": "Zinc", "correct": false },
            { "label": "Cobalt", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metals",
        "top": "360px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 16,
        "question": "What is the name of the furnace used for smelting iron ore?",
        "answers": {
          "options": [
            { "label": "Blast furnace", "correct": true },
            { "label": "Kiln", "correct": false },
            { "label": "Forge", "correct": false },
            { "label": "Crucible", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Metalwork",
        "top": "380px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-11-1": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "Who is known as the 'father of modern cartography'?",
        "answers": {
          "options": [
            { "label": "Gerardus Mercator", "correct": true },
            { "label": "Ptolemy", "correct": false },
            { "label": "Vespucci", "correct": false },
            { "label": "Da Vinci", "correct": false }
          ]
        },
        "top": "12px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "Which explorer is credited with circumnavigating the globe?",
        "answers": {
          "options": [
            { "label": "Ferdinand Magellan", "correct": true },
            { "label": "James Cook", "correct": false },
            { "label": "Marco Polo", "correct": false },
            { "label": "Henry Hudson", "correct": false }
          ]
        },
        "top": "82px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "What ancient map famously shows parts of Antarctica ice-free?",
        "answers": {
          "options": [
            { "label": "Piri Reis Map", "correct": true },
            { "label": "Vinland Map", "correct": false },
            { "label": "Tabula Rogeriana", "correct": false },
            { "label": "Hereford Mappa Mundi", "correct": false }
          ]
        },
        "top": "160px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "Which expedition vanished while searching for the Northwest Passage?",
        "answers": {
          "options": [
            { "label": "Franklin Expedition", "correct": true },
            { "label": "Shackleton's Endurance", "correct": false },
            { "label": "Magellan’s Armada", "correct": false },
            { "label": "Beagle Voyage", "correct": false }
          ]
        },
        "top": "215px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "What does a compass rose represent on a map?",
        "answers": {
          "options": [
            { "label": "Cardinal directions", "correct": true },
            { "label": "Map scale", "correct": false },
            { "label": "Altitude", "correct": false },
            { "label": "Legend symbols", "correct": false }
          ]
        },
        "top": "260px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "Where did Marco Polo famously travel?",
        "answers": {
          "options": [
            { "label": "China", "correct": true },
            { "label": "Brazil", "correct": false },
            { "label": "South Africa", "correct": false },
            { "label": "Greenland", "correct": false }
          ]
        },
        "top": "315px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "Which civilization created the first known maps?",
        "answers": {
          "options": [
            { "label": "Babylonians", "correct": true },
            { "label": "Greeks", "correct": false },
            { "label": "Romans", "correct": false },
            { "label": "Vikings", "correct": false }
          ]
        },
        "top": "370px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "Who led the first successful expedition to the South Pole?",
        "answers": {
          "options": [
            { "label": "Roald Amundsen", "correct": true },
            { "label": "Robert Falcon Scott", "correct": false },
            { "label": "Ernest Shackleton", "correct": false },
            { "label": "Richard Byrd", "correct": false }
          ]
        },
        "top": "430px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "What tool was essential for early navigators to determine latitude?",
        "answers": {
          "options": [
            { "label": "Astrolabe", "correct": true },
            { "label": "Compass", "correct": false },
            { "label": "Sundial", "correct": false },
            { "label": "Sextant", "correct": false }
          ]
        },
        "top": "490px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "What explorer searched for El Dorado?",
        "answers": {
          "options": [
            { "label": "Sir Walter Raleigh", "correct": true },
            { "label": "Francisco Pizarro", "correct": false },
            { "label": "Vasco da Gama", "correct": false },
            { "label": "Marco Polo", "correct": false }
          ]
        },
        "top": "550px",
        "left": "160px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 11,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "Which Greek scholar wrote 'Geographia'?",
        "answers": {
          "options": [
            { "label": "Ptolemy", "correct": true },
            { "label": "Socrates", "correct": false },
            { "label": "Pliny the Elder", "correct": false },
            { "label": "Aristotle", "correct": false }
          ]
        },
        "top": "600px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "What is a 'portolan chart'?",
        "answers": {
          "options": [
            { "label": "A medieval nautical map", "correct": true },
            { "label": "A guide to ancient cities", "correct": false },
            { "label": "A religious pilgrimage route", "correct": false },
            { "label": "A trader’s ledger", "correct": false }
          ]
        },
        "top": "660px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 13,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "Who was the first European to reach India by sea?",
        "answers": {
          "options": [
            { "label": "Vasco da Gama", "correct": true },
            { "label": "Christopher Columbus", "correct": false },
            { "label": "Amerigo Vespucci", "correct": false },
            { "label": "Bartholomeu Dias", "correct": false }
          ]
        },
        "top": "720px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "What does the term 'terra incognita' mean on a map?",
        "answers": {
          "options": [
            { "label": "Unknown land", "correct": true },
            { "label": "Dangerous territory", "correct": false },
            { "label": "Sacred ground", "correct": false },
            { "label": "Foreign kingdom", "correct": false }
          ]
        },
        "top": "770px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "Which explorer’s crew completed the circumnavigation after his death?",
        "answers": {
          "options": [
            { "label": "Ferdinand Magellan", "correct": true },
            { "label": "James Cook", "correct": false },
            { "label": "Francis Drake", "correct": false },
            { "label": "Leif Erikson", "correct": false }
          ]
        },
        "top": "830px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 16,
        "date": "2025-06-30",
        "category": "Cartography & Ancient Maps",
        "question": "Which continent is not shown on early world maps?",
        "answers": {
          "options": [
            { "label": "Australia", "correct": true },
            { "label": "Europe", "correct": false },
            { "label": "Africa", "correct": false },
            { "label": "Asia", "correct": false }
          ]
        },
        "top": "880px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 17,
        "date": "2025-06-30",
        "category": "Explorers & Lost Expeditions",
        "question": "Who charted the Great Barrier Reef?",
        "answers": {
          "options": [
            { "label": "James Cook", "correct": true },
            { "label": "Francis Drake", "correct": false },
            { "label": "Roald Amundsen", "correct": false },
            { "label": "Marco Polo", "correct": false }
          ]
        },
        "top": "940px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-11-2": [
      {
        "id": 1,
        "question": "Which metal is known for its highest electrical conductivity?",
        "answers": {
          "options": [
            {
              "label": "Gold",
              "correct": false
            },
            {
              "label": "Silver",
              "correct": true
            },
            {
              "label": "Copper",
              "correct": false
            },
            {
              "label": "Platinum",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "40px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "question": "Which element is represented by the symbol 'Au'?",
        "answers": {
          "options": [
            {
              "label": "Aluminum",
              "correct": false
            },
            {
              "label": "Silver",
              "correct": false
            },
            {
              "label": "Gold",
              "correct": true
            },
            {
              "label": "Argon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "80px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 3,
        "question": "Which process is used to extract pure metal from ore?",
        "answers": {
          "options": [
            {
              "label": "Refining",
              "correct": true
            },
            {
              "label": "Cooling",
              "correct": false
            },
            {
              "label": "Forging",
              "correct": false
            },
            {
              "label": "Casting",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "120px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "question": "Which metal is commonly used for jewelry and doesn't tarnish easily?",
        "answers": {
          "options": [
            {
              "label": "Copper",
              "correct": false
            },
            {
              "label": "Platinum",
              "correct": true
            },
            {
              "label": "Lead",
              "correct": false
            },
            {
              "label": "Zinc",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "160px",
        "left": "190px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "question": "Which metal is liquid at room temperature?",
        "answers": {
          "options": [
            {
              "label": "Lead",
              "correct": false
            },
            {
              "label": "Mercury",
              "correct": true
            },
            {
              "label": "Aluminum",
              "correct": false
            },
            {
              "label": "Titanium",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "200px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 6,
        "question": "Which lightweight metal is commonly used in aerospace?",
        "answers": {
          "options": [
            {
              "label": "Iron",
              "correct": false
            },
            {
              "label": "Titanium",
              "correct": false
            },
            {
              "label": "Aluminum",
              "correct": true
            },
            {
              "label": "Nickel",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "240px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 7,
        "question": "Which precious metal has the chemical symbol 'Pt'?",
        "answers": {
          "options": [
            {
              "label": "Palladium",
              "correct": false
            },
            {
              "label": "Platinum",
              "correct": true
            },
            {
              "label": "Plutonium",
              "correct": false
            },
            {
              "label": "Phosphorus",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "280px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 8,
        "question": "Which metal is most resistant to corrosion?",
        "answers": {
          "options": [
            {
              "label": "Iron",
              "correct": false
            },
            {
              "label": "Zinc",
              "correct": false
            },
            {
              "label": "Gold",
              "correct": true
            },
            {
              "label": "Lead",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "320px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "question": "Which metal is added to steel to make it stainless?",
        "answers": {
          "options": [
            {
              "label": "Tin",
              "correct": false
            },
            {
              "label": "Nickel",
              "correct": false
            },
            {
              "label": "Chromium",
              "correct": true
            },
            {
              "label": "Copper",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "360px",
        "left": "190px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "question": "Which precious metal is often used in catalytic converters?",
        "answers": {
          "options": [
            {
              "label": "Silver",
              "correct": false
            },
            {
              "label": "Rhodium",
              "correct": true
            },
            {
              "label": "Gold",
              "correct": false
            },
            {
              "label": "Aluminum",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Precious Metals & Metallurgy",
        "top": "400px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 11,
        "question": "What is the moon phase called when it appears fully illuminated?",
        "answers": {
          "options": [
            {
              "label": "New Moon",
              "correct": false
            },
            {
              "label": "Crescent Moon",
              "correct": false
            },
            {
              "label": "Full Moon",
              "correct": true
            },
            {
              "label": "Gibbous Moon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "440px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "question": "What was the name of the first spacecraft to land humans on the moon?",
        "answers": {
          "options": [
            {
              "label": "Apollo 11",
              "correct": true
            },
            {
              "label": "Luna 2",
              "correct": false
            },
            {
              "label": "Gemini 5",
              "correct": false
            },
            {
              "label": "Voyager 1",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "480px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "question": "What causes the moon to shine in the night sky?",
        "answers": {
          "options": [
            {
              "label": "Its own light",
              "correct": false
            },
            {
              "label": "Reflected sunlight",
              "correct": true
            },
            {
              "label": "Lunar electricity",
              "correct": false
            },
            {
              "label": "Magnetic fields",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "520px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "question": "How long does it take the moon to orbit the Earth?",
        "answers": {
          "options": [
            {
              "label": "7 days",
              "correct": false
            },
            {
              "label": "14 days",
              "correct": false
            },
            {
              "label": "27.3 days",
              "correct": true
            },
            {
              "label": "365 days",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "560px",
        "left": "190px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 15,
        "question": "Which moon mission left the first human footprint on lunar soil?",
        "answers": {
          "options": [
            {
              "label": "Apollo 10",
              "correct": false
            },
            {
              "label": "Apollo 11",
              "correct": true
            },
            {
              "label": "Apollo 13",
              "correct": false
            },
            {
              "label": "Luna 9",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "600px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "question": "What is the surface of the moon mostly made of?",
        "answers": {
          "options": [
            {
              "label": "Ice",
              "correct": false
            },
            {
              "label": "Sand",
              "correct": false
            },
            {
              "label": "Dust and rock",
              "correct": true
            },
            {
              "label": "Metal",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "640px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 17,
        "question": "Which country launched the Chang'e moon missions?",
        "answers": {
          "options": [
            {
              "label": "USA",
              "correct": false
            },
            {
              "label": "India",
              "correct": false
            },
            {
              "label": "China",
              "correct": true
            },
            {
              "label": "Japan",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "680px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "question": "What are the dark plains on the moon called?",
        "answers": {
          "options": [
            {
              "label": "Seas",
              "correct": false
            },
            {
              "label": "Maria",
              "correct": true
            },
            {
              "label": "Craters",
              "correct": false
            },
            {
              "label": "Deserts",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "720px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 19,
        "question": "Which side of the moon always faces Earth?",
        "answers": {
          "options": [
            {
              "label": "North",
              "correct": false
            },
            {
              "label": "Back",
              "correct": false
            },
            {
              "label": "Far",
              "correct": false
            },
            {
              "label": "Near",
              "correct": true
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "760px",
        "left": "190px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "question": "What\u2019s the name of the theoretical lunar base NASA hopes to build?",
        "answers": {
          "options": [
            {
              "label": "LunaCamp",
              "correct": false
            },
            {
              "label": "MoonPod",
              "correct": false
            },
            {
              "label": "Artemis Base Camp",
              "correct": true
            },
            {
              "label": "MoonPoint",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Moon Science & Lunar Exploration",
        "top": "800px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-11-3": [
      {
        "id": 1,
        "question": "What is the sum of the interior angles of a triangle?",
        "answers": {
          "options": [
            { "label": "180°", "correct": true },
            { "label": "90°", "correct": false },
            { "label": "360°", "correct": false },
            { "label": "270°", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "120px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 2,
        "question": "What shape has five sides?",
        "answers": {
          "options": [
            { "label": "Pentagon", "correct": true },
            { "label": "Hexagon", "correct": false },
            { "label": "Octagon", "correct": false },
            { "label": "Triangle", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "90px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 3,
        "question": "What is the value of Pi (π) rounded to two decimal places?",
        "answers": {
          "options": [
            { "label": "3.14", "correct": true },
            { "label": "3.13", "correct": false },
            { "label": "3.15", "correct": false },
            { "label": "3.12", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "150px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 4,
        "question": "Which term refers to a line that touches a circle at exactly one point?",
        "answers": {
          "options": [
            { "label": "Tangent", "correct": true },
            { "label": "Chord", "correct": false },
            { "label": "Radius", "correct": false },
            { "label": "Diameter", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "80px",
        "left": "260px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "question": "Which formula is used to calculate the area of a rectangle?",
        "answers": {
          "options": [
            { "label": "Length × Width", "correct": true },
            { "label": "Base × Height ÷ 2", "correct": false },
            { "label": "π × radius²", "correct": false },
            { "label": "Side × Side", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "180px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6,
        "question": "What do you call a triangle with two equal sides?",
        "answers": {
          "options": [
            { "label": "Isosceles", "correct": true },
            { "label": "Scalene", "correct": false },
            { "label": "Equilateral", "correct": false },
            { "label": "Right", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "190px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 7,
        "question": "What is 12 × 12?",
        "answers": {
          "options": [
            { "label": "144", "correct": true },
            { "label": "124", "correct": false },
            { "label": "132", "correct": false },
            { "label": "122", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "210px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 8,
        "question": "What is the Pythagorean Theorem?",
        "answers": {
          "options": [
            { "label": "a² + b² = c²", "correct": true },
            { "label": "a + b = c", "correct": false },
            { "label": "2a + b = c", "correct": false },
            { "label": "a² - b² = c²", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "230px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "question": "Which shape has no corners?",
        "answers": {
          "options": [
            { "label": "Circle", "correct": true },
            { "label": "Square", "correct": false },
            { "label": "Triangle", "correct": false },
            { "label": "Pentagon", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "260px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 10,
        "question": "Which of these is an example of a 3D shape?",
        "answers": {
          "options": [
            { "label": "Sphere", "correct": true },
            { "label": "Square", "correct": false },
            { "label": "Rectangle", "correct": false },
            { "label": "Rhombus", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Geometry & Mathematics",
        "top": "290px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "question": "What is the sum of the interior angles of a hexagon?",
        "answers": {
          "options": [
            {
              "label": "720\u00b0",
              "correct": true
            },
            {
              "label": "540\u00b0",
              "correct": false
            },
            {
              "label": "360\u00b0",
              "correct": false
            },
            {
              "label": "600\u00b0",
              "correct": false
            }
          ]
        },
        "id": 11,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "363px",
        "left": "230px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "question": "Which shape has all sides equal and all angles 90 degrees?",
        "answers": {
          "options": [
            {
              "label": "Square",
              "correct": true
            },
            {
              "label": "Rectangle",
              "correct": false
            },
            {
              "label": "Rhombus",
              "correct": false
            },
            {
              "label": "Trapezoid",
              "correct": false
            }
          ]
        },
        "id": 12,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "111px",
        "left": "221px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "question": "What is the mathematical constant represented by the ratio of a circle\u2019s circumference to its diameter?",
        "answers": {
          "options": [
            {
              "label": "\u03c0 (Pi)",
              "correct": true
            },
            {
              "label": "e",
              "correct": false
            },
            {
              "label": "\u03a6 (Phi)",
              "correct": false
            },
            {
              "label": "i",
              "correct": false
            }
          ]
        },
        "id": 13,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "272px",
        "left": "178px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "question": "Which triangle has all three sides of different lengths?",
        "answers": {
          "options": [
            {
              "label": "Scalene",
              "correct": true
            },
            {
              "label": "Isosceles",
              "correct": false
            },
            {
              "label": "Equilateral",
              "correct": false
            },
            {
              "label": "Right",
              "correct": false
            }
          ]
        },
        "id": 14,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "480px",
        "left": "202px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "question": "What do you call a polygon with ten sides?",
        "answers": {
          "options": [
            {
              "label": "Decagon",
              "correct": true
            },
            {
              "label": "Hexagon",
              "correct": false
            },
            {
              "label": "Heptagon",
              "correct": false
            },
            {
              "label": "Nonagon",
              "correct": false
            }
          ]
        },
        "id": 15,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "378px",
        "left": "246px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "question": "What is the area of a circle with radius 3?",
        "answers": {
          "options": [
            {
              "label": "Approximately 28.27",
              "correct": true
            },
            {
              "label": "Approximately 18.85",
              "correct": false
            },
            {
              "label": "9",
              "correct": false
            },
            {
              "label": "6\u03c0",
              "correct": false
            }
          ]
        },
        "id": 16,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "433px",
        "left": "98px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "question": "Which branch of mathematics deals with shapes, sizes, and properties of space?",
        "answers": {
          "options": [
            {
              "label": "Geometry",
              "correct": true
            },
            {
              "label": "Algebra",
              "correct": false
            },
            {
              "label": "Calculus",
              "correct": false
            },
            {
              "label": "Trigonometry",
              "correct": false
            }
          ]
        },
        "id": 17,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "375px",
        "left": "213px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "question": "A right triangle has one angle of 90\u00b0. What is the sum of the other two angles?",
        "answers": {
          "options": [
            {
              "label": "90\u00b0",
              "correct": true
            },
            {
              "label": "180\u00b0",
              "correct": false
            },
            {
              "label": "60\u00b0",
              "correct": false
            },
            {
              "label": "120\u00b0",
              "correct": false
            }
          ]
        },
        "id": 18,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "165px",
        "left": "192px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "question": "Which solid has 6 square faces?",
        "answers": {
          "options": [
            {
              "label": "Cube",
              "correct": true
            },
            {
              "label": "Rectangular Prism",
              "correct": false
            },
            {
              "label": "Cylinder",
              "correct": false
            },
            {
              "label": "Tetrahedron",
              "correct": false
            }
          ]
        },
        "id": 19,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "440px",
        "left": "97px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "question": "What is the name for a closed figure with three sides?",
        "answers": {
          "options": [
            {
              "label": "Triangle",
              "correct": true
            },
            {
              "label": "Quadrilateral",
              "correct": false
            },
            {
              "label": "Pentagon",
              "correct": false
            },
            {
              "label": "Circle",
              "correct": false
            }
          ]
        },
        "id": 20,
        "date": "2025-07-20",
        "category": "Geometry & Mathematics",
        "top": "132px",
        "left": "268px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }

      // You can continue similarly for 11–20.
    ], "game1-12-1": [
      {
        "id": 1,
        "question": "What shape is the traditional Roman scutum shield?",
        "answers": {
          "options": [
            { "label": "Rectangular", "correct": true },
            { "label": "Round", "correct": false },
            { "label": "Oval", "correct": false },
            { "label": "Triangular", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Shields",
        "top": "80px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 2,
        "question": "Which formation did Greek hoplites famously use in battle?",
        "answers": {
          "options": [
            { "label": "Phalanx", "correct": true },
            { "label": "Testudo", "correct": false },
            { "label": "Wedge", "correct": false },
            { "label": "Column", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Battle Strategies",
        "top": "130px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3,
        "question": "Which battle marked the defeat of Napoleon?",
        "answers": {
          "options": [
            { "label": "Battle of Waterloo", "correct": true },
            { "label": "Battle of Austerlitz", "correct": false },
            { "label": "Battle of Leipzig", "correct": false },
            { "label": "Battle of Borodino", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Famous Battles",
        "top": "180px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "question": "What was the purpose of a kite shield in medieval warfare?",
        "answers": {
          "options": [
            { "label": "To protect the legs and body while mounted", "correct": true },
            { "label": "To serve as a ranged weapon", "correct": false },
            { "label": "To deflect cannonballs", "correct": false },
            { "label": "For ceremonial use only", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Shields",
        "top": "230px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "question": "Which battle tactic involves surrounding the enemy on all sides?",
        "answers": {
          "options": [
            { "label": "Encirclement", "correct": true },
            { "label": "Pincer move", "correct": false },
            { "label": "Siege", "correct": false },
            { "label": "Feigned retreat", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Battle Strategies",
        "top": "270px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "question": "Which shield type was used by Viking warriors?",
        "answers": {
          "options": [
            { "label": "Round wooden shield", "correct": true },
            { "label": "Kite shield", "correct": false },
            { "label": "Tower shield", "correct": false },
            { "label": "Pavise", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Shields",
        "top": "310px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 7,
        "question": "The Battle of Hastings in 1066 was fought in which country?",
        "answers": {
          "options": [
            { "label": "England", "correct": true },
            { "label": "France", "correct": false },
            { "label": "Scotland", "correct": false },
            { "label": "Ireland", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Famous Battles",
        "top": "340px",
        "left": "200px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "question": "What is the purpose of a pavise shield?",
        "answers": {
          "options": [
            { "label": "To protect archers while reloading", "correct": true },
            { "label": "To block cavalry charges", "correct": false },
            { "label": "To carry provisions", "correct": false },
            { "label": "For jousting", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Shields",
        "top": "370px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "question": "Which ancient general is famous for using the feigned retreat strategy?",
        "answers": {
          "options": [
            { "label": "Genghis Khan", "correct": true },
            { "label": "Julius Caesar", "correct": false },
            { "label": "Alexander the Great", "correct": false },
            { "label": "Sun Tzu", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Battle Strategies",
        "top": "400px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 10,
        "question": "What battle is considered the turning point of the American Civil War?",
        "answers": {
          "options": [
            { "label": "Battle of Gettysburg", "correct": true },
            { "label": "Battle of Antietam", "correct": false },
            { "label": "Battle of Bull Run", "correct": false },
            { "label": "Battle of Fort Sumter", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Famous Battles",
        "top": "420px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "question": "What material was commonly used to reinforce medieval shields?",
        "answers": {
          "options": [
            {
              "label": "Iron",
              "correct": true
            },
            {
              "label": "Wood",
              "correct": false
            },
            {
              "label": "Bronze",
              "correct": false
            },
            {
              "label": "Lead",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Shields",
        "top": "100px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "question": "Which general used elephants in battle across the Alps?",
        "answers": {
          "options": [
            {
              "label": "Hannibal",
              "correct": true
            },
            {
              "label": "Julius Caesar",
              "correct": false
            },
            {
              "label": "Xerxes",
              "correct": false
            },
            {
              "label": "Napoleon",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Famous Battles",
        "top": "130px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "question": "The 'testudo' formation was primarily used by which army?",
        "answers": {
          "options": [
            {
              "label": "Romans",
              "correct": true
            },
            {
              "label": "Macedonians",
              "correct": false
            },
            {
              "label": "Persians",
              "correct": false
            },
            {
              "label": "Mongols",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Battle Strategies",
        "top": "160px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "question": "Which shield was favored by Greek hoplites?",
        "answers": {
          "options": [
            {
              "label": "Aspis",
              "correct": true
            },
            {
              "label": "Scutum",
              "correct": false
            },
            {
              "label": "Pavise",
              "correct": false
            },
            {
              "label": "Kite Shield",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Shields",
        "top": "190px",
        "left": "150px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "question": "The tactic of drawing the enemy into a trap is called?",
        "answers": {
          "options": [
            {
              "label": "Ambush",
              "correct": true
            },
            {
              "label": "Encirclement",
              "correct": false
            },
            {
              "label": "Flanking",
              "correct": false
            },
            {
              "label": "Breakthrough",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Battle Strategies",
        "top": "220px",
        "left": "180px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 16,
        "question": "Which battle was fought between Spartans and Persians?",
        "answers": {
          "options": [
            {
              "label": "Battle of Thermopylae",
              "correct": true
            },
            {
              "label": "Battle of Gaugamela",
              "correct": false
            },
            {
              "label": "Battle of Salamis",
              "correct": false
            },
            {
              "label": "Battle of Chaeronea",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Famous Battles",
        "top": "250px",
        "left": "210px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "question": "Which shield was used by Roman legionaries?",
        "answers": {
          "options": [
            {
              "label": "Scutum",
              "correct": true
            },
            {
              "label": "Pavise",
              "correct": false
            },
            {
              "label": "Aspis",
              "correct": false
            },
            {
              "label": "Targe",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Shields",
        "top": "280px",
        "left": "240px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 18,
        "question": "Which battle strategy involves dividing forces and attacking from sides?",
        "answers": {
          "options": [
            {
              "label": "Double envelopment",
              "correct": true
            },
            {
              "label": "Siege",
              "correct": false
            },
            {
              "label": "Testudo",
              "correct": false
            },
            {
              "label": "Guerrilla",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Battle Strategies",
        "top": "310px",
        "left": "270px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 19,
        "question": "Which general led the Allied forces on D-Day?",
        "answers": {
          "options": [
            {
              "label": "Dwight D. Eisenhower",
              "correct": true
            },
            {
              "label": "Patton",
              "correct": false
            },
            {
              "label": "Rommel",
              "correct": false
            },
            {
              "label": "Montgomery",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Famous Battles",
        "top": "340px",
        "left": "300px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "question": "Which type of shield was often used by archers?",
        "answers": {
          "options": [
            {
              "label": "Pavise",
              "correct": true
            },
            {
              "label": "Targe",
              "correct": false
            },
            {
              "label": "Scutum",
              "correct": false
            },
            {
              "label": "Aspis",
              "correct": false
            }
          ]
        },
        "date": "2025-07-20",
        "category": "Shields",
        "top": "370px",
        "left": "330px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      }
    ], "game1-12-2": [
      {
        "id": 1,
        "question": "Which device is traditionally used to decode Caesar ciphers?",
        "answers": {
          "options": [
            { "label": "Enigma machine", "correct": false },
            { "label": "Decoder ring", "correct": true },
            { "label": "Punch card", "correct": false },
            { "label": "Morse switch", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cyphers & Mysteries",
        "top": "80px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "question": "What type of key is used in symmetric encryption?",
        "answers": {
          "options": [
            { "label": "Public key", "correct": false },
            { "label": "Master key", "correct": false },
            { "label": "Shared secret key", "correct": true },
            { "label": "Quantum key", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Keys & Encryption",
        "top": "150px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "question": "Which ancient device was used to encrypt messages using rods and parchment?",
        "answers": {
          "options": [
            { "label": "Cryptex", "correct": false },
            { "label": "Scytale", "correct": true },
            { "label": "Codex", "correct": false },
            { "label": "Cipher disc", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Historical Ciphers",
        "top": "210px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "question": "In literature, which famous key opens the door to Wonderland?",
        "answers": {
          "options": [
            { "label": "Glass key", "correct": false },
            { "label": "Golden key", "correct": true },
            { "label": "Ivory key", "correct": false },
            { "label": "Clockwork key", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Literary Mysteries",
        "top": "280px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 5,
        "question": "What kind of key is used to unlock a musical piece?",
        "answers": {
          "options": [
            { "label": "Key of C", "correct": true },
            { "label": "Chord lock", "correct": false },
            { "label": "Sound gate", "correct": false },
            { "label": "Melody cipher", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Symbolic Keys",
        "top": "340px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 6,
        "question": "Which of these is NOT a type of classical cipher?",
        "answers": {
          "options": [
            { "label": "Pigpen cipher", "correct": false },
            { "label": "Vigenère cipher", "correct": false },
            { "label": "Rubik cipher", "correct": true },
            { "label": "Playfair cipher", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cyphers & Mysteries",
        "top": "400px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 7,
        "question": "What does the term ‘keyhole archaeology’ refer to?",
        "answers": {
          "options": [
            { "label": "Tiny excavation tools", "correct": false },
            { "label": "Small test digs to uncover clues", "correct": true },
            { "label": "Unlocking temple doors", "correct": false },
            { "label": "Hidden tomb chambers", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Unlocking Mysteries",
        "top": "460px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "question": "Which famous unsolved cipher was sent to a newspaper by the Zodiac Killer?",
        "answers": {
          "options": [
            { "label": "Z408 cipher", "correct": true },
            { "label": "Enigma cipher", "correct": false },
            { "label": "Black Dahlia code", "correct": false },
            { "label": "Sumerian glyphs", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cryptology & Forensics",
        "top": "520px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 9,
        "question": "What is a ‘master key’?",
        "answers": {
          "options": [
            { "label": "A key that opens all locks in a system", "correct": true },
            { "label": "A symbolic representation of a king", "correct": false },
            { "label": "A high-security password", "correct": false },
            { "label": "A blueprint for escape rooms", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Keys & Systems",
        "top": "580px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 10,
        "question": "What is the purpose of a substitution cipher?",
        "answers": {
          "options": [
            { "label": "To swap entire words for synonyms", "correct": false },
            { "label": "To replace letters with other letters or symbols", "correct": true },
            { "label": "To hide messages in paintings", "correct": false },
            { "label": "To scramble sounds into static", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cyphers & Mysteries",
        "top": "640px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 11,
        "question": "Which famous unsolved code appears on the sculpture Kryptos at CIA headquarters?",
        "answers": {
          "options": [
            { "label": "Morse fragment", "correct": false },
            { "label": "K4 cipher", "correct": true },
            { "label": "Cipher wheel", "correct": false },
            { "label": "Lambda sequence", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cyphers & Mysteries",
        "top": "700px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 12,
        "question": "What ancient civilization used the Linear B script, long undeciphered?",
        "answers": {
          "options": [
            { "label": "Sumerians", "correct": false },
            { "label": "Minoans", "correct": true },
            { "label": "Persians", "correct": false },
            { "label": "Etruscans", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Unlocking Ancient Mysteries",
        "top": "760px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 13,
        "question": "What field of study involves cracking codes and creating secure messages?",
        "answers": {
          "options": [
            { "label": "Numismatics", "correct": false },
            { "label": "Cryptography", "correct": true },
            { "label": "Topology", "correct": false },
            { "label": "Semiotics", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cyphers & Cryptography",
        "top": "820px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "question": "Which famous codebreaker helped crack the Enigma machine?",
        "answers": {
          "options": [
            { "label": "Nikola Tesla", "correct": false },
            { "label": "Alan Turing", "correct": true },
            { "label": "Marie Curie", "correct": false },
            { "label": "Isaac Newton", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cyphers & WWII",
        "top": "880px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 15,
        "question": "What is a 'cryptic crossword' known for?",
        "answers": {
          "options": [
            { "label": "No definitions at all", "correct": false },
            { "label": "Having clues based on riddles and wordplay", "correct": true },
            { "label": "Using only foreign words", "correct": false },
            { "label": "Being written backward", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Word Puzzles & Codes",
        "top": "940px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 16,
        "question": "What term describes the unlocking of coded historical manuscripts?",
        "answers": {
          "options": [
            { "label": "Archaeoglyphy", "correct": false },
            { "label": "Paleography", "correct": true },
            { "label": "Decipherism", "correct": false },
            { "label": "Manuscriptology", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Unlocking Ancient Mysteries",
        "top": "1000px",
        "left": "140px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "question": "What is a 'cipher wheel' used for?",
        "answers": {
          "options": [
            { "label": "Finding treasure", "correct": false },
            { "label": "Navigating the stars", "correct": false },
            { "label": "Encrypting messages by rotation", "correct": true },
            { "label": "Measuring wind direction", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Mechanical Cyphers",
        "top": "1060px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 18,
        "question": "Which ancient codex is still undeciphered and full of strange illustrations?",
        "answers": {
          "options": [
            { "label": "Voynich Manuscript", "correct": true },
            { "label": "Rosetta Codex", "correct": false },
            { "label": "Alexandrian Scroll", "correct": false },
            { "label": "Sanskrit Leaves", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Unsolved Codes",
        "top": "1120px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 19,
        "question": "Which modern technology relies heavily on encryption keys?",
        "answers": {
          "options": [
            { "label": "GPS", "correct": false },
            { "label": "Cloud storage", "correct": true },
            { "label": "Bluetooth pairing", "correct": false },
            { "label": "3D printing", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Keys & Digital Security",
        "top": "1180px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "question": "Which element of a lock aligns the pins to allow a key to turn?",
        "answers": {
          "options": [
            { "label": "Lever plate", "correct": false },
            { "label": "Warding edge", "correct": false },
            { "label": "Shear line", "correct": true },
            { "label": "Keyway groove", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Lock Mechanisms",
        "top": "1240px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      }
    ], "game1-12-3": [
      {
        "id": 1,
        "question": "What is the primary source of energy for most fire on Earth?",
        "answers": {
          "options": [
            { "label": "Electricity", "correct": false },
            { "label": "Sunlight", "correct": false },
            { "label": "Oxygen", "correct": true },
            { "label": "Friction", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Fire & Energy",
        "top": "80px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "question": "Which part of the fire triangle is removed to extinguish a fire?",
        "answers": {
          "options": [
            { "label": "Fuel", "correct": true },
            { "label": "Ash", "correct": false },
            { "label": "Light", "correct": false },
            { "label": "Heat", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Fire & Safety",
        "top": "120px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "question": "Which process releases energy in the form of heat and light during a fire?",
        "answers": {
          "options": [
            { "label": "Combustion", "correct": true },
            { "label": "Conduction", "correct": false },
            { "label": "Fusion", "correct": false },
            { "label": "Evaporation", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Energy Conversion",
        "top": "160px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "question": "Which fuel is most commonly used in campfires?",
        "answers": {
          "options": [
            { "label": "Charcoal", "correct": false },
            { "label": "Wood", "correct": true },
            { "label": "Gasoline", "correct": false },
            { "label": "Oil", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Fire & Fuel",
        "top": "200px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 5,
        "question": "Which color flame is usually the hottest?",
        "answers": {
          "options": [
            { "label": "Red", "correct": false },
            { "label": "Blue", "correct": true },
            { "label": "Yellow", "correct": false },
            { "label": "Orange", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Heat & Flame",
        "top": "240px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 6,
        "question": "Which device converts solar energy directly into electricity?",
        "answers": {
          "options": [
            { "label": "Transformer", "correct": false },
            { "label": "Solar panel", "correct": true },
            { "label": "Generator", "correct": false },
            { "label": "Thermometer", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Energy & Technology",
        "top": "280px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 7,
        "question": "What is the name of the energy stored in food?",
        "answers": {
          "options": [
            { "label": "Thermal energy", "correct": false },
            { "label": "Chemical energy", "correct": true },
            { "label": "Kinetic energy", "correct": false },
            { "label": "Potential energy", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Chemical Energy",
        "top": "320px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "question": "What element is most responsible for sustaining combustion?",
        "answers": {
          "options": [
            { "label": "Hydrogen", "correct": false },
            { "label": "Nitrogen", "correct": false },
            { "label": "Oxygen", "correct": true },
            { "label": "Carbon", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Fire Chemistry",
        "top": "360px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 9,
        "question": "Which famous scientist is known for laws of thermodynamics?",
        "answers": {
          "options": [
            { "label": "Isaac Newton", "correct": false },
            { "label": "Rudolf Clausius", "correct": true },
            { "label": "Albert Einstein", "correct": false },
            { "label": "Marie Curie", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Energy Science",
        "top": "400px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "question": "Which form of energy transfer occurs in fire?",
        "answers": {
          "options": [
            { "label": "Convection", "correct": false },
            { "label": "Radiation", "correct": false },
            { "label": "Conduction", "correct": false },
            { "label": "All of the above", "correct": true }
          ]
        },
        "date": "2025-06-30",
        "category": "Energy Transfer",
        "top": "440px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 11,
        "question": "Which type of energy is produced by rubbing two objects together?",
        "answers": {
          "options": [
            { "label": "Thermal energy", "correct": true },
            { "label": "Light energy", "correct": false },
            { "label": "Magnetic energy", "correct": false },
            { "label": "Electric energy", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Fire & Energy",
        "top": "480px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 12,
        "question": "Which of the following fuels is considered non-renewable?",
        "answers": {
          "options": [
            { "label": "Coal", "correct": true },
            { "label": "Solar", "correct": false },
            { "label": "Wind", "correct": false },
            { "label": "Biomass", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Energy Resources",
        "top": "520px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 13,
        "question": "Which fire suppression method is commonly used in electrical fires?",
        "answers": {
          "options": [
            { "label": "Water", "correct": false },
            { "label": "Foam", "correct": false },
            { "label": "Carbon dioxide", "correct": true },
            { "label": "Sand", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Fire Safety",
        "top": "560px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 14,
        "question": "What is the measure of heat energy called?",
        "answers": {
          "options": [
            { "label": "Volt", "correct": false },
            { "label": "Watt", "correct": false },
            { "label": "Calorie", "correct": true },
            { "label": "Ampere", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Thermal Science",
        "top": "600px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 15,
        "question": "Which scientist discovered that heat can be generated by friction?",
        "answers": {
          "options": [
            { "label": "Count Rumford", "correct": true },
            { "label": "Galileo", "correct": false },
            { "label": "Max Planck", "correct": false },
            { "label": "Faraday", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "History of Science",
        "top": "640px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 16,
        "question": "What does the term 'flash point' refer to?",
        "answers": {
          "options": [
            { "label": "The brightest part of a flame", "correct": false },
            { "label": "The point at which fire burns blue", "correct": false },
            { "label": "The temperature at which a substance ignites", "correct": true },
            { "label": "The moment a fire is extinguished", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Fire Chemistry",
        "top": "680px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "question": "Which gas is commonly used in welding for its high flame temperature?",
        "answers": {
          "options": [
            { "label": "Oxygen", "correct": false },
            { "label": "Nitrogen", "correct": false },
            { "label": "Acetylene", "correct": true },
            { "label": "Argon", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Industrial Energy",
        "top": "720px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 18,
        "question": "What is the scientific term for stored energy?",
        "answers": {
          "options": [
            { "label": "Kinetic energy", "correct": false },
            { "label": "Thermal energy", "correct": false },
            { "label": "Potential energy", "correct": true },
            { "label": "Active energy", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Energy Forms",
        "top": "760px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 19,
        "question": "Which is the main energy source in a hydroelectric power plant?",
        "answers": {
          "options": [
            { "label": "Wind", "correct": false },
            { "label": "Solar", "correct": false },
            { "label": "Water", "correct": true },
            { "label": "Coal", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Renewable Energy",
        "top": "800px",
        "left": "75px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 20,
        "question": "Which law states that energy cannot be created or destroyed?",
        "answers": {
          "options": [
            { "label": "Newton's First Law", "correct": false },
            { "label": "Law of Conservation of Energy", "correct": true },
            { "label": "Ohm’s Law", "correct": false },
            { "label": "Law of Thermodynamic Pressure", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Energy Physics",
        "top": "840px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-13-1": [
      {
        "id": 1,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "Which freshwater fish is known for building nests out of pebbles?",
        "answers": {
          "options": [
            { "label": "Bluegill", "correct": false },
            { "label": "Cichlid", "correct": true },
            { "label": "Trout", "correct": false },
            { "label": "Pike", "correct": false }
          ]
        },
        "top": "120px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "What type of water do catfish primarily inhabit?",
        "answers": {
          "options": [
            { "label": "Saltwater", "correct": false },
            { "label": "Brackish water", "correct": false },
            { "label": "Freshwater", "correct": true },
            { "label": "Glacial water", "correct": false }
          ]
        },
        "top": "160px",
        "left": "80px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "Which of these fish is known to leap up waterfalls to spawn?",
        "answers": {
          "options": [
            { "label": "Salmon", "correct": true },
            { "label": "Bass", "correct": false },
            { "label": "Tilapia", "correct": false },
            { "label": "Carp", "correct": false }
          ]
        },
        "top": "200px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 4,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "Which river is the longest in the world?",
        "answers": {
          "options": [
            { "label": "Nile", "correct": true },
            { "label": "Amazon", "correct": false },
            { "label": "Yangtze", "correct": false },
            { "label": "Mississippi", "correct": false }
          ]
        },
        "top": "240px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "What feature allows fish to detect movement in the water?",
        "answers": {
          "options": [
            { "label": "Swim bladder", "correct": false },
            { "label": "Lateral line", "correct": true },
            { "label": "Gill rakers", "correct": false },
            { "label": "Fins", "correct": false }
          ]
        },
        "top": "280px",
        "left": "100px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "Which of these is a carnivorous freshwater fish?",
        "answers": {
          "options": [
            { "label": "Tilapia", "correct": false },
            { "label": "Trout", "correct": true },
            { "label": "Goldfish", "correct": false },
            { "label": "Carp", "correct": false }
          ]
        },
        "top": "320px",
        "left": "120px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "Which part of the river typically has the most oxygen-rich water?",
        "answers": {
          "options": [
            { "label": "Mouth", "correct": false },
            { "label": "Source", "correct": true },
            { "label": "Middle course", "correct": false },
            { "label": "Delta", "correct": false }
          ]
        },
        "top": "360px",
        "left": "110px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "Which fish is known to walk on land using its fins?",
        "answers": {
          "options": [
            { "label": "Mudskipper", "correct": true },
            { "label": "Catfish", "correct": false },
            { "label": "Perch", "correct": false },
            { "label": "Roach", "correct": false }
          ]
        },
        "top": "400px",
        "left": "95px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 9,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "What’s the name of the area where a river meets the sea?",
        "answers": {
          "options": [
            { "label": "Estuary", "correct": true },
            { "label": "Delta", "correct": false },
            { "label": "Bay", "correct": false },
            { "label": "Marsh", "correct": false }
          ]
        },
        "top": "440px",
        "left": "70px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 10,
        "date": "2025-06-30",
        "category": "Fresh Water Fish and River Life",
        "question": "Which of these freshwater fish can grow over 10 feet long?",
        "answers": {
          "options": [
            { "label": "Sturgeon", "correct": true },
            { "label": "Bass", "correct": false },
            { "label": "Piranha", "correct": false },
            { "label": "Bluegill", "correct": false }
          ]
        },
        "top": "480px",
        "left": "130px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "Which fish is considered invasive in many freshwater habitats?",
        "answers": {
          "options": [
            {
              "label": "Asian carp",
              "correct": true
            },
            {
              "label": "Trout",
              "correct": false
            },
            {
              "label": "Salmon",
              "correct": false
            },
            {
              "label": "Pike",
              "correct": false
            }
          ]
        },
        "top": "393px",
        "left": "62px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "What freshwater fish is known for its long whisker-like barbels?",
        "answers": {
          "options": [
            {
              "label": "Catfish",
              "correct": true
            },
            {
              "label": "Perch",
              "correct": false
            },
            {
              "label": "Bass",
              "correct": false
            },
            {
              "label": "Roach",
              "correct": false
            }
          ]
        },
        "top": "162px",
        "left": "63px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "Which river flows through the Grand Canyon?",
        "answers": {
          "options": [
            {
              "label": "Colorado River",
              "correct": true
            },
            {
              "label": "Missouri River",
              "correct": false
            },
            {
              "label": "Ohio River",
              "correct": false
            },
            {
              "label": "Columbia River",
              "correct": false
            }
          ]
        },
        "top": "359px",
        "left": "94px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "Which freshwater fish is known for its sharp teeth and aggressive nature?",
        "answers": {
          "options": [
            {
              "label": "Piranha",
              "correct": true
            },
            {
              "label": "Tilapia",
              "correct": false
            },
            {
              "label": "Bass",
              "correct": false
            },
            {
              "label": "Trout",
              "correct": false
            }
          ]
        },
        "top": "187px",
        "left": "84px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "What is the term for a young fish?",
        "answers": {
          "options": [
            {
              "label": "Fry",
              "correct": true
            },
            {
              "label": "Chick",
              "correct": false
            },
            {
              "label": "Pup",
              "correct": false
            },
            {
              "label": "Calf",
              "correct": false
            }
          ]
        },
        "top": "276px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "What aquatic plant is commonly found in rivers and supports fish habitats?",
        "answers": {
          "options": [
            {
              "label": "Waterweed",
              "correct": true
            },
            {
              "label": "Cactus",
              "correct": false
            },
            {
              "label": "Fern",
              "correct": false
            },
            {
              "label": "Seaweed",
              "correct": false
            }
          ]
        },
        "top": "441px",
        "left": "57px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "What tool is commonly used to catch freshwater fish?",
        "answers": {
          "options": [
            {
              "label": "Fishing rod",
              "correct": true
            },
            {
              "label": "Lasso",
              "correct": false
            },
            {
              "label": "Trap net",
              "correct": false
            },
            {
              "label": "Snare",
              "correct": false
            }
          ]
        },
        "top": "167px",
        "left": "69px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "Which river is the deepest in the world?",
        "answers": {
          "options": [
            {
              "label": "Congo River",
              "correct": true
            },
            {
              "label": "Amazon River",
              "correct": false
            },
            {
              "label": "Yangtze River",
              "correct": false
            },
            {
              "label": "Danube River",
              "correct": false
            }
          ]
        },
        "top": "357px",
        "left": "48px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "Which freshwater crustacean resembles a small lobster?",
        "answers": {
          "options": [
            {
              "label": "Crayfish",
              "correct": true
            },
            {
              "label": "Shrimp",
              "correct": false
            },
            {
              "label": "Krill",
              "correct": false
            },
            {
              "label": "Barnacle",
              "correct": false
            }
          ]
        },
        "top": "478px",
        "left": "104px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "Fresh Water Fish and River Life",
        "question": "Which is a primary predator of freshwater fish in the wild?",
        "answers": {
          "options": [
            {
              "label": "Osprey",
              "correct": true
            },
            {
              "label": "Pigeon",
              "correct": false
            },
            {
              "label": "Frog",
              "correct": false
            },
            {
              "label": "Rabbit",
              "correct": false
            }
          ]
        },
        "top": "293px",
        "left": "101px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], "game1-13-2": [
      {
        "id": 1,
        "question": "Which cephalopod is known for its ability to mimic other sea creatures?",
        "answers": {
          "options": [
            { "label": "Mimic octopus", "correct": true },
            { "label": "Humboldt squid", "correct": false },
            { "label": "Blue-ringed octopus", "correct": false },
            { "label": "Chambered nautilus", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "22px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 2,
        "question": "What organ helps octopuses rapidly change color?",
        "answers": {
          "options": [
            { "label": "Chromatophores", "correct": true },
            { "label": "Nephridia", "correct": false },
            { "label": "Statocysts", "correct": false },
            { "label": "Gills", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "88px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "question": "Which of these is the largest species of octopus?",
        "answers": {
          "options": [
            { "label": "Giant Pacific octopus", "correct": true },
            { "label": "Common octopus", "correct": false },
            { "label": "Dumbo octopus", "correct": false },
            { "label": "Caribbean reef octopus", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "110px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "question": "How do squids primarily move through water?",
        "answers": {
          "options": [
            { "label": "Jet propulsion", "correct": true },
            { "label": "Swimming with fins", "correct": false },
            { "label": "Crawling", "correct": false },
            { "label": "Paddling with arms", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "145px",
        "left": "58px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "question": "What is the main diet of most cephalopods?",
        "answers": {
          "options": [
            { "label": "Crustaceans and fish", "correct": true },
            { "label": "Seaweed", "correct": false },
            { "label": "Plankton", "correct": false },
            { "label": "Algae", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "190px",
        "left": "33px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6,
        "question": "What adaptation helps squids escape predators?",
        "answers": {
          "options": [
            { "label": "Ink cloud", "correct": true },
            { "label": "Camouflage scales", "correct": false },
            { "label": "Bioluminescent eyes", "correct": false },
            { "label": "Toxic tentacles", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "210px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 7,
        "question": "Which ocean zone do most deep-sea squids inhabit?",
        "answers": {
          "options": [
            { "label": "Midnight zone", "correct": true },
            { "label": "Sunlight zone", "correct": false },
            { "label": "Twilight zone", "correct": false },
            { "label": "Intertidal zone", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "245px",
        "left": "18px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 8,
        "question": "Which cephalopod is famous for its cuttlebone used in pet bird care?",
        "answers": {
          "options": [
            { "label": "Cuttlefish", "correct": true },
            { "label": "Squid", "correct": false },
            { "label": "Octopus", "correct": false },
            { "label": "Nautilus", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "280px",
        "left": "72px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 9,
        "question": "Which ocean creature has a beak like a parrot?",
        "answers": {
          "options": [
            { "label": "Octopus", "correct": true },
            { "label": "Stingray", "correct": false },
            { "label": "Seahorse", "correct": false },
            { "label": "Jellyfish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "310px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 10,
        "question": "What is the name of the famous giant squid caught on camera by scientists?",
        "answers": {
          "options": [
            { "label": "Architeuthis", "correct": true },
            { "label": "Megateuthis", "correct": false },
            { "label": "Colossopus", "correct": false },
            { "label": "Titanus", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "340px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 11,
        "question": "Which cephalopod has fins that resemble elephant ears?",
        "answers": {
          "options": [
            { "label": "Dumbo octopus", "correct": true },
            { "label": "Cuttlefish", "correct": false },
            { "label": "Humboldt squid", "correct": false },
            { "label": "Nautilus", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "22px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 12,
        "question": "What is unique about the nautilus compared to other cephalopods?",
        "answers": {
          "options": [
            { "label": "It has an external shell", "correct": true },
            { "label": "It has no tentacles", "correct": false },
            { "label": "It can photosynthesize", "correct": false },
            { "label": "It has bones", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "55px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 13,
        "question": "Which cephalopod is considered venomous and potentially deadly to humans?",
        "answers": {
          "options": [
            { "label": "Blue-ringed octopus", "correct": true },
            { "label": "Giant squid", "correct": false },
            { "label": "Dumbo octopus", "correct": false },
            { "label": "Cuttlefish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "90px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 14,
        "question": "What structure allows cuttlefish to regulate buoyancy?",
        "answers": {
          "options": [
            { "label": "Cuttlebone", "correct": true },
            { "label": "Ink sac", "correct": false },
            { "label": "Mantle", "correct": false },
            { "label": "Tentacle core", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "125px",
        "left": "38px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "question": "What is the typical lifespan of an octopus?",
        "answers": {
          "options": [
            { "label": "1–2 years", "correct": true },
            { "label": "10–12 years", "correct": false },
            { "label": "5–6 years", "correct": false },
            { "label": "15–20 years", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "165px",
        "left": "42px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 16,
        "question": "Which body part of a cephalopod contains most of its vital organs?",
        "answers": {
          "options": [
            { "label": "Mantle", "correct": true },
            { "label": "Beak", "correct": false },
            { "label": "Arms", "correct": false },
            { "label": "Siphon", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "200px",
        "left": "64px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "question": "What is the maximum number of hearts in a cephalopod?",
        "answers": {
          "options": [
            { "label": "Three", "correct": true },
            { "label": "One", "correct": false },
            { "label": "Two", "correct": false },
            { "label": "Four", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "235px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 18,
        "question": "Which oceanic region is home to the largest variety of cephalopods?",
        "answers": {
          "options": [
            { "label": "Indo-Pacific", "correct": true },
            { "label": "Arctic", "correct": false },
            { "label": "Atlantic", "correct": false },
            { "label": "Southern Ocean", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "270px",
        "left": "36px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 19,
        "question": "Which famous explorer documented giant squid in mythology?",
        "answers": {
          "options": [
            { "label": "Pliny the Elder", "correct": true },
            { "label": "Aristotle", "correct": false },
            { "label": "Marco Polo", "correct": false },
            { "label": "Ptolemy", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "305px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 20,
        "question": "Which cephalopod's mating ritual ends in death for the male?",
        "answers": {
          "options": [
            { "label": "Octopus", "correct": true },
            { "label": "Squid", "correct": false },
            { "label": "Cuttlefish", "correct": false },
            { "label": "Nautilus", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Cephalopods and Ocean Life",
        "top": "340px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-13-3": [
      {
        "id": 1,
        "question": "Which of the following is a characteristic of amphibians?",
        "answers": {
          "options": [
            { "label": "Moist skin for gas exchange", "correct": true },
            { "label": "Feathers", "correct": false },
            { "label": "Scales", "correct": false },
            { "label": "Hair", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "12px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "question": "Which stage do most amphibians go through during development?",
        "answers": {
          "options": [
            { "label": "Tadpole", "correct": true },
            { "label": "Nymph", "correct": false },
            { "label": "Pupa", "correct": false },
            { "label": "Larva with wings", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "48px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 3,
        "question": "Which amphibian is known for its regenerative abilities?",
        "answers": {
          "options": [
            { "label": "Axolotl", "correct": true },
            { "label": "Toad", "correct": false },
            { "label": "Salamander", "correct": false },
            { "label": "Newt", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "85px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "question": "What adaptation helps frogs hear both in water and on land?",
        "answers": {
          "options": [
            { "label": "Tympanic membrane", "correct": true },
            { "label": "Gills", "correct": false },
            { "label": "Echolocation", "correct": false },
            { "label": "Lateral line", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "122px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "question": "Which early vertebrates are considered precursors to amphibians?",
        "answers": {
          "options": [
            { "label": "Lobe-finned fish", "correct": true },
            { "label": "Cartilaginous fish", "correct": false },
            { "label": "Eels", "correct": false },
            { "label": "Sea snakes", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "155px",
        "left": "15px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 6,
        "question": "Which organ do most amphibians use for breathing in their adult form?",
        "answers": {
          "options": [
            { "label": "Lungs", "correct": true },
            { "label": "Gills", "correct": false },
            { "label": "Swim bladder", "correct": false },
            { "label": "Book lungs", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "188px",
        "left": "32px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 7,
        "question": "What is metamorphosis in amphibians?",
        "answers": {
          "options": [
            { "label": "Transformation from larva to adult", "correct": true },
            { "label": "Mating ritual", "correct": false },
            { "label": "Shedding of skin", "correct": false },
            { "label": "Hibernation period", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "222px",
        "left": "42px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 8,
        "question": "Which group includes both frogs and salamanders?",
        "answers": {
          "options": [
            { "label": "Amphibians", "correct": true },
            { "label": "Reptiles", "correct": false },
            { "label": "Fish", "correct": false },
            { "label": "Mollusks", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "258px",
        "left": "52px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 9,
        "question": "What helps amphibians stay moist and absorb oxygen through their skin?",
        "answers": {
          "options": [
            { "label": "Mucous glands", "correct": true },
            { "label": "Sweat glands", "correct": false },
            { "label": "Scales", "correct": false },
            { "label": "Feathers", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "295px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 10,
        "question": "Which amphibian can freeze solid and thaw back to life?",
        "answers": {
          "options": [
            { "label": "Wood frog", "correct": true },
            { "label": "Bullfrog", "correct": false },
            { "label": "Tree frog", "correct": false },
            { "label": "Glass frog", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "330px",
        "left": "48px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 11,
        "question": "What is the name of the period when amphibians first appeared?",
        "answers": {
          "options": [
            { "label": "Devonian", "correct": true },
            { "label": "Jurassic", "correct": false },
            { "label": "Triassic", "correct": false },
            { "label": "Cretaceous", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "370px",
        "left": "44px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "question": "Which organ allows fish to control buoyancy, while amphibians lack it?",
        "answers": {
          "options": [
            { "label": "Swim bladder", "correct": true },
            { "label": "Liver", "correct": false },
            { "label": "Kidney", "correct": false },
            { "label": "Heart", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "400px",
        "left": "28px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 13,
        "question": "Which group evolved directly from lobe-finned fish?",
        "answers": {
          "options": [
            { "label": "Tetrapods", "correct": true },
            { "label": "Cartilaginous fish", "correct": false },
            { "label": "Jawless fish", "correct": false },
            { "label": "Ray-finned fish", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "430px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 14,
        "question": "Which of these is NOT an amphibian?",
        "answers": {
          "options": [
            { "label": "Lizard", "correct": true },
            { "label": "Frog", "correct": false },
            { "label": "Newt", "correct": false },
            { "label": "Caecilian", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "460px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 15,
        "question": "Which part of the frog helps it jump long distances?",
        "answers": {
          "options": [
            { "label": "Hind legs", "correct": true },
            { "label": "Forearms", "correct": false },
            { "label": "Tail", "correct": false },
            { "label": "Neck", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "490px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 16,
        "question": "How do caecilians differ from other amphibians?",
        "answers": {
          "options": [
            { "label": "They have no legs", "correct": true },
            { "label": "They breathe through gills as adults", "correct": false },
            { "label": "They live only in saltwater", "correct": false },
            { "label": "They fly short distances", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "520px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 17,
        "question": "Which feature evolved to allow amphibians to move efficiently on land?",
        "answers": {
          "options": [
            { "label": "Limbs with digits", "correct": true },
            { "label": "Lateral line system", "correct": false },
            { "label": "Swim fins", "correct": false },
            { "label": "Gill covers", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "550px",
        "left": "32px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "question": "Which of these is true about amphibian eggs?",
        "answers": {
          "options": [
            { "label": "They must be laid in water", "correct": true },
            { "label": "They have hard shells", "correct": false },
            { "label": "They hatch as miniature adults", "correct": false },
            { "label": "They are fertilized internally", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "580px",
        "left": "38px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 19,
        "question": "Why are amphibians considered environmental indicators?",
        "answers": {
          "options": [
            { "label": "They are sensitive to pollution", "correct": true },
            { "label": "They produce light", "correct": false },
            { "label": "They build dams", "correct": false },
            { "label": "They eat metal", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "610px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 20,
        "question": "Which extinct genus marks a key evolutionary link between fish and amphibians?",
        "answers": {
          "options": [
            { "label": "Tiktaalik", "correct": true },
            { "label": "Ichthyosaurus", "correct": false },
            { "label": "Archaeopteryx", "correct": false },
            { "label": "Megalodon", "correct": false }
          ]
        },
        "date": "2025-06-30",
        "category": "Amphibians and Aquatic Evolution",
        "top": "640px",
        "left": "18px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-14-1": [
      {
        "id": 1,
        "question": "Which large wild cat is native to the Americas and known for its powerful build?",
        "answers": {
          "options": [
            { "label": "Jaguar", "correct": true },
            { "label": "Tiger", "correct": false },
            { "label": "Leopard", "correct": false },
            { "label": "Panther", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "200px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "question": "Which bear species is most associated with salmon foraging in rivers?",
        "answers": {
          "options": [
            { "label": "Grizzly Bear", "correct": true },
            { "label": "Polar Bear", "correct": false },
            { "label": "Panda Bear", "correct": false },
            { "label": "Black Bear", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "610px",
        "left": "23px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 3,
        "question": "What animal uses its long snout to forage for ants and termites?",
        "answers": {
          "options": [
            { "label": "Aardvark", "correct": true },
            { "label": "Warthog", "correct": false },
            { "label": "Sloth", "correct": false },
            { "label": "Meerkat", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "570px",
        "left": "47px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4,
        "question": "Which African animal is known for its aggressive behavior and large tusks, often foraging near water?",
        "answers": {
          "options": [
            { "label": "Hippopotamus", "correct": true },
            { "label": "Elephant", "correct": false },
            { "label": "Rhino", "correct": false },
            { "label": "Crocodile", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "340px",
        "left": "66px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "question": "What small mammal is known for caching nuts and seeds in preparation for winter?",
        "answers": {
          "options": [
            { "label": "Squirrel", "correct": true },
            { "label": "Mouse", "correct": false },
            { "label": "Hedgehog", "correct": false },
            { "label": "Raccoon", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "430px",
        "left": "52px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6,
        "question": "Which bird uses tools like twigs to forage insects from tree bark?",
        "answers": {
          "options": [
            { "label": "Woodpecker Finch", "correct": true },
            { "label": "Blue Jay", "correct": false },
            { "label": "Robin", "correct": false },
            { "label": "Magpie", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "275px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 7,
        "question": "Which omnivorous marsupial forages mostly at night and has a keen sense of smell?",
        "answers": {
          "options": [
            { "label": "Opossum", "correct": true },
            { "label": "Koala", "correct": false },
            { "label": "Tasmanian Devil", "correct": false },
            { "label": "Wallaby", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "120px",
        "left": "85px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 8,
        "question": "Which foraging animal is known to wash its food before eating it?",
        "answers": {
          "options": [
            { "label": "Raccoon", "correct": true },
            { "label": "Otter", "correct": false },
            { "label": "Fox", "correct": false },
            { "label": "Badger", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "375px",
        "left": "90px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "question": "Which animal cracks open hard nuts using a rock as an anvil?",
        "answers": {
          "options": [
            { "label": "Capuchin Monkey", "correct": true },
            { "label": "Gorilla", "correct": false },
            { "label": "Chimpanzee", "correct": false },
            { "label": "Mandrill", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "210px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "question": "Which Arctic mammal is known for foraging by diving under ice to hunt fish?",
        "answers": {
          "options": [
            { "label": "Seal", "correct": true },
            { "label": "Polar Bear", "correct": false },
            { "label": "Narwhal", "correct": false },
            { "label": "Walrus", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "490px",
        "left": "28px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "question": "Which forest-dwelling animal uses its long tongue to extract insects from narrow holes?",
        "answers": {
          "options": [
            { "label": "Pangolin", "correct": true },
            { "label": "Anteater", "correct": false },
            { "label": "Tapir", "correct": false },
            { "label": "Porcupine", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "305px",
        "left": "65px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "question": "Which large herbivore strips bark from trees to forage during winter?",
        "answers": {
          "options": [
            { "label": "Moose", "correct": true },
            { "label": "Deer", "correct": false },
            { "label": "Bison", "correct": false },
            { "label": "Yak", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "190px",
        "left": "48px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "question": "What animal's nose can detect underground fungi such as truffles?",
        "answers": {
          "options": [
            { "label": "Pig", "correct": true },
            { "label": "Goat", "correct": false },
            { "label": "Dog", "correct": false },
            { "label": "Sheep", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "450px",
        "left": "32px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 14,
        "question": "Which nocturnal forager is known to eat a wide variety of urban trash?",
        "answers": {
          "options": [
            { "label": "Raccoon", "correct": true },
            { "label": "Fox", "correct": false },
            { "label": "Coyote", "correct": false },
            { "label": "Weasel", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "385px",
        "left": "59px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "question": "Which carnivorous marsupial forages by scavenging and is known for its fierce bite?",
        "answers": {
          "options": [
            { "label": "Tasmanian Devil", "correct": true },
            { "label": "Wombat", "correct": false },
            { "label": "Sugar Glider", "correct": false },
            { "label": "Kangaroo Rat", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "110px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 16,
        "question": "Which mammal forages underwater using sensitive whiskers to detect prey?",
        "answers": {
          "options": [
            { "label": "Otter", "correct": true },
            { "label": "Beaver", "correct": false },
            { "label": "Platypus", "correct": false },
            { "label": "Capybara", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "270px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 17,
        "question": "Which animal can climb trees to forage for eggs and small animals?",
        "answers": {
          "options": [
            { "label": "Martens", "correct": true },
            { "label": "Hedgehogs", "correct": false },
            { "label": "Rabbits", "correct": false },
            { "label": "Groundhogs", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "460px",
        "left": "67px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 18,
        "question": "What wild pig species is famous for rooting up plants while foraging?",
        "answers": {
          "options": [
            { "label": "Boar", "correct": true },
            { "label": "Tapir", "correct": false },
            { "label": "Okapi", "correct": false },
            { "label": "Ibex", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "350px",
        "left": "75px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 19,
        "question": "Which large omnivore can tear apart logs to find grubs and insects?",
        "answers": {
          "options": [
            { "label": "Brown Bear", "correct": true },
            { "label": "Puma", "correct": false },
            { "label": "Hyena", "correct": false },
            { "label": "Wolf", "correct": false }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "175px",
        "left": "22px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "question": "Which insectivore is known for its rapid tongue and sticky saliva to catch prey?",
        "answers": {
          "options": [
            { "label": "Tamandua", "correct": false },
            { "label": "Chameleon", "correct": false },
            { "label": "Aardwolf", "correct": false },
            { "label": "Anteater", "correct": true }
          ]
        },
        "date": "2025-07-21",
        "category": "Wild Beasts and Foraging Creatures",
        "top": "500px",
        "left": "95px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-14-2": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "wolves",
        "question": "What is the average pack size of a gray wolf in the wild?",
        "answers": {
          "options": [
            { "label": "2 to 4", "correct": false },
            { "label": "6 to 10", "correct": true },
            { "label": "15 to 20", "correct": false },
            { "label": "25 to 30", "correct": false }
          ]
        },
        "top": "120px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "wolves",
        "question": "Which sense is most important for wolves when hunting?",
        "answers": {
          "options": [
            { "label": "Sight", "correct": false },
            { "label": "Hearing", "correct": false },
            { "label": "Smell", "correct": true },
            { "label": "Taste", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "wolves",
        "question": "Wolves primarily communicate through:",
        "answers": {
          "options": [
            { "label": "Growling only", "correct": false },
            { "label": "Howling and body language", "correct": true },
            { "label": "Barking only", "correct": false },
            { "label": "Ultrasound signals", "correct": false }
          ]
        },
        "top": "200px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "predators",
        "question": "Which of the following is considered an apex predator?",
        "answers": {
          "options": [
            { "label": "Lion", "correct": true },
            { "label": "Zebra", "correct": false },
            { "label": "Deer", "correct": false },
            { "label": "Rabbit", "correct": false }
          ]
        },
        "top": "140px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "predators",
        "question": "What adaptation helps cheetahs achieve high speeds when chasing prey?",
        "answers": {
          "options": [
            { "label": "Retractable claws", "correct": true },
            { "label": "Thick fur", "correct": false },
            { "label": "Large teeth", "correct": false },
            { "label": "Strong swimming skills", "correct": false }
          ]
        },
        "top": "180px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "predators",
        "question": "Which predator is known for hunting in coordinated groups?",
        "answers": {
          "options": [
            { "label": "Great white shark", "correct": false },
            { "label": "Orca (killer whale)", "correct": true },
            { "label": "Tiger", "correct": false },
            { "label": "Eagle", "correct": false }
          ]
        },
        "top": "220px",
        "left": "65px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "predators",
        "question": "The main hunting technique of a praying mantis is:",
        "answers": {
          "options": [
            { "label": "Ambush predation", "correct": true },
            { "label": "Chasing prey", "correct": false },
            { "label": "Trap building", "correct": false },
            { "label": "Scavenging", "correct": false }
          ]
        },
        "top": "260px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "survival in nature",
        "question": "What is the first priority in a wilderness survival situation?",
        "answers": {
          "options": [
            { "label": "Finding food", "correct": false },
            { "label": "Building shelter", "correct": false },
            { "label": "Securing water", "correct": true },
            { "label": "Signaling for help", "correct": false }
          ]
        },
        "top": "150px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "survival in nature",
        "question": "Which natural material is best for starting a fire quickly?",
        "answers": {
          "options": [
            { "label": "Wet leaves", "correct": false },
            { "label": "Dry grass and bark", "correct": true },
            { "label": "Green twigs", "correct": false },
            { "label": "Moss", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "survival in nature",
        "question": "Which of the following is the safest way to drink water from a natural stream?",
        "answers": {
          "options": [
            { "label": "Directly from the stream", "correct": false },
            { "label": "After boiling it", "correct": true },
            { "label": "Only in the morning", "correct": false },
            { "label": "Filtering through a cloth", "correct": false }
          ]
        },
        "top": "230px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "wolves",
        "question": "Which region is home to the largest population of gray wolves?",
        "answers": {
          "options": [
            { "label": "South America", "correct": false },
            { "label": "Eurasia and North America", "correct": true },
            { "label": "Australia", "correct": false },
            { "label": "Africa", "correct": false }
          ]
        },
        "top": "210px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "wolves",
        "question": "How long is the typical lifespan of a wolf in the wild?",
        "answers": {
          "options": [
            { "label": "2-4 years", "correct": false },
            { "label": "6-8 years", "correct": true },
            { "label": "12-15 years", "correct": false },
            { "label": "20 years", "correct": false }
          ]
        },
        "top": "170px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "predators",
        "question": "Which animal is a nocturnal predator known for silent flight?",
        "answers": {
          "options": [
            { "label": "Owl", "correct": true },
            { "label": "Wolf", "correct": false },
            { "label": "Crocodile", "correct": false },
            { "label": "Lion", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "survival in nature",
        "question": "Which of these plants is safe to eat in a survival situation?",
        "answers": {
          "options": [
            { "label": "Poison ivy", "correct": false },
            { "label": "Dandelion", "correct": true },
            { "label": "Deadly nightshade", "correct": false },
            { "label": "Hemlock", "correct": false }
          ]
        },
        "top": "190px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "survival in nature",
        "question": "What is the primary cause of hypothermia in the wild?",
        "answers": {
          "options": [
            { "label": "Excessive heat", "correct": false },
            { "label": "Loss of body heat", "correct": true },
            { "label": "Insect bites", "correct": false },
            { "label": "Lack of food", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "predators",
        "question": "Which predator uses venom to subdue its prey?",
        "answers": {
          "options": [
            { "label": "Komodo dragon", "correct": true },
            { "label": "Elephant", "correct": false },
            { "label": "Grizzly bear", "correct": false },
            { "label": "Bald eagle", "correct": false }
          ]
        },
        "top": "200px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "wolves",
        "question": "What is a wolf's primary prey in North America?",
        "answers": {
          "options": [
            { "label": "Elk and deer", "correct": true },
            { "label": "Rabbits only", "correct": false },
            { "label": "Fish", "correct": false },
            { "label": "Insects", "correct": false }
          ]
        },
        "top": "210px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "survival in nature",
        "question": "In a survival scenario, how can you signal for help?",
        "answers": {
          "options": [
            { "label": "Using smoke, mirrors, or loud noises", "correct": true },
            { "label": "Walking away silently", "correct": false },
            { "label": "Hiding and waiting", "correct": false },
            { "label": "Ignoring surroundings", "correct": false }
          ]
        },
        "top": "240px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "predators",
        "question": "Which large cat is known for its ability to roar?",
        "answers": {
          "options": [
            { "label": "Lion", "correct": true },
            { "label": "Cheetah", "correct": false },
            { "label": "Leopard", "correct": false },
            { "label": "Jaguar", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "survival in nature",
        "question": "Hard question: What is the Edibility Index used for in survival?",
        "answers": {
          "options": [
            { "label": "To test if plants or animals are safe to eat", "correct": true },
            { "label": "To measure water purity", "correct": false },
            { "label": "To calculate body temperature", "correct": false },
            { "label": "To determine distance traveled", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-14-3": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "Which animal is commonly known as man's best friend?",
        "answers": {
          "options": [
            { "label": "Cat", "correct": false },
            { "label": "Dog", "correct": true },
            { "label": "Horse", "correct": false },
            { "label": "Rabbit", "correct": false }
          ]
        },
        "top": "120px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 10
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "What is the primary purpose of domesticated cattle?",
        "answers": {
          "options": [
            { "label": "Guarding property", "correct": false },
            { "label": "Providing milk and meat", "correct": true },
            { "label": "Hunting pests", "correct": false },
            { "label": "Companionship", "correct": false }
          ]
        },
        "top": "160px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "Which animal is primarily raised for wool production?",
        "answers": {
          "options": [
            { "label": "Goat", "correct": false },
            { "label": "Sheep", "correct": true },
            { "label": "Pig", "correct": false },
            { "label": "Chicken", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "Which of these crops is a staple food in many countries worldwide?",
        "answers": {
          "options": [
            { "label": "Rice", "correct": true },
            { "label": "Coffee", "correct": false },
            { "label": "Cotton", "correct": false },
            { "label": "Tea", "correct": false }
          ]
        },
        "top": "140px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "What farming technique helps to prevent soil erosion?",
        "answers": {
          "options": [
            { "label": "Crop rotation", "correct": true },
            { "label": "Monoculture", "correct": false },
            { "label": "Overgrazing", "correct": false },
            { "label": "Clear-cutting", "correct": false }
          ]
        },
        "top": "180px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "Which piece of equipment is commonly used for plowing fields?",
        "answers": {
          "options": [
            { "label": "Tractor", "correct": true },
            { "label": "Harvester", "correct": false },
            { "label": "Seeder", "correct": false },
            { "label": "Irrigator", "correct": false }
          ]
        },
        "top": "220px",
        "left": "65px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "What is a male chicken called?",
        "answers": {
          "options": [
            { "label": "Hen", "correct": false },
            { "label": "Rooster", "correct": true },
            { "label": "Pullet", "correct": false },
            { "label": "Cockroach", "correct": false }
          ]
        },
        "top": "260px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "Which animal is used for plowing fields in traditional farming?",
        "answers": {
          "options": [
            { "label": "Horse", "correct": true },
            { "label": "Goat", "correct": false },
            { "label": "Dog", "correct": false },
            { "label": "Cat", "correct": false }
          ]
        },
        "top": "150px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "Which fertilizer nutrient is important for plant leaf growth?",
        "answers": {
          "options": [
            { "label": "Nitrogen", "correct": true },
            { "label": "Phosphorus", "correct": false },
            { "label": "Potassium", "correct": false },
            { "label": "Calcium", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "What is the main goal of crop rotation?",
        "answers": {
          "options": [
            { "label": "Increase soil fertility and reduce pests", "correct": true },
            { "label": "Harvest more crops at once", "correct": false },
            { "label": "Use more pesticides", "correct": false },
            { "label": "Grow only one type of crop", "correct": false }
          ]
        },
        "top": "230px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "Which animal is known for producing honey?",
        "answers": {
          "options": [
            { "label": "Bee", "correct": true },
            { "label": "Ant", "correct": false },
            { "label": "Wasp", "correct": false },
            { "label": "Butterfly", "correct": false }
          ]
        },
        "top": "210px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "What is the term for a group of pigs?",
        "answers": {
          "options": [
            { "label": "Herd", "correct": false },
            { "label": "Drove", "correct": true },
            { "label": "Pack", "correct": false },
            { "label": "Flock", "correct": false }
          ]
        },
        "top": "170px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "Which type of farming involves growing crops without soil?",
        "answers": {
          "options": [
            { "label": "Hydroponics", "correct": true },
            { "label": "Aquaculture", "correct": false },
            { "label": "Silviculture", "correct": false },
            { "label": "Pastoralism", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "Which crop is used to produce flour for bread?",
        "answers": {
          "options": [
            { "label": "Wheat", "correct": true },
            { "label": "Corn", "correct": false },
            { "label": "Barley", "correct": false },
            { "label": "Oats", "correct": false }
          ]
        },
        "top": "190px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "Which animal is known for carrying loads and used as a beast of burden?",
        "answers": {
          "options": [
            { "label": "Donkey", "correct": true },
            { "label": "Chicken", "correct": false },
            { "label": "Cat", "correct": false },
            { "label": "Duck", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "What is the hard question: Which farming practice improves soil structure by adding organic matter?",
        "answers": {
          "options": [
            { "label": "Composting", "correct": true },
            { "label": "Pesticide application", "correct": false },
            { "label": "Irrigation", "correct": false },
            { "label": "Monocropping", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "What is the primary diet of domesticated rabbits?",
        "answers": {
          "options": [
            { "label": "Herbivore - mainly grasses and vegetables", "correct": true },
            { "label": "Carnivore - small insects", "correct": false },
            { "label": "Omnivore - mixed diet", "correct": false },
            { "label": "Frugivore - fruits only", "correct": false }
          ]
        },
        "top": "210px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "Which pest is commonly known to damage stored grains on farms?",
        "answers": {
          "options": [
            { "label": "Weevil", "correct": true },
            { "label": "Locust", "correct": false },
            { "label": "Termite", "correct": false },
            { "label": "Aphid", "correct": false }
          ]
        },
        "top": "240px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "Domesticated animals",
        "question": "Which domesticated animal is known for producing eggs commonly consumed by humans?",
        "answers": {
          "options": [
            { "label": "Chicken", "correct": true },
            { "label": "Cow", "correct": false },
            { "label": "Sheep", "correct": false },
            { "label": "Goat", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "Farming",
        "question": "Which farming method is used to grow fish and aquatic plants together?",
        "answers": {
          "options": [
            { "label": "Aquaponics", "correct": true },
            { "label": "Hydroponics", "correct": false },
            { "label": "Terracing", "correct": false },
            { "label": "Permaculture", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], "game1-15-1": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "travel",
        "question": "What is the busiest airport in the world by passenger traffic?",
        "answers": {
          "options": [
            { "label": "Beijing Capital International Airport", "correct": false },
            { "label": "Hartsfield-Jackson Atlanta International Airport", "correct": true },
            { "label": "Dubai International Airport", "correct": false },
            { "label": "Heathrow Airport", "correct": false }
          ]
        },
        "top": "120px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which country is home to the famous Machu Picchu ruins?",
        "answers": {
          "options": [
            { "label": "Peru", "correct": true },
            { "label": "Mexico", "correct": false },
            { "label": "Chile", "correct": false },
            { "label": "Brazil", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which continent is the Sahara Desert located on?",
        "answers": {
          "options": [
            { "label": "Asia", "correct": false },
            { "label": "Africa", "correct": true },
            { "label": "Australia", "correct": false },
            { "label": "South America", "correct": false }
          ]
        },
        "top": "200px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which language is the most widely spoken native language in the world?",
        "answers": {
          "options": [
            { "label": "English", "correct": false },
            { "label": "Mandarin Chinese", "correct": true },
            { "label": "Spanish", "correct": false },
            { "label": "Hindi", "correct": false }
          ]
        },
        "top": "140px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "culture",
        "question": "The art of paper folding is traditionally known as what?",
        "answers": {
          "options": [
            { "label": "Origami", "correct": true },
            { "label": "Calligraphy", "correct": false },
            { "label": "Sculpting", "correct": false },
            { "label": "Weaving", "correct": false }
          ]
        },
        "top": "180px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which festival is famously celebrated with colored powders in India?",
        "answers": {
          "options": [
            { "label": "Diwali", "correct": false },
            { "label": "Holi", "correct": true },
            { "label": "Navratri", "correct": false },
            { "label": "Eid", "correct": false }
          ]
        },
        "top": "220px",
        "left": "65px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which city is famous for the landmark Eiffel Tower?",
        "answers": {
          "options": [
            { "label": "Paris", "correct": true },
            { "label": "London", "correct": false },
            { "label": "Rome", "correct": false },
            { "label": "Berlin", "correct": false }
          ]
        },
        "top": "260px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which mode of transport is used for the famous Trans-Siberian route?",
        "answers": {
          "options": [
            { "label": "Train", "correct": true },
            { "label": "Boat", "correct": false },
            { "label": "Plane", "correct": false },
            { "label": "Bus", "correct": false }
          ]
        },
        "top": "150px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which ancient civilization built the pyramids?",
        "answers": {
          "options": [
            { "label": "Romans", "correct": false },
            { "label": "Egyptians", "correct": true },
            { "label": "Aztecs", "correct": false },
            { "label": "Greeks", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which country is known as the Land of the Rising Sun?",
        "answers": {
          "options": [
            { "label": "China", "correct": false },
            { "label": "Japan", "correct": true },
            { "label": "Thailand", "correct": false },
            { "label": "South Korea", "correct": false }
          ]
        },
        "top": "230px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which musical instrument is traditionally used in Flamenco music?",
        "answers": {
          "options": [
            { "label": "Guitar", "correct": true },
            { "label": "Piano", "correct": false },
            { "label": "Violin", "correct": false },
            { "label": "Drums", "correct": false }
          ]
        },
        "top": "210px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which U.S. city is famous for the Golden Gate Bridge?",
        "answers": {
          "options": [
            { "label": "San Francisco", "correct": true },
            { "label": "Los Angeles", "correct": false },
            { "label": "Seattle", "correct": false },
            { "label": "Chicago", "correct": false }
          ]
        },
        "top": "170px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which country is the origin of the dance form Ballet?",
        "answers": {
          "options": [
            { "label": "Italy", "correct": true },
            { "label": "France", "correct": false },
            { "label": "Russia", "correct": false },
            { "label": "Spain", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which traditional Japanese garment is worn during festivals?",
        "answers": {
          "options": [
            { "label": "Kimono", "correct": true },
            { "label": "Hanbok", "correct": false },
            { "label": "Sari", "correct": false },
            { "label": "Dashiki", "correct": false }
          ]
        },
        "top": "190px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which of these is the largest country by land area?",
        "answers": {
          "options": [
            { "label": "Canada", "correct": false },
            { "label": "Russia", "correct": true },
            { "label": "China", "correct": false },
            { "label": "United States", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Hard question: What is the traditional Maori dance performed in New Zealand called?",
        "answers": {
          "options": [
            { "label": "Haka", "correct": true },
            { "label": "Samba", "correct": false },
            { "label": "Tango", "correct": false },
            { "label": "Flamenco", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which European city is famous for its canals and gondolas?",
        "answers": {
          "options": [
            { "label": "Venice", "correct": true },
            { "label": "Amsterdam", "correct": false },
            { "label": "Bruges", "correct": false },
            { "label": "Stockholm", "correct": false }
          ]
        },
        "top": "210px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which famous artist painted the ceiling of the Sistine Chapel?",
        "answers": {
          "options": [
            { "label": "Michelangelo", "correct": true },
            { "label": "Leonardo da Vinci", "correct": false },
            { "label": "Raphael", "correct": false },
            { "label": "Donatello", "correct": false }
          ]
        },
        "top": "240px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "travel",
        "question": "Which of these countries is NOT part of the United Kingdom?",
        "answers": {
          "options": [
            { "label": "Scotland", "correct": false },
            { "label": "Wales", "correct": false },
            { "label": "Ireland", "correct": true },
            { "label": "Northern Ireland", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "culture",
        "question": "Which cuisine is famous for sushi?",
        "answers": {
          "options": [
            { "label": "Japanese", "correct": true },
            { "label": "Korean", "correct": false },
            { "label": "Chinese", "correct": false },
            { "label": "Thai", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-15-2": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "healing",
        "question": "What vitamin is essential for wound healing and immune function?",
        "answers": {
          "options": [
            { "label": "Vitamin C", "correct": true },
            { "label": "Vitamin D", "correct": false },
            { "label": "Vitamin A", "correct": false },
            { "label": "Vitamin B12", "correct": false }
          ]
        },
        "top": "120px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "herbalism",
        "question": "Which herb is traditionally used to soothe digestive issues?",
        "answers": {
          "options": [
            { "label": "Peppermint", "correct": true },
            { "label": "Lavender", "correct": false },
            { "label": "Rosemary", "correct": false },
            { "label": "Sage", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "ancient remedies",
        "question": "In ancient Egypt, what was commonly used to treat wounds and infections?",
        "answers": {
          "options": [
            { "label": "Honey", "correct": true },
            { "label": "Milk", "correct": false },
            { "label": "Olive oil", "correct": false },
            { "label": "Salt water", "correct": false }
          ]
        },
        "top": "200px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "healing",
        "question": "Which natural substance is known for its antiseptic properties and is used in healing wounds?",
        "answers": {
          "options": [
            { "label": "Aloe vera", "correct": true },
            { "label": "Chamomile", "correct": false },
            { "label": "Eucalyptus", "correct": false },
            { "label": "Basil", "correct": false }
          ]
        },
        "top": "140px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "herbalism",
        "question": "Which herb is famous for its calming effects and is often used to reduce anxiety?",
        "answers": {
          "options": [
            { "label": "Lavender", "correct": true },
            { "label": "Thyme", "correct": false },
            { "label": "Rosemary", "correct": false },
            { "label": "Mint", "correct": false }
          ]
        },
        "top": "180px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 15
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "ancient remedies",
        "question": "Which ancient civilization is credited with developing acupuncture?",
        "answers": {
          "options": [
            { "label": "Chinese", "correct": true },
            { "label": "Greek", "correct": false },
            { "label": "Egyptian", "correct": false },
            { "label": "Roman", "correct": false }
          ]
        },
        "top": "220px",
        "left": "65px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "healing",
        "question": "Which mineral is crucial for bone healing and repair?",
        "answers": {
          "options": [
            { "label": "Calcium", "correct": true },
            { "label": "Iron", "correct": false },
            { "label": "Zinc", "correct": false },
            { "label": "Magnesium", "correct": false }
          ]
        },
        "top": "260px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "herbalism",
        "question": "Which plant’s leaves are used to make a tea that boosts the immune system and reduces inflammation?",
        "answers": {
          "options": [
            { "label": "Echinacea", "correct": true },
            { "label": "Dandelion", "correct": false },
            { "label": "Nettle", "correct": false },
            { "label": "Chamomile", "correct": false }
          ]
        },
        "top": "150px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "ancient remedies",
        "question": "In ancient Greece, which plant was used as a pain reliever and is the precursor to modern aspirin?",
        "answers": {
          "options": [
            { "label": "Willow bark", "correct": true },
            { "label": "Aloe vera", "correct": false },
            { "label": "Ginseng", "correct": false },
            { "label": "Mandrake", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "healing",
        "question": "Which natural remedy is often used to relieve symptoms of a cold, thanks to its anti-inflammatory properties?",
        "answers": {
          "options": [
            { "label": "Ginger", "correct": true },
            { "label": "Peppermint", "correct": false },
            { "label": "Lavender", "correct": false },
            { "label": "Chamomile", "correct": false }
          ]
        },
        "top": "230px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "herbalism",
        "question": "Which herb is known as a natural antiseptic and is used to treat minor cuts and infections?",
        "answers": {
          "options": [
            { "label": "Tea tree", "correct": true },
            { "label": "Basil", "correct": false },
            { "label": "Mint", "correct": false },
            { "label": "Parsley", "correct": false }
          ]
        },
        "top": "210px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "ancient remedies",
        "question": "Which ancient civilization is famous for using leeches as a medical treatment?",
        "answers": {
          "options": [
            { "label": "Romans", "correct": true },
            { "label": "Chinese", "correct": false },
            { "label": "Egyptians", "correct": false },
            { "label": "Mesopotamians", "correct": false }
          ]
        },
        "top": "170px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "healing",
        "question": "Which vitamin deficiency causes scurvy, a disease known for bleeding gums and weakness?",
        "answers": {
          "options": [
            { "label": "Vitamin C", "correct": true },
            { "label": "Vitamin B12", "correct": false },
            { "label": "Vitamin D", "correct": false },
            { "label": "Vitamin A", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "herbalism",
        "question": "Which herb is commonly used to support liver health and detoxification?",
        "answers": {
          "options": [
            { "label": "Milk thistle", "correct": true },
            { "label": "Thyme", "correct": false },
            { "label": "Chamomile", "correct": false },
            { "label": "Sage", "correct": false }
          ]
        },
        "top": "190px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "ancient remedies",
        "question": "What substance did ancient Romans use in baths for its supposed healing properties?",
        "answers": {
          "options": [
            { "label": "Sulfur", "correct": true },
            { "label": "Salt", "correct": false },
            { "label": "Clay", "correct": false },
            { "label": "Honey", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "healing",
        "question": "Hard question: Which ancient medical text is considered one of the earliest works on healing and herbal remedies?",
        "answers": {
          "options": [
            { "label": "The Ebers Papyrus", "correct": true },
            { "label": "The Hippocratic Corpus", "correct": false },
            { "label": "The Ayurvedic Sutras", "correct": false },
            { "label": "The Dead Sea Scrolls", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "herbalism",
        "question": "Which herb is often used to relieve cold symptoms and has expectorant properties?",
        "answers": {
          "options": [
            { "label": "Eucalyptus", "correct": true },
            { "label": "Lavender", "correct": false },
            { "label": "Basil", "correct": false },
            { "label": "Thyme", "correct": false }
          ]
        },
        "top": "210px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "ancient remedies",
        "question": "Which natural remedy did ancient Chinese medicine use to improve circulation and treat pain?",
        "answers": {
          "options": [
            { "label": "Ginseng", "correct": true },
            { "label": "Mint", "correct": false },
            { "label": "Chamomile", "correct": false },
            { "label": "Peppermint", "correct": false }
          ]
        },
        "top": "240px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "healing",
        "question": "Which mineral is often used topically to reduce inflammation and promote skin healing?",
        "answers": {
          "options": [
            { "label": "Zinc", "correct": true },
            { "label": "Iron", "correct": false },
            { "label": "Calcium", "correct": false },
            { "label": "Magnesium", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "herbalism",
        "question": "Which flower is commonly used in herbal teas for its calming and sleep-inducing effects?",
        "answers": {
          "options": [
            { "label": "Chamomile", "correct": true },
            { "label": "Dandelion", "correct": false },
            { "label": "Jasmine", "correct": false },
            { "label": "Lavender", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-15-3": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "trade",
        "question": "Which ancient trade route connected China to the Mediterranean?",
        "answers": {
          "options": [
            { "label": "The Silk Road", "correct": true },
            { "label": "The Amber Road", "correct": false },
            { "label": "The Incense Route", "correct": false },
            { "label": "The Spice Route", "correct": false }
          ]
        },
        "top": "120px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "exotic ingredients",
        "question": "Which spice, derived from the Crocus flower, was historically worth more than gold?",
        "answers": {
          "options": [
            { "label": "Saffron", "correct": true },
            { "label": "Cinnamon", "correct": false },
            { "label": "Nutmeg", "correct": false },
            { "label": "Clove", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "historical cuisine",
        "question": "What grain was the staple food in ancient Mesopotamia?",
        "answers": {
          "options": [
            { "label": "Barley", "correct": true },
            { "label": "Wheat", "correct": false },
            { "label": "Rice", "correct": false },
            { "label": "Millet", "correct": false }
          ]
        },
        "top": "200px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "trade",
        "question": "Which ancient civilization was famous for trading purple dye made from sea snails?",
        "answers": {
          "options": [
            { "label": "Phoenicians", "correct": true },
            { "label": "Romans", "correct": false },
            { "label": "Greeks", "correct": false },
            { "label": "Egyptians", "correct": false }
          ]
        },
        "top": "140px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "exotic ingredients",
        "question": "Which fruit, known as the “King of Fruits,” is famous for its strong odor and is popular in Southeast Asia?",
        "answers": {
          "options": [
            { "label": "Durian", "correct": true },
            { "label": "Mangosteen", "correct": false },
            { "label": "Rambutan", "correct": false },
            { "label": "Lychee", "correct": false }
          ]
        },
        "top": "180px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "historical cuisine",
        "question": "Which ancient civilization popularized olive oil as a cooking ingredient?",
        "answers": {
          "options": [
            { "label": "Greeks", "correct": true },
            { "label": "Romans", "correct": false },
            { "label": "Egyptians", "correct": false },
            { "label": "Babylonians", "correct": false }
          ]
        },
        "top": "220px",
        "left": "65px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "trade",
        "question": "What precious metal was a key commodity traded across the Trans-Saharan trade routes?",
        "answers": {
          "options": [
            { "label": "Gold", "correct": true },
            { "label": "Silver", "correct": false },
            { "label": "Copper", "correct": false },
            { "label": "Platinum", "correct": false }
          ]
        },
        "top": "260px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "exotic ingredients",
        "question": "Which spice is made from the inner bark of trees and is used widely in sweet and savory dishes?",
        "answers": {
          "options": [
            { "label": "Cinnamon", "correct": true },
            { "label": "Cardamom", "correct": false },
            { "label": "Clove", "correct": false },
            { "label": "Star Anise", "correct": false }
          ]
        },
        "top": "150px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "historical cuisine",
        "question": "Which ancient civilization is credited with inventing beer through fermentation?",
        "answers": {
          "options": [
            { "label": "Sumerians", "correct": true },
            { "label": "Romans", "correct": false },
            { "label": "Egyptians", "correct": false },
            { "label": "Greeks", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "trade",
        "question": "Which maritime empire controlled key spice trade routes in the 15th century?",
        "answers": {
          "options": [
            { "label": "Portuguese Empire", "correct": true },
            { "label": "Ottoman Empire", "correct": false },
            { "label": "British Empire", "correct": false },
            { "label": "Venetian Republic", "correct": false }
          ]
        },
        "top": "230px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "exotic ingredients",
        "question": "Which nut, native to the Americas, was introduced to Europe after the Columbian exchange?",
        "answers": {
          "options": [
            { "label": "Peanut", "correct": true },
            { "label": "Almond", "correct": false },
            { "label": "Walnut", "correct": false },
            { "label": "Pistachio", "correct": false }
          ]
        },
        "top": "210px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "historical cuisine",
        "question": "Which Roman condiment, made from fermented fish, was commonly used to flavor dishes?",
        "answers": {
          "options": [
            { "label": "Garum", "correct": true },
            { "label": "Miso", "correct": false },
            { "label": "Soy sauce", "correct": false },
            { "label": "Vinegar", "correct": false }
          ]
        },
        "top": "170px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "trade",
        "question": "Which city was a major hub for the Indian spice trade historically?",
        "answers": {
          "options": [
            { "label": "Calicut", "correct": true },
            { "label": "Mumbai", "correct": false },
            { "label": "Delhi", "correct": false },
            { "label": "Chennai", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "exotic ingredients",
        "question": "Which fruit is known as the 'forbidden fruit' in medieval Europe due to its exotic origins?",
        "answers": {
          "options": [
            { "label": "Pomegranate", "correct": true },
            { "label": "Fig", "correct": false },
            { "label": "Apple", "correct": false },
            { "label": "Date", "correct": false }
          ]
        },
        "top": "190px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "historical cuisine",
        "question": "Which staple food was most commonly eaten by the Aztecs?",
        "answers": {
          "options": [
            { "label": "Maize (corn)", "correct": true },
            { "label": "Wheat", "correct": false },
            { "label": "Rice", "correct": false },
            { "label": "Barley", "correct": false }
          ]
        },
        "top": "160px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "trade",
        "question": "Hard question: Which 16th-century explorer's voyages helped establish direct sea trade routes from Europe to India?",
        "answers": {
          "options": [
            { "label": "Vasco da Gama", "correct": true },
            { "label": "Christopher Columbus", "correct": false },
            { "label": "Ferdinand Magellan", "correct": false },
            { "label": "James Cook", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "exotic ingredients",
        "question": "Which spice is known as the 'queen of spices' and is native to India and Sri Lanka?",
        "answers": {
          "options": [
            { "label": "Cardamom", "correct": true },
            { "label": "Cinnamon", "correct": false },
            { "label": "Clove", "correct": false },
            { "label": "Nutmeg", "correct": false }
          ]
        },
        "top": "210px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "historical cuisine",
        "question": "Which medieval European dish was made by layering meat, fish, and fruit in pies?",
        "answers": {
          "options": [
            { "label": "Pottage", "correct": false },
            { "label": "Tourte", "correct": true },
            { "label": "Ratatouille", "correct": false },
            { "label": "Stew", "correct": false }
          ]
        },
        "top": "240px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "trade",
        "question": "Which medieval European city was famous for its trade fairs that attracted merchants from all over the continent?",
        "answers": {
          "options": [
            { "label": "Champagne", "correct": true },
            { "label": "Venice", "correct": false },
            { "label": "London", "correct": false },
            { "label": "Paris", "correct": false }
          ]
        },
        "top": "180px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "exotic ingredients",
        "question": "Which flower’s stigma is harvested to produce the highly prized spice saffron?",
        "answers": {
          "options": [
            { "label": "Crocus sativus", "correct": true },
            { "label": "Lavender", "correct": false },
            { "label": "Rose", "correct": false },
            { "label": "Jasmine", "correct": false }
          ]
        },
        "top": "200px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      }
    ], "game1-16-1": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "motion",
        "question": "What is the term for the rate of change of velocity of an object?",
        "answers": {
          "options": [
            { "label": "Acceleration", "correct": true },
            { "label": "Speed", "correct": false },
            { "label": "Displacement", "correct": false },
            { "label": "Force", "correct": false }
          ]
        },
        "top": "110px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "physics",
        "question": "Which physicist formulated the laws of motion?",
        "answers": {
          "options": [
            { "label": "Isaac Newton", "correct": true },
            { "label": "Albert Einstein", "correct": false },
            { "label": "Galileo Galilei", "correct": false },
            { "label": "Nikola Tesla", "correct": false }
          ]
        },
        "top": "140px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "coordination",
        "question": "What type of coordination involves the brain, muscles, and sensory organs working together for movement?",
        "answers": {
          "options": [
            { "label": "Motor coordination", "correct": true },
            { "label": "Visual coordination", "correct": false },
            { "label": "Auditory coordination", "correct": false },
            { "label": "Reflex coordination", "correct": false }
          ]
        },
        "top": "170px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "motion",
        "question": "What is the distance traveled by an object divided by the time taken called?",
        "answers": {
          "options": [
            { "label": "Speed", "correct": true },
            { "label": "Velocity", "correct": false },
            { "label": "Acceleration", "correct": false },
            { "label": "Momentum", "correct": false }
          ]
        },
        "top": "200px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "physics",
        "question": "Which quantity is defined as mass times velocity?",
        "answers": {
          "options": [
            { "label": "Momentum", "correct": true },
            { "label": "Force", "correct": false },
            { "label": "Energy", "correct": false },
            { "label": "Power", "correct": false }
          ]
        },
        "top": "240px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "coordination",
        "question": "Which part of the brain is primarily responsible for coordinating voluntary movements?",
        "answers": {
          "options": [
            { "label": "Cerebellum", "correct": true },
            { "label": "Cerebrum", "correct": false },
            { "label": "Medulla", "correct": false },
            { "label": "Thalamus", "correct": false }
          ]
        },
        "top": "280px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "motion",
        "question": "What is the term for the shortest distance between an object’s starting and ending point?",
        "answers": {
          "options": [
            { "label": "Displacement", "correct": true },
            { "label": "Distance", "correct": false },
            { "label": "Velocity", "correct": false },
            { "label": "Acceleration", "correct": false }
          ]
        },
        "top": "320px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "physics",
        "question": "What force pulls objects toward the center of the Earth?",
        "answers": {
          "options": [
            { "label": "Gravity", "correct": true },
            { "label": "Friction", "correct": false },
            { "label": "Magnetism", "correct": false },
            { "label": "Tension", "correct": false }
          ]
        },
        "top": "360px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "coordination",
        "question": "What is the ability to use different parts of the body smoothly and efficiently called?",
        "answers": {
          "options": [
            { "label": "Motor skills", "correct": true },
            { "label": "Reflexes", "correct": false },
            { "label": "Endurance", "correct": false },
            { "label": "Balance", "correct": false }
          ]
        },
        "top": "400px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "motion",
        "question": "Which law states that an object in motion stays in motion unless acted upon by an external force?",
        "answers": {
          "options": [
            { "label": "Newton's First Law", "correct": true },
            { "label": "Newton's Second Law", "correct": false },
            { "label": "Newton's Third Law", "correct": false },
            { "label": "Law of Universal Gravitation", "correct": false }
          ]
        },
        "top": "440px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "physics",
        "question": "What type of energy is stored due to an object's position or configuration?",
        "answers": {
          "options": [
            { "label": "Potential energy", "correct": true },
            { "label": "Kinetic energy", "correct": false },
            { "label": "Thermal energy", "correct": false },
            { "label": "Chemical energy", "correct": false }
          ]
        },
        "top": "480px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "coordination",
        "question": "Which system of the body coordinates voluntary movement by transmitting signals from the brain to muscles?",
        "answers": {
          "options": [
            { "label": "Nervous system", "correct": true },
            { "label": "Respiratory system", "correct": false },
            { "label": "Circulatory system", "correct": false },
            { "label": "Digestive system", "correct": false }
          ]
        },
        "top": "520px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "motion",
        "question": "What is the term for velocity with a specified direction?",
        "answers": {
          "options": [
            { "label": "Velocity", "correct": true },
            { "label": "Speed", "correct": false },
            { "label": "Momentum", "correct": false },
            { "label": "Acceleration", "correct": false }
          ]
        },
        "top": "560px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "physics",
        "question": "Which law states that force equals mass times acceleration (F=ma)?",
        "answers": {
          "options": [
            { "label": "Newton's Second Law", "correct": true },
            { "label": "Newton's First Law", "correct": false },
            { "label": "Newton's Third Law", "correct": false },
            { "label": "Law of Conservation of Energy", "correct": false }
          ]
        },
        "top": "600px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "coordination",
        "question": "What is the name of the reflex that helps maintain balance and posture automatically?",
        "answers": {
          "options": [
            { "label": "Vestibular reflex", "correct": true },
            { "label": "Stretch reflex", "correct": false },
            { "label": "Withdrawal reflex", "correct": false },
            { "label": "Crossed extensor reflex", "correct": false }
          ]
        },
        "top": "640px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "motion",
        "question": "Hard question: What is the difference between scalar and vector quantities in physics?",
        "answers": {
          "options": [
            { "label": "Scalars have magnitude only; vectors have magnitude and direction", "correct": true },
            { "label": "Vectors have magnitude only; scalars have magnitude and direction", "correct": false },
            { "label": "Scalars are faster than vectors", "correct": false },
            { "label": "Vectors are larger in size than scalars", "correct": false }
          ]
        },
        "top": "680px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "physics",
        "question": "Which physical quantity describes the amount of matter in an object?",
        "answers": {
          "options": [
            { "label": "Mass", "correct": true },
            { "label": "Weight", "correct": false },
            { "label": "Volume", "correct": false },
            { "label": "Density", "correct": false }
          ]
        },
        "top": "720px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "coordination",
        "question": "Which sense plays a crucial role in body coordination by providing spatial orientation?",
        "answers": {
          "options": [
            { "label": "Vestibular sense", "correct": true },
            { "label": "Visual sense", "correct": false },
            { "label": "Auditory sense", "correct": false },
            { "label": "Tactile sense", "correct": false }
          ]
        },
        "top": "760px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "motion",
        "question": "What is the momentum of a 5 kg object moving at 3 m/s?",
        "answers": {
          "options": [
            { "label": "15 kg·m/s", "correct": true },
            { "label": "8 kg·m/s", "correct": false },
            { "label": "2 kg·m/s", "correct": false },
            { "label": "5 kg·m/s", "correct": false }
          ]
        },
        "top": "800px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "physics",
        "question": "Which force opposes the motion of objects sliding past each other?",
        "answers": {
          "options": [
            { "label": "Friction", "correct": true },
            { "label": "Gravity", "correct": false },
            { "label": "Magnetism", "correct": false },
            { "label": "Tension", "correct": false }
          ]
        },
        "top": "840px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-16-2": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "body",
        "question": "Which system in the human body is primarily responsible for movement?",
        "answers": {
          "options": [
            { "label": "Muscular system", "correct": true },
            { "label": "Nervous system", "correct": false },
            { "label": "Respiratory system", "correct": false },
            { "label": "Digestive system", "correct": false }
          ]
        },
        "top": "100px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "balance",
        "question": "What organ in the inner ear helps maintain balance and spatial orientation?",
        "answers": {
          "options": [
            { "label": "Vestibular system", "correct": true },
            { "label": "Cochlea", "correct": false },
            { "label": "Semicircular canals", "correct": false },
            { "label": "Eustachian tube", "correct": false }
          ]
        },
        "top": "130px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "biology of movement",
        "question": "What type of muscle is responsible for voluntary movements?",
        "answers": {
          "options": [
            { "label": "Skeletal muscle", "correct": true },
            { "label": "Smooth muscle", "correct": false },
            { "label": "Cardiac muscle", "correct": false },
            { "label": "Involuntary muscle", "correct": false }
          ]
        },
        "top": "160px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "body",
        "question": "Which part of the nervous system controls reflexes that help maintain posture and balance?",
        "answers": {
          "options": [
            { "label": "Spinal cord", "correct": true },
            { "label": "Brainstem", "correct": false },
            { "label": "Cerebellum", "correct": false },
            { "label": "Cerebrum", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "balance",
        "question": "What sensory receptors in muscles and tendons provide feedback to help control body position?",
        "answers": {
          "options": [
            { "label": "Proprioceptors", "correct": true },
            { "label": "Photoreceptors", "correct": false },
            { "label": "Thermoreceptors", "correct": false },
            { "label": "Mechanoreceptors", "correct": false }
          ]
        },
        "top": "220px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "biology of movement",
        "question": "What molecule provides energy for muscle contractions?",
        "answers": {
          "options": [
            { "label": "ATP (adenosine triphosphate)", "correct": true },
            { "label": "Glucose", "correct": false },
            { "label": "Oxygen", "correct": false },
            { "label": "Carbon dioxide", "correct": false }
          ]
        },
        "top": "250px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "body",
        "question": "Which bone is the longest in the human body?",
        "answers": {
          "options": [
            { "label": "Femur", "correct": true },
            { "label": "Humerus", "correct": false },
            { "label": "Tibia", "correct": false },
            { "label": "Fibula", "correct": false }
          ]
        },
        "top": "280px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "balance",
        "question": "Which part of the brain is most involved in coordinating balance and fine motor control?",
        "answers": {
          "options": [
            { "label": "Cerebellum", "correct": true },
            { "label": "Medulla oblongata", "correct": false },
            { "label": "Hypothalamus", "correct": false },
            { "label": "Thalamus", "correct": false }
          ]
        },
        "top": "310px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "biology of movement",
        "question": "Which protein filaments slide past each other during muscle contraction?",
        "answers": {
          "options": [
            { "label": "Actin and myosin", "correct": true },
            { "label": "Collagen and elastin", "correct": false },
            { "label": "Keratin and fibrin", "correct": false },
            { "label": "Tubulin and dynein", "correct": false }
          ]
        },
        "top": "340px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "body",
        "question": "Which joint allows the greatest range of motion in the human body?",
        "answers": {
          "options": [
            { "label": "Ball and socket joint", "correct": true },
            { "label": "Hinge joint", "correct": false },
            { "label": "Pivot joint", "correct": false },
            { "label": "Saddle joint", "correct": false }
          ]
        },
        "top": "370px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "balance",
        "question": "Which reflex helps prevent falls by causing a rapid step forward when balance is lost?",
        "answers": {
          "options": [
            { "label": "Righting reflex", "correct": true },
            { "label": "Stretch reflex", "correct": false },
            { "label": "Withdrawal reflex", "correct": false },
            { "label": "Blink reflex", "correct": false }
          ]
        },
        "top": "400px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "biology of movement",
        "question": "Which neurotransmitter is primarily responsible for stimulating muscle contraction?",
        "answers": {
          "options": [
            { "label": "Acetylcholine", "correct": true },
            { "label": "Dopamine", "correct": false },
            { "label": "Serotonin", "correct": false },
            { "label": "GABA", "correct": false }
          ]
        },
        "top": "430px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "body",
        "question": "Which type of connective tissue connects muscles to bones?",
        "answers": {
          "options": [
            { "label": "Tendons", "correct": true },
            { "label": "Ligaments", "correct": false },
            { "label": "Cartilage", "correct": false },
            { "label": "Fascia", "correct": false }
          ]
        },
        "top": "460px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "balance",
        "question": "Which sensory system combines information from the eyes, muscles, and inner ear to maintain balance?",
        "answers": {
          "options": [
            { "label": "Proprioceptive system", "correct": true },
            { "label": "Auditory system", "correct": false },
            { "label": "Visual system", "correct": false },
            { "label": "Olfactory system", "correct": false }
          ]
        },
        "top": "490px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "biology of movement",
        "question": "Which process involves converting chemical energy into mechanical energy in muscles?",
        "answers": {
          "options": [
            { "label": "Muscle contraction", "correct": true },
            { "label": "Respiration", "correct": false },
            { "label": "Photosynthesis", "correct": false },
            { "label": "Osmosis", "correct": false }
          ]
        },
        "top": "520px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "body",
        "question": "Hard question: What is the term for the smallest functional unit of a muscle fiber responsible for contraction?",
        "answers": {
          "options": [
            { "label": "Sarcomere", "correct": true },
            { "label": "Myofibril", "correct": false },
            { "label": "Myosin", "correct": false },
            { "label": "Actin", "correct": false }
          ]
        },
        "top": "550px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "balance",
        "question": "Which condition results from dysfunction of the vestibular system, causing dizziness and imbalance?",
        "answers": {
          "options": [
            { "label": "Vertigo", "correct": true },
            { "label": "Ataxia", "correct": false },
            { "label": "Tinnitus", "correct": false },
            { "label": "Aphasia", "correct": false }
          ]
        },
        "top": "580px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "biology of movement",
        "question": "Which energy system provides immediate energy for short bursts of intense muscle activity?",
        "answers": {
          "options": [
            { "label": "ATP-PC system", "correct": true },
            { "label": "Aerobic system", "correct": false },
            { "label": "Anaerobic glycolysis", "correct": false },
            { "label": "Oxidative phosphorylation", "correct": false }
          ]
        },
        "top": "610px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "body",
        "question": "Which hormone is important for muscle growth and repair?",
        "answers": {
          "options": [
            { "label": "Testosterone", "correct": true },
            { "label": "Insulin", "correct": false },
            { "label": "Cortisol", "correct": false },
            { "label": "Adrenaline", "correct": false }
          ]
        },
        "top": "640px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "balance",
        "question": "Which test is commonly used to assess a person's balance ability?",
        "answers": {
          "options": [
            { "label": "Romberg test", "correct": true },
            { "label": "Treadmill test", "correct": false },
            { "label": "Stress test", "correct": false },
            { "label": "Visual acuity test", "correct": false }
          ]
        },
        "top": "670px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      }
    ], "game1-16-3": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "What is considered the oldest known board game in the world?",
        "answers": {
          "options": [
            { "label": "Senet", "correct": true },
            { "label": "Chess", "correct": false },
            { "label": "Go", "correct": false },
            { "label": "Backgammon", "correct": false }
          ]
        },
        "top": "100px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "performance",
        "question": "Which ancient civilization is credited with the origins of theatrical performance?",
        "answers": {
          "options": [
            { "label": "Ancient Greece", "correct": true },
            { "label": "Ancient Egypt", "correct": false },
            { "label": "Ancient Rome", "correct": false },
            { "label": "Ancient China", "correct": false }
          ]
        },
        "top": "130px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "Which game introduced the concept of the 'King' piece?",
        "answers": {
          "options": [
            { "label": "Chess", "correct": true },
            { "label": "Checkers", "correct": false },
            { "label": "Go", "correct": false },
            { "label": "Mahjong", "correct": false }
          ]
        },
        "top": "160px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "performance",
        "question": "Who is considered the father of modern theatre?",
        "answers": {
          "options": [
            { "label": "Constantin Stanislavski", "correct": true },
            { "label": "William Shakespeare", "correct": false },
            { "label": "Sophocles", "correct": false },
            { "label": "Anton Chekhov", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "What was the primary material used for early playing cards in Europe?",
        "answers": {
          "options": [
            { "label": "Paper", "correct": true },
            { "label": "Wood", "correct": false },
            { "label": "Metal", "correct": false },
            { "label": "Bone", "correct": false }
          ]
        },
        "top": "220px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "performance",
        "question": "In theatre, what is the term for the area where the audience sits?",
        "answers": {
          "options": [
            { "label": "Auditorium", "correct": true },
            { "label": "Stage", "correct": false },
            { "label": "Backstage", "correct": false },
            { "label": "Balcony", "correct": false }
          ]
        },
        "top": "250px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "Which game is known for using black and white stones on a grid?",
        "answers": {
          "options": [
            { "label": "Go", "correct": true },
            { "label": "Checkers", "correct": false },
            { "label": "Backgammon", "correct": false },
            { "label": "Mancala", "correct": false }
          ]
        },
        "top": "280px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "performance",
        "question": "Which playwright wrote the tragedy \"Oedipus Rex\"?",
        "answers": {
          "options": [
            { "label": "Sophocles", "correct": true },
            { "label": "Euripides", "correct": false },
            { "label": "Aristophanes", "correct": false },
            { "label": "Aeschylus", "correct": false }
          ]
        },
        "top": "310px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "In what century was playing cards first introduced to Europe?",
        "answers": {
          "options": [
            { "label": "14th century", "correct": true },
            { "label": "12th century", "correct": false },
            { "label": "16th century", "correct": false },
            { "label": "10th century", "correct": false }
          ]
        },
        "top": "340px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "performance",
        "question": "What is the name of the dramatic technique involving an actor speaking their thoughts aloud?",
        "answers": {
          "options": [
            { "label": "Soliloquy", "correct": true },
            { "label": "Monologue", "correct": false },
            { "label": "Dialogue", "correct": false },
            { "label": "Aside", "correct": false }
          ]
        },
        "top": "370px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "Which ancient civilization played a ball game called 'Pok-A-Tok'?",
        "answers": {
          "options": [
            { "label": "Maya", "correct": true },
            { "label": "Aztec", "correct": false },
            { "label": "Inca", "correct": false },
            { "label": "Olmec", "correct": false }
          ]
        },
        "top": "400px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "performance",
        "question": "What type of stage is surrounded by the audience on all sides?",
        "answers": {
          "options": [
            { "label": "Theatre in the round", "correct": true },
            { "label": "Proscenium stage", "correct": false },
            { "label": "Thrust stage", "correct": false },
            { "label": "Black box theatre", "correct": false }
          ]
        },
        "top": "430px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "What game uses a checkered board with 64 squares and 16 pieces per player?",
        "answers": {
          "options": [
            { "label": "Chess", "correct": true },
            { "label": "Checkers", "correct": false },
            { "label": "Backgammon", "correct": false },
            { "label": "Go", "correct": false }
          ]
        },
        "top": "460px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "performance",
        "question": "Which Shakespeare play features the famous 'To be or not to be' soliloquy?",
        "answers": {
          "options": [
            { "label": "Hamlet", "correct": true },
            { "label": "Macbeth", "correct": false },
            { "label": "Othello", "correct": false },
            { "label": "King Lear", "correct": false }
          ]
        },
        "top": "490px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "Hard question: What was the name of the ancient Indian game considered a precursor to modern chess?",
        "answers": {
          "options": [
            { "label": "Chaturanga", "correct": true },
            { "label": "Pachisi", "correct": false },
            { "label": "Carrom", "correct": false },
            { "label": "Mahjong", "correct": false }
          ]
        },
        "top": "520px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "performance",
        "question": "What is the name of the festival in ancient Greece that celebrated drama and theatrical competitions?",
        "answers": {
          "options": [
            { "label": "Dionysia", "correct": true },
            { "label": "Olympia", "correct": false },
            { "label": "Pythia", "correct": false },
            { "label": "Nemea", "correct": false }
          ]
        },
        "top": "550px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "Which ancient game involved moving stones on a board to capture the opponent’s pieces, originating in Egypt?",
        "answers": {
          "options": [
            { "label": "Mancala", "correct": true },
            { "label": "Senet", "correct": false },
            { "label": "Backgammon", "correct": false },
            { "label": "Go", "correct": false }
          ]
        },
        "top": "580px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "performance",
        "question": "Which form of performance art involves actors improvising without a script?",
        "answers": {
          "options": [
            { "label": "Improvisational theatre", "correct": true },
            { "label": "Pantomime", "correct": false },
            { "label": "Musical theatre", "correct": false },
            { "label": "Opera", "correct": false }
          ]
        },
        "top": "610px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "The history of games",
        "question": "Which card game was originally used as a tool for divination in the 18th century?",
        "answers": {
          "options": [
            { "label": "Tarot", "correct": true },
            { "label": "Bridge", "correct": false },
            { "label": "Poker", "correct": false },
            { "label": "Solitaire", "correct": false }
          ]
        },
        "top": "640px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "performance",
        "question": "What is the name of the person responsible for managing a theatre production?",
        "answers": {
          "options": [
            { "label": "Director", "correct": true },
            { "label": "Producer", "correct": false },
            { "label": "Stage manager", "correct": false },
            { "label": "Playwright", "correct": false }
          ]
        },
        "top": "670px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      }
    ], "game1-17-1": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the first person to walk on the Moon?",
        "answers": {
          "options": [
            { "label": "Neil Armstrong", "correct": true },
            { "label": "Buzz Aldrin", "correct": false },
            { "label": "Yuri Gagarin", "correct": false },
            { "label": "Michael Collins", "correct": false }
          ]
        },
        "top": "100px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Which scientist developed the theory of general relativity?",
        "answers": {
          "options": [
            { "label": "Albert Einstein", "correct": true },
            { "label": "Isaac Newton", "correct": false },
            { "label": "Galileo Galilei", "correct": false },
            { "label": "Nikola Tesla", "correct": false }
          ]
        },
        "top": "130px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the first female Prime Minister of the United Kingdom?",
        "answers": {
          "options": [
            { "label": "Margaret Thatcher", "correct": true },
            { "label": "Theresa May", "correct": false },
            { "label": "Indira Gandhi", "correct": false },
            { "label": "Angela Merkel", "correct": false }
          ]
        },
        "top": "160px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who is known as the 'Father of the Computer'?",
        "answers": {
          "options": [
            { "label": "Charles Babbage", "correct": true },
            { "label": "Alan Turing", "correct": false },
            { "label": "John von Neumann", "correct": false },
            { "label": "Nikola Tesla", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who led the Indian independence movement through nonviolent resistance?",
        "answers": {
          "options": [
            { "label": "Mahatma Gandhi", "correct": true },
            { "label": "Jawaharlal Nehru", "correct": false },
            { "label": "Subhas Chandra Bose", "correct": false },
            { "label": "Bhagat Singh", "correct": false }
          ]
        },
        "top": "220px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Which famous artist painted the 'Mona Lisa'?",
        "answers": {
          "options": [
            { "label": "Leonardo da Vinci", "correct": true },
            { "label": "Michelangelo", "correct": false },
            { "label": "Raphael", "correct": false },
            { "label": "Vincent van Gogh", "correct": false }
          ]
        },
        "top": "250px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the first woman to win a Nobel Prize?",
        "answers": {
          "options": [
            { "label": "Marie Curie", "correct": true },
            { "label": "Rosalind Franklin", "correct": false },
            { "label": "Dorothy Hodgkin", "correct": false },
            { "label": "Ada Lovelace", "correct": false }
          ]
        },
        "top": "280px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the American civil rights leader famous for his 'I Have a Dream' speech?",
        "answers": {
          "options": [
            { "label": "Martin Luther King Jr.", "correct": true },
            { "label": "Malcolm X", "correct": false },
            { "label": "Rosa Parks", "correct": false },
            { "label": "Frederick Douglass", "correct": false }
          ]
        },
        "top": "310px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Which British naturalist is famous for his theory of evolution by natural selection?",
        "answers": {
          "options": [
            { "label": "Charles Darwin", "correct": true },
            { "label": "Alfred Russel Wallace", "correct": false },
            { "label": "Gregor Mendel", "correct": false },
            { "label": "Louis Pasteur", "correct": false }
          ]
        },
        "top": "340px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the first woman to fly solo across the Atlantic Ocean?",
        "answers": {
          "options": [
            { "label": "Amelia Earhart", "correct": true },
            { "label": "Harriet Quimby", "correct": false },
            { "label": "Bessie Coleman", "correct": false },
            { "label": "Sally Ride", "correct": false }
          ]
        },
        "top": "370px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Which inventor is credited with inventing the light bulb?",
        "answers": {
          "options": [
            { "label": "Thomas Edison", "correct": true },
            { "label": "Nikola Tesla", "correct": false },
            { "label": "Alexander Graham Bell", "correct": false },
            { "label": "Benjamin Franklin", "correct": false }
          ]
        },
        "top": "400px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the first African American president of the United States?",
        "answers": {
          "options": [
            { "label": "Barack Obama", "correct": true },
            { "label": "Colin Powell", "correct": false },
            { "label": "Jesse Jackson", "correct": false },
            { "label": "Frederick Douglass", "correct": false }
          ]
        },
        "top": "430px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the first person to propose the heliocentric model of the solar system?",
        "answers": {
          "options": [
            { "label": "Nicolaus Copernicus", "correct": true },
            { "label": "Galileo Galilei", "correct": false },
            { "label": "Johannes Kepler", "correct": false },
            { "label": "Ptolemy", "correct": false }
          ]
        },
        "top": "460px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Which famous leader was known as the 'Iron Lady'?",
        "answers": {
          "options": [
            { "label": "Margaret Thatcher", "correct": true },
            { "label": "Angela Merkel", "correct": false },
            { "label": "Indira Gandhi", "correct": false },
            { "label": "Golda Meir", "correct": false }
          ]
        },
        "top": "490px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Hard question: Who was the Renaissance polymath known for his works in art, science, and engineering, including the Vitruvian Man?",
        "answers": {
          "options": [
            { "label": "Leonardo da Vinci", "correct": true },
            { "label": "Michelangelo", "correct": false },
            { "label": "Raphael", "correct": false },
            { "label": "Galileo Galilei", "correct": false }
          ]
        },
        "top": "520px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the youngest person to win a Nobel Prize?",
        "answers": {
          "options": [
            { "label": "Malala Yousafzai", "correct": true },
            { "label": "Marie Curie", "correct": false },
            { "label": "Alexandra Elbakyan", "correct": false },
            { "label": "Greta Thunberg", "correct": false }
          ]
        },
        "top": "550px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the famous civil rights activist known for refusing to give up her bus seat in Montgomery, Alabama?",
        "answers": {
          "options": [
            { "label": "Rosa Parks", "correct": true },
            { "label": "Harriet Tubman", "correct": false },
            { "label": "Sojourner Truth", "correct": false },
            { "label": "Angela Davis", "correct": false }
          ]
        },
        "top": "580px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Which entrepreneur co-founded Microsoft?",
        "answers": {
          "options": [
            { "label": "Bill Gates", "correct": true },
            { "label": "Steve Jobs", "correct": false },
            { "label": "Mark Zuckerberg", "correct": false },
            { "label": "Elon Musk", "correct": false }
          ]
        },
        "top": "610px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Who was the ancient Egyptian queen known for her intelligence and political savvy?",
        "answers": {
          "options": [
            { "label": "Cleopatra", "correct": true },
            { "label": "Nefertiti", "correct": false },
            { "label": "Hatshepsut", "correct": false },
            { "label": "Sobekneferu", "correct": false }
          ]
        },
        "top": "640px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "biographies of famous people",
        "question": "Which physicist is known for the uncertainty principle in quantum mechanics?",
        "answers": {
          "options": [
            { "label": "Werner Heisenberg", "correct": true },
            { "label": "Niels Bohr", "correct": false },
            { "label": "Erwin Schrödinger", "correct": false },
            { "label": "Max Planck", "correct": false }
          ]
        },
        "top": "670px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      }
    ], "game1-17-2": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "In mythology, what creature is known for breathing fire and flying?",
        "answers": {
          "options": [
            { "label": "Dragon", "correct": true },
            { "label": "Phoenix", "correct": false },
            { "label": "Griffin", "correct": false },
            { "label": "Unicorn", "correct": false }
          ]
        },
        "top": "100px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "What is the term for the study and interpretation of dreams?",
        "answers": {
          "options": [
            { "label": "Oneirology", "correct": true },
            { "label": "Cryptozoology", "correct": false },
            { "label": "Parapsychology", "correct": false },
            { "label": "Mythology", "correct": false }
          ]
        },
        "top": "130px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which mythical creature has the body of a lion and the head and wings of an eagle?",
        "answers": {
          "options": [
            { "label": "Griffin", "correct": true },
            { "label": "Chimera", "correct": false },
            { "label": "Minotaur", "correct": false },
            { "label": "Sphinx", "correct": false }
          ]
        },
        "top": "160px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "In dreams, what does flying often symbolize?",
        "answers": {
          "options": [
            { "label": "Freedom", "correct": true },
            { "label": "Fear", "correct": false },
            { "label": "Failure", "correct": false },
            { "label": "Confusion", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which creature from Greek mythology has snakes for hair and turns people to stone with her gaze?",
        "answers": {
          "options": [
            { "label": "Medusa", "correct": true },
            { "label": "Hydra", "correct": false },
            { "label": "Cerberus", "correct": false },
            { "label": "Minotaur", "correct": false }
          ]
        },
        "top": "220px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which mythical bird is reborn from its ashes?",
        "answers": {
          "options": [
            { "label": "Phoenix", "correct": true },
            { "label": "Harpy", "correct": false },
            { "label": "Griffin", "correct": false },
            { "label": "Pegasus", "correct": false }
          ]
        },
        "top": "250px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "What does the term 'lucid dreaming' mean?",
        "answers": {
          "options": [
            { "label": "Being aware you are dreaming while dreaming", "correct": true },
            { "label": "Dreaming vividly about colors", "correct": false },
            { "label": "Dreaming about past memories", "correct": false },
            { "label": "Dreaming without control", "correct": false }
          ]
        },
        "top": "280px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which creature is a half-man, half-bull from Greek mythology?",
        "answers": {
          "options": [
            { "label": "Minotaur", "correct": true },
            { "label": "Centaur", "correct": false },
            { "label": "Satyr", "correct": false },
            { "label": "Hydra", "correct": false }
          ]
        },
        "top": "310px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "What creature is said to lure sailors to their doom with its enchanting song?",
        "answers": {
          "options": [
            { "label": "Siren", "correct": true },
            { "label": "Mermaid", "correct": false },
            { "label": "Nymph", "correct": false },
            { "label": "Banshee", "correct": false }
          ]
        },
        "top": "340px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which mythical creature is a horse with a single horn on its forehead?",
        "answers": {
          "options": [
            { "label": "Unicorn", "correct": true },
            { "label": "Pegasus", "correct": false },
            { "label": "Centaur", "correct": false },
            { "label": "Kelpie", "correct": false }
          ]
        },
        "top": "370px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which mythical creature is a giant serpent that circles the world in Norse mythology?",
        "answers": {
          "options": [
            { "label": "Jörmungandr", "correct": true },
            { "label": "Fenrir", "correct": false },
            { "label": "Sleipnir", "correct": false },
            { "label": "Níðhöggr", "correct": false }
          ]
        },
        "top": "400px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "What type of dream involves the sensation of falling?",
        "answers": {
          "options": [
            { "label": "Hypnic jerk dream", "correct": true },
            { "label": "Nightmare", "correct": false },
            { "label": "Prophetic dream", "correct": false },
            { "label": "Recurring dream", "correct": false }
          ]
        },
        "top": "430px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which mythical creature is a horse with wings?",
        "answers": {
          "options": [
            { "label": "Pegasus", "correct": true },
            { "label": "Unicorn", "correct": false },
            { "label": "Centaur", "correct": false },
            { "label": "Kelpie", "correct": false }
          ]
        },
        "top": "460px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "In mythology, what creature is known as a half-lion, half-goat, and half-snake hybrid?",
        "answers": {
          "options": [
            { "label": "Chimera", "correct": true },
            { "label": "Griffin", "correct": false },
            { "label": "Minotaur", "correct": false },
            { "label": "Sphinx", "correct": false }
          ]
        },
        "top": "490px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Hard question: In dream interpretation, what does recurring water imagery often symbolize?",
        "answers": {
          "options": [
            { "label": "Emotions and the subconscious", "correct": true },
            { "label": "Wealth and prosperity", "correct": false },
            { "label": "Danger and warning", "correct": false },
            { "label": "Travel and adventure", "correct": false }
          ]
        },
        "top": "520px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which mythical creature is known for luring people into the forest to their doom in Celtic folklore?",
        "answers": {
          "options": [
            { "label": "Banshee", "correct": false },
            { "label": "Púca", "correct": true },
            { "label": "Kelpie", "correct": false },
            { "label": "Leprechaun", "correct": false }
          ]
        },
        "top": "550px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "What creature from mythology is said to guard treasure and often depicted as a giant snake or lizard?",
        "answers": {
          "options": [
            { "label": "Dragon", "correct": true },
            { "label": "Basilisk", "correct": false },
            { "label": "Hydra", "correct": false },
            { "label": "Wyvern", "correct": false }
          ]
        },
        "top": "580px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which dream phenomenon involves sleep paralysis and hallucinations?",
        "answers": {
          "options": [
            { "label": "Hypnagogic state", "correct": true },
            { "label": "REM sleep", "correct": false },
            { "label": "Night terror", "correct": false },
            { "label": "Somniloquy", "correct": false }
          ]
        },
        "top": "610px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "Which creature is half-human and half-horse, often seen in Greek mythology?",
        "answers": {
          "options": [
            { "label": "Centaur", "correct": true },
            { "label": "Minotaur", "correct": false },
            { "label": "Satyr", "correct": false },
            { "label": "Faun", "correct": false }
          ]
        },
        "top": "640px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "dreams & mythical creatures",
        "question": "What mythical creature is a large bird that is said to cry a mournful wail before death?",
        "answers": {
          "options": [
            { "label": "Banshee", "correct": true },
            { "label": "Harpy", "correct": false },
            { "label": "Siren", "correct": false },
            { "label": "Phoenix", "correct": false }
          ]
        },
        "top": "670px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      }
    ], "game1-17-3": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "In which year did the Battle of Hastings take place?",
        "answers": {
          "options": [
            { "label": "1066", "correct": true },
            { "label": "1215", "correct": false },
            { "label": "1415", "correct": false },
            { "label": "1001", "correct": false }
          ]
        },
        "top": "100px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which battle marked the end of Napoleon’s rule?",
        "answers": {
          "options": [
            { "label": "Battle of Waterloo", "correct": true },
            { "label": "Battle of Austerlitz", "correct": false },
            { "label": "Battle of Leipzig", "correct": false },
            { "label": "Battle of Trafalgar", "correct": false }
          ]
        },
        "top": "130px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which famous battle took place during the American Civil War in 1863?",
        "answers": {
          "options": [
            { "label": "Battle of Gettysburg", "correct": true },
            { "label": "Battle of Antietam", "correct": false },
            { "label": "Battle of Bull Run", "correct": false },
            { "label": "Battle of Fredericksburg", "correct": false }
          ]
        },
        "top": "160px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "The Battle of Thermopylae was fought between the Persians and which Greek city-state?",
        "answers": {
          "options": [
            { "label": "Sparta", "correct": true },
            { "label": "Athens", "correct": false },
            { "label": "Corinth", "correct": false },
            { "label": "Delphi", "correct": false }
          ]
        },
        "top": "190px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which battle was a turning point in World War II on the Eastern Front?",
        "answers": {
          "options": [
            { "label": "Battle of Stalingrad", "correct": true },
            { "label": "Battle of Kursk", "correct": false },
            { "label": "Battle of Leningrad", "correct": false },
            { "label": "Battle of Berlin", "correct": false }
          ]
        },
        "top": "220px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Where did the D-Day landings occur during WWII?",
        "answers": {
          "options": [
            { "label": "Normandy", "correct": true },
            { "label": "Calais", "correct": false },
            { "label": "Dunkirk", "correct": false },
            { "label": "Brittany", "correct": false }
          ]
        },
        "top": "250px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which naval battle established British dominance in 1805?",
        "answers": {
          "options": [
            { "label": "Battle of Trafalgar", "correct": true },
            { "label": "Battle of Jutland", "correct": false },
            { "label": "Battle of Midway", "correct": false },
            { "label": "Battle of the Nile", "correct": false }
          ]
        },
        "top": "280px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "The Battle of Agincourt was fought during which war?",
        "answers": {
          "options": [
            { "label": "Hundred Years' War", "correct": true },
            { "label": "Thirty Years' War", "correct": false },
            { "label": "Napoleonic Wars", "correct": false },
            { "label": "War of the Roses", "correct": false }
          ]
        },
        "top": "310px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "What famous battle did Alexander the Great win against Darius III of Persia?",
        "answers": {
          "options": [
            { "label": "Battle of Gaugamela", "correct": true },
            { "label": "Battle of Marathon", "correct": false },
            { "label": "Battle of Issus", "correct": false },
            { "label": "Battle of Chaeronea", "correct": false }
          ]
        },
        "top": "340px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which battle in 1815 saw the final defeat of Napoleon Bonaparte?",
        "answers": {
          "options": [
            { "label": "Battle of Waterloo", "correct": true },
            { "label": "Battle of the Nile", "correct": false },
            { "label": "Battle of Leipzig", "correct": false },
            { "label": "Battle of Austerlitz", "correct": false }
          ]
        },
        "top": "370px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "At which battle did Julius Caesar defeat Pompey in 48 BCE?",
        "answers": {
          "options": [
            { "label": "Battle of Pharsalus", "correct": true },
            { "label": "Battle of Actium", "correct": false },
            { "label": "Battle of Carrhae", "correct": false },
            { "label": "Battle of Zela", "correct": false }
          ]
        },
        "top": "400px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which battle is considered the turning point in the Pacific during WWII?",
        "answers": {
          "options": [
            { "label": "Battle of Midway", "correct": true },
            { "label": "Battle of Iwo Jima", "correct": false },
            { "label": "Battle of Okinawa", "correct": false },
            { "label": "Battle of the Coral Sea", "correct": false }
          ]
        },
        "top": "430px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Hard question: Which battle was fought in 451 CE between Roman and Hunnic forces?",
        "answers": {
          "options": [
            { "label": "Battle of the Catalaunian Plains", "correct": true },
            { "label": "Battle of Adrianople", "correct": false },
            { "label": "Battle of Chalons", "correct": false },
            { "label": "Battle of Tours", "correct": false }
          ]
        },
        "top": "460px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Who won the Battle of Zama, ending the Second Punic War?",
        "answers": {
          "options": [
            { "label": "Rome", "correct": true },
            { "label": "Carthage", "correct": false },
            { "label": "Gaul", "correct": false },
            { "label": "Macedon", "correct": false }
          ]
        },
        "top": "490px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "The Battle of Marathon was fought between Greece and which empire?",
        "answers": {
          "options": [
            { "label": "Persian Empire", "correct": true },
            { "label": "Roman Empire", "correct": false },
            { "label": "Ottoman Empire", "correct": false },
            { "label": "Macedonian Empire", "correct": false }
          ]
        },
        "top": "520px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "What was the decisive battle of the English Civil War?",
        "answers": {
          "options": [
            { "label": "Battle of Naseby", "correct": true },
            { "label": "Battle of Edgehill", "correct": false },
            { "label": "Battle of Marston Moor", "correct": false },
            { "label": "Battle of Bosworth", "correct": false }
          ]
        },
        "top": "550px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which battle marked the defeat of the Spanish Armada?",
        "answers": {
          "options": [
            { "label": "Battle of Gravelines", "correct": true },
            { "label": "Battle of Lepanto", "correct": false },
            { "label": "Battle of the Channel", "correct": false },
            { "label": "Battle of Trafalgar", "correct": false }
          ]
        },
        "top": "580px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which World War I battle is known for its extreme casualties and stalemate?",
        "answers": {
          "options": [
            { "label": "Battle of the Somme", "correct": true },
            { "label": "Battle of Verdun", "correct": false },
            { "label": "Battle of Tannenberg", "correct": false },
            { "label": "Battle of Gallipoli", "correct": false }
          ]
        },
        "top": "610px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "Which battle is known as the bloodiest single-day battle in American history?",
        "answers": {
          "options": [
            { "label": "Battle of Antietam", "correct": true },
            { "label": "Battle of Gettysburg", "correct": false },
            { "label": "Battle of Shiloh", "correct": false },
            { "label": "Battle of Chancellorsville", "correct": false }
          ]
        },
        "top": "640px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "famous battles",
        "question": "What battle marked the beginning of the end for Nazi Germany in WWII?",
        "answers": {
          "options": [
            { "label": "Battle of the Bulge", "correct": true },
            { "label": "Battle of Berlin", "correct": false },
            { "label": "Battle of El Alamein", "correct": false },
            { "label": "Battle of Kursk", "correct": false }
          ]
        },
        "top": "670px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      }
    ], "game1-18-1": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "In Greek mythology, who is credited with creating humans from clay?",
        "answers": {
          "options": [
            { "label": "Prometheus", "correct": true },
            { "label": "Hephaestus", "correct": false },
            { "label": "Hermes", "correct": false },
            { "label": "Apollo", "correct": false }
          ]
        },
        "top": "100px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which civilization believed the world was created from the body of the slain giant Ymir?",
        "answers": {
          "options": [
            { "label": "Norse", "correct": true },
            { "label": "Greek", "correct": false },
            { "label": "Egyptian", "correct": false },
            { "label": "Mayan", "correct": false }
          ]
        },
        "top": "130px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which god was the blacksmith and craftsman of the Greek pantheon?",
        "answers": {
          "options": [
            { "label": "Hephaestus", "correct": true },
            { "label": "Ares", "correct": false },
            { "label": "Zeus", "correct": false },
            { "label": "Poseidon", "correct": false }
          ]
        },
        "top": "160px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "In Hindu mythology, who is the creator god among the Trimurti?",
        "answers": {
          "options": [
            { "label": "Brahma", "correct": true },
            { "label": "Vishnu", "correct": false },
            { "label": "Shiva", "correct": false },
            { "label": "Indra", "correct": false }
          ]
        },
        "top": "190px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "According to the Bible, on which day did God create man?",
        "answers": {
          "options": [
            { "label": "Sixth day", "correct": true },
            { "label": "First day", "correct": false },
            { "label": "Fourth day", "correct": false },
            { "label": "Seventh day", "correct": false }
          ]
        },
        "top": "220px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "What material did the Mayan gods use to finally create humans, according to the Popol Vuh?",
        "answers": {
          "options": [
            { "label": "Corn", "correct": true },
            { "label": "Mud", "correct": false },
            { "label": "Wood", "correct": false },
            { "label": "Clay", "correct": false }
          ]
        },
        "top": "250px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which legendary figure is known for crafting wings of wax and feathers to escape Crete?",
        "answers": {
          "options": [
            { "label": "Daedalus", "correct": true },
            { "label": "Perseus", "correct": false },
            { "label": "Theseus", "correct": false },
            { "label": "Orpheus", "correct": false }
          ]
        },
        "top": "280px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which culture's creation myth features the god Ptah speaking the world into existence?",
        "answers": {
          "options": [
            { "label": "Egyptian", "correct": true },
            { "label": "Babylonian", "correct": false },
            { "label": "Greek", "correct": false },
            { "label": "Incan", "correct": false }
          ]
        },
        "top": "310px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "What is the name of the Babylonian creation epic?",
        "answers": {
          "options": [
            { "label": "Enuma Elish", "correct": true },
            { "label": "Epic of Gilgamesh", "correct": false },
            { "label": "Theogony", "correct": false },
            { "label": "Avesta", "correct": false }
          ]
        },
        "top": "340px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "In Japanese mythology, who are the deities that created the islands of Japan?",
        "answers": {
          "options": [
            { "label": "Izanagi and Izanami", "correct": true },
            { "label": "Amaterasu and Tsukuyomi", "correct": false },
            { "label": "Susanoo and Orochi", "correct": false },
            { "label": "Raijin and Fujin", "correct": false }
          ]
        },
        "top": "370px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Who forged the hammer Mjölnir in Norse mythology?",
        "answers": {
          "options": [
            { "label": "The dwarves Brokkr and Sindri", "correct": true },
            { "label": "Odin", "correct": false },
            { "label": "Loki", "correct": false },
            { "label": "Thor", "correct": false }
          ]
        },
        "top": "400px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "In Maori mythology, what god separates earth and sky to bring light into the world?",
        "answers": {
          "options": [
            { "label": "Tāne", "correct": true },
            { "label": "Rangi", "correct": false },
            { "label": "Papa", "correct": false },
            { "label": "Maui", "correct": false }
          ]
        },
        "top": "430px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which ancient people believed the god Viracocha created the world?",
        "answers": {
          "options": [
            { "label": "Inca", "correct": true },
            { "label": "Aztec", "correct": false },
            { "label": "Maya", "correct": false },
            { "label": "Olmec", "correct": false }
          ]
        },
        "top": "460px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Who is considered the Roman god of craftsmanship and fire?",
        "answers": {
          "options": [
            { "label": "Vulcan", "correct": true },
            { "label": "Mars", "correct": false },
            { "label": "Jupiter", "correct": false },
            { "label": "Apollo", "correct": false }
          ]
        },
        "top": "490px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Hard question: In Zoroastrianism, who is the creator god that brings order to the cosmos?",
        "answers": {
          "options": [
            { "label": "Ahura Mazda", "correct": true },
            { "label": "Angra Mainyu", "correct": false },
            { "label": "Anu", "correct": false },
            { "label": "Marduk", "correct": false }
          ]
        },
        "top": "520px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which goddess in Greek mythology was born from the sea foam?",
        "answers": {
          "options": [
            { "label": "Aphrodite", "correct": true },
            { "label": "Artemis", "correct": false },
            { "label": "Hera", "correct": false },
            { "label": "Demeter", "correct": false }
          ]
        },
        "top": "550px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which ancient text tells of the god Vishvakarma, the divine architect?",
        "answers": {
          "options": [
            { "label": "Rigveda", "correct": true },
            { "label": "Bhagavad Gita", "correct": false },
            { "label": "Ramayana", "correct": false },
            { "label": "Mahabharata", "correct": false }
          ]
        },
        "top": "580px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "What do the Yoruba people believe the god Obatala shaped humans from?",
        "answers": {
          "options": [
            { "label": "Clay", "correct": true },
            { "label": "Stone", "correct": false },
            { "label": "Sand", "correct": false },
            { "label": "Water", "correct": false }
          ]
        },
        "top": "610px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which craftsman in Greek myth was punished with a rolling boulder for eternity?",
        "answers": {
          "options": [
            { "label": "Sisyphus", "correct": true },
            { "label": "Icarus", "correct": false },
            { "label": "Orpheus", "correct": false },
            { "label": "Perseus", "correct": false }
          ]
        },
        "top": "640px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "creation myths & craftsmanship",
        "question": "Which Celtic god is known for his craftsmanship and invention?",
        "answers": {
          "options": [
            { "label": "Lugh", "correct": true },
            { "label": "Dagda", "correct": false },
            { "label": "Bran", "correct": false },
            { "label": "Cernunnos", "correct": false }
          ]
        },
        "top": "670px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      }
    ], "game1-18-2": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which plant is known for its rapid growth and is often used in sustainable construction?",
        "answers": {
          "options": [
            { "label": "Bamboo", "correct": true },
            { "label": "Oak", "correct": false },
            { "label": "Pine", "correct": false },
            { "label": "Birch", "correct": false }
          ]
        },
        "top": "90px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which part of the plant is primarily responsible for photosynthesis?",
        "answers": {
          "options": [
            { "label": "Leaf", "correct": true },
            { "label": "Root", "correct": false },
            { "label": "Stem", "correct": false },
            { "label": "Flower", "correct": false }
          ]
        },
        "top": "120px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "What is the term for a design inspired by natural forms and structures?",
        "answers": {
          "options": [
            { "label": "Biomimicry", "correct": true },
            { "label": "Symmetry", "correct": false },
            { "label": "Minimalism", "correct": false },
            { "label": "Industrialism", "correct": false }
          ]
        },
        "top": "150px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which organism grows in rings that tell its age?",
        "answers": {
          "options": [
            { "label": "Tree", "correct": true },
            { "label": "Mushroom", "correct": false },
            { "label": "Shrub", "correct": false },
            { "label": "Fern", "correct": false }
          ]
        },
        "top": "180px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which spiral pattern is commonly found in flowers, shells, and hurricanes?",
        "answers": {
          "options": [
            { "label": "Fibonacci sequence", "correct": true },
            { "label": "Golden ratio", "correct": false },
            { "label": "Vortex pattern", "correct": false },
            { "label": "Logarithmic curve", "correct": false }
          ]
        },
        "top": "210px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which process enables plants to grow towards light?",
        "answers": {
          "options": [
            { "label": "Phototropism", "correct": true },
            { "label": "Osmosis", "correct": false },
            { "label": "Germination", "correct": false },
            { "label": "Transpiration", "correct": false }
          ]
        },
        "top": "240px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which part of a seed grows into the root system?",
        "answers": {
          "options": [
            { "label": "Radicle", "correct": true },
            { "label": "Cotyledon", "correct": false },
            { "label": "Hypocotyl", "correct": false },
            { "label": "Epicotyl", "correct": false }
          ]
        },
        "top": "270px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which gas do plants absorb from the atmosphere to grow?",
        "answers": {
          "options": [
            { "label": "Carbon dioxide", "correct": true },
            { "label": "Oxygen", "correct": false },
            { "label": "Nitrogen", "correct": false },
            { "label": "Hydrogen", "correct": false }
          ]
        },
        "top": "300px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "What term describes the interdependent design of all living systems?",
        "answers": {
          "options": [
            { "label": "Ecology", "correct": true },
            { "label": "Topology", "correct": false },
            { "label": "Architecture", "correct": false },
            { "label": "Physics", "correct": false }
          ]
        },
        "top": "330px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which tree can live for thousands of years and is revered for its longevity?",
        "answers": {
          "options": [
            { "label": "Bristlecone pine", "correct": true },
            { "label": "Sequoia", "correct": false },
            { "label": "Baobab", "correct": false },
            { "label": "Oak", "correct": false }
          ]
        },
        "top": "360px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Hard question: Which desert plant uses Crassulacean acid metabolism (CAM) to grow efficiently in dry conditions?",
        "answers": {
          "options": [
            { "label": "Cactus", "correct": true },
            { "label": "Aloe vera", "correct": false },
            { "label": "Lavender", "correct": false },
            { "label": "Bamboo", "correct": false }
          ]
        },
        "top": "390px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "What kind of structure is formed by roots working together underground?",
        "answers": {
          "options": [
            { "label": "Rhizome network", "correct": true },
            { "label": "Lattice system", "correct": false },
            { "label": "Fiber web", "correct": false },
            { "label": "Tuber braid", "correct": false }
          ]
        },
        "top": "420px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "What part of the plant anchors it and absorbs water and nutrients?",
        "answers": {
          "options": [
            { "label": "Roots", "correct": true },
            { "label": "Stem", "correct": false },
            { "label": "Leaves", "correct": false },
            { "label": "Petals", "correct": false }
          ]
        },
        "top": "450px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "What is the name for the central fluid-conducting tissue in a plant?",
        "answers": {
          "options": [
            { "label": "Xylem", "correct": true },
            { "label": "Pith", "correct": false },
            { "label": "Stomata", "correct": false },
            { "label": "Phloem", "correct": false }
          ]
        },
        "top": "480px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which structure in fungi spreads underground and supports growth?",
        "answers": {
          "options": [
            { "label": "Mycelium", "correct": true },
            { "label": "Sporangium", "correct": false },
            { "label": "Cap", "correct": false },
            { "label": "Gill", "correct": false }
          ]
        },
        "top": "510px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which of these is a renewable natural material used in organic architecture?",
        "answers": {
          "options": [
            { "label": "Cork", "correct": true },
            { "label": "Steel", "correct": false },
            { "label": "Plastic", "correct": false },
            { "label": "Concrete", "correct": false }
          ]
        },
        "top": "540px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which tree species is known for its aerial roots and banyan structures?",
        "answers": {
          "options": [
            { "label": "Fig tree", "correct": true },
            { "label": "Palm tree", "correct": false },
            { "label": "Spruce", "correct": false },
            { "label": "Cedar", "correct": false }
          ]
        },
        "top": "570px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "Which marine organism forms coral reefs through slow growth?",
        "answers": {
          "options": [
            { "label": "Coral polyps", "correct": true },
            { "label": "Sea anemones", "correct": false },
            { "label": "Algae", "correct": false },
            { "label": "Mussels", "correct": false }
          ]
        },
        "top": "600px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "What term describes the early development phase of a plant from a seed?",
        "answers": {
          "options": [
            { "label": "Germination", "correct": true },
            { "label": "Propagation", "correct": false },
            { "label": "Pollination", "correct": false },
            { "label": "Metamorphosis", "correct": false }
          ]
        },
        "top": "630px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "nature, growth, and organic design",
        "question": "What natural pattern is often used in organic architecture for strength and beauty?",
        "answers": {
          "options": [
            { "label": "Honeycomb", "correct": true },
            { "label": "Grid", "correct": false },
            { "label": "Chevron", "correct": false },
            { "label": "Zigzag", "correct": false }
          ]
        },
        "top": "660px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      }
    ], "game1-18-3": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which famous artist is known for cutting off part of his own ear?",
        "answers": {
          "options": [
            { "label": "Vincent van Gogh", "correct": true },
            { "label": "Pablo Picasso", "correct": false },
            { "label": "Claude Monet", "correct": false },
            { "label": "Salvador Dalí", "correct": false }
          ]
        },
        "top": "50px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which element is fundamental to drawing and visual composition?",
        "answers": {
          "options": [
            { "label": "Line", "correct": true },
            { "label": "Color", "correct": false },
            { "label": "Shape", "correct": false },
            { "label": "Texture", "correct": false }
          ]
        },
        "top": "90px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "The 'Mona Lisa' is painted using which technique?",
        "answers": {
          "options": [
            { "label": "Oil on wood", "correct": true },
            { "label": "Tempera on canvas", "correct": false },
            { "label": "Watercolor on paper", "correct": false },
            { "label": "Fresco on wall", "correct": false }
          ]
        },
        "top": "130px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which movement is Salvador Dalí associated with?",
        "answers": {
          "options": [
            { "label": "Surrealism", "correct": true },
            { "label": "Cubism", "correct": false },
            { "label": "Impressionism", "correct": false },
            { "label": "Futurism", "correct": false }
          ]
        },
        "top": "170px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which culture created elaborate sand mandalas as a spiritual practice?",
        "answers": {
          "options": [
            { "label": "Tibetan Buddhist", "correct": true },
            { "label": "Mayan", "correct": false },
            { "label": "Greek", "correct": false },
            { "label": "Persian", "correct": false }
          ]
        },
        "top": "210px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which material is traditionally used in sculpture?",
        "answers": {
          "options": [
            { "label": "Marble", "correct": true },
            { "label": "Wool", "correct": false },
            { "label": "Paper", "correct": false },
            { "label": "Silk", "correct": false }
          ]
        },
        "top": "250px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which instrument is most associated with classical Indian music?",
        "answers": {
          "options": [
            { "label": "Sitar", "correct": true },
            { "label": "Violin", "correct": false },
            { "label": "Piano", "correct": false },
            { "label": "Flute", "correct": false }
          ]
        },
        "top": "290px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Who painted 'The Starry Night'?",
        "answers": {
          "options": [
            { "label": "Vincent van Gogh", "correct": true },
            { "label": "Claude Monet", "correct": false },
            { "label": "Edvard Munch", "correct": false },
            { "label": "Paul Cézanne", "correct": false }
          ]
        },
        "top": "330px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which color is traditionally associated with mourning in Western art?",
        "answers": {
          "options": [
            { "label": "Black", "correct": true },
            { "label": "White", "correct": false },
            { "label": "Red", "correct": false },
            { "label": "Blue", "correct": false }
          ]
        },
        "top": "370px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which building is considered an iconic work of modern architecture?",
        "answers": {
          "options": [
            { "label": "Fallingwater", "correct": true },
            { "label": "Notre-Dame Cathedral", "correct": false },
            { "label": "Colosseum", "correct": false },
            { "label": "Parthenon", "correct": false }
          ]
        },
        "top": "410px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which dance originated from the Bronx and became globally influential?",
        "answers": {
          "options": [
            { "label": "Breakdancing", "correct": true },
            { "label": "Samba", "correct": false },
            { "label": "Waltz", "correct": false },
            { "label": "Ballet", "correct": false }
          ]
        },
        "top": "450px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which medium did Frida Kahlo most often use?",
        "answers": {
          "options": [
            { "label": "Oil painting", "correct": true },
            { "label": "Photography", "correct": false },
            { "label": "Sculpture", "correct": false },
            { "label": "Watercolor", "correct": false }
          ]
        },
        "top": "490px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which culture developed calligraphy as a high form of art?",
        "answers": {
          "options": [
            { "label": "Chinese", "correct": true },
            { "label": "Viking", "correct": false },
            { "label": "Greek", "correct": false },
            { "label": "Aztec", "correct": false }
          ]
        },
        "top": "530px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "What does the term 'mixed media' refer to in visual art?",
        "answers": {
          "options": [
            { "label": "Combining different materials", "correct": true },
            { "label": "Black and white photography", "correct": false },
            { "label": "Only using paint and ink", "correct": false },
            { "label": "Digital art only", "correct": false }
          ]
        },
        "top": "570px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which philosopher wrote about the concept of 'mimesis' in art?",
        "answers": {
          "options": [
            { "label": "Plato", "correct": true },
            { "label": "Aristotle", "correct": false },
            { "label": "Socrates", "correct": false },
            { "label": "Kant", "correct": false }
          ]
        },
        "top": "610px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which 20th-century art movement emphasized spontaneity and emotion?",
        "answers": {
          "options": [
            { "label": "Abstract Expressionism", "correct": true },
            { "label": "Realism", "correct": false },
            { "label": "Impressionism", "correct": false },
            { "label": "Baroque", "correct": false }
          ]
        },
        "top": "650px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Hard question: Which artist created 'Black Square', a pivotal work in Suprematism?",
        "answers": {
          "options": [
            { "label": "Kazimir Malevich", "correct": true },
            { "label": "Wassily Kandinsky", "correct": false },
            { "label": "Piet Mondrian", "correct": false },
            { "label": "Mark Rothko", "correct": false }
          ]
        },
        "top": "690px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which technique uses wax to preserve pigment in textiles?",
        "answers": {
          "options": [
            { "label": "Batik", "correct": true },
            { "label": "Etching", "correct": false },
            { "label": "Engraving", "correct": false },
            { "label": "Embossing", "correct": false }
          ]
        },
        "top": "730px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which type of art often involves public space and community interaction?",
        "answers": {
          "options": [
            { "label": "Installation art", "correct": true },
            { "label": "Still life", "correct": false },
            { "label": "Portraiture", "correct": false },
            { "label": "Miniature painting", "correct": false }
          ]
        },
        "top": "770px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "art, human expression",
        "question": "Which classical form of Japanese theatre uses masks and stylized movements?",
        "answers": {
          "options": [
            { "label": "Noh", "correct": true },
            { "label": "Kabuki", "correct": false },
            { "label": "Butoh", "correct": false },
            { "label": "Gagaku", "correct": false }
          ]
        },
        "top": "810px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      }
    ], "game1-19-1": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What is the term for the ability to understand and share the feelings of others?",
        "answers": {
          "options": [
            { "label": "Empathy", "correct": true },
            { "label": "Sympathy", "correct": false },
            { "label": "Compassion", "correct": false },
            { "label": "Pity", "correct": false }
          ]
        },
        "top": "50px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which hormone is most commonly associated with stress?",
        "answers": {
          "options": [
            { "label": "Cortisol", "correct": true },
            { "label": "Dopamine", "correct": false },
            { "label": "Oxytocin", "correct": false },
            { "label": "Serotonin", "correct": false }
          ]
        },
        "top": "90px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What type of therapy focuses on changing negative thought patterns?",
        "answers": {
          "options": [
            { "label": "Cognitive Behavioral Therapy", "correct": true },
            { "label": "Psychoanalysis", "correct": false },
            { "label": "Gestalt Therapy", "correct": false },
            { "label": "Art Therapy", "correct": false }
          ]
        },
        "top": "130px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which term describes the ability to bounce back from adversity?",
        "answers": {
          "options": [
            { "label": "Resilience", "correct": true },
            { "label": "Tolerance", "correct": false },
            { "label": "Acceptance", "correct": false },
            { "label": "Patience", "correct": false }
          ]
        },
        "top": "170px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which part of the brain is responsible for regulating emotions?",
        "answers": {
          "options": [
            { "label": "Amygdala", "correct": true },
            { "label": "Hippocampus", "correct": false },
            { "label": "Cerebellum", "correct": false },
            { "label": "Occipital lobe", "correct": false }
          ]
        },
        "top": "210px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which psychological need is at the base of Maslow’s hierarchy?",
        "answers": {
          "options": [
            { "label": "Physiological", "correct": true },
            { "label": "Safety", "correct": false },
            { "label": "Love/Belonging", "correct": false },
            { "label": "Esteem", "correct": false }
          ]
        },
        "top": "250px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What is mindfulness primarily focused on?",
        "answers": {
          "options": [
            { "label": "Being present in the moment", "correct": true },
            { "label": "Analyzing dreams", "correct": false },
            { "label": "Avoiding emotions", "correct": false },
            { "label": "Planning the future", "correct": false }
          ]
        },
        "top": "290px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which of these is a healthy coping mechanism?",
        "answers": {
          "options": [
            { "label": "Talking to a friend", "correct": true },
            { "label": "Binge eating", "correct": false },
            { "label": "Suppressing emotions", "correct": false },
            { "label": "Avoiding responsibilities", "correct": false }
          ]
        },
        "top": "330px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What is emotional intelligence?",
        "answers": {
          "options": [
            { "label": "The ability to understand and manage emotions", "correct": true },
            { "label": "Knowing many languages", "correct": false },
            { "label": "IQ score", "correct": false },
            { "label": "Academic performance", "correct": false }
          ]
        },
        "top": "370px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What is the first step in managing anxiety?",
        "answers": {
          "options": [
            { "label": "Recognizing the symptoms", "correct": true },
            { "label": "Ignoring it", "correct": false },
            { "label": "Taking sleeping pills", "correct": false },
            { "label": "Suppressing emotions", "correct": false }
          ]
        },
        "top": "410px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What is the psychological term for repressed memories suddenly surfacing?",
        "answers": {
          "options": [
            { "label": "Recovered memory", "correct": true },
            { "label": "Flashback", "correct": false },
            { "label": "Amnesia", "correct": false },
            { "label": "Déjà vu", "correct": false }
          ]
        },
        "top": "450px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which neurotransmitter is often called the 'feel-good' chemical?",
        "answers": {
          "options": [
            { "label": "Dopamine", "correct": true },
            { "label": "Adrenaline", "correct": false },
            { "label": "Cortisol", "correct": false },
            { "label": "GABA", "correct": false }
          ]
        },
        "top": "490px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What is the psychological defense mechanism where unwanted thoughts are pushed out of awareness?",
        "answers": {
          "options": [
            { "label": "Repression", "correct": true },
            { "label": "Projection", "correct": false },
            { "label": "Denial", "correct": false },
            { "label": "Sublimation", "correct": false }
          ]
        },
        "top": "530px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which of these is NOT a primary emotion?",
        "answers": {
          "options": [
            { "label": "Jealousy", "correct": true },
            { "label": "Fear", "correct": false },
            { "label": "Joy", "correct": false },
            { "label": "Sadness", "correct": false }
          ]
        },
        "top": "570px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which famous psychologist developed the concept of the 'id', 'ego', and 'superego'?",
        "answers": {
          "options": [
            { "label": "Sigmund Freud", "correct": true },
            { "label": "Carl Jung", "correct": false },
            { "label": "B.F. Skinner", "correct": false },
            { "label": "Erik Erikson", "correct": false }
          ]
        },
        "top": "610px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "What technique is commonly used in meditation to focus attention?",
        "answers": {
          "options": [
            { "label": "Breathing", "correct": true },
            { "label": "Chewing", "correct": false },
            { "label": "Singing", "correct": false },
            { "label": "Drawing", "correct": false }
          ]
        },
        "top": "650px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which practice involves journaling to process emotions?",
        "answers": {
          "options": [
            { "label": "Expressive writing", "correct": true },
            { "label": "Scriptwriting", "correct": false },
            { "label": "Essay writing", "correct": false },
            { "label": "Copywriting", "correct": false }
          ]
        },
        "top": "690px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which of these can help improve emotional regulation?",
        "answers": {
          "options": [
            { "label": "Sleep hygiene", "correct": true },
            { "label": "Multitasking", "correct": false },
            { "label": "Caffeine dependence", "correct": false },
            { "label": "Avoidance", "correct": false }
          ]
        },
        "top": "730px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Which condition is often managed with exposure therapy?",
        "answers": {
          "options": [
            { "label": "Phobias", "correct": true },
            { "label": "Schizophrenia", "correct": false },
            { "label": "Insomnia", "correct": false },
            { "label": "ADHD", "correct": false }
          ]
        },
        "top": "770px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "psychology, emotional balance",
        "question": "Hard question: What is alexithymia?",
        "answers": {
          "options": [
            { "label": "Inability to identify or describe emotions", "correct": true },
            { "label": "Fear of crowds", "correct": false },
            { "label": "Extreme mood swings", "correct": false },
            { "label": "Memory loss of trauma", "correct": false }
          ]
        },
        "top": "810px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      }
    ], "game1-19-2": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What part of the plant conducts photosynthesis?",
        "answers": {
          "options": [
            { "label": "Leaf", "correct": true },
            { "label": "Root", "correct": false },
            { "label": "Stem", "correct": false },
            { "label": "Seed", "correct": false }
          ]
        },
        "top": "20px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which pigment is primarily responsible for the green color of plants?",
        "answers": {
          "options": [
            { "label": "Chlorophyll", "correct": true },
            { "label": "Carotene", "correct": false },
            { "label": "Xanthophyll", "correct": false },
            { "label": "Anthocyanin", "correct": false }
          ]
        },
        "top": "60px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which gas is taken in by plants during photosynthesis?",
        "answers": {
          "options": [
            { "label": "Carbon dioxide", "correct": true },
            { "label": "Oxygen", "correct": false },
            { "label": "Nitrogen", "correct": false },
            { "label": "Hydrogen", "correct": false }
          ]
        },
        "top": "100px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which plant tissue is responsible for transporting water?",
        "answers": {
          "options": [
            { "label": "Xylem", "correct": true },
            { "label": "Phloem", "correct": false },
            { "label": "Cambium", "correct": false },
            { "label": "Parenchyma", "correct": false }
          ]
        },
        "top": "140px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which part of the plant anchors it to the soil?",
        "answers": {
          "options": [
            { "label": "Roots", "correct": true },
            { "label": "Stems", "correct": false },
            { "label": "Leaves", "correct": false },
            { "label": "Flowers", "correct": false }
          ]
        },
        "top": "180px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What is the process by which plants lose water through their leaves?",
        "answers": {
          "options": [
            { "label": "Transpiration", "correct": true },
            { "label": "Respiration", "correct": false },
            { "label": "Osmosis", "correct": false },
            { "label": "Evaporation", "correct": false }
          ]
        },
        "top": "220px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which plant hormone is responsible for cell elongation?",
        "answers": {
          "options": [
            { "label": "Auxin", "correct": true },
            { "label": "Cytokinin", "correct": false },
            { "label": "Gibberellin", "correct": false },
            { "label": "Ethylene", "correct": false }
          ]
        },
        "top": "260px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What type of plant completes its life cycle in one season?",
        "answers": {
          "options": [
            { "label": "Annual", "correct": true },
            { "label": "Biennial", "correct": false },
            { "label": "Perennial", "correct": false },
            { "label": "Deciduous", "correct": false }
          ]
        },
        "top": "300px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What is the name for the part of the flower that produces pollen?",
        "answers": {
          "options": [
            { "label": "Anther", "correct": true },
            { "label": "Stigma", "correct": false },
            { "label": "Ovary", "correct": false },
            { "label": "Petal", "correct": false }
          ]
        },
        "top": "340px",
        "left": "55px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which of these is a non-vascular plant?",
        "answers": {
          "options": [
            { "label": "Moss", "correct": true },
            { "label": "Fern", "correct": false },
            { "label": "Pine", "correct": false },
            { "label": "Rose", "correct": false }
          ]
        },
        "top": "380px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What is the function of phloem tissue?",
        "answers": {
          "options": [
            { "label": "Transporting sugars", "correct": true },
            { "label": "Anchoring the plant", "correct": false },
            { "label": "Water conduction", "correct": false },
            { "label": "Reproduction", "correct": false }
          ]
        },
        "top": "420px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 35
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which plant family includes tomatoes, potatoes, and peppers?",
        "answers": {
          "options": [
            { "label": "Solanaceae", "correct": true },
            { "label": "Fabaceae", "correct": false },
            { "label": "Rosaceae", "correct": false },
            { "label": "Poaceae", "correct": false }
          ]
        },
        "top": "460px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which of these is an adaptation for desert plants?",
        "answers": {
          "options": [
            { "label": "Thick cuticle", "correct": true },
            { "label": "Large leaves", "correct": false },
            { "label": "Thin stems", "correct": false },
            { "label": "High stomata count", "correct": false }
          ]
        },
        "top": "500px",
        "left": "20px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What is a drupe?",
        "answers": {
          "options": [
            { "label": "Fruit with a single stone seed", "correct": true },
            { "label": "Fruit with multiple seeds", "correct": false },
            { "label": "Root vegetable", "correct": false },
            { "label": "Tubular leaf", "correct": false }
          ]
        },
        "top": "540px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which plant structure detects light direction for growth?",
        "answers": {
          "options": [
            { "label": "Photoreceptor", "correct": true },
            { "label": "Chloroplast", "correct": false },
            { "label": "Trichome", "correct": false },
            { "label": "Guard cell", "correct": false }
          ]
        },
        "top": "580px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which of these is an epiphyte?",
        "answers": {
          "options": [
            { "label": "Orchid", "correct": true },
            { "label": "Lily", "correct": false },
            { "label": "Bamboo", "correct": false },
            { "label": "Mint", "correct": false }
          ]
        },
        "top": "620px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What is the term for seed germination without dormancy?",
        "answers": {
          "options": [
            { "label": "Vivipary", "correct": true },
            { "label": "Parthenocarpy", "correct": false },
            { "label": "Pollination", "correct": false },
            { "label": "Fertilization", "correct": false }
          ]
        },
        "top": "660px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "What is the main carbohydrate stored in plant cells?",
        "answers": {
          "options": [
            { "label": "Starch", "correct": true },
            { "label": "Sucrose", "correct": false },
            { "label": "Glucose", "correct": false },
            { "label": "Cellulose", "correct": false }
          ]
        },
        "top": "700px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which of these plants is a nitrogen-fixer?",
        "answers": {
          "options": [
            { "label": "Pea", "correct": true },
            { "label": "Corn", "correct": false },
            { "label": "Sunflower", "correct": false },
            { "label": "Tomato", "correct": false }
          ]
        },
        "top": "740px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "botanics",
        "question": "Which structure protects the developing flower?",
        "answers": {
          "options": [
            { "label": "Sepal", "correct": true },
            { "label": "Petal", "correct": false },
            { "label": "Stamen", "correct": false },
            { "label": "Pistil", "correct": false }
          ]
        },
        "top": "780px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 25
      }
    ], "game1-19-3": [
      {
        "id": 1,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which herb is known for its hallucinogenic properties and is traditionally used by Mazatec shamans?",
        "answers": {
          "options": [
            { "label": "Salvia divinorum", "correct": true },
            { "label": "Chamomile", "correct": false },
            { "label": "Basil", "correct": false },
            { "label": "Ginseng", "correct": false }
          ]
        },
        "top": "20px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 2,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which plant contains the alkaloid mescaline?",
        "answers": {
          "options": [
            { "label": "Peyote cactus", "correct": true },
            { "label": "Valerian root", "correct": false },
            { "label": "Mint", "correct": false },
            { "label": "Lemongrass", "correct": false }
          ]
        },
        "top": "60px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 3,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "What psychoactive compound is found in cannabis?",
        "answers": {
          "options": [
            { "label": "THC", "correct": true },
            { "label": "CBD", "correct": false },
            { "label": "LSD", "correct": false },
            { "label": "Psilocybin", "correct": false }
          ]
        },
        "top": "100px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 4,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Ayahuasca is a traditional brew made from Banisteriopsis caapi and another plant containing what active substance?",
        "answers": {
          "options": [
            { "label": "DMT", "correct": true },
            { "label": "THC", "correct": false },
            { "label": "Atropine", "correct": false },
            { "label": "Morphine", "correct": false }
          ]
        },
        "top": "140px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 5,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which psychoactive herb is known for inducing lucid dreams?",
        "answers": {
          "options": [
            { "label": "Calea zacatechichi", "correct": true },
            { "label": "Lavender", "correct": false },
            { "label": "Sage", "correct": false },
            { "label": "Echinacea", "correct": false }
          ]
        },
        "top": "180px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 6,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which herb, used in African rituals, contains ibogaine?",
        "answers": {
          "options": [
            { "label": "Tabernanthe iboga", "correct": true },
            { "label": "Ginkgo biloba", "correct": false },
            { "label": "Chamomile", "correct": false },
            { "label": "Wormwood", "correct": false }
          ]
        },
        "top": "220px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 7,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which psychoactive herb was widely used in Ancient Greece in the Eleusinian Mysteries?",
        "answers": {
          "options": [
            { "label": "Ergot (Claviceps purpurea)", "correct": true },
            { "label": "Rosemary", "correct": false },
            { "label": "Mandrake", "correct": false },
            { "label": "Mint", "correct": false }
          ]
        },
        "top": "260px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 8,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "What herb contains scopolamine and has been used as a sedative and hallucinogen?",
        "answers": {
          "options": [
            { "label": "Datura", "correct": true },
            { "label": "Basil", "correct": false },
            { "label": "Yarrow", "correct": false },
            { "label": "Oregano", "correct": false }
          ]
        },
        "top": "300px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 9,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which alkaloid is found in tobacco and acts as a stimulant?",
        "answers": {
          "options": [
            { "label": "Nicotine", "correct": true },
            { "label": "Caffeine", "correct": false },
            { "label": "Atropine", "correct": false },
            { "label": "Ephedrine", "correct": false }
          ]
        },
        "top": "340px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 20
      },
      {
        "id": 10,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which compound is primarily responsible for the psychoactive effects of nutmeg in high doses?",
        "answers": {
          "options": [
            { "label": "Myristicin", "correct": true },
            { "label": "Thujone", "correct": false },
            { "label": "Menthol", "correct": false },
            { "label": "Linalool", "correct": false }
          ]
        },
        "top": "380px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 11,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which compound in Wormwood contributes to its psychoactive potential?",
        "answers": {
          "options": [
            { "label": "Thujone", "correct": true },
            { "label": "Quinine", "correct": false },
            { "label": "Curcumin", "correct": false },
            { "label": "Anethole", "correct": false }
          ]
        },
        "top": "420px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 12,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which sacred herb is often smoked in Native American rituals?",
        "answers": {
          "options": [
            { "label": "Tobacco", "correct": true },
            { "label": "Rue", "correct": false },
            { "label": "Lavender", "correct": false },
            { "label": "Chamomile", "correct": false }
          ]
        },
        "top": "460px",
        "left": "45px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 30
      },
      {
        "id": 13,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which psychoactive compound is found in khat?",
        "answers": {
          "options": [
            { "label": "Cathinone", "correct": true },
            { "label": "Morphine", "correct": false },
            { "label": "Psilocin", "correct": false },
            { "label": "Harmaline", "correct": false }
          ]
        },
        "top": "500px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 14,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which herb is sometimes called 'witch’s herb' for its use in medieval potions?",
        "answers": {
          "options": [
            { "label": "Belladonna", "correct": true },
            { "label": "Thyme", "correct": false },
            { "label": "Peppermint", "correct": false },
            { "label": "Fennel", "correct": false }
          ]
        },
        "top": "540px",
        "left": "50px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 15,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which natural substance found in blue lotus may have mild psychoactive effects?",
        "answers": {
          "options": [
            { "label": "Apomorphine", "correct": true },
            { "label": "Strychnine", "correct": false },
            { "label": "Capsaicin", "correct": false },
            { "label": "Vanillin", "correct": false }
          ]
        },
        "top": "580px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 45
      },
      {
        "id": 16,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which psychoactive herb is traditionally used in Siberian shamanic rituals and is known to contain muscimol?",
        "answers": {
          "options": [
            { "label": "Amanita muscaria", "correct": true },
            { "label": "Henbane", "correct": false },
            { "label": "Wormwood", "correct": false },
            { "label": "Valerian", "correct": false }
          ]
        },
        "top": "620px",
        "left": "30px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 100
      },
      {
        "id": 17,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which herb contains betel alkaloids and is chewed in many parts of Asia for stimulant effects?",
        "answers": {
          "options": [
            { "label": "Betel leaf", "correct": true },
            { "label": "Sage", "correct": false },
            { "label": "Rue", "correct": false },
            { "label": "Linden", "correct": false }
          ]
        },
        "top": "660px",
        "left": "40px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 40
      },
      {
        "id": 18,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which psychoactive plant is known as 'Devil’s Trumpet' and contains toxic tropane alkaloids?",
        "answers": {
          "options": [
            { "label": "Datura stramonium", "correct": true },
            { "label": "Mint", "correct": false },
            { "label": "Yarrow", "correct": false },
            { "label": "Lemon balm", "correct": false }
          ]
        },
        "top": "700px",
        "left": "25px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 19,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "What compound in kratom interacts with opioid receptors in the brain?",
        "answers": {
          "options": [
            { "label": "Mitragynine", "correct": true },
            { "label": "Scopolamine", "correct": false },
            { "label": "Reserpine", "correct": false },
            { "label": "Coumarin", "correct": false }
          ]
        },
        "top": "740px",
        "left": "60px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      },
      {
        "id": 20,
        "date": "2025-07-21",
        "category": "psychoactive herbs",
        "question": "Which herb is used in traditional Chinese medicine and contains the compound ephedrine?",
        "answers": {
          "options": [
            { "label": "Ephedra sinica (Ma Huang)", "correct": true },
            { "label": "Ashwagandha", "correct": false },
            { "label": "Hops", "correct": false },
            { "label": "Angelica", "correct": false }
          ]
        },
        "top": "780px",
        "left": "35px",
        "level": 0,
        "answtype": "single",
        "format": "text",
        "pts": 50
      }
    ]



  }

  constructor() { }

  public getMessages(group?: string): any {
    return this.messages[group ? `game${group}` : 'generic'] || [];
  }

  public getMessageById(chapterId: string, gameId: string, campaignId: string, id: number): Observable<Message> {
    return of(this.messages?.[chapterId && gameId && campaignId ? `game${chapterId}-${gameId}-${campaignId}` : 'generic']?.find((msg: Message) => msg.id === id))
  }
}
