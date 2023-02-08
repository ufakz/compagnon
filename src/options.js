export const options = [
  {
    id: "chat",
    name: "Chat",
    description: "Open ended conversation with an AI assistant",
    options: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    },
  },
  {
    id: "qa",
    name: "Q and A",
    description: "Answer questions based on existing knowledge",
  },
  {
    id: "grammar",
    name: "Grammar correction",
    description: "Corrects sentences into standard English",
  },
  {
    id: "summarize",
    name: "Summarize for a 2nd grader",
    description: "Translates difficult text into simpler concepts",
  },
  {
    id: "englishtoother",
    name: "English to other languages",
    description: "Translates English text into French, Spanish and Japanese",
  },
  {
    id: "pythontonatural",
    name: "Python to natural language",
    description: "Explain a piece of Python code in human readable language",
  },
  {
    id: "translatecode",
    name: "Translate programming languages",
    description: "Use the comments to specify the source and target languages",
  },
  {
    id: "explaincode",
    name: "Explain code",
    description: "Explain a complicated piece of code",
  },
  {
    id: "sqlrequest",
    name: "SQL request",
    description: "Create simple SQL queries",
  },
  {
    id: "essayoutline",
    name: "Essay outline",
    description: "Generate an outline for a research topic",
  },
];
