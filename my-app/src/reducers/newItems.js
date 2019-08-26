const newItems = (state = [], action) => {

  if (action.type === 'ADD_ITEM') {
    return [...state,
      {
        id: action.id,
        name: action.values.name,
        phone: action.values.phone,
        email: action.values.email,
        price: action.values.price
      }
    ];
  }else if (action.type === 'REMOVE_ITEM') {
    return state.filter(el => el.id !== action.id);
  }
  return state;
};

export default newItems
