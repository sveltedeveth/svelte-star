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
export type GiLeeEnfieldProps = typeof __propDef.props;
export type GiLeeEnfieldEvents = typeof __propDef.events;
export type GiLeeEnfieldSlots = typeof __propDef.slots;
export default class GiLeeEnfield extends SvelteComponentTyped<GiLeeEnfieldProps, GiLeeEnfieldEvents, GiLeeEnfieldSlots> {
}
export {};
