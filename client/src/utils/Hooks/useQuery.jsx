import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export { useQuery };