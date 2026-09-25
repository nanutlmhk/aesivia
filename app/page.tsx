import { getChatGPTUser } from "./chatgpt-auth";
import { LandingExperience } from "./landing-experience";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await getChatGPTUser();
  return <LandingExperience signedIn={Boolean(user)} />;
}
