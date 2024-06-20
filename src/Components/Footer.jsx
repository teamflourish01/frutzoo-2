import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../style/Footer.css";
import mainicon from "../images/mainicon.png";
import footericon1 from "../images/footericon1.webp";
import footericon2 from "../images/footericon2.webp";
import footericon3 from "../images/footericon3.webp";
import fb from "../images/fb.webp";
import insta from "../images/insta.webp";
import wp from "../images/wp.webp";

const Footer = () => {
  return (
    <>
      <section style={{ paddingBottom: "100px" }}>
        <div className="">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="all-paddings">
                  <div className="mainicon-footer">
                    <Image src={mainicon} width={207} />
                  </div>
                  <div className="location-time-phone">
                    <div className="footer-flex">
                      <Image src={footericon1} width={15} />
                      <a
                                  href="https://www.google.com/maps/place/SHOP+NO.+003,+SAMAN+COMPLEX,+MANSI+CROSS+ROAD,+SATELLITE,+AHMEDABAD+-+380015"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                      <p>
                        SHOP NO. 003, SAMAN COMPLEX, MANSI CROSS ROAD,
                        SATELLITE, AHMEDABAD - 380015
                      </p>
                      </a>
                    </div>
                    <div className="footer-flex">
                      <Image src={footericon2} width={18} />
                      <p>09 : 00 AM to 02 : 00 AM (All Days)</p>
                    </div>
                    <div className="footer-flex">
                      <Image src={footericon3} width={16} />
                      <a href="tel:+918511024422"  target="_blank">
                      <p>+91 85110 24422</p>
                      </a>
                    </div>
                    <div className="footer-flex1">
                        <Link href="/">
                      <p className="footer-bolds">HOME</p>
                      </Link>

                      <hr className="hrnone" />
                       <Link href="/about">
                      <p className="footer-bolds">ABOUT US</p>
                      </Link>
                      <hr className="hrnone" />
                      <Link href="/fruitzoomenu.pdf"  target="_blank" >
                      <p className="footer-bolds">MENU</p>
                      </Link>
                      <hr className="hrnone" />
                      <Link href="/blog">
                      <p className="footer-bolds">BLOG</p>
                      </Link>
                      <hr className="hrnone" />
                      <Link href="/contact">
                      <p className="footer-bolds">CONTACT US</p>
                      </Link>
                    </div>
                  </div>
                  <div className="copyright-design-logo-flex">
                    <p className="box1">
                      Copyrights © 2024 Frutzoo All rights reserved.
                    </p>
                    <div className="nav-3-icon-flex box2">
                    <a href="https://www.facebook.com/people/Frutzoo/61559206483878/" target="_blank">
                      <Image src={fb} width={50} />
                      </a>
                      <a
                                href="https://www.instagram.com/frutzoo.in/"
                                target="_blank"
                              >
                      <Image src={insta} width={50} />
                      </a>
                      <a
                                href="https://wa.me/918511024422"
                                target="_blank"
                              >
                      <Image src={wp} width={50} />
                      </a>
                    </div>
                    <a href="https://teamflourish.co/" target="_blank">
                    <p className="box3">
                      Design & Developed By: FLOURISH CREATIONS PVT.LTD.{" "}
                    </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
