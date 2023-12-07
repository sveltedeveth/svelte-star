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
export type FaPooProps = typeof __propDef.props;
export type FaPooEvents = typeof __propDef.events;
export type FaPooSlots = typeof __propDef.slots;
export default class FaPoo extends SvelteComponentTyped<FaPooProps, FaPooEvents, FaPooSlots> {
}
export {};
