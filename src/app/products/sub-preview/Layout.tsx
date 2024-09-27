import { useDataApi } from "../../use-data-api";
import * as LinkedImage from "modules/components/linked-image";
import { Preloader } from "modules/components/preloader";

export const Layout = () => {
    const data = useDataApi();

    if (!data) {
        return <Preloader />;
    }

    const formattedData =
        data[0].charAt(data[0].length - 1) === "/" ? data.slice(1) : data;

    return (
        <ul className="list container">
            {formattedData.map((item, i) => (
                <li key={i}>
                    <LinkedImage.Layout src={item} withCart />
                </li>
            ))}
        </ul>
    );
};
Layout.displayName = "SubPreview.Layout";
