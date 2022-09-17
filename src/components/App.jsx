import { Component } from "react";
import { FavoritePage } from "./FavoritePage/FavoritePage";
import ImagesPage from "./ImagesPage/ImagesPage";
import SelectBasicExample from "./Select/Select";

 class App extends Component {
  state = {
    favoriteImages: [],
    choicePage: '',
  }

  handleChoice = ({target:{value}}) => {
    this.setState({
      choicePage:value
    })
  }

  handlerAddFavorite = img => {
    if (this.state.favoriteImages.find(item => item.id === img.id)) {
      alert('Такое фото уже есть');
      return;
    }
    this.setState({
      favoriteImages: [...this.state.favoriteImages, img],
    });
  };

render() {
  return (
    <div>
     <SelectBasicExample onChange = {this.handleChoice}/>
     {this.state.choicePage === "images" && <ImagesPage add = {this.handlerAddFavorite}/>}
     {this.state.choicePage === "favoriteImages" && <FavoritePage images={this.state.favoriteImages} />}
    
    </div>
  )
}

}
export default App