export default class NewsApiService {
    constructor() {
      this.searchName = '';
      this.perPage = 12;
      this.page = 1;
    }
  
    fetchImages() {
      const fetchImages = fetch(
        `https://pixabay.com/api/?key=24470398-c309df70e691fcddcf65d58a2&q=${this.searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`,
      ).then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error('Sorry, there are no images matching your search query. Please try again.'),
        );
      });
  
      this.incrementPage();
  
      return fetchImages;
    }
  
    incrementPage() {
      this.page += 1;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get query() {
      return this.searchName;
    }
  
    set query(newQuery) {
      this.searchName = newQuery;
    }
  }