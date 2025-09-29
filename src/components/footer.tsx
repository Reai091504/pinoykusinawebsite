export function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pinoy Kusina. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
