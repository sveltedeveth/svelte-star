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
export type GiSteamProps = typeof __propDef.props;
export type GiSteamEvents = typeof __propDef.events;
export type GiSteamSlots = typeof __propDef.slots;
export default class GiSteam extends SvelteComponentTyped<GiSteamProps, GiSteamEvents, GiSteamSlots> {
}
export {};
