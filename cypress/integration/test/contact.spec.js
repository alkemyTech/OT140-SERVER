describe("Contact api testing", () => {
    it("GET", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:3000/contacts",
      }).then((response) => {
  
        expect(response.status).equal(200);
        expect(response.body).to.not.be.null;
      });
    });
  
    it("POST", () => {
  
      const contact = {
        name: "Usuario-Test",
        email: "test-cypress@test.com",
      };
  
      cy.request({
        method: "POST",
        url: "http://localhost:3000/contacts",
        body: contact,
      }).then((response) => {
        expect(response.status).equal(200);
  
      })
  
        .its("body")
        .should("include", {
            name: "Usuario-Test",
            email: "test-cypress@test.com",
        });
    });
});
  