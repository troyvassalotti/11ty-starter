/**
 * @file Custom template filters
 */
module.exports = {
  /**
   * Date string used in header data on posts
   * @param date
   * @returns {string}
   */
  dateString: function(date) {
    return date.toUTCString().replace(/\s00:00:00\sGMT/g, "");
  },
  /**
   * Slash-separated dates
   * @param date
   * @returns {`${number}/${number}/${number}`}
   */
  yyyymmdd: function(date) {
    const d = new Date(date);
    const year = d.getUTCFullYear();
    const month = (d.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = d.getUTCDate().toString().padStart(2, "0");

    return `${year}/${month}/${day}`;
  },
};
