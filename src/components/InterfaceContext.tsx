import { createContext, useContext, useState, ReactNode } from "react";

interface InterfaceContextType {
  isNotifyOpen: boolean;
  setIsNotifyOpen: (open: boolean) => void;
  toggleNotify: () => void;
}

const InterfaceContext = createContext<InterfaceContextType | undefined>(
  undefined,
);

export function InterfaceProvider({ children }: { children: ReactNode }) {
  const [isNotifyOpen, setIsNotifyOpen] = useState(true);

  const toggleNotify = () => setIsNotifyOpen((prev) => !prev);

  return (
    <InterfaceContext.Provider
      value={{ isNotifyOpen, setIsNotifyOpen, toggleNotify }}
    >
      {children}
    </InterfaceContext.Provider>
  );
}

export function useInterface() {
  const context = useContext(InterfaceContext);
  if (!context) throw new Error("useUI deve ser usado dentro de um UIProvider");
  return context;
}
