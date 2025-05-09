import { Camera, X } from "lucide-react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { setCookie } from "../../utils/setCookie";
import { getCookie } from "../../utils/getCookie";
import { Link } from 'react-scroll';

export const Navigation = ({ namaGerai }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const geraiSelected = getCookie("geraiSelected");
  const listGerai = [
    "BEKASI",
    "TANGERANG",
    "JAKSEL",
    "DEPOK",
    "CIKARANG",
    "BOGOR",
    "JAKTIM",
  ];

  function handlePilihGerai(e: any) {
    namaGerai(e.target.value);
    setCookie("geraiSelected", e.target.value);
  }
  
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-2 tablet:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center tablet:gap-2 gap-1">
            <img
              src="./LOGO%20REMAKE.png"
              className="tablet:w-10 tablet:h-10 w-6 h-6"
              alt=""
            />
            <h1 className="text-[1.05rem] tablet:text-3xl font-bold text-orange-600">
              GG Suspension
            </h1>
          </div>
          <div className="flex gap-1 tablet:gap-5">
            <div className="flex items-center text-xs tablet:text-lg">
              <FaLocationDot className="text-red-500" />
              <select
                name="location"
                onChange={handlePilihGerai}
                className="w-[6.8em] tablet:w-full"
                id=""
                value={geraiSelected?.toUpperCase()}
              >
                <option value="">Pilih Gerai</option>
                {listGerai.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <p className="text-xs font-semibold tablet:text-lg p-1  bg-orange-500 rounded-md text-white">
                    Menu
                  </p>
                  // <Menu className="h-6 w-6 bg-orange-500 rounded-md text-white tablet:bg-white tablet:text-black tablet:h-8 tablet:w-8" />
                )}
              </button>
            </div>
          </div>
          {/* <span className='flex tablet:gap-3 gap-1'>
            <a className="hover:cursor-pointer" href="https://www.instagram.com/officialggsuspension/">
              <FaInstagram className='bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white tablet:text-4xl text-2xl rounded-full p-1'/>
            </Lin>
            <a className="hover:cursor-pointer" href="https://www.tiktok.com/@officialggsuspension">
            <PiTiktokLogoBold className='hover:cursor-pointer bg-gradient-to-br from-[#69C9D0] to-[#EE1D52] text-white tablet:text-4xl text-2xl rounded-full p-1'/>
            </Lin>              
            </span> */}
        </div>
        {isMenuOpen && (
          <div className="">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="about" smooth={true} duration={500} 
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Tentang Kami
              </Link>
              <Link to="services" smooth={true} duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Layanan
              </Link>
              <Link smooth={true} duration={500} to="harga"
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Cek Harga
              </Link>
              <Link smooth={true} duration={500} to="testimoni"
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Testimoni
              </Link>
              <Link smooth={true} duration={500} to="article"
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Artikel & Tips
              </Link>
              <Link smooth={true} duration={500} to="contact"
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Alamat & SosMed
              </Link>
              <a href="/#/antrian"
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                <span className="flex gap-2">
                  List Antrian
                </span>
              </a>
              <a href="/#/scan"
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                <span className="flex gap-2">
                  Scan QR <Camera />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
