export function MotionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      {/* Floating blobs */}
      <div
        className="blob"
        style={{ width: 420, height: 420, top: '-80px', right: '-60px', opacity: 0.55 }}
      />
      <div
        className="blob"
        style={{ width: 300, height: 300, bottom: '-40px', left: '10%', opacity: 0.35 }}
      />
    </div>
  )
}
