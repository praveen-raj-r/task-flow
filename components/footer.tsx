import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center text-gray-200">
        <p>
          Made by{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/developer-praveen-raj/"
          >
            Praveen raj
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
