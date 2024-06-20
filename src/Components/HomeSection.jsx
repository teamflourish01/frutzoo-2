"use client";
import React, { useState, useEffect } from "react";
import "../style/HomeSection.css";
import Image from "next/image";
import leftleaf from "../images/leftleaf.webp"
import bannerfullorange from "../images/bannerfullorange.webp";
import doubleshapeborderbanner from "../images/doubleshapeborderbanner.png";
import doubledot from "../images/doubledot.webp";
import bannerfruitzoom from "../images/bannerfruitzoom.png";
import bannerhalforange from "../images/bannerhalforange.webp";
import underheading from "../images/underheading.webp";
import ourofferingsicon1 from "../images/ourofferingsicon1.webp";
import ourofferingsicon2 from "../images/ourofferingsicon2.webp";
import ourofferingsicon3 from "../images/ourofferingsicon3.webp";
import ourofferingsicon4 from "../images/ourofferingsicon4.webp";
import trustfactor1 from "../images/trustfactor1.webp";
import trustfactor2 from "../images/trustfactor2.webp";
import trustfactor3 from "../images/trustfactor3.webp";
import trustfactor4 from "../images/trustfactor4.webp";
import branch from "../images/branch.png";
import timelineico1 from "../images/timelineico1.png";
import timelineico2 from "../images/timelineico2.png";
import timelineico3 from "../images/timelineico3.png";
import timelineico4 from "../images/timelineico4.png";
import timelineico5 from "../images/timelineico5.png";
import timelineico6 from "../images/timelineico6.png";
import circle1 from "../images/circle1.png";
import circle2 from "../images/circle2.png";
import circle3 from "../images/circle3.png";
import circle4 from "../images/circle4.png";
import circle5 from "../images/circle5.png";
import circle6 from "../images/circle6.png";
import tabletlakdi from "../images/tabletlakdi.webp";
import tableticon1 from "../images/tableticon1.webp";
import tableticon2 from "../images/tableticon2.webp";
import tableticon3 from "../images/tableticon3.webp";
import tableticon4 from "../images/tableticon4.webp";
import tableticon5 from "../images/tableticon5.webp";
import tableticon6 from "../images/tableticon6.webp";
import groupico1 from "../images/groupico1.webp";
import groupico2 from "../images/groupico2.webp";
import groupico3 from "../images/groupico3.webp";
import groupico4 from "../images/groupico4.webp";
import groupico5 from "../images/groupico5.webp";
import groupico6 from "../images/groupico6.webp";
import groupico7 from "../images/groupico7.webp";
import groupico8 from "../images/groupico8.webp";
import groupico9 from "../images/groupico9.webp";
import groupico10 from "../images/groupico10.webp";


const Testimonials = ({ testimonials }) => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isPaused) {
                setCurrentTestimonialIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };
    return (
        <div
            className="testimonials-slider-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="testimonials-slider"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="review-container">
                            <div className="testipading">
                                <div className="user-info">
                                    <img
                                        className="user-photo"
                                        src={testimonial.photo}
                                        alt="User photo"
                                    />
                                    <div className="user-details">
                                        <h3 className="user-name">{testimonial.name}</h3>
                                        <p className="user-comment">{testimonial.comment}</p>
                                    </div>
                                </div>
                                <div className="separoterflex">
                                    {testimonials.map((_, separatorIndex) => (
                                        <div
                                            key={separatorIndex}
                                            className={`separator ${separatorIndex === index ? "active" : ""
                                                }`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

const HomeSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: "What are your opening hours?",
            answer:
                "We are open daily from 9 am to 2 am, so you can enjoy our fresh products any time of the day!",
        },
        {
            question: "Do you offer vegan options?",
            answer:
                "Yes, we have a variety of vegan-friendly choices across our menu, including juices, smoothies and fruit dishes",
        },
        {
            question: "Do you use any artificial preservatives?",
            answer:
                "No, Our products are free from artificial preservatives and colors.",
        },
        {
            question: "Can I order online for delivery or pickup?",
            answer:
                "Absolutely! You can place your order online on zomato and swiggy. For pickup you can contact us.",
        },
        {
            question: "Do you offer catering services for events?",
            answer:
                "Yes, we provide catering for events of all sizes. Contact us for more information and to customize your menu",
        },
        // Add more FAQ data as needed
    ];

    const testimonials = [
        {
            name: "Punit Andharia",
            photo: "https://placehold.co/100x100",
            comment:
                "Absolutely love the fresh flavors! The Tropical Paradise Juice is my all-time favorite. I can really taste the quality of the ingredients. Fresh & Fruity never disappoints!",
        },
        {
            name: "Ajay Gadhavi",
            photo: "https://placehold.co/100x100",
            comment:
                "The best place in Ahmedabad for a healthy treat! Their watermelon juice is amazing, and I appreciate their commitment to using only fresh, local fruits.",
        },
        {
            name: "Utsav Pandya",
            photo: "https://placehold.co/100x100",
            comment:
                "Their milkshakes are out of this world! The Classic Vanilla Shake is smooth, creamy, and just perfect. It's my little indulgence after a workout.",
        },
        {
            name: "Maulik Navadia",
            photo: "https://placehold.co/100x100",
            comment:
                "I love that they prioritize health without compromising on taste. The Seasonal Sitaphal Shake was a refreshing and delightful surprise. I can't wait to try more!",
        },
        {
            name: "Satyen Mori",
            photo: "https://placehold.co/100x100",
            comment:
                "Frutzoo has become my go-to spot for a quick, nutritious snack. The staff is always friendly, and the atmosphere is so welcoming. Highly recommended!",
        },
        // Add more testimonials as needed
    ];
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
                                                    <p>Freshness in Every Sip and Bites </p>
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
                                                        className="fruitzoom"
                                                        src={bannerfruitzoom}
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

            <section style={{ paddingTop: "100px" }}>
                <div className="">
                    <div className="main-width">
                        <div>
                            <div className="under1320width">
                                <div className="all-paddings">
                                    <div className="our-offering">
                                        <p>Discover Us</p>
                                        <div className="our-offering-img">
                                            <Image
                                                className="our-offering-icon"
                                                src={underheading}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="timeline-container">
                                        <div class="flex flex-col md-flex-row items-center justify-center timeline-under-width1"  >
                                            <div class="flex flex-col items-center mx-4">
                                                <Image src={timelineico1} alt="Orchard" class="mb-2" />
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Harvesting</h3>
                                                    <p>Handpicked with hygiene for unmatchable flavour.</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <Image src={timelineico2} alt="Transporting" class="mb-2" />
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Quality Check</h3>
                                                    <p>Only the best ingredients make it to your day.</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <Image src={timelineico3} alt="Making" class="mb-2" />
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Serving Healthier</h3>
                                                    <p>Indulge in the healthier flavours of frutzo.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="relative mt-4">
                                            <Image src={branch} alt="Timeline" class="w-full" />
                                            <div class="absolute inset-0 flex justify-between items-center">
                                                <Image class="circle" src={circle1} />
                                                <Image class="circle" src={circle2} />
                                                <Image class="circle" src={circle3} />
                                                <Image class="circle" src={circle4} />
                                                <Image class="circle" src={circle5} />
                                                <Image class="circle" src={circle6} />
                                            </div>
                                        </div>
                                        <div class="flex flex-col md-flex-row items-center justify-center timeline-under-width2" >
                                            <div class="flex flex-col items-center mx-4">
                                                <div class="text-center">
                                                    <h3 class="font-bold">Orchard</h3>
                                                    <p>Where it all begins. Freshness grown under the sun.</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-center mx-4" >
                                                <Image src={timelineico4} alt="Harvesting" class="mb-2"  />
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Transporting</h3>
                                                    <p>Swift and safe journey to preserve quality.</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <Image src={timelineico5} alt="Quality Check" class="mb-2"  />
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Making</h3>
                                                    <p>Freshly prepared to capture the essence of originality.</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-center mx-4">
                                                <Image src={timelineico6} alt="Serving Healthier" class="mb-2"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tablet-timeline-container">
                                        <div class="tablet-content-flex" >
                                            <div class="tablet-width-seperate">
                                                <div class="text-center">
                                                    <h3 class="font-bold">Orchard</h3>
                                                    <p>Where it all begins. Freshness grown under the sun.</p>
                                                </div>
                                            </div>
                                            <div class="tablet-width-seperate" >
                                                <Image src={timelineico4} alt="Harvesting" class="mb-2"  />
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Transporting</h3>
                                                    <p>Swift and safe journey to preserve quality.</p>
                                                </div>
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <Image src={timelineico5} alt="Quality Check" class="mb-2"  />
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Making</h3>
                                                    <p>Freshly prepared to capture the essence of originality.</p>
                                                </div>
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <Image src={timelineico6} alt="Serving Healthier" class="mb-2"  />
                                            </div>
                                        </div>
                                        <div class=" tablet-lakdi-container " >
                                            <Image src={tabletlakdi} alt="Timeline" class="tablet-full" />
                                            <div class=" tablet-circle-container   ">
                                                <Image class="tablet-circle" src={tableticon1}/>
                                                <Image class="tablet-circle" src={tableticon2}/>
                                                <Image class="tablet-circle" src={tableticon3}/>
                                                <Image class="tablet-circle" src={tableticon4}/>
                                                <Image class="tablet-circle" src={tableticon5}/>
                                                <Image class="tablet-circle" src={tableticon6}/>
                                            </div>
                                        </div>
                                        <div class="tablet-content-flex"  >
                                            <div class="tablet-width-seperate">
                                                <Image src={timelineico1} alt="Orchard" class="mb-2" />
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Harvesting</h3>
                                                    <p>Handpicked with hygiene for unmatchable flavour.</p>
                                                </div>
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <Image src={timelineico2} alt="Transporting" class="mb-2" />
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Quality Check</h3>
                                                    <p>Only the best ingredients make it to your day.</p>
                                                </div>
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <Image src={timelineico3} alt="Making" class="mb-2" />
                                            </div>
                                            <div class="tablet-width-seperate">
                                                <div class="text-center" >
                                                    <h3 class="font-bold">Serving Healthier</h3>
                                                    <p>Indulge in the healthier flavours of frutzo.</p>
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

            <section style={{ paddingTop: "100px" }}>
                <div className="">
                    <div className="main-width ">
                        <div>
                            <div className="under1320width">
                                <div className="all-paddings">
                                    <div className="our-offering">
                                        <p>Our Offerings</p>
                                        <div className="our-offering-img">
                                            <Image
                                                className="our-offering-icon"
                                                src={underheading}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="our-offering-flex">
                                        <div className="our-offering-text">
                                            <div className="our-offering-1">
                                                <Image
                                                    className="our-offering-icon1"
                                                    src={ourofferingsicon1}
                                                    alt=""
                                                />
                                            </div>
                                            <p>Juice</p>
                                        </div>
                                        <div className="our-offering-text">
                                            <div className="our-offering-2">
                                                <Image
                                                    className="our-offering-icon2"
                                                    src={ourofferingsicon2}
                                                    alt=""
                                                />
                                            </div>
                                            <p>Milkshake</p>
                                        </div>
                                        <div className="our-offering-text">
                                            <div className="our-offering-3">
                                                <Image
                                                    className="our-offering-icon3"
                                                    src={ourofferingsicon3}
                                                    alt=""
                                                />
                                            </div>
                                            <p>Fruits</p>
                                        </div>
                                        <div className="our-offering-text">
                                            <div className="our-offering-4">
                                                <Image
                                                    className="our-offering-icon4"
                                                    src={ourofferingsicon4}
                                                    alt=""
                                                />
                                            </div>
                                            <p>Smoothie</p>
                                        </div>
                                    </div>
                                    <div className="button-container" style={{textAlign:"center"}}>
                                    <a href="/fruitzoomenu.pdf"  target="_blank">
                              <div className="button-padding" >
                                <button
                                  className="contact-button"
                                  type="submit"
                                >
                                  VIEW MENU
                                </button>
                              </div>
                              </a>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="our-back " style={{ paddingTop: "100px" }}>
            <div className="kya">
            <div className="circlemaincontainer">
            
            <div class="outer-circle-container">
            
        <Image src={groupico3} alt="Image 1" class="circle-img rotatefruit" />
        <Image src={groupico4} alt="Image 2" class="circle-img rotatefruit"/>
        <Image src={groupico5} alt="Image 3" class="circle-img rotatefruit"/>
        <Image src={groupico6} alt="Image 4" class="circle-img  zzooms"/>
        <Image src={groupico7} alt="Image 5" class="circle-img rotatefruit"/>
        <Image src={groupico1} alt="Image 6" class="circle-img rotatefruit"/>
        <Image src={groupico2} alt="Image 7" class="inner-img zzooms"/>

    </div>
    <div class="inner-circle-container">
        <Image src={groupico8} alt="Image 8" class="inner-img zzooms"/>
        <Image src={groupico10} alt="Image 9" class="inner-img rotatefruit"/>
        <Image src={groupico9} alt="Image 10" class="inner-img zzooms"/>
    </div>
    </div>
            </div>

                <div className="">
                    <div className="main-width">
                        
                        <div>
                            <div className="under1320width">
                                <div className="all-paddings">
                                    <div className="our-offering">
                                        <p>Trust Factor</p>
                                        <div className="our-offering-img">
                                            <Image
                                                className="our-offering-icon"
                                                src={underheading}
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <div className="trust-factor-flex">
                                        <div className="trust-factor-icon-text">
                                            <Image src={trustfactor1} />
                                            <p>Unmatched quality</p>
                                        </div>
                                        <div className="trust-factor-icon-text">
                                            <Image src={trustfactor2} />
                                            <p>Hygienic processes</p>
                                        </div>
                                        <div className="trust-factor-icon-text">
                                            <Image src={trustfactor3} />
                                            <p>Purest & freshest ingredients</p>
                                        </div>
                                        <div className="trust-factor-icon-text">
                                            <Image src={trustfactor4} />
                                            <p>Always healthier</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: "100px" }}>
                <div className="">
                    <div className="main-width">
                        <div className="shapeleft">
                            <div className="shaperight">
                                <div className="under1320width">
                                    <div className="all-paddings">
                                        <div className="our-offering">
                                            <p>Testimonials</p>
                                            <div className="our-offering-img">
                                                <Image
                                                    className="our-offering-icon"
                                                    src={underheading}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <Testimonials testimonials={testimonials} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingTop: "100px" }}>
                <div className="">
                    <div className="main-width">
                            <div>
                                <div className="under1320width">
                                <div className="all-paddings">
                                    <div className="our-offering">
                                        <p>FAQ’s</p>
                                        <div className="our-offering-img">
                                            <Image
                                                className="our-offering-icon"
                                                src={underheading}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="faq">
                                        {faqData.map((faq, index) => (
                                            <div key={index} className="gapsfaq">
                                                <div className="special">
                                                    <div
                                                        className="faqsection"
                                                        onClick={() => toggleFAQ(index)}
                                                    >
                                                        <p>{faq.question}</p>
                                                        <i
                                                            className={`fa-solid fa-angle-${openIndex === index ? "up" : "down"
                                                                }`}
                                                        ></i>
                                                    </div>
                                                    {openIndex === index && (
                                                        <div className="answer">
                                                            <p>{faq.answer}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="locationbackground" style={{ paddingTop: "100px" }}>
            <div className="kya">
            <div className="cirmaincontainer">
            
            <div class="outer-circle-container">
            
        <Image src={groupico3} alt="Image 1" class="circle-img rotatefruit" />
        <Image src={groupico4} alt="Image 2" class="circle-img rotatefruit"/>
        <Image src={groupico5} alt="Image 3" class="circle-img rotatefruit"/>
        <Image src={groupico6} alt="Image 4" class="circle-img  zzooms"/>
        <Image src={groupico7} alt="Image 5" class="circle-img rotatefruit"/>
        <Image src={groupico1} alt="Image 6" class="circle-img rotatefruit"/>
        <Image src={groupico2} alt="Image 7" class="inner-img zzooms"/>

    </div>
    <div class="inner-container">
        <Image src={groupico8} alt="Image 8" class="inner-img zzooms"/>
        <Image src={groupico10} alt="Image 9" class="inner-img rotatefruit"/>
        <Image src={groupico9} alt="Image 10" class="inner-img zzooms"/>
    </div>
    </div>
            </div>
                <div >
                    <div className="locationbackground1">
                        <div className="main-width">
                                <div className="under1320width">
                                <div className="all-paddings">
                                    <div className="our-offering">
                                        <p>Location</p>
                                        <div className="our-offering-img">
                                            <Image
                                                className="our-offering-icon"
                                                src={underheading}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="location-text">
                                        <p>
                                            Visit us at our conveniently located stores for a fresh
                                            and healthy treat. Find your nearest Fresh & Fruity
                                            location and enjoy our delicious offerings today!
                                        </p>
                                    </div>
                                    <div className="iframe-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.826065976569!2d72.52442987477045!3d23.030157716046155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e850d4b774dbf%3A0x154530a04eb783f8!2sFrutzoo!5e0!3m2!1sen!2sin!4v1717759746767!5m2!1sen!2sin"
                                            style={{ border: "0", borderRadius: "15px" }}
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"
                                        ></iframe>
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

export default HomeSection;
