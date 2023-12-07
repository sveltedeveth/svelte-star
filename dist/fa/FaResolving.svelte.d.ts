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
export type FaResolvingProps = typeof __propDef.props;
export type FaResolvingEvents = typeof __propDef.events;
export type FaResolvingSlots = typeof __propDef.slots;
export default class FaResolving extends SvelteComponentTyped<FaResolvingProps, FaResolvingEvents, FaResolvingSlots> {
}
export {};
