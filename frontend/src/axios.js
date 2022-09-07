import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.headers.common["X-CSRFToken"];
axios.defaults.withCredentials = true;

const djangoURL = "http://ec2-13-53-234-42.eu-north-1.compute.amazonaws.com:8000/";
const defaultTimeout = 10000;

axios.defaults.baseURL = djangoURL;
axios.defaults.timeout = defaultTimeout;

const api = axios.create();

export default api;
