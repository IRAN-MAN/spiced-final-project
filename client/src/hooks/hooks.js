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
            window.location = "/";
        } catch (error) {
            console.log(
                "...(onAuthSubmit) Error: ",
                error.response.data.message
            );
            setError(error.response.data.message);
        }
    };
    return [submit, error];
}

export function useToggle() {
    const [toggle, setToggle] = useState(false);

    const toggleOnOff = (toggleState) => {
        console.log("...(HOOK useToggle) toggleState:", !toggleState);
        setToggle(!toggleState);
    };
    return [toggle, toggleOnOff];
}
