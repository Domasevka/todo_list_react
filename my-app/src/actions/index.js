let nextItemId = 0;

/*export const createNewItem = (text, name, price) => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  text,
  name,
  price
});*/

export const notification = payload => {
  /*alert('new item' + payload);*/
  return {
    type: 'ADD_SUCCESS_NOTIFICATION',
    payload
  }
};

export const onRemove = () => ({
  type: 'REMOVE_NOTIFICATION',
});

export const onSubmit = (values) => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  values
});

/*export const onRemoveItem = (id) => ({
  type: 'REMOVE_ITEM',
  id: id,
});*/

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(itemsFetchDataSuccess( data )))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}