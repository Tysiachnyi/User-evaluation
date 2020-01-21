import React, {Component} from 'react';
import Navbar from '../navbar';
import MainPage from '../mainPage';
import ItemAddForm from '../item-add-form';
import Footer from '../footer';

export default class app extends Component {

  maxId = 100;

    state = {
        navBarData: [
          { label: 'Main', id: 1 }
         
        ],
        user:[
          {label: 'Alex', id:5, score:"5"},
          {label: 'Mark', id:6, score:"3"},
          {label: 'Both', id:7, score:"4"},
          {label: 'John', id:3, score:"5"},
          {label: 'Doe', id:11, score:"2"}
        ]
      };

      deleteItem = (id) => {

        this.setState(({user}) => {
          const idx = user.findIndex((el) => el.id === id);
          console.log("idx " + idx);

          //[a, b, c, d, e]
          //[a, b,  d, e]
          const before = user.slice(0, idx);
          const after = user.slice(idx + 1);

          const newArray = [...before, ...after];
          return{
            user: newArray
          }
        });
      };

      addItem = (text, score) => {
        const newItem = {
          label: text,
          score: score,
          id: this.maxId++
        };

        this.setState(({user}) => {

          const newArr = [
            ...user,
            newItem
          ];

          return{
            user:newArr
          };
        })

      };

      editItem = (id) => {
        alert("ok we test " + id)
      }


    render(){
        return (
            <div>
                <Navbar
                navbarTitle={this.state.navBarData}/>
                <MainPage
                userInfo={this.state.user}
                onDeleted={ this.deleteItem}
                onEdit={this.editItem}/>
                <ItemAddForm
                onItemAdded={this.addItem}/>
                <Footer/>
            </div>
        );
      };
};

