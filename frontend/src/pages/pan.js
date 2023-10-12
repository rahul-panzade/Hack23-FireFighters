import React, { useEffect, useState } from "react";

import back from "../assets/back.svg";
import { getItem } from "../utils/utils";

function Pan() {
	const [ids, setIds] = useState({});
	useEffect(() => {
		setIds(JSON.parse(getItem("ids")));
		console.log(ids);
		return () => {};
	}, []);
	return (
		<div
			style={{
				width: 375,
				height: 812,
				position: "relative",
				background: "#F4F6FB",
			}}
		>
			<div
				style={{
					width: 375,
					height: 44,
					left: 0,
					top: 0,
					position: "absolute",
				}}
			>
				<div
					style={{
						left: 32,
						top: 13,
						position: "absolute",
						color: "#0F172A",
						fontSize: 15,
						fontFamily: "SF Pro Text",
						fontWeight: "600",
						lineHeight: 21,
						wordWrap: "break-word",
					}}
				>
					9:41
				</div>
			</div>
			<div
				style={{
					width: 375,
					height: 56,
					left: 0,
					top: 44,
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
					<img src={back} height={24} width={24} alt="back" />
				</div>
				<div
					style={{
						left: 281,
						top: 19,
						position: "absolute",
						textAlign: "right",
						color: "#3F5BD9",
						fontSize: 14,
						fontFamily: "Barlow",
						fontWeight: "600",
						textTransform: "uppercase",
						wordWrap: "break-word",
					}}
					data-after-text={ids["pan1"]}
					data-after-type="badge top right"
				>
					Need help?
				</div>
			</div>
			<div
				style={{
					width: 375,
					height: 712,
					left: 0,
					top: 100,
					position: "absolute",
					background: "white",
					borderTopLeftRadius: 24,
					borderTopRightRadius: 24,
				}}
			/>
			<div
				style={{
					width: 335,
					left: 20,
					top: 763,
					position: "absolute",
					textAlign: "center",
					color: "#3F5BD9",
					fontSize: 16,
					fontFamily: "Barlow",
					fontWeight: "600",
					wordWrap: "break-word",
				}}
				data-after-text={ids["pan3"]}
				data-after-type="badge top right"
			>
				Upload a file or Add details manually
			</div>
			<div
				style={{
					width: 343,
					paddingTop: 16,
					paddingBottom: 16,
					paddingLeft: 128,
					paddingRight: 129,
					left: 16,
					top: 678,
					position: "absolute",
					background: "#3F5BD9",
					borderRadius: 4,
					justifyContent: "center",
					alignItems: "center",
					gap: 10,
					display: "inline-flex",
				}}
				data-after-text={ids["pan2"]}
				data-after-type="badge top right"
			>
				<div
					style={{
						color: "white",
						fontSize: 10,
						fontFamily: "Barlow",
						fontWeight: "500",
					}}
				>
					CLICK A PICTURE
				</div>
			</div>
			<div
				style={{
					width: 256,
					height: 150.63,
					left: 60,
					top: 387,
					position: "absolute",
				}}
			>
				<div
					style={{
						width: 256,
						height: 150.63,
						left: 0,
						top: 0,
						position: "absolute",
						background:
							"linear-gradient(135deg, #B6DBF2 0%, #ADD7F3 16%, #CBE3F0 33%, #DAEAF1 61%, #D3E8F1 70%, #CDE8F2 100%)",
						borderRadius: 8,
					}}
				/>
				<div
					style={{
						width: 256,
						height: 150.63,
						left: 0,
						top: 0,
						position: "absolute",
						background:
							"linear-gradient(135deg, #B6DBF2 0%, #ADD7F3 16%, #CBE3F0 33%, #DAEAF1 61%, #D3E8F1 70%, #CDE8F2 100%)",
						borderRadius: 8,
					}}
				/>
				<div
					style={{
						width: 183.41,
						height: 88.2,
						left: -43.71,
						top: 77.27,
						position: "absolute",
						opacity: 0.4,
						background:
							"radial-gradient(118.44% 61.24% at 220.92% 37.26%, rgba(143.02, 94, 255, 0.75) 0%, rgba(175.71, 94.48, 255, 0) 100%)",
						borderRadius: 9999,
					}}
				/>
				<div
					style={{
						width: 234.93,
						height: 128,
						left: 7.8,
						top: 12.49,
						position: "absolute",
					}}
				>
					<div
						style={{
							width: 96.78,
							height: 26.54,
							left: -0,
							top: 46.05,
							position: "absolute",
							opacity: 0.51,
							background: "white",
							borderRadius: 4,
						}}
					/>
					<img
						style={{
							width: 20.72,
							height: 6.09,
							left: 5.39,
							top: 50.19,
							position: "absolute",
							opacity: 0.7,
						}}
						src="https://via.placeholder.com/21x6"
						alt=""
					/>
					<img
						style={{
							width: 124.02,
							height: 6.16,
							left: 58.41,
							top: 5.63,
							position: "absolute",
							opacity: 0.7,
						}}
						src="https://via.placeholder.com/124x6"
						alt=""
					/>
					<img
						style={{
							width: 71.61,
							height: 6.01,
							left: 4.97,
							top: 61.89,
							position: "absolute",
						}}
						src="https://via.placeholder.com/72x6"
						alt=""
					/>
					<img
						style={{
							width: 91.14,
							height: 7.65,
							left: 74.51,
							top: 18.11,
							position: "absolute",
						}}
						src="https://via.placeholder.com/91x8"
						alt=""
					/>
					<img
						style={{
							width: 52.38,
							height: 6.09,
							left: 5.39,
							top: 78.28,
							position: "absolute",
							opacity: 0.7,
						}}
						src="https://via.placeholder.com/52x6"
						alt=""
					/>
					<img
						style={{
							width: 66.32,
							height: 6.01,
							left: 4.97,
							top: 89.99,
							position: "absolute",
						}}
						src="https://via.placeholder.com/66x6"
						alt=""
					/>
					<div
						style={{
							width: 96.78,
							height: 26.54,
							left: -0,
							top: 101.46,
							position: "absolute",
							opacity: 0.51,
							background: "white",
							borderRadius: 4,
						}}
					/>
					<img
						style={{
							width: 45.34,
							height: 6.23,
							left: 5.39,
							top: 106.23,
							position: "absolute",
							opacity: 0.7,
						}}
						src="https://via.placeholder.com/45x6"
						alt=""
					/>
					<img
						style={{
							width: 50.33,
							height: 6.01,
							left: 5.31,
							top: 118.09,
							position: "absolute",
						}}
						src="https://via.placeholder.com/50x6"
						alt=""
					/>
					<img
						style={{
							width: 74.18,
							height: 7.91,
							left: 150.11,
							top: 114.77,
							position: "absolute",
						}}
						src="https://via.placeholder.com/74x8"
						alt=""
					/>
					<div
						style={{
							width: 42.15,
							height: 40.59,
							left: 4.68,
							top: 0,
							position: "absolute",
						}}
					>
						<div
							style={{
								width: 42.15,
								height: 40.59,
								left: 0,
								top: 0,
								position: "absolute",
								opacity: 0.3,
								background: "white",
								borderRadius: 2,
							}}
						/>
						<div
							style={{
								width: 42.15,
								height: 40.59,
								left: 0,
								top: 0,
								position: "absolute",
								background: "white",
								borderRadius: 2,
							}}
						/>
						<div
							style={{
								width: 24.1,
								height: 39.52,
								left: 9.37,
								top: 5.46,
								position: "absolute",
							}}
						>
							<div
								style={{
									width: 4.74,
									height: 5.58,
									left: 0,
									top: 15.7,
									position: "absolute",
									background: "#F5C1B0",
								}}
							></div>
							<div
								style={{
									width: 4.74,
									height: 5.58,
									left: 19.36,
									top: 15.7,
									position: "absolute",
									background: "#F5C1B0",
								}}
							></div>
							<div
								style={{
									width: 8.26,
									height: 12.04,
									left: 7.75,
									top: 24.7,
									position: "absolute",
									background: "#F5C1B0",
								}}
							></div>
							<div
								style={{
									width: 7.12,
									height: 4.31,
									left: 8.42,
									top: 26.46,
									position: "absolute",
									opacity: 0.18,
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 21.39,
									height: 22.73,
									left: 1.41,
									top: 1.08,
									position: "absolute",
									background: "#225585",
								}}
							></div>
							<div
								style={{
									width: 17.87,
									height: 24.29,
									left: 3.17,
									top: 4.35,
									position: "absolute",
									background: "#F5C1B0",
								}}
							></div>
							<div
								style={{
									width: 17.87,
									height: 24.29,
									left: 3.17,
									top: 4.35,
									position: "absolute",
									background: "#F5C1B0",
								}}
							></div>
							<div
								style={{
									width: 2.03,
									height: 6.8,
									left: 19.23,
									top: 6.73,
									position: "absolute",
									background: "#225585",
								}}
							></div>
							<div
								style={{
									width: 14.89,
									height: 10.92,
									left: 0.65,
									top: 0,
									position: "absolute",
									background: "#225585",
								}}
							></div>
							<div
								style={{
									width: 13.69,
									height: 13.54,
									left: 9.47,
									top: 0.69,
									position: "absolute",
									background: "#225585",
								}}
							></div>
							<div
								style={{
									width: 11.56,
									height: 5.72,
									left: 3.22,
									top: 6.03,
									position: "absolute",
									background: "#E5A8A3",
								}}
							></div>
							<div
								style={{
									width: 12.4,
									height: 7.99,
									left: 2.52,
									top: 2.98,
									position: "absolute",
									background: "#225585",
								}}
							></div>
							<div
								style={{
									width: 21.85,
									height: 7.95,
									left: 0.96,
									top: 31.57,
									position: "absolute",
									background: "#E8EDFE",
								}}
							></div>
							<div
								style={{
									width: 4.91,
									height: 1.92,
									left: 14.34,
									top: 6.18,
									position: "absolute",
									background: "#E5A8A3",
								}}
							></div>
							<div
								style={{
									width: 9.86,
									height: 7.23,
									left: 11.18,
									top: 1.99,
									position: "absolute",
									background: "#225585",
								}}
							></div>
						</div>
					</div>
					<div
						style={{
							width: 53.85,
							height: 52.29,
							left: 181.07,
							top: 39.02,
							position: "absolute",
						}}
					>
						<div
							style={{
								width: 53.85,
								height: 52.29,
								left: 0,
								top: 0,
								position: "absolute",
								opacity: 0.3,
								background: "white",
								borderRadius: 2,
							}}
						/>
						<div
							style={{
								width: 39.8,
								height: 39.8,
								left: 7.02,
								top: 6.24,
								position: "absolute",
							}}
						>
							<img
								style={{
									width: 12.49,
									height: 12.49,
									left: 0,
									top: 0,
									position: "absolute",
								}}
								src="https://via.placeholder.com/12x12"
								alt=""
							/>
							<div
								style={{
									width: 2.34,
									height: 2.34,
									left: 5.46,
									top: 5.46,
									position: "absolute",
									background: "black",
								}}
							/>
							<img
								style={{
									width: 12.49,
									height: 12.49,
									left: 27.32,
									top: -0,
									position: "absolute",
								}}
								src="https://via.placeholder.com/12x12"
								alt=""
							/>
							<div
								style={{
									width: 2.34,
									height: 2.34,
									left: 32,
									top: 5.46,
									position: "absolute",
									background: "black",
								}}
							/>
							<img
								style={{
									width: 12.49,
									height: 12.49,
									left: 0,
									top: 27.32,
									position: "absolute",
								}}
								src="https://via.placeholder.com/12x12"
								alt=""
							/>
							<div
								style={{
									width: 2.34,
									height: 2.34,
									left: 5.46,
									top: 32,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 5.46,
									height: 2.34,
									left: 19.51,
									top: -0,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 10.15,
									height: 7.8,
									left: 14.83,
									top: 2.34,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 2.34,
									height: 2.34,
									left: 14.83,
									top: 10.15,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 10.15,
									height: 5.46,
									left: 14.83,
									top: 11.71,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 5.46,
									height: 10.15,
									left: 0,
									top: 14.83,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 2.34,
									height: 2.34,
									left: 5.46,
									top: 14.83,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 12.49,
									height: 10.15,
									left: 7.02,
									top: 14.83,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 2.34,
									height: 5.46,
									left: 22.63,
									top: 19.51,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 12.49,
									height: 12.49,
									left: 14.83,
									top: 27.32,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 2.34,
									height: 2.34,
									left: 14.83,
									top: 32,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 2.34,
									height: 5.46,
									left: 24.98,
									top: 26.54,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 7.8,
									height: 7.8,
									left: 29.66,
									top: 32,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 5.46,
									height: 2.34,
									left: 34.34,
									top: 37.46,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 2.34,
									height: 2.34,
									left: 37.46,
									top: 27.32,
									position: "absolute",
									background: "black",
								}}
							/>
							<div
								style={{
									width: 5.46,
									height: 7.8,
									left: 27.32,
									top: 22.63,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 12.49,
									height: 5.46,
									left: 27.32,
									top: 14.83,
									position: "absolute",
									background: "black",
								}}
							></div>
							<div
								style={{
									width: 5.46,
									height: 2.34,
									left: 34.34,
									top: 22.63,
									position: "absolute",
									background: "black",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					width: 274,
					height: 186,
					left: 51,
					top: 369,
					position: "absolute",
					background: "rgba(249.69, 196.09, 58.26, 0.16)",
					borderRadius: 8,
					border: "2px #FAC43A solid",
				}}
			/>
			<div
				style={{
					paddingTop: 32,
					paddingBottom: 16,
					paddingLeft: 16,
					paddingRight: 16,
					left: 0,
					top: 100,
					position: "absolute",
					background: "white",
					borderTopLeftRadius: 24,
					borderTopRightRadius: 24,
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					gap: 10,
					display: "inline-flex",
				}}
			>
				<div
					style={{
						alignSelf: "stretch",
						height: 30,
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						gap: 12,
						display: "flex",
					}}
				>
					<div
						style={{
							alignSelf: "stretch",
							justifyContent: "space-between",
							alignItems: "flex-start",
							display: "inline-flex",
						}}
					>
						<div
							style={{
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 4,
								display: "flex",
							}}
						>
							<div
								style={{
									color: "#2A394E",
									fontSize: 12,
									fontFamily: "Barlow",
									fontWeight: "600",
									wordWrap: "break-word",
								}}
							>
								PAN Card
							</div>
						</div>
						<div
							style={{
								textAlign: "right",
								color: "#C2C6CC",
								fontSize: 12,
								fontFamily: "Barlow",
								fontWeight: "500",
								wordWrap: "break-word",
							}}
						>
							33% Completed
						</div>
					</div>
					<div style={{ width: 343, height: 4, position: "relative" }}>
						<div
							style={{
								width: 343,
								height: 4,
								left: 0,
								top: 0,
								position: "absolute",
								background: "#EEF0F4",
								borderRadius: 100,
							}}
						/>
						<div
							style={{
								width: 14,
								height: 4,
								left: 0,
								top: 0,
								position: "absolute",
								background: "#3F5BD9",
								borderRadius: 100,
							}}
						/>
					</div>
				</div>
			</div>
			<div
				style={{
					height: 94,
					left: 16,
					top: 186,
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
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						gap: 6,
						display: "flex",
					}}
				>
					<div
						style={{
							width: 343,
							color: "#2A394E",
							fontSize: 20,
							fontFamily: "Barlow",
							fontWeight: "500",
							wordWrap: "break-word",
						}}
					>
						Upload your PAN Card
					</div>
					<div
						style={{
							width: 343,
							color: "#6A7582",
							fontSize: 16,
							fontFamily: "Barlow",
							fontWeight: "400",
							lineHeight: 24,
							wordWrap: "break-word",
						}}
					>
						PAN Card is mandatory for investing in India.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pan;
