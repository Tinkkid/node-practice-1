const contacts = require("./contacts");

// const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await contacts.addContact({ id, name, email, phone });
      console.log(newContact);

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      return deletedContact;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e" });
// invokeAction({
//   action: "add",
//   name: "Yuliia",
//   email: "yulia@mail.com",
//   phone: "380505055555",
// });

invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
