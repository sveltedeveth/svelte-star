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
export type MdPermIdentityProps = typeof __propDef.props;
export type MdPermIdentityEvents = typeof __propDef.events;
export type MdPermIdentitySlots = typeof __propDef.slots;
export default class MdPermIdentity extends SvelteComponentTyped<MdPermIdentityProps, MdPermIdentityEvents, MdPermIdentitySlots> {
}
export {};
