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
export type FaBikingProps = typeof __propDef.props;
export type FaBikingEvents = typeof __propDef.events;
export type FaBikingSlots = typeof __propDef.slots;
export default class FaBiking extends SvelteComponentTyped<FaBikingProps, FaBikingEvents, FaBikingSlots> {
}
export {};
