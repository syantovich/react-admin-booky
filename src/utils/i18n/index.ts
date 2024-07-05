import get from "lodash.get";
import {Locale} from "react-admin";
import ru from "./translations/ru";
import en from './translations/en';

export enum ELocales {
    EN = 'en',
    RU = 'ru'
};

const localesNames = {
    [ELocales.EN]: "English",
    [ELocales.RU]: "Русский"
};

const localesMessages = {
    [ELocales.EN]: en,
    [ELocales.RU]: ru
};


const i18nProvider = (defaultLocale: ELocales = ELocales.EN) => {
    let currentMessages = localesMessages[defaultLocale];
    let currentLocale = defaultLocale;

    return {
        translate: (key: string) => {
            return get(currentMessages, key) || key
        },
        changeLocale: (newLocale: string) => {
            if (newLocale in localesMessages) {
                currentLocale = newLocale as ELocales;
                currentMessages = localesMessages[currentLocale];
                return Promise.resolve();
            } else {
                return Promise.reject();
            }
        },
        getLocale: () => currentLocale,
        getLocales: () => Object.entries(localesNames).reduce((acc: Locale[], entry) => {
            const [locale, name] = entry;
            const nextAcc = [...acc];
            nextAcc.push({locale, name})
            return nextAcc;
        }, [])
    }
};

export default i18nProvider