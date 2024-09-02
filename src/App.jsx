import "@mantine/core/styles.css";
import { useState, useEffect } from "react";

import { MantineProvider, AppShell } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import TodomaxHeader from "./components/TodomaxHeader";
import TodomaxNavbar from "./components/TodomaxNavbar";
import TodomaxAside from "./components/TodomaxAside";
import TodomaxMain from "./components/TodomaxMain";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log("Fetched result:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data); // Log updated data state
  }, [data]); // Trigger this effect when `data` changes

  return (
    <>
      <MantineProvider>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <AppShell
            layout="default"
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            aside={{
              width: 300,
              breakpoint: "md",
              collapsed: { desktop: false, mobile: true },
            }}
            padding="md"
          >
            <TodomaxHeader
              mobileBurgerOpened={opened}
              mobileBurgerToggle={toggle}
              data={data}
            ></TodomaxHeader>

            <TodomaxNavbar></TodomaxNavbar>

            <TodomaxAside></TodomaxAside>

            <TodomaxMain data={data}></TodomaxMain>
          </AppShell>
        )}
      </MantineProvider>
    </>
  );
}

export default App;
