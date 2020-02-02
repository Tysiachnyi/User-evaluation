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

    toggleProperty(arr,id,propName,newValue){

        const idx = arr.findIndex((el)=>el.id === id );
        // 1.
        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]:newValue};
        // 2.
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

    };

      editItem = (id) => {
          const userChoise = prompt("What you want change? Score or Department")
          if(userChoise.toLowerCase() == "score"){
              const newValue = prompt(`Please write new value for ${userChoise.toLowerCase()}`)
              this.setState(({user})=>{
                  return{
                      user:this.toggleProperty(user,id,'score',newValue)
                  }

              });
          }
          else if (userChoise.toLowerCase() == "department"){
              const newValue = prompt(`Please write new value for ${userChoise.toLowerCase()}`)
              this.setState(({user})=>{
                  return{
                      user:this.toggleProperty(user,id,'department',newValue)
                  }

              });
          }
          else{
              alert("we have some trouble")
          }

      };


    render(){
        return (
            <div>
                <Navbar
                navbarTitle={this.state.navBarData}/>
                <MainPage
                userInfo={this.state.user}
                onDeleted={ this.deleteItem}
                editItem={this.editItem}/>
                <ItemAddForm
                onItemAdded={this.addItem}/>
                <Footer/>
            </div>
        );
      };
};

