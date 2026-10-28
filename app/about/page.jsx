import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AboutPage from "./AboutPage";

const PATH = "/about";
const TITLE = "About Sobha Park City, Hennur | Project Overview & Details";
const DESCRIPTION =
  "Explore an independent overview of Sobha Park City on Hennur Main Road, North Bangalore, including reported project scale, apartment options, pricing and key buyer checks.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "about Sobha Park City",
    "Sobha Park City Hennur Main Road",
    "Sobha Park City project overview",
    "Sobha Park City apartment configurations",
    "Sobha Park City project details",
    "Sobha Park City reported price",
    "Sobha Park City project status",
    "Sobha Limited Hennur project",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "About Sobha Park City",
  title: TITLE,
  description: DESCRIPTION,
  type: "AboutPage",
  extra: [
    {
      "@type": "Organization",
      name: "Sobha Limited",
      url: "https://www.sobha.com/",
      sameAs: ["https://en.wikipedia.org/wiki/Sobha_(company)"],
    },
  ],
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <AboutPage />
    </>
  );
}
