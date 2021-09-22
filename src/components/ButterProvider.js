import { createContext, useState, useEffect } from "react";
import butter from "../utils/Butter";

const defaultButterContext = {
  header: "",
  articles: [],
};

export const ButterContext = createContext({
  config: defaultButterContext,
});

export default function ButterProvider({ children }) {
  const [butterData, setButterData] = useState(defaultButterContext);

  useEffect(() => {
    async function getPageData() {
      const response = await butter.page.retrieve("*", "uxpin");
      const pageData = response.data.data;
      setButterData(pageData.fields);
    }
    getPageData();
  }, []);

  return (
    <ButterContext.Provider value={butterData}>
      {children}
    </ButterContext.Provider>
  );
}
