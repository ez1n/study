"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  try {
    await fetch("https://reqres.in/api/login.json", {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    cookies().set("auth", "true");
  } catch (e) {
    throw new Error("로그인 할 수 없습니다.");
  }
}

export async function logout() {
  cookies().delete("auth");
}
