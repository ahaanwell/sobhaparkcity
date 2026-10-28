/* eslint-disable react/no-unescaped-entities */

export default function TopShoppingSection() {
  return (
    <section
      id="top-shopping"
      aria-labelledby="top-shopping-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="top-shopping-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Top Malls and Shopping Hubs Near Sobha Parkcity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">
            <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/top-shopping-hub.webp"
              alt="Top Shopping"
              loading="lazy"
            />
  <p>
    Sobha Parkcity is an upcoming residential project on Hennur Main Road in North Bangalore. For residents planning to live in this part of the city, nearby shopping centres, supermarkets, retail stores, and malls can be useful for everyday purchases, clothing, home essentials, dining, and entertainment.
  </p>

  <p>
    The Hennur–Kothanur area has local retail outlets and shopping destinations, while larger malls are located around Thanisandra, Hebbal, Banaswadi, and Yelahanka. These options serve different needs, so the most convenient destination depends on the type of shopping, available stores, and travel time.
  </p>

  <h2 className="text-2xl font-bold">Top 10 Malls and Shopping Hubs Near Sobha Parkcity</h2>

  <p>
    The table below lists shopping destinations in and around North Bangalore that residents can consider. Distances and travel times are approximate estimates from the Hennur Main Road locality, not verified measurements from the upcoming project's exact entrance. Actual travel times may vary with traffic and route selection.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Mall / Shopping Hub</th>
          <th className="border border-gray-300 p-3 text-left">Type of Shopping</th>
          <th className="border border-gray-300 p-3 text-left">Approx. Distance from Sobha Parkcity</th>
          <th className="border border-gray-300 p-3 text-left">Approx. Travel Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Decathlon, Hennur Road</td>
          <td className="border border-gray-300 p-3">Sports equipment, activewear, outdoor gear</td>
          <td className="border border-gray-300 p-3">1–3 km</td>
          <td className="border border-gray-300 p-3">5–15 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Vishal Mega Mart, Hennur</td>
          <td className="border border-gray-300 p-3">Clothing, groceries, household essentials</td>
          <td className="border border-gray-300 p-3">2–4 km</td>
          <td className="border border-gray-300 p-3">5–15 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Bhartiya Mall of Bengaluru</td>
          <td className="border border-gray-300 p-3">Fashion, lifestyle stores, dining, entertainment</td>
          <td className="border border-gray-300 p-3">3–6 km</td>
          <td className="border border-gray-300 p-3">10–25 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Elements Mall</td>
          <td className="border border-gray-300 p-3">Retail stores, dining, cinema and leisure</td>
          <td className="border border-gray-300 p-3">5–7 km</td>
          <td className="border border-gray-300 p-3">15–25 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">D-Mart, North Bengaluru area</td>
          <td className="border border-gray-300 p-3">Groceries and household shopping</td>
          <td className="border border-gray-300 p-3">5–8 km</td>
          <td className="border border-gray-300 p-3">15–30 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Esteem Mall, Hebbal</td>
          <td className="border border-gray-300 p-3">Retail outlets, food and beverage businesses</td>
          <td className="border border-gray-300 p-3">8–11 km</td>
          <td className="border border-gray-300 p-3">20–35 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Phoenix Mall of Asia</td>
          <td className="border border-gray-300 p-3">Fashion, lifestyle, dining and entertainment</td>
          <td className="border border-gray-300 p-3">9–12 km</td>
          <td className="border border-gray-300 p-3">25–40 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">The Galleria Mall, Yelahanka</td>
          <td className="border border-gray-300 p-3">Shopping, food and cinema</td>
          <td className="border border-gray-300 p-3">10–13 km</td>
          <td className="border border-gray-300 p-3">25–40 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Orion Avenue Mall, Banaswadi</td>
          <td className="border border-gray-300 p-3">Fashion, electronics, dining and cinema</td>
          <td className="border border-gray-300 p-3">8–11 km</td>
          <td className="border border-gray-300 p-3">20–35 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Orion East Mall, Banaswadi area</td>
          <td className="border border-gray-300 p-3">Retail shopping and dining</td>
          <td className="border border-gray-300 p-3">8–12 km</td>
          <td className="border border-gray-300 p-3">20–35 minutes</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      </div>
    </section>
  );
}