import React from "react";
import horizontal from "./horizontal.svg";
import "./style.css";
import vector88 from "./vector-88.svg";
import vector from "./vector.svg";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="rectangle" />

            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="rectangle-4" />

            <div className="group">
              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>

              <div className="overlap-2">
                <div className="text-wrapper-2">Followers growth</div>
              </div>
            </div>

            <div className="group-2">
              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>

              <div className="overlap-2">
                <div className="text-wrapper-2">Followers growth</div>
              </div>
            </div>

            <div className="group-3">
              <div className="overlap-2">
                <div className="text-wrapper-3">Engagement rate</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>
            </div>

            <div className="group-4">
              <div className="overlap-2">
                <div className="text-wrapper-3">Engagement rate</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>
            </div>

            <div className="group-5">
              <div className="overlap-2">
                <div className="text-wrapper-4">Posting frequency</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>
            </div>

            <div className="group-6">
              <div className="overlap-2">
                <div className="text-wrapper-4">Posting frequency</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>
            </div>

            <div className="group-7">
              <div className="overlap-2">
                <div className="text-wrapper-4">Influence quotient</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>
            </div>

            <div className="group-8">
              <div className="overlap-2">
                <div className="text-wrapper-4">Influence quotient</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper">10</div>
              </div>
            </div>

            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="text-wrapper-5">100</div>
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-3">
                <div className="text-wrapper-5">100</div>
              </div>
            </div>

            <img className="vector" alt="Vector" src={vector88} />

            <div className="text-wrapper-6">user 1 name</div>

            <div className="text-wrapper-7">user 2 name</div>
          </div>

          <img className="img" alt="Vector" src={vector} />

          <div className="overlap-4">
            <div className="text-wrapper-8">competition title</div>
          </div>

          <div className="overlap-5">
            <p className="cards-presented-by">
              <span className="span">
                cards
                <br />
                presented by
              </span>

              <span className="text-wrapper-9"> BArter</span>
            </p>

            <img className="horizontal" alt="Horizontal" src={horizontal} />
          </div>
        </div>

        <div className="overlap-6">
          <div className="text-wrapper-10">Enter X username</div>
        </div>

        <div className="overlap-7">
          <div className="text-wrapper-11">Enter X username</div>
        </div>

        <div className="overlap-8">
          <div className="text-wrapper-12">Competition title</div>
        </div>

        <div className="save-image-wrapper">
          <div className="save-image">Save Image</div>
        </div>

        <div className="overlap-9">
          <div className="text-wrapper-13">Share with X</div>
        </div>
      </div>
    </div>
  );
};

