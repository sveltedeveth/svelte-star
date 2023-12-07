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
export type MdSecurityProps = typeof __propDef.props;
export type MdSecurityEvents = typeof __propDef.events;
export type MdSecuritySlots = typeof __propDef.slots;
export default class MdSecurity extends SvelteComponentTyped<MdSecurityProps, MdSecurityEvents, MdSecuritySlots> {
}
export {};
