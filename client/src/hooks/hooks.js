import { useState } from "react";
import axios from "../axios";

export function useStatefulFields() {
    const [inputValues, setInputValues] = useState({});

    const handleChange = (e) =>
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    return [inputValues, handleChange];
}

export function useAuthSubmit(url, values) {
    const [error, setError] = useState();

    const submit = async () => {
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
