import * as SC from "./style";
import Ripples from "react-ripples";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddBucket } from "./bucketSlide";

const CreateBucket = (props) => {
  const [bucket, setBucket] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBucket(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    dispatch(AddBucket({ name: bucket, create: date, data: [] }));
    props.close(false);
  };

  return (
    <SC.Container
      style={{
        overlay: {
          background: "rgba(0,0,0,0.4)",
        },
      }}
      isOpen={props.isOpen}
    >
      <SC.Header>
        <SC.Title>Create Bucket</SC.Title>
      </SC.Header>
      <SC.Form onSubmit={handleSubmit}>
        <SC.Input
          onChange={handleChange}
          type="text"
          placeholder="Bucket Name"
          required
        />

        <SC.GroupBtn>
          <Ripples>
            <SC.Cancle onClick={() => props.close(false)}>Cancle</SC.Cancle>
          </Ripples>
          <Ripples>
            <SC.Submit>Create Bucket</SC.Submit>
          </Ripples>
        </SC.GroupBtn>
      </SC.Form>
    </SC.Container>
  );
};

export default CreateBucket;
