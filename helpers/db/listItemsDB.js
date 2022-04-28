const listItemsDB = async ( req, dbModel, attributes = ['id'], limit = 10) => {

  let { page = 1 } = req.query;
  page = parseInt(page) <= 0 ? 1 : page; 
  let offset = limit * (page - 1);
  const { count, rows } = await dbModel.findAndCountAll({
    attributes,
    offset,
    limit,
  });
  let pages = Math.ceil(count / limit);
  const prevPage = page > 1 && pages > 1 ? page - 1 : "";  
  const nextPage = page < pages ? parseInt(page) + 1 : "";
  return {
    totalItems: count,
    previousPage:
      prevPage > 0
        ? `${req.protocol}://${req.get('host')}/news/list/?page=${prevPage}`
        : '',
    nextPage:
      page < pages
        ? `${req.protocol}://${req.get('host')}/news/list/?page=${nextPage}`
        : '',
    items: rows,
  };
};
module.exports = { listItemsDB };
