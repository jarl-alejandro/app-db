
import Link from 'next/link';

interface Props {
}



export default function Home() {
  return (
    <section>
      <div
        className="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen"
        style={{
          backgroundImage: `url(wallpaper.jpg)`
        }}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{
            background: `rgba(17, 24, 39, 0.8)`
            }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h1 className="mb-4 text-4xl font-semibold">
                LOAND GAME STORE
              </h1>
              <p className="mb-6 text-xl font-semibold"><br />
              We share our games with the users of our website. With us you can:<br />
                - Play games for less money<br />
                - Play with full anti-blocking guarantee<br />
              </p>
              <Link  href="/login"
                type="button"
                className="rounded border-2 border-neutral-50 px-10 pb-[20px] pt-[25px] text-xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




