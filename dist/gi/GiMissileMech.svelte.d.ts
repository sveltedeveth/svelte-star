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
export type GiMissileMechProps = typeof __propDef.props;
export type GiMissileMechEvents = typeof __propDef.events;
export type GiMissileMechSlots = typeof __propDef.slots;
export default class GiMissileMech extends SvelteComponentTyped<GiMissileMechProps, GiMissileMechEvents, GiMissileMechSlots> {
}
export {};
