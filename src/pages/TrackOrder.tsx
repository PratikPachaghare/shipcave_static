import { useState } from "react";
import { brandConfig } from "../config/brandConfig";
import configThemes from "../config/theme";

// Common Components
import ProcessSteps from "../components/common/ProcessSteps";
import FeaturesGrid from "../components/common/FeaturesGrid";
import SplitContentSection from "../components/common/SplitContentSection";
import FAQ from "../components/sections/FAQ";
import Button from "../components/common/Button";
import OrderStatusTimeline from "../components/common/OrderStatusTimeline";

interface TrackingStep {
  message: string;
  code?: string;
  dateTime?: string;
}

// 👇 TOGGLE THIS: Change to `true` to enable the API call again
const ENABLE_API_CALL = false;

const TrackOrder = () => {
  const theme = configThemes.home;
  const config = brandConfig.meta.trackOrderPage;

  // 1. State for AWB Input, API Data, Loading, and Error
  const [awbNumber, setAwbNumber] = useState("");
  const [trackingDetails, setTrackingDetails] = useState<TrackingStep[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // 2. Function to handle the API Call
  const handleTrackOrder = async () => {
    if (!awbNumber) {
      setError("Please enter an AWB number.");
      return;
    }

    // 👇 Work in progress bypass check
    if (!ENABLE_API_CALL) {
      setError("This tracking feature is currently a work in progress. Please check back later.");
      return;
    }

    setIsLoading(true);
    setError("");
    setTrackingDetails(null);

    try {
      const response = await fetch(
        `https://api.pcl.solutions/trackShipments/getTrackingDetails?awbNo=${awbNumber}`
      );
      const data = await response.json();

      if (data.success && data.trackingData) {
        setTrackingDetails(data.trackingData as TrackingStep[]);
      } else {
        setError("No tracking details found for this AWB number.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch tracking details. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to format the date from the API
  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString();
  };

  // Helper to get the latest status message for your Timeline component
  const getCurrentStatusMessage = () => {
    if (trackingDetails && trackingDetails.length > 0) {
      // Assuming the last item in the array is the latest status
      return trackingDetails[trackingDetails.length - 1].message;
    }
    return "Order Received"; // Default fallback
  };

  return (
    <main
      className="w-full"
      style={{
        background: `linear-gradient(100deg, ${theme.pageGradientLight} 9%, white 30%, white 85%, ${theme.pageGradientLight} 100%)`,
      }}
    >
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h3
            className="text-xl font-semibold mb-10"
            style={{ color: theme.brandMainColor }}
          >
            Track Order
          </h3>

          <div className="bg-white rounded-lg shadow-sm p-6 lg:p-15">
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-black mb-3 leading-tight">
                  {config.hero.title}
                </h1>
                <p className="text-gray-700 text-[1rem] leading-relaxed mb-8 max-w-3xl">
                  {config.hero.desc}
                </p>

                {/* --- Search Box --- */}
                <div className="bg-white rounded-xl border border-gray-300 flex items-center max-w-lg mb-2 overflow-hidden">
                  <input
                    type="text"
                    value={awbNumber}
                    onChange={(e) => setAwbNumber(e.target.value)}
                    placeholder="Enter AWB number (e.g., PAWA000000532)"
                    className="flex-1 px-4 py-3 outline-none text-gray-800 bg-transparent"
                    onKeyDown={(e) => e.key === 'Enter' && handleTrackOrder()}
                  />
                  <Button 
                    className="px-6 py-3 rounded-none" 
                    onClick={handleTrackOrder}
                    disabled={isLoading}
                  >
                    {isLoading ? "Tracking..." : "Track Now"}
                  </Button>
                </div>
                
                {/* Error / Work in Progress Message Display */}
                {error && (
                  <p className={`${!ENABLE_API_CALL ? "text-orange-500 font-semibold" : "text-red-500"} text-sm mb-8`}>{error}</p>
                )}
                
                {!error && <div className="mb-10"></div>}

                {/* --- API RESULTS DISPLAY --- */}
                {trackingDetails ? <>
                {trackingDetails && (
                  <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-lg mb-4" style={{ color: theme.brandMainColor }}>
                      Shipment History
                    </h4>
                    <div className="space-y-4">
                      {/* Mapping through the API trackingData array */}
                      {trackingDetails.map((step: TrackingStep, index: number) => (
                        <div key={index} className="flex gap-4 relative">
                          {/* Vertical Line */}
                          {index !== trackingDetails.length - 1 && (
                            <div className="absolute left-[7px] top-2 h-full w-[2px] bg-gray-200"></div>
                          )}
                          
                          {/* Dot */}
                          <div className={`w-4 h-4 rounded-full mt-1 shrink-0 ${
                            index === trackingDetails.length - 1 ? "bg-green-500" : "bg-gray-300"
                          }`}></div>
                          
                          {/* Content */}
                          <div>
                            <p className="font-semibold text-gray-800">{step.message}</p>
                            <p className="text-xs text-gray-500 font-mono">{step.code}</p>
                            <p className="text-sm text-gray-600">{formatDate(step.dateTime)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}</>
                :
                <>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Can't Find your AWB number or Order details?
                  </h3>
                  <p className="text-gray-700">
                    Please check the confirmation email or message sent to you
                    after placing your order.
                  </p>
                </div>

                {/* Timeline Component - Updated to use dynamic status */}
                <div className="mt-8">
                  <OrderStatusTimeline 
                    currentStatus={getCurrentStatusMessage() as "Order Received" | "Order Picked" | "Order in Transit" | "Out for Delivery" | "Delivered"} 
                  />
                </div>
                </>}
              </div>

              {/* Hero Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end sticky top-10">
                <div className="relative w-full max-w-lg">
                  <img
                    src={config.hero.image}
                    alt="Track Order Map"
                    className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Order Status Timeline (Static Info) */}
      <ProcessSteps
        title={
          <>
            What's your{" "}
            <span style={{ color: theme.brandMainColor }}>Order Status?</span>
          </>
        }
        description="Knowing your order status helps you plan better. Here is what each status means:"
        steps={config.statusSteps}
      />

      {/* 3. Why Use Tracking */}
      <FeaturesGrid
        title={
          <>
            Why use our{" "}
            <span style={{ color: theme.brandMainColor }}>
              Tracking System?
            </span>
          </>
        }
        description="Our tracking system offers several advantages to give you complete visibility:"
        features={config.whyUse}
        columns={4}
      />

      {/* 4. Troubleshooting */}
      <SplitContentSection
        title={
          <>
            <span style={{ color: theme.brandMainColor }}>Troubleshooting</span>{" "}
            Tracking Issues
          </>
        }
        subHeading="If you encounter any issues with tracking your order, please consider the following steps:"
        image={config.troubleshooting.image}
        reverse={true}
        features={config.troubleshooting.data}
      />

      {/* 5. FAQ Section */}
      <FAQ
        items={config.faq.items}
        description={config.faq.description}
      />
    </main>
  );
};

export default TrackOrder;