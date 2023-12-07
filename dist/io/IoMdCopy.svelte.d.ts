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
export type IoMdCopyProps = typeof __propDef.props;
export type IoMdCopyEvents = typeof __propDef.events;
export type IoMdCopySlots = typeof __propDef.slots;
export default class IoMdCopy extends SvelteComponentTyped<IoMdCopyProps, IoMdCopyEvents, IoMdCopySlots> {
}
export {};
