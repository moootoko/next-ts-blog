const Test = () => (
  <>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal1">
      Launch demo modal
    </button>
    <div className="modal fade" id="modal1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container-fluid">
                <div className="row my-3">
                  <div className="col-6 d-flex justify-content-center">
                    <iframe width="400" height="225" src="https://www.youtube.com/embed/Plpb8bQw3bo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <iframe width="400" height="225" src="https://www.youtube.com/embed/8aPtowo25nI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-6 d-flex justify-content-center">
                    <iframe width="400" height="225" src="https://www.youtube.com/embed/TtEtYRZZW3g" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <iframe width="400" height="225" src="https://www.youtube.com/embed/Yw8tQXNmgxw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Test;