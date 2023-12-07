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
export type GoFoldUpProps = typeof __propDef.props;
export type GoFoldUpEvents = typeof __propDef.events;
export type GoFoldUpSlots = typeof __propDef.slots;
export default class GoFoldUp extends SvelteComponentTyped<GoFoldUpProps, GoFoldUpEvents, GoFoldUpSlots> {
}
export {};
