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
export type IoMdWaterProps = typeof __propDef.props;
export type IoMdWaterEvents = typeof __propDef.events;
export type IoMdWaterSlots = typeof __propDef.slots;
export default class IoMdWater extends SvelteComponentTyped<IoMdWaterProps, IoMdWaterEvents, IoMdWaterSlots> {
}
export {};
