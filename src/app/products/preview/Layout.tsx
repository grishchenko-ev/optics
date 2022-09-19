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

  const data = useDataApi()?.slice(1);

  if (!data) {
    return null;
  }

  return (
    <ul className="list container">
      {data.map((item, i) => (
        <li key={i}>
          <LinkedImage.Layout src={item} />
        </li>
      ))}
    </ul>
  );
};
Layout.displayName = "Preview.Layout";
