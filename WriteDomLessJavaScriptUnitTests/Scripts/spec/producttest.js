var product = require('../product.js'),
    should = require('should');

describe('A product module', function () {
    it('filters by department', function () {
        var list = [{ "DepartmentId": 1, "Name": "X" }, { "DepartmentId": 2, "Name": "Y" }],
            result = product.findByDepartmentId(list, 2);
        result.length.should.equal(1);
        result[0].Name.should.equal('Y');
        result = product.findByDepartmentId(list, 0);
        result.length.should.equal(2);
    });

    it('renders a table', function () {
        var products = [{ "DepartmentId": 1, "Name": "X", "Price": 3.2 }, { "DepartmentId": 2, "Name": "Y", "Price": 1.11 }],
            departments = [{ "Id": 1, "Name": "A" }, { "Id": 2, "Name": "B" }],
            html = '<tr><td>X</td><td>$3.20</td><td>A</td></tr><tr><td>Y</td><td>$1.11</td><td>B</td></tr>',
            result = product.renderTable(products, departments);
        result.should.equal(html);
    });
});
