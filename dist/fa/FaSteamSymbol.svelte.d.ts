import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaSteamSymbolProps = typeof __propDef.props;
export type FaSteamSymbolEvents = typeof __propDef.events;
export type FaSteamSymbolSlots = typeof __propDef.slots;
export default class FaSteamSymbol extends SvelteComponentTyped<FaSteamSymbolProps, FaSteamSymbolEvents, FaSteamSymbolSlots> {
}
export {};
