import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function MuiTabsPage() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>/mui/navigation/tabs</h1>
      <Tabs value={value} onChange={(e, newVal) => setValue(newVal)}>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
    </div>
  );
}
