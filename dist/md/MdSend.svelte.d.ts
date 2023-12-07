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
export type MdSendProps = typeof __propDef.props;
export type MdSendEvents = typeof __propDef.events;
export type MdSendSlots = typeof __propDef.slots;
export default class MdSend extends SvelteComponentTyped<MdSendProps, MdSendEvents, MdSendSlots> {
}
export {};
