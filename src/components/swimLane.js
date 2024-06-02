export default {
    props: {
      title: String,
      movies: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        translateX: 0,
        startIndex: 0,
        cardWidth: 208,
        visibleCards: 6
      }
    },
    computed: {
      isEnd() {
        return this.startIndex + this.visibleCards >= this.movies.length;
      },
      processedMovies() {
        return this.movies.map(movie => ({
          ...movie,
          isHovered: false
        }));
      }
    },
    methods: {
      scrollLeft() {
        const step = Math.min(this.startIndex, this.visibleCards);
        this.startIndex -= step;
        this.translateX = this.startIndex * this.cardWidth;
      },
      scrollRight() {
        const remainingCards = this.movies.length - (this.startIndex + this.visibleCards);
        const step = Math.min(remainingCards, this.visibleCards);
        this.startIndex += step;
        this.translateX = this.startIndex * this.cardWidth;
      },
      openMovieDetails(movie) {
        console.log(`Opening details for: ${movie.title}`);
      }
    },
    mounted() {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const width = entry.contentBoxSize[0].inlineSize;
          this.visibleCards = Math.max(1, Math.floor((width - 32) / this.cardWidth));
        }
      });
      resizeObserver.observe(this.$el.querySelector('.movie-slider > div'));
    }
  }