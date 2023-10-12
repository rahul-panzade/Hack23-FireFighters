import React, { useEffect, useState } from "react";

import back from "../assets/back.svg";
import { getItem } from "../utils/utils";

function Register() {
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
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
				}}
			/>
			<div
				style={{
					left: 108,
					top: 754,
					position: "absolute",
					color: "#3F5BD9",
					fontSize: 12,
					fontFamily: "Roboto",
					fontWeight: "500",
					wordWrap: "break-word",
				}}
				data-after-text={ids["reg1"]}
				data-after-type="badge top right"
			>
				Want To Open NRI Account
			</div>
			<div
				style={{
					left: 16,
					top: 104,
					position: "absolute",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",
					gap: 8,
					display: "inline-flex",
				}}
			>
				<div
					style={{
						alignSelf: "stretch",
						color: "#181F29",
						fontSize: 20,
						fontFamily: "Roboto",
						fontWeight: "500",
						wordWrap: "break-word",
					}}
				>
					Enter Your Details
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
				<div
					style={{
						width: 375,
						height: 56,
						left: 0,
						top: 0,
						position: "absolute",
					}}
				/>
				<div
					style={{
						width: 24,
						height: 24,
						left: 16,
						top: 16,
						position: "absolute",
					}}
				>
					<div
						style={{
							width: 24,
							height: 24,
							left: 0,
							top: 0,
							position: "absolute",
						}}
					/>
					<img src={back} height={24} width={24} alt="back" />
				</div>
			</div>
			<div
				style={{
					height: 148,
					left: 16,
					top: 159,
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
						alignItems: "flex-start",
						gap: 16,
						display: "flex",
					}}
				>
					<div
						style={{ width: 328, height: 66, position: "relative" }}
						data-after-text={ids["reg2"]}
						data-after-type="badge top right"
					>
						<div
							style={{
								left: 0,
								top: 16,
								position: "absolute",
								color: "#425061",
								fontSize: 14,
								fontFamily: "Roboto",
								fontWeight: "400",
								wordWrap: "break-word",
							}}
						>
							Full Name
						</div>
						<div
							style={{
								width: 328,
								height: 1,
								left: 0,
								top: 44.5,
								position: "absolute",
								border: "1px #E8EBF1 solid",
							}}
						></div>
						<div
							style={{
								width: 19,
								height: 19,
								left: 308,
								top: 18,
								position: "absolute",
								opacity: 0,
							}}
						>
							<div
								style={{
									width: 19,
									height: 19,
									left: 0,
									top: 0,
									position: "absolute",
								}}
							>
								<div
									style={{
										width: 19,
										height: 19,
										left: 0,
										top: 0,
										position: "absolute",
									}}
								/>
								<div
									style={{
										width: 13,
										height: 13,
										left: 3,
										top: 3,
										position: "absolute",
									}}
								>
									<div
										style={{
											width: 6.7,
											height: 0.96,
											left: 6.3,
											top: 12.04,
											position: "absolute",
											border: "1.50px #ACB2BD solid",
										}}
									></div>
									<div
										style={{
											width: 12.35,
											height: 12.52,
											left: 0,
											top: 0,
											position: "absolute",
											border: "1.50px #ACB2BD solid",
										}}
									></div>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{ width: 328, height: 66, position: "relative" }}
						data-after-text={ids["reg3"]}
						data-after-type="badge top right"
					>
						<div
							style={{
								left: 0,
								top: 16,
								position: "absolute",
								color: "#425061",
								fontSize: 14,
								fontFamily: "Roboto",
								fontWeight: "400",
								wordWrap: "break-word",
							}}
						>
							Referral Code (Optional)
						</div>
						<div
							style={{
								width: 328,
								height: 1,
								left: 0,
								top: 44.5,
								position: "absolute",
								border: "1px #E8EBF1 solid",
							}}
						></div>
						<div
							style={{
								width: 19,
								height: 19,
								left: 308,
								top: 18,
								position: "absolute",
								opacity: 0,
							}}
						>
							<div
								style={{
									width: 19,
									height: 19,
									left: 0,
									top: 0,
									position: "absolute",
								}}
							>
								<div
									style={{
										width: 19,
										height: 19,
										left: 0,
										top: 0,
										position: "absolute",
									}}
								/>
								<div
									style={{
										width: 13,
										height: 13,
										left: 3,
										top: 3,
										position: "absolute",
									}}
								>
									<div
										style={{
											width: 6.7,
											height: 0.96,
											left: 6.3,
											top: 12.04,
											position: "absolute",
											border: "1.50px #ACB2BD solid",
										}}
									></div>
									<div
										style={{
											width: 12.35,
											height: 12.52,
											left: 0,
											top: 0,
											position: "absolute",
											border: "1.50px #ACB2BD solid",
										}}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					left: 16,
					top: 600,
					position: "absolute",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					gap: 18,
					display: "inline-flex",
				}}
				data-after-text={ids["reg4"]}
				data-after-type="badge top right"
			>
				<div style={{ width: 328, height: 49, position: "relative" }}>
					<div
						style={{
							width: 328,
							height: 49,
							left: 0,
							top: 0,
							position: "absolute",
						}}
					>
						<div
							style={{
								width: 328,
								height: 49,
								left: 0,
								top: 0,
								position: "absolute",
								background: "#3F5BD9",
								borderRadius: 4,
							}}
						/>
						<div
							style={{
								left: 146,
								top: 17,
								position: "absolute",
								textAlign: "center",
								color: "#FFFFFF",
								fontSize: 14,
								fontFamily: "Roboto",
								fontWeight: "500",
								wordWrap: "break-word",
							}}
						>
							NEXT
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
