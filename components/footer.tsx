import { NavbarLogo } from "./ui/resizable-navbar";

export function Footer() {
  const footerLinks = {
    Features: [
      "Escrow",
      "Stella AI",
      "Disputes",
      "Stellar Network",
      "USDC/EURC",
      "Security",
      "Mobile",
    ],
    Product: [
      "Pricing",
      "Method",
      "Integrations",
      "Changelog",
      "Documentation",
      "SDK",
      "API",
    ],
    Company: ["About", "Customers", "Careers", "README", "Quality", "Brand"],
    Resources: [
      "Developers",
      "Status",
      "Stellar Anchors",
      "MoneyGram",
      "DPA",
      "Privacy",
      "Terms",
    ],
    Connect: [
      "Contact us",
      "Community",
      "X (Twitter)",
      "GitHub",
      "YouTube",
      "Telegram",
    ],
  };

  return (
    <footer
      className="border-t border-zinc-800 py-16 px-6"
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <NavbarLogo />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
