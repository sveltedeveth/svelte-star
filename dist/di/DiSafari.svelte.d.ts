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
export type DiSafariProps = typeof __propDef.props;
export type DiSafariEvents = typeof __propDef.events;
export type DiSafariSlots = typeof __propDef.slots;
export default class DiSafari extends SvelteComponentTyped<DiSafariProps, DiSafariEvents, DiSafariSlots> {
}
export {};
