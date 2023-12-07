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
export type GoFoldProps = typeof __propDef.props;
export type GoFoldEvents = typeof __propDef.events;
export type GoFoldSlots = typeof __propDef.slots;
export default class GoFold extends SvelteComponentTyped<GoFoldProps, GoFoldEvents, GoFoldSlots> {
}
export {};
