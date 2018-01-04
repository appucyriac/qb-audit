import React, { Component } from "react";
import StarRatings from "react-star-ratings";


export default class RatingComponent extends React.Component {
  

  sendLabel = (rating) =>{
    this.props.func(this.props.keyLabel, rating);
  }

  
  render() {
    return (
        <div>
          <StarRatings
            rating={this.props.rating}
            isSelectable={true}
            isAggregateRating={false}
            changeRating={this.sendLabel}
            numOfStars={10}
            starWidthAndHeight={"20px"}
            starSpacing={"3px"}
            starRatedColor={'rgb(230, 67, 47)'}
            starSelectingHoverColor={'rgb(230, 67, 47)'}
          />
        </div>
    );
  }
}