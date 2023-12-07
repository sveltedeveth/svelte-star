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
export type FaHikingProps = typeof __propDef.props;
export type FaHikingEvents = typeof __propDef.events;
export type FaHikingSlots = typeof __propDef.slots;
export default class FaHiking extends SvelteComponentTyped<FaHikingProps, FaHikingEvents, FaHikingSlots> {
}
export {};
