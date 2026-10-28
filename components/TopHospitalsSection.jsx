/* eslint-disable react/no-unescaped-entities */

export default function TopHospitalsSection() {
  return (
    <section
      id="top-hospitals"
      aria-labelledby="top-hospitals-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="top-hospitals-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Top Hospitals Near Sobha Park City
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">
            <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/top-hospitals.webp"
              alt="Top Hospitals"
              loading="lazy"
            />
  <p>
    Sobha Park City is an upcoming residential project on Hennur Main Road in North Bangalore. For families considering this location, access to hospitals, diagnostic centres, maternity facilities, and emergency services is an important part of planning everyday life.
  </p>

  <p>
    The Hennur, Kothanur, and Byrathi areas have several healthcare facilities, while larger hospitals are available in nearby parts of North Bengaluru, including Hebbal. The right option depends on the type of care required, available specialists, emergency services, and travel time from home.
  </p>

  <h2 className="text-2xl font-bold">Top 10 Hospitals Near Sobha Park City</h2>

  <p>
    The following list includes hospitals and healthcare centres in and around Hennur Main Road. Distances and travel times are approximate planning estimates for the locality, not verified route measurements from Sobha Park City's exact entrance.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Hospital / Healthcare Centre</th>
          <th className="border border-gray-300 p-3 text-left">Key Services / Focus</th>
          <th className="border border-gray-300 p-3 text-left">Approx. Distance from Sobha Park City</th>
          <th className="border border-gray-300 p-3 text-left">Approx. Travel Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">GoodWell Multi Speciality Hospital</td>
          <td className="border border-gray-300 p-3">Multispeciality care, emergency services, diagnostics</td>
          <td className="border border-gray-300 p-3">3–5 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Avita Hospital</td>
          <td className="border border-gray-300 p-3">General medicine, paediatrics, surgery, urgent care</td>
          <td className="border border-gray-300 p-3">3–5 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Cratis Hospital</td>
          <td className="border border-gray-300 p-3">General and multispeciality healthcare</td>
          <td className="border border-gray-300 p-3">1–3 km</td>
          <td className="border border-gray-300 p-3">5–15 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Ovum Hospitals, Hennur</td>
          <td className="border border-gray-300 p-3">Maternity, gynaecology, fertility and child healthcare</td>
          <td className="border border-gray-300 p-3">2–4 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Sunshine Hospital, Kothanur</td>
          <td className="border border-gray-300 p-3">Multispeciality consultations and hospital care</td>
          <td className="border border-gray-300 p-3">3–5 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Motherhood Hospital, Kothanur</td>
          <td className="border border-gray-300 p-3">Maternity, gynaecology and women's and children's healthcare</td>
          <td className="border border-gray-300 p-3">3–5 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Rainbow Children's Clinic &amp; BirthRight Clinic, Hennur</td>
          <td className="border border-gray-300 p-3">Paediatric, maternity and women's healthcare services</td>
          <td className="border border-gray-300 p-3">2–4 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Bangalore Prime Hospital</td>
          <td className="border border-gray-300 p-3">General and multispeciality healthcare</td>
          <td className="border border-gray-300 p-3">4–7 km</td>
          <td className="border border-gray-300 p-3">15–30 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Motherhood Hospital, Hebbal</td>
          <td className="border border-gray-300 p-3">Maternity, gynaecology, paediatrics and neonatal care</td>
          <td className="border border-gray-300 p-3">8–12 km</td>
          <td className="border border-gray-300 p-3">25–40 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Bangalore Baptist Hospital, Hebbal</td>
          <td className="border border-gray-300 p-3">Multispeciality hospital and emergency care</td>
          <td className="border border-gray-300 p-3">8–12 km</td>
          <td className="border border-gray-300 p-3">25–40 minutes</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      </div>
    </section>
  );
}