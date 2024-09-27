import { CartItem } from "app/cart/Context";
import { CustomerData } from "app/cart/Form";

export const messaging = (data: CustomerData, items: Array<CartItem>) => {
    const customerData = `ФОП: ${data.entepreneur}%0AТелефон: ${data.phone}%0AМісто: ${data.city}%0AНова пошта: ${data.officeNP}%0AОтримувач: ${data.recipient}`;
    const itemsData = items.map(({ id, quantity }) => {
        const formattedId = id
            .replace(/ *\/[^]*\/ */g, " ")
            .replace(/ *\([^)]*\) */g, "")
            .slice(0, -1);
        return `%0A${formattedId} x ${quantity}`;
    });

    let message = `${customerData}%0AЗамовлення:${itemsData}`;
    fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`,
        { method: "GET" }
    ).then(
        (success) => {
            alert(
                "Повідомлення надіслано успішно! З Вами зв'яжуться найближчим часом!"
            );
        },
        (error) => {
            alert("Помилка під час відправлення!");
        }
    );
};
