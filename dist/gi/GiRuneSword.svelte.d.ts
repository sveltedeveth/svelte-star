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
export type GiRuneSwordProps = typeof __propDef.props;
export type GiRuneSwordEvents = typeof __propDef.events;
export type GiRuneSwordSlots = typeof __propDef.slots;
export default class GiRuneSword extends SvelteComponentTyped<GiRuneSwordProps, GiRuneSwordEvents, GiRuneSwordSlots> {
}
export {};
