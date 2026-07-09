import { useState } from "react";
import { createPortal } from "react-dom";
import CProgramming from "../assets/images/CProgramming.png";
import CppProgramming from "../assets/images/CppProgramming.png";
import PythonInfosys from "../assets/images/PythonInfosys.png";
import PandasKaggle from "../assets/images/PandasKaggle.png";
import dsaCcpp from "../assets/images/dsaCcpp.png";
import PythonGL from "../assets/images/PythonGL.png";
import JavaProgramming from "../assets/images/JavaProgramming.png";
import SQL from "../assets/images/SQL.png";
import TataForage from "../assets/images/TataForage.png";
import IBM from "../assets/images/IBM.png";
import Networking from "../assets/images/Networking.png";
import Linguaskills from "../assets/images/Linguaskills.png";
import AWSCP from "../assets/images/AWSCP.png";

const certificationsList = [
  {
    title: "C Programming for Beginners",
    issuer: "Udemy",
    date: "Jan 2024",
    image: CProgramming,
  },
  {
    title: "C++ Beginner to Adavnced",
    issuer: "Udemy",
    date: "Apr 2024",
    image: CppProgramming,
  },
  {
    title: "Python Basics",
    issuer: "Infosys Springboard",
    date: "May 2024",
    image: PythonInfosys,
  },
  {
    title: "Pandas",
    issuer: "Kaggle",
    date: "Jun 2024",
    image: PandasKaggle,
  },
  {
    title: "DSA using C & C++",
    issuer: "Udemy",
    date: "Jun 2024",
    image: dsaCcpp,
  },
  {
    title: "Python Matplotlib",
    issuer: "Great Learning",
    date: "Jun 2024",
    image: PythonGL,
  },
  {
    title: "Java Programming",
    issuer: "Udemy",
    date: "Nov 2024",
    image: JavaProgramming,
  },
  {
    title: "SQL basics",
    issuer: "Skill Rack",
    date: "Feb 2025",
    image: SQL,
  },
  {
    title: "Data Visualization",
    issuer: "TATA Forage",
    date: "May 2025",
    image: TataForage,
  },
  {
    title: "IBM data analytics",
    issuer: "IBM",
    date: "Jul 2025",
    image: IBM,
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Oct 2025",
    image: Networking,
  },
  {
    title: "Linguaskills",
    issuer: "Cambridge English",
    date: "Apr 2026",
    image: Linguaskills,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "AWS",
    date: "Jun 2026",
    image: AWSCP,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certificationsList[0] | null>(null);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-3xl mx-auto px-4 md:px-0 py-8 select-none relative">
      {/* Scrapbook Doodles */}
      <svg className="absolute -top-6 -right-6 w-24 h-24 text-[#6F5E53]/25 transform rotate-6 pointer-events-none select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="45" r="22" fill="currentColor" fillOpacity="0.05" strokeDasharray="3 2"/>
        <path d="M42 63 L35 85 L50 78 L65 85 L58 63" fill="currentColor" fillOpacity="0.1"/>
        <path d="M45 40 L50 32 L55 40 L63 45 L55 50 L50 58 L45 50 L37 45 Z" fill="currentColor" fillOpacity="0.1"/>
      </svg>

      <h2 className="text-3xl font-bold text-[#1E1B18] mb-8 flex items-center gap-3">
        <span className="text-[#6F5E53]">05.</span> Certifications
      </h2>

      <p className="text-[#4F4A45] mb-6 text-sm md:text-base font-light">
        Click on any certificate to view the credential details and verification document.
      </p>

      {/* Certification List */}
      <div className="space-y-4">
        {certificationsList.map((cert) => (
          <button
            key={cert.title}
            onClick={() => setSelectedCert(cert)}
            className="w-full text-left flex justify-between items-center p-4 bg-white/40 border border-[#E6DFD5] rounded-xl hover:bg-white/70 hover:border-[#6F5E53] hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            <div>
              <h3 className="font-bold text-[#1E1B18] group-hover:text-[#6F5E53] transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-xs md:text-sm text-[#9B938B]">
                Issued by {cert.issuer} • {cert.date}
              </p>
            </div>

            {/* Action Arrow Icon */}
            <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#E6DFD5] flex items-center justify-center text-[#6F5E53] group-hover:bg-[#E6B800] group-hover:text-[#1E1B18] group-hover:border-[#1E1B18] transition-all duration-300">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#FAF6F0] border border-[#E6DFD5] w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl p-6 relative flex flex-col items-center gap-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-[#E6DFD5] flex items-center justify-center text-[#4F4A45] hover:bg-[#1E1B18] hover:text-white hover:border-[#1E1B18] transition-all duration-200 cursor-pointer z-10"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-center text-[#1E1B18] mt-2 px-8 flex-shrink-0">
              {selectedCert.title}
            </h3>

            <p className="text-xs md:text-sm text-[#6F5E53] -mt-2 flex-shrink-0">
              Credential Issuer: {selectedCert.issuer}
            </p>

            {/* Certificate Image Frame */}
            <div className="w-full flex-1 min-h-0 flex items-center justify-center bg-white border border-[#E6DFD5] rounded-xl p-3 shadow-inner mt-2 overflow-hidden">
              <img
                src={selectedCert.image}
                alt="Certificate Document"
                className="max-w-full max-h-full object-contain rounded-lg border border-[#FAF6F0]"
              />
            </div>

            <p className="text-xs text-[#9B938B] mt-1 text-center font-mono flex-shrink-0">
              Signed & Verified • {selectedCert.date}
            </p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}