export const NavBar = () => {
    return (
        <header class="w-full fixed backdrop-blur-md p-2">
            <div class="mx-auto max-w-3xl">        
                <nav class="flex flex-row items-center gap-3 text-md text-zinc-300 p-2 space-x-7">
                    <a href="/#/" class="text-lg tracking-widest"><span class="font-bold">JErickGM</span></a>
                    <a href="/work/" class="hidden">Trabajos</a>
                    <a href="#" class="hidden">Blog</a>
                    <a href="https://github.com/jerickgm89" class="flex gap-2 items-center">GitHub</a>
                </nav>
            </div>
        </header>
    )
}