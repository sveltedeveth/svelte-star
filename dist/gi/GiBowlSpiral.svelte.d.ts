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
export type GiBowlSpiralProps = typeof __propDef.props;
export type GiBowlSpiralEvents = typeof __propDef.events;
export type GiBowlSpiralSlots = typeof __propDef.slots;
export default class GiBowlSpiral extends SvelteComponentTyped<GiBowlSpiralProps, GiBowlSpiralEvents, GiBowlSpiralSlots> {
}
export {};
