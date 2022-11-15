import * as React from "react";
import { useHistory } from "react-router-dom";
import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";

export const useDataApi = () => {
  const currentUrl = useHistory().location.pathname;
  const [urlList, setUrlList] = React.useState<string[]>();

  React.useEffect(() => {
    const s3Client = new S3Client({
      region: "ams3",
      endpoint: process.env.API_URL,
      credentials: {
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.REACT_APP_ACCESS_SECRET_KEY as string,
      },
    });
    const notMain = currentUrl.length > 1;

    const run = async () => {
      try {
        await s3Client
          .send(
            new ListObjectsCommand({
              Bucket: "optics",
              Prefix: notMain ? currentUrl.slice(1) + "/" : undefined,
              Delimiter: "/",
            })
          )
          .then((data) => {
            if (data.Contents) {
              const filteredList = data.Contents.map((item) => item.Key).filter(
                (filteredItem): filteredItem is string => !!filteredItem
              );

              return setUrlList(filteredList);
            }
          });
      } catch (err) {
        console.log("Error", err);
      }
    };

    run();
  }, [setUrlList, currentUrl]);

  return urlList;
};

// Dropbox
// const dbx = new Dropbox({
//   accessToken:
//     "sl.BRQjQdFuduXbLRWZYIfh3HaLB9gJFfVGI_9xOXuMSpgofB_BOk0YllWZK1Ctj4Vj8phB5qNX5wMNRc9twLYmSymQXrL2dZu1wclk0jZBC-hWit6QHYLn4evWVKrKboWTOJigptk",
// });

// export const useDataApi = () => {
//   const currentUrl = useHistory().location.pathname;
//   const [urlList, setUrlList] = React.useState<string[]>();

//   React.useEffect(() => {
//     dbx
//       .filesListFolder({
//         path: currentUrl === "/" ? "" : currentUrl,
//       })
//       .then(({ result }) => {
//         if (result) {
//           const filteredData = result.entries
//             .filter((item) => item[".tag"] === "file")
//             .map((item) => item.name);
//           return setUrlList(filteredData);
//         }
//       });
//   }, [currentUrl, setUrlList]);

//   return urlList;
// };
