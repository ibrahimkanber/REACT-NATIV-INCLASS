/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text} from "react-native";
import Mybanner from "./components/MyBanner";
import MyButton from "./components/MyButton";


const food_data = [
    {
      id: 0,
      title: 'Çorbalar',
      desc: 'Birbirinden leziz çorbalar!',
      color: '#e57373',
      isActive: false,
    },
    {
      id: 1,
      title: 'Ara Sıcaklar',
      desc: 'Lezzetlei aparetifler',
      color: '#81d4fa',
      isActive: true,
    },
    {
      id: 2,
      title: 'Ana Yemekler',
      desc: 'Doyurucu lezzetler',
      color: '#ffd54f',
      isActive: false,
    },
    {
      id: 3,
      title: 'Alkolsüz İçecekler',
      desc: 'Buz gibi serinletici lezzetler',
      color: '#cfd8dc',
      isActive: false,
    },
  ];



const App=(props)=>{

    return(
        <View style={{flex:1}}>
            {
                food_data.map(food=>{
                    return(
                        <Mybanner
                        title={food.title}
                        desc={food.desc}
                        color={food.color}
                        isActive={food.isActive}
                        key={food.id}
                        />
                    )
                })
            }
            <View>
            <MyButton/>
            </View>
          
        </View>
    )
}

export default App;