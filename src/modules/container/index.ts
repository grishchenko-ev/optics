export interface ContainerProps {
    html?: string;
}

export function ContainerElement(): HTMLElement {
    const  parentNode = document.body;

    let element: HTMLElement | null = parentNode.querySelector(`optics`);
    if (element === null) {
        element = document.createElement("optics");

        parentNode.appendChild(element);
    }

    return element;
}
