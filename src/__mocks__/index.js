module.exports = {
  ...jest.requireActual('..'), //module from the directory in this folder
  __esModule: true,
  // TODO - update retunr value for Redux / context 
  // overwrite 
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')) 
}