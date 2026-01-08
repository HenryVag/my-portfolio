import LogoSvg from '../assets/svg/logo-github.svg?react'
import "../styles/GithubLink.css"

type GithubLinkProps = {
    readonly url: string 
}


export default function GithubLink({url}: GithubLinkProps) {
    return (
        <a href={url} className="link-container" target="_blank">
            <LogoSvg className='github-logo'/>
            <a className="github-text">Github</a> 
        </a>
    )
}