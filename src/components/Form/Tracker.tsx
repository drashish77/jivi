import { useEffect } from "react";

function RangeSlider(props) {
  useEffect(() => {
    const range: any = document.getElementById("range");
    const rangeV: any = document.getElementById("rangeV");

    const range2: any = document.getElementById("range2");
    const rangeV2: any = document.getElementById("rangeV2");

    const setValue = () => {
      const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      );
      const newPosition = 10 - newValue * 0.2;

      rangeV.innerHTML = `<span>${range.value}&nbsp;cm</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

      const newValue2 = Number(
        ((range2.value - range2.min) * 100) / (range2.max - range2.min)
      );
      const newPosition2 = 10 - newValue2 * 0.2;

      rangeV2.innerHTML = `<span>${range2.value}&nbsp;kg</span>`;
      rangeV2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
    };

    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener("input", setValue);
    range2.addEventListener("input", setValue);
    // setting default value of both the inputs
    document.getElementById("range").value = 185;
    document.getElementById("range2").value = 150;
  }, []);

  //Selected value effect
  function selectedEffectHeight(e) {
    const val = (e.target.value - 150) * 1.42;
    e.target.style.background =
      "linear-gradient(to right, #fff 0%, #fff " +
      val +
      "%, #f0959a " +
      val +
      "%, #f0959a 100%)";
  }

  function selectedEffectWeight(e) {
    const val = (e.target.value - 50) * 0.5;
    e.target.style.background =
      "linear-gradient(to right, #fff 0%, #fff " +
      val +
      "%, #f0959a " +
      val +
      "%, #f0959a 100%)";
  }

  return (
    <div className="range">
      <p className="heading">HEIGHT</p>
      <div className="range-wrap">
        <div className="range-value" id="rangeV">
          <span>{props.Height}&nbsp;cm</span>
        </div>
        <input
          type="range"
          id="range"
          min="150"
          max="220"
          onInput={selectedEffectHeight}
          onChange={props.getHeight}
        ></input>
      </div>

      <p className="heading">WEIGHT</p>
      <div className="range-wrap">
        <div className="range-value" id="rangeV2">
          <span>{props.Weight}&nbsp;kg</span>
        </div>
        <input
          type="range"
          id="range2"
          min="50"
          max="250"
          onInput={selectedEffectWeight}
          onChange={props.getWeight}
        ></input>
      </div>
    </div>
  );
}

export default RangeSlider;
