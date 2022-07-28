import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';

export const useDataApi = () => {
  const currentUrl = useHistory().location.pathname;
  const [urlList, setUrlList] = React.useState<string[]>();

  React.useEffect(() => {
    const s3Client = new S3Client({
      region: 'ams3',
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
              Bucket: 'optics',
              Prefix: notMain ? currentUrl.slice(1) + '/' : undefined,
              Delimiter: '/',
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
        console.log('Error', err);
      }
    };

    run();
  }, [setUrlList, currentUrl]);

  return urlList;
};
