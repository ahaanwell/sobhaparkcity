import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AboutPage from "./AboutPage";

const PATH = "/about";
const TITLE = "About Sobha Parkcity, Hennur | Project Overview & Details";
const DESCRIPTION =
  "Explore an independent overview of Sobha Parkcity on Hennur Main Road, North Bangalore, including reported project scale, apartment options, pricing and key buyer checks.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "about Sobha Parkcity",
    "Sobha Parkcity Hennur Main Road",
    "Sobha Parkcity project overview",
    "Sobha Parkcity apartment configurations",
    "Sobha Parkcity project details",
    "Sobha Parkcity reported price",
    "Sobha Parkcity project status",
    "Sobha Limited Hennur project",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "About Sobha Parkcity",
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
