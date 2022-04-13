const url = '://localhost:3000/activities';
const id = 1;
const noId = 404;

describe('Endpoint /activities'), () => {

    it('Get all activities'), () => {
        cy.request(url)
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
            });
    };

    it('Get an activity by Id'), () => {
        cy.request(`${url}/${id}`)
            .should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.not.be.null
            });
    };
}