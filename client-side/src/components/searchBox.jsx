function SearchBox(){
return(<>
    <div className="input-group">
  <div className="form-outline" data-mdb-input-init>
    <input type="search" id="form1" className="form-control" />
    <label className="form-label" htmlFor="form1">
      Search
    </label>
  </div>
  <button type="button" className="btn btn-primary" data-mdb-ripple-init>
    <i className="fas fa-search"></i>
  </button>
</div>

    </>)
}
export default SearchBox;