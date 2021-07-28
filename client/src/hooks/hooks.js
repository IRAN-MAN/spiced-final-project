import { useState } from "react";

export function useStatefulFields() {
    const [inputValues, setInputValues] = useState({});

    const handleChange = (e) =>
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    return [inputValues, handleChange];
}
