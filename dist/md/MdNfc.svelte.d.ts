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
export type MdNfcProps = typeof __propDef.props;
export type MdNfcEvents = typeof __propDef.events;
export type MdNfcSlots = typeof __propDef.slots;
export default class MdNfc extends SvelteComponentTyped<MdNfcProps, MdNfcEvents, MdNfcSlots> {
}
export {};
