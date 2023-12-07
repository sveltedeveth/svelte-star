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
export type GoUnmuteProps = typeof __propDef.props;
export type GoUnmuteEvents = typeof __propDef.events;
export type GoUnmuteSlots = typeof __propDef.slots;
export default class GoUnmute extends SvelteComponentTyped<GoUnmuteProps, GoUnmuteEvents, GoUnmuteSlots> {
}
export {};
