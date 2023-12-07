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
export type IoMdOptionsProps = typeof __propDef.props;
export type IoMdOptionsEvents = typeof __propDef.events;
export type IoMdOptionsSlots = typeof __propDef.slots;
export default class IoMdOptions extends SvelteComponentTyped<IoMdOptionsProps, IoMdOptionsEvents, IoMdOptionsSlots> {
}
export {};
