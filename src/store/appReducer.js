const initial_state = { 
    itens: [
        'Lucas',
        'Loren',
        'Fred'
    ] 
};

export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case 'ADD__ITEM':
            return { ...state, itens: [...state.itens, action.item] };
        default: 
            return state;
    }   
}