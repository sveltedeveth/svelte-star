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
export type FaAppleProps = typeof __propDef.props;
export type FaAppleEvents = typeof __propDef.events;
export type FaAppleSlots = typeof __propDef.slots;
export default class FaApple extends SvelteComponentTyped<FaAppleProps, FaAppleEvents, FaAppleSlots> {
}
export {};
