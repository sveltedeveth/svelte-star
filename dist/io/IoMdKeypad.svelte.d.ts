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
export type IoMdKeypadProps = typeof __propDef.props;
export type IoMdKeypadEvents = typeof __propDef.events;
export type IoMdKeypadSlots = typeof __propDef.slots;
export default class IoMdKeypad extends SvelteComponentTyped<IoMdKeypadProps, IoMdKeypadEvents, IoMdKeypadSlots> {
}
export {};
