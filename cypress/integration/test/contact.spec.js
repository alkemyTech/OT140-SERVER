const newContact = {
  name: 'Cypress-test',
  phone: 123456,
  email: 'test1@test.com',
  message: 'Esto es un msj desde cypress',
}
const urlGetContacts = "http://localhost:3000/contacts/backoffice"
const urlContacts = "http://localhost:3000/contacts/"


describe("CONTACT TESTING", () => {

  it("Get contacts", () => {

      cy.request('GET', urlGetContacts)
          .should((response) => {
              expect('Content-Type', /json/)
              expect(response.status).to.eq(200)
              expect(response.body).to.deep.equal(response.body)
          });
  });

  it("Get contacts findAll", () => {

    cy.request('GET', urlContacts)
        .should((response) => {
            expect('Content-Type', /json/)
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.equal(response.body)
        });
});

  it('Post a new contact', () => {
      cy.request({
          method: 'POST',
          url: urlContacts,
          body: newContact
      }).should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.msg).to.deep.equal('contact successfully delivered.')
      })
  });
});  
  