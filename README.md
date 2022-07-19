# cypress testing

End2End and Component Testing with [Cypress](https://docs.cypress.io)

## DDEV integration

Cypress is added as a docker component cypress/inculded 10.2.0 (more info on images [here](https://docs.cypress.io/examples/examples/docker#Images)).

There are two modes of running test:

1) ```ddev cypress-open```: opens the interactive exploratory app

2) ```ddev cypress-run```: runs headless browser tests


## Running tests

Run ```ddev cypress-run``` for all tests. 
To choose specific suite of test run ```ddev cypress-run --spec 'test/suite/folder/*'```
To choose a specific browser run ```ddev cypress-run --browser electron```

Reference to full list of [commands](https://docs.cypress.io/guides/guides/command-line#cypress-run)

Note: Before running test for a site, please make sure the ddev is started for the site (ddev start).

## Useful links
[VSF official e2e page](https://docs.vuestorefront.io/v1/guide/basics/e2e.html)
[Cypress getting started](https://docs.cypress.io/guides/getting-started/installing-cypress)
