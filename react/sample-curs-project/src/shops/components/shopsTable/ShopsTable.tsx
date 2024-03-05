import "./Shops.css";

const ShopsTable = (): React.ReactElement => {
	return (
		<table className="shops-data">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>City</th>
					<th>Image</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Sample</td>
					<td>Sample</td>
					<td>Sample</td>
					<td>Sample</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ShopsTable;
