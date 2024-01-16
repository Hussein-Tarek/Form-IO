(function () {
  "use strict";

  var customComponents = {
    Age: {
      title: "Age",
      key: "age",
      icon: "check",
      schema: {
        label: "Age",
        applyMaskOn: "change",
        mask: false,
        tableView: true,
        delimiter: false,
        requireDecimal: false,
        inputFormat: "plain",
        truncateMultipleSpaces: false,
        key: "age",
        conditional: {
          show: true,
          conjunction: "all",
          conditions: [
            {
              component: "name",
              operator: "isNotEmpty",
            },
          ],
        },
        type: "number",
        input: true,
      },
    },
    Accept: {
      title: "Accept",
      key: "accept",
      icon: "check",
      schema: {
        label: "Accept Income",
        optionsLabelPosition: "right",
        inline: true,
        tableView: false,
        defaultValue: "accept",
        values: [
          {
            label: "Accept",
            value: "accept",
            shortcut: "",
          },
          {
            label: "Refuse",
            value: "refuse",
            shortcut: "",
          },
        ],
        key: "acceptIncome",
        conditional: {
          show: true,
          conjunction: "all",
          conditions: [
            {
              component: "calculatedIncome",
              operator: "isNotEmpty",
            },
          ],
        },
        type: "radio",
        input: true,
      },
    },
  };

  window.Formio.use({
    framework: "yourFramework",
    components: customComponents,
    options: {
      builder: {
        builder: {
          custom: {
            title: "Fields Pool",
            weight: 10,
            components: {
              User: {
                title: "User",
                schema: {
                  key: "userData",
                  type: "fieldset",
                  label: "Field Set",
                  input: false,
                  tableView: false,
                  components: [
                    {
                      label: "First Name",
                      applyMaskOn: "change",
                      tableView: true,
                      key: "firstName",
                      type: "textfield",
                      input: true,
                    },
                    {
                      label: "Last Name",
                      applyMaskOn: "change",
                      tableView: true,
                      key: "lastName",
                      type: "textfield",
                      input: true,
                    },
                    {
                      label: "Email",
                      applyMaskOn: "change",
                      tableView: true,
                      key: "email",
                      type: "email",
                      input: true,
                    },
                    {
                      label: "Password",
                      applyMaskOn: "change",
                      tableView: false,
                      validate: {
                        custom:
                          "valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$!%*?&])[A-Za-z\\d@#$!%*?&]{8,}$/.test(input) ? true : 'Password must contain one uppercase, one lowercase, one digit, and one special character with a minimum length of 8 characters';",
                      },
                      key: "password",
                      type: "password",
                      input: true,
                      protected: true,
                      lockKey: true,
                      source: "6575c84aef6488fe3abf4bbc",
                      isNew: true,
                      keyModified: true,
                    },
                    {
                      label: "Phone Number",
                      applyMaskOn: "change",
                      tableView: true,
                      key: "phoneNumber",
                      type: "phoneNumber",
                      input: true,
                    },
                    {
                      label: "Address",
                      columns: [
                        {
                          components: [
                            {
                              label: "Country",
                              applyMaskOn: "change",
                              tableView: true,
                              key: "country1",
                              type: "textfield",
                              input: true,
                            },
                          ],
                          width: 4,
                          offset: 0,
                          push: 0,
                          pull: 0,
                          size: "md",
                          currentWidth: 4,
                        },
                        {
                          components: [
                            {
                              label: "City",
                              applyMaskOn: "change",
                              tableView: true,
                              key: "city1",
                              type: "textfield",
                              input: true,
                            },
                          ],
                          width: 4,
                          offset: 0,
                          push: 0,
                          pull: 0,
                          size: "md",
                          currentWidth: 4,
                        },
                        {
                          components: [
                            {
                              label: "Street",
                              applyMaskOn: "change",
                              tableView: true,
                              key: "street1",
                              type: "textfield",
                              input: true,
                            },
                          ],
                          size: "md",
                          width: 4,
                          currentWidth: 4,
                        },
                      ],
                      key: "address1",
                      type: "columns",
                      input: false,
                      tableView: false,
                    },
                  ],
                },
              },
              column: {
                title: "Address",
                schema: {
                  label: "Address",
                  columns: [
                    {
                      components: [
                        {
                          label: "Country",
                          applyMaskOn: "change",
                          tableView: true,
                          key: "country",
                          type: "textfield",
                          input: true,
                        },
                      ],
                      width: 4,
                      offset: 0,
                      push: 0,
                      pull: 0,
                      size: "md",
                      currentWidth: 4,
                    },
                    {
                      components: [
                        {
                          label: "City",
                          applyMaskOn: "change",
                          tableView: true,
                          key: "city",
                          type: "textfield",
                          input: true,
                        },
                      ],
                      width: 4,
                      offset: 0,
                      push: 0,
                      pull: 0,
                      size: "md",
                      currentWidth: 4,
                    },
                    {
                      components: [
                        {
                          label: "Street",
                          applyMaskOn: "change",
                          tableView: true,
                          key: "street",
                          type: "textfield",
                          input: true,
                        },
                      ],
                      size: "md",
                      width: 4,
                      currentWidth: 4,
                    },
                  ],
                  key: "address",
                  type: "columns",
                  input: false,
                  tableView: false,
                },
              },
              fetchUsers: {
                title: "Fetch Users",
                key: "fetchUsers",
                icon: "terminal",
                schema: {
                  label: "Data Source",
                  persistent: "client-only",
                  trigger: {
                    init: true,
                    server: false,
                  },
                  dataSrc: "url",
                  fetch: {
                    url: "https://fakestoreapi.com/users/1",
                    method: "get",
                    headers: [
                      {
                        key: "",
                        value: "",
                      },
                    ],
                    mapFunction:
                      "// instance.root.getComponent('name').setValue(responseData.name);\n// instance.root.getComponent('age').setValue(responseData.age);\nconsole.log(responseData);\nvalue=responseData;",
                    forwardHeaders: false,
                    authenticate: false,
                  },
                  allowCaching: true,
                  key: "dataSource",
                  type: "datasource",
                  input: true,
                  tableView: false,
                },
              },
              Password: {
                title: "Password",
                key: "Password",
                schema: {
                  label: "Password",
                  applyMaskOn: "change",
                  tableView: false,
                  validate: {
                    custom:
                      "valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$!%*?&])[A-Za-z\\d@#$!%*?&]{8,}$/.test(input) ? true : 'Password must contain one uppercase, one lowercase, one digit, and one special character with a minimum length of 8 characters';",
                  },
                  key: "password",
                  type: "password",
                  input: true,
                  protected: true,
                  lockKey: true,
                  source: "6575c84aef6488fe3abf4bbc",
                  isNew: true,
                  keyModified: true,
                },
              },
              Test: {
                title: "Test",
                key: "test",
                schema: {
                  label: "Test",
                  applyMaskOn: "change",
                  tableView: true,
                  validate: {
                    custom:
                      "valid = (input === 'Joe') ? true : 'Your name must be \"Joe\"';\r\n",
                    maxLength: 5,
                  },
                  key: "test",
                  type: "textfield",
                  input: true,
                },
              },
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
          x: {
            title: "New category",
            weight: 10,
            components: {
              Accept: {
                title: "Accept",
                key: "accept",
                icon: "check",
                schema: {
                  label: "Accept Income",
                  optionsLabelPosition: "right",
                  inline: true,
                  tableView: false,
                  defaultValue: "accept",
                  values: [
                    {
                      label: "Accept",
                      value: "accept",
                      shortcut: "",
                    },
                    {
                      label: "Refuse",
                      value: "refuse",
                      shortcut: "",
                    },
                  ],
                  key: "acceptIncome",
                  conditional: {
                    show: true,
                    conjunction: "all",
                    conditions: [
                      {
                        component: "calculatedIncome",
                        operator: "isNotEmpty",
                      },
                    ],
                  },
                  type: "radio",
                  input: true,
                },
              },
              "Expected Income": {
                title: "Expected Income",
                key: "expectedIncome",
                icon: "check",
                schema: {
                  label: "Expected Income",
                  applyMaskOn: "change",
                  mask: false,
                  tableView: false,
                  delimiter: false,
                  requireDecimal: false,
                  inputFormat: "plain",
                  truncateMultipleSpaces: false,
                  validate: {
                    required: true,
                  },
                  key: "expectedIncome",
                  conditional: {
                    show: true,
                    conjunction: "all",
                    conditions: [
                      {
                        component: "acceptIncome",
                        operator: "isEqual",
                        value: "refuse",
                      },
                    ],
                  },
                  type: "number",
                  input: true,
                },
              },
              column: {
                title: "Address",
                schema: {
                  label: "Address",
                  columns: [
                    {
                      components: [
                        {
                          label: "Country",
                          applyMaskOn: "change",
                          tableView: true,
                          key: "country",
                          type: "textfield",
                          input: true,
                        },
                      ],
                      width: 4,
                      offset: 0,
                      push: 0,
                      pull: 0,
                      size: "md",
                      currentWidth: 4,
                    },
                    {
                      components: [
                        {
                          label: "City",
                          applyMaskOn: "change",
                          tableView: true,
                          key: "city",
                          type: "textfield",
                          input: true,
                        },
                      ],
                      width: 4,
                      offset: 0,
                      push: 0,
                      pull: 0,
                      size: "md",
                      currentWidth: 4,
                    },
                    {
                      components: [
                        {
                          label: "Street",
                          applyMaskOn: "change",
                          tableView: true,
                          key: "street",
                          type: "textfield",
                          input: true,
                        },
                      ],
                      size: "md",
                      width: 4,
                      currentWidth: 4,
                    },
                  ],
                  key: "address",
                  type: "columns",
                  input: false,
                  tableView: false,
                },
              },
              fetchUsers: {
                title: "Fetch Users",
                key: "fetchUsers",
                icon: "terminal",
                schema: {
                  label: "Data Source",
                  persistent: "client-only",
                  trigger: {
                    init: true,
                    server: false,
                  },
                  dataSrc: "url",
                  fetch: {
                    url: "https://fakestoreapi.com/users/1",
                    method: "get",
                    headers: [
                      {
                        key: "",
                        value: "",
                      },
                    ],
                    mapFunction:
                      // eslint-disable-next-line quotes
                      "// instance.root.getComponent('name').setValue(responseData.name);\n// instance.root.getComponent('age').setValue(responseData.age);\nconsole.log(responseData);\nvalue=responseData;",
                    forwardHeaders: false,
                    authenticate: false,
                  },
                  allowCaching: true,
                  key: "dataSource",
                  type: "datasource",
                  input: true,
                  tableView: false,
                },
              },
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
    templates: {},
  });
})();
