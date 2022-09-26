
it("visit ",()=>{
    cy.visit("http://localhost:3000/")
    cy.get('#header > :nth-child(1) > .flex > .light-700').should("be.visible").wait(2000)
    cy.get('.nav > :nth-child(2)').click().wait(2000)
    cy.scrollTo("top",{ easing: 'linear' }).wait(1000)
    cy.get('.nav > :nth-child(3)').click().wait(2000)
    // cy.get(':nth-child(1) > .container > .w-full').trigger('mouseover',{ force: true })
    
    cy.get(':nth-child(1) > .flex > .w-48 > .btn').should("be.visible").trigger("mouseover").wait(2000)
    cy.get(':nth-child(1) > .flex > .w-48 > .btn').wait(2000)
    cy.scrollTo("bottom")
    // cy.scrollTo(,500 )
})