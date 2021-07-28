import { useState } from "react";
import axios from "../axios";

export function useStatefulFields() {
    const [inputValues, setInputValues] = useState({});
    console.log("...(Hook useStatefulFields) inputValues: ", inputValues);
    const handleChange = (e) =>
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    return [inputValues, handleChange];
}

export function useAuthSubmit(url, values) {
    const [error, setError] = useState();

    const submit = async (event) => {
        event.preventDefault();
        console.log("...(Hooks useAuthSubmit) url, values", url, values);
        try {
            await axios.post(url, values);
            location.reload();
        } catch (error) {
            console.log("...(onAuthSubmit) Error: ", error.response.data.error);
            setError(error);
        }
    };
    return [submit, error];
}
