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
export type MdPhonelinkProps = typeof __propDef.props;
export type MdPhonelinkEvents = typeof __propDef.events;
export type MdPhonelinkSlots = typeof __propDef.slots;
export default class MdPhonelink extends SvelteComponentTyped<MdPhonelinkProps, MdPhonelinkEvents, MdPhonelinkSlots> {
}
export {};
