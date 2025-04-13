export default function getParameterValue(key, defaultValue) {
    let url = window.location.toString();
    return findParameterValue(url, key, defaultValue);
}

export function findParameterValue(haystack, key, defaultValue) {
    let matches = haystack.match(new RegExp(String.raw`(^|[?&])${key}=([^?&]+)([?&]|$)`, "i"));
    return matches ? matches[2] : defaultValue;
}

export function findSteamId(haystack, defaultValue) {
    let matches = haystack.match(new RegExp(String.raw`([0-9]{17})[/?&]`, "i"));
    return matches ? matches[1] : defaultValue;
}
