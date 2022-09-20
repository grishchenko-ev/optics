import React from "react";
import { useDataApi } from "../../use-data-api";
import * as LinkedImage from "modules/components/linked-image";
import { useScrollPosition } from "modules/hooks/use-scroll-position";

export const Layout = () => {
  useScrollPosition();
  const storedScrollPosition = Number(localStorage.getItem("scroll"));

  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: storedScrollPosition ?? 0,
        behavior: "smooth",
      });
    }, 700);
  }, []);

  const data = useDataApi();

  if (!data) {
    return <div>No data</div>;
  }

  const formattedData =
  data[0].charAt(data[0].length - 1) === '/' ? data.slice(1) : data;

  return (
    <ul className="list container">
      {formattedData.map((item, i) => (
        <li key={i}>
          <LinkedImage.Layout src={item} />
        </li>
      ))}
    </ul>
  );
};
Layout.displayName = "Preview.Layout";
