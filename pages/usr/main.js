import LoggedInLayout from "layouts/logged-in/MainLayout";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();
  console.log("main rerendered");
  return (
    <LoggedInLayout>
      <button onClick={() => {router.push({ query: "hi" })}}>click</button>
    </LoggedInLayout>
  )
}