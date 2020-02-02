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
            this.createUserItem('Mark','IT',3),
            this.createUserItem('David','IT',5),
            this.createUserItem('Helena','Marketing',5),
            this.createUserItem('Anna','Marketing',4),
        ]
      };

    createUserItem(label,department,score){
        return{
            label:label,
            department:department,
            id: this.maxId++,
            score: score
        }
    }

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

      addItem = (text,department, score) => {
        const newItem = {
            label: text,
            department:department,
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

