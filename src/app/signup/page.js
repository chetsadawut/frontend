
export default function Page() {
  return (
    <>
      <br /><br /><br />
      <div className="container">

        <div class="card">
          <div class="card-body">

            <div className="col-auto">
            <label htmlFor="inputEmail4" className="form-label">Username</label>
              <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="" />
              </div>
            </div>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign up</button>
              </div>
            </form>
            </form>

          </div>
        </div>

      </div>
    </>
  );
}
