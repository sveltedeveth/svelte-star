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
export type DiSizzlejsProps = typeof __propDef.props;
export type DiSizzlejsEvents = typeof __propDef.events;
export type DiSizzlejsSlots = typeof __propDef.slots;
export default class DiSizzlejs extends SvelteComponentTyped<DiSizzlejsProps, DiSizzlejsEvents, DiSizzlejsSlots> {
}
export {};
