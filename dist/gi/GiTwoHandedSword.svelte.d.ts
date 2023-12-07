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
export type GiTwoHandedSwordProps = typeof __propDef.props;
export type GiTwoHandedSwordEvents = typeof __propDef.events;
export type GiTwoHandedSwordSlots = typeof __propDef.slots;
export default class GiTwoHandedSword extends SvelteComponentTyped<GiTwoHandedSwordProps, GiTwoHandedSwordEvents, GiTwoHandedSwordSlots> {
}
export {};
