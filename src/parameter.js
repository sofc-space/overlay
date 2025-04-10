export default function getParameterValue(key, defaultValue) {
    let url = window.location.toString();
    let matches = url.match(new RegExp(String.raw`^.+[?&]${key}=([^?&]+)([?&]|$)`, "i"));
    return matches ? matches[1] : defaultValue;
}