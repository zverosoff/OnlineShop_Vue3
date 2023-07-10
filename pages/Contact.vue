<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col justify-normal pt-[100px] sm:ml-[40px] ml-[20px]">
      <span class="flex flex-row font-light"
        ><nuxt-link to="/"><a href="#"> /</a></nuxt-link> / Contact</span
      >
      <span class="flex flex-row text-3xl font-bold mt-[20px]">MEDIA CONTACT</span>
    </div>
    <div class="flex flex-row justify-between w-100%">
      <div class="flex flex-col w-full">
        <span class="sm:ml-[40px] mr-[20px] ml-[20px] mt-[20px] text-sm text-neutral-700 font-light"
          >You can find our switchboard number below. Please scroll down to contact the responsible team for more
          specific questions.
        </span>
        <span class="flex flex-row text-3xl font-bold sm:ml-[40px] mt-[20px] ml-[20px]"> ADIDAS AG</span>
        <span class="sm:ml-[40px] mr-[20px] ml-[20px] mt-[20px] text-sm text-neutral-700 font-light"
          >World of Sports Adi-Dassler-Straße 1 91074 Herzogenaurach Germany</span
        >
      </div>
      <div class="h-100%"><img src="@/readme/img/2.jpg" /></div>
    </div>
  </div>
  <footer
    class="fixed bottom-0 left-0 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6"
  >
    <span class="text-sm text-neutral-500 mt-2">© 2023 <a href="#" class="hover:underline">Vasyutkin Sergey</a> </span>

    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6"><nuxt-link to="/breand">О бренде</nuxt-link></a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Правила</a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Лицензия</a>
      </li>
      <li>
        <a href="#" class="hover:underline"><nuxt-link to="/contact">Контакты</nuxt-link></a>
      </li>
    </ul>
  </footer>
</template>

<script></script>
