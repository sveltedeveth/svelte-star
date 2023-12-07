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
export type FaWindowsProps = typeof __propDef.props;
export type FaWindowsEvents = typeof __propDef.events;
export type FaWindowsSlots = typeof __propDef.slots;
export default class FaWindows extends SvelteComponentTyped<FaWindowsProps, FaWindowsEvents, FaWindowsSlots> {
}
export {};
