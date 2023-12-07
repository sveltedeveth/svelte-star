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
export type MdDirectionsProps = typeof __propDef.props;
export type MdDirectionsEvents = typeof __propDef.events;
export type MdDirectionsSlots = typeof __propDef.slots;
export default class MdDirections extends SvelteComponentTyped<MdDirectionsProps, MdDirectionsEvents, MdDirectionsSlots> {
}
export {};
