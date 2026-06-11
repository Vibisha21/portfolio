import { useState } from "react";
import certificateMock from "../assets/images/certificate_mock.png";

const certificationsList = [
  {
    title: "Advanced React & TypeScript Professional",
    issuer: "Tech Academy",
    date: "November 2025",
    image: certificateMock,
  },
  {
    title: "Full-Stack Web Engineering Certificate",
    issuer: "Global Code Alliance",
    date: "July 2025",
    image: certificateMock,
  },
  {
    title: "UI/UX & Interactive Design Specialist",
    issuer: "Creative Hub Institute",
    date: "March 2025",
    image: certificateMock,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certificationsList[0] | null>(null);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-2xl mx-auto px-4 md:px-0 py-8 select-none">
      <h2 className="text-3xl font-bold text-[#1E1B18] mb-8 flex items-center gap-3">
        <span className="text-[#6F5E53]">04.</span> Certifications
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
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#FAF6F0] border border-[#E6DFD5] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl p-6 relative flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-[#E6DFD5] flex items-center justify-center text-[#4F4A45] hover:bg-[#1E1B18] hover:text-white hover:border-[#1E1B18] transition-all duration-200 cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-center text-[#1E1B18] mt-2 px-8">
              {selectedCert.title}
            </h3>
            
            <p className="text-xs md:text-sm text-[#6F5E53] -mt-2">
              Credential Issuer: {selectedCert.issuer}
            </p>

            {/* Certificate Image Frame */}
            <div className="w-full bg-white border border-[#E6DFD5] rounded-xl p-3 shadow-inner mt-2">
              <img
                src={selectedCert.image}
                alt="Certificate Document"
                className="w-full object-contain rounded-lg border border-[#FAF6F0]"
              />
            </div>

            <p className="text-xs text-[#9B938B] mt-1 text-center font-mono">
              Signed & Verified • {selectedCert.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}