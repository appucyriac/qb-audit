import React, { Component } from "react";
import StarRating from "react-star-ratings";

export default class StarRatingComponent extends React.Component {
  

  sendLabel = (rating) =>{
    this.props.func(this.props.keyLabel, rating);
  }

  
  render() {
    return (
        <div>
          <label htmlFor="">{this.props.parameter} </label>
          <StarRatings
            rating={this.props.rating}
            isSelectable={true}
            isAggregateRating={false}
            changeRating={this.sendLabel}
            numOfStars={10}
            starWidthAndHeight={"20px"}
            starSpacing={"3px"}
          />
        </div>
    );
  }
}