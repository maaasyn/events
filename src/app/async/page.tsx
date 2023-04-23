const getData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();

  // Simulate a slow network
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return data;
};

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
