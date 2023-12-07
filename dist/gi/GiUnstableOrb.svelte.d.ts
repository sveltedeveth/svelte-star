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
export type GiUnstableOrbProps = typeof __propDef.props;
export type GiUnstableOrbEvents = typeof __propDef.events;
export type GiUnstableOrbSlots = typeof __propDef.slots;
export default class GiUnstableOrb extends SvelteComponentTyped<GiUnstableOrbProps, GiUnstableOrbEvents, GiUnstableOrbSlots> {
}
export {};
