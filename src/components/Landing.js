import { Nav, Hero } from "./";
export function Landing() {
    const styles = {
        background: "linear-gradient(180deg, rgba(123, 218, 167, 0.78) 0%, rgba(147, 205, 174, 0.46) 56.29%, rgba(252, 252, 252, 0) 100%)",
    }
    return (
        <div
            style={styles}
            className="mb-24"
        >
            <Nav />
            <Hero />
        </div>
    );
}