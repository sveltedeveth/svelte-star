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
export type IoMdFlashProps = typeof __propDef.props;
export type IoMdFlashEvents = typeof __propDef.events;
export type IoMdFlashSlots = typeof __propDef.slots;
export default class IoMdFlash extends SvelteComponentTyped<IoMdFlashProps, IoMdFlashEvents, IoMdFlashSlots> {
}
export {};
