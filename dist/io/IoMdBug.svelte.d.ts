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
export type IoMdBugProps = typeof __propDef.props;
export type IoMdBugEvents = typeof __propDef.events;
export type IoMdBugSlots = typeof __propDef.slots;
export default class IoMdBug extends SvelteComponentTyped<IoMdBugProps, IoMdBugEvents, IoMdBugSlots> {
}
export {};
