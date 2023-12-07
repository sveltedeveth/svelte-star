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
export type GoFoldDownProps = typeof __propDef.props;
export type GoFoldDownEvents = typeof __propDef.events;
export type GoFoldDownSlots = typeof __propDef.slots;
export default class GoFoldDown extends SvelteComponentTyped<GoFoldDownProps, GoFoldDownEvents, GoFoldDownSlots> {
}
export {};
