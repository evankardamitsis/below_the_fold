export default function Home() {
  return (
    <main className="container mx-auto px-4 py-24 space-y-32">
      {/* Inter + Plus Jakarta Sans Preview */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Font Preview</h2>

        <div className="space-y-8">
          <div>
            <h1 className="font-heading text-6xl font-bold mb-4">
              Below The Fold
            </h1>
            <h3 className="font-heading text-2xl text-muted-foreground">
              Ecommerce Design & Development Agency
            </h3>
          </div>

          <div className="max-w-2xl space-y-4">
            <p className="font-sans text-lg">
              We craft exceptional digital experiences that drive growth and engagement.
              Our team specializes in creating modern, high-performing ecommerce solutions.
            </p>
            <p className="font-sans">
              The quick brown fox jumps over the lazy dog.
              1234567890 !@#$%^&*()
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
