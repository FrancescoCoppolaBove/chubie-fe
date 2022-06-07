export const fromWeiToEth = (wei, decimal) => {
  return +(+(wei * Math.pow(10, -18)).toFixed(decimal));
};
