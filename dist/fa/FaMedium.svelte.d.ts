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
export type FaMediumProps = typeof __propDef.props;
export type FaMediumEvents = typeof __propDef.events;
export type FaMediumSlots = typeof __propDef.slots;
export default class FaMedium extends SvelteComponentTyped<FaMediumProps, FaMediumEvents, FaMediumSlots> {
}
export {};
