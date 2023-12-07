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
export type GiShatteredSwordProps = typeof __propDef.props;
export type GiShatteredSwordEvents = typeof __propDef.events;
export type GiShatteredSwordSlots = typeof __propDef.slots;
export default class GiShatteredSword extends SvelteComponentTyped<GiShatteredSwordProps, GiShatteredSwordEvents, GiShatteredSwordSlots> {
}
export {};
