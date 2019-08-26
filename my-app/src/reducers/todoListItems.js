/*const initialState =  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",

      date: new Date(),
      completed: false
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",

      date: new Date(),
      completed: false
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",

      date: new Date(),
      completed: false
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",

      date: new Date(),
      completed: false
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",

      date: new Date(),
      completed: false
    }
  ];*/

const initState = {
  data: [],
  hasErrored: false,
  isLoading: false,
};

export default function createlist(state = initState, action){
  console.log(action);

  switch(action.type) {

    /*case 'REMOVE_TODO_ITEM':
   return state.data.filter(el => el.id !== action.id);
   break;

   case 'ADD_TODO_ITEM':
   return [...state, action.payload];
   break;

   case 'COMPLETE_ALL':
   return state.map(todo =>
   (action.values.includes(todo.id.toString()))
   ? {...todo, completed: !todo.completed}
   : todo
   );
   break;

   case 'REMOVE_CHECKED':
   return state.filter(el => !action.values.includes(el.id.toString()));
   break;*/

    case 'REMOVE_TODO_ITEM':
      //return state.data.filter(el => el.id !== action.id);
      return {...state, data:state.data.filter(el => el.id !== action.id)};
      break;

    case 'ADD_TODO_ITEM':
      return {...state, data:[...state.data, action.payload]};
      break;

    case 'COMPLETE_ALL':
      return {...state, data:state.data.map(todo =>
      (action.values.includes(todo.id.toString()))
      ? {...todo, completed: !todo.completed}
      : todo
      )};
      break;

    case 'REMOVE_CHECKED':
      return {...state, data:state.data.filter(el => !action.values.includes(el.id.toString()))};
      break;

    case 'ITEMS_FETCH_DATA_SUCCESS':
      /*return { data: action.items };*/
      return {...state, data:action.items.map(listItem => ({id:listItem.id, name: listItem.name, date: new Date(), completed: false }))};
      break;
    case 'ITEMS_IS_LOADING':
      return {...state, isLoading: action.isLoading};
      break;
    case 'ITEMS_HAS_ERRORED':
      return {...state, hasErrored: action.hasErrored};
      break;

    default:
    return state;
  }
}
