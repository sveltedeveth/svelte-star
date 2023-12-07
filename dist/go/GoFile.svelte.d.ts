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
export type GoFileProps = typeof __propDef.props;
export type GoFileEvents = typeof __propDef.events;
export type GoFileSlots = typeof __propDef.slots;
export default class GoFile extends SvelteComponentTyped<GoFileProps, GoFileEvents, GoFileSlots> {
}
export {};
