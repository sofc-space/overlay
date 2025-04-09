

const unitsInSec = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
const unitStrings = ["second", "minute", "hour", "day", "week", "month", "year"];

export default function getRelativeDate(dateString, locale) {
    const date = new Date(dateString);
    const secondsDiff = Math.round((date - Date.now()) / 1000);
    const unitIndex = unitsInSec.findIndex((cutoff) => cutoff > Math.abs(secondsDiff));
    const divisor = unitIndex ? unitsInSec[unitIndex - 1] : 1;
    const rtf = new Intl.RelativeTimeFormat(locale, {style: 'short'});
    return rtf.format(Math.floor(secondsDiff / divisor), unitStrings[unitIndex]);
}