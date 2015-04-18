(function () {
    var departmentSelect = document.getElementById('departments'),
        retrieve = document.getElementById('retrieve'),
        elProducts = document.getElementById('products');

    if (departmentSelect) {
        departmentSelect.addEventListener('change', function (e) {
            var departmentId = parseInt(e.currentTarget.value, 10),
                productList = JSON.parse(elProducts.dataset.products),
                departmentList = JSON.parse(elProducts.dataset.departments),
                filteredList = product.findByDepartmentId(productList, departmentId);
            elProducts.innerHTML = product.renderTable(filteredList, departmentList);
        });
    }
    if (retrieve) {
        retrieve.addEventListener('click', function (e) {
            var bustCache = '?' + new Date().getTime(),
                oReq = new XMLHttpRequest();
            elProducts.innerHTML = 'loading...';
            oReq.onload = function () {
                var data = JSON.parse(this.responseText),
                    departmentId = parseInt(departmentSelect.value, 10),
                    fileredList = product.findByDepartmentId(data.Products, departmentId);
                elProducts.innerHTML = product.renderTable(fileredList, data.Departments);
            };
            oReq.open('GET', e.currentTarget.dataset.url + bustCache, true);
            oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            oReq.send();
        });
    }
}());
