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
export type GiFlashGrenadeProps = typeof __propDef.props;
export type GiFlashGrenadeEvents = typeof __propDef.events;
export type GiFlashGrenadeSlots = typeof __propDef.slots;
export default class GiFlashGrenade extends SvelteComponentTyped<GiFlashGrenadeProps, GiFlashGrenadeEvents, GiFlashGrenadeSlots> {
}
export {};
