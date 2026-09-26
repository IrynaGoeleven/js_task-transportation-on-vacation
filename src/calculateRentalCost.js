/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discount = days >= 7 ? 50 : days >= 3 ? 20 : 0;

  return days * dailyRate - discount;
}

module.exports = calculateRentalCost;
