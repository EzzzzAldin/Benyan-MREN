import CardStatus from "../../ui/CardStatus/CardStatus";
function Status() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <CardStatus counter="120" title="Projects" />
          </div>

          <div className="col-12 col-md-3">
            <CardStatus counter="150" title="Users" />
          </div>
          <div className="col-12 col-md-3">
            <CardStatus counter="200" title="Developers" />
          </div>
          <div className="col-12 col-md-3">
            <CardStatus counter="50" title="Blogs" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Status;
