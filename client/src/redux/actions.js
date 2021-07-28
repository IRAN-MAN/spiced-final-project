import axios from "../axios";

export const getUser = async () => {
    const user = await axios.get("/api/user", {});
    return {
        type: "UPDATE_USER",
        payload: user.data,
    };
};
