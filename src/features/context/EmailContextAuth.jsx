import { createContext, useContext, useState } from "react";

const EmailContext = createContext();

function EmailProviderAuth({ children }) {
  const [email, setEmail] = useState(null);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
}

function useEmailAuth() {
  const context = useContext(EmailContext);
  if (context === undefined)
    throw new Error("EmailContextAuth was used outside of Email Provider");
  return context;
}

export { useEmailAuth, EmailProviderAuth };
