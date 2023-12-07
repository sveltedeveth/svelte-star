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
export type FaWrenchProps = typeof __propDef.props;
export type FaWrenchEvents = typeof __propDef.events;
export type FaWrenchSlots = typeof __propDef.slots;
export default class FaWrench extends SvelteComponentTyped<FaWrenchProps, FaWrenchEvents, FaWrenchSlots> {
}
export {};
