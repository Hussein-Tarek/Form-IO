// addNumbers.js
window.sayHi = function (x, y) {
  console.log("hi", x, y);
};
window.selectSearch = function (instance, component) {
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
};
window.addFormBuilderSection = function () {
  if (typeof window.Formio !== "undefined") {
    window.Formio.use({
      options: {
        builder: {
          builder: {
            custom: {
              title: "Pre-Defined Fields",
              weight: 10,
              components: {
                firstName: {
                  title: "First Name",
                  key: "firstName",
                  icon: "terminal",
                  schema: {
                    label: "First Name",
                    type: "textfield",
                    key: "firstName",
                    input: true,
                  },
                },
                lastName: {
                  title: "Last Name",
                  key: "lastName",
                  icon: "terminal",
                  schema: {
                    label: "Last Name",
                    type: "textfield",
                    key: "lastName",
                    input: true,
                  },
                },
                email: {
                  title: "Email",
                  key: "email",
                  icon: "at",
                  schema: {
                    label: "Email",
                    type: "email",
                    key: "email",
                    input: true,
                  },
                },
                phoneNumber: {
                  title: "Mobile Phone",
                  key: "mobilePhone",
                  icon: "phone-square",
                  schema: {
                    label: "Mobile Phone",
                    type: "phoneNumber",
                    key: "mobilePhone",
                    input: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
};

window.addFormBuilderSection();
