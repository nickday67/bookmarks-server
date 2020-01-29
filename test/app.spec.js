const app = require('../src/app')

// make sure to change the API_TOKEN if you change it in config!
describe('Bookmarks API Server', () => {
  
  it('GET / respond OK ', () => {
    
    return supertest(app)
      .get('/')
      .set('Authorization', 'Bearer fd3fe1bb-c4ec-40ef-ae4a-686502854870') 
      .expect(200)
  })

});