import React from "react";
import { Copy } from "./Copy";
import "./styles.scss";

export const CopyButton: React.FC<{ value: string }> = ({ value }) => {
    function copyToClipboard() {
        const tempInput = document.createElement("input");
        tempInput.value = value;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    return (
        <>
            {document.queryCommandSupported("copy") && (
                <div onClick={() => copyToClipboard()} className="btn btn_copy">
                    <span>Скопіювати посилання на зображення</span>
                    <Copy />
                </div>
            )}
        </>
    );
};
