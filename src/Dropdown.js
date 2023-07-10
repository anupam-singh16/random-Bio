import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Dropdown() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div>
      Select language
      <select onChange={(e) => handleClick(e)}>
        <option>select language</option>
        <option value={"en"}>English</option>
        <option value={"ko"}>Korean </option>
        <option value={"chi"}>Chineas</option>
        <option value={"hi"}>Hindi</option>
      </select>
      <p>
        {t("welcome")} {t("about")} {t("hi my name is singh")}
      </p>
      <p>
        {t(
          "the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release ofLetraset sheets containing Lorem Ipsum passages, and morerecently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum"
        )}
      </p>
    </div>
  );
}

export default Dropdown;
