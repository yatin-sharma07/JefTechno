"use client";
import CookiePrivacyCenter from "./CookiePrivacyCenter";
import CookieManageView from "./CookieManageView";
import CookieFooterButtons from "./CookieFooterButtons";

export default function CookieModal({
  visible,
  onClose,
  detailView,
  setDetailView,
  consent,
  onToggleConsent,
  expanded,
  onToggleExpand,
  onAllowAll,
  onRejectAll,
  onConfirm,
}) {
  const goToManage = (openCatId) => {
    setDetailView(true, openCatId);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.35s",
          className: "scrollbar-hide",
        }}
      />

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie Preferences"
        className="scrollbar-hide"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "min(480px, 100vw)",
          background: "#232427",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          transform: visible ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "4px 0 32px rgba(0,0,0,0.2)",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        {/* ── Panel Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
            borderBottom: "2px solid #c0392b",
            flexShrink: 0,
          }}
        >
          {/* JEF Brand mark */}

          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/HomePageImg/NavbarImg/JefTechno_logo_ 2.png"
              alt="JEF Logo"
              style={{
                height: 40,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          <button
            onClick={onClose}
            aria-label="Close cookie preferences"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 24,
              color: "#888",
              lineHeight: 1,
              padding: 4,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            ×
          </button>
        </div>

        {/* ── Scrollable Body ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {!detailView ? (
            <CookiePrivacyCenter
              consent={consent}
              onToggleConsent={onToggleConsent}
              onAllowAll={onAllowAll}
              onGoToManage={goToManage}
              className="scrollbar-hide"
            />
          ) : (
            <CookieManageView
              consent={consent}
              onToggleConsent={onToggleConsent}
              expanded={expanded}
              onToggleExpand={onToggleExpand}
              onBack={() => setDetailView(false)}
            />
          )}
        </div>

        {/* ── Footer ── */}
        <CookieFooterButtons onRejectAll={onRejectAll} onConfirm={onConfirm} />
      </div>
    </>
  );
}
