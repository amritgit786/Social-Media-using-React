const WelcomeMessage = () => {
  // { getPostOnClick }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center mt-5">There are no Posts</h1>
          <div className="col-md-3">
            {/* <button type="button" className="btn btn-primary mt-3">
              onClick={getPostOnClick}
              Get Posts from Server
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
