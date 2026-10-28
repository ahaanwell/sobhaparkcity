import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

const PATH = "/privacy-policy";
const TITLE = "Sobha Parkcity Privacy Policy | Enquiry Data & Privacy Choices";
const DESCRIPTION =
  "Read how SobhaParkcity.com handles contact details submitted for Sobha Parkcity enquiries, including how information is used, shared with service providers, and how to make a privacy request.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parkcity privacy policy",
    "Sobha Parkcity enquiry privacy",
    "Sobha Parkcity contact form data",
    "SobhaParkcity.com privacy policy",
    "Sobha Parkcity personal information requests",
    "Sobha Parkcity data use and sharing",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Sobha Parkcity Privacy Policy",
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
