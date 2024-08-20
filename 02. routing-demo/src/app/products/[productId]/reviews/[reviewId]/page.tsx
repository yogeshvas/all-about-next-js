import React from "react";

export default function ReviewDetails({ params }: any) {
  return (
    <div>
      <h1>Review Details</h1>
      <p>
        Review ID: {params.reviewId} for product {params.productId}
      </p>
    </div>
  );
}
