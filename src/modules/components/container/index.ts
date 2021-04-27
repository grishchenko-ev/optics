export interface ContainerProps {
    html?: string;
}

export function ContainerElement(): HTMLElement {
    const  parentNode = document.body;

    let element: HTMLElement | null = parentNode.querySelector(`optics-site`);
    if (element === null) {
        element = document.createElement("optics-site");

        parentNode.appendChild(element);
    }

    return element;
}
