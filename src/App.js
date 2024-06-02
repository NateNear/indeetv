import MovieSlider from './components/swimLane.vue';

import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';
import image5 from './assets/images/image5.png';
import image6 from './assets/images/image6.png';
import image7 from './assets/images/image7.png';
import image8 from './assets/images/image8.png';
import image9 from './assets/images/image9.png';
import image10 from './assets/images/image10.png';
import image11 from './assets/images/image11.png';
import image12 from './assets/images/image12.png'

export default {
  components: { MovieSlider },
  data() {
    return {
      mostWatchedMovies: [
        { id: 1, title: 'Oppenheimer', poster: image1, status: 'New' },
        { id: 2, title: 'Past Lives', poster: image2 },
        { id: 3, title: 'Polite Society', poster: image3 },
        { id: 4, title: 'Robots', poster: image4 },
        { id: 5, title: 'Sanctuary', poster: image5 },
        { id: 6, title: 'Talk To Me', poster: image6, status: 'New'},
        { id: 7, title: 'About My Father', poster: image7 },
        { id: 8, title: 'Air', poster: image8 },
        { id: 9, title: 'Are You There God?', poster: image9 },
        { id: 10, title: 'Guardians Of The Galaxy', poster: image10 },
        { id: 11, title: 'Big George Foreman', poster: image11 },
        { id: 12, title: 'Beau Is Afraid', poster: image12 },
      ]
    }
  }
}