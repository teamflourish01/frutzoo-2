"use client";

import React, { useState } from "react";
import axios from "axios";
import "../../Style/contact.css";
import "../../Style/HomeSection.css";
import Image from "next/image";
import footericon1 from "../../images/footericon1.webp";
import footericon2 from "../../images/footericon2.webp";
import footericon3 from "../../images/footericon3.webp";
import mail from "../../images/mail.png";
import whatapp from "../../images/wp.webp";
import insta from "../../images/insta.webp";
import fb from "../../images/fb.Webp";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import leftleaf from "../../images/leftleaf.webp";
import bannerfullorange from "../../images/bannerfullorange.webp";
import doubleshapeborderbanner from "../../images/doubleshapeborderbanner.png";
import doubledot from "../../images/doubledot.webp";
import contactfruitbanner from "../../images/contactfruitbanner.png";
import bannerhalforange from "../../images/bannerhalforange.webp";
import underheading from "../../images/underheading.webp";

const page = () => {
  const [formdata, setformdata] = useState({
    name: "",
    Phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const { name, Phone, email, subject, message } = formdata;
    if (!name || !Phone || !email || !subject || !message) {
      // toast.error("Please fill out all fields.");
      alert("invalid fields");
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();
    // if (validateForm()) {

    axios
      .post("http://localhost:8000/mail", formdata)
      .then((response) => {
        console.log(response.data);
        setformdata({
          name: "",
          Phone: "",
          email: "",
          subject: "",
          message: "",
        });

        toast.success("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
        toast.error("Failed to submit the form. Please try again.");
      });
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  return (
    <>
      <section style={{ overflow: "hidden" }}>
        <div className="wavebgbanner">
          <div className="main-width">
            <div style={{ marginTop: "170px" }}>
              <div
                className="leftleaf-container"
                style={{ position: "absolute", left: "-5px" }}
              >
                <Image src={leftleaf} />
              </div>
              <div className="under1320width">
                <div className="all-paddings">
                  <div>
                    <div className="frutzoo-flex">
                      <div className="every-sip">
                        <div className="orange-dot">
                          <div className="orange-dot-flex">
                            <Image
                              className="rotate-img"
                              src={bannerfullorange}
                              alt="Logo"
                              width={126}
                              height={126}
                            />
                            <Image
                              className=""
                              src={doubledot}
                              alt="Logo"
                              width={26}
                              height={26}
                            />
                          </div>
                        </div>
                        <div className="banner-heading">
                          <p>Contact Us</p>
                        </div>
                      </div>
                      <div className="big-bg">
                        <div className="small-bg">
                          <Image
                            className="fruitzoom1"
                            src={doubleshapeborderbanner}
                            alt="Doubleshape Border Banner"
                          />
                          <Image
                            style={{ height: "auto" }}
                            className="fruitzoom"
                            src={contactfruitbanner}
                            alt="Banner Fruit Zoom"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cut-orange-and-dot">
                      <Image src={bannerhalforange} width={127} />
                      <Image
                        className=""
                        src={doubledot}
                        alt="Logo"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-wrapper">
            <div class="carousel">
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
              <div class="item stroke">Be Healthier</div>
              <div class="item">
                <Image className="item-image" src={bannerfullorange} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ overflow: "hidden", paddingTop: "100px" }}>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div>
                <div className="under1320width">
                  <div className="all-padding">
                    <div className="contact-container">
                      <div className="contact-flex">
                        <div className="contact-left">
                          <div className="left-container">
                            <div className="information-p">
                              <p className="contact-info">
                                Contact Information
                              </p>
                              <p className="contact-info-para">
                                Have a fruity question or need a juicy tip?
                                Reach out, and we’ll respond quicker than you
                                can say “Always Healthier”
                              </p>
                            </div>

                            <div className="contact-no-mail">
                              <div className="contact-no">
                                <Image
                                  src={footericon3}
                                  width={16}
                                  className="contact-icon"
                                />
                                <a href="tel:+918511024422" className="color">
                                  +91 85110 24422
                                </a>
                              </div>
                              <div className="contact-mail">
                                <Image
                                  src={mail}
                                  width={16}
                                  className="contact-icon"
                                />
                                <a
                                  href="mailto:connect.frutzoo@gmail.com"
                                  className="color"
                                >
                                  connect.frutzoo@gmail.com
                                </a>
                              </div>
                              <div className="contact-location">
                                <Image
                                  src={footericon1}
                                  width={16}
                                  className="contact-icon"
                                />
                                <a
                                  href="https://www.google.com/maps/place/SHOP+NO.+003,+SAMAN+COMPLEX,+MANSI+CROSS+ROAD,+SATELLITE,+AHMEDABAD+-+380015"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="color"
                                >
                                  SHOP NO. 003, SAMAN COMPLEX, MANSI CROSS ROAD,
                                  SATELLITE, AHMEDABAD - 380015
                                </a>
                              </div>
                            </div>

                            <div className="icons">
                              <a
                                href="https://www.facebook.com/people/Frutzoo/61559206483878/"
                                target="_blank"
                              >
                                <Image src={fb} />
                              </a>
                              <a
                                href="https://www.instagram.com/frutzoo.in/"
                                target="_blank"
                              >
                                <Image src={insta} />
                              </a>
                              <a
                                href="https://wa.me/918511024422"
                                target="_blank"
                              >
                                <Image src={whatapp} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="contact-right">
                          <form onSubmit={submitForm}>
                            <div className="input-row">
                              <input
                                type="text"
                                className="input-box"
                                placeholder="Name"
                                name="name"
                                value={formdata.name}
                                onChange={handleChange}
                                required
                              />
                              <input
                                type="text"
                                className="input-box"
                                placeholder="Email"
                                name="email"
                                value={formdata.email}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div
                              style={{ margin: "24px 0" }}
                              className="input-row"
                            >
                              <input
                                type="text"
                                className="input-box"
                                placeholder="Subject"
                                name="subject"
                                value={formdata.subject}
                                onChange={handleChange}
                                required
                              />
                              <input
                                type="text"
                                className="input-box"
                                placeholder="Phone"
                                name="phone"
                                value={formdata.Phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="text-area">
                              <textarea
                                name="message"
                                id=""
                                className="textarea"
                                placeholder="Message"
                                value={formdata.message}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </div>
                            <div className="button-container">
                              <div className="button-paddings">
                                <button
                                  className="contact-buttons"
                                  type="submit"
                                >
                                  SUBMIT
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default page;
