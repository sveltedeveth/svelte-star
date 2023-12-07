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
export type GoKeyProps = typeof __propDef.props;
export type GoKeyEvents = typeof __propDef.events;
export type GoKeySlots = typeof __propDef.slots;
export default class GoKey extends SvelteComponentTyped<GoKeyProps, GoKeyEvents, GoKeySlots> {
}
export {};
