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
export type GoPlugProps = typeof __propDef.props;
export type GoPlugEvents = typeof __propDef.events;
export type GoPlugSlots = typeof __propDef.slots;
export default class GoPlug extends SvelteComponentTyped<GoPlugProps, GoPlugEvents, GoPlugSlots> {
}
export {};
