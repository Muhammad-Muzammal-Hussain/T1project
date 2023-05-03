import React from 'react'
import MenuCard from './MenuCard'
import Menu from './menuapi'
import { useState } from 'react';
import Navbar from './Header'
const uniqiueList =  [
  ...new Set(Menu.map((currElem)=>{
    return currElem.category
  })),
  'All'
]
console.log(uniqiueList)
  



export default function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]=useState(uniqiueList)
  const filterItem = (category) => {
    if(category==='All'){
      setMenuData(Menu)
      return
    }
    const updatedList = Menu.filter((currElem)=>{
       return currElem.category===category
    }) 
      setMenuData(updatedList)
    
    
  }
  

  return (
    <>
          <Navbar filterItem={filterItem} menuList={menuList} />

      <MenuCard menuData={menuData}/>
    </>
  )
}
