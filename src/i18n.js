import {createI18n} from "vue-i18n";

let url = window.location.toString();
let localeMatches = url.match(/^.+\?lang=([a-z]{2})/i);
let locale = localeMatches ? localeMatches[1]: 'en'

const i18n = createI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages: {
        de: {
            labels: {
                kills: "Kills",
                deaths: "Deaths",
                kdratio: "K/D",
                adr: "ADR",
                hsrate: "HS",
                winrate: "Winrate",
                begin: "Beginn",
                current: "Aktuell",
                matches: "Spiele",
                win: "win",
                tie: "tie",
                loss: "loss",
            },
            credits: "Daten bereitgestellt von",
        },
        en: {
            labels: {
                kills: "kills",
                deaths: "deaths",
                kdratio: "k/d",
                adr: "adr",
                hsrate: "hs",
                winrate: "winrate",
                begin: "begin",
                current: "current",
                matches: "matches",
                win: "win",
                tie: "tie",
                loss: "loss",
            },
            credits: "data provided by",
        }
    },
    numberFormats: {
        'de': {
            percent: {
                style: 'percent', useGrouping: false
            },
            twoFractionNumber: {
                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
            },
        },
        'en': {
            percent: {
                style: 'percent', useGrouping: false
            },
            twoFractionNumber: {
                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
            },
        }
    }
})

export default i18n