import "../styles/Project.css"
import GithubLink from "./GithubLink"
import  Tools  from "./Tools"

type ProjectProps = {
   readonly title: string
   readonly employer?: string
   readonly duration?: string
   readonly description: string
   readonly img?: string
   readonly tools: string[]
   readonly githubLink?: string
}


export default function Project({title, employer, description, img, tools, githubLink, duration}: ProjectProps) {
    return (
        <div className="project-container">
            <img src={img} className="project-image" alt="visual illustration of the project"/>
            <h3 className="project-title">{title} </h3>
            <p className="project-employer">{employer}</p>
            <p className="project-duration">{duration} </p>
            <p className="project-desc">{description}</p>
            <div className="tools-container">
                <Tools tools={tools}/>
            </div>
            <div className="project-footer">
                {githubLink ? <GithubLink url={githubLink}/> : <></>}
            </div>
        </div>
    )
}


