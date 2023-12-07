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
export type FaWindowRestoreProps = typeof __propDef.props;
export type FaWindowRestoreEvents = typeof __propDef.events;
export type FaWindowRestoreSlots = typeof __propDef.slots;
export default class FaWindowRestore extends SvelteComponentTyped<FaWindowRestoreProps, FaWindowRestoreEvents, FaWindowRestoreSlots> {
}
export {};
