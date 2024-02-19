import Image from "next/image";
import Logo from "../assets/log.svg";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
import { DemonButton } from "./DemonButton";

export function Header() {
	return (
		<header className="flex items-center w-full h-40 ">
			<div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto gap-4">
				<div className="flex flex-1 items-center justify-between ">
					<div className="flex items-center gap-14">
						<Image src={Logo} alt="Logo" width={70} />
						<ul className="flex items-center gap-14">
							<li>
								<ItemMenu name="Home" />
							</li>
							<li>
								<ItemMenu name="Soluções" />
							</li>
							<li>
								<ItemMenu name="Sobre" />
							</li>
							<li>
								<ItemMenu name="Recursos" />
							</li>
                            <li>
								<ItemMenu name="Blog" />
							</li>
						</ul>
					</div>
                    <Search  />
				</div>
                <DemonButton />
			</div>
		</header>
	);
}
