import axios from "axios";

export const instance = axios.create({
    xsrfCookieName: "myCsrfToken",
    xsrfHeaderName: "csrf-token",
});
