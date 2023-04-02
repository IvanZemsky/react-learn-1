import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         items: [
            {
               id: 1,
               title: 'Стул серый',
               img: 'gray-chair.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
               category: 'chairs',
               price: '49.99'
            },
            {
               id: 2,
               title: 'Стол',
               img: 'table.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
               category: 'tables',
               price: '49.99'
            },
            {
               id: 3,
               title: 'Набор полок',
               img: 'table.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
               category: 'tables',
               price: '70.12'
            },
            {
               id: 4,
               title: 'Шкаф',
               img: 'table.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
               category: 'tables',
               price: '60.30'
            },
            {
               id: 5,
               title: 'Табурет',
               img: 'gray-chair.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
               category: 'chairs',
               price: '50.15'
            }
         ]
      }
   }

   render(){
      return (
         <div className="wrapper">
            <Header />
            <Items items={this.state.items}/>
            <Footer />
         </div>
      );
   }
}

export default App;
