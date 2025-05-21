export const quizzes = [
  {
    id: 1,
    question: "What does the `esModuleInterop` option in tsconfig enable?",
    choices: [
      { id: "a", text: "Default import syntax from CommonJS modules", isCorrect: true },
      { id: "b", text: "Support for ES6 modules in Node.js", isCorrect: false },
      { id: "c", text: "Stricter type checking for external packages", isCorrect: false },
      { id: "d", text: "Enables top-level await in all files", isCorrect: false }
    ],
    selectMultiple: false
  },
  {
    id: 2,
    question: "Which of the following are valid use cases for a callback in Node.js?",
    choices: [
      { id: "a", text: "Handling asynchronous operations", isCorrect: true },
      { id: "b", text: "Declaring global constants", isCorrect: false },
      { id: "c", text: "Responding to HTTP requests", isCorrect: true },
      { id: "d", text: "Defining interfaces", isCorrect: false }
    ],
    selectMultiple: true
  },
  {
    id: 3,
    question: "In CORS, what does setting `origin: '*'` do?",
    choices: [
      { id: "a", text: "Allows all origins to access the resource", isCorrect: true },
      { id: "b", text: "Blocks all CORS requests", isCorrect: false },
      { id: "c", text: "Restricts access to same-origin only", isCorrect: false },
      { id: "d", text: "Allows only GET requests", isCorrect: false }
    ],
    selectMultiple: false
  },
  {
    id: 4,
    question: "Which TypeScript compiler options improve type safety?",
    choices: [
      { id: "a", text: "`strict`", isCorrect: true },
      { id: "b", text: "`noImplicitAny`", isCorrect: true },
      { id: "c", text: "`allowJs`", isCorrect: false },
      { id: "d", text: "`forceConsistentCasingInFileNames`", isCorrect: true }
    ],
    selectMultiple: true
  }
];
