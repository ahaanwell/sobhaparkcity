import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import ContactPage from "./ContactPage";

const PATH = "/contact";
const TITLE = "Contact Sobha Parkcity | Hennur Project Enquiries";
const DESCRIPTION =
  "Contact us with questions about Sobha Parkcity on Hennur Main Road, North Bangalore. Call or WhatsApp to ask about reported prices, apartment plans and available project information.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parkcity contact",
    "Sobha Parkcity Hennur contact",
    "Sobha Parkcity project enquiry",
    "Sobha Parkcity phone and WhatsApp",
    "Sobha Parkcity price enquiry",
    "Sobha Parkcity floor plan enquiry",
    "Sobha Parkcity site visit information",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Contact",
  title: TITLE,
  description: DESCRIPTION,
  type: "ContactPage",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <ContactPage />
    </>
  );
}
