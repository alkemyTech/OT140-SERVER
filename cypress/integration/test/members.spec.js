const newMember = {
    name: 'name',
    facebookUrl: 'facebookUrl',
    instagramUrl: 'instagramUrl',
    linkedinUrl: 'linkedinUrl',
    image: 'image',
    description: 'description'
}
const urlEndpoint = "http://localhost:3000/members/"
const id = 24;


describe("MEMBERS TESTING", () => {

    it("Get all members", () => {

        cy.request('GET', urlEndpoint)
            .should((response) => {
                expect('Content-Type', /json/)
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
            });
    });

    it('Post a new Member', () => {
        cy.request({
            method: 'POST',
            url: urlEndpoint,
            body: newMember
        }).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.deep.equal(response.body)
        })
    });


    it('Update member', () => {
        cy.request({
            method: 'PUT',
            url: urlEndpoint + id,
            body: newMember,
            failOnStatusCode: false
        })
            .should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.deep.equal(response.body)
            });
    });
    it(' Update - Member not found', () => {
        cy.request({
            method: 'PUT',
            url: urlEndpoint +999,
            body: newMember,
            failOnStatusCode: false
        })
            .should((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.deep.equal(response.body)
            });
    });


    it('Delete an member by Id', () => {
        cy.request({
            method: 'DELETE',
            url: urlEndpoint + id,
            failOnStatusCode: false
        })
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
            });
    });
    it('Delete - Member not found', () => {
        cy.request({
            method: 'DELETE',
            url: urlEndpoint + 999,
            failOnStatusCode: false
        })
            .should((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.deep.equal(response.body)
            });
    });

});  