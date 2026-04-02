import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="login-wrap">
      <div className="login-card">
        <p className="eyebrow">V2 Official</p>
        <h1>Enter NEWCLEUS</h1>
        <p className="muted">Secure command entry for clients, operators, dealers, and finance leadership.</p>
        <div className="stack">
          <input className="input" placeholder="Email address" />
          <input className="input" placeholder="Password" type="password" />
          <Link className="button" href="/command">Enter System</Link>
          <div className="row-between">
            <a className="link" href="#">Forgot password</a>
            <a className="link" href="#">Request access</a>
          </div>
        </div>
      </div>
    </div>
  );
}
