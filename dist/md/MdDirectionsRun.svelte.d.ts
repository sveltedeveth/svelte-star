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
export type MdDirectionsRunProps = typeof __propDef.props;
export type MdDirectionsRunEvents = typeof __propDef.events;
export type MdDirectionsRunSlots = typeof __propDef.slots;
export default class MdDirectionsRun extends SvelteComponentTyped<MdDirectionsRunProps, MdDirectionsRunEvents, MdDirectionsRunSlots> {
}
export {};
