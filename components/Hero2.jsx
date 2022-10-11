import React from 'react'
import Navbar from './Navbar'

export const Hero2 = () => {
  return (
    <div class="bg-white">
    <Navbar />

  <main>
    <div id="Hero">
      <div class="relative pt-24">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-white"></div>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1665106738590-dfe81f22a428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="People working on laptops"/>
              <div class="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Te acompañamos en tu </span>
                <span class="block text-blue-400">crecimiento digital</span>
              </h1>
              <p class="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">Una empresa que reune a las personas capacitadas junto a las necesidades mas complejas</p>
              <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
                  <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-blue-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Mas informacion</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-base font-semibold text-gray-500">Confian en nosotros las siguientes empresas:</p>
          <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://aposlr.gob.ar/wp-content/uploads/2022/04/Logo_vertical.jpg" alt="Tuple"/>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://i.imgur.com/evTSOC9.png" alt="Mirage"/>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://transportechilecito.com.ar/wp-content/uploads/2020/03/cropped-logo2.png" alt="StaticKit"/>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img class="h-12" src="https://scontent.firj1-1.fna.fbcdn.net/v/t39.30808-6/221326363_126504446323568_5069093750982673412_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ybh6nBjPLZkAX-UiG4v&_nc_ht=scontent.firj1-1.fna&oh=00_AT_AGzlFp57Hf8wsDwQjQ619QxhparpJxQhGSZADsVssEg&oe=634965FF" alt="Transistor"/>
            </div>
            <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img class="h-12" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_de_Claro.svg" alt="Workcation"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</div>

  )
}
