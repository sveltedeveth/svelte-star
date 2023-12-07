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
export type DiCloud9Props = typeof __propDef.props;
export type DiCloud9Events = typeof __propDef.events;
export type DiCloud9Slots = typeof __propDef.slots;
export default class DiCloud9 extends SvelteComponentTyped<DiCloud9Props, DiCloud9Events, DiCloud9Slots> {
}
export {};
