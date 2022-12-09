import Form from "react-bootstrap/Form";

function SecondPart() {

  return (
    <div className="py-4 general-height w-100 d-flex flex-column align-items-center">
      <h1 className="text-light fw-bold mb-4 w-75">Insert Page</h1>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <Form className="w-75 rounded">
          <div className="cont-form">
            <h5 className="label-style fn-purp fw-bold">Username</h5>
            <input
              className="input-style w-100"
              type={"text"}
              placeholder="Input Username"
            ></input>
          </div>

          <div className="cont-form">
            <h5 className="label-style fn-purp fw-bold">Email</h5>
            <input
              className="input-style w-100"
              type={"email"}
              placeholder="Input Email"
            ></input>
          </div>

          <div className="cont-form">
            <h5 className="label-style fn-purp fw-bold">Address</h5>
            <input
              className="input-style w-100"
              type={"text"}
              placeholder="Input Address"
            ></input>
          </div>

          <div className="cont-form">
            <h5 className="label-style fn-purp fw-bold">Phone</h5>
            <input
              className="input-style w-100"
              type={"text"}
              placeholder="Input Phone"
            ></input>
          </div>

          <div className="cont-form">
            <h5 className="label-style fn-purp fw-bold">Password</h5>
            <input
              className="input-style w-100"
              type={"password"}
              placeholder="Input Password"
            ></input>
          </div>

        </Form>
      </div>
    </div>
  );
}

export default SecondPart;
