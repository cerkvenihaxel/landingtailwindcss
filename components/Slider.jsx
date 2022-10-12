import React from 'react'

export const Slider = () => {
  return (
    <section class="text-gray-700 -my-1 body-font pb-12 bg-black">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-5xl text-5xl font-medium title-font mb-2 text-white">Nuestros servicios.</h1>
          <div class="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-200">Brindamos el soporte que necesitas para diseñar, desarrollar, implementar y mantener tus aplicaciones. Nuestros servicios proporcionaran mejores experiencias tanto para los usuarios finales internos como para tus clientes externos.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-200 bg-opacity-10 p-6 rounded-lg  hover:bg-blue-500 hover:bg-opacity-30 hover:text-white ease-in duration-200">
            <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 ease-in duration-500" src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="content"/>
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">S-GINE</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">Software de control y gestión</h2>
            <p class="text-gray-300 leading-relaxed text-base">Desarrollo de sistemas integrales para empresas y negocios</p>
          </div>
        </div>

        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-200 bg-opacity-10 p-6 rounded-lg  hover:bg-blue-500 hover:bg-opacity-30 hover:text-white ease-in duration-200">
            <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 ease-in duration-500" src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="content"/>
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">DevOps</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">Desarrollo web y movil</h2>
            <p class="text-gray-300 leading-relaxed text-base">Diseños a medida de paginas web y aplicaciones Android & iOS</p>
          </div>
        </div>

        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-200 bg-opacity-10 p-6 rounded-lg  hover:bg-blue-500 hover:bg-opacity-30 hover:text-white ease-in duration-200">
            <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 ease-in duration-500" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="content"/>
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">Ventas</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">E-commerce</h2>
            <p class="text-gray-300 leading-relaxed text-base">Desarrollo de plataformas de comercio y catalogos online para tus productos</p>
          </div>
        </div>

        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-200 bg-opacity-10 p-6 rounded-lg  hover:bg-blue-500 hover:bg-opacity-30 hover:text-white ease-in duration-200">
            <img class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 ease-in duration-500" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="content"/>
            <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">Analisis</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">Consultorias</h2>
            <p class="text-gray-300 leading-relaxed text-base">Auditoria y consultorias de arquitectura, tecnologias y UX/UI</p>
          </div>
        </div>
       
      
       
      </div>
    </div>
  </section>
  )
}
