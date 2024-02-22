import Image from "next/image";

type User = {
    name?: string | null | undefined;
    avatar?: string | null | undefined;
} | undefined;

type Props = {
    user: User;
};

export default function IdCard({ user }: Props) {
    const userImage = user?.avatar ? (
        <Image src={user?.avatar} width={200} height={200} alt={user?.name ?? "Profile Picture"} />
    ) : null

    return (
        <section>
            {userImage}
            <p>{user?.name}</p>
        </section>
    );
}