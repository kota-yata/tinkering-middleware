export default function SiteHomePage({
  params,
}: {
  params: { domain: string };
}) {
  const domain = decodeURIComponent(params.domain);
  return (
    <>
      <div>you are here from {domain}</div>
    </>
  );
}
