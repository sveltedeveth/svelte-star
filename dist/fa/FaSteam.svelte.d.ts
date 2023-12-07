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
export type FaSteamProps = typeof __propDef.props;
export type FaSteamEvents = typeof __propDef.events;
export type FaSteamSlots = typeof __propDef.slots;
export default class FaSteam extends SvelteComponentTyped<FaSteamProps, FaSteamEvents, FaSteamSlots> {
}
export {};
