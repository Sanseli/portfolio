import Project from "@/components/Project";

export default function Home() {

    const projects = [
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
            description: 'Small singlepage website for sandwich bar',
            link: 'https://snellehap.be/',
            tools: ['next', 'tailwind']
        },
        {
            id: 3,
            title: 'Crescendo 2',
            description: 'Remake of old application.',
            tools: ['nuxt', 'vue', 'tailwind', 'jest', 'laravel', 'docker', 'postgresql']
        }
    ]

    return (
        <main className="grid grid-cols-2">
            {projects.map(project => <Project project={project} key={project.id} />)}
        </main>
    )
}
