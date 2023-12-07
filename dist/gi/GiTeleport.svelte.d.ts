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
export type GiTeleportProps = typeof __propDef.props;
export type GiTeleportEvents = typeof __propDef.events;
export type GiTeleportSlots = typeof __propDef.slots;
export default class GiTeleport extends SvelteComponentTyped<GiTeleportProps, GiTeleportEvents, GiTeleportSlots> {
}
export {};
