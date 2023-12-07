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
export type FaBabyProps = typeof __propDef.props;
export type FaBabyEvents = typeof __propDef.events;
export type FaBabySlots = typeof __propDef.slots;
export default class FaBaby extends SvelteComponentTyped<FaBabyProps, FaBabyEvents, FaBabySlots> {
}
export {};
