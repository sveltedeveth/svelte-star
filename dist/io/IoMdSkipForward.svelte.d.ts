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
export type IoMdSkipForwardProps = typeof __propDef.props;
export type IoMdSkipForwardEvents = typeof __propDef.events;
export type IoMdSkipForwardSlots = typeof __propDef.slots;
export default class IoMdSkipForward extends SvelteComponentTyped<IoMdSkipForwardProps, IoMdSkipForwardEvents, IoMdSkipForwardSlots> {
}
export {};
