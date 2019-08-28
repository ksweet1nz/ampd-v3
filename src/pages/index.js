import React from "react"
import { Link } from "gatsby"

import Projects from "../components/projects/projects"
import Header from "../components/header"
import Footer from "../components/footer"

import "../components/global-styles.css"

const Index = () => {
    return (
        <>
            <Header />
            <Projects />
            <Link to="/first-mdx/">Post Page</Link>
            <Footer />
        </>
    )
}

export default Index

