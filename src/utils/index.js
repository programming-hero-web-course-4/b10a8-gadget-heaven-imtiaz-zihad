import toast from "react-hot-toast";
// get allWish  acc from local storage
// const getAllWish =() =>{
//   const allWish =  localStorage.getItem("wishes")
// }

// get allWish acc from local storage
const getAllWish = () => {
  const allWish = localStorage.getItem("wishs");

  if (allWish) {
    const wishs = JSON.parse(allWish);
    return wishs;
  } else {
    return [];
  }
};

// get allCart  acc from local storage
const getAllCart = () => {
  const allCart = localStorage.getItem("carts");

  if (allCart) {
    const carts = JSON.parse(allCart);
    return carts;
  } else {
    return [];
  }
};

// add a acc to local storage
const addToCart = (acc) => {
  const carts = getAllCart();
  const isExists = carts.find((item) => item.id == acc.id);
  if (isExists) return toast.error("Already added !");

  carts.push(acc);
  localStorage.setItem("carts", JSON.stringify(carts));
  toast.success("Successfully added!");
};
// add wish  a acc to local storage
const addToWish = (acc) => {
  const wishs = getAllWish();
  const isExists = wishs.find((item) => item.id == acc.id);
  if (isExists) return toast.error("Already added !");

  wishs.push(acc);
  localStorage.setItem("wishs", JSON.stringify(wishs));
  toast.success("Successfully added!");
};
// remove wishes from local storage
const removeFromWish = (id) => {
  const wishs = getAllWish();
  const remaining = wishs.filter((item) => item.id != id);
  localStorage.setItem("wishs", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
};
// remove a acc from local storage
const removeFromCart = (id) => {
  const carts = getAllCart();
  const remaining = carts.filter((item) => item.id != id);
  localStorage.setItem("carts", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
};

//clear cart
const clearCart = () => {
  localStorage.removeItem("carts");
};

export {
  addToCart,
  getAllCart,
  removeFromCart,
  addToWish,
  removeFromWish,
  getAllWish,
  clearCart,
};
