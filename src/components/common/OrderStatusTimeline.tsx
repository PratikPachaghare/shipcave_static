import React from "react";

type OrderStatus =
  | "Order Received"
  | "Order Picked"
  | "Order in Transit"
  | "Out for Delivery"
  | "Delivered";

interface OrderStatusTimelineProps {
  currentStatus: OrderStatus;
}

const STATUSES: OrderStatus[] = [
  "Order Received",
  "Order Picked",
  "Order in Transit",
  "Out for Delivery",
  "Delivered",
];

const OrderStatusTimeline: React.FC<OrderStatusTimelineProps> = ({
  currentStatus,
}) => {
  const currentIndex = STATUSES.indexOf(currentStatus);

  return (
    <div>
      <p className="text-lg font-semibold text-black mb-6">
        Order Status
      </p>

      <div className="flex items-start justify-between relative">
        {STATUSES.map((status, index) => {
          const isCurrent = index === currentIndex;

          return (
            <div
              key={status}
              className="flex-1 flex flex-col items-center relative"
            >
              {/* Dashed connector (only between items) */}
              {index !== STATUSES.length - 1 && (
                <div className="absolute top-3.5 left-1/2 w-full border-t-2 border-dashed border-primary z-0" />
              )}

              {/* Step circle */}
              <div
                className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center bg-white
                  ${
                    isCurrent
                      ? "border-2 border-primary"
                      : "border-2 border-primary text-primary font-bold"
                  }
                `}
              >
                {isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-primary" />
                ) : (
                  index + 1
                )}
              </div>

              {/* Label */}
              <span className="mt-3 text-[0.75rem] font-medium text-gray-700 text-center max-w-[120px]">
                {status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusTimeline;
