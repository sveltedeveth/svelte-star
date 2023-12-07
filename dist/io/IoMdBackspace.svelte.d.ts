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
export type IoMdBackspaceProps = typeof __propDef.props;
export type IoMdBackspaceEvents = typeof __propDef.events;
export type IoMdBackspaceSlots = typeof __propDef.slots;
export default class IoMdBackspace extends SvelteComponentTyped<IoMdBackspaceProps, IoMdBackspaceEvents, IoMdBackspaceSlots> {
}
export {};
