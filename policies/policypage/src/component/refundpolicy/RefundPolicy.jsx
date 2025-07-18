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
            <li>Incorrect Order: Received an item different from what you ordered.</li>
            <li>Missing Items: Paid item missing from your order.</li>
            <li>Poor Quality/Spoiled Food: Spoiled or unfit food (not taste-based).</li>
            <li>Damaged Packaging: Affects food quality or safety.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Non-Refundable Items/Situations</h3>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700">
            <li>Change of Mind after placing or receiving an order.</li>
            <li>Minor delivery delays due to traffic or weather.</li>
            <li>Incorrect delivery information provided by you.</li>
            <li>Orders placed by mistake — handled at our discretion if prepared.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. How to Request a Refund</h3>
          <ol className="list-decimal list-inside text-base space-y-2 text-gray-700">
            <li>Contact us within 1 minute of receiving the order or after a missed delivery window.</li>
            <li>Keep your order number handy (in order history).</li>
            <li>Clearly describe the issue.</li>
            <li>Provide photos if requested.</li>
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
            <li><strong>Online Payments:</strong> Refunded to the original method within 3–7 business days.</li>
            <li><strong>COD Orders:</strong> Refunded as store credit or UPI/bank transfer within 2–5 business days after verification.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">5. Cancellation Policy</h3>
          <ul className="list-disc list-inside text-base space-y-2 text-gray-700">
            <li>Cancel within 1 minute if not prepared.</li>
            <li>Call us at +91 99991 02485 immediately.</li>
            <li>Late cancellations may not be refunded fully.</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">6. Your Account Information</h3>
          <p className="text-base text-gray-700">
            Make sure your name, phone number, and address are accurate in your profile.
            This helps with delivery and refund processing. You can update these by logging in
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
