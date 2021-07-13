import * as React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const useDataApi = () => {
    const baseUrl = "https://optics.ams3.digitaloceanspaces.com";
    const [data, setData] = React.useState("");
    const [url, setUrl] = React.useState(baseUrl);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const currentUrl = useHistory().location.pathname;
    console.log(url + currentUrl)

    React.useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios.get(url + currentUrl);
                console.log(result)

                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();

    }, [url, currentUrl, data, setData, setIsError]);

    return [{ data, isLoading, isError }, setUrl];
};