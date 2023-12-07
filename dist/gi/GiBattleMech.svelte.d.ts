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
export type GiBattleMechProps = typeof __propDef.props;
export type GiBattleMechEvents = typeof __propDef.events;
export type GiBattleMechSlots = typeof __propDef.slots;
export default class GiBattleMech extends SvelteComponentTyped<GiBattleMechProps, GiBattleMechEvents, GiBattleMechSlots> {
}
export {};
