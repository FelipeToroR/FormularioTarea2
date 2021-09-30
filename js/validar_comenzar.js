var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

function validateForm() {
    let x = document.forms["regForm"]["nombre"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }