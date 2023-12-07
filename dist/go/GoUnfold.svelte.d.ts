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
export type GoUnfoldProps = typeof __propDef.props;
export type GoUnfoldEvents = typeof __propDef.events;
export type GoUnfoldSlots = typeof __propDef.slots;
export default class GoUnfold extends SvelteComponentTyped<GoUnfoldProps, GoUnfoldEvents, GoUnfoldSlots> {
}
export {};
