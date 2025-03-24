// src/pages/ManageInsurance.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// For simplicity, we use Chart.js via a CDN in the index.html;
// alternatively, you could install react-chartjs-2 and chart.js as dependencies.
const ManageInsurance = () => {
  useEffect(() => {
    // Assume Chart.js is loaded on the window.
    const ctx = document.getElementById("expenseChart").getContext("2d");

    new window.Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Spending",
            data: [200, 150, 180, 220, 300, 250, 270, 330, 290, 310, 260, 280],
            backgroundColor: "rgba(0, 95, 163, 0.6)",
            borderColor: "rgba(0, 95, 163, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    });
  }, []);

  const generatePDF = (type) => {
    // Placeholder for PDF generation logic.
    alert("Generating " + type + " tax bill as PDF");
  };

  return (
    <>
      <Navbar />
      <section className="insurance-management py-20 text-center animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-bold mb-10">Insurance Expense Management</h2>
        <div className="chart-container max-w-2xl mx-auto mb-10 animate__animated animate__fadeInUp animate__delay-1s">
          <canvas id="expenseChart"></canvas>
        </div>
        <div className="pdf-actions space-x-4 mb-10 animate__animated animate__fadeInUp animate__delay-2s">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" onClick={() => generatePDF("monthly")}>
            Generate Monthly Tax Bill
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" onClick={() => generatePDF("yearly")}>
            Generate Yearly Tax Bill
          </button>
        </div>
        {/* Success Story Banner */}
        <div className="testimonial-banner bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-3s">
          <p className="italic mb-4">"Using InsureHub's expense management, I saved so much by tracking my policies!"</p>
          <h4 className="font-bold">- Alex M.</h4>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ManageInsurance;
