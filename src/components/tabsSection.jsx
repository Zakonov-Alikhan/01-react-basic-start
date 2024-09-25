import Button from "./button/button";

export default function TabsSectoin({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActiv={active === "main"} onClick={() => onChange("main")}>
        Home
      </Button>
      <Button
        isActiv={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Feedback
      </Button>
    </section>
  );
}
