const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple function to download PDF from your folder
function downloadPDF(pdfPath, fileName) {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = fileName || "document.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Alternative version with error handling:
function downloadPDFSafe(pdfPath, fileName) {
  try {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName || "document.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("PDF download initiated");
  } catch (error) {
    console.error("Error downloading PDF:", error);
    alert("Failed to download PDF");
  }
}

// One-liner version:
const downloadPDFQuick = (path, name) => {
  const a = document.createElement("a");
  a.href = path;
  a.download = name;
  a.click();
};

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: toggle icon
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});
