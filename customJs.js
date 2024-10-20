(function () {
  window.Formio.use({
    options: {
      form: {
        evalContext: {
          print: function (input) {
            console.log(input);
          },
          selectSearch: function (instance, component) {
            console.log(instance, component);
            const searchInput = instance.choices?.input.element;

            if (searchInput) {
              searchInput.addEventListener("change", function (event) {
                component.searchField = "";
                component.minSearch = 0;
              });
              searchInput.addEventListener("input", function (event) {
                if (event.target.value.length >= 3) {
                  if (localStorage.getItem("i18nextLng") === "en") {
                    component.searchField = "nameEn";
                    component.minSearch = 3;
                  } else {
                    component.searchField = "nameAr";
                    component.minSearch = 3;
                  }
                } else {
                  component.searchField = " ";
                  component.minSearch = 0;
                }
              });
            }
          },
        },
      },
    },
  });
})();
