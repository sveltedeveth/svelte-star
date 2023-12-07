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
export type FaShapesProps = typeof __propDef.props;
export type FaShapesEvents = typeof __propDef.events;
export type FaShapesSlots = typeof __propDef.slots;
export default class FaShapes extends SvelteComponentTyped<FaShapesProps, FaShapesEvents, FaShapesSlots> {
}
export {};
