import { useState } from "react";
import { useTranslation } from "react-i18next";

type Language = {
  code: string;
  label: string;
  countryCode: string;
  flag: JSX.Element;
};

const languages: Language[] = [
  {
    code: "en",
    label: "English",
    countryCode: "gb",
    flag: <span className="fi fi-gb"></span>
  },
  {
    code: "fr",
    label: "Français",
    countryCode: "fr",
    flag: <span className="fi fi-fr"></span>
  },
  {
    code: "de",
    label: "Deutsch",
    countryCode: "de",
    flag: <span className="fi fi-de"></span>
  },
  {
    code: "ar",
    label: "العربية",
    countryCode: "sa",
    flag: <span className="fi fi-sa"></span>
  }
];


export default function LanguageSwitch(): JSX.Element {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };

  const current = languages.find(
    (lang) => lang.code === i18n.language
  );

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-2xl"
      >
        {current?.flag}
        <span className="font-semibold text-sm">{current?.code.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute bottom-9 left-0 w-52 bg-white shadow-2xl rounded-2xl overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 transition"
            >
              {/* <span>{lang.flag}</span> */}
              {lang.flag}
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
