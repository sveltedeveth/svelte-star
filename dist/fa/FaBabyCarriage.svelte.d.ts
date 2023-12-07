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
export type FaBabyCarriageProps = typeof __propDef.props;
export type FaBabyCarriageEvents = typeof __propDef.events;
export type FaBabyCarriageSlots = typeof __propDef.slots;
export default class FaBabyCarriage extends SvelteComponentTyped<FaBabyCarriageProps, FaBabyCarriageEvents, FaBabyCarriageSlots> {
}
export {};
