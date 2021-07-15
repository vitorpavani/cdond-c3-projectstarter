import { Gender, SalaryType } from '../models';
function generateFakeDate() {
    return new Date(Math.random() * 10000);
}
var employee = {
    firstName: 'Test',
    middleName: 'First',
    lastName: 'Super',
    secondLastName: 'Second',
    displayName: 'Test First 2ND',
    companyEmail: 'test@gmail.com',
    personalEmail: 'testpersonal@gmail.com',
    birthdate: generateFakeDate(),
    startDate: generateFakeDate(),
    phoneNumber: '99002563',
    address: 'Fake Address',
    bankName: 'Test First Super Second',
    accountNumber: '001-04541-6446',
    gender: Gender.MALE,
    tags: '{\'hero\', \'acklen\'}',
    country: 'Honduras',
    region: 'Yoro',
    city: 'Morazán',
    salary: 15,
    salaryType: SalaryType.HOURLY,
    effectiveDate: generateFakeDate(),
    isActive: true,
};
export var employeesSampleData = [
    employee,
    employee,
    employee,
    employee,
];
//# sourceMappingURL=sampleData.js.map