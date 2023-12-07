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
export type MdDirectionsTransitProps = typeof __propDef.props;
export type MdDirectionsTransitEvents = typeof __propDef.events;
export type MdDirectionsTransitSlots = typeof __propDef.slots;
export default class MdDirectionsTransit extends SvelteComponentTyped<MdDirectionsTransitProps, MdDirectionsTransitEvents, MdDirectionsTransitSlots> {
}
export {};
