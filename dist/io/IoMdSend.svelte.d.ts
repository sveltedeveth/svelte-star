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
export type IoMdSendProps = typeof __propDef.props;
export type IoMdSendEvents = typeof __propDef.events;
export type IoMdSendSlots = typeof __propDef.slots;
export default class IoMdSend extends SvelteComponentTyped<IoMdSendProps, IoMdSendEvents, IoMdSendSlots> {
}
export {};
