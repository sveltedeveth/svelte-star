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
export type FaBoxesProps = typeof __propDef.props;
export type FaBoxesEvents = typeof __propDef.events;
export type FaBoxesSlots = typeof __propDef.slots;
export default class FaBoxes extends SvelteComponentTyped<FaBoxesProps, FaBoxesEvents, FaBoxesSlots> {
}
export {};
