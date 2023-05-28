"use server"

export default async function Mail() {
  async function sendEmail(formData: FormData) {
    "use server"
    console.log(formData)
  }

  return (
    <div>
      <h1>Welcome to MyApp!</h1>
      <p>Please enter your email address to join our white list:</p>
      <form action={sendEmail}>
        <label>
          Email:
          <input type="email"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

