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
export type MdPhonelinkSetupProps = typeof __propDef.props;
export type MdPhonelinkSetupEvents = typeof __propDef.events;
export type MdPhonelinkSetupSlots = typeof __propDef.slots;
export default class MdPhonelinkSetup extends SvelteComponentTyped<MdPhonelinkSetupProps, MdPhonelinkSetupEvents, MdPhonelinkSetupSlots> {
}
export {};
