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
export type GoTagProps = typeof __propDef.props;
export type GoTagEvents = typeof __propDef.events;
export type GoTagSlots = typeof __propDef.slots;
export default class GoTag extends SvelteComponentTyped<GoTagProps, GoTagEvents, GoTagSlots> {
}
export {};
