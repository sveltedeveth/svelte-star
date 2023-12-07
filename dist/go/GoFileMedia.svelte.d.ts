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
export type GoFileMediaProps = typeof __propDef.props;
export type GoFileMediaEvents = typeof __propDef.events;
export type GoFileMediaSlots = typeof __propDef.slots;
export default class GoFileMedia extends SvelteComponentTyped<GoFileMediaProps, GoFileMediaEvents, GoFileMediaSlots> {
}
export {};
