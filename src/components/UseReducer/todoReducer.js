export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "Add":
            return [...state, action.payload];
        case "Delete":
            return state.filter((todo) => todo.id !== action.payload);
        case "Toggle":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return state;
    }
};
