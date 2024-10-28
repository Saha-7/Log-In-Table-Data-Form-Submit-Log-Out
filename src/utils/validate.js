export const checkValidFormData = (name,email,phone,address,gender) =>{

  const emailPattern = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const phonePattern = /^[0-9]{10}$/.test(phone);

  const namePattern = /^[a-zA-Z\s]+$/.test(name);


  if(!emailPattern) return "Email is not valid";
  if(!phonePattern) return "Phone number must be a 10-digit number";
  if (!namePattern) return "Name should only contain letters and spaces";
  if(!address || address.trim()==="") return "Address is required";
  if(!gender) return "Please select a gender";
  
  return null;
};
