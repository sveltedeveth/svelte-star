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
export type FaBombProps = typeof __propDef.props;
export type FaBombEvents = typeof __propDef.events;
export type FaBombSlots = typeof __propDef.slots;
export default class FaBomb extends SvelteComponentTyped<FaBombProps, FaBombEvents, FaBombSlots> {
}
export {};
