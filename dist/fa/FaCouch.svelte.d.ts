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
export type FaCouchProps = typeof __propDef.props;
export type FaCouchEvents = typeof __propDef.events;
export type FaCouchSlots = typeof __propDef.slots;
export default class FaCouch extends SvelteComponentTyped<FaCouchProps, FaCouchEvents, FaCouchSlots> {
}
export {};
