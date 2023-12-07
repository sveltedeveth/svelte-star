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
export type IoMdEaselProps = typeof __propDef.props;
export type IoMdEaselEvents = typeof __propDef.events;
export type IoMdEaselSlots = typeof __propDef.slots;
export default class IoMdEasel extends SvelteComponentTyped<IoMdEaselProps, IoMdEaselEvents, IoMdEaselSlots> {
}
export {};
