import React from 'react';
import './App.css';
import {Pagination} from './components/pagination';
import {getData} from './services/services';
import ImageList from './components/ImageList/ImageList';
import SearchBar from './components/SearchBar/SearchBar';
import ImageModal from './components/modal/ImageModal';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      images: [],
      totalImages: 0,
      perPage: 12,
      currentPage: 1,
      loading: false,
      query:"",
      clickedImageId: '',
      clickedImageUrl: '',
      modalOpen: false

    }
  }

  componentDidMount(){
    this.fetchImages(this.state.currentPage);
  }

  fetchImages(page){
    const { perPage, query } = this.state;
    const options = {
      page: page,
      per_page: perPage,
      query: query
    };
    const path = query ?  "/search/photos/" : "/photos/";
    
    this.setState({loading: true});
    getData(path, options)
      .then((response) => {
        this.setState({
          loading: false,
          images: query ? response.data.results :  response.data,
          totalImages: parseInt(response.headers['x-total']),
          currentPage: page
        });
      })
      .catch((error) => {
        this.setState({loading: false});
        console.log("Error" + error);
      });
  }
  onSearch = (query) => {
    this.setState({
      query: query
    }, () => {
      console.log("### " + this.state.query);
      this.fetchImages(1);
    });
    
  }

  toggleLike = (imageId) => {
    const updatedImages = this.state.images.map(imageObject => {
      if(imageObject.id === imageId){
        const isLiked = imageObject.liked_by_user;
        let updatedImage = {...imageObject};
        updatedImage.liked_by_user = !isLiked;
        updatedImage.likes = isLiked ? (updatedImage.likes - 1) : (updatedImage.likes + 1);
        return updatedImage;
      }
      else {
        // return {...imageObject};
        return imageObject;
      }
    });

    this.setState({
      images: updatedImages
    });
  }

  imageClick = (imageId, imageUrl) => {
    this.setState({
      clickedImageUrl: imageUrl,
      clickedImageId: imageId,
      modalOpen: true
    });
  }

  closeModal = () => {
    this.setState({
      clickedImageUrl: '',
      clickedImageId: '',
      modalOpen: false
    });
  }

  render(){
    const {loading, currentPage, modalOpen, perPage, totalImages} = this.state;
    return(
      <>
        <SearchBar onSearch={this.onSearch}/>
        {loading && <div>Loading...</div>}
        {!loading && <ImageList toggleLike={this.toggleLike} imageClick={this.imageClick} images={this.state.images} />}
        {modalOpen && <ImageModal 
          closeModal={this.closeModal}
          src={this.state.clickedImageUrl}
        />}
        <Pagination
          onPageChanged={this.fetchImages.bind(this)}
          current={currentPage}
          total={totalImages}
          perPage={perPage}
        />
      </>
    )
  }
}

export default App;
