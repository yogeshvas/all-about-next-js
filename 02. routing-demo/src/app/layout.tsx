export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <p>header</p>
      <body>{children}</body>
      <p>footer</p>
    </html>
  );
}
