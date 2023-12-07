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
export type MdSmsFailedProps = typeof __propDef.props;
export type MdSmsFailedEvents = typeof __propDef.events;
export type MdSmsFailedSlots = typeof __propDef.slots;
export default class MdSmsFailed extends SvelteComponentTyped<MdSmsFailedProps, MdSmsFailedEvents, MdSmsFailedSlots> {
}
export {};
