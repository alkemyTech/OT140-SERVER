const user = {
  email: "ubuntu@admin.com",
  password: "123456",
};

const url = "http://localhost:3000/auth/login";

describe("test auth enpoint", () => {
  it("correct answer scenario", () => {
    cy.request({
      method: "POST",
      url,
      body: user,
    }).should((res) => {
      expect(res.status).equal(200);
      expect(res.body).to.not.be.null;
    });
  });
  it("incorrect answer scenario,empty email", () => {
    cy.request({
      method: "POST",
      url,
      body: {
        email: "",
        password: "123456",
      },
      failOnStatusCode: false,
    }).should((res) => {
      expect(res.status).equal(500);
      expect(res.body.email.msg).to.deep.equal("Ingresa un email valido");
    });
  });
  it("incorrect answer scenario,empty password", () => {
    cy.request({
      method: "POST",
      url,
      body: {
        email: "ubuntu@admin.com",
        password: "",
      },
      failOnStatusCode: false,
    }).should((res) => {
      expect(res.status).equal(500);
      expect(res.body.password.msg).to.deep.equal("Ingresa una contraseña");
    });
  });
});
