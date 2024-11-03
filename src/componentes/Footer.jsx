const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer footer-center bg-base-200  text-base-contentt p-10">
        <aside>
          <h1 className="font-bold text-black text-3xl">Gadget Heaven</h1>
          <p className="text-base-content">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </aside>
      </footer>
      <footer className="footer w-4/5 mx-auto border-base-500 border-t bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
