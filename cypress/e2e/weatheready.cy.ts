/// <reference types="cypress"/>

import "@4tw/cypress-drag-drop";

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

  it("modal hidden after completing quiz", () => {
    cy.get(".modal-button").should("not.exist");
  });

  it("toggles radar on and off", () => {
    let time = cy.get(".radar-time");
    cy.get(".feather-pause").click();
    cy.wait(800);
    cy.get(".feather-play").click();
    cy.wrap(".radar-time").should("not.equal", time);
  });

  it("searches for a new location and stores as recent", () => {
    cy.get("input.search-input").type("London");
    cy.contains("London, England").click();
    cy.contains("London, England");
    cy.get("input.search-input").focus();
    cy.get(".opacity-60").contains("London, England");
  });
});

describe("Routing Functionality", () => {
  it("visits weatheready.com", () => {
    cy.visit("/", mockLocation(42.0531, -82.5998));
  });

  it("Goes to Today route", () => {
    cy.contains("Today").click();
    cy.url().should("eq", "http://localhost:5173/app/today");
  });

  it("Goes to Hourly route", () => {
    cy.contains("Hourly").click();
    cy.url().should("eq", "http://localhost:5173/app/hourly");
  });

  it("Goes to 8-Day route", () => {
    cy.contains("8-Day").click();
    cy.url().should("eq", "http://localhost:5173/app/8-day");
  });

  it("Card drops down on click", () => {
    cy.get(".collapse-arrow").first().click();
    cy.get(".feather-cloud").should("be.visible");
  });

  it("Goes to Radar route", () => {
    cy.contains("Radar").click();
    cy.url().should("eq", "http://localhost:5173/app/radar");
  });

  it("Goes to Landing Page", () => {
    cy.contains("Weather Ready").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});

describe("Radar Controls Functionality", () => {
  it("visits weatheready.com", () => {
    cy.visit("/", mockLocation(42.0531, -82.5998));
  });

  it("speeds up radar", () => {
    const radarControl = cy.get(".radar-control");
    radarControl.move({ deltaX: -600 });
    radarControl.should("have.attr", "aria-valuenow", "0");
    cy.get(".speed-control").move({ deltaX: 100 });
    cy.get(".feather-pause").click();
    cy.wait(1200);
    cy.get(".feather-play").click();
    cy.get(".radar-control").should("have.attr", "aria-valuenow", "6");
    radarControl.move({ deltaX: -600 });
    cy.get(".speed-control").move({ deltaX: -100 });
    cy.get(".feather-pause").click();
    cy.wait(1200);
    cy.get(".feather-play").click();
    cy.get(".radar-control").should("have.attr", "aria-valuenow", "4");
  });

  it("slows down radar", () => {
    const radarControl = cy.get(".radar-control");
    radarControl.move({ deltaX: -600 });
    radarControl.should("have.attr", "aria-valuenow", "0");
    cy.get(".speed-control").move({ deltaX: -100 });
    cy.get(".feather-pause").click();
    cy.wait(1200);
    cy.get(".feather-play").click();
    cy.get(".radar-control").should("have.attr", "aria-valuenow", "2");
    radarControl.move({ deltaX: -600 });
    cy.get(".speed-control").move({ deltaX: 100 });
    cy.get(".feather-pause").click();
    cy.wait(1200);
    cy.get(".feather-play").click();
    cy.get(".radar-control").should("have.attr", "aria-valuenow", "4");
  });

  it("increases radar opacity", () => {
    cy.get(".opacity-control").move({ deltaX: 150 });
    cy.get(".radar-layer").should("have.css", "opacity", "1");
    cy.get(".opacity-control").move({ deltaX: -150 });
    cy.get(".radar-layer").should("have.css", "opacity", "0.5");
  });

  it("decreases radar opacity", () => {
    cy.get(".opacity-control").move({ deltaX: -100 });
    cy.get(".radar-layer").should("have.css", "opacity", "0.17");
    cy.get(".opacity-control").move({ deltaX: 100 });
    cy.get(".radar-layer").should("have.css", "opacity", "0.47");
  });
});
export {};
