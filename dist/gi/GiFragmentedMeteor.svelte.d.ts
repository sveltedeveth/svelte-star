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
export type GiFragmentedMeteorProps = typeof __propDef.props;
export type GiFragmentedMeteorEvents = typeof __propDef.events;
export type GiFragmentedMeteorSlots = typeof __propDef.slots;
export default class GiFragmentedMeteor extends SvelteComponentTyped<GiFragmentedMeteorProps, GiFragmentedMeteorEvents, GiFragmentedMeteorSlots> {
}
export {};
