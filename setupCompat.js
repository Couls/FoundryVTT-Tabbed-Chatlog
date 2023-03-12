export function dice3dEnabled() {
	//@ts-ignore
	// return installedModules.get("dice-so-nice") && game.dice3d?.isEnabled();
	return game.modules.get("dice-so-nice") && (game.dice3d?.config?.enabled || game.dice3d.isEnabled());
}