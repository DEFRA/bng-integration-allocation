const DeveloperRegistrationGenerator = require('../bng-integration-allocation-business-logic/developerRegistrationGenerator.js')

const sendResponse = (context, status, body) => {
  context.res = {
    status,
    body
  }
}
module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')
  const reqData = req.body
  const developerRegistrationGeneratorInstance = new DeveloperRegistrationGenerator()
  developerRegistrationGeneratorInstance.orchestrationBNG(reqData)
  return sendResponse(context, 200, 'Developer Registration successfully executed.')
}
