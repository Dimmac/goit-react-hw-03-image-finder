import {SearchbarStyle} from './Searchbar.styled'

const Searchbar = () => {

//     onSubmit = (event) => {
// event.preventDefault();
//     }
fetch('https://pixabay.com/api/?q=cat&page=1&key=24470398-c309df70e691fcddcf65d58a2&image_type=photo&orientation=horizontal&per_page=12').then(res => res.json()).then(data => data)

    return (<SearchbarStyle>
        <h1>Searchbar component</h1>
        {/* <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header> */}
        </SearchbarStyle>)
}
export default Searchbar