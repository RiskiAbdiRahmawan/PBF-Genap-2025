import Link from "next/link";
import { useRouter } from "next/router";

const UserDetail = ({ user }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail Pengguna</h1>
      <p>
        <strong>Nama:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Telepon:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <Link href="/users/users">Kembali</Link>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() }, // ✅ HARUS menggunakan "id", bukan "users"
  }));

  return {
    paths,
    fallback: true, // Jika user belum ada saat build time, tampilkan loading
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default UserDetail;
