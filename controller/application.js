
const arrayComputation = (req, response, next) => {
  const { body } = req;
  const data = body;
  const html = getPdfTemplates(data);
  //  const html = debug ;

}

module.exports = arrayComputation
