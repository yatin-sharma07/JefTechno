"use client";

const btnBase = {
  flex: 1,
  padding: "12px 0",
  borderRadius: 4,
  fontWeight: 700,
  fontSize: 13,
  cursor: "pointer",
  letterSpacing: "0.05em",
  transition: "all 0.2s",
};

export default function CookieFooterButtons({ onRejectAll, onConfirm }) {
  return (
    <div
      style={{
        padding: "16px 24px",
        borderTop: "1px solid #e8e8e8",
        display: "flex",
        gap: 12,
        flexShrink: 0,
        background: "#232427",
      }}
    >
      {/* Reject All */}
      <button
        onClick={onRejectAll}
        style={{
          ...btnBase,
          background: "transparent",
          color: "#fff",
          border: "2px solid #1a1a1a",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1a1a1a";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#1a1a1a";
        }}
      >
        Reject All
      </button>

      {/* Confirm My Choices */}
      <button
        onClick={onConfirm}
        style={{
          ...btnBase,
          background: "#c0392b",
          color: "#fff",
          border: "2px solid #c0392b",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#c0392b")}
      >
        Confirm My Choices
      </button>
    </div>
  );
}
