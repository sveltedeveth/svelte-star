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
export type FaDizzyProps = typeof __propDef.props;
export type FaDizzyEvents = typeof __propDef.events;
export type FaDizzySlots = typeof __propDef.slots;
export default class FaDizzy extends SvelteComponentTyped<FaDizzyProps, FaDizzyEvents, FaDizzySlots> {
}
export {};
