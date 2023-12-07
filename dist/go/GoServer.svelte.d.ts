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
export type GoServerProps = typeof __propDef.props;
export type GoServerEvents = typeof __propDef.events;
export type GoServerSlots = typeof __propDef.slots;
export default class GoServer extends SvelteComponentTyped<GoServerProps, GoServerEvents, GoServerSlots> {
}
export {};
