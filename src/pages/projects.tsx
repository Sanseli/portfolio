import Project from "@/components/Project";
import { useState, useEffect } from 'react'

export default function Home() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'The Beehive Website',
            description: 'Company website with dynamic blog and job components. Transformed the design made in Figma into the current company website.',
            link: 'https://thebeehive.be/',
            tools: ['nuxt', 'tailwind', 'strapi', 'figma']
        },
        {
            id: 2,
            title: 'Snellehap Website',
            description: 'Small singlepage website for sandwich bar.',
            link: 'https://snellehap.be/',
            tools: ['next', 'tailwind']
        },
        {
            id: 3,
            title: 'Crescendo 2',
            description: '',
            tools: ['nuxt', 'vue', 'tailwind', 'jest', 'laravel']
        }
    ])

    const [currentIndex, setCurrentIndex] = useState(0)


    const scrollUp = () => {
        var elmntToView = document.getElementById((currentIndex - 1).toString());
        if (elmntToView) {
            elmntToView.scrollIntoView();
            setCurrentIndex(currentIndex - 1)
        }
    }

    const scrollDown = () => {
        var elmntToView = document.getElementById((currentIndex + 1).toString());
        if (elmntToView) {
            elmntToView.scrollIntoView();
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <main className="flex">
            <div className="h-full md:overflow-hidden md:scroll-smooth md:snap-y md:snap-mandatory space-y-10 mb-20 md:mb-0">
                {projects.map((project, index) => <Project project={project} index={index} currentIndex={currentIndex} key={project.id} />)}
            </div>
            <div className="self-center space-y-3 hidden md:flex flex-col">
                <button onClick={scrollUp} className={`${currentIndex > 0 ? 'hover:-translate-y-2 transition duration-200' : 'cursor-default opacity-60'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="h-8" style={{ filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))' }}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                </button>
                <button onClick={scrollDown} className={`${currentIndex + 1 < projects.length ? 'hover:translate-y-2 transition duration-200}' : 'cursor-default opacity-60'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="h-8" style={{ filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))' }}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                    </svg>
                </button>
            </div>
        </main>
    )
}
