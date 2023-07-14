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

  return (
    <main className="self-center mx-10 md:mx-0 pb-10 md:pb-0">
      <div className="Home md:overflow-y-auto space-y-4 text-base card">
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
        <span className="flex flex-row space-x-1">
          <svg viewBox="0 0 128 128" className='h-8 w-fit'>
            <path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none"></path><path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"></path><path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='h-8 w-fit'>
            <path d="M39.267 108.97l-.284-.567c-.567-1.135-.567-2.27-.283-3.689H8.059L53.454 24.14l19.009 34.33 6.241-4.54L59.695 19.6c-.283-.567-2.553-3.971-6.241-3.971-1.703 0-4.256.567-6.242 4.255L1.25 101.31c-.284.852-2.27 4.54-.568 7.66 1.135 1.703 2.838 3.405 6.81 3.405h38.585c-3.972 0-5.958-1.702-6.81-3.404z" fill="#00c58e"></path><path d="M126.65 101.59L89.767 35.201c-.567-.567-2.553-4.256-6.242-4.256-1.702 0-4.255.851-6.241 4.256l-4.823 7.944v15.321l11.065-19.009 36.599 65.254h-13.902a6.525 6.525 0 01-.568 3.972l-.284.284c-1.702 3.12-5.958 3.404-6.525 3.404h21.562c.851 0 4.823-.283 6.809-3.404.851-1.419 1.419-3.972-.567-7.377z" fill="#108775"></path><path d="M106.51 108.97v-.284l.284-.567c.283-1.135.567-2.27.283-3.405l-1.134-3.404-28.938-50.501-4.256-7.66h-.284l-4.256 7.66-28.938 50.5-1.134 3.405a6.81 6.81 0 00.567 4.256c1.135 1.702 2.837 3.405 6.809 3.405h53.906c.851 0 5.107-.284 7.093-3.405zM72.464 58.469l26.386 46.245H46.079z" fill="#2f495e"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='h-8 w-fit'>
            <path fill="#C4473A" d="M52.864 64h23.28L63.769 38.123zM63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026zM48.044 75l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.141l.123-.274V12h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='h-8 w-fit'>
            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
          </svg>
          <svg viewBox="0 0 128 128" className='h-8 w-fit'>
            <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='h-8 w-fit'>
            <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path>
          </svg>
        </span>
      </div>
    </main>
  )
}
