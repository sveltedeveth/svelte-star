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
export type GoFileCodeProps = typeof __propDef.props;
export type GoFileCodeEvents = typeof __propDef.events;
export type GoFileCodeSlots = typeof __propDef.slots;
export default class GoFileCode extends SvelteComponentTyped<GoFileCodeProps, GoFileCodeEvents, GoFileCodeSlots> {
}
export {};
