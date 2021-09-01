
export const SET_FUNCTION = 'SET_FUNCTION';
export const SET_DESC = 'SET_DESC';
export const SET_ADVDESC = 'SET_ADVDESC';
export const SET_DATA = 'SET_DATA';

export const fetchData = () => {
    return async dispatch => {
        const response = await fetch(
            'http://sap-library.herokuapp.com'
        );
        const resData = await response.json();
        const users = []
        resData.map(el=>users.push(el.user))
    
    dispatch({ type: SET_DATA, resData, users });
        }
};

// export const deleteProduct = productId => {
//     return { type: DELETE_PRODUCT, pid: productId };
//   };