export function decodeBase64(encoded) {
    return decodeURIComponent(Array.prototype.map.call(atob(encoded), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''));
}

export function encodeBase64(string) {
    return btoa(encodeURIComponent(string).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16))
    }));
}