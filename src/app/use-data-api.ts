import * as React from "react";
import axios from "axios";

export const useDataApi = (initialUrl: string, initialData: []) => {
    const [data, setData] = React.useState(initialData);
    const [url, setUrl] = React.useState(initialUrl);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);

                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};