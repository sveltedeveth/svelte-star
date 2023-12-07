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
export type FaRegGrinProps = typeof __propDef.props;
export type FaRegGrinEvents = typeof __propDef.events;
export type FaRegGrinSlots = typeof __propDef.slots;
export default class FaRegGrin extends SvelteComponentTyped<FaRegGrinProps, FaRegGrinEvents, FaRegGrinSlots> {
}
export {};
