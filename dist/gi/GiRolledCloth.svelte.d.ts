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
export type GiRolledClothProps = typeof __propDef.props;
export type GiRolledClothEvents = typeof __propDef.events;
export type GiRolledClothSlots = typeof __propDef.slots;
export default class GiRolledCloth extends SvelteComponentTyped<GiRolledClothProps, GiRolledClothEvents, GiRolledClothSlots> {
}
export {};
