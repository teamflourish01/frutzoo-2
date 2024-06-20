import React from "react";
import "../../Style/blog.css";
import "../../Style/HomeSection.css";
import Link from "next/link";
import Image from "next/image";
import blogcard from "../../images/blogcard.jpg";
import Arrow from "../../images/Arrow.png";
import leftleaf from "../../images/leftleaf.webp";
import bannerfullorange from "../../images/bannerfullorange.webp";
import doubleshapeborderbanner from "../../images/doubleshapeborderbanner.png";
import doubledot from "../../images/doubledot.webp";
import blogfruitbanner from "../../images/blogfruitbanner.png";
import bannerhalforange from "../../images/bannerhalforange.webp";
import underheading from "../../images/underheading.webp";

const page = () => {
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
                          <p>Blogs</p>
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
                            src={blogfruitbanner}
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
      <section style={{ overflow: "hidden" }}>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div>
                <div className="under1320width">
                  <div className="all-paddings">
                    <div className="blog-main">
                      <div className="grid-container">
                        <div className="blog-container">
                          <div className="blog-img">
                            <Image src={blogcard} className="blogimg" />
                          </div>
                          <div className="blog-description">
                            <div className="helth-maintaining">
                              <p className="health">
                                The Health Benefits of Freshly Squeezed Fruit
                                Juices
                              </p>
                              <p className="maintaining">
                                Maintaining a healthy lifestyle can sometimes
                                feel like a challenge in our fast-paced world.
                              </p>
                            </div>
                            <Link href="/blogpage">
                              <div className="read-more">
                                <p className="read-more-p">Read More</p>
                                <Image
                                  src={Arrow}
                                  alt=""
                                  srcset=""
                                  className="arrow"
                                />
                              </div>
                            </Link>
                          </div>
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
    </>
  );
};

export default page;
