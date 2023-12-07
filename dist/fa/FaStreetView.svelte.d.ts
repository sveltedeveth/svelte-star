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
export type FaStreetViewProps = typeof __propDef.props;
export type FaStreetViewEvents = typeof __propDef.events;
export type FaStreetViewSlots = typeof __propDef.slots;
export default class FaStreetView extends SvelteComponentTyped<FaStreetViewProps, FaStreetViewEvents, FaStreetViewSlots> {
}
export {};
