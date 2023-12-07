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
export type GiSteamLocomotiveProps = typeof __propDef.props;
export type GiSteamLocomotiveEvents = typeof __propDef.events;
export type GiSteamLocomotiveSlots = typeof __propDef.slots;
export default class GiSteamLocomotive extends SvelteComponentTyped<GiSteamLocomotiveProps, GiSteamLocomotiveEvents, GiSteamLocomotiveSlots> {
}
export {};
