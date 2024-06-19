import { useRouter } from "next/router";

export default function SiteHomePage() {
  const router = useRouter();
  return (
    <>
      <div>you are here from {router.query.domain}</div>
    </>
  );
}
