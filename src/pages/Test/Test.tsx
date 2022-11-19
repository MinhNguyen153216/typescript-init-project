import React from "react";
import { history } from "../../index";
import Slider from "react-slick";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Test({}: Props) {
  const { tempObj, tempArray } = useSelector(
    (state: RootState) => state.tempReducer
  );
  const dispatch: AppDispatch = useDispatch();

  const handlePush = (): void => {
    history.push("/");
  };

  const logTempValues = (): void => {
    console.log(tempObj);
    console.log(tempArray);
  };
  return (
    <>
      <div className="container ">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

      <button className="btn btn-success" onClick={handlePush}>
        History Push
      </button>

      {logTempValues()}
    </>
  );
}
