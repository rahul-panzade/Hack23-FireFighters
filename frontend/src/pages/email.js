import React, { useEffect, useState } from "react";

import back from "../assets/back.svg";
import { getItem } from "../utils/utils";
import google from "../assets/google.svg";

function Email() {
	const [ids, setIds] = useState({});
	useEffect(() => {
		setIds(JSON.parse(getItem("ids")));
		console.log(ids);
		return () => {};
	}, []);
	return (
		<div
			style={{
				width: 360,
				height: 800,
				position: "relative",
				background: "#F4F6FB",
			}}
		>
			<div
				style={{
					width: 360,
					height: 720,
					left: 0,
					top: 80,
					position: "absolute",
					background: "white",
					borderTopLeftRadius: 24,
					borderTopRightRadius: 24,
				}}
			/>
			<div
				style={{
					height: 42,
					left: 16,
					top: 104,
					position: "absolute",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 2,
					display: "inline-flex",
				}}
			>
				<div
					style={{
						alignSelf: "stretch",
						textAlign: "center",
						color: "#181F29",
						fontSize: 18,
						fontFamily: "Roboto",
						fontWeight: "500",
						wordWrap: "break-word",
					}}
				>
					Add your email address to start KYC verification
				</div>
			</div>
			<div
				style={{
					width: 360,
					height: 56,
					left: 0,
					top: 24,
					position: "absolute",
				}}
			>
				<img src={back} height={24} width={24} alt="back" />
			</div>

			<div
				style={{
					left: 16,
					top: 489,
					position: "absolute",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					gap: 16,
					display: "inline-flex",
				}}
			>
				<div
					style={{
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
						gap: 8,
						display: "flex",
					}}
					data-after-text={ids["email1"]}
					data-after-type="badge top right"
				>
					<div
						style={{
							width: 328,
							paddingLeft: 24,
							paddingRight: 24,
							paddingTop: 12,
							paddingBottom: 12,
							background: "#3F5BD9",
							borderRadius: 4,
							overflow: "hidden",
							justifyContent: "space-between",
							alignItems: "center",
							display: "inline-flex",
						}}
					>
						<div style={{ width: 24, height: 24, position: "relative" }}>
							<div
								style={{
									width: 18,
									height: 18,
									left: 3,
									top: 3,
									position: "absolute",
								}}
							/>
							<div
								style={{
									width: 13.19,
									height: 13.46,
									left: 5.25,
									top: 5.25,
									position: "absolute",
								}}
							>
								<img
									style={{
										position: "absolute",
										top: "-5",
										left: "-5",
									}}
									src={google}
									alt="google"
									height={24}
									width={24}
								/>
							</div>
						</div>
						<div
							style={{
								width: 280,
								textAlign: "center",
								color: "white",
								fontSize: 14,
								fontFamily: "Roboto",
								fontWeight: "500",
								wordWrap: "break-word",
							}}
						>
							Continue with Google
						</div>
					</div>
				</div>
				<div
					style={{
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
						gap: 8,
						display: "flex",
					}}
					data-after-text={ids["email2"]}
					data-after-type="badge top right"
				>
					<div
						style={{
							width: 328,
							paddingLeft: 24,
							paddingRight: 24,
							paddingTop: 12,
							paddingBottom: 12,
							borderRadius: 4,
							overflow: "hidden",
							border: "1px #E8EBF1 solid",
							justifyContent: "space-between",
							alignItems: "center",
							display: "inline-flex",
						}}
					>
						<div style={{ width: 25.1, height: 24, position: "relative" }}>
							<div
								style={{
									width: 25.1,
									height: 24,
									left: 0,
									top: 0,
									position: "absolute",
								}}
							/>
							<div
								style={{
									width: 16.73,
									height: 12.8,
									left: 4.18,
									top: 6,
									position: "absolute",
								}}
							>
								<div
									style={{
										width: 16.73,
										height: 12.8,
										left: 0,
										top: 0,
										position: "absolute",
										border: "1.50px #6A7582 solid",
									}}
								></div>
								<div
									style={{
										width: 16.73,
										height: 5.6,
										left: 0,
										top: 1.6,
										position: "absolute",
										border: "1.50px #6A7582 solid",
									}}
								></div>
							</div>
						</div>
						<div
							style={{
								width: 280,
								textAlign: "center",
								color: "#181F29",
								fontSize: 14,
								fontFamily: "Roboto",
								fontWeight: "500",
								wordWrap: "break-word",
							}}
						>
							Use other Email
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Email;
