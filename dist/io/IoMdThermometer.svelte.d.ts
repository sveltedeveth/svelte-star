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
export type IoMdThermometerProps = typeof __propDef.props;
export type IoMdThermometerEvents = typeof __propDef.events;
export type IoMdThermometerSlots = typeof __propDef.slots;
export default class IoMdThermometer extends SvelteComponentTyped<IoMdThermometerProps, IoMdThermometerEvents, IoMdThermometerSlots> {
}
export {};
