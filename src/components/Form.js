import React, {useContext, useRef, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/FirebaseContext";


const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);
    const inputRef = useRef(null);
    const focus = () => inputRef.current.focus();

    const submitHandler = (event) => {
        event.preventDefault();
        if (value.trim()) {
            firebase.addNote(value.trim())
                .then(() => {
                    alert.show('Note created', 'success')
                })
                .catch(() => {
                    alert.show('Something went wrong', 'danger')
                })
            setValue('')
        } else {
            alert.show('Please input text')
        }

    };
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder='Enter note name'
                       value={value} onChange={e => setValue(e.target.value)}
                       ref={inputRef}
                       onClick={focus}
                      />
            </div>
        </form>
    )
};

export default Form;