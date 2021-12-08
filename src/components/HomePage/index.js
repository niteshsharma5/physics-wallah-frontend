import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import useAPIReducer from "./APIReducer";

const APIBasic3 = () => {
	const [myData, dispatch] = useAPIReducer();

	useEffect(() => {
		getUserInformation();
	}, [myData.url]);

	const getUserInformation = () => {
		const url = `https://pokeapi.co/api/v2/pokemon/?offset=${
			(myData.pageNumber - 1) * 20
		}`;

		dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: true });
		fetch(url)
			.then((res) => {
				if (myData.totalNumberOfPages === -1) {
					const totalNumberOfPages = res.headers.get("X-Total-Count") / 20;
					dispatch({
						type: "SET_TOTAL_NUMBER_OF_PAGES",
						payload: totalNumberOfPages,
					});
				}

				return res.json();
			})
			.then((json) => {
				console.log(typeof json.results);
				dispatch({ type: "SET_NEXT", payload: json.next });
				dispatch({ type: "SET_PREV", payload: json.previous });

				const data = Object.values(json.results);
				console.log(data);
				console.log(typeof data);
				dispatch({ type: "SET_USERS", payload: data });
				console.log(myData.users);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				dispatch({ type: "SET_FETCH_IN_PROGRESS", payload: false });
			});
	};

	return (
		<div className="outer-block">
			<h3>Pokemon</h3>

			{
				<div className="display-details">
					{myData.fetchingInProgress ? (
						<div className="loader size-equalizer"></div>
					) : (
						<table>
							<thead>
								<tr>
									<th>S.No</th>
									<th>Name</th>
									<th>Pokemon</th>
								</tr>
							</thead>
							<tbody>
								{console.log(typeof Object.values(myData.users)) &&
									Object.values(myData.users).map((user) => (
										<tr key={user.id}>
											<td>{user.id}</td>
											<td>
												<a href={user.url} rel="noreferrer" target="_blank">
													{user.website}
												</a>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					)}
				</div>
			}

			{myData.users.length > 0 && (
				<div>
					<div className="page-buttons">
						<button
							style={{
								width: "4rem",
							}}
							disabled={myData.prev === "" || myData.fetchingInProgress}
							onClick={() =>
								dispatch({ type: "SET_URL", payload: myData.prev })
							}
						>
							Previous
						</button>

						<button
							style={{
								width: "4rem",
							}}
							disabled={myData.next === "" || myData.fetchingInProgress}
							onClick={() =>
								dispatch({ type: "SET_URL", payload: myData.next })
							}
						>
							Next
						</button>
					</div>
				</div>
			)}
			<div>
				<Link to="/pokemon">Visit Pokemon</Link>
			</div>
		</div>
	);
};

export default APIBasic3;
