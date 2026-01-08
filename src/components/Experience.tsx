import Project from "../components/Project"
import actionLahetit from "../assets/images/actionLahetit.png"
import mit from "../assets/images/2mit.png"
import theFirma from "../assets/images/theFIRMA-logo_ei_taustaa-2.png"
import kitt from "../assets/images/KITT.png"
import "../styles/Card.css"
import "../App.css"
import { thesis_description, action_lahetit_description, service_desk_description, kitt_description } from "../data/descriptions"


export default function Experience() {
    return (
        <div className="parent-container">
            <h1> Work Experience</h1>
            <div className="card-container">
                <Project title="Thesis" employer={"theFirma - TurkuAMK"} duration={"January 2026 - "} img={theFirma} tools = {["React", "React-Native", "TypeScript"]} description={thesis_description} />
                <Project title="Software Developer" employer={"theFirma - TurkuAMK"} duration={"September 2025 - December 2025"} img={actionLahetit} tools={["Excel VBA", "Thunderbird"]} githubLink="https:/hub./HenryVag/excel-logistics-automation" description={action_lahetit_description}/>
                <Project title="Service Desk" employer="2MIT" duration="December 2024 - July 2025" img={mit} tools={["O365", "ServiceNow", "SCCM Remote", "Citrix", "Microsoft AD"]} description={service_desk_description}/>
                <Project title="Kansalaisen IT-Tuki" employer={"theFirma - TurkuAMK"} duration={"September 2024 - December 2024"} img={kitt} tools={["Linux"]} description={kitt_description} />
            </div>
        </div>
    )
}