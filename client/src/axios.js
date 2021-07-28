import axios from "axios";

var instance = axios.create({
    xsrfCookieName: "csrfToken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
