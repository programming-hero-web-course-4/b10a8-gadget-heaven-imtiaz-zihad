import { Helmet } from "react-helmet";


const About = () => {
  return (
    
    <div className="bg-gray-50 text-gray-800 p-8">
          <Helmet>
        <title>About us -Gadget heaven</title>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Your trusted destination for top-quality electronic devices.</p>
        </div>
        <div className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
            <p className="mt-2 text-gray-600 text-lg">
              Our mission is to provide the latest and most reliable electronic devices at unbeatable prices. Whether you’re looking for smartphones, laptops, or accessories, we aim to bring you the best deals and the latest tech innovations from the biggest brands.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600">Our Values</h2>
            <ul className="mt-4 space-y-3 text-gray-600 text-lg">
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> Quality: We prioritize top-quality products that meet the highest standards.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> Customer Satisfaction: Our goal is to provide an exceptional shopping experience.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> Affordability: We strive to offer competitive prices without compromising on quality.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> Innovation: We stay updated with the latest trends in the tech industry to bring you the newest gadgets.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600">Why Choose Us?</h2>
            <p className="mt-2 text-gray-600 text-lg">
              Our commitment to quality and customer satisfaction is what sets us apart. We provide fast and secure shipping, hassle-free returns, and a wide range of products from leading tech brands. Whether you need a high-end smartphone or a budget-friendly laptop, you’ll find it here with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600">Contact Us</h2>
            <p className="mt-2 text-gray-600 text-lg">
              Have questions or need assistance? Our dedicated support team is here to help. Contact us through our website or give us a call. We are always ready to provide expert advice and guidance for your next tech purchase.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
