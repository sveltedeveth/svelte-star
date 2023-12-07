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
export type MdVpnKeyProps = typeof __propDef.props;
export type MdVpnKeyEvents = typeof __propDef.events;
export type MdVpnKeySlots = typeof __propDef.slots;
export default class MdVpnKey extends SvelteComponentTyped<MdVpnKeyProps, MdVpnKeyEvents, MdVpnKeySlots> {
}
export {};
