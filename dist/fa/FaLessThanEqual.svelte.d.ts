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
export type FaLessThanEqualProps = typeof __propDef.props;
export type FaLessThanEqualEvents = typeof __propDef.events;
export type FaLessThanEqualSlots = typeof __propDef.slots;
export default class FaLessThanEqual extends SvelteComponentTyped<FaLessThanEqualProps, FaLessThanEqualEvents, FaLessThanEqualSlots> {
}
export {};
