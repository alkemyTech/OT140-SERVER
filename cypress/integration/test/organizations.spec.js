
const urlEndpoint = "localhost:3000/organizations/public";
const id= 1;

const updateOrganization = {
    name: 'test-name',
    image: 'test-image',
    address: 'test-address',
    phone: 'test-352254466',
    email: 'test-organization1@gmail.com',
    welcomeText: 'test-welcometext',
    aboutUsText:'test-aboutstext'
};

    describe("Organizations api testing", () => {
       
      it('Get Organizations api', () => {
        cy.request('GET', urlEndpoint)
            .should((response) => {
                    expect('Content-Type', /json/);
                    expect(response.status).equal(200);
                    expect(response.body).to.deep.equal(response.body);
                    
            });
    });
    it('Update an Organizations by Id', () => {
        cy.request({
                method: 'PUT',
                url: `${urlEndpoint}/${id}`,
                body: updateOrganization
            })
            .should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.deep.equal('data')
            });
    });
    
      
})