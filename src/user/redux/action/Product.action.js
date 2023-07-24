import * as ActionType from '../ActionType';

export const getProductData = () => (dispatch) => {
    try {
        fetch('http://localhost:3005/product')
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.PRODUCT_GET, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const addProductData = (data) => (dispatch) => {
    try {
        fetch('http://localhost:3005/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.PRODUCT_ADD, payload: data }))
            .catch((error) => console.log(error));
    } catch (error) {
        console.log(error);
    }
}

export const removeProductData = (id) => (dispatch) => {
    try {
        fetch('http://localhost:3005/product/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then(dispatch({ type: ActionType.PRODUCT_REMOVE, payload: id }))
            .catch((error) => console.log(error));
    } catch (error) {
        console.log(error)
    }
}

export const updateProductData = (data) => (dispatch) => {
    try {
        fetch('http://localhost:3005/product/' + data.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(dispatch({ type: ActionType.PRODUCT_UPDATE, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    }
}



