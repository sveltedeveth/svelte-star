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
export type DiAngularSimpleProps = typeof __propDef.props;
export type DiAngularSimpleEvents = typeof __propDef.events;
export type DiAngularSimpleSlots = typeof __propDef.slots;
export default class DiAngularSimple extends SvelteComponentTyped<DiAngularSimpleProps, DiAngularSimpleEvents, DiAngularSimpleSlots> {
}
export {};
