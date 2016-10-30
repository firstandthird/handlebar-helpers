module.exports = function(obj, index) {
  const item = obj[index + 1];
  if (!item) {
    return;
  }
  return item.url;
};
