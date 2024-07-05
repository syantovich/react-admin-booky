import {fetchUtils, Options} from "ra-core";
import jsonServerProvider from "ra-data-json-server";

const httpClient = (url: String, options: Options = {}) => {
    const headers = new Headers({...options.headers || {}, Accept: "application/json"});

    const session = localStorage.getItem("ssid");
    if (session) {
        headers.append("session", session);
    }

    options.headers = headers;
    // add your own headers here
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = jsonServerProvider(
    import.meta.env.VITE_SIMPLE_REST_URL,
    httpClient
);
