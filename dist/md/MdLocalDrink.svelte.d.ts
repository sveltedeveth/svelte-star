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
export type MdLocalDrinkProps = typeof __propDef.props;
export type MdLocalDrinkEvents = typeof __propDef.events;
export type MdLocalDrinkSlots = typeof __propDef.slots;
export default class MdLocalDrink extends SvelteComponentTyped<MdLocalDrinkProps, MdLocalDrinkEvents, MdLocalDrinkSlots> {
}
export {};
