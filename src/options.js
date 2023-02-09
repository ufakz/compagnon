export const RequestType = {
  TEXT: "text",
  IMAGE: "image",
};

export const options = [
  {
    id: "imagegen",
    name: "Generate Image",
    desc: "Generate an image based on your prompt",
    description: "Generate an image based on your prompt",
    type: RequestType.IMAGE,
    options: {
      n: 1,
      size: "1024x1024",
    },
  },
  {
    id: "chat",
    name: "Chat",
    desc: "Open ended conversation with an AI assistant.",
    description:
      "Ask questions, get clarifications, request for summaries of long texts, convert from programming languages to others, get simple explanation of complex topics and much more...",
    type: RequestType.TEXT,
    options: {
      model: "text-davinci-003",
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    },
  },
];
