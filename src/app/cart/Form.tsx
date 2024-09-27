import * as React from "react";
import { CartItem } from "./Context";
import { messaging } from "modules/components/messaging/index";

type FormProps = {
    orderData: Array<CartItem>;
};

export type CustomerData = {
    entepreneur: string;
    phone: string;
    city: string;
    officeNP: number | undefined;
    recipient: string;
};

const isIncomplete = (obj: CustomerData) => {
    return Object.values(obj).some((value) => {
        if (value === undefined || value === "") {
            return true;
        }

        return false;
    });
};

export const Form: React.FC<FormProps> = ({ orderData }) => {
    const [data, setData] = React.useState<CustomerData>({
        entepreneur: "",
        phone: "",
        city: "",
        officeNP: undefined,
        recipient: "",
    });

    const isDisabled = isIncomplete(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        messaging(data, orderData);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__group">
                <input
                    type="text"
                    name="entepreneur"
                    onChange={handleChange}
                    className="form__control"
                    required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>ФЛП</label>
            </div>
            <div className="form__group">
                <input
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    onChange={handleChange}
                    className="form__control"
                    maxLength={10}
                    required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Телефон у форматі 0661234567</label>
            </div>
            <div className="form__group">
                <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    className="form__control"
                    required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Місто</label>
            </div>
            <div className="form__group">
                <input
                    type="number"
                    name="officeNP"
                    onChange={handleChange}
                    className="form__control"
                    required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Відділення Нової пошти №</label>
            </div>
            <div className="form__group">
                <input
                    type="text"
                    name="recipient"
                    onChange={handleChange}
                    className="form__control"
                    required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Отримувач</label>
            </div>
            <button
                type="submit"
                disabled={isDisabled}
                className="btn btn_outline"
            >
                Відправити
            </button>
        </form>
    );
};
