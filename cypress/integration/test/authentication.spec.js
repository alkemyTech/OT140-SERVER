const newUser = { 
    firstName: 'alkemy', 
    lastName: 'test', 
    email: 'd@d.com',
    image: 'image.jpg',
    password: '1234',
    roleId: 1 }


describe("AUTHENTICATION TESTING", () => {
    
    it("Register error validation", () => {
  
      cy.request({
        method: "POST",
        url: "http://localhost:3000/users/auth/register",
        body: { 
          firstName: '', 
          lastName: 'test', 
          email: '',
          image: 'image.jpg',
          password: '1234',
          roleId: 1 },
        failOnStatusCode: false
      }).then((res) => {
  
        expect(res.status).equal(403);
        expect(res.body.errors).to.not.be.null;
      });
    });

    it("Register OK", () => {
  
      cy.request({
        method: "POST",
        url: "http://localhost:3000/users/auth/register",
        body: newUser,
        failOnStatusCode: false
      }).then((res) => {
  
        expect(res.status).equal(200);
        expect(res.body).to.not.be.null;
      });
    });

    it("Login OK", () => {
  
      cy.request({
        method: "POST",
        url: "http://localhost:3000/auth/login",
        body: { 
          email: 'test@test.com',
          password: '1234',
        },
        failOnStatusCode: false
      }).then((res) => {
  
        expect(res.status).equal(200);
        expect(res.body).to.not.be.null;
      });
    });

    it("Login user not found/wrong password", () => {
  
        cy.request({
          method: "POST",
          url: "http://localhost:3000/auth/login",
          body: { 
            email: 'mail@test.com',
            password: '1234',
          },
          failOnStatusCode: false
        }).then((res) => {
    
          expect(res.status).equal(404);
          expect(res.body).to.deep.equal({ ok: false });
        });
      });

      it("Login wrong mail validation", () => {
  
        cy.request({
          method: "POST",
          url: "http://localhost:3000/auth/login",
          body: { 
            email: 'test@test',
            password: '1234',
          },
          failOnStatusCode: false
        }).then((res) => {
    
          expect(res.status).equal(500);
          expect(res.body.email.msg).to.deep.equal('Ingresa un email valido');
        });
      });

      it("Login password validation", () => {
  
        cy.request({
          method: "POST",
          url: "http://localhost:3000/auth/login",
          body: { 
            email: 'test@test.com',
            password: '',
          },
          failOnStatusCode: false
        }).then((res) => {
    
          expect(res.status).equal(500);
          expect(res.body.password.msg).to.deep.equal('Ingresa una contraseña');
        });
      });
});    