import "../../styles/SubscribeForm.css";

const SubscribeForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="SubscribeForm" onSubmit={onSubmit} autoComplete="off">
      <input
        type="email"
        name="SubscribeMail"
        id="SubscribeMail"
        placeholder="example@domen.com"
      />
      <input type="submit" />
    </form>
  );
};

export default SubscribeForm;
