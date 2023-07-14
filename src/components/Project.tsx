import { useRouter } from 'next/router'
import ToolIcon from './ToolIcon'

const Project = ({ project, index, currentIndex }: any) => {
    const router = useRouter()

    const toolIcons = () => {
        return (
            <span className="flex space-x-1">
                {[...project.tools].map((x, i) =>
                    <span key={i} title={project.tools[i].charAt(0).toUpperCase() + project.tools[i].slice(1)} className='z-10'>
                        <ToolIcon tool={project.tools[i]} />
                    </span>
                )}
            </span>
        )
    }

    return (
        <div className='snap-center h-auto lg:h-full flex' id={index}>
            <div className={`card text-base space-y-4 flex flex-col my-auto ml-10 lg:ml-0 mr-10 w-full relative ${project.link ? 'animated' : ''} ${index !== currentIndex ? 'lg:opacity-20 transition-opacity duration-500' : ''}`} onClick={() => project.link ? router.push(project.link) : ''}>
                <h2 className=" text-lg font-bold text-yellow-600">{project.title}</h2>
                <p className='text-base'>{project.description}</p>
                <div className="grow" />
                <div>
                    <p>Stack:</p>
                    {toolIcons()}
                </div>
            </div>
        </div>
    )
}

export default Project