

describe("User api testing", () => {
  it("GET", () => {

    cy.request({
      method: "GET",
      url: "http://localhost:3000/users",
    }).then((response) => {

      expect(response.status).equal(200);
      expect(response.body).to.not.be.null;
    });
  });

  it("POST", () => {

    const user = {
      firstName: "Usuario",
      lastName: "Demo",
      email: "test@test.com",
      image:
        "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
      password: "1234",
      roleId: 1,
    };

    cy.request({
      method: "POST",
      url: "http://localhost:3000/users/auth/register",
      body: user,
    }).then((response) => {
      expect(response.status).equal(200);

    })

      .its("body")
      .should("include", {
        firstName: "Usuario",
        lastName: "Demo",
        email: "test@test.com",
        image:
        "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
        password: "1234",
        roleId: 1
      });
  });

  it("PATCH", () => {

    const user = {
      firstName: "Usuario",
    };

    cy.request({
      method: "PATCH",
      url: "http://localhost:3000/users/1",
      body: user,

    }).then((response) => {

      expect(response.status).equal(201);
    });
  });

  it("DELETE", () => {

    cy.request({
        method: "DELETE",
        url: "http://localhost:3000/users/1",
      }).then((response)=> {

        expect(response.status).equal(200);
      })
  })
});
