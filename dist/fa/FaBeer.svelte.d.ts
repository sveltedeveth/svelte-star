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
export type FaBeerProps = typeof __propDef.props;
export type FaBeerEvents = typeof __propDef.events;
export type FaBeerSlots = typeof __propDef.slots;
export default class FaBeer extends SvelteComponentTyped<FaBeerProps, FaBeerEvents, FaBeerSlots> {
}
export {};
