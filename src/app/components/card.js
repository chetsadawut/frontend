import Image from "next/image";

export default function card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
            <div className="card">
                <Image src="/assets/img/4.png" layout="responsive" className="card-img-top" width={500} height={500} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Creamy Irish Coffee</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go To Recipe</a>
                </div>
                </div>
            </div>
        <div className="col-md-4">
            <div className="card">
                <Image src="/assets/img/5.png" layout="responsive" className="card-img-top" width={500} height={500} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Caramel Mocha</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go To Recipe</a>
                </div>
                </div>
            </div>
        <div className="col-md-4">
            <div className="card">
                <Image src="/assets/img/6.png" layout="responsive" className="card-img-top" width={500} height={500} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Iced Coffee Latte</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go To Recipe</a>
                </div>
                </div>
            </div>
      </div>
    </div>
  )
}