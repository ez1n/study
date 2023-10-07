import { logout } from "../actions/auth";

export default function HomeScreen() {
  return (
    <main>
      <h1>메인페이지 </h1>
      <form action={logout}>
        <button type="submit">로그아웃</button>
      </form>
    </main>
  );
}
