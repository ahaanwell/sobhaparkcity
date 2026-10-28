import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

const PATH = "/privacy-policy";
const TITLE = "Sobha Park City Privacy Policy | Enquiry Data & Privacy Choices";
const DESCRIPTION =
  "Read how SobhaParkcity.com handles contact details submitted for Sobha Park City enquiries, including how information is used, shared with service providers, and how to make a privacy request.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City privacy policy",
    "Sobha Park City enquiry privacy",
    "Sobha Park City contact form data",
    "SobhaParkcity.com privacy policy",
    "Sobha Park City personal information requests",
    "Sobha Park City data use and sharing",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Sobha Park City Privacy Policy",
  title: TITLE,
  description: DESCRIPTION,
  withProject: false,
  dateModified: "2026-10-27",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <PrivacyPolicyPage />
    </>
  );
}
