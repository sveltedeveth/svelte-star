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
export type GiAncientSwordProps = typeof __propDef.props;
export type GiAncientSwordEvents = typeof __propDef.events;
export type GiAncientSwordSlots = typeof __propDef.slots;
export default class GiAncientSword extends SvelteComponentTyped<GiAncientSwordProps, GiAncientSwordEvents, GiAncientSwordSlots> {
}
export {};
