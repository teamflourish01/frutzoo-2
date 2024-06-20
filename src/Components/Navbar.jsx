"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../style/Navbar.css";
import mainicon from "../images/mainicon.png";
import navbarleaf from "../images/navbarleaf.png";
import rightleaf from "../images/rightleaf.webp";


const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setActiveLink(window.location.pathname);

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setClicked(false); // Close the mobile menu on link click
    };
    const handleDownload = async (fileUrl, fileName) => {
        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    return (
        <nav className={`sticky-top nav2 no-copy-text ${scrolled ? 'scrolled' : ''}`} style={{position:"fixed",top:"0",width:"100%"}}>
            <div className="under1320width">
                <div>
                    <div className="nav">
                        <Link href="/">
                            <Image className="desi-logo" src={mainicon} alt="Logo" />
                        </Link>
                        <div>
                            <ul
                                id="navbar"
                                onClick={() => {
                                    setClicked(!clicked);
                                    window.scrollTo(0, 0);
                                }}
                                className={clicked ? "#navbar active" : "#navbar"}
                            >
                                <div className="under-nav-flex">
                                    <li className="naves">
                                        <Link href="/" passHref>
                                            <span
                                                className={`under ${activeLink === "/" ? "active" : ""}`}
                                                onClick={() => handleLinkClick("/")}
                                            >
                                                HOME
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="naves">
                                        <Link href="/about" passHref>
                                            <span
                                                className={`under ${activeLink === "/about" ? "active" : ""}`}
                                                onClick={() => handleLinkClick("/about")}
                                            >
                                                ABOUT US
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="naves">
                                        <a href="/fruitzoomenu.pdf"  onClick={() => handleDownload('/fruitzoomenu.pdf', 'fruitzoomenu.pdf')} passHref target="_blank">
                                            <span
                                                className={`under ${activeLink === "/fruitzoomenu.pdf" ? "active" : ""}`}
                                                onClick={() => handleLinkClick("/fruitzoomenu.pdf")}
                                            >
                                                MENU
                                            </span>
                                        </a>
                                    </li>
                                    <li className="naves">
                                        <Link href="/blog" passHref>
                                            <span
                                                className={`under ${activeLink === "/blog" ? "active" : ""}`}
                                                onClick={() => handleLinkClick("/blog")}
                                            >
                                                BLOG
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="naves">
                                        <Link href="/contact" passHref>
                                            <span
                                                className={`under ${activeLink === "/contact" ? "active" : ""}`}
                                                onClick={() => handleLinkClick("/contact")}
                                            >
                                                CONTACT US
                                            </span>
                                        </Link>
                                    </li>
                                </div>
                                <li className="leaf-container">
                                    <Image className="leaf" src={navbarleaf} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div id="mobile" onClick={handleClick}>
                            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </div>
                </div>
            </div>
            <li className="rightleaf-container" style={{ position: "absolute", right: "-5px", top: "0" }}>
                <Image src={rightleaf} alt="" />
            </li>
        </nav>
    );
};

export default Navbar;
