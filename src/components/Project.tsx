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
            <div className={`card text-base space-y-4 flex flex-col my-auto ml-10 lg:ml-0 mr-10 w-full relative ${index !== currentIndex ? 'lg:opacity-20 transition-opacity duration-500' : ''}`} >
                <h2 className=" text-lg font-bold text-yellow-600">{project.title}</h2>
                <p className='text-base'>{project.description}</p>
                <div className="grow" />
                <div className='flex justify-between'>
                    <div>
                        <p>Stack:</p>
                        {toolIcons()}
                    </div>
                    {
                        project.link && <a className='flex space-x-3 self-end cursor-pointer link' target="_blank" href={project.link}>
                            <span>Visit website</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    }

                </div>

            </div>
        </div>
    )
}

export default Project