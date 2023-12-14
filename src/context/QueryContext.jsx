import { createContext, useContext, useState } from "react";

export const QueryContext = createContext();

function QueryProvider({ children }) {
    const [query, setQuery] = useState("");
    return (
        <QueryContext.Provider value={{ query, setQuery }}>
            {children}
        </QueryContext.Provider>
    );
}
function useQueryContext() {
    const context = useContext(QueryContext);
    if (context === "undefined")
        throw new Error("QueryContext is been used outside the QueryProvider");
    return context;
}

export { QueryProvider, useQueryContext };
