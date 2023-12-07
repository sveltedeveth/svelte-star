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
export type IoMdFastforwardProps = typeof __propDef.props;
export type IoMdFastforwardEvents = typeof __propDef.events;
export type IoMdFastforwardSlots = typeof __propDef.slots;
export default class IoMdFastforward extends SvelteComponentTyped<IoMdFastforwardProps, IoMdFastforwardEvents, IoMdFastforwardSlots> {
}
export {};
