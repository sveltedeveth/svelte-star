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
export type DiSassProps = typeof __propDef.props;
export type DiSassEvents = typeof __propDef.events;
export type DiSassSlots = typeof __propDef.slots;
export default class DiSass extends SvelteComponentTyped<DiSassProps, DiSassEvents, DiSassSlots> {
}
export {};
