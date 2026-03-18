import { brandConfig } from "../config/brandConfig";
import configThemes from "../config/theme";

const TermsOfService = () => {
  const theme = configThemes.home;

  return (
    <main
      className="w-full min-h-screen py-16 lg:py-20"
      style={{
        background: `linear-gradient(120deg, ${theme.pageGradientLight} 0%, white 30%, white 85%, ${theme.pageGradientLight} 100%)`,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 lg:p-12">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: theme.headingTextColor }}
          >
           {brandConfig.meta.name} - Website Policies
          </h1>
          <p className="text-gray-600 mb-10">
            These policies apply to all users of {brandConfig.meta.name}.
          </p>

          <div className="space-y-10">
            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: theme.brandMainColor }}
              >
                Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {brandConfig.meta.name} respects your privacy and is committed to
                  protecting your personal information.
                </p>
                <p>
                  We collect basic details such as name, contact number, email
                  address, address, and shipment information only for service
                  and communication purposes.
                </p>
                <p>
                  All online payments on our website are processed securely
                  through Razorpay. We do not store or have access to your
                  card, UPI, or banking details.
                </p>
                <p>
                  User information is used strictly for service fulfillment,
                  payment processing, and customer support and is not shared
                  with third parties except as required by law.
                </p>
                <p>
                  By using our website and services, you agree to this Privacy
                  Policy.
                </p>
              </div>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: theme.brandMainColor }}
              >
                Terms & Conditions
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  By accessing and using the services of {brandConfig.meta.name}, you
                  agree to comply with the following terms and conditions.
                </p>
                <p>
                  All service bookings are subject to availability. Customers
                  must provide accurate shipment and contact details at the time
                  of booking.
                </p>
                <p>
                  {brandConfig.meta.name} is not responsible for delays caused due to
                  factors beyond our control, including weather conditions,
                  traffic, strikes, or regulatory issues.
                </p>
                <p>
                  Payments must be completed in advance to confirm services. Any
                  misuse of the website or services may result in service
                  refusal.
                </p>
                <p>
                  All disputes shall be governed by and subject to the laws of
                  India.
                </p>
              </div>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: theme.brandMainColor }}
              >
                Refund & Cancellation Policy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At {brandConfig.meta.name}, we aim to provide reliable logistics
                  services.
                </p>
                <p>
                  Cancellations are allowed only before shipment dispatch. Once
                  the shipment is dispatched, cancellation may not be possible.
                </p>
                <p>
                  If a cancellation or refund is approved, the refund amount
                  will be processed within 5-7 working days and credited back to
                  the original payment method.
                </p>
                <p>
                  Service charges or operational costs may be deducted where
                  applicable.
                </p>
                <p>
                  For any refund or cancellation requests, customers must
                  contact us through our official contact details.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsOfService;
