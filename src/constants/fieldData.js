export const KNOWLEDGE_BASE_FIELDS = [
  {
    name: "name",
    label: "Name (Cannot be edited later)",
    type: "text",
    placeholder: "Name",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Description",
    rows: 3,
  },
  {
    name: "vectorStore",
    label: "Vector Store",
    type: "select",
    required: true,
    options: ["Pinecone", "Weaviate", "Qdrant", "Chroma", "Milvus"],
  },
  {
    name: "llmModel",
    label: "LLM Embedding Model",
    type: "select",
    required: true,
    options: [
      { label: "text-embedding-3-small", value: "text-embedding-3-small" },
      { label: "text-embedding-3-large", value: "text-embedding-3-large" },
      { label: "text-embedding-ada-002", value: "text-embedding-ada-002" },
    ],
  },
];
