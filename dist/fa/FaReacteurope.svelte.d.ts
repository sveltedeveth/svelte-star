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
export type FaReacteuropeProps = typeof __propDef.props;
export type FaReacteuropeEvents = typeof __propDef.events;
export type FaReacteuropeSlots = typeof __propDef.slots;
export default class FaReacteurope extends SvelteComponentTyped<FaReacteuropeProps, FaReacteuropeEvents, FaReacteuropeSlots> {
}
export {};
