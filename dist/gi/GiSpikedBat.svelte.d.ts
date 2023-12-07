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
export type GiSpikedBatProps = typeof __propDef.props;
export type GiSpikedBatEvents = typeof __propDef.events;
export type GiSpikedBatSlots = typeof __propDef.slots;
export default class GiSpikedBat extends SvelteComponentTyped<GiSpikedBatProps, GiSpikedBatEvents, GiSpikedBatSlots> {
}
export {};
