import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import DisclaimerPage from "./DisclaimerPage";

const PATH = "/disclaimer";
const TITLE = "Sobha Park City Disclaimer | Project Information & Buyer Guidance";
const DESCRIPTION =
  "Read the Sobha Park City disclaimer for reported Hennur Main Road project details, indicative prices and plans, RERA checks, possession timelines and buyer due diligence.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City disclaimer",
    "Sobha Park City project disclaimer",
    "Sobha Park City Hennur Main Road information",
    "Sobha Park City price disclaimer",
    "Sobha Park City RERA status verification",
    "Sobha Park City project details and buyer guidance",
    "Sobha Park City plans and possession information",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Sobha Park City Disclaimer",
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
