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
export type MdDirectionsWalkProps = typeof __propDef.props;
export type MdDirectionsWalkEvents = typeof __propDef.events;
export type MdDirectionsWalkSlots = typeof __propDef.slots;
export default class MdDirectionsWalk extends SvelteComponentTyped<MdDirectionsWalkProps, MdDirectionsWalkEvents, MdDirectionsWalkSlots> {
}
export {};
