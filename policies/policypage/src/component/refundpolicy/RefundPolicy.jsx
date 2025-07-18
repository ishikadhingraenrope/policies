import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function RefundPolicy() {
  return (
    <div className="w-full bg-gray-50 flex items-start justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-lg rounded-2xl w-full  p-8 sm:p-10 text-gray-800">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">HB Cafe Refund Policy</h2>

        <p className="mb-6 text-lg text-gray-700">
          We want you to be completely satisfied with your order from HB Cafe! Please read our
refund policy carefully to understand your options.

        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Eligibility for Refund</h3>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700">
            <li><span>Incorrect Order:</span> If you receive an item that is different from what you ordered (e.g.,
wrong meal, wrong size)</li>
            <li><span>Missing Items:</span> If an item you paid for is missing from your order.</li>
            <li><span>Poor Quality/Spoiled Food:</span>If the food you receive is clearly spoiled, undercooked,
or otherwise unfit for consumption. Please note, subjective taste preferences generally
do not qualify for a refund unless the food is demonstrably bad.</li>
            <li><span>Damaged Packaging:</span> If your order arrives with significant damage to the packaging
that affects the quality or safety of the food inside.
</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Non-Refundable Items/Situations</h3>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700">
            <li><span>Change of Mind :</span> We cannot offer refunds or exchanges if you simply change your
mind after placing or receiving your order.</li>
            <li><span>Delayed Delivery (within reasonable limits):</span> While we strive for timely delivery,
minor delays due to unforeseen circumstances (e.g., traffic, weather) do not typically
qualify for a refund.</li>
            <li><span>Incorrect Information Provided:</span> If you provided an incorrect address, contact
number, or other details that led to a failed delivery, a refund will not be issued.</li>
            <li><span>Orders Placed in Error:</span> If you accidentally placed an order, please contact us
immediately (see "Cancellation Policy" below). Refunds for accidental orders are at
our discretion if the order has already been prepared or dispatched.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. How to Request a Refund</h3>
          <h4 className=" font-semibold text-gray-800 mb-3 text-left">To request a refund, you must:
</h4>
          <ol className="list-decimal list-inside text-base space-y-2 text-gray-700">
            <li><span>Contact Us Immediately:</span> Notify us within 1 minute of receiving your order (for
issues like incorrect/missing items or quality concerns). For undelivered orders,
contact us as soon as the delivery window has passed.</li>
            <li><span>Provide Order Details:</span> Have your order number ready. You can find this in your
order history after logging into your account.</li>
            <li><span>Describe the Issue:</span> Clearly explain the problem with your order</li>
            <li><span>Provide Evidence (if applicable):</span> For quality issues or incorrect items, we may
request photographic evidence.
</li>
          </ol>

          <p className="mt-4 text-gray-700">You can contact us via:</p>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700 mt-2">
            <li><strong>Phone:</strong> +91 99991 02485</li>
            <li><strong>Email:</strong> hbcafe365@gmail.com</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">4. Refund Process</h3>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700">
            <li><strong>Online Payments:</strong>Refunds for online payments will be processed to the original
payment method within 3-7 business days. The time it takes for the refund to reflect in
your account may vary depending on your bank or payment provider</li>
            <li><strong>Cash on Delivery (COD): </strong> : For COD orders, refunds will typically be issued as store
credit that can be used for future purchases, or via a digital payment method (e.g.,
UPI, bank transfer) after verification, within 2-5 business days. Please ensure your
mobile number is updated in your profile for such transfers.
</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">5. Cancellation Policy</h3>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700">
            <li>You may cancel your order within 1 minute of placing it, provided the order has not
yet been prepared or dispatched.</li>
            <li>To cancel an order, please contact us immediately at +91 99991 02485.
</li>
            <li>Cancellations made after the preparation or dispatch of the order may not be eligible
for a full refund and will be at our discretion.
</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">6. Your Account Information</h3>
          <p className="text-base text-gray-700">
            Please ensure your name, mobile number, and address are accurate and up-to-date in your
user profile. This information is crucial for successful delivery and for processing any refunds
or communications. You can access and update this information by logging into your account
and checking your order history.

          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t text-sm text-center text-gray-500">
          <p>HB Cafe</p>
        
 <p>  <FaMapMarkerAlt  className="inline mx-2 text-lg text-indigo-800" />D-22, Omaxe India Trade Center, Alpha 2, Greater Noida, Uttar Pradesh 201310</p>
          <p><TbWorld  className="inline mx-2 text-lg text-indigo-800"/>
<a href="https://www.hbcafe.in" className="text-blue-500 hover:underline">www.hbcafe.in</a></p>
          <p className="text-gray-400 mt-1">Last Updated: July 18, 2025</p>
        </div>
      </div>
    </div>
  );
}
