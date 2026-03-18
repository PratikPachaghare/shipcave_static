import { brandConfig } from '../config/brandConfig';
import configThemes from '../config/theme';

const Pricing = () => {
  return (
    <section className="w-full py-12 bg-white shadow-sm from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{color:configThemes.home.brandMainColor}}>Pricing</h1>
          <p className="text-gray-700">
            {brandConfig.meta.name} follows a transparent, pay-as-you-go model—built to
            support businesses of all sizes.
          </p>
        </div>

        {/* Real-Time Rate Calculator */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4" style={{color:configThemes.home.brandMainColor}}>
            Real-Time Rate Calculator
          </h2>
          <ul className="list-disc pl-10 mt-2 space-y-2 text-gray-700">
            <li>
              Simply enter the shipment’s weight, dimensions, and destination,
              and instantly view courier rates from top logistics partners like
              Delhivery, Blue Dart, DTDC, XpressBees, and more.
            </li>
            <li>
              Calculate rates :{" "}
              <a
                className="text-blue-800 underline"
                href="https://dev-crm.devcave.in/globalCalculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rate Calculator
              </a>
            </li>
            <li>
              <p>
                Contact our <strong>sales team</strong> at{" "}
                <a
                  href={brandConfig.contact.email}
                  className="underline font-semibold"
                >
                  {brandConfig.contact.email}
                </a>{" "}
                /{" "}
                <a href="tel:+918880526286" className="underline font-semibold">
                  {brandConfig.contact.phone}
                </a>{" "}
                to get <strong>exclusive discounted rates</strong> applied
                directly to your account after signup.
              </p>
            </li>
          </ul>
        </div>

        {/* No Subscription */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4" style={{color:configThemes.home.brandMainColor}}>
            No Subscription or Setup Fees
          </h2>
          <ul className="list-disc pl-10 mt-2 mb-4 space-y-2 text-gray-700">
            <li>
              You only pay for the shipments you book—no fixed monthly charges
              or upfront costs.
            </li>
          </ul>
        </div>

        {/* COD Remittance */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4" style={{color:configThemes.home.brandMainColor}}>
            COD Remittance
          </h2>
          <p className="text-gray-700">
            Receive fast D+1 or D+2 Cash-on-Delivery remittance directly to your
            account. Applicable processing is part of your selected plan and
            transparently shown during reconciliation.
          </p>
        </div>

        {/* Custom Pricing */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4" style={{color:configThemes.home.brandMainColor}}>
            Custom Pricing for High Volume
          </h2>
          <ul className="list-disc pl-10 mt-2 space-y-2 text-gray-700">
            <li>
              For growing or enterprise-level businesses, we offer custom
              pricing solutions tailored to your shipping volume, courier
              preference, and service needs. Get in touch for personalized
              offers.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Pricing;