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
export type DiSenchatouchProps = typeof __propDef.props;
export type DiSenchatouchEvents = typeof __propDef.events;
export type DiSenchatouchSlots = typeof __propDef.slots;
export default class DiSenchatouch extends SvelteComponentTyped<DiSenchatouchProps, DiSenchatouchEvents, DiSenchatouchSlots> {
}
export {};
