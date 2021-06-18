import React from 'react';

const SCP = ({scp}) =>
{
    return(
        
        
        <div>
            
            {
               scp.map(
                   (scp) => (
                     <div >
                     <section key={scp.id} id={scp.item} className="section" >
                    <div className="container border border-primary bg-light" >
                                  <div className="row">
                                  <div className="col-lg-12 col-md-6 col-xs-12">
                          <div className="services-item text-left ">
                            <h4 className="text-primary text-center">{scp.item.toString()}</h4>
                            <div className="business-item-img text-center">
                            {/* <img src={scp.image.toString()} className="img-fluid rounded" alt={scp.image.toString()}></img> */}
                          </div>
                          <h5 className="text-muted">{scp["class"]}</h5>
                          <h5>Description</h5>
                            <p className="text-secondary">{scp["description"]}</p>
                            <h5>Containment</h5>
                            <p  className="text-secondary">{scp["containment"]}</p>
                          </div>
                        </div>
                        </div>
                        
                    </div>
                    <hr></hr>
                  </section>
                  </div>
                   )
               )
            }

        </div>
      

    )
}

export default SCP;