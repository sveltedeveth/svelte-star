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
export type MdSpaProps = typeof __propDef.props;
export type MdSpaEvents = typeof __propDef.events;
export type MdSpaSlots = typeof __propDef.slots;
export default class MdSpa extends SvelteComponentTyped<MdSpaProps, MdSpaEvents, MdSpaSlots> {
}
export {};
