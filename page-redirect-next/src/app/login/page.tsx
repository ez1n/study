import { login } from "../../actions/auth";

export default function LoginScreen() {
  return (
    <form className="flex flex-col" action={login}>
      <input type="text" name="id" placeholder="id" />
      <input type="password" name="password" placeholder="password" />

      <button type="submit">Login</button>
    </form>
  );
}
