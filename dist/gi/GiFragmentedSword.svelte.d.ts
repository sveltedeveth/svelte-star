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
export type GiFragmentedSwordProps = typeof __propDef.props;
export type GiFragmentedSwordEvents = typeof __propDef.events;
export type GiFragmentedSwordSlots = typeof __propDef.slots;
export default class GiFragmentedSword extends SvelteComponentTyped<GiFragmentedSwordProps, GiFragmentedSwordEvents, GiFragmentedSwordSlots> {
}
export {};
