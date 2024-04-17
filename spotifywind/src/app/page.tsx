import { LucideHome, SearchIcon, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Laptop, Laptop2Icon, Volume, Maximize, HomeIcon } from 'lucide-react'
import Image from 'next/image';

export default function Home(){ 
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-600 rounded-full" />

            

          </div>

          <nav className="space-y-4 mt-10">

            <a href="" className="flex items-center gap-2 text-xs font-semibold">
              <LucideHome />
              Home
            </a>
            <a href="" className="flex items-center gap-2 text-xs font-semibold">
              <SearchIcon />
              Seach
            </a>
            <a href="" className="flex items-center gap-2 text-xs font-semibold">
              <Library />
              Your Library
            </a>

          </nav>
          <nav className="mt-8 pt-8 border-t border-zinc-800 flex flex-col group">
            <a href="" className="flex items-center rounded gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 mt-2 ">
              <Image src="/tryhard1.jpg" width={70} height={70} alt="capa try" />
              <strong className=" text-justify  flex items-center gap-1"> 1 Tryhard </strong>
              <span className=" text-end text-xs gap-1">CityFit</span>
              </a>

              <a href="" className="flex items-center rounded gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 mt-2">
              <Image src="/eletro.jpg" width={70} height={70} alt="capa try" />
              <strong className=" text-justify  flex items-center gap-1"> 2 Eletro Dance </strong>
              <span className=" text-end text-xs gap-1">CityFit</span>
              </a>

              <a href="" className="flex items-center rounded gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 mt-2">
              <Image src="/drive.jpg" width={70} height={70} alt="capa try" />
              <strong className=" text-justify  flex items-center gap-1"> 3 Drive Car </strong>
              <span className=" text-end text-xs gap-1">CityFit</span>
              </a>

              <a href="" className="flex items-center rounded gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 mt-2">
              <Image src="/dark.jpg" width={70} height={70} alt="capa try" />
              <strong className=" text-justify  flex items-center gap-1"> 4 Darksynth </strong>
              <span className=" text-end text-xs gap-1">CityFit</span>
              </a>

              <a href="" className="flex items-center rounded gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 mt-2">
              <Image src="/trap.jpg" width={70} height={70} alt="capa try" />
              <strong className=" text-justify  flex items-center gap-1"> 5 Trap Rock </strong>
              <span className=" text-end text-xs gap-1">CityFit</span>
              </a>

              <a href="" className="flex items-center rounded gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 mt-2">
              <Image src="/power.jpg" width={70} height={70} alt="capa try" />
              <strong className=" text-justify  flex items-center gap-1"> 6 Power Metal </strong>
              <span className=" text-end text-xs gap-1">CityFit</span>
              </a>

              <a href="" className="flex items-center rounded gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 mt-2">
              <Image src="/acoustic.jpg" width={70} height={70} alt="capa try" />
              <strong className=" text-justify  flex items-center gap-1"> 7 Acoustic Rock Covers </strong>
              <span className=" text-end text-xs gap-1">CityFit</span>
              </a>

           

     
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/30 p-2"> 
            <strong className="text-xs"> All</strong>
            </button>
            <button className="rounded-full bg-black/30 p-2">
              <strong className="text-xs"> Music</strong> 
            </button>
            <button className="rounded-full bg-black/30 p-2">
              <strong className="text-xs"> Podcast</strong> 
            </button>
          </div>
          <h1 className="font-bold text-4xl">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-6 mt-4">
            <a href='#' className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/mrg.jpg" width={112} height={112} alt='Mrg'/>
                <strong className="mt-2">Matando Robô Gigantes</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
            </a>
            <a href='#' className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/nerdcast.jpg" width={112} height={112} alt='nerd'/>
                <strong>Nerdcast</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
            </a>
            <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 tra1sition-colors">
                <Image src="/desinformação.jpg" width={112} height={112} alt='petry'/>
                <strong>Podcast Desinformação</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
            </a>
            <a href='#' className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/akitando.jpg" width={112} height={112} alt='rails'/>
                <strong>Akitando</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
            </a>
            <a href='#' className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/panico.jpg" width={112} height={112} alt='panico'/>
                <strong>Pânico</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
            </a>
            <a href='#' className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/joerogan.jpg" width={112} height={112} alt='joe'/>
                <strong>The Joe Rogan Experience</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill='bg-black' />
                </button>
            </a>
            
            

          </div>
          <h2 className="font-semibold text-2xl mt-10">Made For Dan</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/d1.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 1</strong>
            <span className="text-xs text-zinc-400">Cousin</span>
            </a>
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/d2.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 2</strong>
            <span className="text-xs text-zinc-400">Blackstone</span>
            </a>
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/d3.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 3</strong>
            <span className="text-xs text-zinc-400">Fu43s1</span>
            </a>
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/d4.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 4</strong>
            <span className="text-xs text-zinc-400">maxgayon</span>
            </a>
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/d5.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 5</strong>
            <span className="text-xs text-zinc-400">Afterblock</span>
            </a>
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/d6.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 6</strong>
            <span className="text-xs text-zinc-400">the45yuv</span>
            </a>
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/mrg.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 7</strong>
            <span className="text-xs text-zinc-400">hevofo4ever</span>
            </a>
            <a href='' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" >
            <Image src="/mrg.jpg" className="w-full" width={112} height={112} alt='Mrg'/>
            <strong className="font-semibold">Daily mix 8</strong>
            <span className="text-xs text-zinc-400">Tffanuy231</span>
            </a>
          </div>

        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <Image src="/mrg.jpg" width={56} height={56} alt='Mrg'/>
        <div className="flex flex-col">
          <strong className="font-normal"> Não veremos uma adapatção de elders Scrolls ? | Mata ou pilota</strong>
          <span className="text-xs text-zinc-400"> Matando Robôs Gigantes</span>
          
        </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle  size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black">
            <Play fill='bg-black' size={20} className="text-zinc-900" /></button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400"> 2:22</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-8 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400"> 29:14</span>
          </div>

        </div>

        <div className="flex items-center gap-4">
          <Mic2 size="20" />
          <LayoutList size="20" />
          <Laptop2 size="20" />
          <div className="flex items-center gap-2">
            <Volume size="20" />
            <div className="h-1 rounded-full w-20 bg-zinc-600">
              <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize size="20" />

        </div>

      </footer>
    </div>
  );
}
