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
export type IoMdAirplaneProps = typeof __propDef.props;
export type IoMdAirplaneEvents = typeof __propDef.events;
export type IoMdAirplaneSlots = typeof __propDef.slots;
export default class IoMdAirplane extends SvelteComponentTyped<IoMdAirplaneProps, IoMdAirplaneEvents, IoMdAirplaneSlots> {
}
export {};
