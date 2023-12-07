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
export type FaGrinProps = typeof __propDef.props;
export type FaGrinEvents = typeof __propDef.events;
export type FaGrinSlots = typeof __propDef.slots;
export default class FaGrin extends SvelteComponentTyped<FaGrinProps, FaGrinEvents, FaGrinSlots> {
}
export {};
