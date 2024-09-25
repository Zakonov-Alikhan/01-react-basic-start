import Header from "./components/header";
import TeachingSection from "./components/teachingSection";
import OurDefereces from "./components/ourDeferences";
import IntroSection from "./components/introSection";
import TabsSectoin from "./components/TabsSection";
import FeedBackSection from "./components/feedBackSection";
import { useState } from "react";
import Privet from "./components/privet";

export default function App() {
  const [tab, setTab] = useState("main");
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSectoin active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <OurDefereces />
            <Privet>Lo</Privet>
          </>
        )}
        {tab === "feedback" && <FeedBackSection />}
      </main>
    </>
  );
}
