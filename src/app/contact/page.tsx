export default async function Page() {

  const res = await fetch('http://localhost:3000/api/contact', { method: 'GET' });
  const data = await res.json();

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