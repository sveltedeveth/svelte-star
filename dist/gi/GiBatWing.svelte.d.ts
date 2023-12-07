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
export type GiBatWingProps = typeof __propDef.props;
export type GiBatWingEvents = typeof __propDef.events;
export type GiBatWingSlots = typeof __propDef.slots;
export default class GiBatWing extends SvelteComponentTyped<GiBatWingProps, GiBatWingEvents, GiBatWingSlots> {
}
export {};
