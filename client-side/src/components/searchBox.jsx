import '@fortawesome/fontawesome-free/css/all.min.css';

function SearchBox(){
return(<>
<div className="input-group">
  <input placeholder="Search...">
  </input>
  <button><i className="fas fa-search"></i></button>
</div>

    </>)
}
export default SearchBox;