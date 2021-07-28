import axios from "../axios";

export const receiveUserInfo = async (user_id) => {
    const userInfo = await axios.get(`/api/users/${user_id}`);
    console.log("...(ACTION receiveUserInfo) userInfo.data:", userInfo.data);
    return {
        type: "RECEIVE_USERINFO",
        payload: { user: userInfo.data },
    };
};
