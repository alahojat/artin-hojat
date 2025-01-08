export const Input = () => {
  return (
    <>
      <fieldset>
        <legend>Get in touch</legend>
        <label htmlFor="">Name</label>
        <input className="input" type="text" />
        <input className="input" type="text" />
        <input className="input" type="text" />
        <section className="flex">
          <button className="button">Send</button>
          <button className="button button-secondary">Cancel</button>
        </section>
      </fieldset>
    </>
  );
};
