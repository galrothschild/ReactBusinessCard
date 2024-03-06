import React from "react";
import PageHeader from "../../pages/components/PageHeader";
import UsersList from "../components/usersList";

const CRMPage = () => {
	return (
		<>
			<PageHeader
				title="User Management Page"
				subtitle="View, Edit and delete users"
			/>
			<UsersList />
		</>
	);
};

export default CRMPage;
