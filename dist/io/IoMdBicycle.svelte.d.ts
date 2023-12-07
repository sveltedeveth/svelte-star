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
export type IoMdBicycleProps = typeof __propDef.props;
export type IoMdBicycleEvents = typeof __propDef.events;
export type IoMdBicycleSlots = typeof __propDef.slots;
export default class IoMdBicycle extends SvelteComponentTyped<IoMdBicycleProps, IoMdBicycleEvents, IoMdBicycleSlots> {
}
export {};
