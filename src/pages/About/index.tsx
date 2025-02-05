const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About PCGenixAI</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            At PCGenixAI, we're passionate about helping people create their perfect custom PC with the help of Artificial Intelligence. 
            Whether you're a gamer, content creator, or professional, we provide the expertise 
            and tools you need to build a computer that matches your exact requirements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI Assistant is here to help you make informed decisions 
                about your components and ensure compatibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Quality Components</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We partner with trusted manufacturers to offer only the highest quality 
                PC components with full warranty coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get the best value for your money with our competitive prices and 
                regular deals on PC components.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We're committed to providing exceptional service and support throughout your 
            PC building journey. From component selection to after-sales support, we're 
            here to ensure your complete satisfaction.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;