import axios from 'axios';
import {store} from '../index'

export const submitRequest = (class_request) => {
    axios.post('http://localhost:8000/api/unassigned_events/',
        {
            name:class_request.name, phone:class_request.phone, date:class_request.date,
            hour:class_request.hour, hour_to:class_request.hour_to ,description:class_request.description
        }, store.config
    )
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            alert(error);
        });
    return {
        type: 'REQ_SENT',
        payload: class_request
    }
};

export const transferClasses = (classes) => {
    return {
        type: 'CLASSES_SENT',
        payload: classes
    }
};

export const transferHours = (hours) => {
    return {
        type: 'HOURS_SENT',
        payload: hours
    }
};

export const selectRequest = (class_request) => {
    return {
        type: 'REQ_SELECTED',
        payload: class_request
    }
};

