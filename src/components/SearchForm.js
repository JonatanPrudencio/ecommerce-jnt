import iconSearch from '../images/ico-busq.png'
const SearchForm = () =>{

    return(
        <>


        

            <div className="head-navBar__search">

                <form>
                <input className='search__input' type="search" placeholder="Buscar producto"></input>
             <button className='search__btn' type="submit" ><img className='searchIcon--cfg' src={iconSearch}></img></button>
                </form>
            
             </div>
       
        
        
        </>
    )
}

export default SearchForm;