import React from 'react';

function JournalCard() {
  return (
    <div className="card">
      <div className="row no-gutters p-2 p-md-3 align-items-center">
        <div className="col-sm-4">
          <div className="card-body">
            <div className="h5">
              Total items: <span>30</span>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card-body d-flex flex-column">
            <div className="text-uppercase ">
              <span className="text-muted">Order Date:</span>
              <span>13-03-2020</span>
            </div>
            <div className="text-uppercase ">
              <span className="text-muted">Confirmation date:</span>
              <span>13-03-2020</span>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card-body d-flex flex-column">
            <div className="text-uppercase ">
              <span className="text-muted">Status:</span> <span>Delivered</span>
            </div>
            <div className="text-uppercase ">
              <span className="text-muted">Delivery Date:</span>
              <span>13-03-2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JournalCard;
