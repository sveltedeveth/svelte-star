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
export type FaPlaneProps = typeof __propDef.props;
export type FaPlaneEvents = typeof __propDef.events;
export type FaPlaneSlots = typeof __propDef.slots;
export default class FaPlane extends SvelteComponentTyped<FaPlaneProps, FaPlaneEvents, FaPlaneSlots> {
}
export {};
