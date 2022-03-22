const baseUrl = `http://localhost:${process.env.PORT || 3000}/news`;
const errorPost = {
  content: "Demo contento organization",
  image:
    "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
  categoryId: 1,
};
const organization = {
  name: "Fake Organization",
  content: "Demo contento organization",
  image:
    "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
  categoryId: 1,
};

describe("New endpoint testing", () => {
  it("POST - new", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      body: organization,
    }).then((response) => {
      expect(response.status).equal(201);
    });
  });
  it("POST - Error - Validation. Throw error 'name' is required", () => {
    cy.request({
      method: "POST",
      url: baseUrl,
      body: errorPost,
    }).then((response) => {
      expect(response.status).equal(400);
    });
  });
  it("GET - by Id. OK", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/1`,
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body).to.not.be.null;
    });
  });
  it("GET - Error - Id Not Found", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/999`,
    }).then((response) => {
      expect(response.status).equal(404);
    });
  });

  it("PUT - New's modification successfully", () => {
    const body = {
      name: "A real fake organization",
    };
    cy.request({
      method: "PUT",
      url: `${baseUrl}/1`,
      body,
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });
  it("PUT - Validation Error", () => {
    const body = {
      name: "A",
    };
    cy.request({
      method: "PUT",
      url: `${baseUrl}/1`,
      body,
    }).then((response) => {
      expect(response.status).equal(400);
    });
  });
  it("PUT - Error. New's id", () => {
    const body = {
      name: "A real fake organization",
    };
    cy.request({
      method: "PUT",
      url: `${baseUrl}/999`,
      body,
    }).then((response) => {
      expect(response.status).equal(404);
    });
  });
  it("GET - Paginated List", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/list`,
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body).to.not.be.null;
      expect(response.body).to.have.property('previousPage');
      expect(response.body).to.have.property('nextPage');
      expect(response.body).to.have.property('news');
    }) 
    ;
  });
  it("DELETE - OK", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/1`,
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });
  it("DELETE - Error. Id not Found", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/999`,
    }).then((response) => {
      expect(response.status).equal(404);
    });
  });

});
