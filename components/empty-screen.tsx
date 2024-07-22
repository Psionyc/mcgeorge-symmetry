import { UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/external-link";
import { IconArrowRight } from "@/components/ui/icons";

export function EmptyScreen() {
	return (
		<div className="mx-auto max-w-2xl px-4">
			<div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
				<h1 className="text-lg font-semibold">Welcome to Data2Analysis!</h1>
				<p className="leading-normal text-muted-foreground">
					Data2Analysis revolutionizes education with cutting-edge GPT
					technology, providing students with the tools to analyze their data
					and enhance their learning process. Teachers, students, and
					educational institutions benefit from our tailored solutions.
					Experience the future of education with Data2Analysis, ensuring a
					standard and progressive technological future for all students.
				</p>
			</div>
		</div>
	);
}
