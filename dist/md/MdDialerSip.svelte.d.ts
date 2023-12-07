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
export type MdDialerSipProps = typeof __propDef.props;
export type MdDialerSipEvents = typeof __propDef.events;
export type MdDialerSipSlots = typeof __propDef.slots;
export default class MdDialerSip extends SvelteComponentTyped<MdDialerSipProps, MdDialerSipEvents, MdDialerSipSlots> {
}
export {};
