
const urlEndpoint = "http://localhost:3000/organizations/public/"
const id= 1

const updateOrganization = {
    name: 'organization 1',
    image: 'img-modificado',
    address: 'AV siempre viva 400',
    phone: '352254466',
    email: 'organization1@gmail.com',
    welcomeText: 'texto de bienvenida modificado',
    aboutUsText:'texto de presentación modificado'
};

    describe("Organizations api testing", () => {
       
        it("GET", () => {  
          cy.request({
            method: "GET",
            url: urlEndpoint,
          }).then((response) => {
      
            expect(response.status).equal(200);
            expect(response.body).to.not.be.null;
          });
        });
        

        it("PATCH sin token", () => {

            cy.request({
                method: 'PATCH',
                url: urlEndpoint + id,
                body: updateOrganization,
                failOnStatusCode: false
            })
                .should((response) => {
                    expect(response.status).to.eq(201);
                    expect(response.body).to.not.be.null;
                });
          });
})