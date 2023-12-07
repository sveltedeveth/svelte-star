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
export type IoMdPulseProps = typeof __propDef.props;
export type IoMdPulseEvents = typeof __propDef.events;
export type IoMdPulseSlots = typeof __propDef.slots;
export default class IoMdPulse extends SvelteComponentTyped<IoMdPulseProps, IoMdPulseEvents, IoMdPulseSlots> {
}
export {};
