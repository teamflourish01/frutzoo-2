import React from "react";
import "../../style/HomeSection.css";
import "../../Style/About.css";
import Image from "next/image";
import leftleaf from "../../images/leftleaf.webp";
import aboutback from "../../images/aboutback.png"
import aboutanimal from "../../images/aboutanimal.webp";
import aboutsection from "../../images/aboutsection.png";
import aboutbg from "../../images/aboutbg.png";
import values from "../../images/values.png";
import innovation from "../../images/innovation.png";
import community from "../../images/community.png";
import bannerfullorange from "../../images/bannerfullorange.webp";
import doubleshapeborderbanner from "../../images/doubleshapeborderbanner.png";
import doubledot from "../../images/doubledot.webp";
import aboutfruitbanner from "../../images/aboutfruitbanner.png";
import bannerhalforange from "../../images/bannerhalforange.webp";
import underheading from "../../images/underheading.webp";
import value from "../../images/value.png"

// import underheading from "../images/underheading.webp";
const page = () => {
  return (
    <>
    <section style={{ overflow: "hidden" }}>
                <div className="wavebgbanner">
                    <div className="main-width">
                        <div style={{ marginTop: "170px" }}>
                            <div className="leftleaf-container" style={{ position: "absolute", left:"-5px" }}>
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
                                                    <p>About Us</p>
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
                                                       style={{height:"auto"}}
                                                        className="fruitzoom"
                                                        src={aboutfruitbanner}
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
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>
                            <div class="item stroke">Be Healthier</div>
                            <div class="item"><Image className="item-image" src={bannerfullorange} /></div>


                        </div>
                    </div>
                </div>
            </section>
      <section style={{ overflow: "hidden",  className:"toppadding" }}>
        <div className="wavebgbanner">
          <div className="main-width">
           
              <div>
                <div className="under1320width">

                <div className="all-paddings">

              
<div className="natur-tpadding">
                  <div className="nature-flex">
                    <div className="delicious">
                      <p className="delicious-p">
                        <span className="frutzoo"> Welcome to Frutzoo!</span>{" "}
                        Where nature’s bounty meets delicious delights, our
                        journey began with a passion for fresh, healthy, and
                        delicious fruit-based products. We believe that the best
                        flavors come from the freshest ingredients, and that’s
                        why we are committed to using only the finest, locally
                        sourced fruits in all our offerings.
                        <p className="promoting">
                          At Frutzoo, We are promoting a healthier lifestyle in
                          this fast-forward world with our freshest products
                          while contributing positively to our community and
                          environment. That’s why our menu is crafted with
                          health and wellness in mind. From refreshing fruit
                          juices to creamy smoothies and delicious fruit dishes,
                          every item is designed to nourish your body and
                          delight your taste buds.
                        </p>
                        <p className="promoting">
                          {" "}
                          Our commitment to quality doesn’t stop at our
                          ingredients. We are dedicated to providing exceptional
                          customer service either at shop or at your own place,
                          ensuring that every experience with Frutzoo is a
                          delightful experience. Whether you’re looking for a
                          healthy snack, a refreshing drink, or an energized
                          smoothie, Frutzoo is your go-to spot.
                        </p>
                      </p>
                    </div>
                    <div className="delicious-img">
                      <Image className="deliciouss" src={aboutanimal} />
                    </div>
                  </div>
</div>
                  <div></div>
                </div>
            
            </div>
          </div>
        </div>
        </div>
      </section>

      <section style={{ overflow: "hidden" ,paddingTop: "100px" }}>
        <div className="wavebgbanner">
          <div className="main-width">
              <div>
                <div className="under1320width">
          <div className="all-padding">
                  <div className="Our-Mission">
                    <div className="mission-flex">
                      <div className="mission-left">
                        <div className="mission">
                          <Image  className="mission-bg" src={aboutback}></Image>
                          <div className="text-overlay">
                            <h1 className="our-mission">Our Mission</h1>
                          </div>
                        </div>
                        <div className="mission-left-p">
                          <p className="p-contain">
                            Our mission at Frutzoo is to create awareness about
                            the importance of a healthy lifestyle and to inspire
                            people to shift away from fast-food habits. We aim
                            to provide people around us with delicious,
                            nutritious alternatives that make healthy eating
                            easy and enjoyable.
                          </p>
                        </div>
                      </div>
                      <div className="mission-right">
                        <div className="mission">
                          <Image src={aboutback} className="mission-bg"></Image>
                          <div className="text-overlay">
                            <h1 className="our-mission">Our Vision</h1>
                          </div>
                        </div>
                        <div className="mission-left-p">
                          <p className="p-contain">
                            We see a future where healthy eating is just a
                            natural part of everyday life. Our goal is to be a
                            trusted brand for fresh, nutritious, and natural
                            food options, making it easier for everyone to lead
                            a healthier, happier life. We want Frutzoo to be the
                            first thing that comes to mind when people want to
                            improve their diet and overall well-being.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ overflow: "hidden",paddingTop: "100px" }}>
        <div className="wavebgbanner">
          <div className="main-width">
              <div>
                <div className="under1320width">
          <div className="all-padding">
          <div className="our-offering">
                                        <p>Our Values</p>
                                        <div className="our-offering-img">
                                            <Image
                                                className="our-offering-icon"
                                                src={underheading}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                  <div className="Our-Values">
                    <div className="our-flex">
                      <div className="valuees">
                        <Image src={values}  className="values-img"/>
                      </div>
                      <div className="valuees-p">
                        <p className="our">Transparency</p>
                        
                        <p className="honesty">
                          Honesty and integrity guide our business practices. We
                          are transparent about our ingredients, sourcing
                          methods, and production processes. You deserve to know
                          what’s in your food and where it comes from, and we
                          are committed to providing that clarity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="innovation-flex">
                    <div className="innovation-left">
                      <p className="innovation-p">Innovation</p>
                      <p className="innovation-para">
                        We continuously explore new ways to enhance our
                        offerings. Our team is always experimenting with new
                        flavors and combinations to bring you unique, delicious
                        experiences. We stay ahead of trends to provide you with
                        the latest in health and wellness.
                      </p>
                    </div>
                    <div className="innovation-right">
                      <Image src={innovation} className="innovation-img" />
                    </div>
                  </div>
                 
                    <div className="Community-flex">
                      <div className="community-img">
                        <Image src={value}  className="comm-img"/>
                      </div>
                      <div className="community-contain">
                        <p className="believe">Community</p>
                        <p className="power">
                          We believe in the power of community. Our parlour is
                          more than just a place to grab a drink; it’s a space
                          where people come together to enjoy, learn, and share.
                          Giving back to our community is an integral part of
                          who we are.
                        </p>
                      </div>
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

export default page;
