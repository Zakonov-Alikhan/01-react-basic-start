import { useState } from "react";
import Button from "./button/button";

export default function FeedBackSection() {
  const [form, setForm] = useState({
    name: " ",
    reason: "support",
    hasError: false,
  });
  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("support");
  // const [hasError, setHasError] = useState(false);

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));

    // console.log(event.target.value);
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
  }

  function handleReasonChange(event) {
    setForm((prev) => ({
      ...prev,
      reason: event.target.value,
    }));
  }

  return (
    <section>
      <h1>Обратная связь</h1>

      <form action="#">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: !form.hasError ? null : `1px solid red` }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Reason for report</label>
        <select id="reason" className="control" onChange={handleReasonChange}>
          <option value="error">Error</option>
          <option value="support">Need Support</option>
          <option value="suggest">Suggest</option>
        </select>
        <pre>
          name: {form.name}; <br />
          reason: {form.reason};
        </pre>
        <Button disabled={form.hasError} isActiv={!form.hasError}>
          Submit
        </Button>
      </form>
    </section>
  );
}
