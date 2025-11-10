import { useTranslation } from "react-i18next";

export default function Ecommerce() {
  const { t } = useTranslation();

  return (
    <div className="bg-base-200">
      <div className="bg-base-300 text-base-content flex items-center justify-center">
        <h1>{t("ecommerce.title")}</h1>
      </div>
    </div>
  );
}
