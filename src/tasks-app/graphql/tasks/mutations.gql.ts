export default `
    createTask(name: String!, description: String, due_date: Date): Task!
    deleteTask(id: ID!): Task
`;
