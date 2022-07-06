describe("Tech session app", () => {
  it("Visits the tech session app and verify url & title", () => {

    //visit my annual leave netlify
    cy.visit("https://my-annual-leave.netlify.app/");

    //assert url is correct
    cy.url().should("eq", "https://my-annual-leave.netlify.app/");
    //assert title is correct
    cy.title().should("include", "My Annual Leave")
  });

 it("add holidays", () => {

    //click on add holidays
    cy.get(".MuiFab-label").click();
    //select from dates
    cy.get('#starting-date-picker-dialog').click();
    cy.contains('button[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day"]', "10").click();
    cy.contains('span[class="MuiButton-label"]', "OK").click();
    cy.get("#starting-period-select").select("Afternoon");
    //select to dates
    cy.get('#ending-date-picker-dialog').click();
    cy.contains('button[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day"]', "16").click();
    cy.contains('span[class="MuiButton-label"]', "OK").click();
    cy.get("#ending-period-select").select("End of day");
    //click add holidays
    cy.get('.MuiFab-label').eq(1).click();
    // homepage verify holiday dates
    cy.contains("10/07/2022" & "16/07/2022");
    cy.contains("4.5" & "days");
  });

 /*it("edit holidays", () => {
    //edit holidays
    cy.get('.MuiIconButton-label').eq(1).click();

  })
  
  

  it("delete holidays", () => {
    //delete holiday button
    cy.get('.MuiButton-label').click();
    cy.contains("button","Yes").click();

  
  })*/
  it("edit holidays", () => {
    //edit holidays
    cy.get('.MuiIconButton-label').eq(1).click();
    //edit from dates
    cy.get('#starting-date-picker-dialog').click();
    cy.contains('button[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day"]', "15").click();
    cy.contains('span[class="MuiButton-label"]', "OK").click();
    cy.get("#starting-period-select").select("Morning");
    //edit to dates
    cy.get('#ending-date-picker-dialog').click();
    cy.contains('button[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day"]', "25").click();
    cy.contains('span[class="MuiButton-label"]', "OK").click();
    cy.get("#ending-period-select").select("End of day");
    //click add holidays
    cy.get('.MuiFab-label').eq(1).click();

  })

  it("click on the setting button and clear holidays", () => {
    //click on the setting button
    cy.get("button").eq(0).click();
    //holiday allowance
    cy.get("#holidays-allowance").select("30");
    
    //click Clear data button
    cy.contains("button", "Clear data").click();
    //click yes to clear all data
    cy.contains("button","Yes").click();
    
    //click close on the setting button
   // cy.get("button").eq(2).click();
   
   
  });
  
});
