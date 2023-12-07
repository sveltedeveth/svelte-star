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
export type GiDragonSpiralProps = typeof __propDef.props;
export type GiDragonSpiralEvents = typeof __propDef.events;
export type GiDragonSpiralSlots = typeof __propDef.slots;
export default class GiDragonSpiral extends SvelteComponentTyped<GiDragonSpiralProps, GiDragonSpiralEvents, GiDragonSpiralSlots> {
}
export {};
