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
export type IoMdColorFillProps = typeof __propDef.props;
export type IoMdColorFillEvents = typeof __propDef.events;
export type IoMdColorFillSlots = typeof __propDef.slots;
export default class IoMdColorFill extends SvelteComponentTyped<IoMdColorFillProps, IoMdColorFillEvents, IoMdColorFillSlots> {
}
export {};
