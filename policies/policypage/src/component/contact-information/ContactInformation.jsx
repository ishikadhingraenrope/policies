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
        At <strong>HB Cafe,</strong> we value your privacy and are committed to protecting the personal
information you share with us. This policy outlines how we collect, use, and safeguard
your contact details when you use our website, place orders, and manage your
account.
      </p>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">What Information We Collect</h3>
        <p className="mb-2">When you interact with our website, we may collect the following contact information:
</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Account Information:</strong> When you create an account, we collect your name,
email address, and password.

          </li>
          <li>
            <strong>Order Information:</strong> When you place an order, we collect your shipping
address, billing address, and mobile number. This information is essential for
processing your orders, providing delivery updates, and managing Cash on
Delivery (COD) payments.
          </li>
          <li>
            <strong>Communication Information:</strong>  If you contact us via email, phone, or our
website's contact form, we will collect your name, email address, and any other
information you provide in your message.

          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">How We Use Your Information</h3>
        <h4 className="text-left mb-2">We use the contact information we collect for the following purposes:
</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Order Fulfillment:</strong> To process your food orders, arrange for delivery, and
facilitate COD or online payments.</li>
          <li><strong>Account Management:</strong> To create and maintain your user account, allowing
you to track your order history and manage your saved details (name, mobile
number, address).</li>
          <li><strong>Communication:</strong> To send you order confirmations, delivery updates, and
respond to your inquiries or feedback.
</li>
          <li><strong>Customer Service:</strong> To provide support and resolve any issues you may
encounter with your orders or account.
</li>
          <li><strong>Improvements:</strong> To understand how our customers use our services so we can
enhance our website, menu, and overall customer experience.
</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">How We Protect Your Information</h3>
        <p className="mb-2">We implement a variety of security measures to protect your personal information:
</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Secure Servers:</strong> Our website and user data are hosted on secure servers</li>
          <li><strong>Encryption:</strong> We use encryption (SSL/TLS) to protect data transmitted between
your browser and our website, especially during login and checkout processes.
</li>
          <li><strong>Access Control:</strong> Access to your personal information is restricted to authorized
employees who need the information to perform their job duties.</li>
          <li><strong>Payment Security:</strong> For online payments, we partner with reputable payment
gateways that adhere to strict security standards. We do not store your full
credit card details on our servers. For COD, your mobile number and address
are used solely for delivery purposes.
</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Sharing Your Information</h3>
        <p className="mb-2">We do not sell, trade, or otherwise transfer your personally identifiable information to
outside parties, except in the following circumstances:
</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Delivery Partners:</strong> We may share your name, address, and mobile number
with our delivery partners to ensure your orders reach you.</li>
          <li><strong>Payment Processors:</strong> Your payment information (excluding full credit card
details) is shared with our trusted online payment processors to complete
transactions.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information when required to do
so by law or in response to valid requests by public authorities (e.g., a court
order or government agency).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Your Choices and Rights</h3>
        <p className="mb-2">You have control over your contact information:
</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Account Access & Modification:</strong> You can log in to your account at any time to
review, update, or correct your name, mobile number, and address. You can
also view your order history.</li>
          <li><strong>Communication Preferences:</strong> If you wish to stop receiving non-essential
communications from us, you can usually do so by managing your notification
settings within your account or by contacting us directly.</li>
          <li><strong>Account Deletion:</strong> If you wish to delete your account, please contact us. Please
note that some information may be retained for record-keeping purposes or as
required by law.
</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Changes to This Policy</h3>
        <p className="text-gray-700">
          We may update this Contact Information Policy from time to time to reflect changes in
our practices or for other operational, legal, or regulatory reasons. We will notify you
of any significant changes by posting the new policy on our website.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
        <p className="mb-2">If you have any questions or concerns about this Contact Information Policy or our
privacy practices, please contact us at:
</p>
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
