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
export type DiWindowsProps = typeof __propDef.props;
export type DiWindowsEvents = typeof __propDef.events;
export type DiWindowsSlots = typeof __propDef.slots;
export default class DiWindows extends SvelteComponentTyped<DiWindowsProps, DiWindowsEvents, DiWindowsSlots> {
}
export {};
