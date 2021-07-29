import axios from "axios";

var instance = axios.create({
    xsrfCookieName: "myCsrfToken",
    xsrfHeaderName: "csrf-token",
});

export default instance;
