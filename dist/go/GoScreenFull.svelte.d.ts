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
export type GoScreenFullProps = typeof __propDef.props;
export type GoScreenFullEvents = typeof __propDef.events;
export type GoScreenFullSlots = typeof __propDef.slots;
export default class GoScreenFull extends SvelteComponentTyped<GoScreenFullProps, GoScreenFullEvents, GoScreenFullSlots> {
}
export {};
