<template>
  <div class="movie-slider bg-[#1C1C1E] p-6 flex flex-col items-center">
    <h2 class="text-white text-2xl mb-4 font-bold">{{ title }}</h2>
    <div class="relative w-full max-w-[1200px]">
      <div class="flex space-x-4 overflow-hidden">
        <div 
          class="flex space-x-4 transition-transform duration-500 ease-in-out" 
          :style="{ transform: `translateX(${-translateX}px)` }"
        >
          <div 
            v-for="(movie, index) in movies" 
            :key="movie.id" 
            class="flex-shrink-0 w-[200px] h-[400px] transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            :style="{ zIndex: movies.length - index }"
            @click="openMovieDetails(movie)"
          >
            <div class="relative group">
              <img 
                :src="movie.poster" 
                :alt="movie.title" 
                class="w-full h-[300px] object-cover rounded-t-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              >
              <div 
                class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex flex-col items-center justify-center text-white p-4"
              >
                <p class="text-lg font-bold mb-2">{{ movie.title }}</p>
                <p class="text-sm mb-4">{{ movie.genre }}</p>
                <button class="bg-[#efaa31] text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-opacity-90">
                  Watch Now
                </button>
              </div>
              <span 
                v-if="movie.status === 'New'" 
                class="absolute mt-2 left-3 bg-[#efaa31] text-black text-xs font-bold px-2 py-1 rounded z-10"
              >
                New
              </span>
              <div 
                class="py-8 px-5 text-white text-left rounded-b-lg transition-colors duration-300"
                :style="{ background: movie.isHovered ? 'linear-gradient(90deg, #2C2C2E 10.33%, #2C2C2E 65.62%)' : 'linear-gradient(90deg, #121212 10.33%, #121212 65.62%)' }"
                @mouseenter="movie.isHovered = true" 
                @mouseleave="movie.isHovered = false"
              >
                <p class="text-base font-semibold">{{ movie.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button 
        @click="scrollLeft" 
        class="absolute top-0 left-0 h-full w-16 bg-black bg-opacity-70 hover:bg-opacity-80 text-white flex items-center justify-center z-10 group border border-white border-opacity-50 transform hover:scale-105 transition-transform"
        v-if="startIndex > 0"
        aria-label="Scroll Left"
      >
        <svg class="w-8 h-8 transform -translate-x-1 group-hover:scale-125 transition-transform text-white text-opacity-80 group-hover:text-opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button 
        @click="scrollRight" 
        class="absolute top-0 right-0 h-full w-16 bg-black bg-opacity-70 hover:bg-opacity-80 text-white flex items-center justify-center z-10 group border border-white border-opacity-50 transform hover:scale-105 transition-transform"
        v-if="!isEnd"
        aria-label="Scroll Right"
      >
        <svg class="w-8 h-8 transform translate-x-1 group-hover:scale-125 transition-transform text-white text-opacity-80 group-hover:text-opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script src="./swimLane"> </script>

<style scoped>
.movie-slider > div {
  width: 100%;
}
</style>