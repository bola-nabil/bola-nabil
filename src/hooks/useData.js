import { useEffect, useState } from "react";
import data from "../data/data.json";

const useData = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(data);
  }, []);

  return content;
};

export default useData;
