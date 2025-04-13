import {createI18n} from "vue-i18n";
import getParameterValue from "@/parameter.js";
import VueCookies from 'vue-cookies'

import editor_de from "@/locale/editor.de.json";
import editor_en from "@/locale/editor.en.json";
import imprint_de from "@/locale/imprint.de.json";
import imprint_en from "@/locale/imprint.en.json";
import data_protection_de from "@/locale/data-protection.de.json";
import data_protection_en from "@/locale/data-protection.en.json";

//let locale = getParameterValue("lang", "")
//if(!locale) {
//    //locale = this.$cookies.get("lang");
//    if(!locale)
//        locale = navigator.language;
//}

const i18n = createI18n({
    locale: "en",
    fallbackLocale: 'en',
    languages: ["de", "en"],
    messages: {
        de: {
            pages: {
                imprint: imprint_de,
                data_protection: data_protection_de,
                home: {
                    editor: "Zum Editor"
                }
            },
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
                season_wins: "S2 wins",
            },
            credits: "Daten bereitgestellt von",
            footer: {
                timespan: {
                    from: "von",
                    to: "bis",
                },
                links: {
                    copyright: "© 2025 sofc aka Hendrik Heinle",
                    editor: "Editor",
                    imprint: "Impressum",
                    data_protection: "Datenschutz"
                }
            },
            editor: editor_de,
            locale: {
                "de": "Deutsch",
                "en": "Englisch",
                "selector": {
                    "label": "Sprache"
                }
            }
        },
        en: {
            pages: {
                imprint: imprint_en,
                data_protection: data_protection_en,
                home: {
                    editor: "Start Editor"
                }
            },
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
                season_wins: "S2 wins",
            },
            credits: "data provided by",
            footer: {
                timespan: {
                    from: "from",
                    to: "to",
                },
                links: {
                    copyright: "© 2025 sofc aka Hendrik Heinle",
                    editor: "Editor",
                    imprint: "Imprint",
                    data_protection: "Data Protection"
                }
            },
            editor: editor_en,
            locale: {
                "de": "German",
                "en": "English",
                "selector": {
                    "label": "Language"
                }
            }
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

export function getLocale() {
    let locale = getParameterValue("lang", "")
    if (!locale) {
        locale = VueCookies.get("lang");
        if (!locale) {
            locale = navigator.language;
        }
    }
    return locale;
}

export function setupI18n() {
    setI18nLanguage(i18n, getLocale())
}

export function setLocale(locale) {
    VueCookies.set("lang", locale);
    setI18nLanguage(i18n, locale);
}

function setI18nLanguage(i18n, locale) {
    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale
    } else {
        i18n.global.locale.value = locale
    }
    //VueCookies.set("lang", locale);
    /**
     * NOTE:
     * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
     * The following is an example for axios.
     *
     * axios.defaults.headers.common['Accept-Language'] = locale
     */
    document.querySelector('html').setAttribute('lang', locale)
}