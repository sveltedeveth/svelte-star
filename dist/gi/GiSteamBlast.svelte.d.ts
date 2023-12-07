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
export type GiSteamBlastProps = typeof __propDef.props;
export type GiSteamBlastEvents = typeof __propDef.events;
export type GiSteamBlastSlots = typeof __propDef.slots;
export default class GiSteamBlast extends SvelteComponentTyped<GiSteamBlastProps, GiSteamBlastEvents, GiSteamBlastSlots> {
}
export {};
