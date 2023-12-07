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
export type FaHandScissorsProps = typeof __propDef.props;
export type FaHandScissorsEvents = typeof __propDef.events;
export type FaHandScissorsSlots = typeof __propDef.slots;
export default class FaHandScissors extends SvelteComponentTyped<FaHandScissorsProps, FaHandScissorsEvents, FaHandScissorsSlots> {
}
export {};
