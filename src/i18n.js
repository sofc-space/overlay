import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'de',
    numberFormats: {
        'de': {
            percent: {
                style: 'percent', useGrouping: false
            },
            twoFractionNumber: {
                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
            }
        }
    }
})

export default i18n