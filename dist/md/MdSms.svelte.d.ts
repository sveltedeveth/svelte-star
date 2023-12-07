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
export type MdSmsProps = typeof __propDef.props;
export type MdSmsEvents = typeof __propDef.events;
export type MdSmsSlots = typeof __propDef.slots;
export default class MdSms extends SvelteComponentTyped<MdSmsProps, MdSmsEvents, MdSmsSlots> {
}
export {};
