import React from 'react';
import './App.css';
import {Pagination} from './components/pagination';
import {getData} from './services/services';
import ImageList from './components/ImageList/ImageList';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      images: [],
      totalImages: 0,
      perPage: 12,
      currentPage: 1,
      loading: false,
      query:""
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


  render(){
    const {loading, currentPage, perPage, totalImages} = this.state;
    return(
      <>
        <SearchBar onSearch={this.onSearch}/>
        {loading && <div>Loading...</div>}
        {!loading && <ImageList images={this.state.images} />}

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
