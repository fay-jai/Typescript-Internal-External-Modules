namespace InternalModule {
	export function add(...args: number[]): number {
		return args.reduce((acc, cur) => acc + cur, 0);
	}
}
