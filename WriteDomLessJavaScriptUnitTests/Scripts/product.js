var product = (function () {
    return {
        findByDepartmentId: function (list, departmentId) {
            return list.filter(function (prod) {
                return departmentId === 0 || prod.DepartmentId === departmentId;
            });
        },
        renderTable: function (products, departments) {
            var html = '';
            products.forEach(function (p) {
                var department;
                departments.forEach(function (d) { department = d.Id === p.DepartmentId ? d.Name : department; });
                html +=
                    '<tr>' +
                        '<td>' + p.Name + '</td>' +
                        '<td>$' + p.Price.toFixed(2) + '</td>' +
                        '<td>' + department + '</td>' +
                    '</tr>';
            });
            return html;
        }
    };
}());
if (typeof module === 'object') {
    module.exports = product;
}
