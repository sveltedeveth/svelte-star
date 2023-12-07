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
export type FaGreaterThanEqualProps = typeof __propDef.props;
export type FaGreaterThanEqualEvents = typeof __propDef.events;
export type FaGreaterThanEqualSlots = typeof __propDef.slots;
export default class FaGreaterThanEqual extends SvelteComponentTyped<FaGreaterThanEqualProps, FaGreaterThanEqualEvents, FaGreaterThanEqualSlots> {
}
export {};
