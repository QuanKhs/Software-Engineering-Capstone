import React, { useEffect, useState } from "react";
import * as SC from "./style";
import iconSearch from "../../common/image/iconSearch.png";
import iconPlus from "../../common/image/iconPlus.png";
import Ripples from "react-ripples";
import Header from "../../components/header";
import CreateBucket from "../createBucket";
import Bucket from "../bucket";


const HomePage = (props) => {
  const [isOpenCre, setOpen] = useState(false);

  const close = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <SC.Container>
        <CreateBucket close={(value) => close(value)} isOpen={isOpenCre} />
        <SC.SearchBar>
          <SC.SearchBtn src={iconSearch} />
          <SC.SearchInput type="text" placeholder="Search for buckets" />
        </SC.SearchBar>
        <SC.GroupBtn>
          <Ripples color="rgba(255,255,255,0.7)" during="1000">
            <SC.CreateBucket
              onClick={() => {
                setOpen(!isOpenCre);
              }}
            >
              <SC.CreateBucketIcon src={iconPlus} />
              <SC.CreateBucketText>Create Bucket</SC.CreateBucketText>
            </SC.CreateBucket>
          </Ripples>
          <SC.Pain>
            <Ripples color="rgba(0,0,255,0.5)" during="1000">
              <SC.OtherBtn>Delete Bucket</SC.OtherBtn>
            </Ripples>
          </SC.Pain>
          <SC.Pain>
            <Ripples color="rgba(0,0,255,0.5)" during="1000">
              <SC.OtherBtn>Empty Bucket</SC.OtherBtn>{" "}
            </Ripples>
          </SC.Pain>
          <SC.TheNumberOfBucket>5 </SC.TheNumberOfBucket>
          <SC.BucketText>Bucket</SC.BucketText>
        </SC.GroupBtn>
        {/* ///////////////// */}
        <Bucket/>
        {/* //////////////// */}
      </SC.Container>
    </>
  );
};

export default HomePage;
