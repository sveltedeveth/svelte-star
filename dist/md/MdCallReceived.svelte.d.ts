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
export type MdCallReceivedProps = typeof __propDef.props;
export type MdCallReceivedEvents = typeof __propDef.events;
export type MdCallReceivedSlots = typeof __propDef.slots;
export default class MdCallReceived extends SvelteComponentTyped<MdCallReceivedProps, MdCallReceivedEvents, MdCallReceivedSlots> {
}
export {};
