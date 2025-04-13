// cypress/e2e/deployment.cy.js

describe('Página de despliegue', () => {
  beforeEach(() => {
    // Visitar la página antes de cada test
    cy.visit('http://a22kevburcac.daw.inspedralbes.cat/action1/')
  })

  it('debe mostrar el título correcto', () => {
    cy.title().should('eq', 'Página de Prueba')
  })

  it('debe mostrar un mensaje de éxito', () => {
    cy.get('h1').should('contain.text', '¡Deployment Exitoso!')
    cy.get('h1').should('be.visible')
  })

  it('debe contener el emoji de celebración', () => {
    cy.get('h1').should('include.text', '🎉')
  })

  it('debe mostrar el mensaje de confirmación', () => {
    cy.get('.inicio p').should('contain.text', 'Si ves esta página, significa que la acción de GitHub funcionó correctamente')
    cy.get('.inicio p').should('be.visible')
  })

  it('debe mostrar la sección de última actualización', () => {
    cy.get('p strong').should('contain.text', 'Última actualización:')
    cy.get('#timestamp').should('not.be.empty')
  })

  it('debe tener un timestamp válido', () => {
    cy.get('#timestamp').invoke('text').then((text) => {
      // Verificar que el texto es una fecha válida
      expect(new Date(text).toString()).not.to.eq('Invalid Date')
    })
  })

  it('debe tener estilos aplicados correctamente', () => {
    // Verificar estilos
    cy.get('h1').should('have.css', 'color', 'rgb(0, 123, 255)')
    cy.get('body').should('have.css', 'text-align', 'center')
  })
})