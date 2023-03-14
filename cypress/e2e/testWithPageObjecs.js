import { navigateTo } from "../support/page_objects/navigationPage"
import { onFormLayoutPage } from "../support/page_objects/formLayoutPage"
import { onDatePickerPage } from "../support/page_objects/datePickerPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"




describe('Test with page objects', () =>{

    beforeEach('Open application', () => {
        cy.openHomePage()
    })


    it('Verify navigation across the pages', () => {
        navigateTo.formLayoutPage()
        navigateTo.datePickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })

    it('Should submit inline input form and choose the date in the calendar', () => {

        navigateTo.formLayoutPage()
        onFormLayoutPage.submitInlineFormWithNameAndEmail('Artem', 'test@email.com')
        onFormLayoutPage.submitBasicFormWithEmailAndPassword('email@domain.com', 'password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerFromToday(40)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)

    })

    it.only('Should check the name and age in the table row', () => {
        navigateTo.smartTablePage()
        onSmartTablePage.updateAgeByFirstName('Larry', '25')
        onSmartTablePage.addNewRecordWithFirstNameAndLastName('Alex', 'Smith')
        onSmartTablePage.deleteRowByIndex(0)
    })

})