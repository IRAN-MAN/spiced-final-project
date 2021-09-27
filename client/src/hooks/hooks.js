import { useState, useEffect } from "react";
import axios from "../axios";

export function useStatefulFields() {
    const [inputValues, setInputValues] = useState({});
    // console.log("...(Hook useStatefulFields) inputValues: ", inputValues);
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
        // console.log("...(Hooks useAuthSubmit) url, values", url, values);
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

export function useAddToIngredients() {
    const ingredients = [];
    const addIngredient = (ingredient) => {
        ingredients.push(ingredient);
    };
    return [ingredients, addIngredient];
}

export function useCurrentWidth() {
    const getWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        // timeoutId for debounce mechanism
        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        };
        // set resize listener
        window.addEventListener("resize", resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener("resize", resizeListener);
        };
    }, []);

    return width;
}
