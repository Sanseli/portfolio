import ToolIcon from "@/components/ToolIcon";

export default function Home() {
  function age() {
    const birthday = new Date();
    birthday.setDate(25);
    birthday.setMonth(0);
    birthday.setFullYear(1997);
    const dif = Date.now() - birthday.getTime();
    const age = new Date(dif);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  function skills() {
    const skills = ['vue', 'nuxt', 'angular', 'react', 'next', 'tailwind']

    return (
      <span className="flex space-x-1">
        {[...skills].map((x, i) =>
          <span key={i} title={skills[i].charAt(0).toUpperCase() + skills[i].slice(1)} className='z-10'>
            <ToolIcon tool={skills[i]} />
          </span>
        )}
      </span>
    )
  }

  return (
    <main className="self-center mx-10 lg:mx-0 !mb-20 lg:!mb-0">
      <div className="Home lg:overflow-y-auto space-y-4 text-base card">
        <p>
          Hi! I&apos;m Lisa Sansen, I&apos;m from
          <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-be" className="w-4 rounded-sm inline m-2 relative bottom-[2px]" viewBox="0 0 640 480">
            <g fillRule="evenodd" strokeWidth="1pt">
              <path d="M0 0h213.3v480H0z" />
              <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
              <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
            </g>
          </svg>
          Belgium but currently living in
          <span className="px-2 self-center pb-[2px] inline">
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-fi" className="w-4 rounded-sm inline relative bottom-[2px]" viewBox="0 0 640 480">
              <path fill="#fff" d="M0 0h640v480H0z" />
              <path fill="#002f6c" d="M0 174.5h640v131H0z" />
              <path fill="#002f6c" d="M175.5 0h130.9v480h-131z" />
            </svg>
          </span>
          Finland.
        </p>
        <p>
          I&apos;ve been working as a software developer since 2019, and because I love being creative I&apos;m mostly interested and experienced in the front-end area.
        </p>
        <p>
          Skills I love to use:
        </p>
        {skills()}
      </div>
    </main>
  )
}
