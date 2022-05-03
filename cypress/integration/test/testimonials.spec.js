const endpoint = 'http://localhost:3000/testimonials';
const id = 1
const errorID = 100

const testimonie = {
    "name": "cypress test",
    "image": "cypress.jpg",
    "content": "content cypress test"
}

const errorTestimonie = {
    "image": "cypress.jpg",
    "content": "content cypress test"
}

const testimonieUpdate = {
    "name": "cypress test update",
    "image": "cypress.jpg update",
    "content": "content cypress test update"
}

const addTestimonie = testimonie => {
    cy.request('POST', endpoint, testimonie)
    expect(testimonie).to.have.all.keys('name', 'image', 'content')
}

describe('TESTIMONIALS TESTING', () => {
    
    it("GET - Show Testimonials Paginated", () => {

        cy.request('GET', endpoint)
        .then((response) => {
            expect(response.status).equal(200);
            expect(response.body).to.have.property('data');
            expect(response.body).to.have.property('currentPage');
            expect(response.body).to.have.property('previousPage');
            expect(response.body).to.have.property('nextPage');
            expect(response.body).to.have.property('total')
        }) 
    });

    it('POST - Field Validation, add Testimonials', () => {
                
        addTestimonie(testimonie)

        cy.request('GET', endpoint)
        .its('body')
        .its('data')
        .its(0)
        
        .should('include', testimonie)
    })

    it('POST - Validations Error', () => {
                       
        cy.request({
            method: "POST",
            url: endpoint,
            body: errorTestimonie,
            failOnStatusCode: false
        }) 
        .then((response) => {
            expect(response.status).equal(500);
        }) 
    })

    it('PUT - update Testimonial', () => {
       
        cy.request('PUT',`${endpoint}/${id}`, testimonieUpdate)
        .its('status').should('eq', 201)

        cy.request('GET', endpoint)
        .its('body')
        .its('data')
        .its(0)
        
        .should('include', testimonieUpdate)
        
    })

    it('PUT - Update error, id does not exist', () => {
       
        cy.request({
            method: "PUT",
            url: `${endpoint}/${errorID}`,
            body: testimonieUpdate,
            failOnStatusCode: false
        }) 
        .then((response) => {
            expect(response.status).equal(404);
        }) 

    })

    it('DELETE - delete Testimonial', () => {
                
        cy.request('DELETE',`${endpoint}/${id}`)
        .its('status').should('eq', 201)
    })

    it('DELETE - delete error, id does not exist', () => {
                
        cy.request({
            method: "DELETE",
            url: `${endpoint}${errorID}`,
            failOnStatusCode: false
        }) 
        .then((response) => {
            expect(response.status).equal(404);
        }) 
    })
})

