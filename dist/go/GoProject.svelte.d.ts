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
export type GoProjectProps = typeof __propDef.props;
export type GoProjectEvents = typeof __propDef.events;
export type GoProjectSlots = typeof __propDef.slots;
export default class GoProject extends SvelteComponentTyped<GoProjectProps, GoProjectEvents, GoProjectSlots> {
}
export {};
