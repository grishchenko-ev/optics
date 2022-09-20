import React from "react";
import { useDataApi } from "../../use-data-api";
import * as LinkedImage from "modules/components/linked-image";

export const Layout = () => {
  const data = useDataApi();

  if (!data) {
    return <div>No data</div>;
  }

  const formattedData =
    data[0].charAt(data[0].length - 1) === "/" ? data.slice(1) : data;

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
Layout.displayName = "SubPreview.Layout";
