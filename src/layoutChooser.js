import getParameterValue from "@/parameter.js";

export function layoutFinder() {
    const layout = getParameterValue("layout", "handcam");

    document.getElementsByTagName("html")[0].classList.add('layout-' + layout);
    document.getElementsByTagName("html")[0].classList.add('overlay');

    return layout;
}

export function colorScheme(colorScheme) {
    document.getElementsByTagName("html")[0].classList.add('scheme-' + colorScheme);
}

export function scaling(scale) {
    document.getElementsByTagName("html")[0].classList.add('scale-' + scale);
}