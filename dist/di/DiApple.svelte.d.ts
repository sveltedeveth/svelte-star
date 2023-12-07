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
export type DiAppleProps = typeof __propDef.props;
export type DiAppleEvents = typeof __propDef.events;
export type DiAppleSlots = typeof __propDef.slots;
export default class DiApple extends SvelteComponentTyped<DiAppleProps, DiAppleEvents, DiAppleSlots> {
}
export {};
