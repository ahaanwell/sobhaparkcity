/* eslint-disable react/no-unescaped-entities */

export default function TopSchoolsSection() {
  return (
    <section
      id="top-schools"
      aria-labelledby="top-schools-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="top-schools-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Top Schools Near Sobha Parkcity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800">
            <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/top-schools.webp"
              alt="Top Schools"
              loading="lazy"
            />
  <p>
    Sobha Parkcity is an upcoming residential project on Hennur Main Road in North Bangalore. For families planning to live in this part of the city, nearby educational institutions are an important consideration when assessing everyday convenience and children's school commute.
  </p>

  <p>
    The wider Hennur area connects to neighbourhoods such as Kothanur, Byrathi, and Kannuru, where families can explore schools offering different educational boards and curricula. The most suitable choice depends on a child's grade, the preferred curriculum, admission availability, school transport, and the time required to travel during school hours.
  </p>

  <h2 className="text-2xl font-bold">Top 10 Schools Near Sobha Parkcity</h2>

  <p>
    The following schools are options to investigate in and around the Hennur Main Road area. Distances and travel times below are indicative estimates, not confirmed measurements from the upcoming project's entrance. They may vary depending on the final project access point, route, and traffic conditions.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">School Name</th>
          <th className="border border-gray-300 p-3 text-left">Board / Curriculum</th>
          <th className="border border-gray-300 p-3 text-left">Distance from Sobha Parkcity (Approx.)</th>
          <th className="border border-gray-300 p-3 text-left">Approx. Travel Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">New Horizon International School</td>
          <td className="border border-gray-300 p-3">CBSE</td>
          <td className="border border-gray-300 p-3">2–4 km</td>
          <td className="border border-gray-300 p-3">10–15 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">VIBGYOR High, Hennur</td>
          <td className="border border-gray-300 p-3">CBSE / CISCE options; confirm campus programme</td>
          <td className="border border-gray-300 p-3">3–5 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Shri Ram Global School, Hennur</td>
          <td className="border border-gray-300 p-3">CBSE</td>
          <td className="border border-gray-300 p-3">3–5 km</td>
          <td className="border border-gray-300 p-3">10–20 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Ekya School, Byrathi</td>
          <td className="border border-gray-300 p-3">ICSE / Cambridge IGCSE</td>
          <td className="border border-gray-300 p-3">4–6 km</td>
          <td className="border border-gray-300 p-3">15–25 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Legacy School Bangalore</td>
          <td className="border border-gray-300 p-3">International curriculum, including Cambridge pathways and IB Diploma Programme</td>
          <td className="border border-gray-300 p-3">3–6 km</td>
          <td className="border border-gray-300 p-3">15–25 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Aadya Academy – The World School</td>
          <td className="border border-gray-300 p-3">ICSE</td>
          <td className="border border-gray-300 p-3">5–7 km</td>
          <td className="border border-gray-300 p-3">15–30 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">H.M.R. International School</td>
          <td className="border border-gray-300 p-3">CBSE</td>
          <td className="border border-gray-300 p-3">5–7 km</td>
          <td className="border border-gray-300 p-3">15–30 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">EuroSchool Hennur</td>
          <td className="border border-gray-300 p-3">CBSE</td>
          <td className="border border-gray-300 p-3">4–6 km</td>
          <td className="border border-gray-300 p-3">15–25 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">ORCHIDS The International School, Hennur Road</td>
          <td className="border border-gray-300 p-3">CBSE</td>
          <td className="border border-gray-300 p-3">4–7 km</td>
          <td className="border border-gray-300 p-3">15–30 minutes</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Bangalore International School</td>
          <td className="border border-gray-300 p-3">International curriculum; confirm current programme</td>
          <td className="border border-gray-300 p-3">4–7 km</td>
          <td className="border border-gray-300 p-3">15–30 minutes</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      </div>
    </section>
  );
}