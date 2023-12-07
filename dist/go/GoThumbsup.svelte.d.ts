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
export type GoThumbsupProps = typeof __propDef.props;
export type GoThumbsupEvents = typeof __propDef.events;
export type GoThumbsupSlots = typeof __propDef.slots;
export default class GoThumbsup extends SvelteComponentTyped<GoThumbsupProps, GoThumbsupEvents, GoThumbsupSlots> {
}
export {};
