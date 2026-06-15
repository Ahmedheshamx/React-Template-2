// HomePage.jsx
import Fetch from "./Fetch.js";

import SearchInput from "./Search.js";

import ContactForm from "./Test.js";

import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchInput search={search} setSearch={setSearch} />
      <Fetch search={search} />
      <ContactForm />
    </div>
  );
}