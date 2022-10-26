/// <reference types="cypress"/>

function mockLocation(latitude: number, longitude: number) {
  return {
    onBeforeLoad(win: any) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
        (cb, err) => {
          if (latitude && longitude) {
            return cb({ coords: { latitude, longitude } });
          }

          throw err({ code: 1 });
        }
      );
    },
  };
}

describe("Landing Page Functionality", () => {
  it("visits weatheready.com", () => {
    cy.visit("/", mockLocation(42.0531, -82.5998));
  });

  it("toggles units from C to F", () => {
    cy.get(".units-toggle").click();
    cy.contains("mph");
  });

  it("toggles units from F to C", () => {
    cy.get(".units-toggle").click();
    cy.contains("km/h");
  });

  it("toggles units from light to dark", () => {
    cy.get(".theme-toggle").click();
    cy.get("[data-theme='dark']");
  });

  it("toggles units from dark to light", () => {
    cy.get(".theme-toggle").click();
    cy.get("[data-theme='light']");
  });

  it("shows precip chart if raining", () => {
    if (cy.contains("Rain")) {
      cy.get(".precip-chart");
    } else return;
  });

  it("reveals modal on click, answers and submits quiz", () => {
    cy.get(".modal-button").click();
    cy.get("[data-cy='r0']").click();
    cy.get("[data-cy='submit-quiz']").click();
  });

  it("toggles radar on and off", () => {
    let time = cy.get(".radar-time");
    cy.get(".feather-pause").click();
    cy.wait(800);
    cy.get(".feather-play").click();
    cy.wrap(".radar-time").should("not.equal", time);
  });

  // it("speeds up radar", () => {
  //   cy.get(".feather-pause").click();
  //   cy.wait(3200);
  //   cy.get(".feather-play").click();
  //   let time1 = cy.get(".radar-time");
  //   //set back to original position
  //   cy.get(".feather-pause").click();
  //   cy.wait(1400);
  //   cy.get(".feather-play").click();
  //   //   let thumb = cy.get(".speed-control");
  //   //   thumb.trigger("mousedown");
  //   //   thumb.trigger("mousemove");
  // });
});

export {};
