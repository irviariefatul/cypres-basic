describe("User can login to system", () => {
  // positive test case
  it("user can login with valid username and password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    // select element html yang dibutuhkan
    // kalau sudah dapat element-nya mau diapakan?
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    // select element html yang dibutuhkan
    // kalau sudah dapat element-nya mau diapakan?
    cy.get(":nth-child(3) > .form-control").type("password");
    // click button
    cy.get(".btn").click();

    // assert
    // select element html yang dibutuhkan
    // lakukan assertion sesuai test case
    cy.get(".nav-link > .d-sm-none").should(
      "have.text",
      "Hi, SuperAdmin\n                            "
    );
  });

  // negative test case
  it("user cannot login with valid username and wrong password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(":nth-child(3) > .form-control").type("password-salah");
    cy.get(".btn").click();

    // assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    );
  });

  it("user cannot login with invalid username and valid password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control").type("superadminadasda@gmail.com");
    cy.get(":nth-child(3) > .form-control").type("password");
    cy.get(".btn").click();

    // assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    );
  });

  it("user cannot login with empty username and correct password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control");
    cy.get(":nth-child(3) > .form-control").type("password");
    cy.get(".btn").click();

    // assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "The email field is required."
    );
  });

  it("user cannot login with correct username and empty password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(":nth-child(3) > .form-control");
    cy.get(".btn").click();

    // assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "The password field is required."
    );
  });

  it("user cannot login with invalid username and invalid password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control").type("superadminada@gmail.com");
    cy.get(":nth-child(3) > .form-control").type("password-salah");
    cy.get(".btn").click();

    // assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    );
  });

  it("user cannot login with empty username and empty password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control");
    cy.get(":nth-child(3) > .form-control");
    cy.get(".btn").click();

    // assert
    cy.get(":nth-child(2) > .invalid-feedback").should(
      "have.text",
      "The email field is required."
    );

    cy.get(":nth-child(3) > .invalid-feedback").should(
      "have.text",
      "The password field is required."
    );
  });

  it("user cannot login with invalid username and empty password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control").type("superadminada@gmail.com");
    cy.get(":nth-child(3) > .form-control");
    cy.get(".btn").click();

    // assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "The password field is required."
    );
  });

  it("user cannot login with empty username and invalid password", () => {
    // arrange
    cy.visit("http://localhost:8000/");

    // act
    cy.get(":nth-child(2) > .form-control");
    cy.get(":nth-child(3) > .form-control").type("password-salah");
    cy.get(".btn").click();

    // assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "The email field is required."
    );
  });

  // valid+logout
  it("user can login with valid username and password (2)", () => {
    // arrange
    cy.visit("http://localhost:8000/");
    // act
    //cy.get('[data-id="email"]').type("superadmin@gmail.com");
    //cy.get('[data-id="password"]').type("password");
    //cy.get('[data-id="submit"]').click();
    // assert
    //cy.get('[data-id="username"]').click();
    //cy.get('[data-id="logout-btn"]').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
    cy.get(":nth-child(3) > .form-control").type("password");
    cy.get(".btn").click();
    cy.get(".nav-link > .d-sm-none").click();
    cy.get(".text-danger").click();
    /* ==== End Cypress Studio ==== */
  });
});
