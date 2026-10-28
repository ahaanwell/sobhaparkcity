import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import DisclaimerPage from "./DisclaimerPage";

const PATH = "/disclaimer";
const TITLE = "Sobha Parkcity Disclaimer | Project Information & Buyer Guidance";
const DESCRIPTION =
  "Read the Sobha Parkcity disclaimer for reported Hennur Main Road project details, indicative prices and plans, RERA checks, possession timelines and buyer due diligence.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parkcity disclaimer",
    "Sobha Parkcity project disclaimer",
    "Sobha Parkcity Hennur Main Road information",
    "Sobha Parkcity price disclaimer",
    "Sobha Parkcity RERA status verification",
    "Sobha Parkcity project details and buyer guidance",
    "Sobha Parkcity plans and possession information",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Sobha Parkcity Disclaimer",
  title: TITLE,
  description: DESCRIPTION,
  withProject: false,
  dateModified: "2026-10-27",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <DisclaimerPage />
    </>
  );
}
