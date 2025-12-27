//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//@desc create  new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(200).json({ message: "create a contact" });
};

//@desc get contact
//@route get /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};
//@desc update contact
//@route get /api/contacts/
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `update a contact for ${req.params.id}` });
};
//@desc get contact
//@route get /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
