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
export type GoPlayProps = typeof __propDef.props;
export type GoPlayEvents = typeof __propDef.events;
export type GoPlaySlots = typeof __propDef.slots;
export default class GoPlay extends SvelteComponentTyped<GoPlayProps, GoPlayEvents, GoPlaySlots> {
}
export {};
