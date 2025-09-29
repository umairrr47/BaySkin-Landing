import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Logo from "../src/assets/logo1.png"
import Anti from "../src/assets/anti-aging.webp"
import Doc from "../src/assets/doc2.jpeg"
import R1 from "../src/assets/rr1.jpg"
import R2 from "../src/assets/rr3.jpeg"
import R3 from "../src/assets/r7.jpeg"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[60vh]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Expert Skin & Laser Care in Lajpat Nagar
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl">
                  Doctor-led treatments for laser hair removal, Hydrafacial,
                  acne & anti-ageing — personalized plans with proven results.
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#book"
                    className="inline-block px-5 py-3 rounded-md bg-[var(--primary-color)] text-white font-medium"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href="#services"
                    className="inline-block px-5 py-3 rounded-md border border-gray-200"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  Call:{" "}
                  <a
                    href="tel:+919810991225"
                    className="text-[var(--primary-color)]"
                  >
                    +91-9810991225
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <div className="w-full max-w-md h-64 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={Anti}
                    alt="Clinic"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Our Services</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Comprehensive dermatology & aesthetic treatments led by experienced doctors.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Laser Hair Removal", desc: "Long-lasting hair reduction with advanced lasers." },
                { title: "HydraFacial", desc: "Deep cleansing, exfoliation & hydration." },
                { title: "Acne & Scarring", desc: "Targeted treatments for clear skin." },
                { title: "Anti-Ageing", desc: "Botox, fillers & rejuvenation." },
                { title: "PRP Therapy", desc: "Natural collagen stimulation." },
                { title: "Chemical Peels", desc: "Even skin tone and texture." },
              ].map((s) => (
                <motion.div
                  key={s.title}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-xl shadow-sm border"
                >
                  <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center text-xl">
                    💠
                  </div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                  <div className="mt-4">
                    <a
                      href="#book"
                      className="inline-block px-4 py-2 rounded-md text-[var(--primary-color)] border border-[var(--primary-color)]"
                    >
                      Book Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={Doc}
              alt="Clinic interior"
              className="rounded-xl shadow-md w-full object-cover h-64"
            />
            <div>
              <h3 className="text-2xl font-bold">About Bayskin</h3>
              <p className="mt-4 text-gray-600">
                Bayskin is a doctor-led dermatology & laser clinic in Lajpat Nagar, New Delhi. We combine medical expertise with advanced technology to deliver safe, effective results.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-xl font-semibold">2000+</div>
                  <div className="text-sm text-gray-500">Patients Treated</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-xl font-semibold">10+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Before & After</h2>
            <p className="text-gray-600 mt-2">Real patient results (representative images).</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { before: "/gallery-before-1.jpg", after: "/gallery-after-1.jpg" },
                { before: "/gallery-before-2.jpg", after: "/gallery-after-2.jpg" },
                { before: "/gallery-before-3.jpg", after: "/gallery-after-3.jpg" },
              ].map((pair, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow border flex"
                >
                  <div className="w-1/2 border-r">
                    <img src={pair.before} alt={`Before ${i + 1}`} className="w-full h-40 object-cover" />
                    <p className="text-center text-xs bg-gray-100 py-1">Before</p>
                  </div>
                  <div className="w-1/2">
                    <img src={pair.after} alt={`After ${i + 1}`} className="w-full h-40 object-cover" />
                    <p className="text-center text-xs bg-gray-100 py-1">After</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold">What Our Patients Say</h2>
            <p className="text-gray-600 mt-2">
              Real stories from people who trusted Bayskin.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Riya S.",
                  img: R1,
                  feedback:
                    "I had laser hair removal sessions at Bayskin and the results are amazing. The clinic is very hygienic and the staff makes you feel super comfortable. Highly recommend!"
                },
                {
                  name: "Ankit M.",
                  img: R3,
                  feedback:
                    "Dr. explained everything clearly before my acne treatment. After 3 months, my skin looks much clearer and I feel confident again. Thank you Bayskin!"
                },
                {
                  name: "Pooja K.",
                  img: R2,
                  feedback:
                    "I visited for pigmentation issues. The treatment plan was tailored for me and I could see visible improvement in just a few weeks. Very professional team!"
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic">"{t.feedback}"</p>
                  <h4 className="mt-4 font-semibold text-[var(--primary-color)]">{t.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Contact / Booking */}
        <section id="contact" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="text-gray-600 mt-2">
                Block D, Dayanand Colony,
                Lajpat Nagar,
                New Delhi, Delhi 110024
              </p>
              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+919810991225"
                  className="text-[var(--primary-color)]"
                >
                  +91-9810991225
                </a>
              </p>
              <div className="mt-6">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7008.597526723606!2d77.245829!3d28.56079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3005ac99691%3A0xda6d1c25f8584661!2sBayskin%20%7C%20Best%20Laser%20Treatment%20and%20Skin%20Clinic%20in%20Lajpat%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1759168794596!5m2!1sen!2sin"
                  className="w-full h-64 rounded-lg border"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

            <div id="book" className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Book a Consultation</h4>
              <form className="mt-4 grid grid-cols-1 gap-3">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Service of interest</option>
                  <option>Laser Hair Removal</option>
                  <option>HydraFacial</option>
                </select>
                <textarea
                  placeholder="Message (optional)"
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                />
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919810991225?text=Hi%20I%20want%20to%20book%20a%20consultation%20at%20Bayskin",
                      "_blank"
                    )
                  }
                  className="mt-2 inline-block w-full px-4 py-3 rounded-md bg-[var(--primary-color)] text-white"
                >
                  Request Callback
                </button>

              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Logo + clinic info */}
            <div className="flex items-start gap-3">
              <img
                src={Logo}
                alt="Bayskin Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
              </div>
            </div>

            {/* Address */}
            <div className="text-center text-sm text-gray-600">
              <p>
                Block D, Dayanand Colony, Lajpat Nagar,
                <br />
                New Delhi, 110024
              </p>
              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+919810991225"
                  className="text-[var(--primary-color)]"
                >
                  +91-9810991225
                </a>
              </p>
            </div>

            {/* Links + copyright */}
            <div className="text-right text-sm text-gray-500">
              <nav className="flex gap-4 justify-end mb-2">
                <a href="#services" className="text-gray-600">
                  Services
                </a>
                <a href="#about" className="text-gray-600">
                  About
                </a>
                <a href="#contact" className="text-gray-600">
                  Contact
                </a>
              </nav>
              © Bayskin 2025
            </div>
          </div>
        </footer>
      </main>

      {/* Global styles */}
      <style jsx>{`
        :root {
          --primary-color: #0ea5a4;
        }
      `}</style>
    </div>
  );
}
