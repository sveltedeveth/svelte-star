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
export type DiZendProps = typeof __propDef.props;
export type DiZendEvents = typeof __propDef.events;
export type DiZendSlots = typeof __propDef.slots;
export default class DiZend extends SvelteComponentTyped<DiZendProps, DiZendEvents, DiZendSlots> {
}
export {};
