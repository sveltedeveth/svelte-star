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
export type IoMdSpeedometerProps = typeof __propDef.props;
export type IoMdSpeedometerEvents = typeof __propDef.events;
export type IoMdSpeedometerSlots = typeof __propDef.slots;
export default class IoMdSpeedometer extends SvelteComponentTyped<IoMdSpeedometerProps, IoMdSpeedometerEvents, IoMdSpeedometerSlots> {
}
export {};
