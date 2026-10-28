import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const LAST_UPDATED = "28 October 2026";

const collectedDetails = [
  ["Contact details", "Name, mobile number and, where requested, email address.", "Submitted in an enquiry, site-visit, brochure or cost-sheet form."],
  ["Enquiry information", "The project details or materials you ask us about.", "Provided when you send a form, call, or contact us through a linked channel."],
  ["Basic technical information", "Information such as browser, device and connection data may be recorded by site infrastructure.", "Generated when you access the website; handling depends on the relevant hosting and service providers."],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white px-4 md:px-0">
      <PageHero title="Privacy Policy" />
      <article className="max-w-5xl mx-auto py-10 text-gray-800">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Sobha Park City Website Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-5 leading-7">
            This policy explains how{" "}
            <IntLink href="/"><strong>SobhaParkcity.com</strong></IntLink>{" "}
            handles personal information submitted through enquiries about{" "}
            <strong>Sobha Park City</strong>, a proposed residential development
            on <strong>Hennur Main Road in North Bangalore</strong>. This is an
            independent project-information website, not the official website
            of Sobha Limited or Sobha Group. The policy describes the
            information forms request, how enquiry details are used and
            shared, and how you can contact us about your information.
          </p>
        </header>

        <section
          aria-labelledby="privacy-summary"
          className="mb-10 border-l-4 border-primary bg-gray-50 px-5 py-4"
        >
          <h2 id="privacy-summary" className="text-xl font-semibold text-gray-900">
            Privacy summary
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Forms request contact details so we can respond to your enquiry.</li>
            <li>Form submissions are sent to a lead-handling service and may be passed to the relevant project sales team.</li>
            <li>We do not sell or rent enquiry details for advertising or data-broker lists.</li>
            <li>You can ask questions, request corrections, or ask us to stop follow-up through the <IntLink href="/contact"><strong>contact page</strong></IntLink>.</li>
          </ul>
        </section>

        <section aria-labelledby="information-collected" className="mb-10">
          <h2 id="information-collected" className="text-xl md:text-2xl font-semibold mb-4">
            Information collected through this website
          </h2>
          <p className="mb-4 leading-7">
            The details collected depend on the form or contact option you use
            and the information you choose to provide. Enquiry forms request
            details such as your name and mobile number; some forms also
            request an email address. Please do not submit passwords, payment
            card numbers, identity documents or other sensitive information
            through a project enquiry form.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-3 font-semibold">Information</th>
                  <th className="border border-gray-300 px-4 py-3 font-semibold">Examples</th>
                  <th className="border border-gray-300 px-4 py-3 font-semibold">How it is provided</th>
                </tr>
              </thead>
              <tbody>
                {collectedDetails.map(([type, examples, source]) => (
                  <tr key={type}>
                    <th scope="row" className="border border-gray-300 px-4 py-3 align-top font-medium">{type}</th>
                    <td className="border border-gray-300 px-4 py-3 align-top">{examples}</td>
                    <td className="border border-gray-300 px-4 py-3 align-top">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="how-we-use" className="mb-10">
          <h2 id="how-we-use" className="text-xl md:text-2xl font-semibold mb-4">
            How enquiry information is used
          </h2>
          <p className="leading-7">
            We use the information you submit to handle the request you made.
            For example, an enquiry may be used to respond to questions or
            provide requested <IntLink href="/price"><strong>price information</strong></IntLink>,{" "}
            <IntLink href="/floor-plan"><strong>floor plans</strong></IntLink>,
            a brochure or cost sheet, or to discuss a site visit. Contact
            details may also be used for follow-up about that enquiry by phone,
            text message, email or WhatsApp, as applicable. You can ask us to
            stop follow-up using the <IntLink href="/contact"><strong>contact page</strong></IntLink>.
          </p>
        </section>

        <section aria-labelledby="sharing" className="mb-10">
          <h2 id="sharing" className="text-xl md:text-2xl font-semibold mb-4">
            Who may receive enquiry details
          </h2>
          <p className="mb-4 leading-7">
            Website enquiry forms submit information to the lead-handling
            service at <strong>m2nserver.online</strong>. Details may then be
            shared with the relevant project sales team so it can respond to
            your request. Service providers that support website hosting,
            communications or form processing may handle information as
            necessary to provide those services.
          </p>
          <p className="leading-7">
            <strong>We do not sell or rent your personal information</strong>{" "}
            to advertisers or data brokers. Information may also be disclosed
            if required by applicable law or a valid legal request. The
            receiving provider or sales team may handle information under its
            own practices; review its privacy information when available.
          </p>
        </section>

        <section aria-labelledby="cookies-third-party" className="mb-10">
          <h2 id="cookies-third-party" className="text-xl md:text-2xl font-semibold mb-4">
            Cookies, maps and third-party services
          </h2>
          <p className="mb-4 leading-7">
            Some site features may rely on third-party services, including
            embedded maps or links to WhatsApp. When you load or use those
            features, the relevant provider may receive technical or usage
            information under its own terms and privacy policy. We do not
            control how an external provider processes information.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Review the{" "}
              <ExtLink href="https://policies.google.com/privacy">
                Google Privacy Policy
              </ExtLink>{" "}
              for Google services such as maps.
            </li>
            <li>
              Review the{" "}
              <ExtLink href="https://www.whatsapp.com/legal/privacy-policy">
                WhatsApp Privacy Policy
              </ExtLink>{" "}
              if you choose to contact us through WhatsApp.
            </li>
          </ul>
          <p className="mt-4 leading-7">
            Browser settings allow you to review or clear cookies and limit
            some storage. Blocking certain third-party features may affect how
            they work on the page.
          </p>
        </section>

        <section aria-labelledby="retention-security" className="mb-10">
          <h2 id="retention-security" className="text-xl md:text-2xl font-semibold mb-4">
            Data retention and security
          </h2>
          <p className="mb-4 leading-7">
            Enquiry information is retained for as long as needed to respond
            and manage the enquiry, meet applicable obligations, or resolve
            related matters. Actual retention periods can depend on the
            systems and service providers involved. Where information is no
            longer required, it should be deleted or otherwise handled in
            accordance with applicable requirements.
          </p>
          <p className="leading-7">
            Information is transmitted to the website’s form-processing
            service over HTTPS. No website, transmission method or storage
            system can be guaranteed completely secure. Avoid sending
            sensitive personal, financial or identity information through
            these forms.
          </p>
        </section>

        <section aria-labelledby="your-choices" className="mb-10">
          <h2 id="your-choices" className="text-xl md:text-2xl font-semibold mb-4">
            Your choices and privacy requests
          </h2>
          <p className="mb-4 leading-7">
            Depending on applicable law, you may ask us about the personal
            information connected with your enquiry, request correction of
            inaccurate details, or ask us to stop follow-up and delete
            information that no longer needs to be retained. We may need to
            verify your request and may retain information where a legal
            obligation or legitimate operational need requires it.
          </p>
          <p className="leading-7">
            To make a request, use the{" "}
            <IntLink href="/contact"><strong>contact page</strong></IntLink>{" "}
            and include enough detail for us to identify the enquiry. Do not
            include passwords, full payment details or identity documents in
            your request.
          </p>
        </section>

        <section aria-labelledby="children" className="mb-10">
          <h2 id="children" className="text-xl md:text-2xl font-semibold mb-4">
            Children’s information
          </h2>
          <p className="leading-7">
            This website and its property enquiries are intended for adults
            making or researching a real-estate decision. Do not submit a
            child’s personal information through the enquiry forms. If you
            believe a child’s information has been submitted, contact us so
            we can review the request.
          </p>
        </section>

        <section aria-labelledby="external-links" className="mb-10">
          <h2 id="external-links" className="text-xl md:text-2xl font-semibold mb-4">
            Links to other websites
          </h2>
          <p className="leading-7">
            Pages on this website may link to the developer, government
            portals and other third-party websites. Their privacy practices
            and content are controlled by those organisations, not by this
            website. Check the relevant policies before submitting
            information to an external site.
          </p>
        </section>

        <section aria-labelledby="policy-updates" className="mb-10">
          <h2 id="policy-updates" className="text-xl md:text-2xl font-semibold mb-4">
            Changes to this privacy policy
          </h2>
          <p className="leading-7">
            We may revise this policy when website practices or applicable
            requirements change. The latest version and its update date will
            be posted on this page. Please review it periodically if you
            continue to use the site or submit an enquiry.
          </p>
        </section>

        <section aria-labelledby="privacy-contact">
          <h2 id="privacy-contact" className="text-xl md:text-2xl font-semibold mb-4">
            Questions about privacy
          </h2>
          <p className="leading-7">
            If you have a question about this policy, an enquiry you submitted,
            or a privacy request, contact us through the{" "}
            <IntLink href="/contact"><strong>contact page</strong></IntLink>.
            For information about the project itself, see the{" "}
            <IntLink href="/about"><strong>Sobha Park City overview</strong></IntLink>{" "}
            or the <IntLink href="/disclaimer"><strong>project disclaimer</strong></IntLink>.
          </p>
        </section>
      </article>
    </main>
  );
}
