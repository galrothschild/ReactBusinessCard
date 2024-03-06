import React, { useEffect, useState } from "react";
import PageHeader from "../../pages/components/PageHeader";
import UsersList from "../components/usersList";
import { useUsers } from "../utils/useUsers";
import { useSearchParams } from "react-router-dom";

const CRMPage = () => {
	const { users, isPending } = useUsers();
	const [searchParams] = useSearchParams() || { q: "" };
	const filter = searchParams.get("q") || "";
	const [filteredUsers, setFilteredUsers] = useState(users);
	useEffect(() => {
		setFilteredUsers(
			users.filter((user) => {
				return (
					user.name.first.includes(filter) ||
					user.name.last.includes(filter) ||
					user.email.includes(filter)
				);
			}),
		);
	}, [filter, users]);
	return (
		<>
			<PageHeader
				title="User Management Page"
				subtitle="View, Edit and delete users"
			/>
			<UsersList users={filteredUsers} isPending={isPending} />
		</>
	);
};

export default CRMPage;
