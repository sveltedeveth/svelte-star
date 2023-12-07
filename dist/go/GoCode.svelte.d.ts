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
export type GoCodeProps = typeof __propDef.props;
export type GoCodeEvents = typeof __propDef.events;
export type GoCodeSlots = typeof __propDef.slots;
export default class GoCode extends SvelteComponentTyped<GoCodeProps, GoCodeEvents, GoCodeSlots> {
}
export {};
