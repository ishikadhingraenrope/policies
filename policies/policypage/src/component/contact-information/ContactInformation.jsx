import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function ContactInformation() {
  return (
    <div className="w-full bg-gray-50 flex items-start justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white shadow-lg rounded-2xl w-full  p-8 sm:p-10 text-gray-800">

      <h2 className="text-4xl font-bold mb-8 border-b pb-2 border-gray-200">
        Contact Information Policy
      </h2>

      <p className="mb-6 text-lg">
        At <strong>HB Cafe</strong>, we value your privacy and are committed to
        protecting the personal information you share with us. This policy outlines how
        we collect, use, and safeguard your contact details.
      </p>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">What Information We Collect</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Account Information:</strong> Name, email address, and password.
          </li>
          <li>
            <strong>Order Information:</strong> Shipping/billing address and phone number.
          </li>
          <li>
            <strong>Communication:</strong> Any info shared via email, phone, or contact form.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">How We Use Your Information</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>To process and deliver orders.</li>
          <li>To manage your account and saved preferences.</li>
          <li>To send confirmations and respond to queries.</li>
          <li>To provide support and resolve issues.</li>
          <li>To improve our services and customer experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">How We Protect Your Information</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Data hosted on secure servers.</li>
          <li>SSL/TLS encryption for secure transmission.</li>
          <li>Access limited to authorized staff only.</li>
          <li>Payments handled by trusted gateways; no card details stored.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Sharing Your Information</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Shared with delivery partners for order fulfillment.</li>
          <li>Shared with payment processors for secure transactions.</li>
          <li>Disclosed to authorities if legally required.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Your Choices and Rights</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>You can access and update your information via your account.</li>
          <li>You may opt out of non-essential communications.</li>
          <li>You can request account deletion by contacting us.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Changes to This Policy</h3>
        <p className="text-gray-700">
          We may update this policy periodically. Major changes will be reflected on our
          website.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
        <p>HB Cafe</p>
        <p><FaMapMarkerAlt  className="inline mx-2 text-indigo-800"/>D-22, Omaxe India Trade Center, Alpha 2, Greater Noida</p>
        <p><MdAddIcCall className="inline mx-2 text-indigo-800"/>
+91 99991 02485</p>
        <p><IoMdMail className="inline mx-2 text-indigo-800"/>
hbcafe365@gmail.com</p>
        <p>        Last Updated: July 18, 2025
</p>
      </section>

     
    </div>
    </div>
  );
}

export default ContactInformation;
