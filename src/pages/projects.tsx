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
    ]

    return (
        <main className="md:overflow-auto md:scroll-smooth md:snap-y md:snap-mandatory space-y-10 pb-10">
            {projects.map(project => <Project project={project} key={project.id} />)}
        </main>
    )
}
