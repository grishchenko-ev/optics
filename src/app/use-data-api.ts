import * as React from "react";
import {useHistory} from "react-router-dom";
import {ListObjectsCommand, ListObjectsCommandInput, ListPartsCommand,  S3Client} from "@aws-sdk/client-s3";

export const useDataApi = () => {
    const currentUrl = useHistory().location.pathname;

    React.useEffect(() => {
        const REGION = "ams3";
        const bucketParams: ListObjectsCommandInput = {
            Bucket: "optics",
        };

        const s3Client = new S3Client({
            region: REGION,
            endpoint: process.env.API_URL,
            credentials: {
                accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID as string,
                secretAccessKey: process.env.REACT_APP_ACCESS_SECRET_KEY as string
            },
        });

        const run = async () => {
            try {
                const data = await s3Client.send(new ListObjectsCommand({
                    Bucket: "optics",
                    Prefix: currentUrl.slice(1) + "/",
                }));
                console.log(data)
                return data;
            } catch (err) {
                console.log("Error", err);
            }
        };
        run();

    }, [currentUrl])

    // const baseUrl = "https://optics.ams3.digitaloceanspaces.com";
    // const [data, setData] = React.useState("");
    // const [url, setUrl] = React.useState(baseUrl);
    // const [isLoading, setIsLoading] = React.useState(false);
    // const [isError, setIsError] = React.useState(false);
    // const currentUrl = useHistory().location.pathname;
    // console.log(url + currentUrl)
    //
    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         setIsError(false);
    //         setIsLoading(true);
    //
    //         try {
    //             const result = await axios.get(url + currentUrl);
    //             console.log(result)
    //
    //             setData(result.data);
    //         } catch (error) {
    //             setIsError(true);
    //         }
    //
    //         setIsLoading(false);
    //     };
    //
    //     fetchData();
    //
    // }, [url, currentUrl, data, setData, setIsError]);
    //
    // return [{ data, isLoading, isError }, setUrl];
};