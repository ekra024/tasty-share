import React from 'react';

const RequtedFoodTable = ({food}) => {
  const {pickupLocation, requestDate, donatorName, foodImage, foodName, expireDate} = food;
  return (
    <tr>
      <td>{foodName}</td>
      <td>
        <img className="w-10 h-10" src={foodImage} alt="" />
      </td>
      <td>{pickupLocation}</td>
      <td>{donatorName}</td>
      <td>{requestDate}</td>
      <td>
        {expireDate}
      </td>
    </tr>
  );
};

export default RequtedFoodTable;