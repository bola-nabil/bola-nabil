import { useEffect, useState } from "react";
import data from "../data/data.json";

const useData = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoadiing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setContent(data);
      setLoadiing(false);
    } catch(err) {
        setError("Failed to load data");
        setLoadiing(false);
    }
  }, []);

  return {content, loading, error};
};

export default useData;
