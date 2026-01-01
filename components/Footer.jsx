const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} CreatorDash. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
