import './Clone.css'
import products from "./movies/Movies"
import { useState } from 'react'




const Card = ({img,title}) => {
   return (
   
     <div className='card'>
         <img src={img} alt="" />
         <br/><span className='title' style={{marginBottom:"10px"}}>{title}</span>
      </div>
   )
}

function Button({onClickHandler,value,title}){
   return (
     <button onClick={onClickHandler} value={value} className="btn">{title}</button>
   )
 }
 


const Categories = ({handleClick}) => {
    return(
       <div className="categories">
          <Button onClickHandler={handleClick} value="" title="All Movies" className="btns"/>
          <Button onClickHandler={handleClick} value="Hollywood" title="Hollywood" />
          <Button onClickHandler={handleClick} value="Bollywood" title="Bollywood" />
          <Button onClickHandler={handleClick} value="Nollywood" title="Nollywood"/>
       </div>
    )
}
 
const Sidebar = ({handleClick}) => {
    return(
        <div className='sidebar'>
           <Categories handleClick={handleClick} />
         </div>
     )
 }


 const Navbar = ({handleInputChange}) => {
    return (
      
      <div className='navbar'>
         <div  className="gradient" style={{background:"black",top:"-7rem",width:"21rem",filter:"blur(90px)",height:"11rem",left:"-20rem",marginLeft:"50px"}}></div>
         <h1 style={{marginLeft:"85px",color:"black",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}><span style={{fontSize:"55px",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>M</span>ovies</h1>
         <input type="text" placeholder='Search Movies...' onChange={handleInputChange} className='input'/>
      </div>
      
    )
 }

 const List = ({result}) => {
    return (
      <section className='list-card'>{result}</section>
    )
 }
 

 const App = () => {
   const [selectedCategory,setSelectedCategory] = useState(null)
   const [query,setQuery] = useState("")

   function handleInputChange(event) {
      setQuery(event.target.value)
   }
   
   const filteredItems = products.filter(
      (product) => product.title.indexOf(query) 
      !== -1
      );

      const handleClick = (e) =>{
         setSelectedCategory(e.target.value)
      }

      function filteredData(products, selected , query){
         let filteredProducts = products
       
         //---fitering input items
         if (query){
           filteredProducts = filteredItems
         }
       
         if (selected) {
           filteredProducts = filteredProducts.filter(({category,color,price,title})=> category === selected || color === selected ||
           price === selected || title === selected )
         }
       
         return filteredProducts.map(({img,title}) =>(
            <Card 
             key={Math.random() }
             img={img}
             title={title}
            />
         ))
        }
       
        const result = filteredData(products,selectedCategory,query)
   return(
      <div className='clone'>
        <Sidebar handleClick={handleClick}/>
        <div className='left'>
        <Navbar handleInputChange={handleInputChange}/>
        <List result={result}/>
        </div>   
      </div>
   )
 }
 
 export default App;

