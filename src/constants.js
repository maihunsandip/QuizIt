export const jsQuizz = {
  questions: [
    {
      question:
        "Who is considered  the father of Java?",
      choices: [
        "Dennis Richie",
        "Ken Thompson",
        "James Gosling",
        "Bjarne Stroupstrup",
      ],
      type: "MCQs",
      correctAnswer: "James Gosling",
    },
    {
      question: "What is ReactJS?",
      choices: [
        "Server-side framework",
        "User Interface framework",
        "both a and b",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question:
        "Identify the one which is used to pass data to components from outside",
      choices: ["Render with arguments", "setState", "PropTypes", "props"],
      type: "MCQs",
      correctAnswer: "props",
    },
    {
      question: "In which language is React.js written?",
      choices: ["Python", "Java", "C#", "JavaScript"],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "Which type of JavaScript language is?",
      choices: [
        "Object-Oriented",
        "Object-Based",
        "Assembly-language",
        "High-level",
      ],
      type: "MCQs",
      correctAnswer: "Object-Based",
    },
  ],
};

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
