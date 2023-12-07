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
export type FaDirectionsProps = typeof __propDef.props;
export type FaDirectionsEvents = typeof __propDef.events;
export type FaDirectionsSlots = typeof __propDef.slots;
export default class FaDirections extends SvelteComponentTyped<FaDirectionsProps, FaDirectionsEvents, FaDirectionsSlots> {
}
export {};
