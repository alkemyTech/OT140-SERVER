const url = 'http://localhost:3000/activities';
const id = 1;
const noId = 99999;

const activity = {
    name: 'TEST Name',
    content: 'TEST Content'
}

describe('Endpoint /activities', () => {

    it('Get all activities', () => {
        cy.request('GET', url)
            .should((response) => {
                expect('Content-Type', /json/)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data')
            });
    });

    it('Get an activity by Id', () => {
        cy.request(`${url}/${id}`)
            .should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.deep.equal(response.body)
                expect(response.body).to.have.property('data')
                expect(response.body).to.have.property('message')
            });
    });

    it('Get an activity by wrong Id', () => {
        cy.request({
            url: `${url}/${noId}`,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.eq(`The activity with id ${noId} doesn't exist.`)
        });
    });

    it('Post a new activity', () => {
        cy.request({
                method: 'POST',
                url,
                body: activity
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal('data', 'message')
            })
            .its('body')
    });

    it('Update an activity by Id', () => {
        cy.request({
                method: 'PUT',
                url: `${url}/${id}`,
                body: activity
            })
            .should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.deep.equal('data')
            });
    });

    it('Update an activity by wrong Id', () => {
        cy.request({
                method: 'PUT',
                url: `${url}/${noId}`,
                body: activity,
                failOnStatusCode: false
            })
            .should((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.eq(`The activity with the id ${noId} doesn't exist.`)
            });
    });

    it('Delete an activity by Id', () => {
        cy.request({
                method: 'DELETE',
                url: `${url}/${id}`,
            })
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq(`Activity with id ${id} has been deleted.`)
                expect(response.body).to.have.property('message')
            });
    });

    it('Delete an activity by wrong Id', () => {
        cy.request({
                method: 'DELETE',
                url: `${url}/${noId}`,
                failOnStatusCode: false
            })
            .should((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.eq(`Activity with id ${noId} doesn't exist.`)
            });
    });
});