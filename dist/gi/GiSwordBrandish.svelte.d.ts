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
export type GiSwordBrandishProps = typeof __propDef.props;
export type GiSwordBrandishEvents = typeof __propDef.events;
export type GiSwordBrandishSlots = typeof __propDef.slots;
export default class GiSwordBrandish extends SvelteComponentTyped<GiSwordBrandishProps, GiSwordBrandishEvents, GiSwordBrandishSlots> {
}
export {};
