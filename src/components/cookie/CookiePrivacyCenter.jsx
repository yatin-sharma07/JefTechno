"use client";
import CookieToggle from "./CookieToggle";
import cookieCategories from "./cookieData";

export default function CookiePrivacyCenter({
  consent,
  onToggleConsent,
  onAllowAll,
  onGoToManage,
}) {
  return (
    <>
      <h2
        style={{ margin: "0 0 16px", fontSize: 22, fontWeight: 700, color: "#fff" }}
      >
        Privacy Preference Center
      </h2>

      <p style={{ fontSize: 13, color: "#fff", lineHeight: 1.75, margin: "0 0 12px" }}>
        When you visit any website, it may store or retrieve information on your
        browser, mostly in the form of cookies. This information might be about you,
        your preferences or your device and is mostly used to make the site work as
        you expect it to.
      </p>

      <p style={{ fontSize: 13, color: "#fff", lineHeight: 1.75, margin: "0 0 20px" }}>
        Because we respect your right to privacy, you can choose not to allow some
        types of cookies. Click on the different category headings to find out more
        and change our default settings. However, blocking some types of cookies may
        impact your experience of the site.
      </p>

      <a
        href="/cookiepolicy"
        style={{
          fontSize: 13,
          color: "#c0392b",
          textDecoration: "underline",
          display: "inline-block",
          marginBottom: 24,
        }}
      >
        More information
      </a>

      {/* Allow All */}
      <button
        onClick={onAllowAll}
        style={{
          display: "block",
          padding: "12px 28px",
          background: "#c0392b",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: 700,
          fontSize: 13,
          cursor: "pointer",
          letterSpacing: "0.05em",
          marginBottom: 28,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#c0392b")}
      >
        Allow All
      </button>

      {/* Section label */}
      <h3
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "#fff",
          margin: "0 0 12px",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
        }}
      >
        Manage Consent Preferences
      </h3>

      {/* Collapsed accordion list — click any row to enter Manage view */}
      {cookieCategories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => onGoToManage(cat.id)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "13px 16px",
            border: "1px solid #e8e8e8",
            borderRadius: 4,
            marginBottom: 8,
            cursor: "pointer",
            background: "#fafafa",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fafafa")}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#c0392b", fontSize: 16, fontWeight: 300, minWidth: 14 }}>
              +
            </span>
            <span style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a" }}>
              {cat.title}
            </span>
          </div>

          {cat.alwaysActive ? (
            <span style={{ fontSize: 12, color: "#c0392b", fontWeight: 600, flexShrink: 0 }}>
              Always Active
            </span>
          ) : (
            <div onClick={(e) => e.stopPropagation()}>
              <CookieToggle
                checked={consent[cat.id] || false}
                onChange={() => onToggleConsent(cat.id)}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
