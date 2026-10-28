export const FAQS = [
  [
    "Where is Sobha Park City located?",
    "Sobha Park City is an upcoming residential project located on Hennur Main Road in North Bangalore. The location provides access to surrounding residential neighbourhoods, educational institutions, healthcare facilities, shopping destinations, and major roads connecting different parts of the city.",
  ],
  [
    "Who is the developer of Sobha Park City?",
    "Sobha Park City is associated with Sobha Group, a real estate developer known for residential and commercial developments. Buyers should verify the project's official developer details and approvals through the relevant documentation before making a purchase decision.",
  ],
  [
    "What is the total land area of Sobha Park City?",
    "The proposed development is reported to cover approximately 50 acres. Buyers should confirm the final land area and approved site plan through official project documents.",
  ],
  [
    "What types of apartments are available at Sobha Park City?",
    "The proposed apartment configurations include 1 BHK, 2 BHK, 3 BHK, and 4 BHK homes. The availability, layouts, and final specifications of each configuration should be confirmed with the developer.",
  ],
  [
    "What is the size of apartments at Sobha Park City?",
    "The reported apartment sizes include approximately 721 sq. ft. for a 1 BHK, 1,200 sq. ft. for a 2 BHK, 1,600–1,900 sq. ft. for a 3 BHK, and 2,500 sq. ft. for a 4 BHK. These figures should be checked against the final approved floor plans.",
  ],
  [
    "What is the starting price of Sobha Park City?",
    "The starting price of Sobha Park City has not been independently confirmed. The reported indicative prices for some larger configurations should be treated as preliminary information until an official price list is available. Buyers should also check applicable taxes, registration charges, parking fees, and other costs.",
  ],
  [
    "Is Sobha Park City suitable for families?",
    "Sobha Park City may be considered by families looking for apartments in North Bangalore. When assessing suitability, buyers should compare apartment layouts, bedroom sizes, access to schools and hospitals, commuting requirements, and the availability of everyday services near Hennur Main Road.",
  ],
  [
    "Are there schools near Sobha Park City?",
    "Schools can be found in and around Hennur, Kothanur, Byrathi, and Kannuru. Parents can compare institutions based on curriculum, grade availability, admission requirements, transport facilities, and actual travel time from the project's entrance.",
  ],
  [
    "Which hospitals are located near Sobha Park City?",
    "Healthcare facilities are available around Hennur Main Road and neighbouring areas such as Kothanur and Byrathi. Residents can evaluate hospitals based on their medical specialities, diagnostic facilities, emergency services, and travel time. Current services should be confirmed directly with each provider.",
  ],
  [
    "Which malls and shopping centres are near Sobha Park City?",
    "Shopping options in the wider area include local retail stores on Hennur Road and larger destinations around Thanisandra, Hebbal, Banaswadi, and Yelahanka. Bhartiya Mall of Bengaluru, Elements Mall, and Orion Avenue Mall are examples of destinations buyers may consider when comparing shopping and entertainment options.",
  ],
  [
    "How is the connectivity of Sobha Park City?",
    "Sobha Park City is proposed on Hennur Main Road, which connects with surrounding neighbourhoods in North and North-East Bangalore. Buyers should assess the actual road routes to their workplace, schools, healthcare facilities, and other regular destinations, as travel times depend on traffic conditions and the final project access points.",
  ],
  [
    "Does Sobha Park City have a confirmed RERA registration number?",
    "A confirmed RERA registration number has not been independently established here. Buyers should search the Karnataka Real Estate Regulatory Authority's official records and verify the registered project name, promoter details, approvals, and declared completion schedule before booking.",
  ],
  [
    "What is the possession date of Sobha Park City?",
    "The possession date should be confirmed through official project documentation. Buyers should review the registered completion timeline, applicable agreements, and any updates issued by the developer rather than relying on unverified online estimates.",
  ],
  [
    "What amenities are planned at Sobha Park City?",
    "Available project information has referred to a clubhouse and open spaces, but the complete, approved amenity list has not been independently verified. Buyers should request the official master plan and amenity schedule to understand the planned facilities, their locations, and any applicable maintenance costs.",
  ],
  [
    "Is Sobha Park City worth considering for homebuyers in North Bangalore?",
    "Sobha Park City may be worth evaluating for buyers whose preferred location is Hennur Main Road. A practical assessment should include the total purchase cost, apartment layout, commute, nearby services, project approvals, construction status, and possession timeline. Buyers should compare these factors with other developments in the area before deciding.",
  ],
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto mt-6">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-gray-900 text-center mb-3"
        >
          Frequently Asked Questions About Sobha Park City
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">
          {FAQS.map(([question, answer], index) => (
            <div key={question}>
              <h3 className="text-xl font-bold">
                {index + 1}. {question}
              </h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
