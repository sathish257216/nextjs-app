export default function Page() {

  const data = {
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874"
    }
  };

  return (
    <div className="flex flex-col p-5">
      <h1>Address:</h1>
      <br/>
      <span>{data.address.street}</span>
      <span>{data.address.city}</span>
      <span>{data.address.zipcode}</span>
    </div>
  );
}