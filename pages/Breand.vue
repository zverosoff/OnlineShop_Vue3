<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col justify-normal pt-[100px] sm:ml-[40px] ml-[20px]">
      <span class="flex flex-row font-light"
        ><nuxt-link to="/"><a href="#"> /</a></nuxt-link> / О бренде</span
      >
      <span class="flex flex-row text-3xl font-bold mt-[20px]">History</span>
    </div>
    <div class="flex flex-row justify-between w-100%">
      <div class="flex flex-col w-full">
        <span class="sm:ml-[40px] mr-[20px] ml-[20px] mt-[20px] text-sm text-neutral-700 font-light"
          >We started in a wash room and conquered the world. And in between, we’ve scored big and sometimes struggled
          to reach our goals. We’ve done our best for the best. We’ve improved and grown. Looking ahead to the future,
          always remembering where we came from. This is our story.</span
        >
        <span class="flex flex-row text-3xl font-bold sm:ml-[40px] mt-[20px] ml-[20px]"> THE EARLY YEARS</span>
        <span class="sm:ml-[40px] mr-[20px] ml-[20px] mt-[20px] text-sm text-neutral-700 font-light"
          >Every great story has a beginning. This one started in a small town in Bavaria, Germany. After starting out
          in his mother’s wash kitchen, Adi Dassler registered the ‘Gebrüder Dassler Schuhfabrik’ in 1924 and embarked
          on his mission to provide athletes with the best possible equipment. Gold medals in Amsterdam (1928, Lina
          Radke) and Berlin were first rewards and milestones – and only the start of our story.</span
        >
      </div>

      <div class="h-100%"><img src="@/readme/img/1.jpg" /></div>
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
